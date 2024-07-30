import React, { useEffect, useState, useRef } from "react";
import "./CertificationFillForm.css";
import Header from "../../components/Header-paidmember/Header";
import Footer from "../../components/Footer/Footer";
import { PATH_NAME } from "../../constant/pathname";
import { Link } from "react-router-dom";
const CertificationFillForm = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const optionsRef = useRef([]);

  const toggleOptions = (section) => {
    setVisibleSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (!optionsRef.current.some((ref) => ref && ref.contains(event.target))) {
      setVisibleSection(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="CertificationFillForm_Main">
        <div className="CertificationFillForm_Title">
          <div className="CertificationFillForm_Title_Container">
            <div className="CertificationFillForm_Small_Title">
              <div className="CertificationFillForm_Small_Title_Left">
                <Link to={PATH_NAME.HOME}>Home&nbsp;</Link>
                <Link to={PATH_NAME.CERTIFICATION_CENTER}>
                  {" "}
                  / Certification Center&nbsp;
                </Link>
                <p> / Certification Fill Form</p>
              </div>
              <div className="CertificationFillForm_Small_Title_Right">
                <Link to={PATH_NAME.CERTIFICATION_CENTER}>
                  Back to Certification Center
                </Link>
              </div>
            </div>
            <div className="CertificationFillForm_Big_Title">
              <h2>Certification Fill Form</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="CertificationFillForm_Body">
        <div className="CertificationFillForm_Container">
          <div className="CertificationFillForm_Form">
            <div className="CertificationFillForm_Sign_Form">
              <h2>Fill in before you start:</h2>
              <form>
                <div className="CertificationFillForm_Sign_Form_Input SFI40">
                  <input
                    className="CertificationFillForm_srch_explore"
                    type="text"
                    name="fullname"
                    id="id_fullname"
                    required
                    maxLength="64"
                    placeholder="Full Name"
                  />
                </div>

                <div className="CertificationFillForm_Sign_Form_Input SFI15">
                  <input
                    className="CertificationFillForm_srch_explore"
                    type="email"
                    name="emailaddress"
                    id="id_email"
                    required
                    maxLength="64"
                    placeholder="Email Address"
                  />
                </div>

                <div className="CertificationFillForm_Sign_Form_Input SFI15">
                  <input
                    className="CertificationFillForm_srch_explore"
                    type="text"
                    name="phonenumber"
                    id="id_phonenumber"
                    required
                    maxLength="10"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="CertificationFillForm_Category_Cop">
                  <h4>Select Category</h4>
                  <div
                    className="CertificationFillForm_Category_Cop_Items"
                    ref={(el) => (optionsRef.current[0] = el)}
                  >
                    <div onClick={() => toggleOptions("development")}>
                      <span>Development</span>
                      <span>
                        {visibleSection === "development" ? "-" : "+"}
                      </span>
                    </div>
                    {visibleSection === "development" && (
                      <div className="Category_Cop_Items_Labels">
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="WordPress"
                            checked={selectedOption === "WordPress"}
                            onChange={handleOptionChange}
                          />
                          WordPress
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="HTML CSS"
                            checked={selectedOption === "HTML CSS"}
                            onChange={handleOptionChange}
                          />
                          HTML CSS
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="Full Time"
                            checked={selectedOption === "Full Time"}
                            onChange={handleOptionChange}
                          />
                          Full Time
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="MotoCMS 3"
                            checked={selectedOption === "MotoCMS 3"}
                            onChange={handleOptionChange}
                          />
                          MotoCMS 3
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="Joomla"
                            checked={selectedOption === "Joomla"}
                            onChange={handleOptionChange}
                          />
                          Joomla
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="OpenCart"
                            checked={selectedOption === "OpenCart"}
                            onChange={handleOptionChange}
                          />
                          OpenCart
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="Joomla Pro"
                            checked={selectedOption === "Joomla Pro"}
                            onChange={handleOptionChange}
                          />
                          Joomla Pro
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="WordPress Pro"
                            checked={selectedOption === "WordPress Pro"}
                            onChange={handleOptionChange}
                          />
                          WordPress Pro
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="WordPress Elementor"
                            checked={selectedOption === "WordPress Elementor"}
                            onChange={handleOptionChange}
                          />
                          WordPress Elementor
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="WordPress Elementor Pro"
                            checked={
                              selectedOption === "WordPress Elementor Pro"
                            }
                            onChange={handleOptionChange}
                          />
                          WordPress Elementor Pro
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="development"
                            value="PrestaShop"
                            checked={selectedOption === "PrestaShop"}
                            onChange={handleOptionChange}
                          />
                          PrestaShop
                        </label>
                      </div>
                    )}
                  </div>

                  <div
                    className="CertificationFillForm_Category_Cop_Items"
                    ref={(el) => (optionsRef.current[1] = el)}
                  >
                    <div onClick={() => toggleOptions("finance")}>
                      <span>Finance & Accounting</span>
                      <span>{visibleSection === "finance" ? "-" : "+"}</span>
                    </div>
                    {visibleSection === "finance" && (
                      <div className="Category_Cop_Items_Labels">
                        <label>
                          <input
                            type="radio"
                            name="finance_accouting"
                            value="Accounting"
                            checked={selectedOption === "Accounting"}
                            onChange={handleOptionChange}
                          />
                          Accounting
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="finance_accouting"
                            value="Finance Fundamentals"
                            checked={selectedOption === "Finance Fundamentals"}
                            onChange={handleOptionChange}
                          />
                          Finance Fundamentals
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="finance_accouting"
                            value="Bookkeeping"
                            checked={selectedOption === "Bookkeeping"}
                            onChange={handleOptionChange}
                          />
                          Bookkeeping
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="finance_accouting"
                            value="Political Science"
                            checked={selectedOption === "Political Science"}
                            onChange={handleOptionChange}
                          />
                          Political Science
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="finance_accouting"
                            value="Finance"
                            checked={selectedOption === "Finance"}
                            onChange={handleOptionChange}
                          />
                          Finance
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="finance_accouting"
                            value="Cryptocurrency"
                            checked={selectedOption === "Cryptocurrency"}
                            onChange={handleOptionChange}
                          />
                          Cryptocurrency
                        </label>
                      </div>
                    )}
                  </div>

                  <div
                    className="CertificationFillForm_Category_Cop_Items"
                    ref={(el) => (optionsRef.current[2] = el)}
                  >
                    <div onClick={() => toggleOptions("design")}>
                      <span>Design</span>
                      <span>{visibleSection === "design" ? "-" : "+"}</span>
                    </div>
                    {visibleSection === "design" && (
                      <div className="Category_Cop_Items_Labels">
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="Adobe Photoshop"
                            checked={selectedOption === "Adobe Photoshop"}
                            onChange={handleOptionChange}
                          />
                          Adobe Photoshop
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="Adobe Illustrator"
                            checked={selectedOption === "Adobe Illustrator"}
                            onChange={handleOptionChange}
                          />
                          Adobe Illustrator
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="Adobe After Effects"
                            checked={selectedOption === "Adobe After Effects"}
                            onChange={handleOptionChange}
                          />
                          Adobe After Effects
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="Adobe InDesign"
                            checked={selectedOption === "Adobe InDesign"}
                            onChange={handleOptionChange}
                          />
                          Adobe InDesign
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="Unity"
                            checked={selectedOption === "Unity"}
                            onChange={handleOptionChange}
                          />
                          Unity
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="Drawing"
                            checked={selectedOption === "Drawing"}
                            onChange={handleOptionChange}
                          />
                          Drawing
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="Game Development Fundamentals"
                            checked={
                              selectedOption === "Game Development Fundamentals"
                            }
                            onChange={handleOptionChange}
                          />
                          Game Development Fundamentals
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="3D Modeling"
                            checked={selectedOption === "3D Modeling"}
                            onChange={handleOptionChange}
                          />
                          3D Modeling
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="Motion Graphics"
                            checked={selectedOption === "Motion Graphics"}
                            onChange={handleOptionChange}
                          />
                          Motion Graphics
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="2D Animation"
                            checked={selectedOption === "2D Animation"}
                            onChange={handleOptionChange}
                          />
                          2D Animation
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="design"
                            value="T-Shirt Design"
                            checked={selectedOption === "T-Shirt Design"}
                            onChange={handleOptionChange}
                          />
                          T-Shirt Design
                        </label>
                      </div>
                    )}
                  </div>

                  <div
                    className="CertificationFillForm_Category_Cop_Items"
                    ref={(el) => (optionsRef.current[3] = el)}
                  >
                    <div onClick={() => toggleOptions("marketing")}>
                      <span>Marketing</span>
                      <span>{visibleSection === "marketing" ? "-" : "+"}</span>
                    </div>
                    {visibleSection === "marketing" && (
                      <div className="Category_Cop_Items_Labels">
                        <label>
                          <input
                            type="radio"
                            name="marketing"
                            value="Google Ads (Adwords)"
                            checked={selectedOption === "Google Ads (Adwords)"}
                            onChange={handleOptionChange}
                          />
                          Google Ads (Adwords)
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="marketing"
                            value="Google Ads (Adwords) Certification"
                            checked={
                              selectedOption ===
                              "Google Ads (Adwords) Certification"
                            }
                            onChange={handleOptionChange}
                          />
                          Google Ads (Adwords) Certification
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="marketing"
                            value="Social Marketing"
                            checked={selectedOption === "Social Marketing"}
                            onChange={handleOptionChange}
                          />
                          Social Marketing
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="marketing"
                            value="Email Marketing"
                            checked={selectedOption === "Email Marketing"}
                            onChange={handleOptionChange}
                          />
                          Email Marketing
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="marketing"
                            value="Business Strategy"
                            checked={selectedOption === "Business Strategy"}
                            onChange={handleOptionChange}
                          />
                          Business Strategy
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="marketing"
                            value="SEO"
                            checked={selectedOption === "SEO"}
                            onChange={handleOptionChange}
                          />
                          SEO
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="marketing"
                            value="PPC Advertising"
                            checked={selectedOption === "PPC Advertising"}
                            onChange={handleOptionChange}
                          />
                          PPC Advertising
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="marketing"
                            value="Blogging"
                            checked={selectedOption === "Blogging"}
                            onChange={handleOptionChange}
                          />
                          Blogging
                        </label>
                      </div>
                    )}
                  </div>

                  <div
                    className="CertificationFillForm_Category_Cop_Items"
                    ref={(el) => (optionsRef.current[4] = el)}
                  >
                    <div onClick={() => toggleOptions("teaching_academy")}>
                      <span>Teaching & Academy</span>
                      <span>
                        {visibleSection === "teaching_academy" ? "-" : "+"}
                      </span>
                    </div>
                    {visibleSection === "teaching_academy" && (
                      <div className="Category_Cop_Items_Labels">
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="Math"
                            checked={selectedOption === "Math"}
                            onChange={handleOptionChange}
                          />
                          Math
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="Humanities"
                            checked={selectedOption === "Humanities"}
                            onChange={handleOptionChange}
                          />
                          Humanities
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="Engineering"
                            checked={selectedOption === "Engineering"}
                            onChange={handleOptionChange}
                          />
                          Engineering
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="Science"
                            checked={selectedOption === "Science"}
                            onChange={handleOptionChange}
                          />
                          Science
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="Social Science"
                            checked={selectedOption === "Social Science"}
                            onChange={handleOptionChange}
                          />
                          Social Science
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="English Language"
                            checked={selectedOption === "English Language"}
                            onChange={handleOptionChange}
                          />
                          English Language
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="German Language"
                            checked={selectedOption === "German Language"}
                            onChange={handleOptionChange}
                          />
                          German Language
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="Sign Language"
                            checked={selectedOption === "Sign Language"}
                            onChange={handleOptionChange}
                          />
                          Sign Language
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="French Language"
                            checked={selectedOption === "French Language"}
                            onChange={handleOptionChange}
                          />
                          French Language
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="Spanish Language"
                            checked={selectedOption === "Spanish Language"}
                            onChange={handleOptionChange}
                          />
                          Spanish Language
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="English Grammar"
                            checked={selectedOption === "English Grammar"}
                            onChange={handleOptionChange}
                          />
                          English Grammar
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            name="teaching_academy"
                            value="Ielts"
                            checked={selectedOption === "Ielts"}
                            onChange={handleOptionChange}
                          />
                          Ielts
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                <p className="CertificationFillForm_testtrm145">
                  By signing up, you agree to our
                  <Link to={PATH_NAME.TERMS_OF_USE}>
                    {" "}
                    Privacy Policy
                  </Link> and{" "}
                  <Link to={PATH_NAME.TERMS_OF_USE}>Terms and Conditions</Link>.
                </p>

                <Link to={PATH_NAME.CERTIFICATION_TEST}>
                  <button
                    className="CertificationFillForm_login_btn"
                    type="submit"
                  >
                    Lets Go
                  </button>
                </Link>

                <p className="CertificationFillForm_questrm145">
                  Please be ready to answer <span>20 questions</span> within{" "}
                  <span>1 hours</span>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CertificationFillForm;
