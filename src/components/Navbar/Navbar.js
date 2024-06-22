
import React from 'react';
import './Navbar.css';
import menu_icon from '..//../assets/menu.png';
import search_icon from '..//../assets/search.png';
import card_icon from '..//../assets/cart-icon.png';
import mail_icon from '..//../assets/mail-icon.png';
import notification_icon from '..//../assets/notification-icon.png';
import profile_image from '..//../assets/profile-img.jpg';
const Navbar = ({ setSidebar }) => {

  const sidebar_toggle = () => {
    setSidebar(prev => !prev);
  };

  return (
    <nav className='flex-div'>
    <div className="nav-left flex-div">
        <div className='menu-container' onClick={sidebar_toggle}>
        <img src={menu_icon} alt="" className="menu-icon" />
        </div>
     <img src='https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg' alt="" className="logo" />
     <div className="search-box flex-div">
      <img src={search_icon} alt='' className='search-icon' />
        <input
          type="text"
          placeholder="Search for Tuts Videos, Tutors, Tests and more..."
        />
      </div>
    </div>
    <div className="nav-right flex-div">
        <button className='course-button'>Create new course</button>
            <div className="icon">
                <img src={card_icon} alt='' className='cart-icon'/>
                <span className="badge">2</span>
            </div>
            <div className="icon">
                <img src={mail_icon} alt='' className='mail-icon'/>
                <span className="badge">3</span>
            </div>
            <div className="icon">
                <img src={notification_icon} alt='' className='cart-icon'/>
                <span className="badge">3</span>
            </div>
            <div className="profile">
                <img src={profile_image} alt='' className='profile-pic'/>
        </div>
        </div>
  </nav>
  );
};

export default Navbar;
