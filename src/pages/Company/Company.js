import React from "react";
import "./Company.css";
import Header from "../../components/Header/Header";
import India from "../../assets/India.png";
import Cali from "../../assets/Cali.png";
import Brazil from "../../assets/Brazil.png";
import hakaFull_logo from "../../assets/Haka_Online_Learning_System_logo.png"
import { FiPhone } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";
import { PATH_NAME } from "../../constant/pathname";
import { Link } from "react-router-dom";

const Company = () => {
  const company_office = [
    {
      id: 1,
      img: India,
      country: "Punjab, India",
      address:
        "#1235 Sks Nagar St No. 8 Phase 3, Pakhowal Road, 141001, LDH, Punjab, India",
      phone: "0161-1234567",
    },

    {
      id: 2,
      img: Cali,
      country: "San Francisco, CA",
      address: "586 Lorem st. 5 floor, San Francisco San Francisco, CA 94107",
      phone: "+1 415-1234567",
    },

    {
      id: 3,
      img: Brazil,
      country: "São Paulo, Brazil",
      address: "Lorem ipsum 589, Vila Madalena, São Paulo - SP 01443-010",
      phone: "+55-11-1234567",
    },
  ];
  return (
    <div className="company">
      <Header />
      <main>
        <div className="company-parent">
          <div className="company-background">
            <div className="company-navigation-links-parent">
              <div className="company-navigation-links">
                <Link to={PATH_NAME.ABOUT_US} className="company-about">
                  About
                </Link>
              </div>
              <div className="company-navigation-links-1">
                <Link to={PATH_NAME.OUR_BLOG} className="company-blog">
                  Blog
                </Link>
              </div>
              <div className="company-navigation-links-2">
                <Link
                  to={PATH_NAME.COMPANY_DETAILS}
                  className="company-company"
                >
                  Company
                </Link>
              </div>
              <div className="company-navigation-links-3">
                <Link to={PATH_NAME.CAREER} className="company-careers">
                  Careers
                </Link>
              </div>
              <div className="company-navigation-links-4">
                <Link to={PATH_NAME.PRESS} className="company-press">
                  Press
                </Link>
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
                  <h2 className="company-heading-23">Our Origins</h2>
                  <div className="company-line-story"></div>
                </div>
                <div className="company-our-story-container">
                  <p className="company-our-story-content">
                    Haka was founded in 2020 by computer science instructor
                    with a vision to provide anyone, anywhere with access to the
                    world’s best education. Now many instructors put their
                    courses online for anyone to take and taught more learners
                    in a few months than they could over an entire lifetime in
                    the classroom. Today, Haka has expanded to reach more than
                    40 million people and 2,300 businesses around the world. On
                    Haka you can find online courses, instructors, and
                    certificates from Haka.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={hakaFull_logo}
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
                      Haka branches around the world
                    </div>
                    <div className="company-line-wrapper"></div>
                  </div>
                </div>
              </div>
              <div className="company-office-link-one">
                {company_office.map((office) => (
                  <div key={office.id} className="company-background-border">
                    <div className="company-link-2">
                      <img
                        src={office.img}
                        alt=""
                        className="company-image-company"
                      />
                      <div className="company-gradient" />
                    </div>
                    <div className="company-office-city-one">
                      <div className="company-office-full-address-one">
                        <div className="company-country">{office.country}</div>
                        <div className="company-address-container">
                          <p className="company-address">{office.address}</p>
                        </div>
                        <div className="company-location-elements-two">
                          <div className="company-location-details-two">
                            <div className="company-office-two-title">
                              <FiPhone className="company-icon-phone" />
                            </div>
                            <div className="company-office-two-address">
                              {office.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
