import React from "react";
import "./Footer.css";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import google from "../../assets/google+.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import pinterest from "../../assets/pinterest.png";
const Footer = ({ sidebar }) => {
  return (
    <footer
      className={`footer ${
        sidebar ? "footer-container" : "footer-large-container"
      }`}
    >
      <div className="footer-links">
        <div className="footer-column">
          <a href="about-us">About</a>
          <a href="our-blog">Blog</a>
          <a href="career">Careers</a>
          <a href="press">Press</a>
        </div>
        <div className="footer-column">
          <a href="help">Help</a>
          <a href="coming-soon">Advertise</a>
          <a href="coming-soon">Developers</a>
          <a href="contactus">Contact Us</a>
        </div>
        <div className="footer-column">
          <a href="termofuse">Copyright Policy</a>
          <a href="termofuse">Terms</a>
          <a href="termofuse">Privacy Policy</a>
          <a href="sitemap">Sitemap</a>
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

export default Footer;
