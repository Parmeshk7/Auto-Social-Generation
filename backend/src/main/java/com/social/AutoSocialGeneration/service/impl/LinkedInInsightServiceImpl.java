package com.social.AutoSocialGeneration.service.impl;

import com.social.AutoSocialGeneration.exception.CustomException;
import com.social.AutoSocialGeneration.model.dto.GoogleSearchResponse;
import com.social.AutoSocialGeneration.model.dto.SearchItem;
import com.social.AutoSocialGeneration.model.entity.Company;
import com.social.AutoSocialGeneration.repository.CompanyRepository;
import com.social.AutoSocialGeneration.service.LinkedInInsightService;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class LinkedInInsightServiceImpl implements LinkedInInsightService {

    private final WebClient webClient;
    private final CompanyRepository companyRepository;
    private ModelMapper modelMapper;
    @Value("${google.api.key}")
    private String googleApiKey;

    @Value("${google.custom.search.engine.id}")
    private String cx;
    public LinkedInInsightServiceImpl(WebClient webClient, CompanyRepository companyRepository, ModelMapper modelMapper) {
        this.webClient = webClient;
        this.companyRepository = companyRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public String searchLinkedInPage(String domainName) {
        String url = String.format("?key=%s&cx=%s&q=%s", googleApiKey, cx, domainName + " linkedin");

        return webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(GoogleSearchResponse.class)
                .flatMapIterable(GoogleSearchResponse::getItems)
                .filter(item -> item.getLink().contains("linkedin.com/company"))
                .map(SearchItem::getLink)
                .next()
                .block();
    }

    public Company scrapCompanyData(String linkedinUrl, String domainName){
        try{

            Document document = Jsoup.connect(linkedinUrl).get();
            Element nameElement = document.selectFirst(".top-card-layout__title");
            String companyName = nameElement != null ? nameElement.text() : "Company name not found";

            Element industryElement = document.selectFirst("div[data-test-id=about-us__industry] dd");
            String industry = industryElement != null ? industryElement.text() : "Industry not found";

            Element companySizeElement = document.selectFirst("div[data-test-id=about-us__size] dd");
            String companySize = companySizeElement != null ? companySizeElement.text() : "Company size not found";

            Element typeElement = document.selectFirst("div[data-test-id=about-us__organizationType] dd");
            String type = typeElement != null ? typeElement.text() : "Type not found";

            Element employeeCountElement = document.selectFirst("a.face-pile__cta");
            String employeeCount = employeeCountElement != null ? employeeCountElement.text() : "Employee count not found";

            Company company = Company.builder()
                    .name(companyName)
                    .industry(industry)
                    .companySize(companySize)
                    .type(type)
                    .domainName(domainName)
                    .employeeCount(Integer.parseInt(Arrays
                            .stream(employeeCount.split(" ")).toList()
                            .get(2).replace(",", "")))
                    .build();

            Optional<Company> existingData = companyRepository.findByDomainName(domainName);
            if(existingData.isPresent()){
                modelMapper.map(company, existingData);
                return companyRepository.findById(existingData.get().getId())
                        .orElseThrow(() -> new CustomException("Unable to update data", HttpStatus.INTERNAL_SERVER_ERROR.value()));
            }

            return companyRepository.save(company);
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Company> fetchAllCompanyDetails() {
        return companyRepository.findAll();
    }

}
