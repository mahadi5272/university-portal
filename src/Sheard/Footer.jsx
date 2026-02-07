import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* কলাম ১: লোগো ও ঠিকানা */}
        <div className="lg:col-span-1.5 space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://aub.ac.bd/assets/images/logo.png" 
              alt="AUB Logo" 
              className="h-14"
            />
            <h2 className="text-lg font-bold leading-tight">
              Asian University <br /> of Bangladesh
            </h2>
          </div>
          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-gray-300" />
              <p>Bangabandhu Road, Tongabari, Ashulia, Dhaka</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-300" />
              <p>info@aub-ac.com</p>
            </div>
          </div>
        </div>

        {/* কলাম ২: STUDENT */}
        <div>
          <h3 className="text-md font-bold mb-6 tracking-wider border-b border-gray-700 pb-2 inline-block">STUDENT</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/campus-life" className="hover:text-white">Campus Life</Link></li>
            <li><Link to="/library-office" className="hover:text-white">Library</Link></li>
            <li><Link to="/rules-regulations" className="hover:text-white">Rules & Regulation</Link></li>
            <li><Link to="/" className="hover:text-white">Tuition Fees</Link></li>
            <li><Link to="/" className="hover:text-white">Waiver & Scholarships</Link></li>
          </ul>
        </div>

        {/* কলাম ৩: UNIVERSITY */}
        <div>
          <h3 className="text-md font-bold mb-6 tracking-wider border-b border-gray-700 pb-2 inline-block">UNIVERSITY</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/board-of-trustees" className="hover:text-white">Board of Trustees</Link></li>
            <li><Link to="/syndicate" className="hover:text-white">Syndicate</Link></li>
            <li><Link to="/notices" className="hover:text-white">Notices</Link></li>
            <li><Link to="/proctor" className="hover:text-white">Proctor</Link></li>
            <li><Link to="/" className="hover:text-white">IQAC</Link></li>
          </ul>
        </div>

        {/* কলাম ৪: QUICK LINKS */}
        <div>
          <h3 className="text-md font-bold mb-6 tracking-wider border-b border-gray-700 pb-2 inline-block">QUICK LINKS</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-white">FAQS</Link></li>
            <li><Link to="/" className="hover:text-white">Transportation</Link></li>
          </ul>
        </div>

        {/* কলাম ৫: LOCATION MAP */}
        <div className="lg:col-span-1">
          <h3 className="text-md font-bold mb-6 tracking-wider border-b border-gray-700 pb-2 inline-block">LOCATION MAP</h3>
          <div className="rounded-lg overflow-hidden border border-gray-700 h-40">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.532367123456!2d90.321!3d23.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c!2sAsian%20University%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v123456789" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="AUB Location"
            ></iframe>
          </div>
        </div>

      </div>
      
      {/* কপিরাইট সেকশন */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} Asian University of Bangladesh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;