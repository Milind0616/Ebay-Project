import React from "react";

const Navbar2 = () => {
  return (
    <section className="flex items-center justify-center h-20 w-full bg-white border-b-2 border-gray-300">
      {/* eBay Logo */}
      <div className="flex text-5xl font-extrabold space-x-1 ml-6">
        <span className="text-red-600">e</span>
        <span className="text-blue-600">b</span>
        <span className="text-yellow-500">a</span>
        <span className="text-green-600">y</span>
      </div>

      {/* Shop by Category */}
      <div className="ml-5 text-lg cursor-pointer hover:text-gray-100">
        <p>
          Shop by <br /> Category <i className="fa-solid fa-angle-down"></i>
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center ml-8">
        <input
          type="text"
          placeholder="Search for anything"
          className="h-10 w-[600px] px-5 text-lg border border-gray-400 rounded-full outline-none"
        />
        <button className="ml-2 h-11 w-40 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
          Search
        </button>
      </div>

      {/* Advanced Search */}
      <div className="ml-6 text-lg text-gray-600 cursor-pointer hover:text-blue-600 transition-opacity opacity-70 hover:opacity-100">
        Advanced
      </div>
    </section>
  );
};

export default Navbar2;
