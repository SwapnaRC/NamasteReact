import React, { useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { LoggedInUserName } = useContext(UserContext)

  return (
    <div className="flex justify-between m-15 shadow-lg bg-slate-50 mb-8 ">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-[120px]" />
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
          <li className="px-4">Cart</li>
          <li className="px-4 text-sm font-bold"> 🙎{LoggedInUserName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
