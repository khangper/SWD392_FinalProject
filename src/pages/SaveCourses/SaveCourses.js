import React from 'react'
import './SaveCourses.css'
import ratingStar from "../../assets/rating.png"
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
import card_icon from '..//../assets/cart-icon.png';
import deletes from "../../assets/delete.png";

const SaveCourses = () => {
    return (
        <div>
            <div className="sa4d25">
                <div className="container-fluid">
                    <div className="sc-row">
                        <div className="sc-div1 ">
                            <div className="section3125 hstry142">
                                <div className="grp_titles pt-0">
                                    <div className="ht_title">Saved Courses</div>
                                    <a href="#" className="ht_clr">Remove All</a>
                                </div>
                                <div className="tb_145">
                                    <div className="wtch125">
                                        <span className="vdt14">4 Courses</span>
                                    </div>
                                    <a href="#" className="rmv-btn"><i className="uil uil-trash-alt"></i>Remove Saved Courses</a>
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

                                                <div className="mip-oiv-course">
                                                    <div className="mip-oiv-course-detail">
                                                        <a href="course_detail_view.html" className="fcrse_img">
                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-13.jpg" alt="" />
                                                            <div className="oiv-course-overlay">

                                                                <div className="crse_timer">
                                                                    30 hours
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className='fcrse_contents'>
                                                            <div className="fcrse_content">

                                                                <div className="other_instructor_view-time_view">
                                                                    <span className="vdt14">20 Views • </span>
                                                                    <span className="vdt14">1 day ago</span>
                                                                </div>
                                                                <div className="eps_dots more_dropdown">
                                                                    <a href="#" className="oiv-dropdown-button">
                                                                        ⋮
                                                                    </a>
                                                                    <div className="oiv-dropdown-content">
                                                                        <span><img src={deletes} />Remove</span>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <a href="course_detail_view.html" className="oiv-detail">The Complete Node.js Developer Course (3rd Edition)</a>
                                                            <a href="#" className="oiv-career">Development | Node.js</a>
                                                            <div className="other_instructor_view-publisher">
                                                                <p className="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                <div className="oiv-price">$3</div>
                                                                <button className="sc-cart" title="cart"><img src={card_icon} alt='' className='sc-cart-icon' /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mip-oiv-course">
                                                    <div className="mip-oiv-course-detail">
                                                        <a href="course_detail_view.html" className="fcrse_img">
                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-7.jpg" alt="" />
                                                            <div className="oiv-course-overlay">
                                                                <div className="oiv-badge_seller">Bestseller</div>
                                                                <div className="crse_reviews">
                                                                    <img className='starIcon' src={ratingStar}></img>5.0
                                                                </div>

                                                                <div className="crse_timer">
                                                                    5.4 hours
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className='fcrse_contents'>
                                                            <div className="fcrse_content">

                                                                <div className="other_instructor_view-time_view">
                                                                    <span className="vdt14">109k views • </span>
                                                                    <span className="vdt14">15 days ago</span>
                                                                </div>
                                                                <div className="eps_dots more_dropdown">
                                                                    <a href="#" className="oiv-dropdown-button">
                                                                        ⋮
                                                                    </a>
                                                                    <div className="oiv-dropdown-content">
                                                                        <span><img src={share} />Share</span>
                                                                        <span><img src={saved_course} />Save</span>
                                                                        <span><img src={not_interested} />Not Interested</span>
                                                                        <span><img src={report} />Report</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <a href="course_detail_view.html" className="oiv-detail">WordPress for Beginners: Create a Website Step by Step</a>
                                                            <a href="#" className="oiv-career">Design | Wordpress</a>
                                                            <div className="other_instructor_view-publisher">
                                                                <p className="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                <div className="oiv-price">$18</div>
                                                                <button className="sc-cart" title="cart"><img src={card_icon} alt='' className='sc-cart-icon' /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mip-oiv-course">
                                                    <div className="mip-oiv-course-detail">
                                                        <a href="course_detail_view.html" className="fcrse_img">
                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-8.jpg" alt="" />
                                                            <div className="oiv-course-overlay">
                                                                <div className="oiv-badge_seller">Bestseller</div>
                                                                <div className="crse_reviews">
                                                                    <img className='starIcon' src={ratingStar}></img>4.0
                                                                </div>

                                                                <div className="crse_timer">
                                                                    23 hours
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className='fcrse_contents'>
                                                            <div className="fcrse_content">

                                                                <div className="other_instructor_view-time_view">
                                                                    <span className="vdt14">196k views • </span>
                                                                    <span className="vdt14">1 month ago</span>
                                                                </div>
                                                                <div className="eps_dots more_dropdown">
                                                                    <a href="#" className="oiv-dropdown-button">
                                                                        ⋮
                                                                    </a>
                                                                    <div className="oiv-dropdown-content">
                                                                        <span><img src={share} />Share</span>
                                                                        <span><img src={saved_course} />Save</span>
                                                                        <span><img src={not_interested} />Not Interested</span>
                                                                        <span><img src={report} />Report</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <a href="course_detail_view.html" className="oiv-detail">CSS - The Complete Guide 2020 (incl. Flexbox, Grid &amp; Sass)</a>
                                                            <a href="#" className="oiv-career">Design | CSS</a>
                                                            <div className="other_instructor_view-publisher">
                                                                <p className="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                <div className="oiv-price">$10</div>
                                                                <button className="sc-cart" title="cart"><img src={card_icon} alt='' className='sc-cart-icon' /></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mip-oiv-course">
                                                    <div className="mip-oiv-course-detail">
                                                        <a href="course_detail_view.html" className="fcrse_img">
                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-16.jpg" alt="" />
                                                            <div className="oiv-course-overlay">

                                                                <div className="crse_timer">
                                                                    22 hours
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className='fcrse_contents'>
                                                            <div className="fcrse_content">

                                                                <div className="other_instructor_view-time_view">
                                                                    <span className="vdt14">11 Views • </span>
                                                                    <span className="vdt14">5 Days ago</span>
                                                                </div>
                                                                <div className="eps_dots more_dropdown">
                                                                    <a href="#" className="oiv-dropdown-button">
                                                                        ⋮
                                                                    </a>
                                                                    <div className="oiv-dropdown-content">
                                                                        <span><img src={share} />Share</span>
                                                                        <span><img src={saved_course} />Save</span>
                                                                        <span><img src={not_interested} />Not Interested</span>
                                                                        <span><img src={report} />Report</span>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <a href="course_detail_view.html" className="oiv-detail">Vue JS 2 - The Complete Guide (incl. Vue Router &amp; Vuex)</a>
                                                            <a href="#" className="oiv-career">Development | Vue JS</a>
                                                            <div className="other_instructor_view-publisher">
                                                                <p className="oiv-publisher">By <a href="#">John Doe</a></p>
                                                                <div className="oiv-price">$10</div>
                                                                <button className="sc-cart" title="cart"><img src={card_icon} alt='' className='sc-cart-icon' /></button>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SaveCourses;