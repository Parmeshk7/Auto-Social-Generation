package com.social.AutoSocialGeneration.service;

import com.social.AutoSocialGeneration.model.entity.Company;

import java.util.List;

public interface LinkedInInsightService {

    public String searchLinkedInPage(String domainName);
    public Company scrapCompanyData(String linkedinUrl, String domainName);
    public List<Company> fetchAllCompanyDetails();

}
