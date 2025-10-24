import { use } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import LogoImg from "../assets/logo.png";
import { AuthContext } from "../Context/AuthContext";
import { MdDriveFileRenameOutline, MdMarkEmailRead } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        // alert("logout successfully")
        toast.success("Successfully LogOut!");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.Mewssage;
        // alert(errorCode, errorMessage);
        toast.error(error.message || "Failed to logOut. Please try again.");
      });
  };

  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          `mr-2 p-2 transition-all  duration-10 ${
            isActive
              ? "text-white border-b-2 border-[#c67033]"
              : " text-[#c67033]"
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
              ? "text-white border-b-2 border-[#c67033]"
              : " text-[#c67033]"
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
              ? "text-white border-b-2 border-[#c67033]"
              : " text-[#c67033]"
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
    <div className="navbar bg-[#153f67] text-white shadow-md md:px-15">
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
          <img className="w-20" src={LogoImg} alt="Pet Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>

      <div className="navbar-end gap-2 ">
        {user ? (
          <div className="flex items-center gap-5">
            

            <Link to={"/profile"} className="dropdown dropdown-hover cursor-pointer">
              <div tabIndex={0} role="button" className="m-1">
                <img
              className="w-15 h-15 object-cover rounded-full"
              src={user.photoURL}
              alt="user"
              
            />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content -ml-19  bg-[#c67033]  z-1 w-55 p-2 shadow-sm rounded-xl"
              >
                <p className="flex items-center justify-center gap-2"><MdDriveFileRenameOutline />{user.displayName}</p>
                <p className="flex items-center justify-center gap-2"><MdMarkEmailRead />{user.email}</p>
              </ul>
            </Link>

            <button
              onClick={handleLogout}
              to="/auth/register"
              className="btn  sm:btn-sm md:btn-md lg:btn-lg text-white hover:bg-gray-600 border-0  bg-[#c67033] hover:text-white rounded-md"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <Link
              to="/auth/login"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  text-white hover:bg-gray-600  bg-[#c67033] border-0 hover:text-white rounded-md"
            >
              {" "}
              Log In{" "}
            </Link>

            <Link
              to="/auth/register"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  text-white hover:bg-gray-600  bg-[#c67033] border-0 hover:text-white rounded-md"
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
