import React, { useState } from 'react';
import "./Help.css"
import search_icon from '..//../assets/search.png';
import Wallet from '..//../assets/Wallet.png';
import Megaphone2 from '..//../assets/Megaphone2.png';
import Filecheckale from '..//../assets/Filecheckale.png';
import FileEdit from '..//../assets/FileEdit.png';
import CourseManagement from '..//../assets/CourseManagement.png';
import TrueFile from '..//../assets/TrueFile.png';
import Account from '..//../assets/Account.png';
import Destop from '..//../assets/Destop.png';
import BookHelp from '..//../assets/BookHelp.png';
import MobileHelp from '..//../assets/MobileHelp.png';



export default function Help() {
  const [activeTab, setActiveTab] = useState('instructor');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="Help-container-fluid">
        <div className="Help-grid-container-input">
          <div className="Help-grid-item-full">
           <div className="Help_215v12">
            <div className="Help-grid-center">
             <div className="Help-grid-item-half">
              <div className="help_stitle">
               <h2>How may we help you?</h2>
               <div className="explore_search">
            <div className="ui search focus">
                <div className="search-box flex-div">
                <img src={search_icon} alt='' className='search-icon-allInstructor' />
                    <input className="prompt srch_explore" type="text" placeholder="       Search Tutors..."/>
                    
                </div>
            </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="Help_215b15">
        <div className=".Help-grid-container-input">
          <div className="Help-grid-item-full">
            <div className="col-lg-12">
              <div className="course_tabs">
                <nav>
                  <div className="nav nav-tabs-help help_tabs tab_crse justify-content-center" id="nav-tab" role="tablist">
                    <a
                      className={`tab ${activeTab === 'instructor' ? 'active' : ''}`}
                      id="nav-instructor-tab"
                      onClick={() => handleTabClick('instructor')}
                    >
                      Instructor
                    </a>
                    <a
                      className={`tab ${activeTab === 'student' ? 'active' : ''}`}
                      id="nav-student-tab"
                      onClick={() => handleTabClick('student')}
                    >
                      Student
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="_215b17">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="course_tab_content">
                <div className="tab-content" id="nav-tabContent">
                  {activeTab === 'instructor' && (
                    <div className={`tab-pane fade ${activeTab === 'instructor' ? 'show active' : ''}`} id="nav-instructor" role="tabpanel">
<div className="tpc152">
  <div className="crse_content">
    <h3>Select a topic to search for help</h3>
  </div>
  <div className="section3126 mt-20">
    <div className="Help1-Grid-container">
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
          <img src={Wallet} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Payments</h4>
            <p>Understand the revenue share and how to receive payments.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
          <img src={Megaphone2} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Selling & Promotion</h4>
            <p>Learn about the announcement and promotional tools.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
          <img src={Filecheckale} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Quality Standards</h4>
            <p>Learn what it takes to create a high quality course.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
          <img src={FileEdit} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Course Building</h4>
            <p>Build your course curriculum and landing page.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
          <img src={CourseManagement} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Course Management</h4>
            <p>Maintain your course and engage with students.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
          <img src={TrueFile} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Trust & Safety</h4>
            <p>Policy and copyright questions and guidance.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<div className="tpc152">
    <div className="crse_content">
        <h3>Frequently Asked Questions</h3>
    </div>
    <div className="section3126 mt-20">
        <div className="Help2-grid-container">
            <a href="#" className="value_props51">                                                                                                          
                Promote Your Course With Coupons and Referral Links                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                Cursus Course Quality Checklist                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                Instructor Revenue Share                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                Instructor Promotional Agreements and Cursus Deals                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                How to Become an Instructor: FAQ                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                How to Select Your Payout Method And Become a Premium Instructor                                                                                                                    
            </a>
        </div>
    </div>
</div>
                    </div>
                  )}

                  {activeTab === 'student' && (
                    <div className={`tab-pane fade ${activeTab === 'student' ? 'show active' : ''}`} id="nav-student" role="tabpanel">
<div className="tpc152">
  <div className="crse_content">
    <h3>Select a topic to search for help</h3>
  </div>
  <div className="section3126 mt-20">
    <div className="Help1-Grid-container">
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
            <img src={Filecheckale} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Getting Started</h4>
            <p>Learn how Cursus works and how to start learning.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
            <img src={Account} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Account/Profile</h4>
            <p>Manage your account settings.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
            <img src={Destop} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Troubleshooting</h4>
            <p>Experiencing a bug? Check here.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
            <img src={BookHelp} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Course Taking</h4>
            <p>Everything about taking a course on Udemy.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
            <img src={Wallet} alt='' className='Help-icon-page' />
          </div>
          <div className="value_content">
            <h4>Purchase/Refunds</h4>
            <p>Learn about coupons, how to send gifts, and refunds.</p>
          </div>
        </a>
      </div>
      <div className="value_props50">
        <a href="#">
          <div className="value_icon">
          <img src={MobileHelp} alt='' className='Help-icon-page' />            
          </div>
          <div className="value_content">
            <h4>Mobile</h4>
            <p>On the go? Learn about our mobile app.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

<div className="Frequently-Quétion">
    <div className="crse_content">
        <h3>Frequently Asked Questions</h3>                                                                            
    </div>
    <div className="section3126 mt-20">
        <div className="Help2-grid-container">
            <a href="#" className="value_props51">                                                                                                          
                Lifetime Access                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                Cursus FAQ                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                Downloading Courses                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                Certificate of Completion                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                Refund a Course                                                                                                                    
            </a>
            <a href="#" className="value_props51">                                                                                                          
                How to Solve Payment Issues                                                                                                                    
            </a>
        </div>
    </div>
</div>
	
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
