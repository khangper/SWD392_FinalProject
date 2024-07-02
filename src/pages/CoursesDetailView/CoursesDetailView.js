import React, { useEffect, useRef, useState } from 'react'
import './CoursesDetailView.css'
import './Accordion.css'
import ratingStar from "../../assets/rating.png"
import send_feedback from '..//../assets/send-feedback.png';
import share from "../../assets/share.png";
import eyes from "../../assets/eyes.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import star from "../../assets/star.png";
import search from "../../assets/search.png";

const CoursesDetailView = () => {
    const sections = [
        {
            title: 'Introduction to this Course',
            length: '22:08',
            lectures: [
                { title: 'A Note On Asking For Help', summary: '00:12', icon: 'uil-file' },
                { title: 'Introducing Our TA', summary: '01:42', icon: 'uil-file' },
                { title: 'Join the Online Community', summary: '00:51', icon: 'uil-file' },
                { title: 'Why This Course?', summary: '07:48', icon: 'uil-play-circle', preview: true },
                { title: 'Syllabus Download', summary: '2 pages', icon: 'uil-file-download-alt', preview: true },
                { title: 'Syllabus Walkthrough', summary: '01:42', icon: 'uil-play-circle', preview: true },
                { title: 'Lecture Slides', summary: '00:11', icon: 'uil-file' },
            ],
        },
        {
            title: 'Introduction to Front End Development',
            length: '27:26',
            lectures: [
                { title: 'Unit Objectives', summary: '01.40', icon: 'uil-play-circle', preview: true },
                { title: 'Note about Setting Up Front-End Developer Environment', summary: '00:30', icon: 'uil-file' },
                { title: 'Setting Up Front-End Developer Environment', summary: '03:11', icon: 'uil-play-circle' },
                { title: 'Note about Introduction to the Web', summary: '00:11', icon: 'uil-file' },
                { title: 'Introduction to the Web', summary: '10.08', icon: 'uil-play-circle' },
                { title: 'The Front End Holy Trinity', summary: '11:46', icon: 'uil-play-circle', preview: true },
            ],
        },
        {
            title: 'Introduction to HTML',
            length: '58:55',
            lectures: [
                { title: 'Unit Objectives', summary: '01:38', icon: 'uil-play-circle' },
                { title: 'HTML Basics and Setting Up Front-End Developer Environment', summary: '05:53', icon: 'uil-play-circle' },
                { title: 'Note about Introduction to MDN', summary: '00:19', icon: 'uil-file' },
                { title: 'Introduction to MDN', summary: '01:51', icon: 'uil-play-circle' },
                { title: 'HTML Boilerplate and Comments', summary: '09:42', icon: 'uil-play-circle' },
                { title: 'Basic Tags', summary: '08:23', icon: 'uil-play-circle' },
                { title: 'HTML Lists', summary: '04:32', icon: 'uil-play-circle' },
                { title: 'HTML Lists Assignment', summary: '01:23', icon: 'uil-play-circle' },
                { title: 'HTML Lists Assignment: SOLUTION', summary: '05:59', icon: 'uil-play-circle' },
                { title: 'Divs and Spans', summary: '05:23', icon: 'uil-play-circle' },
                { title: 'HTML Attributes', summary: '09:00', icon: 'uil-play-circle' },
                { title: 'Recreate Webpage Assignment', summary: '01:00', icon: 'uil-play-circle' },
                { title: 'Recreate Webpage Assignment: SOLUTION', summary: '03:56', icon: 'uil-play-circle' }
            ],
        },
        {
            "title": "Intermediate HTML",
            "length": "01:12:29",
            "lectures": [
                { "title": "Unit Objectives", "summary": "01:19", "icon": "uil-play-circle" },
                { "title": "HTML Tables", "summary": "06:03", "icon": "uil-play-circle" },
                { "title": "Tables Exercise", "summary": "01:18", "icon": "uil-file" },
                { "title": "Introduction to Forms", "summary": "06:19", "icon": "uil-play-circle" },
                { "title": "Playing with Inputs", "summary": "03:04", "icon": "uil-play-circle" },
                { "title": "The Form Tag", "summary": "06:36", "icon": "uil-play-circle" },
                { "title": "Labels", "summary": "03:32", "icon": "uil-play-circle" },
                { "title": "Form Validations", "summary": "03:43", "icon": "uil-play-circle" },
                { "title": "Dropdowns and Radio Buttons", "summary": "11:19", "icon": "uil-play-circle" },
                { "title": "Form Exercise", "summary": "07:23", "icon": "uil-play-circle" }
            ]
        },
        {
            "title": "Introduction to CSS",
            "length": "01:40:15",
            "lectures": [
                { "title": "Unit Objectives", "summary": "02:28", "icon": "uil-play-circle" },
                { "title": "CSS Basics", "summary": "05:25", "icon": "uil-play-circle" },
                { "title": "Our First Stylesheet", "summary": "10:18", "icon": "uil-file" },
                { "title": "Note about CSS Colors and Background and Border (next 2 lectures)", "summary": "00:20", "icon": "uil-file" },
                { "title": "CSS Colors", "summary": "14:35", "icon": "uil-play-circle" },
                { "title": "Background and Border", "summary": "06:58", "icon": "uil-play-circle" },
                { "title": "Note about Selectors Basics Todo List", "summary": "00:32", "icon": "uil-file" },
                { "title": "Selectors Basics Todo List", "summary": "10:43", "icon": "uil-play-circle" },
                { "title": "Introduction to Chrome Inspector", "summary": "05:43", "icon": "uil-play-circle" },
                { "title": "More Advanced Selectors", "summary": "09:23", "icon": "uil-play-circle" },
                { "title": "Note about Specificity and the Cascade", "summary": "00:23", "icon": "uil-file" },
                { "title": "Specificity and the Cascade", "summary": "10:38", "icon": "uil-play-circle" },
                { "title": "Note about Selectors Practice Exercise", "summary": "00:22", "icon": "uil-file" },
                { "title": "Selectors Practice Exercise", "summary": "04:28", "icon": "uil-play-circle" },
                { "title": "Selectors Practice Exercise: SOLUTION", "summary": "16:48", "icon": "uil-play-circle" }
            ]
        },
        {
            "title": "Intermediate CSS",
            "length": "01:26:40",
            "lectures": [
                { "title": "Unit Objectives", "summary": "01:40", "icon": "uil-play-circle" },
                { "title": "Text and Fonts", "summary": "09:55", "icon": "uil-play-circle" },
                { "title": "More Text and Fonts", "summary": "04:42", "icon": "uil-file" },
                { "title": "Note about Google Fonts", "summary": "00:22", "icon": "uil-file" },
                { "title": "Using Google Fonts", "summary": "04:35", "icon": "uil-play-circle" },
                { "title": "Introduction to the Box Model", "summary": "11:58", "icon": "uil-play-circle" },
                { "title": "Creating a Tic Tac Toe Board", "summary": "01:41", "icon": "uil-play-circle" },
                { "title": "Creating a Tic Tac Toe Board: SOLUTION", "summary": "07:43", "icon": "uil-play-circle" },
                { "title": "Note about Image Gallery Code Along Pt. 1", "summary": "00:20", "icon": "uil-file" },
                { "title": "Image Gallery Code Along Pt. 1", "summary": "08:20", "icon": "uil-play-circle" },
                { "title": "Note about changes to Google Fonts", "summary": "00:40", "icon": "uil-file" },
                { "title": "Image Gallery Code Along Pt. 2", "summary": "05:46", "icon": "uil-play-circle" },
                { "title": "CSS Blog From Scratch Exercise Intro", "summary": "03:23", "icon": "uil-play-circle" },
                { "title": "CSS Blog From Scratch Exercise SOLUTION Pt. 1", "summary": "08:38", "icon": "uil-play-circle" },
                { "title": "CSS Blog From Scratch Exercise SOLUTION Pt. 2", "summary": "08:12", "icon": "uil-file" },
                { "title": "CSS Blog From Scratch Exercise SOLUTION Pt. 3", "summary": "07:28", "icon": "uil-play-circle" }
            ]
        },
        {
            "title": "Bootstrap",
            "length": "01:59:54",
            "lectures": [
                { "title": "Unit Objectives", "summary": "02:28", "icon": "uil-play-circle" },
                { "title": "Note about Bootstrap versions", "summary": "00:44", "icon": "uil-file" },
                { "title": "What is Bootstrap?", "summary": "08:02", "icon": "uil-play-circle" },
                { "title": "Adding Bootstrap to a Project", "summary": "09:15", "icon": "uil-play-circle" },
                { "title": "Forms and Inputs", "summary": "14:00", "icon": "uil-play-circle" },
                { "title": "Nav Bars", "summary": "15:44", "icon": "uil-play-circle" },
                { "title": "Note about The Grid System", "summary": "00:11", "icon": "uil-file" },
                { "title": "The Grid System", "summary": "08:43", "icon": "uil-play-circle" },
                { "title": "Grid System Pt. 2", "summary": "11:43", "icon": "uil-play-circle" },
                { "title": "Note about Bootstrap Image Gallery Pt. 1", "summary": "00:55", "icon": "uil-file" },
                { "title": "Bootstrap Image Gallery Pt. 1", "summary": "14:20", "icon": "uil-play-circle" },
                { "title": "Note about Font Awesome", "summary": "00:16", "icon": "uil-file" },
                { "title": "Bootstrap Image Gallery Pt. 2", "summary": "09:46", "icon": "uil-play-circle" },
                { "title": "Creating a Startup Landing Page Code Along", "summary": "14:23", "icon": "uil-play-circle" },
                { "title": "Creating a Startup Landing Page Code Along Pt. 2", "summary": "10:30", "icon": "uil-play-circle" },
                { "title": "Note about making bootstrap responsive on mobile devices", "summary": "00:14", "icon": "uil-file" }
            ]
        },
        {
            "title": "Bootstrap 4!",
            "length": "01:16:28",
            "lectures": [
                { "title": "A History of Bootstrap 4", "summary": "04:40", "icon": "uil-play-circle" },
                { "title": "The Bootstrap 4 Documentation", "summary": "02:24", "icon": "uil-play-circle" },
                { "title": "Changes from Bootstrap 3 to 4", "summary": "07:52", "icon": "uil-play-circle" },
                { "title": "Bootstrap 4 Code/Solutions Download", "summary": "00:41", "icon": "uil-file" },
                { "title": "Getting Started With Bootstrap 4", "summary": "05:15", "icon": "uil-play-circle" },
                { "title": "Bootstrap 4 Colors and Backgrounds", "summary": "05:59", "icon": "uil-play-circle" },
                { "title": "Typography", "summary": "11:12", "icon": "uil-play-circle" },
                { "title": "New Fancy Spacing Utilities", "summary": "12:28", "icon": "uil-play-circle" },
                { "title": "Responsive Breakpoints", "summary": "10:55", "icon": "uil-play-circle" },
                { "title": "Bootstrap4 Navbars", "summary": "08:20", "icon": "uil-play-circle" },
                { "title": "The New Display Utility", "summary": "07:26", "icon": "uil-play-circle" },
                { "title": "Bootstrap 4: Flexbox and Layout", "summary": "10:14", "icon": "uil-play-circle" },
                { "title": "Flexbox Utilities Part 2", "summary": "07:23", "icon": "uil-play-circle" },
                { "title": "Navs and Flexbox", "summary": "09:56", "icon": "uil-play-circle" },
                { "title": "The Bootstrap 4 Grid", "summary": "08:56", "icon": "uil-play-circle" },
                { "title": "PATTERN PROJECT Part 1", "summary": "12:06", "icon": "uil-play-circle" },
                { "title": "PATTERN PROJECT Part 2", "summary": "11:30", "icon": "uil-play-circle" },
                { "title": "The Grid + Flexbox", "summary": "11:44", "icon": "uil-play-circle" },
                { "title": "Museum of Candy Project Part 1", "summary": "05:36", "icon": "uil-play-circle" },
                { "title": "Note about Museum of Candy Project Part 2", "summary": "00:12", "icon": "uil-file" }
            ]
        },
        {
            "title": "Introduction to JavaScript",
            "length": "56:21",
            "lectures": [
                { "title": "Unit Objectives", "summary": "04:41", "icon": "uil-play-circle" },
                { "title": "The JavaScript Console", "summary": "02:22", "icon": "uil-play-circle" },
                { "title": "Primitives", "summary": "13:22", "icon": "uil-play-circle" },
                { "title": "Primitives Exercises", "summary": "03:21", "icon": "uil-file" },
                { "title": "Variables", "summary": "06:15", "icon": "uil-play-circle" },
                { "title": "Null and Undefined", "summary": "02:33", "icon": "uil-play-circle" },
                { "title": "Useful Built-In Methods", "summary": "05:12", "icon": "uil-play-circle" },
                { "title": "Writing JavaScript in a Separate File", "summary": "04:28", "icon": "uil-play-circle" },
                { "title": "JS Stalker Exercise", "summary": "01:55", "icon": "uil-play-circle" },
                { "title": "JS Stalker Exercise: SOLUTION", "summary": "04:45", "icon": "uil-play-circle" },
                { "title": "Age Calculator Exercise", "summary": "01:10", "icon": "uil-play-circle" },
                { "title": "Age Calculator Exercise: SOLUTION", "summary": "04:01", "icon": "uil-play-circle" }
            ]
        }





    ];
    const [oivtab, setOivtab] = useState('about')
    const [selectOptions, setSelectOptions] = useState('')

    const handleoivTabChange = (tab) => {
        setOivtab(tab)
    }

    const handleSelectChange = (event) => {
        setSelectOptions(event.target.value)
    }

    const [accordion, setAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setAccordion(accordion === index ? null : index);
    };
    return (

        <div>
            <div className='courses_detail_view-div1'>
                <div className="courses_detail_view-container">
                    <div className="courses_detail_view-row">
                        <div className="courses_detail_view-col-lg-12">
                            <div className="courses_detail_view-section">
                                <div className="courses_detail_view-row2">
                                    <div className='courses_detail_view-box1'>
                                        <div className="cdv-preview_video">
                                            <a href="#" className="fcrse_img" >
                                                <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg" alt="" />
                                                <div className="cdv-course-overlay">
                                                    <div className="cdv-badge_seller">Bestseller</div>
                                                    <span className="play_btn1"><i className="uil uil-play"></i></span>
                                                    <span className="cdv-label-preview-this-course">Preview this course</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="#" className="cdv-save">
                                                <span><i className="uil uil-heart"></i></span>Save
                                            </a>
                                            <a href="#" className="cdv-report">
                                                <span><i className="uil uil-windsock"></i></span>Report abuse
                                            </a>
                                        </div>
                                    </div>
                                    <div className="courses_detail_view-box2">
                                        <div className='cdv-label1'>
                                            <h2>The Web Developer Bootcamp</h2>
                                            <span className="cdv-label2">The only course you need to learn web development - HTML, CSS, JS, Node, and More!</span>
                                        </div>
                                        <div className="cdv-rate_star">
                                            <div className="crse_reviews mr-2">
                                                <img className='starIcon' src={ratingStar}></img>5.3.2
                                            </div>
                                            (81,665 ratings)
                                        </div>
                                        <div className="cdv-rate_star">
                                            114,521 students enrolled
                                        </div>
                                        <div className="cdv-language">
                                            <div className="cdv-language-label1">
                                                <span><img class="sidebar-icon" src={send_feedback} alt="Send Feedback Icon" /></span>
                                                English
                                            </div>
                                            <div className="cdv-language-label2">
                                                <span><i className="uil uil-closed-captioning"></i></span>
                                                <span>English, Dutch
                                                    <span className="cdv-caption_tooltip">
                                                        12 more
                                                        <span className="cdv-caption-content">
                                                            <span>French</span>
                                                            <span>Hindi</span>
                                                            <span>German [Auto-generated]</span>
                                                            <span>Indonesian [Auto-generated]</span>
                                                            <span>Italian [Auto-generated]</span>
                                                            <span>Japanese [Auto-generated]</span>
                                                            <span>Korean</span>
                                                            <span>Polish</span>
                                                            <span>Portuguese [Auto-generated]</span>
                                                            <span>Spanish [Auto-generated]</span>
                                                            <span>Traditional Chinese</span>
                                                            <span>Turkish [Auto-generated]</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="cdv-rate_star">
                                            Last updated 1/2024
                                        </div>
                                        <ul className="cdv-add-buy">
                                            <button className="subscribe-btn btn500">Add to Cart</button>
                                            <button className="msg125 btn500">Buy Now</button>
                                        </ul>
                                        <div className="cdv-label-30day">
                                            30-Day Money-Back Guarantee
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='courses_detail_view-div2'>
                <div className="courses_detail_view-container">
                    <div className="courses_detail_view-row">
                        <div className="courses_detail_view-col-lg-12">
                            <div className="cdv-user">
                                <div className="cdv-user_dt">
                                    <div className="cdv-live_user_dt">
                                        <div className="cdv-user_img">
                                            <a href="#"><img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg    " alt="" /></a>
                                        </div>
                                        <div className="cdv-user_cntnt">
                                            <a href="#" className="cdv-user-name">Johnson Smith</a>
                                            <button className="cdv-subscribe-btn">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cdv-contact_icon">

                                    <a href="#" class="cdv-report1"><img src={eyes} /><span>1452</span></a>
                                    <a href="#" class="cdv-report1"><img src={like} /><span>100</span></a>
                                    <a href="#" class="cdv-report1"><img src={dislike} /><span>20</span></a>
                                    <a href="#" class="cdv-report1"><img src={share} /><span>9</span></a>

                                </div>
                            </div>
                            <div className="courses_detail_view_tabs">
                                <nav>
                                    <div class="courses_detail_view-nav">
                                        <div className={`tab ${oivtab === 'about' ? 'active' : ''}`}
                                            onClick={() => handleoivTabChange('about')}
                                        >
                                            <div className='oiv-nav-about'>About</div>
                                        </div>
                                        <div className={`tab ${oivtab === 'courses' ? 'active' : ''}`}
                                            onClick={() => handleoivTabChange('courses')}
                                        >
                                            <div className='oiv-nav-courses'>Courses Contents</div>
                                        </div>
                                        <div className={`tab ${oivtab === 'reviews' ? 'active' : ''}`}
                                            onClick={() => handleoivTabChange('reviews')}
                                        >
                                            <div className='oiv-nav-discussion'>Reviews</div>
                                        </div>
                                    </div>
                                    {oivtab === 'about' && (
                                        <div>
                                            <div className="tab-pane fade">
                                                <div className="courses_detail_view-about">
                                                    <div className="box-div-cdv">
                                                        <div className="cdv-label-requirement">
                                                            <h3>Requirements</h3>
                                                            <ul>
                                                                <li><span className="_5f7g11">Have a computer with Internet</span></li>
                                                                <li><span className="_5f7g11">Be ready to learn an insane amount of awesome stuff</span></li>
                                                                <li><span className="_5f7g11">Prepare to build real web apps!</span></li>
                                                            </ul>
                                                        </div>
                                                        <div className="cdv-label-description">
                                                            <h3>Description</h3>
                                                            <span className="_abc123">Just updated to include Bootstrap 4.1.3!</span>
                                                            <p>Hi! Welcome to the Web Developer Bootcamp, the <strong>only course you need to learn web development</strong>. There are a lot of options for online developer training, but this course is without a doubt the most comprehensive and effective on the market.  Here's why:</p>
                                                            <ul className="_abc124">
                                                                <li><span className="_5f7g11">This is the only online course taught by a professional bootcamp instructor.</span></li>
                                                                <li><span className="_5f7g11">94% of my in-person bootcamp students go on to get full-time developer jobs. Most of them are complete beginners when I start working with them.</span></li>
                                                                <li><span className="_5f7g11">The previous 2 bootcamp programs that I taught cost $14,000 and $21,000.  This course is just as comprehensive but with brand new content for a fraction of the price.</span></li>
                                                                <li><span className="_5f7g11">Everything I cover is up-to-date and relevant to today's developer industry. No PHP or other dated technologies. This course does not cut any corners.</span></li>
                                                                <li><span className="_5f7g11">This is the only complete beginner full-stack developer course that covers NodeJS.</span></li>
                                                                <li><span className="_5f7g11">We build 13+ projects, including a gigantic production application called YelpCamp. No other course walks you through the creation of such a substantial application.</span></li>
                                                                <li><span className="_5f7g11">The course is constantly updated with new content, projects, and modules.  Think of it as a subscription to a never-ending supply of developer training.</span></li>
                                                            </ul>
                                                            <p>When you're learning to program you often have to sacrifice learning the exciting and current technologies in favor of the "beginner friendly" classes.  With this course, you get the best of both worlds.  This is a course designed for the complete beginner, yet it covers some of the most exciting and relevant topics in the industry.</p>
                                                            <p>Throughout the course we cover tons of tools and technologies including:</p>
                                                            <ul className="_abc124">
                                                                <li><span className="_5f7g11"><strong>HTML5</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>CSS3</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>JavaScript</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>Bootstrap 4</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>SemanticUI</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>DOM Manipulation</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>jQuery</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>Unix(Command Line) Commands</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>NodeJS</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>NPM</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>ExpressJS</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>REST</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>MongoDB</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>Database Associations</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>Authentication</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>PassportJS</strong></span></li>
                                                                <li><span className="_5f7g11"><strong>Authorization</strong></span></li>
                                                            </ul>

                                                            <p>This course is also unique in the way that it is structured and presented. Many online courses are just a long series of "watch as I code" videos.  This course is different. I've incorporated everything I learned in my years of teaching to make this course not only more effective but more engaging. The course includes:</p>
                                                            <ul className="_abc124">
                                                                <li><span className="_5f7g11">Lectures</span></li>
                                                                <li><span className="_5f7g11">Code-Alongs</span></li>
                                                                <li><span className="_5f7g11">Projects</span></li>
                                                                <li><span className="_5f7g11">Exercises</span></li>
                                                                <li><span className="_5f7g11">Research Assignments</span></li>
                                                                <li><span className="_5f7g11">Slides</span></li>
                                                                <li><span className="_5f7g11">Downloads</span></li>
                                                                <li><span className="_5f7g11">Readings</span></li>
                                                            </ul>
                                                            <p>If you have any questions, please don't hesitate to contact me.  I got into this industry because I love working with people and helping students learn.  Sign up today and see how fun, exciting, and rewarding web development can be!</p>
                                                        </div>
                                                        <div className="cdv-label-who">
                                                            <h3>Who this course is for :</h3>
                                                            <ul className="_abc124">
                                                                <li><span className="_5f7g11">This course is for anyone who wants to learn about web development, regardless of previous experience</span></li>
                                                                <li><span className="_5f7g11">It's perfect for complete beginners with zero experience</span></li>
                                                                <li><span className="_5f7g11">It's also great for anyone who does have some experience in a few of the technologies(like HTML and CSS) but not all</span></li>
                                                                <li><span className="_5f7g11">If you want to take ONE COURSE to learn everything you need to know about web development, take this course</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="cdv-label-learn">
                                                        <h3>What you'll learn</h3>
                                                        <div className="_scd123">
                                                            <div className="courses_detail_view-row3">
                                                                <div className="col-lg-6">
                                                                    <ul className="_htg452 _abcd145">
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Donec ultricies elit porttitor, ultrices enim a, commodo dolor.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Nunc dapibus ligula sed justo porta, id volutpat odio iaculis.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem molestie.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Maecenas ultricies felis in pulvinar blandit.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Praesent ac libero consequat, efficitur tortor et, interdum sem.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Nullam non lacus nibh. Etiam et fringilla neque, ut vulputate sapien. Sed vitae tortor gravida, interdum felis at, pulvinar enim. Integer tempor urna leo.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Phasellus ultrices tellus sed volutpat vestibulum. Curabitur aliquet dictum leo non congue.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>In hac habitasse platea dictumst. Aenean vel fermentum neque.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Suspendisse semper feugiat urna dictum interdum.</span></div></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <ul className="_htg452 _abcd145">
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Nullam non lacus nibh. Etiam et fringilla neque, ut vulputate sapien. Sed vitae tortor gravida, interdum felis at, pulvinar enim. Integer tempor urna leo.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Phasellus ultrices tellus sed volutpat vestibulum. Curabitur aliquet dictum leo non congue.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>In hac habitasse platea dictumst. Aenean vel fermentum neque.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Suspendisse semper feugiat urna dictum interdum.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Donec ultricies elit porttitor, ultrices enim a, commodo dolor.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Nunc dapibus ligula sed justo porta, id volutpat odio iaculis.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Maecenas pharetra mi quis nisl mollis, molestie imperdiet lorem molestie.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Maecenas ultricies felis in pulvinar blandit.</span></div></li>
                                                                        <li><div className="_5f7g15"><i className="fas fa-check-circle"></i><span>Praesent ac libero consequat, efficitur tortor et, interdum sem.</span></div></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {oivtab === 'courses' && (
                                        <div>
                                            <div className="tab-pane fade" >
                                                <div className="cdv-crse_content">
                                                    <div className="cdv-accordion-box-label">
                                                        <h3>Course content</h3>
                                                        <div className="cdv-accordion-label">
                                                            <div className="accordion-expand-holder">
                                                                <span className="accordion-expand-all _d1452">Expand all</span>
                                                                <span className="_fgr123"> 402 lectures</span>
                                                                <span className="_fgr123">47:06:29</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ui-accordion ui-widget ui-helper-reset">
                                                        <div className="accordion-container">
                                                            {sections.map((section, index) => (
                                                                <div key={index} className='cdv-accordion-index'>
                                                                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                                                        <div className="section-header-left">
                                                                            <span className="section-title-wrapper">
                                                                                <i className="uil uil-presentation-play crse_icon"></i>
                                                                                <span className="section-title-text">{section.title}</span>
                                                                            </span>
                                                                        </div>
                                                                        <div className="section-header-right">
                                                                            <span className="num-items-in-section">{section.lectures.length} lectures</span>
                                                                            <span className="section-header-length">{section.length}</span>
                                                                        </div>
                                                                    </div>
                                                                    {accordion === index && (
                                                                        <div className="accordion-content">
                                                                            {section.lectures.map((lecture, idx) => (
                                                                                <div className="lecture-container" key={idx}>
                                                                                    <div className="left-content">
                                                                                        <i className={`uil ${lecture.icon} icon_142`}></i>
                                                                                        <div className="top">
                                                                                            <div className="title">{lecture.title}</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="details">
                                                                                        {lecture.preview && <a href="#" className="preview-text">Preview</a>}
                                                                                        <span className="content-summary">{lecture.summary}</span>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <a className="cdv-label-20" href="#">20 More Sections</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {oivtab === 'reviews' && (
                                        <div>
                                            <div className="tab-pane fade active show" >
                                                <div className="student_reviews">
                                                    <div className="courses_detail_view-row">
                                                        <div className="cdv-col-lg-5">
                                                            <div className="reviews_left">
                                                                <h3>Student Feedback</h3>
                                                                <div className="total_rating">
                                                                    <div className="_rate001">4.6</div>
                                                                    <div className="rating-box">
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img className='starIcon' src={ratingStar}></img>
                                                                    </div>
                                                                    <div className="_rate002">Course Rating</div>
                                                                </div>
                                                                <div className="_rate003">
                                                                    <div className="_rate004">
                                                                        <div className="progress progress1">
                                                                            <div className="progress-bar w-70"></div>
                                                                        </div>
                                                                        <div className="rating-box">
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                        </div>
                                                                        <div className="_rate002">70%</div>
                                                                    </div>
                                                                    <div className="_rate004">
                                                                        <div className="progress progress1">
                                                                            <div className="progress-bar w-30"></div>
                                                                        </div>
                                                                        <div className="rating-box">
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                        </div>
                                                                        <div className="_rate002">40%</div>
                                                                    </div>
                                                                    <div className="_rate004">
                                                                        <div className="progress progress1">
                                                                            <div className="progress-bar w-5"></div>
                                                                        </div>
                                                                        <div className="rating-box">
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                        </div>
                                                                        <div className="_rate002">5%</div>
                                                                    </div>
                                                                    <div className="_rate004">
                                                                        <div className="progress progress1">
                                                                            <div className="progress-bar w-2"></div>
                                                                        </div>
                                                                        <div className="rating-box">
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                        </div>
                                                                        <div className="_rate002">1%</div>
                                                                    </div>
                                                                    <div className="_rate004">
                                                                        <div className="progress progress1">
                                                                            <div className="progress-bar w-1"></div>
                                                                        </div>
                                                                        <div className="rating-box">
                                                                            <img src={star} className='cdv-rate-star' />
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                            <img className='starIcon' src={ratingStar}></img>
                                                                        </div>
                                                                        <div className="_rate002">1%</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cdv-col-lg-7">
                                                            <div className="review_right">
                                                                <div className="review_right_heading">
                                                                    <h3>Reviews</h3>
                                                                    <div className="review_search">
                                                                        <input className="rv_srch" type="text" placeholder="Search reviews..." />
                                                                        <button className="rvsrch_btn"><img src={search} /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="review_all120">
                                                                <div className="review_item">
                                                                    <div className="review_usr_dt">
                                                                        <div class="oiv-img160">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                                        </div>
                                                                        <div class="oiv-cmnt_name">
                                                                            <h4 class="oiv-tutor_name">John Doe</h4>
                                                                            <span class="oiv-cmnt_time">2 hour ago</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rating-box ">
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img className='starIcon' src={ratingStar}></img>
                                                                    </div>
                                                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                                    <div className="cdv-check-helpful">
                                                                        <span>Was this review helpful?</span>
                                                                        <div className="radio--group-inline-container">
                                                                            <div className="radio-item">
                                                                                <input id="radio-1" name="radio" type="radio" />
                                                                                <label for="radio-1" className="radio-label">Yes</label>
                                                                            </div>
                                                                            <div className="radio-item">
                                                                                <input id="radio-2" name="radio" type="radio" />
                                                                                <label for="radio-2" className="radio-label">No</label>
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="report145">Report</a>
                                                                    </div>
                                                                </div>
                                                                <div className="review_item">
                                                                    <div className="review_usr_dt">
                                                                        <div class="oiv-img160">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                                        </div>
                                                                        <div class="oiv-cmnt_name">
                                                                            <h4 class="oiv-tutor_name">John Doe</h4>
                                                                            <span class="oiv-cmnt_time">2 hour ago</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rating-box ">
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img className='starIcon' src={ratingStar}></img>
                                                                    </div>
                                                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                                    <div className="cdv-check-helpful">
                                                                        <span>Was this review helpful?</span>
                                                                        <div className="radio--group-inline-container">
                                                                            <div className="radio-item">
                                                                                <input id="radio-1" name="radio" type="radio" />
                                                                                <label for="radio-1" className="radio-label">Yes</label>
                                                                            </div>
                                                                            <div className="radio-item">
                                                                                <input id="radio-2" name="radio" type="radio" />
                                                                                <label for="radio-2" className="radio-label">No</label>
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="report145">Report</a>
                                                                    </div>
                                                                </div>
                                                                <div className="review_item">
                                                                    <div className="review_usr_dt">
                                                                        <div class="oiv-img160">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                                        </div>
                                                                        <div class="oiv-cmnt_name">
                                                                            <h4 class="oiv-tutor_name">John Doe</h4>
                                                                            <span class="oiv-cmnt_time">2 hour ago</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rating-box ">
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img className='starIcon' src={ratingStar}></img>
                                                                    </div>
                                                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                                    <div className="cdv-check-helpful">
                                                                        <span>Was this review helpful?</span>
                                                                        <div className="radio--group-inline-container">
                                                                            <div className="radio-item">
                                                                                <input id="radio-1" name="radio" type="radio" />
                                                                                <label for="radio-1" className="radio-label">Yes</label>
                                                                            </div>
                                                                            <div className="radio-item">
                                                                                <input id="radio-2" name="radio" type="radio" />
                                                                                <label for="radio-2" className="radio-label">No</label>
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="report145">Report</a>
                                                                    </div>
                                                                </div>
                                                                <div className="review_item">
                                                                    <div className="review_usr_dt">
                                                                        <div class="oiv-img160">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                                        </div>
                                                                        <div class="oiv-cmnt_name">
                                                                            <h4 class="oiv-tutor_name">John Doe</h4>
                                                                            <span class="oiv-cmnt_time">2 hour ago</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rating-box ">
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img className='starIcon' src={ratingStar}></img>
                                                                    </div>
                                                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                                    <div className="cdv-check-helpful">
                                                                        <span>Was this review helpful?</span>
                                                                        <div className="radio--group-inline-container">
                                                                            <div className="radio-item">
                                                                                <input id="radio-1" name="radio" type="radio" />
                                                                                <label for="radio-1" className="radio-label">Yes</label>
                                                                            </div>
                                                                            <div className="radio-item">
                                                                                <input id="radio-2" name="radio" type="radio" />
                                                                                <label for="radio-2" className="radio-label">No</label>
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="report145">Report</a>
                                                                    </div>
                                                                </div>
                                                                <div className="review_item">
                                                                    <div className="review_usr_dt">
                                                                        <div class="oiv-img160">
                                                                            <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/left-imgs/img-1.jpg" alt="" />
                                                                        </div>
                                                                        <div class="oiv-cmnt_name">
                                                                            <h4 class="oiv-tutor_name">John Doe</h4>
                                                                            <span class="oiv-cmnt_time">2 hour ago</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rating-box ">
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img src={star} className='cdv-rate-star' />
                                                                        <img className='starIcon' src={ratingStar}></img>
                                                                    </div>
                                                                    <p className="cdv-cmnt_text_message">Nam gravida elit a velit rutrum, eget dapibus ex elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia, nunc sit amet tincidunt venenatis.</p>
                                                                    <div className="cdv-check-helpful">
                                                                        <span>Was this review helpful?</span>
                                                                        <div className="radio--group-inline-container">
                                                                            <div className="radio-item">
                                                                                <input id="radio-1" name="radio" type="radio" />
                                                                                <label for="radio-1" className="radio-label">Yes</label>
                                                                            </div>
                                                                            <div className="radio-item">
                                                                                <input id="radio-2" name="radio" type="radio" />
                                                                                <label for="radio-2" className="radio-label">No</label>
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="report145">Report</a>
                                                                    </div>
                                                                </div>
                                                                <div className="review_item">
                                                                    <a href="#" className="more_reviews">See More Reviews</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
            {/* <div className="_215b17">
                <div className="container-fluid">
                    <div className="courses_detail_view-row">
                        <div className="courses_detail_view-col-lg-12">
                            <div className="course_tab_content">
                                <div className="tab-content">
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default CoursesDetailView