import React from "react";
import "./InsAStdFooter.css";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import google from "../../assets/google+.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import pinterest from "../../assets/pinterest.png";
import hakaBW_logo from "../../assets/Haka_logo_bw.png"
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
const InsAStdFooter = ({ sidebar }) => {
  return (
    <footer
      className={`footer ${
        sidebar ? "footer-instructor" : "footer-instructor-large"
      }`}
    >
      <div className="footer-top">
        <div className="ins-footer-links">
          <Link to={PATH_NAME.TERMS_OF_USE} className='link'>Copyright Policy</Link>
          <Link to={PATH_NAME.TERMS_OF_USE} className='link'>Terms</Link>
          <Link to={PATH_NAME.TERMS_OF_USE} className='link'>Privacy Policy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          <img src={hakaBW_logo} alt=""/>
          &copy; 2024 <strong>Haka</strong>. All Rights Reserved.
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

export default InsAStdFooter;
