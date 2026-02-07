import React from "react";
import Navber from "../Sheard/Navber";
import Footer from "../Sheard/Footer";
import { Outlet } from "react-router";
import Topheader from "../Component/Home/TopHeader";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen font-sans">
      <header className="w-full relative ">
        {/* টপ হেডার: এর প্যাডিং বাড়ানো হয়েছে যাতে নেভবার বসার জায়গা পায় */}
        <div className="pb-10 bg-[#006a4e]">
          <Topheader />
        </div>
        
        {/* নেভবার: এটিকে নেতিবাচক মার্জিন দিয়ে সবুজের ওপর তোলা হয়েছে */}
        <div className="max-w-[95%] lg:max-w-7xl mx-auto -mt-12 px-4">
          <div className="shadow-2xl rounded-md ">
             <Navber />
          </div>
        </div>
      </header>
      
      {/* মেইন কন্টেন্ট: এটি নেভবারের নিচ থেকে শুরু হবে এবং ব্যানারের সাথে মিশে যাবে */}
      <main className="">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;