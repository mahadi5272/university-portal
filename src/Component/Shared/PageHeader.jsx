import React from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const PageHeader = ({pageTitle, routeName}) => {
  return (
    <div className="bg-[#e9f0ea] py-14 md:px-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-[#333] mb-2">{pageTitle}</h1>
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <FaHome className="text-[#00a651]" />
          <span className="hover:text-[#00a651] cursor-pointer">Home</span>
          <FaChevronRight className="text-[10px]" />
          <span className="hover:text-[#00a651] cursor-pointer">{routeName}</span>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;