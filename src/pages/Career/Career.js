import React, { useRef } from "react";
import "./Career.css";
import Header from "../../components/Header/Header";
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
import { PATH_NAME } from "../../constant/pathname";
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
  const culture = [
    {
      id: 1,
      img: learner,
      title: "We are learners",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },

    {
      id: 2,
      img: learner,
      title: "We are navigators",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      id: 3,
      img: learner,
      title: "We are global",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      id: 4,
      img: learner,
      title: "We make an impact",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
    {
      id: 5,
      img: learner,
      title: "We are learners",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget enim in turpis consequat tempor sed id neque. Nam at felis et elit auctor accumsan. Nunc at tortor tellus. Cras dignissim velit velit, ac sollicitudin mi bibendum in. In vel nibh sodales, venenatis eros a, vulputate ligula.",
    },
  ];

  const cultureRef = useRef(null);

  const scrollLeftStudent = () => {
    cultureRef.current.scrollBy({ left: -1000, behavior: "smooth" });
  };
  const scrollRightStudent = () => {
    cultureRef.current.scrollBy({ left: 1000, behavior: "smooth" });
  };
  return (
    <div className="career">
      <Header />
      <main>
        <div className="career-parent">
          <div className="career-background">
            <div className="career-navigation-links-parent">
              <div className="career-navigation-links">
                <Link to={PATH_NAME.ABOUT_US} className="career-about">
                  About
                </Link>
              </div>
              <div className="career-navigation-links-1">
                <Link to={PATH_NAME.OUR_BLOG} className="career-blog">
                  Blog
                </Link>
              </div>
              <div className="career-navigation-links-2">
                <Link to={PATH_NAME.COMPANY_DETAILS} className="career-company">
                  Company
                </Link>
              </div>
              <div className="career-navigation-links-3">
                <Link to={PATH_NAME.CAREER} className="career-careers">
                  Careers
                </Link>
              </div>
              <div className="career-navigation-links-4">
                <Link to={PATH_NAME.PRESS} className="career-press">
                  Press
                </Link>
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
                  <h2 className="career-heading-23">Working at Haka</h2>
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
              <button
                className="career-button left"
                onClick={scrollLeftStudent}
              ></button>
              <div className="career-culture-parent" ref={cultureRef}>
                {culture.map((culture) => (
                  <div key={culture.id} className="career-image-description">
                    <div className="career-link">
                      <img
                        src={culture.img}
                        alt=""
                        className="career-image-career"
                      />

                      <h4 className="career-heading-43">{culture.title}</h4>

                      <p className="career-contents">{culture.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="career-button right"
                onClick={scrollRightStudent}
              ></button>
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
                      Haka culture is something special, and to complement and
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
                      Haka is a fast growing company and we're expanding both
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
                        <Link to={PATH_NAME.APPLY_JOB}>
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
