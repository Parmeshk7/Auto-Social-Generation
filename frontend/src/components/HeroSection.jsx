import React from "react";
import heroSection from "../assets/hero_section.svg";

const HeroSection = () => {
  return (
    <div className="py-5 px-4 border-b">
      <div className="flex justify-center items-center pt-10">
        <div className="flex justify-between items-center lg:w-3/4">
          <div className="h-96 flex flex-col justify-center items-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold py-3 text-center">
              Know Your <span className="text-red-500">Leads</span>, Grow Your <span className="text-green-500">Business</span>
            </div>
            <div className="text-center py-3 md:w-3/4">
              Leverage comprehensive social media insights to make informed B2B
              decisions and boost your business growth.
            </div>
            <a href="/insights">
              <button 
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Get Started
              </button>
            </a>
          </div>
          <div className="hidden md:block">
            <img src={heroSection} width={400} />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;
