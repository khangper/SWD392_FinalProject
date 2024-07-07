import React from "react";
import "./PressReleasePage.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const PressReleasePage = () => {
  const news = [
    {
      id: 1,
      day: "March 10, 2020",
      title: "Press News Title",
      content:
        " Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
    },
    {
      id: 2,
      day: "March 10, 2020",
      title: "Press News Title",
      content:
        " Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
    },
    {
      id: 3,
      day: "March 10, 2020",
      title: "Press News Title",
      content:
        " Donec eget arcu vel mauris lacinia vestibulum id eu elit. Nam metus odio, iaculis eu nunc et, interdum mollis arcu. Pellentesque viverra faucibus diam. In sit amet laoreet dolor, vitae fringilla quam...",
    },
  ];

  const release = [
    {
      id: 1,
      day: "March 10, 2020",
      title: "Press Release Title",
    },
    {
      id: 2,
      day: "March 10, 2020",
      title: "Press Release Title",
    },
    {
      id: 3,
      day: "March 10, 2020",
      title: "Press Release Title",
    },
    {
      id: 4,
      day: "March 10, 2020",
      title: "Press Release Title",
    },
  ];
  return (
    <div className="press">
      <Header />
      <main className="press-inner">
        <div className="press-frame-parent">
          <div className="press-background">
            <div className="press-navigation-links-parent">
              <div className="press-navigation-links">
                <a href="/about-us" className="press-about">
                  About
                </a>
              </div>
              <div className="press-navigation-links-1">
                <a href="/our-blog" className="press-blog">
                  Blog
                </a>
              </div>
              <div className="press-navigation-links-2">
                <a href="/company-details" className="press-company">
                  Company
                </a>
              </div>
              <div className="press-navigation-links-3">
                <a href="/career" className="press-careers">
                  Careers
                </a>
              </div>
              <div className="press-navigation-links-4">
                <a href="/press" className="press-press">
                  Press
                </a>
              </div>
            </div>
            <div className="press-heading-2-wrapper">
              <h2 className="press-heading-2">What others are saying</h2>
            </div>
          </div>

          <div className="press-backgroundBorder-parent">
            <form className="press-backgroundBorder">
              <div className="press-filter-item">
                <div className="press-item-2">
                  <button className="press-button-1">
                    <FaTwitter className="press-icon-twitter" />
                    <div className="press-follow-twitter">Follow</div>
                  </button>

                  <button className="press-button-2">
                    <RiFacebookBoxFill className="press-icon-facebook" />
                    <div className="press-follow-facebook">Follow</div>
                  </button>
                </div>
              </div>

              <div className="press-help-links-wrapper">
                <div className="press-help-links">
                  <div className="press-learn-more-link">
                    <p className="press-learn-more">Learn More</p>
                  </div>
                  <a href="#" className="press-help-center">
                    Cursus Help Center
                  </a>
                </div>
              </div>
            </form>

            <div className="press-col-right-parent">
              <div className="press-label-parent">
                <h3>Cursus in the News</h3>
                <p>
                  For media interviews and inquiries, please send an email to
                  <a href="#">press@cursus.com</a>
                </p>
              </div>

              <div className="press-news-title-parent">
                {news.map((news) => (
                  <div key={news.id} className="press-news-title-items">
                    <div className="press-day">{news.day}</div>
                    <h3>{news.title}</h3>
                    <p>{news.content}</p>
                    <div className="press-read-more">
                      <a href="#">Read More</a>
                      <div className="press-arrow-icon-wrapper">
                        <RiArrowRightDoubleLine className="press-arrow-icon" />
                      </div>
                    </div>
                  </div>
                ))}

                <a href="#" className="press-see-more-news">
                  See More News
                </a>
              </div>

              <div className="press-label-parent">
                <h3>Press Releases</h3>
                <p>For Release from Cursus</p>
              </div>

              <div className="press-release-title-parent">
                {release.map((release) => (
                  <div key={release.id} className="press-release-title-items">
                    <div className="press-day">{release.day}</div>
                    <h3>{release.title}</h3>
                  </div>
                ))}

                <a href="#" className="press-see-more-news">
                  See More Press Release
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PressReleasePage;
