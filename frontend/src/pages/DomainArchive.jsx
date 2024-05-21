import React, { useEffect, useState } from "react";
import CompanyList from "../components/CompanyList";
import {
  fetchAllInsights,
  fetchLinkedInInfo,
} from "../services/companyDetailsService";
import Loader from "../components/Loader";
import MessageDisplay from "../components/MessageDisplay";

const DomainArchive = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllInsights()
      .then((results) => {
        setCompanies(results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching company data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-[85vh] py-20">
      <div className="mt-5">
        <div>
          <div className="text-3xl font-semibold text-center">Archive</div>
          <hr className="w-48 h-1 mx-auto bg-blue-800 border-0 rounded mt-2 mb-8" />
        </div>
        <div>
          {loading ? (
            <div className="text-center h-96 flex justify-center items-center ">
              <Loader />
            </div>
          ) : companies && companies.length > 0 ? (
            <CompanyList companies={companies} />
          ) : (
            <div className="text-center h-96 flex justify-center items-center">
              <MessageDisplay message={"No Data Archived"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainArchive;
