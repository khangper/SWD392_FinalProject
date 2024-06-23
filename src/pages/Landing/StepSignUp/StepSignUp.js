import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StepSignUp.css';

export default function StepSignUp() {
  const [activeTab, setActiveTab] = useState('instructor'); // State to store the active tab
  const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-logo-container">
        <Link to="/home">
          <img
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg"
            alt="Cursus Logo"
            className="login-logo"
          />
        </Link>
      </div>
      <div className="login-form-container">
        <div className="tablist">
          <div
            className={`tab ${activeTab === 'instructor' ? 'active' : ''}`}
            onClick={() => handleTabChange('instructor')}
          >
            <div className="instructor-sign-up">Instructor Sign Up</div>
          </div>
          <div
            className={`tab ${activeTab === 'student' ? 'active' : ''}`}
            onClick={() => handleTabChange('student')}
          >
            <div className="student-sign-up">Student Sign Up</div>
          </div>
        </div>
        {activeTab === 'instructor' && (
          <div className="instructor-sign-up-form">
            <p className="login-bannerInstructor">Sign Up and Create Course!</p>
            <form>
              <select className="selectpicker" onChange={handleSelectChange} value={selectedOption}>
                <option value="">Select Category</option>
                <option value="1" className={selectedOption === '1' ? 'red' : ''}>Development</option>
                <option value="2" className={selectedOption === '2' ? 'red' : ''}>Business</option>
                <option value="3" className={selectedOption === '3' ? 'red' : ''}>Finance & Accounting</option>
                <option value="4" className={selectedOption === '4' ? 'red' : ''}>IT & Software</option>
                <option value="5" className={selectedOption === '5' ? 'red' : ''}>Office Productivity</option>
                <option value="6" className={selectedOption === '6' ? 'red' : ''}>Personal Development</option>
                <option value="7" className={selectedOption === '7' ? 'red' : ''}>Design</option>
                <option value="8" className={selectedOption === '8' ? 'red' : ''}>Marketing</option>
                <option value="9" className={selectedOption === '9' ? 'red' : ''}>Lifestyle</option>
                <option value="10" className={selectedOption === '10' ? 'red' : ''}>Photography</option>
                <option value="11" className={selectedOption === '11' ? 'red' : ''}>Health & Fitness</option>
                <option value="12" className={selectedOption === '12' ? 'red' : ''}>Music</option>
                <option value="13" className={selectedOption === '13' ? 'red' : ''}>Teaching & Academics</option>
              </select>
              <div className="ui search focus mt-15">
                <div className="ui form swdh30">
                  <div className="field">
                    <textarea
                      rows="3"
                      name="description"
                      id="id_about"
                      placeholder="Write a little description about you..."
                      className="textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="help-block">Your biography should have at least 12000 characters.</div>
              </div>
              <button className="loginSingUp-btn" type="submit">
                Instructor Sign Up Now
              </button>
            </form>
            <p className="top38px">
          Already have an account? <Link to="/Login" className="LoginMove">Log In</Link>
        </p>
          </div>
        )}
        {activeTab === 'student' && (
          <div className="student-sign-up-form">
           <div className="instructor-sign-up-form">
            <p className="login-bannerInstructor">Sign Up and Start Learning</p>
            <form>
        
              <div className="ui search focus mt-15">
                <div className="ui form swdh30">
                  <div className="field">
                    <textarea
                      rows="3"
                      name="description"
                      id="id_about"
                      placeholder="Write a little description about you..."
                      className="textarea1-student"
                    ></textarea>
                  </div>
                </div>
                <div className="help-block">Your biography should have at least 12000 characters.</div>
              </div>
              <button className="loginSingUp-btn" type="submit">
                Student Sign Up Now
              </button>
            </form>
            <p className="top38px">
          Already have an account? <Link to="/Login" className="LoginMove">Log In</Link>
        </p>
          </div>
          </div>
        )}
      </div>
      <div className="form-footer">
        <img
          alt=""
          className="footer-logo"
          src="https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png"
        />
        <span>
          © 2024 <strong>Cursus</strong>. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
