import React, { useRef, useState } from "react";
import insightSvg from "../assets/domain_insight.svg";
import CompanyList from "../components/CompanyList";
import { useNavigate } from "react-router-dom";
import { fetchLinkedInInfo } from "../services/companyDetailsService";
import Loader from "../components/Loader";
import MessageDisplay from "../components/MessageDisplay";

const DomainInsights = () => {
  const navigate = useNavigate();
  const resultsRef = useRef(null);
  const [domains, setDomains] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const handleGetInsightBtn = (e) => {
    e.preventDefault();
    setLoading(true);
    setNoData(false);
    resultsRef.current.scrollIntoView({ behavior: "smooth" });

    fetchLinkedInInfo(domains)
      .then((results) => {
        setResults(results);
        if (results.length === 0) {
          setNoData(true);
        }
      })
      .catch((error) => {
        setNoData(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
 

  return (
    <div className="min-h-screen pt-10">
      <div className="py-20 px-10">
        <div className="flex items-center justify-center md:justify-normal">
          <div className="w-full md:w-1/2 md:ps-20 self-end">
            <div className="text-2xl md:text-3xl font-semibold capitalize py-1">
              Unlock domain <span className="text-red-500">insights</span>
            </div>
            <div className="capitalize text-center text-2xl md:text-2xl font-semibold py-1">
              with a simple <span className="text-blue-500">search.</span>
            </div>
            <div id="searchBox" className="py-10">
              <form
                className="flex items-center md:justify-normal justify-center"
                onSubmit={handleGetInsightBtn}
              >
                <div className="w-10/12 mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                  <div className="px-4 py-2 bg-white rounded-t-lg">
                    <textarea
                      id="comment"
                      rows={20}
                      className="w-full px-0 text-sm text-gray-900 focus:outline-none bg-white border-0 focus:ring-0 resize-none"
                      placeholder="Enter Domain Name for Insights..."
                      required
                      value={domains}
                      onChange={(e) => setDomains(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-end px-3 py-2 border-t">
                    <button
                    type="button"
                    onClick={() => setDomains("")}
                    className="inline-flex items-center me-2 py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-700 rounded-lg focus:ring-4 focus:ring-slate-200 hover:bg-slate-800">
                        Clear
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                    >
                      {loading ? "Loading..." : "Get Insights"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side  */}
          <div className="hidden md:block w-1/2">
            <img src={insightSvg} width={500} />
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div ref={resultsRef} className="min-h-80">
        {(loading || noData || (results && results.length > 0)) && (
          <div>
            <div className="text-3xl font-semibold text-center">Results</div>
            <hr className="w-48 h-1 mx-auto bg-blue-800 border-0 rounded mt-2 mb-8" />
          </div>
        )}
        {loading && (
          <div className="text-center h-96 flex justify-center items-center ">
            <Loader />
          </div>
        )}
        {!loading && results && results.length > 0 && (
          <div>
            <CompanyList companies={results} />
          </div>
        )}
        {!loading && noData && (
          <div className="text-center h-96 flex justify-center items-center">
            <MessageDisplay message={"No Data Found"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainInsights;
