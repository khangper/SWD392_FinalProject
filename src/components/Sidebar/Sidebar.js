import React, { useState } from "react";
import home from "../../assets/home.png";
import livestream from "../../assets/livestream.png";
import explore from "../../assets/explore.png";
import category from "../../assets/category.png";
import test from "../../assets/test.png";
import saved_course from "../../assets/saved-course.png";
import pages from "../../assets/pages.png";
import dropdown from "../../assets/dropdown.png";
import setting from "../../assets/setting.png";
import help from "../../assets/help.png";
import report from "../../assets/report.png";
import send_feedback from "../../assets/send-feedback.png";
import browse_instructor from "../../assets/browse-instructor.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = ({ sidebar }) => {
  const [categories, setCategories] = useState(false);
  const [tests, setTests] = useState(false);
  const [page, setPage] = useState(false);
  const toggleCategories = () => {
    setCategories(!categories);
  }
  const toggleTests = () => {
    setTests(!tests);
  };
  const togglePages = () => {
    setPage(!page);
  };
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>

      <Link to='home' className="side-link">
        <img className="sidebar-icon" src={home} alt="Home Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Home</p>
      </Link>
      <Link to="all_livestream" className="side-link">
        <img className="sidebar-icon" src={livestream} alt="Live Streams Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Live Streams</p>
      </Link>
      <Link to='explore' className="side-link">
        <img className="sidebar-icon" src={explore} alt="Explore Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Explore</p>
      </Link>
      <div className="side-link category-link" onClick={toggleCategories}>
        <img className="sidebar-icon" src={category} alt="Categories Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Categories</p>
        <span className={`sidebar-dropdown-caret ${sidebar ? "" : "small"}`}><img className="sidebar-dropdown-caret-icon" src={dropdown} /></span>
      </div>
      {categories && (
        <div className={`sidebar-dropdown-menu ${sidebar ? "" : "small"}`}>
          <a href="#">Development</a>
          <a href="#">Business</a>
          <a href="#">Finance & Accounting</a>
          <a href="#">IT & Software</a>
          <a href="#">Office Productivity</a>
          <a href="#">Personal Development</a>
          <a href="#">Design</a>
          <a href="#">Marketing</a>
          <a href="#">Lifestyle</a>
          <a href="#">Photography</a>
          <a href="#">Health & Fitness</a>
        </div>
      )}
      <div className="side-link category-link" onClick={toggleTests}>
        <img className="sidebar-icon" src={test} alt="Tests Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Tests</p>
        <span className={`sidebar-dropdown-caret ${sidebar ? "" : "small"}`}><img className="sidebar-dropdown-caret-icon" src={dropdown} alt="Dropdown Icon" /></span>
      </div>
      {tests && (
        <div className={`sidebar-dropdown-menu ${sidebar ? "" : "small"}`}>
          <a href="/certificationcenter">Certification Center</a>
          <a href="certificationfillform">Certification Fill Form</a>
          <a href="/certificates-test">Test View</a>
          <a href="#">Test Result</a>
          <a href="#">My Certification</a>
        </div>
      )}
      <Link to='save-courses' className="side-link">
        <img className="sidebar-icon" src={saved_course} alt="Saved Courses Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Saved Courses</p>
      </Link>
      <div className="side-link category-link" onClick={togglePages}>
        <img className="sidebar-icon" src={pages} alt="Pages Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Pages</p>
        <span className={`sidebar-dropdown-caret ${sidebar ? "" : "small"}`}><img className="sidebar-dropdown-caret-icon" src={dropdown} alt="Dropdown Icon" /></span>
      </div>
      {page && (
        <div className={`sidebar-dropdown-menu ${sidebar ? "" : "small"}`}>
          <a href="about-us">About</a>
          <a href="login">Sign In</a>
          <a href="SignUpStep">Sign Up</a>
          <a href="SignUp">Sign Up Steps</a>
          <a href="paidmembership">Paid Membership</a>
          <a href="#">Course Detail View</a>
          <a href="checkout">Checkout</a>
          <Link to="/invoice">Invoice</Link>
          <a href="career">Career</a>
          <a href="#">Job Apply</a>
          <a href="our-blog">Our Blog</a>
          <a href="#">Blog Detail View</a>
          <a href="#">Add Livestream</a>
          <a href="search_result">Search Result</a>
          <a href="Thanks">Thank you</a>
          <a href="coming-soon">Coming Soon</a>
          <a href="mycourse">My Course</a>
          <a href="PurchaseCourse">Purchase Course</a>
          <a href="notification">Notification</a>
          <a href="error404">Error  404</a>
          <a href="vertification">Vertification</a>
          <a href="mycertifications">My Certifications</a>
        </div>
      )}
      <hr />
      <div className="subscriptions">
        <p className="subscriptions-title">SUBSCRIPTIONS</p>
        <Link to='/other-instructor-view' className="subscription-link">
          <img className="subscription-icon" src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="Rock Smith" />
          <p>Rock Smith</p>
          <span className="subscription-status"></span>
        </Link>
        <div className="subscription-link">
          <img className="subscription-icon" src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg" alt="Jassica William" />
          <p>Jassica William</p>
          <span className="subscription-status"></span>
        </div>
      </div>
      <Link to="allinstructorlist">
        <div className="side-link">
          <img className="sidebar-icon" src={browse_instructor} alt="Browse Instructor Icon" />
          <p className={`${sidebar ? "" : "small"}`}>Browse Instructor</p>
        </div>
      </Link>
      <hr />
      <Link to='setting' className="side-link">
        <img className="sidebar-icon" src={setting} alt="Setting Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Setting</p>
      </Link>
      <Link to='help' className="side-link">
        <img className="sidebar-icon" src={help} alt="Help Icon" />

        <p className={`${sidebar ? "" : "small"}`}>Help</p>
      </Link>
      <Link to='reporthistory' className="side-link">
        <img className="sidebar-icon" src={report} alt="Report History Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Report History</p>
      </Link>
      <Link to='sendfeedback' className="side-link">
        <img className="sidebar-icon" src={send_feedback} alt="Send Feedback Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Send Feedback</p>
      </Link>
      <hr />
      <div className="-sidebar-footer">
        <div className="sidebar-footer-links">
          <Link to='about-us'>
            <div>About</div>
          </Link>
          <Link to='press'>
            <div>Press</div>
          </Link>
          <Link to='contactus'>
            <div>Contact Us</div>
          </Link>

          <div>Advertise</div>
          <div>Developers</div>
          <div>Copyright</div>
          <div>Privacy Policy</div>
          <Link to='termsofuse'>
            <div>Terms</div>
          </Link>

        </div>
        <div className="sidebar-footer-copyright">
          © 2024 <span className="sidebar-footer-brand">Cursus</span>. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
