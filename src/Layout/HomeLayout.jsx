import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="relative flex-1 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/pinterest-video3.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10">
            <Outlet></Outlet>
        <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
