import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaSearch, FaBars, FaTimes, FaChevronRight } from "react-icons/fa";

const Navber = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  // মেনু ডাটা
  const aboutData = {
    AUB: ["History", "Vision & Mission", "Founder", "Syndicate", "Academic Council", "Rules & Regulations"],
    "AUB Authorities": ["Board of Trustees", "Chairman", "Vice Chancellor", "Treasurer", "Proctor", "Registrar"],
  };

  const departmentsData = {
    "The School of Science and Engineering": ["Computer Science and Engineering", "Mechanical Engineering"],
    "The School of Business": ["Business Administration"],
    "The School of Arts": ["English", "Bengali", "Islamic Studies", "Islamic History and Civilization"],
    "The School of Social Sciences": ["Economics", "Sociology and Anthropology", "Social Work", "Information Science and Library Management", "Government and Politics"],
    "The School of Education and Training": ["Education and Training"],
  };

  const eventsNoticesList = ["Events", "Notices"];
  const adminList = ["Vice-Chancellor Office", "Treasurer Office", "Registrar Office", "Library Office", "Controller of Examination Office", "Admission and Records", "IT Division", "Public Relations Division"];

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm z-[999] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center h-20">
        
        {/* ১. লোগো সেকশন (বামে) */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#006a4e] rounded flex items-center justify-center text-white font-bold">A</div>
          <div className="hidden sm:block">
            <h1 className="text-[12px] font-bold leading-tight uppercase text-[#006a4e]">Asian University</h1>
            <p className="text-[10px] font-semibold text-gray-500 uppercase">of Bangladesh</p>
          </div>
        </div>

        {/* ২. ডেক্সটপ মেনু (মাঝখানে - ৮টি আইটেম) */}
        <ul className="hidden lg:flex items-center gap-5 font-bold text-gray-600 uppercase text-[11px]">
          <li><NavLink to="/" className="hover:text-[#006a4e]">Home</NavLink></li>
          
          <li className="static py-8" onMouseEnter={() => setActiveMenu("About AUB")} onMouseLeave={() => setActiveMenu(null)}>
            <span className="cursor-pointer hover:text-[#006a4e]">About AUB <FaChevronDown className="text-[10px] inline ml-1" /></span>
            {activeMenu === "About AUB" && (
               <div className="absolute top-20 left-0 w-full bg-white border-t-2 border-[#006a4e] shadow-2xl py-10 px-20 z-50">
                 <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 border-l-4 border-gray-100 pl-10">
                   {Object.keys(aboutData).map((s) => (
                     <div key={s} className="space-y-4 text-left">
                       <h3 className="bg-[#f3f7f5] text-[#003d2b] font-bold text-sm px-4 py-2 border-l-4 border-[#006a4e]">{s}</h3>
                       <div className="grid grid-cols-1 gap-1">
                         {aboutData[s].map((i) => <Link key={i} className="text-gray-500 hover:text-[#006a4e] text-xs border-b border-gray-50 pb-1" to="/">{i}</Link>)}
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            )}
          </li>

          <li><NavLink to="/Admission" className="hover:text-[#006a4e]">Admission</NavLink></li>

          <li className="static py-8" onMouseEnter={() => setActiveMenu("Departments")} onMouseLeave={() => setActiveMenu(null)}>
            <span className="cursor-pointer hover:text-[#006a4e]">Departments <FaChevronDown className="text-[10px] inline ml-1" /></span>
            {activeMenu === "Departments" && (
               <div className="absolute top-20 left-0 w-full bg-white border-t-2 border-[#006a4e] shadow-2xl py-10 px-10 z-50">
                 <div className="max-w-7xl mx-auto grid grid-cols-12 gap-5">
                    <div className="col-span-9 grid grid-cols-3 gap-6 text-left text-gray-500">
                       {Object.keys(departmentsData).map(cat => (
                         <div key={cat} className="space-y-2">
                            <h4 className="text-[#003d2b] font-bold text-[10px] bg-gray-50 p-2 border-l-2 border-[#006a4e] uppercase">{cat}</h4>
                            <ul className="space-y-1 pl-2 text-[11px]">
                               {departmentsData[cat].map(item => <li key={item} className="hover:text-[#006a4e] cursor-pointer">• {item}</li>)}
                            </ul>
                         </div>
                       ))}
                    </div>
                    <div className="col-span-3 h-48 rounded-lg overflow-hidden shadow-lg"><img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1" className="w-full h-full object-cover" alt="campus" /></div>
                 </div>
               </div>
            )}
          </li>

          <li className="relative py-8" onMouseEnter={() => setActiveMenu("Events")} onMouseLeave={() => setActiveMenu(null)}>
            <span className="cursor-pointer hover:text-[#006a4e]">Events & Notices <FaChevronDown className="text-[8px] inline" /></span>
            {activeMenu === "Events" && (
              <div className="absolute top-full left-0 w-40 bg-white shadow-xl border-t-2 border-[#006a4e] py-2">
                {eventsNoticesList.map(i => <Link key={i} className="block px-4 py-2 hover:bg-gray-50 text-[11px]" to="/">{i}</Link>)}
              </div>
            )}
          </li>

          <li className="relative py-8" onMouseEnter={() => setActiveMenu("Admin")} onMouseLeave={() => setActiveMenu(null)}>
            <span className="cursor-pointer hover:text-[#006a4e]">Administration <FaChevronDown className="text-[8px] inline" /></span>
            {activeMenu === "Admin" && (
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-2 border-[#006a4e] py-2">
                {adminList.map(i => <Link key={i} className="block px-4 py-2 hover:bg-gray-50 text-[11px]" to="/">{i}</Link>)}
              </div>
            )}
          </li>

          {/* ডেক্সটপে Campus Life আবার যোগ করা হলো */}
          <li><NavLink to="/campus-life" className="hover:text-[#006a4e]">Campus Life</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-[#006a4e]">Contact</NavLink></li>
        </ul>

        {/* ৩. ডানদিকের বাটন ও হ্যামবার্গার (Right Side) */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#00a651] text-white px-3 py-2 rounded font-bold text-[10px] hover:bg-[#006a4e] transition-all shadow-sm whitespace-nowrap">
            <FaSearch className="text-[10px]" /> <span className="hidden xs:inline">Search Result</span>
          </button>
          
          {/* Hamburger Icon - Right Aligned */}
          <button className="lg:hidden text-2xl text-gray-700" onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* ৪. মোবাইল সাইডবার (ডান থেকে আসবে) */}
      <div className={`fixed inset-0 bg-black/60 z-[1001] lg:hidden transition-all ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`fixed top-0 right-0 w-[80%] h-full bg-[#1a1a1a] text-white p-6 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#00a651] rounded flex items-center justify-center font-bold">A</div>
                <span className="text-[10px] font-bold uppercase leading-tight">Asian University<br/>of Bangladesh</span>
             </div>
             <button className="text-2xl" onClick={() => setIsMobileMenuOpen(false)}><FaTimes /></button>
          </div>

          <ul className="space-y-4 font-bold uppercase text-[12px]">
            <li className="border-b border-gray-800 pb-2"><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            
            {/* মোবাইল ড্রপডাউন সিস্টেম */}
            {["About AUB", "Departments", "Events & Notices", "Administration"].map((menu) => (
              <li key={menu} className="border-b border-gray-800 pb-2">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setMobileAccordion(mobileAccordion === menu ? null : menu)}>
                  {menu} <FaChevronRight className={`text-[10px] transition-transform ${mobileAccordion === menu ? "rotate-90 text-[#00a651]" : ""}`} />
                </div>
              </li>
            ))}

            <li className="border-b border-gray-800 pb-2"><Link to="/campus-life" onClick={() => setIsMobileMenuOpen(false)}>Campus Life</Link></li>
            <li className="border-b border-gray-800 pb-2"><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;