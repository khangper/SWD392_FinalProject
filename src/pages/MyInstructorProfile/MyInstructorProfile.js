import React, { useState } from 'react'
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

const MyInstructorProfile = () => {
    const [oivtab, setOivtab] = useState('about')
    const [selectOptions, setSelectOptions] = useState('')

    const handleoivTabChange = (tab) => {
        setOivtab(tab)
    }

    const handleSelectChange = (event) => {
        setSelectOptions(event.target.value)
    }
    return (
        <div>
            <div class="other_instructor_view-wrapper">
                <div class="card">
                    <div class="other_instructor_view-container">
                        <div class="other_instructor_view-row">
                            <div class="other_instructor_view-col-md-12">
                                <div class="other_instructor_view-section">
                                    <div class="other_instructor_view-row2">
                                        <div class="other_instructor_view-col-lg-6">
                                            <div class="other_instructor_view-avatar">
                                                <div class="other_instructor_view-img">
                                                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                </div>
                                                <div class="other_instructor_view-name-career">
                                                    <h2>John Doe</h2>
                                                    <span>Web Developer</span>
                                                </div>
                                            </div>
                                            <ul class="other_instructor_view-more_info">
                                                <li>
                                                    <div class="other_instructor_view-enroll_label_more_info">
                                                        <div class="other_instructor_view-label">Enroll Students</div>
                                                        <div class="other_instructor_view-number">612K</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="other_instructor_view-enroll_label_more_info">
                                                        <div class="other_instructor_view-label">Courses</div>
                                                        <div class="other_instructor_view-number">8</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="other_instructor_view-enroll_label_more_info">
                                                        <div class="other_instructor_view-label">Reviews</div>
                                                        <div class="other_instructor_view-number">115K</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="other_instructor_view-enroll_label_more_info">
                                                        <div class="other_instructor_view-label">Subscribers</div>
                                                        <div class="other_instructor_view-number">452K</div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="other_instructor_view-col-lg-5">
                                            <a href="#" class="other_instructor_view-report_profile">
                                                <span><i class="uil uil-windsock"></i></span>Setting
                                            </a>
                                            <div class="other_instructor_view-social">
                                                <ul className="social-icons">
                                                    <a href="#" className="oiv-fb"><img src={facebook} /></a>
                                                    <a href="#" className="oiv-x"><img src={x} /></a>
                                                    <a href="#" className="oiv-ln"><img src={linkedin} /></a>
                                                    <a href="#" className="oiv-yt"><img src={youtube} /></a>
                                                </ul>
                                            </div>
                                            <ul class="other_instructor_view-subcrise">
                                                <button class="subscribe-btn btn500">Cursus Studio</button>
                                                <button class="msg125 btn500">Edit</button>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="other_instructor_view-navigation">
                    <div class="other_instructor_view-container">
                        <div class="other_instructor_view-row">
                            <div class="other_instructor_view-col-lg-12">
                                <div class="other_instructor_view-course_tabs">
                                    <nav>
                                        <div class="other_instructor_view-nav">
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
                                                <div class="tab-pane fade show active">
                                                    <div class="other_instructor_view-about_me">
                                                        <div class="label-about">
                                                            <h3>About Me</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nibh sed ligula blandit, quis faucibus lorem pellentesque. Suspendisse pulvinar dictum pellentesque. Vestibulum at sagittis lectus, sit amet aliquam turpis. In quis elit tempus, semper justo vitae, lacinia massa. Etiam sagittis quam quis fermentum lacinia. Curabitur blandit sapien et risus congue viverra. Mauris auctor risus sit amet cursus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat sodales massa, in viverra dolor condimentum ut. In imperdiet, justo nec volutpat blandit, tellus justo tempor quam, sed pretium nibh nunc nec mauris. Mauris vel malesuada magna. Quisque iaculis molestie purus, non luctus mauris porta id. Maecenas imperdiet tincidunt mauris vestibulum vulputate. Aenean sollicitudin pretium nibh, et sagittis risus tincidunt ac. Phasellus scelerisque rhoncus massa, ac euismod massa pharetra non. Phasellus dignissim, urna in iaculis varius, turpis libero mollis velit, sit amet euismod arcu mi ac nibh. Praesent tincidunt eros at ligula pellentesque elementum. Fusce condimentum enim a tellus egestas, sit amet rutrum elit gravida. Pellentesque in porta sapien. Fusce tristique maximus ipsum et mollis. Sed at massa ac est dapibus vulputate at eu nibh.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {oivtab === 'courses' && (
                                            <div class="tab-pane fade">
                                                <div class="other_instructor_view-crse_content">
                                                    <h3>My courses (8)</h3>
                                                    <div class="other_instructor_view-list_courses">
                                                        <div class="other_instructor_view-row">
                                                            <div class="oiv-course">
                                                                <div class="oiv-course-detail">
                                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-1.jpg" alt="" />
                                                                        <div class="oiv-course-overlay">
                                                                            <div class="oiv-badge_seller">Bestseller</div>
                                                                            <div class="crse_reviews">
                                                                                <img className='starIcon' src={ratingStar}></img>
                                                                                4.5
                                                                            </div>

                                                                            <div class="crse_timer">
                                                                                25 hours
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <div className='fcrse_contents'>
                                                                        <div class="fcrse_content">

                                                                            <div class="other_instructor_view-time_view">
                                                                                <span class="view">109k views • </span>
                                                                                <span class="time">15 days ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={share} />Share</span>
                                                                                    <span><img src={saved_course} />Save</span>
                                                                                    <span><img src={not_interested} />Not Interested</span>
                                                                                    <span><img src={report} />Report</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <a href="course_detail_view.html" class="oiv-detail">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
                                                                        <a href="#" class="oiv-career">Web Development | Python</a>
                                                                        <div class="other_instructor_view-publisher">
                                                                            <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                            <div class="oiv-price">$10</div>
                                                                            <button class="oiv-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="oiv-course">
                                                                <div class="oiv-course-detail">
                                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg" alt="" />
                                                                        <div class="oiv-course-overlay">
                                                                            <div class="oiv-badge_seller">Bestseller</div>
                                                                            <div class="crse_reviews">
                                                                                <img className='starIcon' src={ratingStar}></img>4.5
                                                                            </div>

                                                                            <div class="crse_timer">
                                                                                28 hours
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <div className='fcrse_contents'>
                                                                        <div class="fcrse_content">

                                                                            <div class="other_instructor_view-time_view">
                                                                                <span class="vdt14">5M views • </span>
                                                                                <span class="vdt14">15 days ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={share} />Share</span>
                                                                                    <span><img src={saved_course} />Save</span>
                                                                                    <span><img src={not_interested} />Not Interested</span>
                                                                                    <span><img src={report} />Report</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <a href="course_detail_view.html" class="oiv-detail">The Complete JavaScript Course 2020: Build Real Projects!</a>
                                                                        <a href="#" class="oiv-career">Development | JavaScript</a>
                                                                        <div class="other_instructor_view-publisher">
                                                                            <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                            <div class="oiv-price">$5</div>
                                                                            <button class="oiv-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="oiv-course">
                                                                <div class="oiv-course-detail">
                                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-20.jpg" alt="" />
                                                                        <div class="oiv-course-overlay">
                                                                            <div class="crse_reviews">
                                                                                <img className='starIcon' src={ratingStar}></img>5.0
                                                                            </div>

                                                                            <div class="crse_timer">
                                                                                21 hours
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <div className='fcrse_contents'>
                                                                        <div class="fcrse_content">

                                                                            <div class="other_instructor_view-time_view">
                                                                                <span class="vdt14">200 Views • </span>
                                                                                <span class="vdt14">4 days ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={share} />Share</span>
                                                                                    <span><img src={saved_course} />Save</span>
                                                                                    <span><img src={not_interested} />Not Interested</span>
                                                                                    <span><img src={report} />Report</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <a href="course_detail_view.html" class="oiv-detail">WordPress Development - Themes, Plugins &amp; Gutenberg</a>
                                                                        <a href="#" class="oiv-career">Design | Wordpress</a>
                                                                        <div class="other_instructor_view-publisher">
                                                                            <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                            <div class="oiv-price">$14</div>
                                                                            <button class="oiv-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="oiv-course">
                                                                <div class="oiv-course-detail">
                                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-4.jpg" alt="" />
                                                                        <div class="oiv-course-overlay">
                                                                            <div class="oiv-badge_seller">Bestseller</div>
                                                                            <div class="crse_reviews">
                                                                                <img className='starIcon' src={ratingStar}></img>5.0
                                                                            </div>

                                                                            <div class="crse_timer">
                                                                                1 hour
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <div className='fcrse_contents'>
                                                                        <div class="fcrse_content">

                                                                            <div class="other_instructor_view-time_view">
                                                                                <span class="vdt14">153k views • </span>
                                                                                <span class="vdt14">3 months ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={share} />Share</span>
                                                                                    <span><img src={saved_course} />Save</span>
                                                                                    <span><img src={not_interested} />Not Interested</span>
                                                                                    <span><img src={report} />Report</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <a href="course_detail_view.html" class="oiv-detail">The Complete Digital Marketing Course - 12 Courses in 1</a>
                                                                        <a href="#" class="oiv-career">Digital Marketing | Marketing</a>
                                                                        <div class="other_instructor_view-publisher">
                                                                            <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                            <div class="oiv-price">$12</div>
                                                                            <button class="oiv-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="oiv-course">
                                                                <div class="oiv-course-detail">
                                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-13.jpg" alt="" />
                                                                        <div class="oiv-course-overlay">

                                                                            <div class="crse_timer">
                                                                                30 hours
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <div className='fcrse_contents'>
                                                                        <div class="fcrse_content">

                                                                            <div class="other_instructor_view-time_view">
                                                                                <span class="vdt14">20 Views • </span>
                                                                                <span class="vdt14">1 day ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={share} />Share</span>
                                                                                    <span><img src={saved_course} />Save</span>
                                                                                    <span><img src={not_interested} />Not Interested</span>
                                                                                    <span><img src={report} />Report</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <a href="course_detail_view.html" class="oiv-detail">The Complete Node.js Developer Course (3rd Edition)</a>
                                                                        <a href="#" class="oiv-career">Development | Node.js</a>
                                                                        <div class="other_instructor_view-publisher">
                                                                            <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                            <div class="oiv-price">$3</div>
                                                                            <button class="oiv-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="oiv-course">
                                                                <div class="oiv-course-detail">
                                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-7.jpg" alt="" />
                                                                        <div class="oiv-course-overlay">
                                                                            <div class="oiv-badge_seller">Bestseller</div>
                                                                            <div class="crse_reviews">
                                                                                <img className='starIcon' src={ratingStar}></img>5.0
                                                                            </div>

                                                                            <div class="crse_timer">
                                                                                5.4 hours
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <div className='fcrse_contents'>
                                                                        <div class="fcrse_content">

                                                                            <div class="other_instructor_view-time_view">
                                                                                <span class="vdt14">109k views • </span>
                                                                                <span class="vdt14">15 days ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={share} />Share</span>
                                                                                    <span><img src={saved_course} />Save</span>
                                                                                    <span><img src={not_interested} />Not Interested</span>
                                                                                    <span><img src={report} />Report</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <a href="course_detail_view.html" class="oiv-detail">WordPress for Beginners: Create a Website Step by Step</a>
                                                                        <a href="#" class="oiv-career">Design | Wordpress</a>
                                                                        <div class="other_instructor_view-publisher">
                                                                            <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                            <div class="oiv-price">$18</div>
                                                                            <button class="oiv-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="oiv-course">
                                                                <div class="oiv-course-detail">
                                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-8.jpg" alt="" />
                                                                        <div class="oiv-course-overlay">
                                                                            <div class="oiv-badge_seller">Bestseller</div>
                                                                            <div class="crse_reviews">
                                                                                <img className='starIcon' src={ratingStar}></img>4.0
                                                                            </div>

                                                                            <div class="crse_timer">
                                                                                23 hours
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <div className='fcrse_contents'>
                                                                        <div class="fcrse_content">

                                                                            <div class="other_instructor_view-time_view">
                                                                                <span class="vdt14">196k views • </span>
                                                                                <span class="vdt14">1 month ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={share} />Share</span>
                                                                                    <span><img src={saved_course} />Save</span>
                                                                                    <span><img src={not_interested} />Not Interested</span>
                                                                                    <span><img src={report} />Report</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <a href="course_detail_view.html" class="oiv-detail">CSS - The Complete Guide 2020 (incl. Flexbox, Grid &amp; Sass)</a>
                                                                        <a href="#" class="oiv-career">Design | CSS</a>
                                                                        <div class="other_instructor_view-publisher">
                                                                            <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                            <div class="oiv-price">$10</div>
                                                                            <button class="oiv-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="oiv-course">
                                                                <div class="oiv-course-detail">
                                                                    <a href="course_detail_view.html" class="fcrse_img">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-16.jpg" alt="" />
                                                                        <div class="oiv-course-overlay">

                                                                            <div class="crse_timer">
                                                                                22 hours
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                    <div className='fcrse_contents'>
                                                                        <div class="fcrse_content">

                                                                            <div class="other_instructor_view-time_view">
                                                                                <span class="vdt14">11 Views • </span>
                                                                                <span class="vdt14">5 Days ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={share} />Share</span>
                                                                                    <span><img src={saved_course} />Save</span>
                                                                                    <span><img src={not_interested} />Not Interested</span>
                                                                                    <span><img src={report} />Report</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                        <a href="course_detail_view.html" class="oiv-detail">Vue JS 2 - The Complete Guide (incl. Vue Router &amp; Vuex)</a>
                                                                        <a href="#" class="oiv-career">Development | Vue JS</a>
                                                                        <div class="other_instructor_view-publisher">
                                                                            <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                            <div class="oiv-price">$10</div>
                                                                            <button class="oiv-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {oivtab === 'purchased' && (
                                            <div>
                                                <div class="tab-pane fade">
                                                    <div class="other_instructor_view-crse_content">
                                                        <h3>Purchased Courses</h3>
                                                        <div class="other_instructor_view-list_courses">
                                                            <div class="other_instructor_view-row">

                                                                <div class="mip-oiv-course">
                                                                    <div class="mip-oiv-course-detail">
                                                                        <a href="course_detail_view.html" class="fcrse_img">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-13.jpg" alt="" />
                                                                            <div class="oiv-course-overlay">

                                                                                <div class="crse_timer">
                                                                                    30 hours
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                        <div className='fcrse_contents'>
                                                                            <div class="fcrse_content">

                                                                                <div class="other_instructor_view-time_view">
                                                                                    <span class="vdt14">20 Views • </span>
                                                                                    <span class="vdt14">1 day ago</span>
                                                                                </div>
                                                                                <div class="eps_dots more_dropdown">
                                                                                    <a href="#" className="oiv-dropdown-button">
                                                                                        ⋮
                                                                                    </a>
                                                                                    <div class="oiv-dropdown-content">
                                                                                        <span><img src={share} />Share</span>
                                                                                        <span><img src={saved_course} />Save</span>
                                                                                        <span><img src={not_interested} />Not Interested</span>
                                                                                        <span><img src={report} />Report</span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <a href="course_detail_view.html" class="oiv-detail">The Complete Node.js Developer Course (3rd Edition)</a>
                                                                            <a href="#" class="oiv-career">Development | Node.js</a>
                                                                            <div class="other_instructor_view-publisher">
                                                                                <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                                <div class="oiv-price">$3</div>
                                                                                <button class="mip-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mip-oiv-course">
                                                                    <div class="mip-oiv-course-detail">
                                                                        <a href="course_detail_view.html" class="fcrse_img">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-7.jpg" alt="" />
                                                                            <div class="oiv-course-overlay">
                                                                                <div class="oiv-badge_seller">Bestseller</div>
                                                                                <div class="crse_reviews">
                                                                                    <img className='starIcon' src={ratingStar}></img>5.0
                                                                                </div>

                                                                                <div class="crse_timer">
                                                                                    5.4 hours
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                        <div className='fcrse_contents'>
                                                                            <div class="fcrse_content">

                                                                                <div class="other_instructor_view-time_view">
                                                                                    <span class="vdt14">109k views • </span>
                                                                                    <span class="vdt14">15 days ago</span>
                                                                                </div>
                                                                                <div class="eps_dots more_dropdown">
                                                                                    <a href="#" className="oiv-dropdown-button">
                                                                                        ⋮
                                                                                    </a>
                                                                                    <div class="oiv-dropdown-content">
                                                                                        <span><img src={share} />Share</span>
                                                                                        <span><img src={saved_course} />Save</span>
                                                                                        <span><img src={not_interested} />Not Interested</span>
                                                                                        <span><img src={report} />Report</span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <a href="course_detail_view.html" class="oiv-detail">WordPress for Beginners: Create a Website Step by Step</a>
                                                                            <a href="#" class="oiv-career">Design | Wordpress</a>
                                                                            <div class="other_instructor_view-publisher">
                                                                                <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                                <div class="oiv-price">$18</div>
                                                                                <button class="mip-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mip-oiv-course">
                                                                    <div class="mip-oiv-course-detail">
                                                                        <a href="course_detail_view.html" class="fcrse_img">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-8.jpg" alt="" />
                                                                            <div class="oiv-course-overlay">
                                                                                <div class="oiv-badge_seller">Bestseller</div>
                                                                                <div class="crse_reviews">
                                                                                    <img className='starIcon' src={ratingStar}></img>4.0
                                                                                </div>

                                                                                <div class="crse_timer">
                                                                                    23 hours
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                        <div className='fcrse_contents'>
                                                                            <div class="fcrse_content">

                                                                                <div class="other_instructor_view-time_view">
                                                                                    <span class="vdt14">196k views • </span>
                                                                                    <span class="vdt14">1 month ago</span>
                                                                                </div>
                                                                                <div class="eps_dots more_dropdown">
                                                                                    <a href="#" className="oiv-dropdown-button">
                                                                                        ⋮
                                                                                    </a>
                                                                                    <div class="oiv-dropdown-content">
                                                                                        <span><img src={share} />Share</span>
                                                                                        <span><img src={saved_course} />Save</span>
                                                                                        <span><img src={not_interested} />Not Interested</span>
                                                                                        <span><img src={report} />Report</span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <a href="course_detail_view.html" class="oiv-detail">CSS - The Complete Guide 2020 (incl. Flexbox, Grid &amp; Sass)</a>
                                                                            <a href="#" class="oiv-career">Design | CSS</a>
                                                                            <div class="other_instructor_view-publisher">
                                                                                <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                                <div class="oiv-price">$10</div>
                                                                                <button class="mip-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="mip-oiv-course">
                                                                    <div class="mip-oiv-course-detail">
                                                                        <a href="course_detail_view.html" class="fcrse_img">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-16.jpg" alt="" />
                                                                            <div class="oiv-course-overlay">

                                                                                <div class="crse_timer">
                                                                                    22 hours
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                        <div className='fcrse_contents'>
                                                                            <div class="fcrse_content">

                                                                                <div class="other_instructor_view-time_view">
                                                                                    <span class="vdt14">11 Views • </span>
                                                                                    <span class="vdt14">5 Days ago</span>
                                                                                </div>
                                                                                <div class="eps_dots more_dropdown">
                                                                                    <a href="#" className="oiv-dropdown-button">
                                                                                        ⋮
                                                                                    </a>
                                                                                    <div class="oiv-dropdown-content">
                                                                                        <span><img src={share} />Share</span>
                                                                                        <span><img src={saved_course} />Save</span>
                                                                                        <span><img src={not_interested} />Not Interested</span>
                                                                                        <span><img src={report} />Report</span>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <a href="course_detail_view.html" class="oiv-detail">Vue JS 2 - The Complete Guide (incl. Vue Router &amp; Vuex)</a>
                                                                            <a href="#" class="oiv-career">Development | Vue JS</a>
                                                                            <div class="other_instructor_view-publisher">
                                                                                <p class="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                                <div class="oiv-price">$10</div>
                                                                                <button class="mip-cart" title="cart"><img src={card_icon} alt='' className='oiv-cart-icon' /></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {oivtab === 'discussion' && (
                                            <div class="tab-pane fade">
                                                <div class="student_reviews">
                                                    <div class="other_instructor_view-row-discussion">
                                                        <div class="other_instructor_view-col-lg-12">
                                                            <div class="review_right">
                                                                <div class="review_right_heading">
                                                                    <h3>Discussions</h3>
                                                                </div>
                                                            </div>
                                                            <div class="oiv-comment">
                                                                <div class="cmnt_group">
                                                                    <div class="oiv-img160">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                                    </div>
                                                                    <textarea class="oiv-cmnt-box" placeholder="Add a public comment"></textarea>
                                                                </div>
                                                                <button class="oiv-cmnt-btn" type="submit">Comment</button>
                                                            </div>
                                                            <div class="oiv-history-comment">
                                                                <div class="oiv-review_item">
                                                                    <div class="oiv-review_usr_dt">
                                                                        <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                                        <div class="oiv-cmnt_name">
                                                                            <h4 class="oiv-tutor_name">John Doe</h4>
                                                                            <span class="oiv-cmnt_time">2 hour ago</span>
                                                                        </div>
                                                                        <div class="eps_dots more_dropdown">
                                                                            <a href="#" className="oiv-dropdown-button">
                                                                                ⋮
                                                                            </a>
                                                                            <div class="oiv-dropdown-content">
                                                                                <span><img src={edit} />Edit</span>
                                                                                <span><img src={deletee} />Delete</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p class="oiv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                                    <div class="oiv-contact_icon">
                                                                        <a href="#" class="oiv-report"><img src={like} /> 10</a>
                                                                        <a href="#" class="oiv-report"><img src={dislike} /> 1</a>
                                                                        <a href="#" class="oiv-report"><img src={heart} /></a>
                                                                        <a href="#" class="oiv-report ml-3">Reply</a>
                                                                    </div>
                                                                </div>
                                                                <div class="oiv-review_reply">
                                                                    <div class="oiv-review_item">
                                                                        <div class="oiv-review_usr_dt">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-3.jpg" alt="" />
                                                                            <div class="oiv-cmnt_name">
                                                                                <h4 class="oiv-tutor_name">Rock Doe</h4>
                                                                                <span class="oiv-cmnt_time">1 hour ago</span>
                                                                            </div>
                                                                            <div class="eps_dots more_dropdown">
                                                                                <a href="#" className="oiv-dropdown-button">
                                                                                    ⋮
                                                                                </a>
                                                                                <div class="oiv-dropdown-content">
                                                                                    <span><img src={deletee} />Delete</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p class="oiv-cmnt_text_message">Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                                        <div class="oiv-contact_icon">
                                                                            <a href="#" class="oiv-report"><img src={like} />4</a>
                                                                            <a href="#" class="oiv-report"><img src={dislike} /> 2</a>
                                                                            <a href="#" class="oiv-report"><img src={heart} /></a>
                                                                            <a href="#" class="oiv-report ml-3">Reply</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {oivtab === 'subscriptions' && (
                                            <div className='mip-subscription'>
                                                <div className="mip-instructor-profile">
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
                                                        <div className="mip-instructor-profile-title">
                                                            Web Developer, Designer, and Teacher
                                                        </div>
                                                        <ul class="my_instructor-profile-subcribe">
                                                            <button class="mip-subcribe">Subscribe</button>
                                                            <button class="mip-notification"><img src={notification_icon} alt='' className='cart-icon' /></button>
                                                        </ul>
                                                        <div className="instructor-profile-stats">
                                                            100K Students • 15 Courses
                                                        </div>
                                                        <a href="/my-instructor-profile" className="instructor-profile-redirect">
                                                            Go to profile
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mip-instructor-profile">
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
                                                        <div className="mip-instructor-profile-title">
                                                            Web Developer, Designer, and Teacher
                                                        </div>
                                                        <ul class="my_instructor-profile-subcribe">
                                                            <button class="mip-subcribe">Subscribe</button>
                                                            <button class="mip-notification"><img src={notification_icon} alt='' className='cart-icon' /></button>
                                                        </ul>
                                                        <div className="instructor-profile-stats">
                                                            100K Students • 15 Courses
                                                        </div>
                                                        <a href="/my-instructor-profile" className="instructor-profile-redirect">
                                                            Go to profile
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mip-instructor-profile">
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
                                                        <ul class="my_instructor-profile-subcribe">
                                                            <button class="mip-subcribe">Subscribe</button>
                                                            <button class="mip-notification"><img src={notification_icon} alt='' className='cart-icon' /></button>
                                                        </ul>
                                                        <div className="instructor-profile-stats">
                                                            100K Students • 15 Courses
                                                        </div>
                                                        <a href="/my-instructor-profile" className="instructor-profile-redirect">
                                                            Go to profile
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mip-instructor-profile">
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
                                                        <ul class="my_instructor-profile-subcribe">
                                                            <button class="mip-subcribe">Subscribe</button>
                                                            <button class="mip-notification"><img src={notification_icon} alt='' className='cart-icon' /></button>
                                                        </ul>
                                                        <div className="instructor-profile-stats">
                                                            100K Students • 15 Courses
                                                        </div>
                                                        <a href="/my-instructor-profile" className="instructor-profile-redirect">
                                                            Go to profile
                                                        </a>
                                                    </div>
                                                </div>
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