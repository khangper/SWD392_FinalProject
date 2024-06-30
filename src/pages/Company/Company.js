import React from "react";
import "./Company.css";
import Header from "../../components/Header/Header";
import India from "../../assets/India.png";
import Cali from "../../assets/Cali.png";
import Brazil from "../../assets/Brazil.png";
import { FiPhone } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";

const Company = () => {
  return (
    <div className="company">
      <Header />
      <main>
        <div className="company-parent">
          <div className="company-background">
            <div className="company-navigation-links-parent">
              <div className="company-navigation-links">
                <a href="/about-us" className="company-about">
                  About
                </a>
              </div>
              <div className="company-navigation-links-1">
                <a href="/our-blog" className="company-blog">
                  Blog
                </a>
              </div>
              <div className="company-navigation-links-2">
                <a href="/company-details" className="company-company">
                  Company
                </a>
              </div>
              <div className="company-navigation-links-3">
                <a href="/career" className="company-careers">
                  Careers
                </a>
              </div>
              <div className="company-navigation-links-4">
                <a href="/press" className="company-press">
                  Press
                </a>
              </div>
            </div>
            <div className="company-learning-heading">
              <h2 className="company-heading-2">
                Expanding learning opportunities
              </h2>
            </div>
          </div>

          <div className="company-our-story">
            <div className="company-story-content">
              <div className="company-story-wrapper">
                <div className="company-heading-2-our-story">
                  <h2 className="company-heading-23">Our Story</h2>
                  <div className="company-line-story"></div>
                </div>
                <div className="company-our-story-container">
                  <p className="company-our-story-content">
                    Cursus was founded in 2020 by computer science instructor
                    with a vision to provide anyone, anywhere with access to the
                    world’s best education. Now many instructors put their
                    courses online for anyone to take and taught more learners
                    in a few months than they could over an entire lifetime in
                    the classroom. Today, Cursus has expanded to reach more than
                    40 million people and 2,300 businesses around the world. On
                    Cursus you can find online courses, instructors, and
                    certificates from Cursus.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://gambolthemes.net/html-items/cursus-new-demo/images/about/company.jpg"
              alt=""
              className="company-story-img"
            />
          </div>

          <div className="company-office-locations">
            <div className="company-office-location-one-parent">
              <div className="company-office-location-one">
                <div className="company-location-elements-one">
                  <div className="company-location-details-one">
                    <h3 className="company-heading-3">Our Offices</h3>
                  </div>
                  <div className="company-office-one-description">
                    <div className="company-cursus-branches-around">
                      Cursus branches around the world
                    </div>
                    <div className="company-line-wrapper"></div>
                  </div>
                </div>
              </div>
              <div className="company-office-link-one">
                <div className="company-background-border">
                  <div className="company-link-2">
                    <img src={India} alt="" className="company-image-company" />
                    <div className="company-gradient" />
                  </div>
                  <div className="company-office-city-one">
                    <div className="company-office-full-address-one">
                      <div className="company-country">Punjab, India</div>
                      <div className="company-address-container">
                        <p className="company-address">
                          #1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road,
                          141001, LDH, Punjab, India
                        </p>
                      </div>
                      <div className="company-location-elements-two">
                        <div className="company-location-details-two">
                          <div className="company-office-two-title">
                            <FiPhone className="company-icon-phone" />
                          </div>
                          <div className="company-office-two-address">
                            0161-1234567
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="company-background-border">
                  <div className="company-link-2">
                    <img src={India} alt="" className="company-image-company" />
                    <div className="company-gradient" />
                  </div>
                  <div className="company-office-city-one">
                    <div className="company-office-full-address-one">
                      <div className="company-country">Punjab, India</div>
                      <div className="company-address-container">
                        <p className="company-address">
                          #1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road,
                          141001, LDH, Punjab, India
                        </p>
                      </div>
                      <div className="company-location-elements-two">
                        <div className="company-location-details-two">
                          <div className="company-office-two-title">
                            <FiPhone className="company-icon-phone" />
                          </div>
                          <div className="company-office-two-address">
                            0161-1234567
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="company-background-border">
                  <div className="company-link-2">
                    <img src={India} alt="" className="company-image-company" />
                    <div className="company-gradient" />
                  </div>
                  <div className="company-office-city-one">
                    <div className="company-office-full-address-one">
                      <div className="company-country">Punjab, India</div>
                      <div className="company-address-container">
                        <p className="company-address">
                          #1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road,
                          141001, LDH, Punjab, India
                        </p>
                      </div>
                      <div className="company-location-elements-two">
                        <div className="company-location-details-two">
                          <div className="company-office-two-title">
                            <FiPhone className="company-icon-phone" />
                          </div>
                          <div className="company-office-two-address">
                            0161-1234567
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
      </main>

      <Footer />
    </div>
  );
};

export default Company;
