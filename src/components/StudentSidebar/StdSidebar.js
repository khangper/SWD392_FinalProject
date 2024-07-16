import React from "react";
import "./StdSidebar.css";
import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/dashboard.png";
import coursesIcon from "../../assets/BookHelp.png";
import messagesIcon from "../../assets/message.png";
import notificationsIcon from "../../assets/notification-icon.png";
import certificatesIcon from "../../assets/prize.png";
import reviewsIcon from "../../assets/rating.png";
import payoutIcon from "../../assets/payout.png";
import statementsIcon from "../../assets/pages.png";
import settingIcon from "../../assets/setting.png";
import feedbackIcon from "../../assets/send-feedback.png";
const StdSidebar = ({ sidebar }) => {
  return (
    <div className={`ins-sidebar ${sidebar ? "" : "ins-small-sidebar"}`}>
      <Link to="/student-dashboard" className="side-link">
        <img
          className="sidebar-icon"
          src={dashboardIcon}
          alt="Dashboard Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Dashboard</p>
      </Link>
      <Link to="/PurchaseCourse" className="side-link">
        <img className="sidebar-icon" src={coursesIcon} alt="Courses Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Purchased Courses</p>
      </Link>
      <Link to="/messages" className="side-link">
        <img className="sidebar-icon" src={messagesIcon} alt="Messages Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Messages</p>
      </Link>
      <Link to="/notifications" className="side-link">
        <img
          className="sidebar-icon"
          src={notificationsIcon}
          alt="Notifications Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Notifications</p>
      </Link>
      <Link to="/mycertifications" className="side-link">
        <img
          className="sidebar-icon"
          src={certificatesIcon}
          alt="Certificates Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>My Certificates</p>
      </Link>
      <Link to="/reviews" className="side-link">
        <img className="sidebar-icon" src={reviewsIcon} alt="Reviews Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Reviews</p>
      </Link>
      <Link to="/credits" className="side-link">
        <img className="sidebar-icon" src={payoutIcon} alt="Payout Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Credit</p>
      </Link>
      <Link to="/statementst" className="side-link">
        <img
          className="sidebar-icon"
          src={statementsIcon}
          alt="Statements Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Statements</p>
      </Link>
      <hr />
      <Link to="/setting" className="side-link">
        <img className="sidebar-icon" src={settingIcon} alt="Setting Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Setting</p>
      </Link>
      <Link to="/send-feedback" className="side-link">
        <img
          className="sidebar-icon"
          src={feedbackIcon}
          alt="Send Feedback Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Send Feedback</p>
      </Link>
    </div>
  );
};

export default StdSidebar;
