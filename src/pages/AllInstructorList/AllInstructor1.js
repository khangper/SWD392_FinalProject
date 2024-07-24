import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchInstructorsRequest,
  searchInstructorsRequest,
} from "../../redux/reduxActions/instructorActions";
import { useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
import "./AllInstructorList.css";
import searchIcon from "../../assets/search.png";
import facebookIcon from "../../assets/facebook.png";
import xIcon from "../../assets/x.png";
import linkedinIcon from "../../assets/linkedin.png";
import youtubeIcon from "../../assets/youtube.png";

const AllInstructor1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { instructors, loading, error } = useSelector(
    (state) => state.allinstructor
  );

  useEffect(() => {
    dispatch(fetchInstructorsRequest());
  }, [dispatch]);

  const handleInstructorClick = (id) => {
    navigate(`${PATH_NAME.OTHER_INSTRUCTOR_VIEW.replace(":id", id)}`);
  };

  useEffect(() => {
    if (searchQuery && Array.isArray(instructors) && instructors.length === 0) {
      window.location.reload();
    }
  }, [instructors, searchQuery]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    // Check for special characters
    const invalidChars = /[!@#$%^&*(),.?":{}|<>]/g;
    if (invalidChars.test(value)) {
      setErrorMessage(
        "Invalid characters detected. Please use only letters and numbers."
      );
    } else {
      setErrorMessage("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!errorMessage) {
        dispatch(searchInstructorsRequest(searchQuery));
      }
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(instructors) || instructors.length === 0) {
    return (
      <div className="NotFind-instructor">
        <div className="explore-container">
          <section className="search-box">
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search Tutors"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </section>
        </div>
        <div className="Notfindmessinstructor">No instructors found.</div>
      </div>
    );
  }

  return (
    <div>
      <header>
        <div className="explore-container">
          <section className="search-box">
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search Tutors"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </section>
        </div>
      </header>

      <main>
        <div className="All-Instructor-grid-container">
          {instructors.map((instructor) => (
            <li
              key={instructor.id}
              onClick={() => handleInstructorClick(instructor.id)}
            >
              <div className="All-Instructor-grid-item">
                <div className="All-Instructor-fcrse_1 mt-30">
                  <div className="All-Instructor-tutor_img">
                    <img src={instructor.image} alt={instructor.name} />
                  </div>
                  <div className="All-Instructor-tutor_content_dt">
                    <div className="All-Instructor-tutor150">
                      <div className="All-Instructor-tutor_name">
                        {instructor.name}
                      </div>
                      <div className="All-Instructor-mef78" title="Verify">
                        <div className="verified-badge"></div>
                      </div>
                    </div>
                    <div className="All-Instructor-tutor_cate">
                      {instructor.category}
                    </div>
                    <div className="All-social-icons">
                      <div className="AllIn_icon">
                        <div href={instructor.facebook} className="sc-fb">
                          <img src={facebookIcon} alt="Facebook" />
                        </div>
                      </div>
                      <div className="AllIn_icon">
                        <div href={instructor.twitter} className="sc-tw">
                          <img src={xIcon} alt="Twitter" />
                        </div>
                      </div>
                      <div className="AllIn_icon">
                        <div href={instructor.linkedin} className="sc-ln">
                          <img src={linkedinIcon} alt="LinkedIn" />
                        </div>
                      </div>
                      <div className="AllIn_icon">
                        <div href={instructor.youtube} className="sc-yt">
                          <img src={youtubeIcon} alt="YouTube" />
                        </div>
                      </div>
                    </div>
                    <div className="All-Instructor-tut1250">
                      <span className="All-Instructor-vdt15">
                        {instructor.students}
                      </span>
                      <span className="All-Instructor-vdt15">
                        {instructor.courses}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllInstructor1;
