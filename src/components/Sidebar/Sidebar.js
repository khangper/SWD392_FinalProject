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
import { PATH_NAME } from "../../constant/pathname";
const Sidebar = ({ sidebar }) => {
  const [categories, setCategories] = useState(false);
  const [tests, setTests] = useState(false);
  const [page, setPage] = useState(false);
  const toggleCategories = () => {
    setCategories(!categories);
  };
  const toggleTests = () => {
    setTests(!tests);
  };
  const togglePages = () => {
    setPage(!page);
  };
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <Link to={PATH_NAME.HOME} className="side-link">
        <img className="sidebar-icon" src={home} alt="Home Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Home</p>
      </Link>
      <Link to={PATH_NAME.ALL_LIVE_STREAM} className="side-link">
        <img
          className="sidebar-icon"
          src={livestream}
          alt="Live Streams Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Live Streams</p>
      </Link>
      <Link to={PATH_NAME.EXPLORE} className="side-link">
        <img className="sidebar-icon" src={explore} alt="Explore Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Explore</p>
      </Link>
      <div className="side-link category-link" onClick={toggleCategories}>
        <img className="sidebar-icon" src={category} alt="Categories Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Categories</p>
        <span className={`sidebar-dropdown-caret ${sidebar ? "" : "small"}`}>
          <img className="sidebar-dropdown-caret-icon" src={dropdown} alt=""/>
        </span>
      </div>
      {categories && (
        <div className={`sidebar-dropdown-menu ${sidebar ? "" : "small"}`}>
          <Link to={PATH_NAME.SITEMAP}>Development</Link>
          <Link to={PATH_NAME.SITEMAP}>Business</Link>
          <Link to={PATH_NAME.SITEMAP}>Finance & Accounting</Link>
          <Link to={PATH_NAME.SITEMAP}>IT & Software</Link>
          <Link to={PATH_NAME.SITEMAP}>Office Productivity</Link>
          <Link to={PATH_NAME.SITEMAP}>Personal Development</Link>
          <Link to={PATH_NAME.SITEMAP}>Design</Link>
          <Link to={PATH_NAME.SITEMAP}>Marketing</Link>
          <Link to={PATH_NAME.SITEMAP}>Lifestyle</Link>
          <Link to={PATH_NAME.SITEMAP}>Photography</Link>
          <Link to={PATH_NAME.SITEMAP}>Health & Fitness</Link>
        </div>
      )}
      <div className="side-link category-link" onClick={toggleTests}>
        <img className="sidebar-icon" src={test} alt="Tests Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Tests</p>
        <span className={`sidebar-dropdown-caret ${sidebar ? "" : "small"}`}>
          <img
            className="sidebar-dropdown-caret-icon"
            src={dropdown}
            alt="Dropdown Icon"
          />
        </span>
      </div>
      {tests && (
        <div className={`sidebar-dropdown-menu ${sidebar ? "" : "small"}`}>
          <Link to={PATH_NAME.CERTIFICATION_CENTER}>Certification Center</Link>
          <Link to={PATH_NAME.CERTIFICATION_FILL_FORM}>Certification Fill Form</Link>
          <Link to={PATH_NAME.CERTIFICATION_TEST}>Test View</Link>
          <Link to={PATH_NAME.TEST_RESULT}>Test Result</Link>
          <Link to="https://gambolthemes.net/html-imgs/certificate.jpg">
            My Certification
          </Link>
        </div>
      )}
      <Link to={PATH_NAME.SAVE_COURSES} className="side-link">
        <img
          className="sidebar-icon"
          src={saved_course}
          alt="Saved Courses Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Saved Courses</p>
      </Link>
      <div className="side-link category-link" onClick={togglePages}>
        <img className="sidebar-icon" src={pages} alt="Pages Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Pages</p>
        <span className={`sidebar-dropdown-caret ${sidebar ? "" : "small"}`}>
          <img
            className="sidebar-dropdown-caret-icon"
            src={dropdown}
            alt="Dropdown Icon"
          />
        </span>
      </div>
      {page && (
        <div className={`sidebar-dropdown-menu ${sidebar ? "" : "small"}`}>
          <Link to={PATH_NAME.ABOUT_US}>About</Link>
          <Link to={PATH_NAME.LOGIN}>Sign In</Link>
          <Link to={PATH_NAME.SIGN_UP}>Sign Up</Link>
          <Link to={PATH_NAME.SIGN_UP_STEP}>Sign Up Steps</Link>
          <Link to={PATH_NAME.PAID_MEMBERSHIP}>Paid Membership</Link>
          <Link to={PATH_NAME.COURSES_DETAIL_VIEW}>Course Detail View</Link>
          <Link to={PATH_NAME.CHECKOUT}>Checkout</Link>
          <Link to={PATH_NAME.INVOICE}>Invoice</Link>
          <Link to={PATH_NAME.CAREER}>Career</Link>
          <Link to={PATH_NAME.APPLY_JOB}>Job Apply</Link>
          <Link to={PATH_NAME.OUR_BLOG}>Our Blog</Link>
          <Link to={PATH_NAME.BLOG_SINGLE_VIEW}>Blog Detail View</Link>
          <Link to={PATH_NAME.ADD_LIVE_STREAM}>Add Livestream</Link>
          <Link to={PATH_NAME.SEARCH_RESULT}>Search Result</Link>
          <Link to={PATH_NAME.THANKS}>Thank you</Link>
          <Link to={PATH_NAME.COMING_SOON}>Coming Soon</Link>
          <Link to={PATH_NAME.MY_COURSE}>My Course</Link>
          <Link to={PATH_NAME.PURCHASE_COURSE}>Purchase Course</Link>
          <Link to={PATH_NAME.NOTIFICATON}>Notification</Link>
          <Link to={PATH_NAME.ERROR_404}>Error 404</Link>
          <Link to={PATH_NAME.VERTIFICATION}>Vertification</Link>
          <Link to={PATH_NAME.MYCERTIFICATIONS}>My Certifications</Link>
        </div>
      )}
      <hr />
      <div className="subscriptions">
        <p className="subscriptions-title">SUBSCRIPTIONS</p>
        <Link to="/other-instructor-view/2" className="subscription-link">
          <img
            className="subscription-icon"
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg"
            alt="Rock Smith"
          />
          <p>Rock Smith</p>
          <span className="subscription-status"></span>
        </Link>

        <Link to="/other-instructor-view/3" className="subscription-link">
          <img
            className="subscription-icon"
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg"
            alt="Jassica William"
          />
          <p>Jassica William</p>
          <span className="subscription-status"></span>
        </Link>
      </div>
      <Link to={PATH_NAME.ALL_INSTRUCTOR_LIST}>
        <div className="side-link">
          <img
            className="sidebar-icon"
            src={browse_instructor}
            alt="Browse Instructor Icon"
          />
          <p className={`${sidebar ? "" : "small"}`}>Browse Instructor</p>
        </div>
      </Link>
      <hr />
      <Link to={PATH_NAME.SETTING} className="side-link">
        <img className="sidebar-icon" src={setting} alt="Setting Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Setting</p>
      </Link>
      <Link to={PATH_NAME.HELP} className="side-link">
        <img className="sidebar-icon" src={help} alt="Help Icon" />

        <p className={`${sidebar ? "" : "small"}`}>Help</p>
      </Link>
      <Link to={PATH_NAME.REPORT_HISTORY} className="side-link">
        <img className="sidebar-icon" src={report} alt="Report History Icon" />
        <p className={`${sidebar ? "" : "small"}`}>Report History</p>
      </Link>
      <Link to={PATH_NAME.SEND_FEEDBACK} className="side-link">
        <img
          className="sidebar-icon"
          src={send_feedback}
          alt="Send Feedback Icon"
        />
        <p className={`${sidebar ? "" : "small"}`}>Send Feedback</p>
      </Link>
      <hr />
      <div className="-sidebar-footer">
        <div className="sidebar-footer-links">
          <Link to={PATH_NAME.ABOUT_US}>
            <div>About</div>
          </Link>
          <Link to={PATH_NAME.PRESS}>
            <div>Press</div>
          </Link>
          <Link to={PATH_NAME.CONTACT_US}>
            <div>Contact Us</div>
          </Link>
          <Link to={PATH_NAME.COMING_SOON}>
            <div>Advertise</div>
          </Link>
          <Link to={PATH_NAME.COMING_SOON}>
            <div>Developers</div>
          </Link>
          <Link to={PATH_NAME.TERMS_OF_USE}>
            <div>Copyright</div>
          </Link>
          <Link to={PATH_NAME.TERMS_OF_USE}>
            <div>Privacy Policy</div>
          </Link>
          <Link to={PATH_NAME.TERMS_OF_USE}>
            <div>Terms</div>
          </Link>
        </div>
        <div className="sidebar-footer-copyright">
          © 2024 <span className="sidebar-footer-brand">Cursus</span>. All
          Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
