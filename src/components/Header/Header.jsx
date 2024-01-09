import React from "react";
import "./header.css";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} className="header-logo" />
      </div>
      <div className="header-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
