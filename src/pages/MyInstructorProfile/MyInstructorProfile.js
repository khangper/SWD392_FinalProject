import React, { useEffect, useState } from 'react'
import './MyInstructorProfile.css'
import facebook from '../../assets/facebook.png';
import x from '../../assets/x.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import ratingStar from "../../assets/rating.png"
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
import card_icon from '..//../assets/cart-icon.png';
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import heart from "../../assets/heart.png";
import edit from "../../assets/edit.png";
import deletee from "../../assets/delete.png";
import profile_image from '..//../assets/profile-img.jpg';
import notification_icon from '..//../assets/notification-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoursesDRequest } from '../../redux/reduxActions/CoursesDAction';
import { fetchSaveCoursesRequest } from '../../redux/reduxActions/SaveCourseAction';
import { addToCart } from "../../redux/reduxActions/ShoppingCartAction";
import { fetchCommentsRequest } from '../../redux/reduxActions/CommentAction';
import { fetchInstructorsmoreRequest } from '../../redux/reduxActions/instructorActions';

const MyInstructorProfile = () => {
    const dispatch = useDispatch();
    const [oivtab, setOivtab] = useState('about')
    const { coursesd } = useSelector((state) => state.coursesd);
    const { courses, loading, error } = useSelector((state) => state.saveCourses);
    const [selectedCourses, setSelectedCourses] = useState([]);
    useEffect(() => {
        dispatch(fetchSaveCoursesRequest());
    }, [dispatch]);


    useEffect(() => {
        dispatch(fetchCoursesDRequest());
    }, [dispatch]);

    const { comments } = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch(fetchCommentsRequest());
    }, [dispatch]);

    const { instructorsmore } = useSelector(
        (state) => state.allinstructor
    );
    useEffect(() => {
        dispatch(fetchInstructorsmoreRequest());
    }, [dispatch]);

    const handleCourseClick = (event, id) => {
        event.preventDefault();
        toggleSelectCourse(id);
    };

    const handleAddToCart = (course, event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to the parent elements
        dispatch(addToCart(course));
    };
    const toggleSelectCourse = (id) => {
        setSelectedCourses((prevSelectedCourses) =>
            prevSelectedCourses.includes(id)
                ? prevSelectedCourses.filter((courseId) => courseId !== id)
                : [...prevSelectedCourses, id]
        );
    };
    const handleoivTabChange = (tab) => {
        setOivtab(tab)
    }
    return (
        <div>
            <div className="other_instructor_view-wrapper">
                <div className="card">
                    <div className="other_instructor_view-container">
                        <div className="other_instructor_view-row">
                            <div className="other_instructor_view-col-md-12">
                                <div className="other_instructor_view-section">
                                    <div className="other_instructor_view-row2">
                                        <div className="other_instructor_view-col-lg-6">
                                            <div className="other_instructor_view-avatar">
                                                <div className="other_instructor_view-img">
                                                    <img src={profile_image} alt="" />
                                                </div>
                                                <div className="other_instructor_view-name-career">
                                                    <h2>Joginder Signh</h2>
                                                    <span>Web Developer, Designer, and Teacher</span>
                                                </div>
                                            </div>
                                            <ul className="other_instructor_view-more_info">
                                                <li>
                                                    <div className="other_instructor_view-enroll_label_more_info">
                                                        <div className="other_instructor_view-label">Enroll Students</div>
                                                        <div className="other_instructor_view-number">612K</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="other_instructor_view-enroll_label_more_info">
                                                        <div className="other_instructor_view-label">Courses</div>
                                                        <div className="other_instructor_view-number">8</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="other_instructor_view-enroll_label_more_info">
                                                        <div className="other_instructor_view-label">Reviews</div>
                                                        <div className="other_instructor_view-number">115K</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="other_instructor_view-enroll_label_more_info">
                                                        <div className="other_instructor_view-label">Subscribers</div>
                                                        <div className="other_instructor_view-number">452K</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="other_instructor_view-col-lg-5">
                                            <a href="#" className="other_instructor_view-report_profile">
                                                <span><i className="uil uil-windsock"></i></span>Setting
                                            </a>
                                            <div className="other_instructor_view-social">
                                                <ul className="social-icons">
                                                    <a href="#" className="oiv-fb"><img src={facebook} /></a>
                                                    <a href="#" className="oiv-x"><img src={x} /></a>
                                                    <a href="#" className="oiv-ln"><img src={linkedin} /></a>
                                                    <a href="#" className="oiv-yt"><img src={youtube} /></a>
                                                </ul>
                                            </div>
                                            <ul className="other_instructor_view-subcrise">
                                                <button className="subscribe-btn btn500">Cursus Studio</button>
                                                <button className="msg125 btn500">Edit</button>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="other_instructor_view-navigation">
                    <div className="other_instructor_view-container">
                        <div className="other_instructor_view-row">
                            <div className="other_instructor_view-col-lg-12">
                                <div className="other_instructor_view-course_tabs">
                                    <nav>
                                        <div className="other_instructor_view-nav">
                                            <div className={`tab ${oivtab === 'about' ? 'active' : ''}`}
                                                onClick={() => handleoivTabChange('about')}
                                            >
                                                <div className='oiv-nav-about'>About</div>
                                            </div>
                                            <div className={`tab ${oivtab === 'courses' ? 'active' : ''}`}
                                                onClick={() => handleoivTabChange('courses')}
                                            >
                                                <div className='oiv-nav-courses'>Courses</div>
                                            </div>
                                            <div className={`tab ${oivtab === 'purchased' ? 'active' : ''}`}
                                                onClick={() => handleoivTabChange('purchased')}
                                            >
                                                <div className='oiv-nav-courses'>Purchased</div>
                                            </div>
                                            <div className={`tab ${oivtab === 'discussion' ? 'active' : ''}`}
                                                onClick={() => handleoivTabChange('discussion')}
                                            >
                                                <div className='oiv-nav-discussion'>Discussion</div>
                                            </div>
                                            <div className={`tab ${oivtab === 'subscriptions' ? 'active' : ''}`}
                                                onClick={() => handleoivTabChange('subscriptions')}
                                            >
                                                <div className='oiv-nav-courses'>Subscriptions</div>
                                            </div>
                                        </div>
                                        {oivtab === 'about' && (
                                            <div className='about-tab'>
                                                <div className="tab-pane fade show active">
                                                    <div className="other_instructor_view-about_me">
                                                        <div className="label-about">
                                                            <h3>About Me</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nibh sed ligula blandit, quis faucibus lorem pellentesque. Suspendisse pulvinar dictum pellentesque. Vestibulum at sagittis lectus, sit amet aliquam turpis. In quis elit tempus, semper justo vitae, lacinia massa. Etiam sagittis quam quis fermentum lacinia. Curabitur blandit sapien et risus congue viverra. Mauris auctor risus sit amet cursus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat sodales massa, in viverra dolor condimentum ut. In imperdiet, justo nec volutpat blandit, tellus justo tempor quam, sed pretium nibh nunc nec mauris. Mauris vel malesuada magna. Quisque iaculis molestie purus, non luctus mauris porta id. Maecenas imperdiet tincidunt mauris vestibulum vulputate. Aenean sollicitudin pretium nibh, et sagittis risus tincidunt ac. Phasellus scelerisque rhoncus massa, ac euismod massa pharetra non. Phasellus dignissim, urna in iaculis varius, turpis libero mollis velit, sit amet euismod arcu mi ac nibh. Praesent tincidunt eros at ligula pellentesque elementum. Fusce condimentum enim a tellus egestas, sit amet rutrum elit gravida. Pellentesque in porta sapien. Fusce tristique maximus ipsum et mollis. Sed at massa ac est dapibus vulputate at eu nibh.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {oivtab === 'courses' && (
                                            <div className="tab-pane fade">
                                                <div className="other_instructor_view-crse_content">
                                                    <h3>My courses (8)</h3>
                                                    <div className="other_instructor_view-list_courses">
                                                        <div className="other_instructor_view-row">
                                                            {coursesd.map((course) => (
                                                                <div className="oiv-course" key={course.id}>
                                                                    <div className="oiv-course-detail">
                                                                        <a href="course_detail_view.html" className="fcrse_img">
                                                                            <img src={course.image} alt='' />
                                                                            <div className="oiv-course-overlay">
                                                                                {course.bestseller && (
                                                                                    <div className="oiv-badge_seller">Bestseller</div>
                                                                                )}
                                                                                <div className="crse_reviews">
                                                                                    <img className="starIcon" src={ratingStar} alt="rating" />
                                                                                    {course.ratingStar}
                                                                                </div>
                                                                                <div className="crse_timer">{course.time}</div>
                                                                            </div>
                                                                        </a>
                                                                        <div className="fcrse_contents">
                                                                            <div className="fcrse_content">
                                                                                <div className="other_instructor_view-time_view">
                                                                                    <span className="view">{course.view} • </span>
                                                                                    <span className="time">{course.day}</span>
                                                                                </div>
                                                                                <div className="eps_dots more_dropdown">
                                                                                    <a href="#" className="oiv-dropdown-button">⋮</a>
                                                                                    <div className="oiv-dropdown-content">
                                                                                        <span><img src={share} alt="share" />Share</span>
                                                                                        <span><img src={saved_course} alt="save" />Save</span>
                                                                                        <span><img src={not_interested} alt="not interested" />Not Interested</span>
                                                                                        <span><img src={report} alt="report" />Report</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="course_detail_view.html" className="oiv-detail">
                                                                                {course.detail}
                                                                            </a>
                                                                            <a href="#" className="oiv-career">
                                                                                {course.career}
                                                                            </a>
                                                                            <div className="other_instructor_view-publisher">
                                                                                <p className="oiv-publisher">
                                                                                    By <a href="#">{course.author}</a>
                                                                                </p>
                                                                                <div className="oiv-price">{course.price}</div>
                                                                                <button className="oiv-cart" title="cart">
                                                                                    <img src={card_icon} alt="cart" className="oiv-cart-icon" />
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
                                        )}
                                        {oivtab === 'purchased' && (
                                            <div>
                                                <div className="tab-pane fade">
                                                    <div className="other_instructor_view-crse_content">
                                                        <h3>Purchased Courses</h3>
                                                        <div className="other_instructor_view-list_courses">
                                                            <div className="other_instructor_view-row">
                                                                {courses.map((course) => (
                                                                    <div
                                                                        key={course.id}
                                                                        className={`mip-oiv-course ${selectedCourses.includes(course.id)
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
                                        )}
                                        {oivtab === 'discussion' && (
                                            <div className="tab-pane fade">
                                                <div className="student_reviews">
                                                    <div className="other_instructor_view-row-discussion">
                                                        <div className="other_instructor_view-col-lg-12">
                                                            <div className="review_right">
                                                                <div className="review_right_heading">
                                                                    <h3>Discussions</h3>
                                                                </div>
                                                            </div>
                                                            <div className="oiv-comment">
                                                                <div className="cmnt_group">
                                                                    <div className="oiv-img160">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                                    </div>
                                                                    <textarea className="oiv-cmnt-box" placeholder="Add a public comment"></textarea>
                                                                </div>
                                                                <button className="oiv-cmnt-btn" type="submit">Comment</button>
                                                            </div>
                                                            {comments.map((comment) => (
                                                                <div className="oiv-history-comment" key={comment.id}>
                                                                    <div className="oiv-review_item">
                                                                        <div className="oiv-review_usr_dt">
                                                                            <img src={comment.userImage} alt="" />
                                                                            <div className="oiv-cmnt_name">
                                                                                <h4 className="oiv-tutor_name">{comment.userName}</h4>
                                                                                <span className="oiv-cmnt_time">{comment.timeAgo}</span>
                                                                            </div>
                                                                            <div className="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">⋮</a>
                                                                                <div className="oiv-dropdown-content">
                                                                                    <span><img src={edit} alt="edit" /> Edit</span>
                                                                                    <span><img src={deletee} alt="delete" /> Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="oiv-cmnt_text_message">{comment.message}</p>
                                                                        <div className="oiv-contact_icon">
                                                                            <a href="#" className="oiv-report"><img src={like} alt="like" /> {comment.likes}</a>
                                                                            <a href="#" className="oiv-report"><img src={dislike} alt="dislike" /> {comment.dislikes}</a>
                                                                            <a href="#" className="oiv-report"><img src={heart} alt="heart" /></a>
                                                                            <a href="#" className="oiv-report ml-3">Reply</a>
                                                                        </div>
                                                                    </div>
                                                                    {comment.replies && comment.replies.map((reply) => (
                                                                        <div className="oiv-review_reply" key={reply.id}>
                                                                            <div className="oiv-review_item">
                                                                                <div className="oiv-review_usr_dt">
                                                                                    <img src={reply.userImage} alt="" />
                                                                                    <div className="oiv-cmnt_name">
                                                                                        <h4 className="oiv-tutor_name">{reply.userName}</h4>
                                                                                        <span className="oiv-cmnt_time">{reply.timeAgo}</span>
                                                                                    </div>
                                                                                    <div className="eps_dots more_dropdown">
                                                                                        <a href="#" className="oiv-dropdown-button">⋮</a>
                                                                                        <div className="oiv-dropdown-content">
                                                                                            <span><img src={deletee} alt="delete" /> Delete</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <p className="oiv-cmnt_text_message">{reply.message}</p>
                                                                                <div className="oiv-contact_icon">
                                                                                    <a href="#" className="oiv-report"><img src={like} alt="like" /> {reply.likes}</a>
                                                                                    <a href="#" className="oiv-report"><img src={dislike} alt="dislike" /> {reply.dislikes}</a>
                                                                                    <a href="#" className="oiv-report"><img src={heart} alt="heart" /></a>
                                                                                    <a href="#" className="oiv-report ml-3">Reply</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {oivtab === 'subscriptions' && (
                                            <div className='mip-subscription'>

                                                {instructorsmore?.map((instructor) => (
                                                    <div className="mip-instructor-profile">
                                                        <div className="instructor-profile-image">
                                                            <img src={instructor.image} alt={instructor.name} />
                                                        </div>
                                                        <div className="instructor-profile-content">
                                                            <div className="instructor-profile-header">
                                                                <a href="#" className="instructor-name">
                                                                    {instructor.name}
                                                                </a>
                                                                <div className="verified-badge"></div>
                                                            </div>
                                                            <div className="home-instructor-profile-title">
                                                                {instructor.category}
                                                            </div>
                                                            <ul className="my_instructor-profile-subcribe">
                                                                <button className="mip-subcribe">Subscribe</button>
                                                                <button className="mip-notification"><img src={notification_icon} alt='' className='cart-icon' /></button>
                                                            </ul>
                                                            <div className="instructor-profile-stats">
                                                                {instructor.students} • {instructor.courses}
                                                            </div>
                                                            <a href="/my-instructor-profile" className="instructor-profile-redirect">
                                                                Go to profile
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default MyInstructorProfile;