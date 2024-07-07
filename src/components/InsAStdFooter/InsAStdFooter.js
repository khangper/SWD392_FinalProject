import React from "react";
import "./InsAStdFooter.css";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import google from "../../assets/google+.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import pinterest from "../../assets/pinterest.png";
const InsAStdFooter = ({ sidebar }) => {
  return (
    <footer
      className={`footer ${
        sidebar ? "footer-instructor" : "footer-instructor-large"
      }`}
    >
      <div className="footer-top">
        <div className="ins-footer-links">
          <a href="termsofuse">Copyright Policy</a>
          <a href="termsofuse">Terms</a>
          <a href="termsofuse">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg" />
          &copy; 2024 <strong>Cursus</strong>. All Rights Reserved.
        </div>
        <div className="footer-social">
          <img href="#" src={facebook} className="social-icon" />
          <img href="#" src={x} className="social-icon" />
          <img href="#" src={google} className="social-icon" />
          <img href="#" src={linkedin} className="social-icon" />
          <img href="#" src={insta} className="social-icon" />
          <img href="#" src={pinterest} className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default InsAStdFooter;
