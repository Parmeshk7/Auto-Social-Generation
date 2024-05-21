package com.social.AutoSocialGeneration.controller;

import com.social.AutoSocialGeneration.model.entity.Company;
import com.social.AutoSocialGeneration.service.LinkedInInsightService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/linkedin")
@CrossOrigin(origins = "https://auto-social-generation.vercel.app")
public class LinkedInInsightController {

    private final LinkedInInsightService linkedInInsightService;

    public LinkedInInsightController(LinkedInInsightService linkedInInsightService) {
        this.linkedInInsightService = linkedInInsightService;
    }

    @PostMapping("/insights")
    public List<Company> getCompanyDetails(@RequestBody List<String> domainNames) {
        return domainNames.parallelStream()
                .map(domain -> {
                    String linkedinUrl = linkedInInsightService.searchLinkedInPage(domain);
                    return linkedInInsightService.scrapCompanyData(linkedinUrl, domain);
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/insights")
    public List<Company> getAllCompanyDetails() {
        return linkedInInsightService.fetchAllCompanyDetails();
    }
}


