import React from "react";
import LogoImg from "../assets/logo.png";
import { Link, NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiServiceLine } from "react-icons/ri";

const Navbar = () => {

  const link = <>
    <NavLink
        className={({ isActive }) =>
          `mr-2 p-2 transition-all  duration-10 ${
            isActive
              ? "text-black border-b-2 border-blue-200"
              : "hover:bg-white text-black"
          }`
        }
        to="/"
      >
        {" "}
        <div className="flex items-center gap-1">
          {" "}
          <IoHomeOutline />
          Home{" "}
        </div>{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2  transition-all  duration-10 ${
            isActive
              ? "text-black border-b-2 border-blue-200"
              : "hover:bg-white text-black"
          }`
        }
        to="/services"
      >
        {" "}
        <div className="flex items-center gap-1">
          <RiServiceLine /> Services{" "}
        </div>{" "}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2  transition-all  duration-10 ${
            isActive
              ? "text-black border-b-2 border-blue-200"
              : "hover:bg-white text-black"
          }`
        }
        to="/profile"
      >
        
        <div className="flex items-center gap-1">
          <CgProfile /> My Profile
        </div>
      </NavLink>
</>



  return (
    <div className="navbar bg-[#F9FAFB] shadow-md ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
            
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img className="w-15" src={LogoImg} alt="Pet Logo" />
          <p className="text-xl font-bold">Pet Care</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end gap-2 ">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-400 hover:bg-blue-500  text-white">Register</button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-blue-400 hover:bg-blue-500  text-white">Log In</button>
        
      </div>
    </div>
  );
};

export default Navbar;
