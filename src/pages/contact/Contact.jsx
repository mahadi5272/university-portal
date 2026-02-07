import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import ContactFrom from "../../Component/contacts/contactFrom";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header/Breadcrumb */}
      <div className="bg-[#f3f7f5] py-4 md:px-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-[#333] mb-2">Contacts</h1>
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <FaHome className="text-[#00a651]" />
            <span className="hover:text-[#00a651] cursor-pointer">Home</span>
            <FaChevronRight className="text-[10px]" />
            <span className="hover:text-[#00a651] cursor-pointer">Contact</span>
          </nav>
        </div>
      </div>

      <div>
        <ContactFrom></ContactFrom>
      </div>
    </div>
  );
};

export default Contact;
