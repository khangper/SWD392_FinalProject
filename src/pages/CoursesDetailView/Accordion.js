import React, { useState } from 'react';
import './Accordion.css';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion-container">
            {sections.map((section, index) => (
                <div key={index}>
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
                    {activeIndex === index && (
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
    );
};

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

export default Accordion;
