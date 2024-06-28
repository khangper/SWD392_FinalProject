import React, { useRef } from "react";
import "./Explore.css";
import search_icon from "..//../assets/search.png";
import ratingStar from "../../assets/rating.png";
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
const Explore = () => {
  const liveStreams = [
    {
      id: 1,
      name: "John Doe",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    },
    {
      id: 2,
      name: "Jassica",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    },
    {
      id: 3,
      name: "Edutut+",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
    },
    {
      id: 4,
      name: "Joginder Singh",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
    },
    {
      id: 5,
      name: "Zoena",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
    },
    {
      id: 6,
      name: "Albert Dua",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
    },
    {
      id: 7,
      name: "Amritpal",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
    },
    {
      id: 8,
      name: "Jimmy",
      status: "live",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
    },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Complete Python Bootcamp: Go from zero to hero in Python 3",
      author: "John Doe",
      views: "109k",
      date: "15 days ago",
      category: "Web Development | Python",
      price: "$10",
      hours: "25 hours",
      rating: 4.5,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg",
    },
    {
      id: 2,
      title: "The Complete JavaScript Course 2020: Build Real Projects!",
      author: "Jassica William",
      views: "5M",
      date: "15 days ago",
      category: "Development | JavaScript",
      price: "$5",
      hours: "28 hours",
      rating: 4.5,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg",
    },
    {
      id: 3,
      title: "Beginning C++ Programming - From Beginner to Beyond",
      author: "Joginder Singh",
      views: "1M",
      date: "18 days ago",
      category: "Development | C++",
      price: "$13",
      hours: "12 hours",
      rating: 4.5,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-3.jpg",
    },
    {
      id: 4,
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      author: "Poonam Verma",
      views: "153k",
      date: "3 months ago",
      category: "Digital Marketing | Marketing",
      price: "$12",
      hours: "1 hour",
      rating: 5.0,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-4.jpg",
    },
    {
      id: 5,
      title: "Microsoft Excel - Excel from Beginner to Advanced",
      author: "Rock William",
      views: "53k",
      date: "14 days ago",
      category: "Office Productivity | Excel",
      price: "$6",
      hours: "1.5 hours",
      rating: 4.5,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-5.jpg",
    },
    {
      id: 6,
      title: "Angular 8 - The Complete Guide (2020 Edition)",
      author: "John Doe",
      views: "253k",
      date: "10 days ago",
      category: "Development | Angular",
      price: "$15",
      hours: "36 hours",
      rating: 5.0,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-6.jpg",
    },
    {
      id: 7,
      title: "WordPress for Beginners: Create a Website Step by Step",
      author: "Sabnam Singh",
      views: "109k",
      date: "15 days ago",
      category: "Design | Wordpress",
      price: "$18",
      hours: "5.4 hours",
      rating: 5.0,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-7.jpg",
    },
    {
      id: 8,
      title: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
      author: "Jashanpreet Singh",
      views: "196k",
      date: "1 month ago",
      category: "Design | CSS",
      price: "$10",
      hours: "23 hours",
      rating: 4.0,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-8.jpg",
    },
  ];

  const liveStreamRef = useRef(null);
  const scrollLeftLiveStream = () => {
    liveStreamRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollRightLiveStream = () => {
    liveStreamRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const featuredCoursesRef = useRef(null);
  const scrollLeftCourse = () => {
    featuredCoursesRef.current.scrollBy({ left: -410, behavior: "smooth" });
  };
  const scrollRightCourse = () => {
    featuredCoursesRef.current.scrollBy({ left: 410, behavior: "smooth" });
  };

  return (
    <div className="explore-container">
      <section className="search-box">
        <img src={search_icon} alt="Search Icon" className="search-icon" />
        <input
          type="text"
          placeholder="Search for Tuts Videos, Tutors, Tests and more..."
        />
      </section>
      <section className="live-streams-section">
        <div className="live-streams-header">
          <h2 className="live-streams-title">Live Streams</h2>
          <a href="#" className="see-all-link">
            See all
          </a>
        </div>
        <div className="live-streams-container">
          <button
            className="scroll-button left"
            onClick={scrollLeftLiveStream}
          ></button>
          <div className="live-streams" ref={liveStreamRef}>
            {liveStreams.map((stream) => (
              <div key={stream.id} className="stream-card">
                <a href="#" className="stream-link">
                  <img src={stream.imgSrc} alt={stream.name} />
                  <h4>{stream.name}</h4>
                  <p>
                    live
                    <span></span>
                  </p>
                </a>
              </div>
            ))}
          </div>
          <button
            className="scroll-button right"
            onClick={scrollRightLiveStream}
          ></button>
        </div>
      </section>

      <section className="featured-courses-section">
        <div className="featured-courses-container">
          <div className="featured-courses">
            {featuredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <a>
                  <img src={course.imgSrc} alt={course.title} />
                  <div className="course-overlay">
                    <div className="badge-seller">Best seller</div>
                    <div className="course-review">
                      <img className="starIcon" src={ratingStar}></img>
                      {course.rating}
                    </div>
                    <div className="course-timer">{course.hours}</div>
                  </div>
                </a>
                <div className="course-details">
                  <div className="course-details-header">
                    <p className="course-view-and-date">
                      {course.views} views • {course.date}
                    </p>
                    <div className="course-more-dropdown">
                      <a href="#" className="dropdown-button">
                        ⋮
                      </a>
                      <div className="course-more-dropdown-menu">
                        <span>
                          <img src={share} />
                          Share
                        </span>
                        <span>
                          <img src={saved_course} />
                          Save
                        </span>
                        <span>
                          <img src={not_interested} />
                          Not Interested
                        </span>
                        <span>
                          <img src={report} />
                          Report
                        </span>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="course-title">
                    {course.title}
                  </a>
                  <a href="#" className="course-category">
                    {course.category}
                  </a>
                  <div className="course-info">
                    <p className="course-author">
                      By <a href="#">{course.author}</a>
                    </p>
                    <div className="course-price">{course.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="load-more">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
