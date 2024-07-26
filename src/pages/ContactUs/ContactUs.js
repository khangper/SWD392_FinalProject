import React from "react";
import "./ContactUs.css";
import Header from "../../components/Header-paidmember/Header";
import Footer from "../../components/Footer/Footer";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="Contact_Main">
        <div className="Contact_Title">
          <div className="Contact_Title_Container">
            <div className="Contact_Small_Title">
              <div className="Contact_Small_Title_Left">
                <a href="/home">Home&nbsp;</a>
                <p> / Contact Us</p>
              </div>
              <div className="Contact_Small_Title_Right">
                <a href="/home">Back to Home</a>
              </div>
            </div>
            <div className="Contact_Big_Title">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>

        <div className="Contact_Body">
          <div className="Contact_Body_Box">
            <a href="/help" className="Contact_link_step">
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/help_icon.svg"
                alt=""
              />
              <h4>Help Center</h4>
            </a>
          </div>
          <div className="Contact_Body_Box">
            <a href="blog" className="Contact_link_step">
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/blog_icon.svg"
                alt=""
              />
              <h4>Blog</h4>
            </a>
          </div>
          <div className="Contact_Body_Box">
            <a href="career" className="Contact_link_step">
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/career_icon.svg"
                alt=""
              />
              <h4>Careers</h4>
            </a>
          </div>
          <div className="Contact_Body_Box">
            <a href="comingsoon" className="Contact_link_step">
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/developer_icon.svg"
                alt=""
              />
              <h4>Developer Area</h4>
            </a>
          </div>
          <div className="Contact_Map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.682512094123!2d106.8050999758388!3d10.835590658098013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175272fb77e7199%3A0x98cb51d4483e1172!2sFPT%20Software%20F-Town%203!5e0!3m2!1sen!2s!4v1721522116112!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="Contact_Information">
            <div className="Contact_Checkout_Title">
              <h4>Contact Information</h4>
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg"
                alt=""
              />
            </div>
            <div className="Contact_Detail_Inf">
              <div className="Contact_txt_cntct">
                <span className="Contact_cntct_895">
                  <i className="uil uil-location-point"></i>Main Address :
                </span>
                <p>
                  #1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH,
                  Punjab, India
                </p>
              </div>
              <div className="Contact_txt_cntct">
                <span className="Contact_cntct_895">
                  <i className="uil uil-envelope"></i>Email Address :
                </span>
                <p>Info@edututsplus@gmail.com</p>
              </div>
              <div className="Contact_txt_cntct">
                <span className="Contact_cntct_895">
                  <i className="uil uil-mobile-android-alt"></i>Phone Number:
                </span>
                <p>+911234567890, 01610000000</p>
              </div>
              <div className="Contact_Social">
                <ul className="social-icons">
                  <a href="#" className="sc-fb">
                    <img src={facebook} />
                  </a>
                  <a href="#" className="sc-tw">
                    <img src={x} />
                  </a>
                  <a href="#" className="sc-ln">
                    <img src={linkedin} />
                  </a>
                  <a href="#" className="sc-yt">
                    <img src={youtube} />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
