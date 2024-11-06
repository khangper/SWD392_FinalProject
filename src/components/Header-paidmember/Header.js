import React from "react";
import "./Header.css";
import avatar from "../../assets/profile-img.jpg";
import hakaFull_logo from "../../assets/Haka_Online_Learning_System_logo.png"
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
const Header = () => {
  return (
    <header className="header1">
      <Link to={PATH_NAME.HOME}>
        <button className="header-link1">Back To Haka</button>
      </Link>
      <Link to={PATH_NAME.HOME}>
        <img
          src={hakaFull_logo}
          alt=""
          className="header-group-icon"
        />
      </Link>
      <img src={avatar} alt="" className="header-avatar" />
    </header>
  );
};

export default Header;
