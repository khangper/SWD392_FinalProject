import React, { useEffect, useRef } from "react";
import "./Home.css";
import ratingStar from "../../assets/rating.png";
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
import pace from "../../assets/history.png";
import expert from "../../assets/expert.png";
import livestream from "../../assets/livestream.png";
import screen from "../../assets/screen.png";
import facebook from "../../assets/facebook.png";
import x from "../../assets/x.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import development from "../../assets/development.png";
import business from "../../assets/business.png";
import it from "../../assets/it.png";
import design from "../../assets/design.png";
import marketing from "../../assets/marketing.png";
import book from "../../assets/book.png";
import music from "../../assets/music.png";
import profile_image from "..//../assets/profile-img.jpg";
import { Link, useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeLiveStreamsRequest } from "../../redux/reduxActions/homeActions/HomeLivestreamAction";
import { fetchHomeFeaturedCoursesRequest } from "../../redux/reduxActions/homeActions/HomeFeaturedCourseAction";
import { fetchHomeNewestCoursesRequest } from "../../redux/reduxActions/homeActions/HomeNewestCourseAction";
import { fetchHomePopularInstructorRequest } from "../../redux/reduxActions/homeActions/HomePopularInstructorAction";
import { fetchHomeStudentThoughtRequest } from "../../redux/reduxActions/homeActions/HomeStudentThoughtAction";

const Home = () => {
  const dispatch = useDispatch();
  const { liveStreams } = useSelector((state) => state.home_livestream);
  const { featuredCourses } = useSelector((state) => state.home_featuredcourse);
  const { newestCourses } = useSelector((state) => state.home_newestcourse);
  const { popularInstructors } = useSelector(
    (state) => state.home_popularinstructor
  );
  const { studentThoughts } = useSelector((state) => state.home_studentthought);
  const searchQuery = useSelector(state => state.search.query);
  const navigate = useNavigate();

  const handleLiveStreamClick = (id) => {
    navigate(`${PATH_NAME.LIVE_OUTPUT.replace(":id", id)}`, { replace: true });
  };

  const handleCoursesmoreClick = (id) => {
    navigate(`${PATH_NAME.COURSES_DETAIL_VIEW.replace(":id", id)}`, {replace: true});
  };
  const handleNewestCoursesmoreClick = (id) => {
    navigate(`${PATH_NAME.NEWEST_COURSES_DETAIL_VIEW.replace(':id', id)}`, {replace: true});
  };

  const handleInstructorClick = (id) => {
    navigate(`${PATH_NAME.OTHER_INSTRUCTOR_VIEW.replace(":id", id)}`, {replace: true});
  };

  useEffect(() => {
    dispatch(fetchHomeLiveStreamsRequest());
    dispatch(fetchHomeFeaturedCoursesRequest());
    dispatch(fetchHomeNewestCoursesRequest());
    dispatch(fetchHomePopularInstructorRequest());
    dispatch(fetchHomeStudentThoughtRequest());
  }, [dispatch]);
  const filterData = (data, query) => {
    if (!Array.isArray(data)) return [];
    if (!query) return data;
    return data.filter(item => JSON.stringify(item).toLowerCase().includes(query.toLowerCase()));
  };

  const filteredLiveStreams = filterData(liveStreams, searchQuery);
  const filteredFeaturedCourses = filterData(featuredCourses, searchQuery);
  const filteredNewestCourses = filterData(newestCourses, searchQuery);
  const filteredPopularInstructors = filterData(popularInstructors, searchQuery);
  const filteredStudentThoughts = filterData(studentThoughts, searchQuery);

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

  const newestCoursesRef = useRef(null);

  const scrollLeftNewestCourse = () => {
    newestCoursesRef.current.scrollBy({ left: -410, behavior: "smooth" });
  };
  const scrollRightNewestCourse = () => {
    newestCoursesRef.current.scrollBy({ left: 410, behavior: "smooth" });
  };

  const popularInstructorRef = useRef(null);

  const scrollLeftInstructor = () => {
    popularInstructorRef.current.scrollBy({ left: -410, behavior: "smooth" });
  };
  const scrollRightInstructor = () => {
    popularInstructorRef.current.scrollBy({ left: 410, behavior: "smooth" });
  };

  const studentThoughtRef = useRef(null);

  const scrollLeftStudent = () => {
    studentThoughtRef.current.scrollBy({ left: -410, behavior: "smooth" });
  };
  const scrollRightStudent = () => {
    studentThoughtRef.current.scrollBy({ left: 410, behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <div className="home-top">
        <div className="home-left">
          <section className="live-streams-section">
            <div className="live-streams-header">
              <h2 className="live-streams-title">Live Streams</h2>
              <Link to={PATH_NAME.ALL_LIVE_STREAM} className="see-all-link">
                See all
              </Link>
            </div>
            <div className="live-streams-container">
              <button
                className="scroll-button left"
                onClick={scrollLeftLiveStream}
              ></button>
              <div className="live-streams" ref={liveStreamRef}>
                {filteredLiveStreams.map((stream) => (
                  <div key={stream.id} className="stream-card"
                   onClick={() => handleLiveStreamClick(stream.id)}>
                    <Link to={PATH_NAME.LIVE_OUTPUT} className="stream-link">
                      <img src={stream.imgSrc} alt={stream.name} />
                      <h4>{stream.name}</h4>
                      <p>
                        live
                        <span></span>
                      </p>
                    </Link>
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
            <div className="featured-courses-header">
              <h2 className="featured-courses-title">Featured Courses</h2>
              <a href="#" className="see-all-link">
                See all
              </a>
            </div>
            <div className="featured-courses-container">
              <button
                className="scroll-button left"
                onClick={() => scrollLeftCourse(featuredCoursesRef)}
              ></button>
              <div className="featured-courses" ref={featuredCoursesRef}>
                {filteredFeaturedCourses.map((course) => (
                  <li  className="course-card" key={course.id} onClick={() => handleCoursesmoreClick(course.id)}>
                    <div>
                      <img src={course.imgSrc} alt={course.title} />
                      <div className="home-course-overlay">
                        <div className="badge-seller">Best seller</div>
                        <div className="course-review">
                          <img
                            className="starIcon"
                            src={ratingStar}
                            alt="rating"
                          />
                          {course.rating}
                        </div>
                        <div className="course-timer">{course.hours}</div>
                      </div>
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
                                <img src={share} alt="share" /> Share
                              </span>
                              <span>
                                <img src={saved_course} alt="save" /> Save
                              </span>
                              <span>
                                <img
                                  src={not_interested}
                                  alt="not interested"
                                />{" "}
                                Not Interested
                              </span>
                              <span>
                                <img src={report} alt="report" /> Report
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
                  </li>

                ))}
              </div>
              <button
                className="scroll-button right"
                onClick={() => scrollRightCourse(featuredCoursesRef)}
              ></button>
            </div>
          </section>

          <section className="featured-courses-section">
            <div className="featured-courses-header">
              <h2 className="featured-courses-title">Newest Courses</h2>
              <a href="#" className="see-all-link">
                See all
              </a>
            </div>
            <div className="featured-courses-container">
              <button
                className="scroll-button left"
                onClick={() => scrollLeftNewestCourse(newestCoursesRef)}
              ></button>
              <div className="featured-courses" ref={newestCoursesRef}>
                {filteredNewestCourses.map((course) => (
                  <li key={course.id} className="course-card" onClick={() => handleNewestCoursesmoreClick(course.id)}>
                  <div >
                    <Link to={PATH_NAME.COURSES_DETAIL_VIEW}>
                      <img src={course.imgSrc} alt={course.title} />
                      <div className="home-course-overlay">
                        <div className="course-timer">{course.hours}</div>
                      </div>
                    </Link>
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
                </li>
                ))}
              </div>
              <button
                className="scroll-button right"
                onClick={() => scrollRightNewestCourse(newestCoursesRef)}
              ></button>
            </div>
          </section>

          <section className="home-info-section">
            <div className="home-info-card">
              <div className="home-info-icon-container">
                <img src={pace} alt="icon" />
              </div>
              <h3>Go at your own pace</h3>
              <p>Enjoy lifetime access to courses on Edututs+'s website</p>
            </div>
            <div className="home-info-card">
              <div className="home-info-icon-container">
                <img src={expert} alt="icon" />
              </div>
              <h3>Learn from industry experts</h3>
              <p>Select from top instructors around the world</p>
            </div>
            <div className="home-info-card">
              <div className="home-info-icon-container">
                <img src={livestream} alt="icon" />
              </div>
              <h3>Find video courses on almost any topic</h3>
              <p>Build your library for your career and personal growth</p>
            </div>
            <div className="home-info-card">
              <div className="home-info-icon-container">
                <img src={screen} alt="icon" />
              </div>
              <h3>100,000 online courses</h3>
              <p>Explore a variety of fresh topics</p>
            </div>
          </section>

          <section className="popular-instructors-section">
            <div className="popular-instructors-header">
              <h2 className="popular-instructors-title">Popular Instructor</h2>
              <Link to={PATH_NAME.ALL_INSTRUCTOR_LIST} className="see-all-link">
                See all
              </Link>
            </div>
            <div className="popular-instructors-container">
              <button
                className="scroll-button left"
                onClick={() => scrollLeftInstructor(popularInstructorRef)}
              ></button>
              <div className="popular-instructors" ref={popularInstructorRef}>
                {filteredPopularInstructors.map((instructor) => (
                  <div key={instructor.id} className="popular-instructors-card" onClick={() => handleInstructorClick(instructor.id)}>
                    <div className="popular-instructor-image">
                      <img
                        src={instructor.imgSrc}
                        alt={instructor.name}
                        className="popular-instructor-photo"
                      />
                    </div>
                    <div className="popular-instructor-content">
                      <div className="popular-instructor-profile">
                        <Link
                          to={PATH_NAME.OTHER_INSTRUCTOR_VIEW}
                          className="instructor-name"
                        >
                          {instructor.name}
                        </Link>
                        <div className="verified-badge"></div>
                      </div>
                      <div className="popular-instructor-title">
                        {instructor.title}
                      </div>
                      <ul className="social-icons-1">
                        <a href="#" className="sc-fb">
                          <img src={facebook} />
                        </a>
                        <a href="#" className="sc-tw">
                          <img src={x} />
                        </a>
                        <a href="#" className="sc-ln">
                          <img src={linkedin} />
                        </a>
                        <a href="#" className="sc-yt">
                          <img src={youtube} />
                        </a>
                      </ul>
                      <div className="popular-instructor-stats">
                        {instructor.students} Students • {instructor.courses}{" "}
                        Courses
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="scroll-button right"
                onClick={() => scrollRightInstructor(popularInstructorRef)}
              ></button>
            </div>
          </section>
        </div>

        <div className="home-right">
          <section className="home-instructor-profile">
            <div className="instructor-profile-image">
              <img src={profile_image} alt="Instructor Profile" />
            </div>
            <div className="instructor-profile-content">
              <div className="instructor-profile-header">
                <a href="#" className="instructor-name">
                  John Doe
                </a>
                <div className="verified-badge"></div>
              </div>
              <div className="home-instructor-profile-title">
                Web Developer, Designer, and Teacher
              </div>
              <ul className="social-icons-1">
                <a href="#" className="sc-fb">
                  <img src={facebook} />
                </a>
                <a href="#" className="sc-tw">
                  <img src={x} />
                </a>
                <a href="#" className="sc-ln">
                  <img src={linkedin} />
                </a>
                <a href="#" className="sc-yt">
                  <img src={youtube} />
                </a>
              </ul>
              <div className="instructor-profile-stats">
                100K Students • 15 Courses
              </div>
              <Link
                to={PATH_NAME.MY_INSTRUCTOR_PROFILE}
                className="instructor-profile-redirect"
              >
                Go to profile
              </Link>
            </div>
          </section>

          <section className="home-livestream-setup">
            <div className="home-livestream-setup-title">
              <h4>Live Streaming</h4>
            </div>
            <div className="home-livestream-setup-text">
              <div className="home-livestream-icon">
                <div className="home-livestream-icon-image">
                  <img src={livestream}></img>
                </div>
              </div>
              <div className="home-livestream-content">
                <p>Set up your channel and stream live to your students</p>
                <Link to={PATH_NAME.ADD_LIVE_STREAM}>
                  <button className="home-livestream-link">Get Started</button>
                </Link>
                <span className="home-livestream-info">
                  Info: This feature only for 'Instructor'
                </span>
              </div>
            </div>
          </section>

          <section className="home-get-started">
            <h4>Get personalized recommendations</h4>
            <p>Answer a few questions for your top picks</p>
            <button className="get-started-btn">Get Started</button>
          </section>

          <section className="home-featured-categories">
            <div className="home-featured-categories-title">
              <h4>Top Categories</h4>
            </div>
            <div className="home-featured-categories-list">
              <span>
                <img src={development} />
                Development
              </span>
              <span>
                <img src={business} />
                Business
              </span>
              <span>
                <img src={it} />
                IT & Software
              </span>
              <span>
                <img src={design} />
                Design
              </span>
              <span>
                <img src={marketing} />
                Marketing
              </span>
              <span>
                <img src={book} />
                Personal Development
              </span>
              <span>
                <img src={music} />
                Music
              </span>
            </div>
          </section>

          <section className="home-become-instuctor">
            <h4>Become an Instructor</h4>
            <p>
              Top instructors from around the world teach millions of students
              on Cursus. We provide the tools and skills to teach what you love.
            </p>
            <button className="get-started-btn">Start teaching</button>
          </section>
        </div>
      </div>

      <div className="home-bottom">
        <section className="home-our-student">
          <h4>What Our Students Have Today</h4>
          <div className="our-student-container">
            <button
              className="scroll-button left"
              onClick={scrollLeftStudent}
            ></button>
            <div className="student-thought" ref={studentThoughtRef}>
              {filteredStudentThoughts.map((studentThought) => (
                <div key={studentThought.id} className="student-thought-card">
                  <div className="student-thought-content">
                    <p>"{studentThought.quote}"</p>
                  </div>

                  <div className="student-thought-profile">
                    <div className="student-thought-image">
                      <img src={studentThought.imgSrc} />
                    </div>
                    <h4>{studentThought.name}</h4>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={scrollRightStudent}
            ></button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
