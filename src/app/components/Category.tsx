"use client";

import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaMobileAlt, FaLaptop, FaClock, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";

const Categories = () => {
  const categories = [
    { id: 1, name: "Phones", icon: <FaMobileAlt size={40} /> },
    { id: 2, name: "Computers", icon: <FaLaptop size={40} /> },
    { id: 3, name: "Smart Watches", icon: <FaClock size={40} /> },
    { id: 4, name: "Camera", icon: <FaCamera size={40} /> },
    { id: 5, name: "Headphones", icon: <FaHeadphones size={40} /> },
    { id: 6, name: "Gaming", icon: <FaGamepad size={40} /> },
  ];

  return (
    <div className="px-4 py-8 md:px-16 lg:px-24">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3 text-center mb-3">
          <div className="w-[20px] h-[40px] bg-[#DB4444] rounded"></div>
          <div className="flex items-center justify-center">
            <h3 className="font-semibold text-[#DB4444]">Categories</h3>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-black transition duration-200">
            <AiOutlineLeft size={24} />
          </button>
          <button className="text-gray-500 hover:text-black transition duration-200">
            <AiOutlineRight size={24} />
          </button>
        </div>
      </div>

      {/* Main Heading */}
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Browse by Category</h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group bg-white w-[170px] h-[145px] rounded-lg shadow-md cursor-pointer flex flex-col items-center justify-center p-4 hover:shadow-lg transition duration-300"
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-[#DB4444] opacity-0 group-hover:opacity-90 transition duration-300 rounded-lg"></div>

            {/* Icon */}
            <div
              className="relative z-10 text-gray-800 group-hover:text-white transition duration-300"
            >
              {category.icon}
            </div>

            {/* Category Name */}
            <h4 className="relative z-10 text-center text-gray-800 text-sm font-semibold mt-2 group-hover:text-white transition duration-300">
              {category.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
