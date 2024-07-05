import React, { useRef, useState } from "react";
import "./InsDashboard.css";
import dashboardIcon from "../../assets/dashboard.png";
import coursesIcon from "../../assets/BookHelp.png";
const InsDashboard = () => {
  const dashboardCards = [
    {
      title: "Total Sales",
      amount: "$350",
      newAmount: "New $50",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/achievement.svg",
      newBadgeClass: "new-sales",
    },
    {
      title: "Total Enroll",
      amount: "1500",
      newAmount: "New 125",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/graduation-cap.svg",
      newBadgeClass: "new-enroll",
    },
    {
      title: "Total Courses",
      amount: "130",
      newAmount: "New 5",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/online-course.svg",
      newBadgeClass: "new-courses",
    },
    {
      title: "Total Students",
      amount: "2650",
      newAmount: "New 245",
      icon: "https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/knowledge.svg",
      newBadgeClass: "new-students",
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
    <div className="ins-dashboard-container">
      <div className="ins-dashboard-top">
        <div className="ins-dashboard-header">
          <h2>
            <img src={dashboardIcon} alt="" /> Instructor Dashboard
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
        <section className="course-creation">
          <div className="course-creation-content">
            <img
              src={coursesIcon}
              alt="Course Creation Icon"
              className="course-creation-icon"
            />
            <h3>Jump Into Course Creation</h3>
            <button className="course-creation-button">
              Create Your Course
            </button>
          </div>
        </section>
      </div>
      <div className="ins-dashboard-bottom">
        <div className="ins-dashboard-left">
          <section className="course-and-news-section">
            <section className="course-performance-section">
              <div className="course-performance-header">
                <h2 className="course-performance-title">
                  Latest Course Performance
                </h2>
                <div className="course-performance-btn">
                  <button
                    className="scroll-button left"
                    onClick={() => scrollLeftCourse(coursePerformanceRef)}
                  ></button>
                  <button
                    className="scroll-button right"
                    onClick={() => scrollRightCourse(coursePerformanceRef)}
                  ></button>
                </div>
              </div>
              <div
                className="course-performance-container"
                ref={coursePerformanceRef}
              >
                {courses.map((course) => (
                  <div key={course.id} className="course-performance-card">
                    <a>
                      <img src={course.imgSrc} alt={course.title} />
                    </a>
                    <div className="course-details">
                      <div className="course-details-header">
                        <p className="course-view-and-date">{course.date}</p>
                      </div>
                      <a href="#" className="course-title">
                        {course.title}
                      </a>
                      <div className="course-performance-view">
                        <p>View</p> <p>{course.views}</p>
                      </div>
                      <div className="course-performance-view">
                        {" "}
                        <p>Purchased</p>
                        <p>{course.purchased}</p>
                      </div>
                      <div className="course-performance-view">
                        <p>Total Like</p> <p>{course.likes}</p>{" "}
                      </div>
                      <div className="course-performance-links">
                        <a href="#" className="course-link">
                          GO TO COURSE ANALYTICS
                        </a>
                        <a href="#" className="course-link">
                          SEE COMMENTS ({course.comments})
                        </a>
                        <a href="#" className="course-link">
                          SEE REVIEWS ({course.reviews})
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
          </section>
        </div>
        <div className="ins-dashboard-right">
          <section className="right-section">
            <section className="profile-analytics-section">
              <div className="course-performance-header">
                <h2 className="course-performance-title">Profile Analytics</h2>
              </div>
              <div className="profile-analytics-card">
                <div className="profile-analytics-content">
                  <h6 className="current-subscribers-label">
                    Current subscribers
                  </h6>
                  <h3 className="current-subscribers">856</h3>
                  <div className="analytics-stats">
                    <div className="analytics-stat">
                      <div className="stat-left"> View</div>
                      <div className="stat-right">
                        <span className="stat-value">17k</span>
                        <span className="stat-change down">▼ 75%</span>
                      </div>
                    </div>
                    <div className="analytics-stat">
                      <div className="stat-left"> Purchased (per hour)</div>
                      <div className="stat-right">
                        <span className="stat-value">1</span>
                        <span className="stat-change up">▲ 100%</span>
                      </div>
                    </div>
                    <div className="analytics-stat">
                      <div className="stat-left"> Enroll (per hour)</div>
                      <div className="stat-right">
                        <span className="stat-value">50</span>
                        <span className="stat-change down">▼ 70%</span>
                      </div>
                    </div>
                  </div>

                  <div className="course-performance-links">
                    <a href="#" className="course-link">
                      GO TO PROFILE ANALYTICS
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="submit-course-section">
              <div className="course-performance-header">
                <h2 className="course-performance-title">Submit Courses</h2>
              </div>
              <div className="sc-card">
                <a href="#" className="pa-title">
                  The Complete JavaScript Course 2020: Build Real Projects!
                  <span className="pa-pending-icon">Pending</span>
                </a>
                <p className="submit-course">
                  Submmited <span>1 days ago</span>
                </p>
                <a href="#" className="delete-link">
                  Delete
                </a>
              </div>
            </section>
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
        </div>
      </div>
    </div>
  );
};

export default InsDashboard;
