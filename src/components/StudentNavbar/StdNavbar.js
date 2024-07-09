import React, { useContext, useEffect, useRef, useState } from "react";
import "./StdNavbar.css";
import menu_icon from "../../assets/menu.png";
import search_icon from "../../assets/search.png";
import card_icon from "../../assets/cart-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import notification_icon from "../../assets/notification-icon.png";
import profile_image from "../../assets/profile-img.jpg";
import moon_image from "../../assets/moon.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Router/AuthContext";
import { PATH_NAME } from "../../constant/pathname";

const StdNavbar = ({ setSidebar }) => {
  const sampleMessages = [
    {
      id: 1,
      name: "Zoena Singh",
      text: "Hi! Sir, How are you. I ask you one thing please explain it this video price.",
      time: "2 min ago",
      profileImage: profile_image,
    },
    {
      id: 2,
      name: "Joy Dua",
      text: "Hello, I paid you video tutorial but did not play error 404.",
      time: "10 min ago",
      profileImage: profile_image,
    },
    {
      id: 3,
      name: "Jass",
      text: "Thanks Sir, Such a nice video.",
      time: "25 min ago",
      profileImage: profile_image,
    },
  ];

  const sampleNotifications = [
    {
      id: 1,
      name: "Rock William",
      text: "Like Your Comment On Video How to create sidebar menu.",
      time: "2 min ago",
      profileImage: profile_image,
    },
    {
      id: 2,
      name: "Jassica Smith",
      text: "Added New Review In Video Full Stack PHP Developer.",
      time: "12 min ago",
      profileImage: profile_image,
    },
    {
      id: 3,
      name: "Your Membership Approved",
      text: "Upload Video.",
      time: "20 min ago",
      profileImage: profile_image,
    },
  ];

  const [isMailDropdownOpen, setIsMailDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const mailDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mailDropdownRef.current &&
      !mailDropdownRef.current.contains(event.target)
    ) {
      setIsMailDropdownOpen(false);
    }
    if (
      notificationDropdownRef.current &&
      !notificationDropdownRef.current.contains(event.target)
    ) {
      setIsNotificationDropdownOpen(false);
    }
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

  const toggleMailDropdown = () => {
    setIsMailDropdownOpen((prev) => !prev);
    setIsNotificationDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen((prev) => !prev);
    setIsMailDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
    setIsMailDropdownOpen(false);
    setIsNotificationDropdownOpen(false);
  };

  const sidebar_toggle = () => {
    setSidebar((prev) => !prev);
  };

  const { logout } = useContext(AuthContext);

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <div className="menu-container" onClick={sidebar_toggle}>
          <img src={menu_icon} alt="" className="menu-icon" />
        </div>
        <img
          src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg"
          alt=""
          className="logo"
        />
        <div className="search-box flex-div">
          <img src={search_icon} alt="" className="search-icon" />
          <input
            type="text"
            placeholder="Search for Tuts Videos, Tutors, Tests and more..."
          />
        </div>
      </div>
      <div className="nav-right flex-div">
        <Link to={PATH_NAME.SHOPPING_CART}>
          <div className="icon">
            <img src={card_icon} alt="" className="cart-icon" />
            <span className="badge">2</span>
          </div>
        </Link>

        <div className="icon" ref={mailDropdownRef}>
          <img
            src={mail_icon}
            alt=""
            className="mail-icon"
            onClick={toggleMailDropdown}
          />
          <span className="badge">3</span>
          {isMailDropdownOpen && (
            <div className="dropdown">
              {sampleMessages.map((message) => (
                <div key={message.id} className="dropdown-item">
                  <div className="dropdown-link">
                    <img
                      src={message.profileImage}
                      alt="Profile"
                      className="profile-pic"
                    />
                    <div className="message">
                      <h6 className="name">{message.name}</h6>
                      <p className="text">{message.text}</p>
                      <span className="time">{message.time}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Link to={PATH_NAME.MESSAGE} className="view-all-btn">
                View All
              </Link>
            </div>
          )}
        </div>
        <div className="icon" ref={notificationDropdownRef}>
          <img
            src={notification_icon}
            alt=""
            onClick={toggleNotificationDropdown}
            className="cart-icon"
          />
          <span className="badge">3</span>
          {isNotificationDropdownOpen && (
            <div className="dropdown">
              {sampleNotifications.map((message) => (
                <div key={message.id} className="dropdown-item">
                  <Link to={PATH_NAME.NOTIFICATON} className="dropdown-link">
                    <img
                      src={message.profileImage}
                      alt="Profile"
                      className="profile-pic"
                    />
                    <div className="message">
                      <h6 className="name">{message.name}</h6>
                      <p className="text">{message.text}</p>
                      <span className="time">{message.time}</span>
                    </div>
                  </Link>
                </div>
              ))}
              <Link to={PATH_NAME.NOTIFICATON} className="view-all-btn">
                View All
              </Link>
            </div>
          )}
        </div>
        <div className="profile" ref={profileDropdownRef}>
          <img
            src={profile_image}
            onClick={toggleProfileDropdown}
            alt=""
            className="profile-pic"
          />
          {isProfileDropdownOpen && (
            <div className="dropdown">
              <div className="dropdown-item">
                <div className="dropdown-link">
                  <img
                    src={profile_image}
                    alt="Profile"
                    className="profile-pic"
                  />
                  <div className="message">
                    <div className="profile-header">
                      <h6>Joginder Signh</h6>
                      <div className="verified-badge"></div>
                    </div>
                    <span>gambol943@gmail.com</span>
                  </div>
                </div>
                <Link to={PATH_NAME.MY_INSTRUCTOR_PROFILE} className="profile-link">
                  View Instructor Profile
                </Link>
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
              <Link to={PATH_NAME.INS_DASHBOARD}>
                <div className="profile-item"> Cursus Dashboard</div>
              </Link>
              <Link to={PATH_NAME.PAID_MEMBERSHIP}>
                <div className="profile-item"> Paid Memberships</div>
              </Link>
              <Link to={PATH_NAME.SETTING}>
                <div className="profile-item"> Setting</div>
              </Link>
              <Link to={PATH_NAME.HELP}>
                <div className="profile-item">Help</div>
              </Link>
              <Link to={PATH_NAME.SEND_FEEDBACK}>
                <div className="profile-item"> Send Feedback</div>
              </Link>
              <div className="profile-item" onClick={logout}>
                {" "}
                Sign Out
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default StdNavbar;
