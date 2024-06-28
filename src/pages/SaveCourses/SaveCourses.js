import React from 'react'
import './SaveCourses.css'
import ratingStar from "../../assets/rating.png"
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
import card_icon from '..//../assets/cart-icon.png';

export const SaveCourses = () => {
    return (
        <div>
            <div class="sa4d25">
                <div class="container-fluid">
                    <div class="sc-row">
                        <div class="sc-div1 ">
                            <div class="section3125 hstry142">
                                <div class="grp_titles pt-0">
                                    <div class="ht_title">Saved Courses</div>
                                    <a href="#" class="ht_clr">Remove All</a>
                                </div>
                                <div class="tb_145">
                                    <div class="wtch125">
                                        <span class="vdt14">4 Courses</span>
                                    </div>
                                    <a href="#" class="rmv-btn"><i class="uil uil-trash-alt"></i>Remove Saved Courses</a>
                                </div>
                            </div>
                        </div>
                        <div class="sc-div2">
                            <div class="_14d25 mb-20">
                                <div class="row">
                                    <h4 class="mhs_title">Saved Courses</h4>
                                    <div class="col-md-12">
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
                                                                <button class="sc-cart" title="cart"><img src={card_icon} alt='' className='sc-cart-icon' /></button>
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
                                                                <button class="sc-cart" title="cart"><img src={card_icon} alt='' className='sc-cart-icon' /></button>
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
                                                                <button class="sc-cart" title="cart"><img src={card_icon} alt='' className='sc-cart-icon' /></button>
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
                                                                <button class="sc-cart" title="cart"><img src={card_icon} alt='' className='sc-cart-icon' /></button>
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
