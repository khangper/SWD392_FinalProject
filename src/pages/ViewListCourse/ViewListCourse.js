// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Modal from "react-modal";
// import "./ViewListCourse.css"; // For additional styling if needed

// // Set up the modal root for accessibility
// Modal.setAppElement("#root");

// function ViewListCourse() {
//   const { id } = useParams();
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [videoUrl, setVideoUrl] = useState("");

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyPurchase-Course/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch course details");
//         }
//         const data = await response.json();
//         setCourses(data.courses || []); // Set only the courses array
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourseDetails();
//   }, [id]);

//   const openModal = (link) => {
//     // Regular expression to extract the video ID from different YouTube URL formats
//     const videoIdMatch = link.match(
//       /(?:youtube\.com\/(?:[^\/\n\s]+\/\S*?\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
//     );
//     const videoId = videoIdMatch ? videoIdMatch[1] : null;

//     if (videoId) {
//       const embedUrl = `https://www.youtube.com/embed/${videoId}`;
//       setVideoUrl(embedUrl);
//       setIsModalOpen(true);
//     } else {
//       alert("Invalid video URL");
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setVideoUrl("");
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="ViewListCourse">
//       <h1>Course List</h1>
//       {courses.length > 0 ? (
//         <ul>
//           {courses.map((course) => (
//             <li key={course.id}>
//               <p>
//                 <strong>Title:</strong> {course.title}
//               </p>
//               <p>
//                 <strong>Price:</strong> {course.price}
//               </p>
//               <button onClick={() => openModal(course.Linkyoutube)}>
//                 Watch on YouTube
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No courses available.</p>
//       )}

//       {/* Modal for YouTube Video */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Watch Video"
//         className="modal"
//         overlayClassName="modal-overlay"
//       >
//         <button onClick={closeModal} className="close-button">
//           Close
//         </button>
//         <div className="video-container">
//           <iframe
//             width="560"
//             height="315"
//             src={videoUrl}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default ViewListCourse;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import "./ViewListCourse.css";

Modal.setAppElement("#root");

function ViewListCourse() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(
          `https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/MyPurchase-Course/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        const data = await response.json();
        setCourses(data.courses || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCourseDetails();
  }, [id]);

  const openModal = (link) => {
    const videoIdMatch = link.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S*?\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      setVideoUrl(embedUrl);
      setIsModalOpen(true);
    } else {
      alert("Invalid video URL");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="view-list-course">
      <h1 className="view-list-course-title">Course List</h1>
      {courses.length > 0 ? (
        <ul className="view-list-course-list">
          {courses.map((course) => (
            <li key={course.id} className="view-list-course-item">
              <p className="course-title">
                <strong>Title:</strong> {course.title}
              </p>
              <p className="course-price">
                <strong>Price:</strong> {course.price}
              </p>
              {course.Linkyoutube ? (
                <button
                  className="watch-button"
                  onClick={() => openModal(course.Linkyoutube)}
                >
                  Watch on YouTube
                </button>
              ) : (
                <p className="no-video-message">No video available</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-courses-message">No courses available.</p>
      )}

      {/* Modal for YouTube Video */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Watch Video"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-button">
          {/* Close */}
        </button>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default ViewListCourse;
