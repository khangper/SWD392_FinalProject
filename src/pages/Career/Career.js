import React from "react";
import "./Career.css";
import Header from "../../components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import learner from "../../assets/Learners.png";
import { PiMapPinLineBold } from "react-icons/pi";
import { PiAirplaneTilt } from "react-icons/pi";
import { PiCircleHalf } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { MdOutlineCastConnected } from "react-icons/md";
import { PiFlower } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";
import { TfiAnchor } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Career = () => {
  const benefits = [
    {
      id: 1,
      icon: <PiMapPinLineBold className="career-feature-icons" />,
      title: "Work from anywhere",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      id: 2,
      icon: <PiAirplaneTilt className="career-feature-icons" />,
      title: "Work and Travel",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      id: 3,
      icon: <PiCircleHalf className="career-feature-icons" />,
      title: "Flexible Hours",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      id: 4,
      icon: <FaRegSmile className="career-feature-icons" />,
      title: "Purchasing Leave",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      id: 5,
      icon: <MdOutlineCastConnected className="career-feature-icons" />,
      title: "Social Events",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      id: 6,
      icon: <PiFlower className="career-feature-icons" />,
      title: "Wellness Program",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      id: 7,
      icon: <PiHandshakeLight className="career-feature-icons" />,
      title: "Mentoring Program",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
    {
      id: 8,
      icon: <TfiAnchor className="career-feature-icons" />,
      title: "Fundraising",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan.",
    },
  ];

  const openRoles = [
    {
      id: 1,
      title: "Algorithm Engineer",
      country: "India",
    },
    {
      id: 2,
      title: "Chief Technology Officer",
      country: "India",
    },
    {
      id: 3,
      title: "Algorithm Engineer",
      country: "India",
    },
    {
      id: 4,
      title: "Algorithm Engineer",
      country: "India",
    },
    {
      id: 5,
      title: "Algorithm Engineer",
      country: "San Francisco, CA",
    },
    {
      id: 6,
      title: "Algorithm Engineer",
      country: "India",
    },
  ];
  return (
    <div className="career">
      <Header />
      <main>
        <div className="career-parent">
          <div className="career-background">
            <div className="career-navigation-links-parent">
              <div className="career-navigation-links">
                <a href="/about-us" className="career-about">
                  About
                </a>
              </div>
              <div className="career-navigation-links-1">
                <a href="/our-blog" className="career-blog">
                  Blog
                </a>
              </div>
              <div className="career-navigation-links-2">
                <a href="/company-details" className="career-company">
                  Company
                </a>
              </div>
              <div className="career-navigation-links-3">
                <a href="/career" className="career-careers">
                  Careers
                </a>
              </div>
              <div className="career-navigation-links-4">
                <a href="/press" className="career-press">
                  Press
                </a>
              </div>
            </div>
            <div className="career-heading-2-wrapper">
              <h2 className="career-heading-2">
                We're a passionate, creative, and global company, come work with
                us.
              </h2>
            </div>
          </div>

          <div className="career-working">
            <iframe
              className="career-iframe"
              src="https://www.youtube.com/embed/TKnufs85hXk"
              title="Envato Elements: Unlimited Assets For Your Creative Projects"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="career-story-content">
              <div className="career-story-wrapper">
                <div className="career-heading-2-our-story">
                  <h2 className="career-heading-23">Working at Cursus</h2>
                  <div className="career-line-story"></div>
                </div>
                <div className="career-our-story-container">
                  <p className="career-our-story-content">
                    Phasellus ex mauris, rhoncus quis posuere sit amet,
                    ultricies nec lorem. Vivamus vestibulum porta urna, in
                    placerat lectus facilisis sit amet. Vestibulum non mauris
                    augue. Maecenas arcu magna, aliquam imperdiet tempor nec,
                    lobortis ac erat. Aliquam vel magna tortor. Cras ornare,
                    enim eu tristique tristique, orci nisl blandit mi, at
                    dignissim velit leo nec metus.
                  </p>
                </div>
                <button className="career-check-out-button">
                  Check Out Our Open Roles
                </button>
              </div>
            </div>
          </div>

          <div className="career-culture-container-wrapper">
            <div className="career-culture-container">
              <button className="career-button-arrow-left">
                <IoIosArrowBack />
              </button>
              <div className="career-image-description">
                <div className="career-culture-image-container">
                  <img src={learner} alt="" className="career-image-career" />
                </div>
                <div className="career-culture-title-container">
                  <div className="career-heading-43">We are learners</div>
                </div>
                <div className="career-content-container">
                  <p className="career-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam eget enim in turpis consequat tempor sed id neque.
                    Nam at felis et elit auctor accumsan. Nunc at tortor tellus.
                    Cras dignissim velit velit, ac sollicitudin mi bibendum in.
                    In vel nibh sodales, venenatis eros a, vulputate ligula.
                  </p>
                </div>
              </div>
              <button className="career-button-arrow-right">
                <IoIosArrowForward />
              </button>
            </div>
          </div>

          <div className="career-features-content-wrapper">
            <div className="career-features-content">
              <div className="career-features-wrapper">
                <div className="career-features-inner-wrapper">
                  <div className="career-heading-2-our-features">
                    <h3 className="career-heading-22">Benefits</h3>
                  </div>
                  <div className="career-on-cursus-parent">
                    <div className="career-on-cursus">
                      Cursus culture is something special, and to complement and
                      support that culture we have some amazing benefits.
                    </div>
                    <div className="career-line-wrapper"></div>
                  </div>
                </div>
              </div>
              <div className="career-feature-list">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="career-feature-items">
                    <div className="career-icon-parent">{benefit.icon}</div>
                    <div className="career-feature-descriptions">
                      <div className="career-heading-4-wrapper">
                        <div className="career-heading-4">{benefit.title}</div>
                      </div>
                      <div className="career-container">
                        <p className="career-content">{benefit.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="career-open-roles-wrapper">
            <div className="career-open-roles-content">
              <div className="career-features-wrapper">
                <div className="career-features-inner-wrapper">
                  <div className="career-heading-2-our-features">
                    <h3 className="career-heading-22">Open Roles</h3>
                  </div>
                  <div className="career-on-cursus-parent">
                    <div className="career-on-cursus">
                      Cursus is a fast growing company and we're expanding both
                      our Punjab office and international offices.
                    </div>
                    <div className="career-line-wrapper"></div>
                  </div>
                </div>
              </div>
              <div className="career-job-listings">
                <div className="career-job-listing">
                  <div className="career-listing-details">
                    {openRoles.map((openRole) => (
                      <div key={openRole.id} className="career-apply-parent">
                        <div className="career-listing-title-container">
                          <div className="career-heading-45">
                            {openRole.title}
                          </div>
                        </div>
                        <div className="career-listing-location-container">
                          <div className="career-country-open">
                            {openRole.country}
                          </div>
                        </div>
                        <Link to="/apply-job">
                          <button className="career-button-learn-more">
                            Learn More and Apply
                          </button>
                        </Link>
                      </div>
                    ))}
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

export default Career;
