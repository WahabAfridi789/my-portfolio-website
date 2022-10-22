import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i am</h5>
        <h1>Abdul Wahab</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="myImg" src={ME} alt="me" />
        </div>

        <a href="#footer" className="scroll-down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
