import React from "react";

const CompanyDetailsCard = ({companyDetails}) => {
  return (
    <section className="py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl py-3 px-10 xl:py-5 xl:px-8 bg-gray-50 flex items-center justify-between flex-col gap-5 lg:flex-row">
          <div className="w-full lg:w-2/12">
            <h2 className="font-manrope text-xl font-semibold text-gray-900 mb-4 text-center lg:text-left">
              {companyDetails.name}
            </h2>
            <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
              {companyDetails.domainName}
            </p>
          </div>
          <div className="w-full">
            <div className="flex flex-col flex-1 gap-5 lg:gap-0 lg:flex-row lg:justify-between">
              <div className="block w-full lg:w-4/12">
                <div className="font-manrope font-semibold text-lg text-indigo-600 mb-3 text-center lg:text-left">
                  {companyDetails.industry}
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Industry
                </span>
              </div>
              <div className="block px-3"> 
                <div className="font-manrope font-semibold text-lg text-indigo-600 mb-3 text-center lg:text-left">
                  {companyDetails.companySize}
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Company Size
                </span>
              </div>
              <div className="block px-3">
                <div className="font-manrope font-semibold text-lg text-indigo-600 mb-3 text-center lg:text-left">
                  {companyDetails.employeeCount}
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Employee Count
                </span>
              </div>
              <div className="block px-3">
                <div className="font-manrope font-semibold text-lg text-indigo-600 mb-3 text-center lg:text-left">
                  {companyDetails.type}
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Type
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetailsCard;
