import React, { useState } from "react";
import "./Setting.css";
import setting from "..//../assets/setting.png";
const Setting = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="setting-container">
      <section className="setting-header">
        <img src={setting} />
        Setting
      </section>
      <section className="setting-tabs">
        <div className="setting-tab">
          <button
            className={`tablinks ${activeTab === "Account" ? "active" : ""}`}
            onClick={() => openTab("Account")}
          >
            Account
          </button>
          <button
            className={`tablinks ${
              activeTab === "Notification" ? "active" : ""
            }`}
            onClick={() => openTab("Notification")}
          >
            Notification
          </button>
          <button
            className={`tablinks ${activeTab === "Privacy" ? "active" : ""}`}
            onClick={() => openTab("Privacy")}
          >
            Privacy
          </button>
          <button
            className={`tablinks ${activeTab === "Billing" ? "active" : ""}`}
            onClick={() => openTab("Billing")}
          >
            Billing and Payouts
          </button>
          <button
            className={`tablinks ${activeTab === "API" ? "active" : ""}`}
            onClick={() => openTab("API")}
          >
            API Clients
          </button>
          <button
            className={`tablinks ${
              activeTab === "CloseAccount" ? "active" : ""
            }`}
            onClick={() => openTab("CloseAccount")}
          >
            Close Account
          </button>
        </div>
        <section
          id="Account"
          className={`setting-tabcontent ${
            activeTab === "Account" ? "active" : ""
          }`}
        >
          <h4>Your Cursus Account</h4>
          <p>
            This is your public presence on Cursus.You need an account to upload
            your paid courses, comment on courses, purchased by students, or
            earning.
          </p>
          <div className="basic-profile">
            <div className="basic-profile-header">
              <h4>Basic Profile</h4>
              <p>Add information about yourself</p>
            </div>
            <div className="basic-profile-form">
              <div className="name-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="headline-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    placeholder="Headline"
                  />
                  <div className="form-counter">36</div>
                </div>
                <div className="help-block">
                  Add a professional headline like, "Engineerat Cursus" or
                  "Architect"
                </div>
              </div>
              <div className="description-group">
                <div className="form-group">
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Write a little description about you..."
                  />
                  <div className="help-block">
                    Links and coupon codes are not permitted in this section.
                  </div>
                </div>
              </div>
              <div className="divider"></div>
             
            </div>
            <div className="basic-profile">
              <div className="basic-profile-header">
                <h4>Profile Links</h4>
              </div>
              <div className="basic-profile-form">
                <div className="link-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="Website"
                  />
                  <div className="help-block">
                    Use a full URL, like https://www.example.com
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="github"
                    name="github"
                    placeholder="GitHub"
                  />
                  <div className="help-block">
                    Use your username, like https://github.com/username
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder="LinkedIn"
                  />
                  <div className="help-block">
                    Use your username, like https://www.linkedin.com/in/username
                  </div>
                </div>
                </div>

              </div>
            </div>
            <button className="save-changes-button">Save Changes</button>
          </div>
        </section>
        <section
          id="Notification"
          className={`setting-tabcontent ${
            activeTab === "Notification" ? "active" : ""
          }`}
        >
          <h4>Notification</h4>
          <p>Notification settings content goes here.</p>
        </section>
        <section
          id="Privacy"
          className={`setting-tabcontent ${
            activeTab === "Privacy" ? "active" : ""
          }`}
        >
          <h4>Privacy</h4>
          <p>Privacy settings content goes here.</p>
        </section>
        <section
          id="Billing"
          className={`setting-tabcontent ${
            activeTab === "Billing" ? "active" : ""
          }`}
        >
          <h4>Billing and Payouts</h4>
          <p>Billing and Payouts settings content goes here.</p>
        </section>
        <section
          id="API"
          className={`setting-tabcontent ${
            activeTab === "API" ? "active" : ""
          }`}
        >
          <h4>API Clients</h4>
          <p>API Clients settings content goes here.</p>
        </section>
        <section
          id="CloseAccount"
          className={`setting-tabcontent ${
            activeTab === "CloseAccount" ? "active" : ""
          }`}
        >
          <h4>Close Account</h4>
          <p>Close Account settings content goes here.</p>
        </section>
      </section>
    </div>
  );
};

export default Setting;
