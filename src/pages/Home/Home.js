import React, { useRef } from "react";
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
import facebook from '../../assets/facebook.png';
import x from '../../assets/x.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import development from '../../assets/development.png';
import business from '../../assets/business.png';
import it from '../../assets/it.png';
import design from '../../assets/design.png';
import marketing from '../../assets/marketing.png';
import book from '../../assets/book.png';
import music from '../../assets/music.png';
import profile_image from '..//../assets/profile-img.jpg';
const Home = () => {
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
  const newestCourses = [
    {
      id: 1,
      title: "Build Responsive Real World Websites with HTML5 and CSS3",
      views: "15",
      date: "10 min ago",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-13.jpg",
      price: "$4",
      hours: "12 hours",
      author: "John Doe",
      category: "Development | CSS",
      rating: 4.5,
    },
    {
      id: 2,
      title: "The Complete JavaScript Course 2020: Build Real Projects!",
      views: "5",
      date: "15 min ago",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-14.jpg",
      price: "$5",
      hours: "28 hours",
      author: "Jassica William",
      category: "Development | JavaScript",
      rating: 4.5,
    },
    {
      id: 3,
      title: "The Complete Front-End Web Development Course!",
      views: "25",
      date: "2 hours ago",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-15.jpg",
      price: "$9",
      hours: "15 hours",
      author: "Joginder Singh",
      category: "Development | Web Development",
      rating: 4.5,
    },
    {
      id: 4,
      title: "Ethical Hacking - Most Advanced Level Penetration Testing",
      views: "15",
      date: "6 hours ago",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-16.jpg",
      price: "$10",
      hours: "1 hour",
      author: "Poonam Verma",
      category: "IT & Software | Ethical Hacking",
      rating: 5.0,
    },
    {
      id: 5,
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      views: "45",
      date: "20 hours ago",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-17.jpg",
      price: "$6",
      hours: "28 hours",
      author: "Rock William",
      category: "Development | Sass",
      rating: 3.5,
    },
    {
      id: 6,
      title: "The Complete Node.js Developer Course (3rd Edition)",
      views: "20",
      date: "1 day ago",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-18.jpg",
      price: "$3",
      hours: "30 hours",
      author: "John Doe",
      category: "Development | Node.js",
      rating: 5.0,
    },
    {
      id: 7,
      title: "WordPress Development - Themes, Plugins & Gutenberg",
      views: "200",
      date: "4 days ago",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-19.jpg",
      price: "$14",
      hours: "21 hours",
      author: "Joy Dua",
      category: "Design | Wordpress",
      rating: 5.0,
    },
    {
      id: 8,
      title: "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
      views: "11",
      date: "5 days ago",
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-20.jpg",
      price: "$10",
      hours: "22 hours",
      author: "Manreet Kaur",
      category: "Development | Vue JS",
      rating: 4.0,
    },
  ];

  const popularInstructor = [
    {
      id: 1,
      name: "John Doe",
      title: "Wordpress & Plugin Tutor",
      students: "100K",
      courses: 15,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 2,
      name: "Kerstin Cable",
      title: "Language Learning Coach, Writer, Online Tutor",
      students: "14K",
      courses: 11,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 3,
      name: "Jose Portilla",
      title: "Head of Data Science, Pierian Data Inc.",
      students: "1M",
      courses: 25,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 4,
      name: "Farhat Amin",
      title: "Cookery Coach",
      students: "1.5K",
      courses: 9,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 5,
      name: "Kyle Pew",
      title: "Microsoft Certified Trainer - 380,000+ Udemy Students",
      students: "300K",
      courses: 18,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 6,
      name: "Jaysen Batchelor",
      title: "Illustrator & Designer",
      students: "491K",
      courses: 13,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-6.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 7,
      name: "Quinton Batchelor",
      title: "Photographer & Instructor",
      students: "364K",
      courses: 6,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-7.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    {
      id: 8,
      name: "Eli Natoli",
      title: "Entrepreneur - Passionate Teacher",
      students: "615K",
      courses: 12,
      imgSrc:
        "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-8.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
  ];

  const studentThought = [
    {
      id: 1,
      quote:
        "Donec ac ex eu arcu euismod feugiat. In venenatis bibendum nisi, in placerat eros ultricies vitae. Praesent pellentesque blandit scelerisque. Suspendisse potenti.",
      name: "Jassica William",
      imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg",
    },
    {
      id: 2,
      quote:
        "Cras id enim lectus. Fusce at arcu tincidunt, iaculis libero quis, vulputate mauris. Morbi facilisis vitae ligula id aliquam. Nunc consectetur malesuada bibendum.",
      name: "Rock Smith",
      imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-2.jpg",
    },
    {
      id: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos eros ac, sagittis orci.",
      name: "Luoci Marchant",
      imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg",
    },
    {
      id: 4,
      quote: "Nulla bibendum lectus pharetra, tempus eros ac, sagittis orci. Suspendisse posuere dolor neque, at finibus mauris lobortis in. Pellentesque vitae laoreet tortor.",
      name: "Poonam Sharma",
      imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-4.jpg"
    },
    {
      id: 5,
      quote: "Curabitur placerat justo ac mauris condimentum ultricies. In magna tellus, eleifend et volutpat id, sagittis vitae est. Pellentesque vitae laoreet tortor.",
      name: "Davinder Singh",
      imgSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-5.jpg"
    }
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
                {featuredCourses.map((course) => (
                  <div key={course.id} className="course-card">
                    <a>
                      <img src={course.imgSrc} alt={course.title} />
                      <div className="course-overlay">
                        <div className="badge-seller">Best seller</div>
                        <div className="course-review">
                          <img className='starIcon' src={ratingStar}></img>
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
                            <span><img src={share} />Share</span>
                            <span><img src={saved_course} />Save</span>
                            <span><img src={not_interested} />Not Interested</span>
                            <span><img src={report} />Report</span>
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
                {newestCourses.map((course) => (
                  <div key={course.id} className="course-card">
                    <a>
                      <img src={course.imgSrc} alt={course.title} />
                      <div className="course-overlay">
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
                            <span><img src={share} />Share</span>
                            <span><img src={saved_course} />Save</span>
                            <span><img src={not_interested} />Not Interested</span>
                            <span><img src={report} />Report</span>
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
              <a href="#" className="see-all-link">
                See all
              </a>
            </div>
            <div className="popular-instructors-container">
              <button
                className="scroll-button left"
                onClick={() => scrollLeftInstructor(popularInstructorRef)}
              ></button>
              <div className="popular-instructors" ref={popularInstructorRef}>
                {popularInstructor.map((instructor) => (
                  <div key={instructor.id} className="popular-instructors-card">
                    <div className="popular-instructor-image">
                      <img
                        src={instructor.imgSrc}
                        alt={instructor.name}
                        className="popular-instructor-photo"
                      />
                    </div>
                    <div className="popular-instructor-content">
                      <div className="popular-instructor-profile">
                        <a href="#" className="instructor-name">
                          {instructor.name}
                        </a>
                        <div className="verified-badge"></div>
                      </div>
                      <div className="popular-instructor-title">
                        {instructor.title}
                      </div>
                      <ul className="social-icons">
                        <a href="#" className="sc-fb"><img src={facebook} /></a>
                        <a href="#" className="sc-tw"><img src={x} /></a>
                        <a href="#" className="sc-ln"><img src={linkedin} /></a>
                        <a href="#" className="sc-yt"><img src={youtube} /></a>
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
              <img
                src={profile_image}
                alt="Instructor Profile"
              />
            </div>
            <div className="instructor-profile-content">
              <div className="instructor-profile-header">
                <a href="#" className="instructor-name">
                  Joginder Signh
                </a>
                <div className="verified-badge"></div>
              </div>
              <div className="home-instructor-profile-title">
                Web Developer, Designer, and Teacher
              </div>
              <ul className="social-icons">
                <a href="#" className="sc-fb"><img src={facebook} /></a>
                <a href="#" className="sc-tw"><img src={x} /></a>
                <a href="#" className="sc-ln"><img src={linkedin} /></a>
                <a href="#" className="sc-yt"><img src={youtube} /></a>
              </ul>
              <div className="instructor-profile-stats">
                100K Students • 15 Courses
              </div>
              <a href="#" className="instructor-profile-redirect">
                Go to profile
              </a>
            </div>
          </section>

          <section className="home-livestream-setup">
            <div className="home-livestream-setup-title">
              <h4>Live Streaming</h4>
            </div>
            <div className="home-livestream-setup-text">
              <div className="home-livestream-icon">
                <div className="home-livestream-icon-image"><img src={livestream}></img></div>

              </div>
              <div className="home-livestream-content">
                <p>Set up your channel and stream live to your students</p>
                <button className="home-livestream-link">Get Started</button>
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
              <span><img src={development} />Development</span>
              <span><img src={business} />Business</span>
              <span><img src={it} />IT & Software</span>
              <span><img src={design} />Design</span>
              <span><img src={marketing} />Marketing</span>
              <span><img src={book} />Personal Development</span>
              <span><img src={music} />Music</span>
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
              {studentThought.map((studentThought) => (
                <div key={studentThought.id} className="student-thought-card">
                  <div className="student-thought-content">
                    <p>"{studentThought.quote}"</p>
                  </div>

                  <div className="student-thought-profile">
                    <div className="student-thought-image">
                      <img
                        src={studentThought.imgSrc}
                      />
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
