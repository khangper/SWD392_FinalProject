import React from 'react'
import './InsAStdFooter.css'
import facebook from '../../assets/facebook.png';
import x from '../../assets/x.png';
import google from '../../assets/google+.png';
import linkedin from '../../assets/linkedin.png';
import insta from '../../assets/insta.png';
import pinterest from '../../assets/pinterest.png';
const InsAStdFooter = ({sidebar}) => {
  return (
    <footer className={`footer ${sidebar ? 'footer-container' : 'footer-large-container'}`}>
      <div className='footer-top'>
        <div className="ins-footer-links">
        <a href='#'>Copyright Policy</a>
        <a href='#'>Terms</a>
        <a href='#'>Privacy Policy</a>
        </div>
      
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          <img src='https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg' />&copy; 2024 <strong>Cursus</strong>. All Rights Reserved.
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
  )
}

export default InsAStdFooter