import React from "react";
import "./Header.css";
import avatar from "../../assets/profile-img.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/home">
        <button className="header-link1">Back To Cursus</button>
      </Link>
      <Link to="/home">
        <img
          src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg"
          alt=""
          className="header-group-icon"
        />
      </Link>
      <img src={avatar} alt="" className="header-avatar" />
    </header>
  );
};

export default Header;