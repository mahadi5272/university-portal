import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-[#006a4e] text-white py-2 px-6 md:px-12 flex justify-between items-center text-sm">
      <div className="hidden md:block italic">Asian University of Bangladesh</div>
      <div className="flex gap-6 items-center mx-auto md:mx-0">
        <a href="mailto:info@aub-ac.com" className="flex items-center gap-2 hover:text-yellow-400">
          <FaEnvelope /> info@aub-ac.com
        </a>
        <span className="flex items-center gap-2">
          <FaPhoneAlt /> +880 1234-567890
        </span>
      </div>
    </div>
  );
};

export default TopHeader;