import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaChevronDown,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronRight,
} from "react-icons/fa";

const Navber = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  // স্ক্রল হ্যান্ডলার: ১০০ পিক্সেলের বেশি স্ক্রল করলে ন্যাভবার স্টিকি হবে
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // সাব-মেনু ডাটা
  const aboutData = {
    AUB: [
      { name: "History", link: "/history" },
      { name: "Vision & Mission", link: "/vision-mission" },
      { name: "Founder", link: "/founder" },
      { name: "Syndicate", link: "/syndicate" },
      { name: "Academic Council", link: "/academic-council" },
      { name: "Rules & Regulations", link: "/rules-regulations" },
    ],
    "AUB Authorities": [
      { name: "Board of Trustees", link: "/board-of-trustees" },
      { name: "Chairman", link: "/chairman" },
      { name: "Vice Chancellor", link: "/vice-chancellor" },
      { name: "Treasurer", link: "/treasurer" },
      { name: "Proctor", link: "/proctor" },
      { name: "Registrar", link: "/registrar" },
    ],
  };

  const departmentsData = {
    "The School of Science and Engineering": [
      { name: "Computer Science and Engineering", link: "/cse" },
    ],
    "The School of Business": [
      { name: "Business Administration", link: "/businessAdministration" },
    ],
    "The School of Arts": [
      { name: "English", link: "/english" },
      { name: "Bengali", link: "/bengali" },
      { name: "Islamic Studies", link: "/departmeIslamicStudiesnts" },
      { name: "Islamic History and Civilization", link: "/islamicHistoryAndCivilization" },
    ],
    "The School of Social Sciences": [
      { name: "Economics", link: "/economics" },
      { name: "Sociology and Anthropology", link: "/socilolgyAndAnthropology" },
      { name: "Social Work", link: "/socialWork" },
      { name: "Information Science and Library Management", link: "/informationAndLibraryManag" },
      { name: "Government and Politics", link: "/governmentAndPolitics" },
    ],
    "The School of Education and Training": [
      { name: "Education and Training", link: "/educationAndTraining" },
    ],
  };

  const eventsNoticesList = [
    { name: "Events", link: "/events" },
    { name: "Notices", link: "/notices" },
  ];

  const adminList = [
    { name: "Vice-Chancellor Office", link: "/vc-office" },
    { name: "Treasurer Office", link: "/treasurer-office" },
    { name: "Registrar Office", link: "/registrar-office" },
    { name: "Library Office", link: "/library-office" },
    { name: "Controller of Examination Office", link: "/controller-office" },
    { name: "Admission and Records", link: "/admission-records" },
    { name: "IT Division", link: "/it-division" },
    { name: "Public Relations Division", link: "/public-relations" },
  ];

  return (
    <>
      <nav
        className={`bg-white border-b border-gray-100 transition-all duration-300 z-[5000] ${
          isSticky
            ? "fixed top-0 left-0 w-full shadow-lg"
            : "relative max-w-7xl mx-auto rounded-md shadow-sm"
        }`}
      >
        <div className="px-4 md:px-10 flex justify-between items-center h-20">
          
          {/* Logo Section: স্ক্রল করলে লোগো আসবে, অন্যথায় লুকানো থাকবে */}
          <div className={`transition-all duration-500 flex items-center gap-2 ${isSticky ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5 pointer-events-none"}`}>
            <img src="https://aub.ac.bd/assets/images/logo/logo.png" alt="Logo" className="h-10" />
            <div className="leading-tight hidden sm:block">
              <span className="text-[#006a4e] font-bold text-[10px] block uppercase">Asian University</span>
              <span className="text-[#006a4e] font-semibold text-[8px] block">of Bangladesh</span>
            </div>
          </div>

          {/* ডেক্সটপ মেনু */}
          <ul className={`hidden lg:flex items-center gap-5 font-bold text-gray-600 uppercase text-[11px] transition-all duration-300 ${isSticky ? "mx-0" : "mx-auto"}`}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-[#006a4e]" : "hover:text-[#006a4e]"}>Home</NavLink>
            </li>

            {/* About Dropdown */}
            <li className="static py-8" onMouseEnter={() => setActiveMenu("About")} onMouseLeave={() => setActiveMenu(null)}>
              <span className="cursor-pointer hover:text-[#006a4e] flex items-center gap-1">About AUB <FaChevronDown className="text-[10px]" /></span>
              {activeMenu === "About" && (
                <div className="absolute top-20 left-0 w-full bg-white border-t-2 border-[#006a4e] shadow-2xl py-10 px-20 z-50">
                  <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10">
                    {Object.keys(aboutData).map((s) => (
                      <div key={s} className="space-y-4 text-left">
                        <h3 className="bg-[#f3f7f5] text-[#003d2b] font-bold text-sm px-4 py-2 border-l-4 border-[#006a4e]">{s}</h3>
                        <div className="flex flex-col gap-1">
                          {aboutData[s].map((i) => (
                            <Link key={i.name} className="text-gray-500 hover:text-[#006a4e] text-xs border-b border-gray-50 pb-1" to={i.link}>{i.name}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li><NavLink to="/admission" className="hover:text-[#006a4e]">Admission</NavLink></li>

            {/* Departments Dropdown */}
            <li className="static py-8" onMouseEnter={() => setActiveMenu("Dept")} onMouseLeave={() => setActiveMenu(null)}>
              <span className="cursor-pointer hover:text-[#006a4e] flex items-center gap-1">Departments <FaChevronDown className="text-[10px]" /></span>
              {activeMenu === "Dept" && (
                <div className="absolute top-20 left-0 w-full bg-white border-t-2 border-[#006a4e] shadow-2xl py-10 px-10 z-50">
                  <div className="max-w-7xl mx-auto grid grid-cols-12 gap-5">
                    <div className="col-span-9 grid grid-cols-3 gap-6 text-left">
                      {Object.keys(departmentsData).map((cat) => (
                        <div key={cat} className="space-y-2">
                          <h4 className="text-[#003d2b] font-bold text-[10px] bg-gray-50 p-2 border-l-2 border-[#006a4e] uppercase">{cat}</h4>
                          <ul className="space-y-1 pl-2 text-[11px] text-gray-500">
                            {departmentsData[cat].map((item) => (
                              <li key={item.name} className="hover:text-[#006a4e]"><Link to={item.link}>• {item.name}</Link></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="col-span-3 h-48 rounded-lg overflow-hidden shadow-lg">
                      <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1" className="w-full h-full object-cover" alt="campus" />
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Events Dropdown */}
            <li className="relative py-8" onMouseEnter={() => setActiveMenu("Events")} onMouseLeave={() => setActiveMenu(null)}>
              <span className="cursor-pointer hover:text-[#006a4e] flex items-center gap-1">Events & Notices <FaChevronDown className="text-[8px]" /></span>
              {activeMenu === "Events" && (
                <div className="absolute top-full left-0 w-40 bg-white shadow-xl border-t-2 border-[#006a4e] py-2">
                  {eventsNoticesList.map((i) => (
                    <Link key={i.name} className="block px-4 py-2 hover:bg-gray-50 text-[11px]" to={i.link}>{i.name}</Link>
                  ))}
                </div>
              )}
            </li>

            {/* Administration Dropdown */}
            <li className="relative py-8" onMouseEnter={() => setActiveMenu("Admin")} onMouseLeave={() => setActiveMenu(null)}>
              <span className="cursor-pointer hover:text-[#006a4e] flex items-center gap-1">Administration <FaChevronDown className="text-[8px]" /></span>
              {activeMenu === "Admin" && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-2 border-[#006a4e] py-2 text-left">
                  {adminList.map((i) => (
                    <Link key={i.name} className="block px-4 py-2 hover:bg-gray-50 text-[11px]" to={i.link}>{i.name}</Link>
                  ))}
                </div>
              )}
            </li>

            <li><NavLink to="/campus-life" className="hover:text-[#006a4e]">Campus Life</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-[#006a4e]">Contact</NavLink></li>
          </ul>

          {/* Search Button */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#00a651] text-white px-3 py-2 rounded font-bold text-[10px] hover:bg-[#006a4e] transition-all shadow-sm">
              <FaSearch className="text-[10px]" />
              <span className="hidden sm:inline uppercase">Search Result</span>
            </button>
            <button className="lg:hidden text-2xl text-gray-700" onClick={() => setIsMobileMenuOpen(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* মোবাইল সাইডবার */}
      <div className={`fixed inset-0 bg-black/60 z-[9999] lg:hidden transition-all ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`fixed top-0 right-0 w-[80%] h-full bg-[#1a1a1a] text-white p-6 overflow-y-auto transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
            <div className="flex items-center gap-2">
              <img src="https://aub.ac.bd/assets/images/logo/logo.png" className="h-8" alt="logo" />
              <span className="text-[10px] font-bold uppercase leading-tight">Asian University</span>
            </div>
            <button className="text-2xl" onClick={() => setIsMobileMenuOpen(false)}><FaTimes /></button>
          </div>
          <ul className="space-y-4 font-bold uppercase text-[12px] text-left">
            <li className="border-b border-gray-800 pb-2"><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            {/* মোবাইল সাব-মেনু (About, Dept, Admin) */}
            {[
              { title: "About AUB", data: [...aboutData.AUB, ...aboutData["AUB Authorities"]] },
              { title: "Departments", data: Object.values(departmentsData).flat() },
              { title: "Events & Notices", data: eventsNoticesList },
              { title: "Administration", data: adminList },
            ].map((menu) => (
              <li key={menu.title} className="border-b border-gray-800 pb-2">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setMobileAccordion(mobileAccordion === menu.title ? null : menu.title)}>
                  {menu.title} <FaChevronRight className={`text-[10px] transition-transform ${mobileAccordion === menu.title ? "rotate-90 text-[#00a651]" : ""}`} />
                </div>
                {mobileAccordion === menu.title && (
                  <ul className="pl-4 mt-2 space-y-2 normal-case font-normal text-gray-400">
                    {menu.data.map((item) => (
                      <li key={item.name}><Link to={item.link} onClick={() => setIsMobileMenuOpen(false)}>{item.name}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="border-b border-gray-800 pb-2"><Link to="/campus-life" onClick={() => setIsMobileMenuOpen(false)}>Campus Life</Link></li>
            <li className="border-b border-gray-800 pb-2"><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navber;