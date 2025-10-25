import React from "react";
import errorImg from "../assets/error3.jpg";

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-center bg-cover text-center text-white"
      style={{ backgroundImage: `url(${errorImg})` }}
    >
      

      {/* Content */}
      <div className="relative z-10 text-[#b25e27] sahdow-2xl">
        <h1 className="md:text-[300px] text-9xl font-extrabold drop-shadow-2xl">
          404
        </h1>
        <p className="text-2xl font-semibold drop-shadow-md mt-4">
          Oops! Page Not Found 🐾
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-[#153f67] hover:bg-gray-600  text-white px-6 py-3 rounded-lg transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;

