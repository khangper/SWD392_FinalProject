import React, { useState } from "react";
import "./Help.css";
import search_icon from "../../assets/search.png";
import Wallet from "../../assets/Wallet.png";
import Megaphone2 from "../../assets/Megaphone2.png";
import Filecheckale from "../../assets/Filecheckale.png";
import FileEdit from "../../assets/FileEdit.png";
import CourseManagement from "../../assets/CourseManagement.png";
import TrueFile from "../../assets/TrueFile.png";
import Account from "../../assets/Account.png";
import Destop from "../../assets/Destop.png";
import BookHelp from "../../assets/BookHelp.png";
import MobileHelp from "../../assets/MobileHelp.png";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";

export default function Help() {
  const [activeTab, setActiveTab] = useState("instructor");
  const [instructorSearchQuery, setInstructorSearchQuery] = useState("");
  const [studentSearchQuery, setStudentSearchQuery] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e) => {
    if (activeTab === "instructor") {
      setInstructorSearchQuery(e.target.value);
    } else {
      setStudentSearchQuery(e.target.value);
    }
  };

  const filteredInstructorTopics = [
    {
      title: "Payments",
      description: "Understand the revenue share and how to receive payments.",
      link: PATH_NAME.HELP_VIEW_1,
      icon: Wallet,
    },
    {
      title: "Selling & Promotion",
      description: "Learn about the announcement and promotional tools.",
      link: PATH_NAME.HELP_VIEW_2,
      icon: Megaphone2,
    },
    {
      title: "Quality Standards",
      description: "Learn what it takes to create a high-quality course.",
      link: "#",
      icon: Filecheckale,
    },
    {
      title: "Course Building",
      description: "Build your course curriculum and landing page.",
      link: "#",
      icon: FileEdit,
    },
    {
      title: "Course Management",
      description: "Maintain your course and engage with students.",
      link: "#",
      icon: CourseManagement,
    },
    {
      title: "Trust & Safety",
      description: "Policy and copyright questions and guidance.",
      link: "#",
      icon: TrueFile,
    },
  ].filter((topic) =>
    topic.title.toLowerCase().includes(instructorSearchQuery.toLowerCase())
  );

  const filteredStudentTopics = [
    {
      title: "Getting Started",
      description: "Learn how Cursus works and how to start learning.",
      link: "#",
      icon: Filecheckale,
    },
    {
      title: "Account/Profile",
      description: "Manage your account settings.",
      link: "#",
      icon: Account,
    },
    {
      title: "Troubleshooting",
      description: "Experiencing a bug? Check here.",
      link: "#",
      icon: Destop,
    },
    {
      title: "Course Taking",
      description: "Everything about taking a course on Udemy.",
      link: "#",
      icon: BookHelp,
    },
    {
      title: "Purchase/Refunds",
      description: "Learn about coupons, how to send gifts, and refunds.",
      link: "#",
      icon: Wallet,
    },
    {
      title: "Mobile",
      description: "On the go? Learn about our mobile app.",
      link: "#",
      icon: MobileHelp,
    },
  ].filter((topic) =>
    topic.title.toLowerCase().includes(studentSearchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="Help-container-fluid">
        <div className="Help-grid-container-input">
          <div className="Help-grid-item-full">
            <div className="Help_215v12">
              <div className="Help-grid-center">
                <div className="Help-grid-item-half">
                  <div className="help_stitle">
                    <h2>How may we help you?</h2>
                    <div className="explore_search">
                      <div className="explore-container">
                        <section className="search-box">
                          <img
                            src={search_icon}
                            alt="Search Icon"
                            className="search-icon"
                          />
                          <input
                            type="text"
                            placeholder={`Search ${
                              activeTab === "instructor"
                                ? "Instructor"
                                : "Student"
                            } Help`}
                            value={
                              activeTab === "instructor"
                                ? instructorSearchQuery
                                : studentSearchQuery
                            }
                            onChange={handleSearchChange}
                          />
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Help_215b15">
        <div className="Help-grid-container-input">
          <div className="Help-grid-item-full">
            <div className="col-lg-12">
              <div className="course_tabs">
                <nav>
                  <div
                    className="nav nav-tabs-help help_tabs tab_crse justify-content-center"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className={`tab ${
                        activeTab === "instructor" ? "active" : ""
                      }`}
                      id="nav-instructor-tab"
                      onClick={() => handleTabClick("instructor")}
                    >
                      Instructor
                    </a>
                    <a
                      className={`tab ${
                        activeTab === "student" ? "active" : ""
                      }`}
                      id="nav-student-tab"
                      onClick={() => handleTabClick("student")}
                    >
                      Student
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="_215b17">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="course_tab_content">
                <div className="tab-content" id="nav-tabContent">
                  {activeTab === "instructor" && (
                    <div
                      className={`tab-pane fade ${
                        activeTab === "instructor" ? "show active" : ""
                      }`}
                      id="nav-instructor"
                      role="tabpanel"
                    >
                      <div className="tpc152">
                        <div className="crse_content">
                          <h3>Select a topic to search for help</h3>
                        </div>
                        <div className="section3126 mt-20">
                          <div className="Help1-Grid-container">
                            {filteredInstructorTopics.map((topic, index) => (
                              <div className="value_props50" key={index}>
                                <Link to={topic.link}>
                                  <div className="value_icon">
                                    <img
                                      src={topic.icon}
                                      alt=""
                                      className="Help-icon-page"
                                    />
                                  </div>
                                  <div className="value_content">
                                    <h4>{topic.title}</h4>
                                    <p>{topic.description}</p>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="tpc152">
                        <div className="crse_content">
                          <h3>Frequently Asked Questions</h3>
                        </div>
                        <div className="section3126 mt-20">
                          <div className="Help2-grid-container">
                            <a href="#" className="value_props51">
                              Promote Your Course With Coupons and Referral
                              Links
                            </a>
                            <a href="#" className="value_props51">
                              Cursus Course Quality Checklist
                            </a>
                            <a href="#" className="value_props51">
                              Instructor Revenue Share
                            </a>
                            <a href="#" className="value_props51">
                              Instructor Promotional Agreements and Cursus Deals
                            </a>
                            <a href="#" className="value_props51">
                              How to Become an Instructor: FAQ
                            </a>
                            <a href="#" className="value_props51">
                              How to Select Your Payout Method And Become a
                              Premium Instructor
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "student" && (
                    <div
                      className={`tab-pane fade ${
                        activeTab === "student" ? "show active" : ""
                      }`}
                      id="nav-student"
                      role="tabpanel"
                    >
                      <div className="tpc152">
                        <div className="crse_content">
                          <h3>Select a topic to search for help</h3>
                        </div>
                        <div className="section3126 mt-20">
                          <div className="Help1-Grid-container">
                            {filteredStudentTopics.map((topic, index) => (
                              <div className="value_props50" key={index}>
                                <a href={topic.link}>
                                  <div className="value_icon">
                                    <img
                                      src={topic.icon}
                                      alt=""
                                      className="Help-icon-page"
                                    />
                                  </div>
                                  <div className="value_content">
                                    <h4>{topic.title}</h4>
                                    <p>{topic.description}</p>
                                  </div>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="Frequently-Quétion">
                        <div className="crse_content">
                          <h3>Frequently Asked Questions</h3>
                        </div>
                        <div className="section3126 mt-20">
                          <div className="Help2-grid-container">
                            <a href="#" className="value_props51">
                              Lifetime Access
                            </a>
                            <a href="#" className="value_props51">
                              Cursus FAQ
                            </a>
                            <a href="#" className="value_props51">
                              Downloading Courses
                            </a>
                            <a href="#" className="value_props51">
                              Certificate of Completion
                            </a>
                            <a href="#" className="value_props51">
                              Refund a Course
                            </a>
                            <a href="#" className="value_props51">
                              How to Solve Payment Issues
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
