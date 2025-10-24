import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";

const AuthLayout = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
