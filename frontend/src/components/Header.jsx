import React from "react";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="py-3 px-8 md:py-4 md:px-10 fixed w-screen border-b shadow bg-white flex items-center justify-between">
      <div>
        <a href="/" className="flex items-center">
            <img src={logo} width={45} />
          <div className="text-xl md:text-2xl font-semibold cursor-pointer ms-4">
            Auto Social Generation
          </div>
        </a>
      </div>
      <div>
        <a href="/archive">
          <button
            type="button"
            className="text-white flex justify-between items-center bg-red-700 hover:bg-red-800 focus:ring-4 rounded-md focus:ring-red-300 font-medium text-sm px-3 md:px-5 py-1.5 md:py-2.5 focus:outline-none"
          >
            Archive
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
