import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import logo from '../assets/logo.jpg'
// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { LoggedInUserName } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); 

  const [loginBtnText, setLoginBtnText] = useState("Login");
  return (
    <div className="flex justify-between m-15 shadow-lg bg-slate-50 mb-8 ">
      <div className="logo-container">
        <img src={logo} className="w-[100px]" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-2">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <button
              className=""
              onClick={() =>
                loginBtnText === "Login"
                  ? setLoginBtnText("Logout")
                  : setLoginBtnText("Login")
              }
            >
              {loginBtnText}
            </button>
          </li>
          <li className="px-4">
            <Link to="/cart">
              Cart 🛒
              <span
                style={{ borderRadius: "50%" }}
                className=" text-white  absolute top-5 right-32 h-6 w-6  px-2 py-1 bg-red-500"
              >
                <span className="relative -top-1">{cartItems.length}</span>
              </span>
            </Link>
          </li>

          <li className="px-4 text-sm font-bold"> 🙎{LoggedInUserName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
