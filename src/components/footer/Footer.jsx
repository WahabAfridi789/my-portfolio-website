import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Abdul Wahab
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>

      <div className="footer__socials">
        <a href="">
          <BsFacebook />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Developed by Abdul Wahab. All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
