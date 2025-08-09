import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const Layout = () => {
  return (
    <div className="min-h-full flex flex-col justify-around">
      <Navbar />
      <div className="min-h-[70vh] mt-24 pt">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
