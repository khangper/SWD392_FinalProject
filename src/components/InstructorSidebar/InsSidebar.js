import React from 'react'
import './InsSidebar.css'
import { Link } from 'react-router-dom'
import dashboardIcon from '../../assets/dashboard.png';
import coursesIcon from '../../assets/BookHelp.png';
import analyticsIcon from '../../assets/chart.png';
import createCourseIcon from '../../assets/browse-instructor.png';
import messagesIcon from '../../assets/message.png';
import notificationsIcon from '../../assets/notification-icon.png';
import certificatesIcon from '../../assets/prize.png';
import reviewsIcon from '../../assets/rating.png';
import earningIcon from '../../assets/earning.png';
import payoutIcon from '../../assets/payout.png';
import statementsIcon from '../../assets/pages.png';
import verificationIcon from '../../assets/verified.png';
import settingIcon from '../../assets/setting.png';
import feedbackIcon from '../../assets/send-feedback.png';
import helpIcon from '../../assets/help.png';
const InsSidebar = ({sidebar}) => {
  return (
    <div className={`ins-sidebar ${sidebar ? '' : 'ins-small-sidebar'}`}>
    <Link to="/ins-dashboard" className="side-link">
      <img className="sidebar-icon" src={dashboardIcon} alt="Dashboard Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Dashboard</p>
    </Link>
    <Link to="/courses" className="side-link">
      <img className="sidebar-icon" src={coursesIcon} alt="Courses Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Courses</p>
    </Link>
    <Link to="/analytics" className="side-link">
      <img className="sidebar-icon" src={analyticsIcon} alt="Analytics Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Analytics</p>
    </Link>
    <Link to="/create-course" className="side-link">
      <img className="sidebar-icon" src={createCourseIcon} alt="Create Course Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Create Course</p>
    </Link>
    <Link to="/messages" className="side-link">
      <img className="sidebar-icon" src={messagesIcon} alt="Messages Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Messages</p>
    </Link>
    <Link to="/notifications" className="side-link">
      <img className="sidebar-icon" src={notificationsIcon} alt="Notifications Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Notifications</p>
    </Link>
    <Link to="/mycertifications" className="side-link">
      <img className="sidebar-icon" src={certificatesIcon} alt="Certificates Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>My Certificates</p>
    </Link>
    <Link to="/reviews" className="side-link">
      <img className="sidebar-icon" src={reviewsIcon} alt="Reviews Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Reviews</p>
    </Link>
    <Link to="/instructor-earning" className="side-link">
      <img className="sidebar-icon" src={earningIcon} alt="Earning Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Earning</p>
    </Link>
    <Link to="/instructor-payout" className="side-link">
      <img className="sidebar-icon" src={payoutIcon} alt="Payout Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Payout</p>
    </Link>
    <Link to="/statements" className="side-link">
      <img className="sidebar-icon" src={statementsIcon} alt="Statements Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Statements</p>
    </Link>
    <Link to="/vertification" className="side-link">
      <img className="sidebar-icon" src={verificationIcon} alt="Verification Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Verification</p>
    </Link>
    <hr />
    <Link to="/setting" className="side-link">
      <img className="sidebar-icon" src={settingIcon} alt="Setting Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Setting</p>
    </Link>
    <Link to="/help" className="side-link">
      <img className="sidebar-icon" src={helpIcon} alt="Help Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Help</p>
    </Link>
    <Link to="/send-feedback" className="side-link">
      <img className="sidebar-icon" src={feedbackIcon} alt="Send Feedback Icon" />
      <p className={`${sidebar ? '' : 'small'}`}>Send Feedback</p>
    </Link>
  </div>
  )
}

export default InsSidebar