import React, { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import avatar from "../../assets/profile-img.jpg";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
import moon_image from "../../assets/moon.png";
import hakaFull_logo from "../../assets/Haka_Online_Learning_System_logo.png"
import { AuthContext } from "../../Router/AuthContext";

const Header = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setIsProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  // const { logout } = useContext(AuthContext);

  return (
    <header className="header">
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
      <div className="profile" ref={profileDropdownRef}>
        <img
          src={avatar}
          alt=""
          className="header-avatar"
          onClick={toggleProfileDropdown}
        />
        {isProfileDropdownOpen && (
          <div className="dropdowns">
            <div className="dropdown-item">
              <div className="dropdown-link">
                <img src={avatar} alt="Profile" className="profile-pic" />
                <div className="message">
                  <div className="profile-header">
                    <h6>Joginder Signh</h6>
                    <div className="verified-badge"></div>
                  </div>
                  <span>gambol943@gmail.com</span>
                </div>
              </div>
              <a href="#" className="profile-link">
                View Instructor Profile
              </a>
            </div>
            <div className="dark-mode-switch-btn">
              <div className="dark-mode-container">
                <div className="dark-mode-icon">
                  <img src={moon_image} alt="Moon Icon" />
                </div>
                Night Mode
                <span className="switch-btn">
                  <input type="checkbox" />
                  <span className="switch"></span>
                </span>
              </div>
            </div>
            <div className="profile-item"> Haka Dashboard</div>
            <div className="profile-item">
              Sign Out
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
