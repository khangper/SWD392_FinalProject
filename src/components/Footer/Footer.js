import React from 'react';
import './Footer.css';

const Footer = ({ sidebar }) => {
  return (
    <footer className={`footer ${sidebar ? 'footer-container' : 'footer-large-container'}`}>
         <div className="footer-links">
        <div className="footer-column">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
        <div className="footer-column">
          <a href="#">Help</a>
          <a href="#">Advertise</a>
          <a href="#">Developers</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-column">
          <a href="#">Copyright Policy</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Sitemap</a>
        </div>
        <div className="footer-column">
          <button className="teach-button">Teach on Cursus</button>
          <div className="language-selector">
            <button>Language <span>&#9660;</span></button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; 2024 <strong>Cursus</strong>. All Rights Reserved.
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">F</a>
          <a href="#" className="social-icon">T</a>
          <a href="#" className="social-icon">G+</a>
          <a href="#" className="social-icon">I</a>
          <a href="#" className="social-icon">Y</a>
          <a href="#" className="social-icon">P</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
