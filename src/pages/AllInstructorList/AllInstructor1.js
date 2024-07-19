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
  const handleInstructorClick = (id) => {
    navigate(`${PATH_NAME.OTHER_INSTRUCTOR_VIEW.replace(":id", id)}`);
  };
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { instructors, loading, error } = useSelector(
    (state) => state.allinstructor
  );
  useEffect(() => {
    dispatch(fetchInstructorsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery && Array.isArray(instructors) && instructors.length === 0) {
      window.location.reload();
    }
  }, [instructors, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(searchInstructorsRequest(searchQuery));
    }
  };

  // if (loading) {
  //   return (
  //     // <div className="Allinstructor-main-loader">
  //     //   <div className="lds-facebook">
  //     //     <div></div>
  //     //     <div></div>
  //     //     <div></div>
  //     //   </div>
  //     // </div>
  //   );
  // }

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
            // </Link>
          ))}
        </div>
        {/* <div className="main-loader mt-20">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default AllInstructor1;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchInstructorsRequest,
//   searchInstructorsRequest,
// } from "../../redux/reduxActions/instructorActions";
// import { Link } from "react-router-dom";
// import { PATH_NAME } from "../../constant/pathname";
// import "./AllInstructorList.css";
// import searchIcon from "../../assets/search.png";
// import facebookIcon from "../../assets/facebook.png";
// import xIcon from "../../assets/x.png";
// import linkedinIcon from "../../assets/linkedin.png";
// import youtubeIcon from "../../assets/youtube.png";

// const AllInstructor1 = () => {
//   const dispatch = useDispatch();
//   const { instructors, loading, error } = useSelector(
//     (state) => state.allinstructor
//   );
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     dispatch(fetchInstructorsRequest());
//   }, [dispatch]);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       dispatch(searchInstructorsRequest(searchQuery));
//     }
//   };

//   if (loading) {
//     return (
//       <div className="Allinstructor-main-loader">
//         <div className="lds-facebook">
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!Array.isArray(instructors) || instructors.length === 0) {
//     return (
//       <div className="NotFind-instructor">
//         <div className="explore-container">
//           <section className="search-box">
//             <img src={searchIcon} alt="Search Icon" className="search-icon" />
//             <input
//               type="text"
//               placeholder="Search Tutors"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               onKeyDown={handleKeyDown}
//             />
//           </section>
//         </div>
//         <div className="Notfindmessinstructor">No instructors found.</div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <header>
//         <div className="explore-container">
//           <section className="search-box">
//             <img src={searchIcon} alt="Search Icon" className="search-icon" />
//             <input
//               type="text"
//               placeholder="Search Tutors"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               onKeyDown={handleKeyDown}
//             />
//           </section>
//         </div>
//       </header>

//       <main>
//         <div className="All-Instructor-grid-container">
//           {instructors.map((instructor) => (
//             <Link
//               key={instructor.id}
//               to={`${PATH_NAME.OTHER_INSTRUCTOR_VIEW}/${instructor.id}`}
//               className="All-Instructor-grid-item-link"
//             >
//               <div className="All-Instructor-grid-item">
//                 <div className="All-Instructor-fcrse_1 mt-30">
//                   <div className="All-Instructor-tutor_img">
//                     <img src={instructor.image} alt={instructor.name} />
//                   </div>
//                   <div className="All-Instructor-tutor_content_dt">
//                     <div className="All-Instructor-tutor150">
//                       <div className="All-Instructor-tutor_name">
//                         {instructor.name}
//                       </div>
//                       <div className="All-Instructor-mef78" title="Verify">
//                         <div className="verified-badge"></div>
//                       </div>
//                     </div>
//                     <div className="All-Instructor-tutor_cate">
//                       {instructor.category}
//                     </div>
//                     <div className="All-social-icons">
//                       <a
//                         href={instructor.facebook}
//                         className="AllIn_icon sc-fb"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <img src={facebookIcon} alt="Facebook" />
//                       </a>
//                       <a
//                         href={instructor.twitter}
//                         className="AllIn_icon sc-tw"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <img src={xIcon} alt="Twitter" />
//                       </a>
//                       <a
//                         href={instructor.linkedin}
//                         className="AllIn_icon sc-ln"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <img src={linkedinIcon} alt="LinkedIn" />
//                       </a>
//                       <a
//                         href={instructor.youtube}
//                         className="AllIn_icon sc-yt"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <img src={youtubeIcon} alt="YouTube" />
//                       </a>
//                     </div>
//                     <div className="All-Instructor-tut1250">
//                       <span className="All-Instructor-vdt15">
//                         {instructor.students}
//                       </span>
//                       <span className="All-Instructor-vdt15">
//                         {instructor.courses}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AllInstructor1;
