import React, { useEffect, useRef, useState } from "react";
import "./Setting.css";
import setting from "..//../assets/setting.png";
const Setting = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  const [subscriptionsChecked, setSubscriptionsChecked] = useState(false);
  const [recommendedCoursesChecked, setRecommendedCoursesChecked] =
    useState(false);
  const [activityOnCommentsChecked, setActivityOnCommentsChecked] =
    useState(false);
  const [repliesToCommentsChecked, setRepliesToCommentsChecked] =
    useState(false);

  const [showOnSearchChecked, setShowOnSearchChecked] = useState(false);
  const [showCoursesChecked, setShowCoursesChecked] = useState(false);

    const [selectedMethod, setSelectedMethod] = useState("paypal");

    const countries = [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
      "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
      "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
      "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", 
      "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", 
      "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", 
      "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", 
      "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
      "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
      "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", 
      "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", 
      "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", 
      "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", 
      "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
      "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", 
      "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", 
      "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", 
      "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
      "Mauritius", "Mexico", "Micronesia (Federated States of)", "Moldova (Republic of)", 
      "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", 
      "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
      "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", 
      "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
      "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", 
      "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
      "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
      "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
      "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", 
      "Sweden", "Switzerland", "Syrian Arab Republic", "Tajikistan", "Tanzania, United Republic of", 
      "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", 
      "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
      "United Kingdom of Great Britain and Northern Ireland", "United States of America", 
      "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela (Bolivarian Republic of)", 
      "Viet Nam", "Yemen", "Zambia", "Zimbabwe"
    ];

      const [selectedCountry, setSelectedCountry] = useState("India");
      const [countryOpen, setCountryOpen] = useState(false);
    
      const toggleCountryDropdown = () => {
        setCountryOpen(!countryOpen);
      };
    
      const selectCountry = (country) => {
        setSelectedCountry(country);
        setCountryOpen(false);
      }
      const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setCountryOpen(false);
    }
  };
  const [transitionClass, setTransitionClass] = useState("fade-in");

  useEffect(() => {
    setTransitionClass("fade-out");
    const timer = setTimeout(() => {
      setTransitionClass("fade-in");
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedMethod]);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
                    <div className="link-label-group">
                      <div className="link-label">https://</div>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="link-label-group">
                      <div className="link-label">https://facebook.com/</div>
                      <input
                        type="text"
                        id="facebook"
                        name="facebook"
                        placeholder="Facebook Profile"
                      />
                    </div>
                    <div className="help-block">
                      Add your Facebook username (e.g. John Doe).
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="link-label-group">
                      <div className="link-label">https://facebook.com/</div>
                      <input
                        type="text"
                        id="facebook"
                        name="facebook"
                        placeholder="Facebook Profile"
                      />
                    </div>
                    <div className="help-block">
                      Add your Facebook username (e.g. John Doe).
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="link-label-group">
                      <div className="link-label">https://x.com/</div>
                      <input
                        type="text"
                        id="x"
                        name="x"
                        placeholder="X Profile"
                      />
                    </div>
                    <div className="help-block">
                      Add your X username (e.g. John Doe).
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="link-label-group">
                      <div className="link-label">
                        https://www.linkedin.com/
                      </div>
                      <input
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        placeholder="Linkedin Profile"
                      />
                    </div>
                    <div className="help-block">
                      Add your LinkedIn resource (e.g. in/John Doe).
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="link-label-group">
                      <div className="link-label">https://www.youtube.com/</div>
                      <input
                        type="text"
                        id="youtube"
                        name="youtube"
                        placeholder="Youtube Profile"
                      />
                    </div>
                    <div className="help-block">
                      Add your Youtube username (e.g. John Doe).
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
          <h4>Notifications - Choose when and how to be notified</h4>
          <p>Select push and email notifications you'd like to receive</p>
          <div className="basic-profile">
            <div className="basic-profile-header">
              <h4>Choose when and how to be notified</h4>
            </div>
            <div className="basic-profile-form">
              <div
                className={`checkbox-content ${
                  subscriptionsChecked ? "checked" : ""
                }`}
              >
                <input
                  className="hidden"
                  type="checkbox"
                  id="subscriptions"
                  name="subscriptions"
                  checked={subscriptionsChecked}
                  onChange={(e) => setSubscriptionsChecked(e.target.checked)}
                />
                <label htmlFor="subscriptions"></label>
                <div className="label-text">
                  <span className="label-title">Subscriptions</span>
                  <p>
                    Notify me about activity from the profiles I'm subscribed to
                  </p>
                </div>
              </div>
              <div
                className={`checkbox-content ${
                  recommendedCoursesChecked ? "checked" : ""
                }`}
              >
                <input
                  className="hidden"
                  type="checkbox"
                  id="recommended-courses"
                  name="recommended-courses"
                  checked={recommendedCoursesChecked}
                  onChange={(e) =>
                    setRecommendedCoursesChecked(e.target.checked)
                  }
                />
                <label htmlFor="recommended-courses"></label>
                <div className="label-text">
                  <span className="label-title">Recommended Courses</span>
                  <p>Notify me of courses I might like based on what I watch</p>
                </div>
              </div>
              <div
                className={`checkbox-content ${
                  activityOnCommentsChecked ? "checked" : ""
                }`}
              >
                <input
                  className="hidden"
                  type="checkbox"
                  id="activity-on-my-comments"
                  name="activity-on-my-comments"
                  checked={activityOnCommentsChecked}
                  onChange={(e) =>
                    setActivityOnCommentsChecked(e.target.checked)
                  }
                />
                <label htmlFor="activity-on-my-comments"></label>
                <div className="label-text">
                  <span className="label-title">Activity on my comments</span>
                  <p>
                    Notify me about activity on my comments on others' courses
                  </p>
                </div>
              </div>
              <div
                className={`checkbox-content ${
                  repliesToCommentsChecked ? "checked" : ""
                }`}
              >
                <input
                  className="hidden"
                  type="checkbox"
                  id="replies-to-my-comments"
                  name="replies-to-my-comments"
                  checked={repliesToCommentsChecked}
                  onChange={(e) =>
                    setRepliesToCommentsChecked(e.target.checked)
                  }
                />
                <label htmlFor="replies-to-my-comments"></label>
                <div className="label-text">
                  <span className="label-title">Replies to my comments</span>
                  <p>Notify me about replies to my comments</p>
                </div>
              </div>
              <div className="divider"></div>
            </div>
            <div className="basic-profile">
              <div className="basic-profile-header">
                <h4>Email notifications</h4>
                <p>
                  Your emails are sent to gambol943@gmail.com. To unsubcribe
                  from an email, click the 'Unsubscribe" link at the bottom of
                  it. <a href="#">Learn more</a> about emails from Edututs+.
                </p>
              </div>
              <div className="basic-profile-form">
                <div
                  className={`checkbox-content ${
                    subscriptionsChecked ? "checked" : ""
                  }`}
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    id="cursus-activity"
                    name="cursus-activity"
                    checked={subscriptionsChecked}
                    onChange={(e) => setSubscriptionsChecked(e.target.checked)}
                  />
                  <label htmlFor="cursus-activity"></label>
                  <div className="label-text">
                    <span className="label-title">
                      Send me emails about my Cursus activity and updates I
                      requested
                    </span>
                    <p>
                      If this setting is turned off, Cursus may still send you
                      messages regarding your account, required service
                      announcements, legal notifications, and privacy matters.
                    </p>
                  </div>
                </div>
                <div
                  className={`checkbox-content ${
                    recommendedCoursesChecked ? "checked" : ""
                  }`}
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    id="promotions"
                    name="promotions"
                    checked={recommendedCoursesChecked}
                    onChange={(e) =>
                      setRecommendedCoursesChecked(e.target.checked)
                    }
                  />
                  <label htmlFor="promotions"></label>
                  <div className="label-text">
                    <span className="label-title">
                      Promotions, course recommendations, and helpful resources
                      from Cursus.
                    </span>
                  </div>
                </div>
                <div
                  className={`checkbox-content ${
                    activityOnCommentsChecked ? "checked" : ""
                  }`}
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    id="instructor-announcements"
                    name="instructor-announcements"
                    checked={activityOnCommentsChecked}
                    onChange={(e) =>
                      setActivityOnCommentsChecked(e.target.checked)
                    }
                  />
                  <label htmlFor="instructor-announcements"></label>
                  <div className="label-text">
                    <span className="label-title">
                      Announcements from instructors whose course(s) I’m
                      enrolled in.
                    </span>
                    <p>
                      To adjust this preference by course, leave this box
                      checked and go to the course dashboard and click on
                      "Options" to opt in or out of specific announcements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="save-changes-button">Save Changes</button>
          </div>
        </section>

        <section
          id="Privacy"
          className={`setting-tabcontent ${
            activeTab === "Privacy" ? "active" : ""
          }`}
        >
          <h4>Privacy</h4>
          <p>Modify your privacy settings here.</p>
          <div className="basic-profile">
            <div className="basic-profile-header">
              <h4>Profile page settings</h4>
            </div>
            <div className="basic-profile-form">
              <div
                className={`checkbox-content ${
                  showOnSearchChecked ? "checked" : ""
                }`}
              >
                <input
                  className="hidden"
                  type="checkbox"
                  id="showonOnSearch"
                  name="showonOnSearch"
                  checked={showOnSearchChecked}
                  onChange={(e) => setShowOnSearchChecked(e.target.checked)}
                />
                <label htmlFor="showonOnSearch"></label>
                <div className="label-text-privacy">
                <p>
                   Show your profile on search engines.
                  </p>
                </div>           
              </div>
              <div
                className={`checkbox-content ${
                  showCoursesChecked ? "checked" : ""
                }`}
              >
                <input
                  className="hidden"
                  type="checkbox"
                  id="show-courses"
                  name="show-courses"
                  checked={showCoursesChecked}
                  onChange={(e) =>
                    setShowCoursesChecked(e.target.checked)
                  }
                />
                <label htmlFor="show-courses"></label>
                <div className="label-text-privacy">         
                  <p>Show courses you're taking on your profile page</p>
                </div>
              </div>
            </div>
            <button className="save-changes-button">Save Changes</button>
          </div>

        </section>
        <section
          id="Billing"
          className={`setting-tabcontent ${
            activeTab === "Billing" ? "active" : ""
          }`}
        >
          <h4>Billing and Payouts</h4>
          <p>Want to charge for a course? Provide your payment info and opt in for our promotional programs</p>
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
                    placeholder="Academy Name"
                  />
                </div>
                <div className="help-block">
                  If you want your invoices addressed to a academy. Leave blank to use your full name.
                </div>
              </div>
              <div>
              <div className="billing-dropdown" ref={dropdownRef}>
              <button className={`dropdown-toggle ${countryOpen ? 'active' : ''}`} onClick={toggleCountryDropdown}>
                {selectedCountry} <span className="arrow"></span>
              </button>
              {countryOpen && (
                <div className="dropdown-menu">
                  {countries.map((country) => (
                    <div
                      key={country}
                      className={`dropdown-item ${country === selectedCountry ? 'selected' : ''}`}
                      onClick={() => selectCountry(country)}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
              </div>
              <div className="headline-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    placeholder="Address Line 1"
                  />
                </div>      
              </div>
              <div className="headline-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    placeholder="Address Line 2"
                  />
                </div>      
              </div>
              <div className="headline-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    placeholder="City"
                  />
                </div>      
              </div>
              <div className="headline-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    placeholder="State/ Province/ Region"
                  />
                </div>      
              </div>
              <div className="headline-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    placeholder="Zip/ Postal Code"
                  />
                </div>      
              </div>
              <div className="headline-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    placeholder="Phone Number"
                  />
                </div>      
              </div>         
              <div className="divider"></div>
              <div className="basic-profile">
              <div className="basic-profile-header">
                <h4>Exclusive Sales</h4>
                <p>Sell more of your exclusive products of this type (equal to the amount on the left) to get % cut from further exclusive sales</p>
              </div>
              <div className="basic-profile-form">
              <div className="sales-grid">
    <div className="sales-grid-row">
      <div className="sales-grid-item highlight">$0</div>
      <div className="sales-grid-item">$2,000</div>
      <div className="sales-grid-item">$8,000</div>
      <div className="sales-grid-item">$18,000</div>
      <div className="sales-grid-item">$40,000</div>
      <div className="sales-grid-item">$75,000</div>
      <div className="sales-grid-item">$100,000</div>
    </div>
    <div className="sales-grid-row">
      <div className="sales-grid-item highlight">50%</div>
      <div className="sales-grid-item">53%</div>
      <div className="sales-grid-item">55%</div>
      <div className="sales-grid-item">58%</div>
      <div className="sales-grid-item">62%</div>
      <div className="sales-grid-item">70%</div>
      <div className="sales-grid-item">80%</div>
    </div>
  </div>
              </div>
              <div className="basic-profile-header">
                <h4>Non-Exclusive Sales</h4>
                <p>Sell more of your non-exclusive products of this type (equal to the amount on the left) to get 70% cut from further non-exclusive sales</p>
              </div>
              <div className="basic-profile-form">
              <div className="sales-grid">
    <div className="sales-grid-row">
      <div className="sales-grid-item highlight">$0</div>
      <div className="sales-grid-item">$2,000</div>
      <div className="sales-grid-item">$8,000</div>
      <div className="sales-grid-item">$18,000</div>
      <div className="sales-grid-item">$40,000</div>
      <div className="sales-grid-item">$75,000</div>
      <div className="sales-grid-item">$100,000</div>
    </div>
    <div className="sales-grid-row">
      <div className="sales-grid-item highlight">30%</div>
      <div className="sales-grid-item">30%</div>
      <div className="sales-grid-item">30%</div>
      <div className="sales-grid-item">30%</div>
      <div className="sales-grid-item">30%</div>
      <div className="sales-grid-item">30%</div>
      <div className="sales-grid-item">30%</div>
    </div>
  </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="basic-profile">
            <div className="basic-profile-header">
              <h4>Withdrawal Method</h4>
              <p>Add information about yourself</p>
            </div>
            <div className="basic-profile-form">
            <div className="withdrawal-method">
              <h4>Withdrawal Method</h4>
              <div className="radio-group">
                <label className={`radio-button ${selectedMethod === "paypal" ? "selected" : ""}`}>
                  <input type="radio" name="withdrawal" value="paypal" checked={selectedMethod === "paypal"} onChange={() => setSelectedMethod("paypal")} />
                  Paypal
                </label>
                <label className={`radio-button ${selectedMethod === "payoneer" ? "selected" : ""}`}>
                  <input type="radio" name="withdrawal" value="payoneer" checked={selectedMethod === "payoneer"} onChange={() => setSelectedMethod("payoneer")} />
                  Payoneer
                </label>
                <label className={`radio-button ${selectedMethod === "swift" ? "selected" : ""}`}>
                  <input type="radio" name="withdrawal" value="swift" checked={selectedMethod === "swift"} onChange={() => setSelectedMethod("swift")} />
                  Swift
                </label>
              </div>

              <div className="account-details-wrapper">
                {selectedMethod === "paypal" && (
                  <div className={`account-details ${transitionClass}`}>
                    <h4>Your PayPal Account</h4>
                    <p className="price">Minimum - $50.00</p>
                    <p>Get paid by credit or debit card, PayPal transfer or even via bank account in just a few clicks. All you need is your email address or mobile number. <a href="#">More about PayPal</a> | <a href="#">Create an account</a></p>
                    <input type="email" placeholder="Email address" />
                    <input type="email" placeholder="Confirm email address" />
                    <button className="set-payout-btn">Set Payout Account</button>
                  </div>
                )}

                {selectedMethod === "payoneer" && (
                  <div className={`account-details ${transitionClass}`}>
                    <h4>Your Payoneer Account</h4>
                    <p className="price">Minimum - $50.00</p>
                    <p>Payoneer Prepaid MasterCard® or Global Bank Transfer (Payoneer) offers an easy, convenient and cost effective way to get paid. <a href="#">More about Payoneer</a> | <a href="#">Payoneer FAQs</a></p>
                    <input type="email" placeholder="Email address" />
                    <input type="email" placeholder="Confirm email address" />
                    <button className="set-payout-btn">Set Payout Account</button>
                  </div>
                )}

                {selectedMethod === "swift" && (
                  <div className={`account-details ${transitionClass}`}>
                    <h4>Your SWIFT Account</h4>
                    <p className="price">Minimum - $500.00</p>
                    <p>SWIFT (International Transfer) get paid directly into your bank account. Connected with over 9000 banking organisations, security institutions and customers in more than 200 countries. <a href="#">More about SWIFT</a></p>
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Your Address" />
                    <select>
                      <option>Select Country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    <input type="text" placeholder="Swift-Code" />
                    <input type="text" placeholder="Bank Account Number" />
                    <input type="text" placeholder="Bank Name" />
                    <input type="text" placeholder="Bank Address" />
                    <button className="set-payout-btn">Set Payout Account</button>
                  </div>
                )}
              </div>
              </div>
            </div>
            </div>
            </div>
            
            <button className="save-changes-button">Save Changes</button>
          </div>
        </section>
        <section
          id="API"
          className={`setting-tabcontent ${
            activeTab === "API" ? "active" : ""
          }`}
        >
          <h4>Affiliate API</h4>
          <p>The Cursus Affiliate API exposes functionalities of Cursus to help developers build client applications and intergrations with Cursus.</p>
          <p className="api-text">To see more details, please visit <a href="#">Cursus Affiliate API</a></p>
          <button className="api-btn">Request Affiliate API Client</button>
          <div className="nt_apt">
        <div className="info-icon">i</div>
        You don't have any API clients yet.
      </div>
        </section>
        <section
          id="CloseAccount"
          className={`setting-tabcontent ${
            activeTab === "CloseAccount" ? "active" : ""
          }`}
        >
          <h4>Close account</h4>
          <p><strong>Warning:</strong> If you close your account, you will be unsubcribed from all your 5 courses, and will lose access forever.</p>
          <div className="close-account-group">
                <div className="form-group">
                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="help-block">
                 Are you sure you want to close your account?
                </div>
                <button className="close-account-btn">Close Account</button>
              </div>
        </section>
      </section>
    </div>
  );
};

export default Setting;
