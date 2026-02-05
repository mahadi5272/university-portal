import React from "react";
import Navber from "../Sheard/Navber";
import { Outlet } from "react-router";
import Footer from "../Sheard/Footer";
const MainLayout = () => {
  return <div>
    <header>
      <Navber></Navber>
    </header>
    <main>
      <Outlet></Outlet>
    </main>
    
      <Footer></Footer>
    
  </div>;
};

export default MainLayout;
