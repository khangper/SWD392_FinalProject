import React, { useRef, useState } from "react";
import "./StdDashboard.css";
import dashboardIcon from "../../assets/dashboard.png";
import coursesIcon from "../../assets/BookHelp.png";
const StdDashboard = () => {
  const dashboardCards = [
    {
      title: "Total Purchased Courses",
      amount: "15",
      newAmount: "New 5",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/online-course.svg",
      newBadgeClass: "new-sales",
    },
    {
      title: "Total Instructors Subcribing",
      amount: "45",
      newAmount: "New 3",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/knowledge.svg",
      newBadgeClass: "new-enroll",
    },
  ];
  const courses = [
    {
      id: 1,
      title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
      views: "1.5k",
      purchased: "150",
      likes: "1k",
      comments: "875",
      reviews: "105",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg",
      date: "First 2 days 22 hours",
    },
    {
      id: 2,
      title: "The Complete JavaScript Course 2020: Build Real Projects!",
      views: "175k",
      purchased: "1k",
      likes: "85k",
      comments: "915",
      reviews: "255",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg",
      date: "Second 4 days 9 hours",
    },
    {
      id: 3,
      title: "Beginning C++ Programming - From Beginner to Beyond",
      views: "17k",
      purchased: "25",
      likes: "15k",
      comments: "155",
      reviews: "15",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-3.jpg",
      date: "Third 6 days 11 hours",
    },
  ];
  const newsItems = [
    {
      id: 1,
      title: "COVID-19 Updates & Resources",
      content:
        "See the latest updates to coronavirus-related content, including changes to monetization, and access new Creator support resources.",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/blog/img-1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "New Features for Instructors",
      content:
        "Discover the new features available to instructors, aimed at improving the teaching and learning experience.",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/blog/img-2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Community Events and Meetups",
      content:
        "Join our community events and meetups to connect with other instructors and learners.",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/blog/img-3.jpg",
      link: "#",
    },
  ];
  const coursePerformanceRef = useRef(null);
  const newsPerformanceRef = useRef(null);
  const scrollLeftCourse = () => {
    coursePerformanceRef.current.scrollBy({ left: -410, behavior: "smooth" });
  };
  const scrollRightCourse = () => {
    coursePerformanceRef.current.scrollBy({ left: 410, behavior: "smooth" });
  };
  const scrollLeftNews = () => {
    newsPerformanceRef.current.scrollBy({ left: -410, behavior: "smooth" });
  };
  const scrollRightNews = () => {
    newsPerformanceRef.current.scrollBy({ left: 410, behavior: "smooth" });
  };

  return (
    <div className="std-dashboard-container">
      <div className="std-dashboard-top">
        <div className="std-dashboard-header">
          <h2>
            <img src={dashboardIcon} alt="" /> Student Dashboard
          </h2>
        </div>
        <section className="dashboard-cards">
          {dashboardCards.map((card, index) => (
            <div className="dashboard-card" key={index}>
              <div className="card-content">
                <div className="card-info">
                  <h3>{card.title}</h3>
                  <h1>{card.amount}</h1>
                  <span className={`new-badge ${card.newBadgeClass}`}>
                    {card.newAmount}
                  </span>
                </div>
                <div className="card-icon">
                  <img src={card.icon} alt={`${card.title} Icon`} />
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="std-dashboard-bottom">
        <div className="std-dashboard-left">
          <section className="course-and-news-section">
            <section className="course-performance-section">
              <div className="course-performance-header">
                <h2 className="course-performance-title">News</h2>
                <div className="course-performance-btn">
                  <button
                    className="scroll-button left"
                    onClick={() => scrollLeftNews(newsPerformanceRef)}
                  ></button>
                  <button
                    className="scroll-button right"
                    onClick={() => scrollRightNews(newsPerformanceRef)}
                  ></button>
                </div>
              </div>
              <div
                className="course-performance-container"
                ref={newsPerformanceRef}
              >
                {newsItems.map((news) => (
                  <div key={news.id} className="course-performance-card">
                    <a>
                      <img src={news.icon} alt={news.title} />
                    </a>
                    <div className="course-details">
                      <div className="course-details-header">
                        <p className="course-title">{news.title}</p>
                      </div>
                      <p className="news-content">{news.content}</p>
                      <div className="course-performance-links">
                        <a href={news.link} className="course-link">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="right-section">
            <section className="profile-analytics-section">
              <div className="course-performance-header">
                <h2 className="course-performance-title">
                  What's new on Cursus
                </h2>
              </div>
              <div className="sc-card">
                <a href="#" className="news-link">
                  Improved performance on Studio Dashboard
                </a>
                <a href="#" className="news-link">
                  See more Dashboard updates
                </a>
                <a href="#" className="news-link">
                  See issues-at-glance for Live
                </a>
              </div>
            </section>
          </section>
          </section>
        </div>
        <div className="std-dashboard-right">
        
        </div>
      </div>
    </div>
  );
};

export default StdDashboard;
