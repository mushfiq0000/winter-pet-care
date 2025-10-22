import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content pl-22 py-10">
      <nav>
        <h6 className="footer-title">Contact Us</h6>
        <a className="link link-hover">info@warmpaws.com</a>
        <a className="link link-hover">+880123456789</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
       <div className="flex gap-5 text-2xl">
        <FaTwitter />
        <FaYoutube />
        <FaFacebookF />
       </div>
      </nav>
    </footer>
  );
};

export default Footer;
