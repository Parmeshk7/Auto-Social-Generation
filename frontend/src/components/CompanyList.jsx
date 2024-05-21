import React from "react";
import CompanyDetailsCard from "./CompanyDetailsCard";

const CompanyList = ({ companies, title }) => {
  return (
    <div>
      
      <div>
        {companies &&
          companies.map((company, index) => <CompanyDetailsCard key={index} companyDetails={company} />)}
      </div>
    </div>
  );
};

export default CompanyList;
