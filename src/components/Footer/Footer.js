import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import google from "../../assets/google+.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import pinterest from "../../assets/pinterest.png";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";

const Footer = ({ sidebar }) => {
  return (
    <footer
      className={`footer ${
        sidebar ? "footer-container" : "footer-large-container"
      }`}
    >
      <div className="footer-links">
        <div className="footer-column">
          <Link to={PATH_NAME.ABOUT_US} className="link">About</Link>
          <Link to={PATH_NAME.BLOG_SINGLE_VIEW} className="link">Blog</Link>
          <Link to={PATH_NAME.CAREER} className="link">Careers</Link>
          <Link to={PATH_NAME.PRESS} className="link">Press</Link>
        </div>
        <div className="footer-column">
          <Link to={PATH_NAME.HELP} className="link">Help</Link>
          <Link to={PATH_NAME.COMING_SOON} className="link">Advertise</Link>
          <Link to={PATH_NAME.COMING_SOON} className="link">Developers</Link>
          <Link to={PATH_NAME.CONTACT_US} className="link">Contact Us</Link>
        </div>
        <div className="footer-column">
          <Link to={PATH_NAME.TERMS_OF_USE} className="link">Copyright Policy</Link>
          <Link to={PATH_NAME.TERMS_OF_USE} className="link">Terms</Link>
          <Link to={PATH_NAME.TERMS_OF_USE} className="link">Privacy Policy</Link>
          <Link to={PATH_NAME.SITEMAP} className="link">Sitemap</Link>
        </div>
        <div className="footer-column">
          <button className="teach-button">Teach on Cursus</button>
          <div className="language-selector">
            <button>
              Language <span>&#9660;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg"  alt=""/>
          &copy; 2024 <strong>Cursus</strong>. All Rights Reserved.
        </div>
        <div className="footer-social">
          <Link to={PATH_NAME.HOME}>
            <img src={facebook} className="social-icon" alt=""/>
          </Link>
          <Link to={PATH_NAME.HOME}>
            <img src={x} className="social-icon"  alt=""/>
          </Link>
          <Link to={PATH_NAME.HOME}>
            <img src={google} className="social-icon"  alt=""/>
          </Link>
          <Link to={PATH_NAME.HOME}>
            <img src={linkedin} className="social-icon"  alt=""/>
          </Link>
          <Link to={PATH_NAME.HOME}>
            <img src={insta} className="social-icon"  alt=""/>
          </Link>
          <Link to={PATH_NAME.HOME}>
            <img src={pinterest} className="social-icon"  alt=""/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
