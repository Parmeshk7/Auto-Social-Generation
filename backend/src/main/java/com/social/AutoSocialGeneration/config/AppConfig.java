package com.social.AutoSocialGeneration.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class AppConfig {

    @Bean
    public WebClient webClient() {
        return WebClient.builder().baseUrl("https://www.googleapis.com/customsearch/v1").build();
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
