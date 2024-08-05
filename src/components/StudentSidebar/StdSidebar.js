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
import homeIcon from "../../assets/home.png";
import livestreamIcon from "../../assets/livestream.png";
import exploreIcon from "../../assets/explore.png";
import saveCourseIcon from "../../assets/saved-course.png";
import { PATH_NAME } from "../../constant/pathname"; 

const StdSidebar = ({ sidebar }) => {
  return (
    <div className={`ins-sidebar ${sidebar ? "" : "ins-small-sidebar"}`}>
       <Link to={PATH_NAME.HOME} className="side-link">
        <img className="sidebar-icon" src={homeIcon} alt="Home Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Home</p>
      </Link>
      <Link to={PATH_NAME.ALL_LIVE_STREAM} className="side-link">
        <img
          className="sidebar-icon"
          src={livestreamIcon}
          alt="Live Streams Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Live Streams</p>
      </Link>
      <Link to={PATH_NAME.EXPLORE} className="side-link">
        <img className="sidebar-icon" src={exploreIcon} alt="Explore Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Explore</p>
      </Link>
      <Link to={PATH_NAME.STD_DASHBOARD} className="side-link">
        <img
          className="sidebar-icon"
          src={dashboardIcon}
          alt="Dashboard Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Dashboard</p>
      </Link>
      <Link to={PATH_NAME.PURCHASE_COURSE} className="side-link">
        <img className="sidebar-icon" src={coursesIcon} alt="Courses Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Purchased Courses</p>
      </Link>
      <Link to={PATH_NAME.MESSAGE} className="side-link">
        <img className="sidebar-icon" src={messagesIcon} alt="Messages Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Messages</p>
      </Link>
      <Link to={PATH_NAME.NOTIFICATIONSTUDENT} className="side-link">
        <img
          className="sidebar-icon"
          src={notificationsIcon}
          alt="Notifications Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Notifications</p>
      </Link>
      <Link to={PATH_NAME.MYCERTIFICATIONS} className="side-link">
        <img
          className="sidebar-icon"
          src={certificatesIcon}
          alt="Certificates Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>My Certificates</p>
      </Link>
      <Link to={PATH_NAME.SAVE_COURSES} className="side-link">
        <img
          className="sidebar-icon"
          src={saveCourseIcon}
          alt="Saved Courses Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Saved Courses</p>
      </Link>
      <Link to={PATH_NAME.PREVIEWS} className="side-link">
        <img className="sidebar-icon" src={reviewsIcon} alt="Reviews Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Reviews</p>
      </Link>
      <Link to={PATH_NAME.CREDIT} className="side-link">
        <img className="sidebar-icon" src={payoutIcon} alt="Payout Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Credit</p>
      </Link>
      <Link to={PATH_NAME.STATEMENTST} className="side-link">
        <img
          className="sidebar-icon"
          src={statementsIcon}
          alt="Statements Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Statements</p>
      </Link>
      <hr />
      <Link to={PATH_NAME.SETTING} className="side-link">
        <img className="sidebar-icon" src={settingIcon} alt="Setting Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Setting</p>
      </Link>
      <Link to={PATH_NAME.SEND_FEEDBACK} className="side-link">
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
