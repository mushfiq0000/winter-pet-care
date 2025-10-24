import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#17436c] text-white  pl-22 py-10">
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
       <div className="flex gap-5 text-2xl text-[#c67033]">
        <a href="https://github.com/" target="value"><FaGithub /></a>
        <a href="https://www.youtube.com/" target="value"><FaYoutube /></a>
        <a href="https://www.facebook.com/" target="value"><FaFacebookF /></a>
        <a href="https://www.instagram.com/" target="value"><RiInstagramFill /></a>
       </div>
      </nav>
    </footer>
  );
};

export default Footer;
