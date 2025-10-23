import { use } from "react";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import LogoImg from "../assets/logo.png";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("logout successfully")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Mewssage;

        alert(errorCode, errorMessage);
      });
  };

  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2 transition-all  duration-10 ${
            isActive
              ? "text-black border-b-2 border-blue-300"
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
              ? "text-black border-b-2 border-blue-300"
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
              ? "text-black border-b-2 border-blue-300"
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
  );

  return (
    <div className="navbar bg-[#F9FAFB] shadow-md md:px-15">
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
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <img
        className="w-15 rounded-full"
        src={`${user ? user.photoURL : userIcon}`}
        alt=""
      />
      <div className="navbar-end gap-2 ">
        {user ? (
          <button
            onClick={handleLogout}
            to="/auth/register"
            className="btn  sm:btn-sm md:btn-md lg:btn-lg text-white hover:bg-gray-600  bg-gray-800 hover:text-white rounded-md"
          >
            LogOut
          </button>
        ) : (
          <div>
            <Link
              to="/auth/login"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  text-white hover:bg-gray-600  bg-gray-800 hover:text-white rounded-md"
            >
              {" "}
              Log In{" "}
            </Link>

            <Link
              to="/auth/register"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  text-white hover:bg-gray-600  bg-gray-800 hover:text-white rounded-md"
            >
              Register{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
