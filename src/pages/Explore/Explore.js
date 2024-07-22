import React, { useEffect, useRef } from "react";
import "./Explore.css";
import search_icon from "..//../assets/search.png";
import ratingStar from "../../assets/rating.png";
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeLiveStreamsRequest } from "../../redux/reduxActions/homeActions/HomeLivestreamAction";
import { fetchHomeFeaturedCoursesRequest } from "../../redux/reduxActions/homeActions/HomeFeaturedCourseAction";
import { addSaveCourseRequest } from "../../redux/reduxActions/SaveCourseAction";

const Explore = () => {
  const { liveStreams } = useSelector((state) => state.home_livestream);
  const { featuredCourses } = useSelector((state) => state.home_featuredcourse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeLiveStreamsRequest());
    dispatch(fetchHomeFeaturedCoursesRequest());
  }, [dispatch]);

  const handleSaveCourse = (course, event) => {
    event.stopPropagation();

    const mappedCourse = {
      id: course.id,
      title: course.title,
      author: course.author || "Unknown Author",
      views: course.views.replace(" Views", "").replace(" views", ""),
      date: course.timeAgo || course.date,
      category: course.category,
      price: course.price,
      hours: course.duration || course.hours,
      rating: course.rating,
      imgSrc: course.imgSrc,
    };

    dispatch(addSaveCourseRequest(mappedCourse));
  };

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
          <a href="/all_livestream" className="see-all-link">
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
                <a href="/live_output" className="stream-link">
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
                <a href="/courses-detail-view">
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
                        <span onClick={(e) => handleSaveCourse(course, e)}>
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
