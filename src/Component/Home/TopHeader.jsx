import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Topheader = () => {
  return (
    <div className="text-white pt-6 pb-12 px-6 md:px-12 flex justify-between items-start">
      {/* বাম দিকের লোগো ও নাম */}
      <div className="flex items-center gap-4">
        <div className="bg-white p-1 rounded-sm shadow-md">
          <img 
            src="https://aub.ac.bd/assets/images/logo/logo.png" 
            alt="AUB Logo" 
            className="h-12 w-auto"
          />
        </div>
        <div className="hidden md:block">
          <h1 className="text-xl font-bold italic tracking-tight leading-none">
            Asian University of Bangladesh
          </h1>
        </div>
      </div>

      {/* ডান দিকের কন্টাক্ট ইনফো */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-end md:items-center text-sm">
        <a href="mailto:info@aub-ac.com" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
          <FaEnvelope className="text-yellow-400" /> 
          <span className="hidden sm:inline">Email us:</span> info@aub-ac.com
        </a>
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-400" /> 
          +880 1234-567890
        </span>
      </div>
    </div>
  );
};

export default Topheader;