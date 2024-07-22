import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SaveCourses.css";
import ratingStar from "../../assets/rating.png";
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
import card_icon from "../../assets/cart-icon.png";
import {
  fetchSaveCoursesRequest,
  deleteSaveCoursesRequest,
  deleteAllSaveCoursesRequest,
} from "../../redux/reduxActions/SaveCourseAction";
import { addToCart } from "../../redux/reduxActions/ShoppingCartAction";

const SaveCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.saveCourses);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    dispatch(fetchSaveCoursesRequest());
  }, [dispatch]);

  const toggleSelectCourse = (id) => {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.includes(id)
        ? prevSelectedCourses.filter((courseId) => courseId !== id)
        : [...prevSelectedCourses, id]
    );
  };

  const handleCourseClick = (event, id) => {
    event.preventDefault();
    toggleSelectCourse(id);
  };

  const removeSelectedCourses = () => {
    if (selectedCourses.length === courses.length) {
      dispatch(deleteAllSaveCoursesRequest());
    } else {
      dispatch(deleteSaveCoursesRequest(selectedCourses));
    }
    setSelectedCourses([]);
  };

  const handleAddToCart = (course, event) => {
    event.stopPropagation();
    dispatch(addToCart(course));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="sa4d25">
        <div className="container-fluid">
          <div className="sc-row">
            <div className="sc-div1">
              <div className="section3125 hstry142">
                <div className="grp_titles pt-0">
                  <div className="ht_title">Saved Courses</div>
                  <a
                    href="#"
                    className="ht_clr"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCourses(courses.map((course) => course.id));
                    }}
                  >
                    Select All
                  </a>
                </div>
                <div className="tb_145">
                  <div className="wtch125">
                    <span className="vdt14">{courses.length} Courses</span>
                  </div>
                  <a
                    href="#"
                    className="rmv-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      removeSelectedCourses();
                    }}
                  >
                    <i className="uil uil-trash-alt"></i>Remove Selected Courses
                  </a>
                </div>
              </div>
            </div>
            <div className="sc-div2">
              <div className="_14d25 mb-20">
                <div className="row">
                  <h4 className="mhs_title">Saved Courses</h4>
                  <div className="col-md-12">
                    <div className="other_instructor_view-list_courses">
                      <div className="other_instructor_view-row">
                        {courses.map((course) => (
                          <div
                            key={course.id}
                            className={`mip-oiv-course ${
                              selectedCourses.includes(course.id)
                                ? "selected"
                                : ""
                            }`}
                            onClick={(e) => handleCourseClick(e, course.id)}
                          >
                            <div className="mip-oiv-course-detail">
                              <a
                                href="course_detail_view.html"
                                className="fcrse_img"
                                onClick={(e) => e.preventDefault()}
                              >
                                <img src={course.imgSrc} alt={course.title} />
                                <div className="oiv-course-overlay">
                                  {course.bestseller && (
                                    <div className="oiv-badge_seller">
                                      Bestseller
                                    </div>
                                  )}
                                  {course.rating && (
                                    <div className="crse_reviews">
                                      <img
                                        className="starIcon"
                                        src={ratingStar}
                                        alt="rating star"
                                      />
                                      {course.rating}
                                    </div>
                                  )}
                                  <div className="crse_timer">
                                    {course.duration}
                                  </div>
                                </div>
                              </a>
                              <div className="fcrse_contents">
                                <div className="fcrse_content">
                                  <div className="other_instructor_view-time_view">
                                    <span className="vdt14">
                                      {course.views} •{" "}
                                    </span>
                                    <span className="vdt14">
                                      {course.timeAgo}
                                    </span>
                                  </div>
                                  <div className="eps_dots more_dropdown">
                                    <a
                                      href="#"
                                      className="oiv-dropdown-button"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      ⋮
                                    </a>
                                    <div className="oiv-dropdown-content">
                                      <span>
                                        <img src={share} alt="share" /> Share
                                      </span>
                                      <span>
                                        <img src={saved_course} alt="save" />{" "}
                                        Save
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
                                <a
                                  href="course_detail_view.html"
                                  className="oiv-detail"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {course.title}
                                </a>
                                <a
                                  href="#"
                                  className="oiv-career"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {course.category}
                                </a>
                                <div className="other_instructor_view-publisher">
                                  <p className="oiv-publisher">
                                    By{" "}
                                    <a
                                      href="#"
                                      onClick={(e) => e.preventDefault()}
                                    >
                                      {course.author}
                                    </a>
                                  </p>
                                  <div className="oiv-price">
                                    {course.price}
                                  </div>
                                  <button
                                    className="sc-cart"
                                    title="cart"
                                    onClick={(e) => handleAddToCart(course, e)}
                                  >
                                    <img
                                      src={card_icon}
                                      alt=""
                                      className="sc-cart-icon"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCourses;
