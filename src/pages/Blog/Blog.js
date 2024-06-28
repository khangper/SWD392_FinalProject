import React from "react";
import "./Blog.css";
import Header from "../../components/Header/Header";
import search from "../../assets/search.png";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoArrowForwardOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import big_blog from "../../assets/big_blog.jpg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-background-parent">
        <Header />

        <div className="blog-background">
          <div className="blog-navigation-links-parent">
            <div className="blog-navigation-links">
              <a href="/about-us" className="blog-about">
                About
              </a>
            </div>
            <div className="blog-navigation-links-1">
              <a href="/our-blog" className="blog-blog">
                Blog
              </a>
            </div>
            <div className="blog-navigation-links-2">
              <a href="/company-details" className="blog-company">
                Company
              </a>
            </div>
            <div className="blog-navigation-links-3">
              <a href="/career" className="blog-careers">
                Careers
              </a>
            </div>
            <div className="blog-navigation-links-4">
              <a href="/press" className="blog-press">
                Press
              </a>
            </div>
          </div>
          <div className="blog-heading-2-wrapper">
            <h2 className="blog-heading-2">Insights, ideas, and stories</h2>
          </div>
        </div>
      </div>
      <main className="blog-inner">
        <section className="blog-frame-parent">
          <div className="blog-backgroundBorder-parent">
            <form className="blog-backgroundBorder">
              <div className="blog-item">
                <div className="blog-input">
                  <button className="blog-button-search">
                    <AiOutlineSearch className="blog-icon-search" />
                  </button>
                  <input
                    type="text"
                    className="blog-input-child"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="blog-filter-item">
                <div className="blog-item-1">
                  <div className="blog-filter-dropdown">
                    <div className="blog-filter-content">
                      <div className="blog-labels">Labels</div>
                      <div className="blog-symbol"></div>
                    </div>
                  </div>

                  <div className="blog-filter-dropdown-1">
                    <div className="blog-filter-content">
                      <div className="blog-labels">Archive</div>
                      <div className="blog-symbol"></div>
                    </div>
                  </div>
                </div>

                <div className="blog-item-2">
                  <button className="blog-button-1">
                    <FaTwitter className="blog-icon-twitter" />
                    <div className="blog-follow-twitter">Follow</div>
                  </button>

                  <button className="blog-button-2">
                    <RiFacebookBoxFill className="blog-icon-facebook" />
                    <div className="blog-follow-facebook">Follow</div>
                  </button>
                </div>
              </div>

              <div className="blog-help-links-wrapper">
                <div className="blog-help-links">
                  <div className="blog-learn-more-link">
                    <p className="blog-learn-more">Learn More</p>
                  </div>
                  <a href="#" className="blog-help-center">
                    Cursus Help Center
                  </a>
                </div>
              </div>
            </form>

            <div className="blog-backgroundBorder-group">
              <div className="blog-backgroundBorder-1">
                <div className="blog-link">
                  <Link to="/blog-single-view">
                    <img src={big_blog} alt="" className="blog-img-blog" />

                    <div className="blog-gradient" />
                  </Link>
                </div>
                <div className="blog-backgroundBorder-inner">
                  <div className="blog-frame-group">
                    <div className="blog-frame-container">
                      <div className="blog-frame-div">
                        <div className="blog-views-parent">
                          <div className="blog-views">109k views</div>
                          <div className="blog-point">•</div>
                        </div>
                        <div className="blog-time-post">March 10, 2020</div>
                      </div>
                      <a href="/blog-single-view" className="blog-title">
                        Blog Title Here
                      </a>
                    </div>
                    <div className="blog-content-container">
                      <p className="blog-content">
                        Donec eget arcu vel mauris lacinia vestibulum id eu
                        elit. Nam metus odio, iaculis eu nunc et, interdum
                        mollis arcu. Pellentesque viverra faucibus diam. In sit
                        amet laoreet dolor, vitae fringilla quam interdum mollis
                        arcu.
                      </p>
                    </div>
                    <div className="blog-read-more-parent">
                      <a href="/blog-single-view" className="blog-read-more">
                        Read More
                      </a>
                      <div className="blog-arrow-icon-wrapper">
                        <IoArrowForwardOutline className="blog-arrow-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-backgroundBorder-1">
                <div className="blog-link">
                  <img src={big_blog} alt="" className="blog-img-blog" />
                  <div className="blog-gradient" />
                </div>
                <div className="blog-backgroundBorder-inner">
                  <div className="blog-frame-group">
                    <div className="blog-frame-container">
                      <div className="blog-frame-div">
                        <div className="blog-views-parent">
                          <div className="blog-views">109k views</div>
                          <div className="blog-point">•</div>
                        </div>
                        <div className="blog-time-post">March 10, 2020</div>
                      </div>
                      <div className="blog-title">Blog Title Here</div>
                    </div>
                    <div className="blog-content-container">
                      <p className="blog-content">
                        Donec eget arcu vel mauris lacinia vestibulum id eu
                        elit. Nam metus odio, iaculis eu nunc et, interdum
                        mollis arcu. Pellentesque viverra faucibus diam. In sit
                        amet laoreet dolor, vitae fringilla quam interdum mollis
                        arcu.
                      </p>
                    </div>
                    <div className="blog-read-more-parent">
                      <a href="/blog-single-view" className="blog-read-more">
                        Read More
                      </a>
                      <div className="blog-arrow-icon-wrapper">
                        <IoArrowForwardOutline className="blog-arrow-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-backgroundBorder-1">
                <div className="blog-link">
                  <img src={big_blog} alt="" className="blog-img-blog" />
                  <div className="blog-gradient" />
                </div>
                <div className="blog-backgroundBorder-inner">
                  <div className="blog-frame-group">
                    <div className="blog-frame-container">
                      <div className="blog-frame-div">
                        <div className="blog-views-parent">
                          <div className="blog-views">109k views</div>
                          <div className="blog-point">•</div>
                        </div>
                        <div className="blog-time-post">March 10, 2020</div>
                      </div>
                      <div className="blog-title">Blog Title Here</div>
                    </div>
                    <div className="blog-content-container">
                      <p className="blog-content">
                        Donec eget arcu vel mauris lacinia vestibulum id eu
                        elit. Nam metus odio, iaculis eu nunc et, interdum
                        mollis arcu. Pellentesque viverra faucibus diam. In sit
                        amet laoreet dolor, vitae fringilla quam interdum mollis
                        arcu.
                      </p>
                    </div>
                    <div className="blog-read-more-parent">
                      <a href="/blog-single-view" className="blog-read-more">
                        Read More
                      </a>
                      <div className="blog-arrow-icon-wrapper">
                        <IoArrowForwardOutline className="blog-arrow-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-backgroundBorder-1">
                <div className="blog-link">
                  <img src={big_blog} alt="" className="blog-img-blog" />
                  <div className="blog-gradient" />
                </div>
                <div className="blog-backgroundBorder-inner">
                  <div className="blog-frame-group">
                    <div className="blog-frame-container">
                      <div className="blog-frame-div">
                        <div className="blog-views-parent">
                          <div className="blog-views">109k views</div>
                          <div className="blog-point">•</div>
                        </div>
                        <div className="blog-time-post">March 10, 2020</div>
                      </div>
                      <div className="blog-title">Blog Title Here</div>
                    </div>
                    <div className="blog-content-container">
                      <p className="blog-content">
                        Donec eget arcu vel mauris lacinia vestibulum id eu
                        elit. Nam metus odio, iaculis eu nunc et, interdum
                        mollis arcu. Pellentesque viverra faucibus diam. In sit
                        amet laoreet dolor, vitae fringilla quam interdum mollis
                        arcu.
                      </p>
                    </div>
                    <div className="blog-read-more-parent">
                      <a href="/blog-single-view" className="blog-read-more">
                        Read More
                      </a>
                      <div className="blog-arrow-icon-wrapper">
                        <IoArrowForwardOutline className="blog-arrow-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-nav-page-navigation-example">
            <div className="blog-link-previous">
              <div className="blog-prev">PREV</div>
            </div>
            <div className="blog-link-1">
              <div className="blog-number-1">1</div>
            </div>
            <div className="blog-link-2">
              <div className="blog-number-2">2</div>
            </div>
            <div className="blog-link-3">
              <div className="blog-number-3">...</div>
            </div>
            <div className="blog-link-4">
              <div className="blog-number-4">24</div>
            </div>
            <div className="blog-link-next">
              <div className="blog-next">NEXT</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
