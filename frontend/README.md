# Auto Socials Generation

## Overview
Auto Socials Generation is a web application designed to help businesses working on a Business-to-Business (B2B) approach gather information about potential customers' social media presence. The application accepts a list of business domains and retrieves LinkedIn information, such as the number of employees, to help gauge the popularity and size of the business. This information can be used to tailor service offerings and pricing. The application saves the collected data for future analysis.

## Implementation
The project is implemented using Java Spring Boot for the backend and React.js for the frontend. It utilizes Google Custom Search API to search for LinkedIn pages by appending the domain name with "LinkedIn" and sending it as a search query. The results are filtered to find LinkedIn company pages. Jsoup is used to scrape the LinkedIn page and extract the required data using CSS selectors. The data is then stored in a database, with the capability to update existing entries.

## Prerequisites
- Java JDK 17 or later
- Node.js and npm
- Maven

## Steps to Run
1.  Clone the repository
2.  Open terminal in the root folder
3.  Install the Dependencies
    ```npm install```
4.  Start the Application
    ```npm run dev```
5.  Application is running on http://localhost:5173


    