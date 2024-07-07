import React, { useState } from "react";
import "./MyCourse.css";
import DeleteMyCourse from "..//../assets/garbage.png";
import EditMyCourse from "..//../assets/Edit-mycourse.png";
import DowLoadMyCourse from "..//../assets/DowLoadMyCourse.png";
import Printer from "..//../assets/Printer.png";
import MyCourseBook from "..//../assets/MyCourse-Book.png";
import discount from "..//../assets/discount.png";
import uploadmc1 from "..//../assets/uploadmc1.png";
import Megaphone2 from "..//../assets/Megaphone2.png";
import DowLoadMyCourse1 from "..//../assets/DowLoadMyCourse1.png";
import MyCourseBook1 from "..//../assets/MyCourse-Book1.png";

function MyCourse() {
  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // My course
  const courses = [
    {
      itemNo: "IT-001",
      title: "Course Title Here",
      publishDate: "06 April 2020 | 08:31",
      sales: 15,
      parts: 5,
      category: "Web Development",
      status: "Active",
      actionEdit: "#",
      actionDelete: "#",
    },
    {
      itemNo: "IT-002",
      title: "Course Title Here",
      publishDate: "05 April 2020 | 05:15",
      sales: 30,
      parts: 3,
      category: "Graphic Design",
      status: "Active",
      actionEdit: "#",
      actionDelete: "#",
    },
    {
      itemNo: "IT-003",
      title: "Course Title",
      publishDate: "03 April 2020 | 01:30",
      sales: 14,
      parts: 5,
      category: "Bootstrap",
      status: "Active",
      actionEdit: "#",
      actionDelete: "#",
    },
    {
      itemNo: "IT-004",
      title: "Course Title Here",
      publishDate: "02 April 2020 | 05:15",
      sales: 110,
      parts: 9,
      category: "Game Development",
      status: "Active",
      actionEdit: "#",
      actionDelete: "#",
    },
    {
      itemNo: "IT-005",
      title: "Course Title Here",
      publishDate: "28 March 2020 | 05:15",
      sales: 185,
      parts: 10,
      category: "C++",
      status: "Active",
      actionEdit: "#",
      actionDelete: "#",
    },
  ];
  // My Purchase
  const MyPurchase = [
    {
      itemNo: "1",
      title: "Course Title Here",
      Vendor: "Zoena Singh",
      Category: "Web Development",
      DeliveryType: "Download",
      Price: "$15",
      Purchase: "25 March 2020",
      actionEdit: "#",
      actionDelete: "#",
    },
    {
      itemNo: "2",
      title: "Course Title Here",
      Vendor: "Rock William",
      Category: "C++",
      DeliveryType: "Download",
      Price: "$20",
      Purchase: "25 March 2020",
      actionEdit: "#",
      actionDelete: "#",
    },
  ];
  //UpComing Course
  const UpComming = [
    {
      itemNo: "01",
      title: "Course Title Here",
      Thumbnail: "View",
      Category: "Web Development",
      Price: "$15",
      Purchase: "9 April 2020",
      Status: "Pending",
      actionEdit: "#",
      actionDelete: "#",
    },
    {
      itemNo: "02",
      title: "Course Title Here",
      Thumbnail: "View",
      Category: "Graphic Design",
      Price: "$12",
      Purchase: "8 April 2020",
      Status: "Pending",
      actionEdit: "#",
      actionDelete: "#",
    },
    {
      itemNo: "03",
      title: "Course Title Here",
      Thumbnail: "View",
      Category: "Photography",
      Price: "$6",
      Purchase: "7 April 2020",
      Status: "Pending",
      actionEdit: "#",
      actionDelete: "#",
    },
  ];
  // Discount
  const Discount = [
    {
      itemNo: "01",
      title: "Course Title Here",
      StartDate: "02 November 2019",
      EndDate: "19 November 2019",
      Discount: "20%",
      Status: "Active",
      actionEdit: "#",
      actionDelete: "#",
    },
  ];

  const [activeTab, setActiveTab] = useState("my-courses");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="MyCoursePage">
      <div className="MyCoursePage-grid-container">
        <div className="MyCoursePage-grid-item">
          <div className="MyCoursePage-st_title">
            <img src={MyCourseBook} className="Edit-icon" />
            Course
          </div>
        </div>
      </div>

      <div className="MyCoursePage1-grid-container">
        <div className="MyCoursePage1-grid-item">
          <div className="MyCoursePage1-card_dash1">
            <div className="MyCoursePage1-card_dash_left1">
              <img src={MyCourseBook} className="Edit-icon1" />
              <h1>Jump Into Course Creation</h1>
            </div>
            <div className="MyCoursePage1-card_dash_right1">
              <button className="MyCoursePage1-create_btn_dash">
                Create Your Course
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Body myCourse */}
      <div className="MyCourse-selec-container">
        <div
          className="MyCourse-nav-container MyCourse-my_crse_nav"
          id="pills-tab"
          role="tablist"
        >
          <div className="MyCourse-nav-item">
            <a
              className={`MyCourse-nav-link ${
                activeTab === "my-courses" ? "active" : ""
              }`}
              onClick={() => handleTabClick("my-courses")}
              role="tab"
              aria-selected={activeTab === "my-courses"}
            >
              <img src={MyCourseBook1} className="Edit-icon" /> My Courses
            </a>
          </div>
          <div className="MyCourse-nav-item">
            <a
              className={`MyCourse-nav-link ${
                activeTab === "my-purchases" ? "active" : ""
              }`}
              onClick={() => handleTabClick("my-purchases")}
              role="tab"
              aria-selected={activeTab === "my-purchases"}
            >
              <img src={DowLoadMyCourse1} className="Edit-icon" />
              My Purchases
            </a>
          </div>
          <div className="MyCourse-nav-item">
            <a
              className={`MyCourse-nav-link ${
                activeTab === "upcoming-courses" ? "active" : ""
              }`}
              onClick={() => handleTabClick("upcoming-courses")}
              role="tab"
              aria-selected={activeTab === "upcoming-courses"}
            >
              <img src={uploadmc1} className="Edit-icon" /> Upcoming Courses
            </a>
          </div>
          <div className="MyCourse-nav-item">
            <a
              className={`MyCourse-nav-link ${
                activeTab === "discounts" ? "active" : ""
              }`}
              onClick={() => handleTabClick("discounts")}
              role="tab"
              aria-selected={activeTab === "discounts"}
            >
              <img src={discount} className="Edit-icon" /> Discounts
            </a>
          </div>
          <div className="MyCourse-nav-item">
            <a
              className={`MyCourse-nav-link ${
                activeTab === "promotions" ? "active" : ""
              }`}
              onClick={() => handleTabClick("promotions")}
              role="tab"
              aria-selected={activeTab === "promotions"}
            >
              <img src={Megaphone2} className="Edit-icon" /> Promotions
            </a>
          </div>
        </div>

        <div className="MyCourse-tab-content">
          {activeTab === "my-courses" && (
            <div
              className="MyCourse-tab-pane active"
              id="my-courses-tab"
              role="tabpanel"
            >
              {/* Nội dung cho tab My Courses */}

              <div className="MyCouser-containerr">
                <div className="MyCouser-table-container">
                  <table className="MyCourse-table ucp-table">
                    <thead className="MyCourse-thead-s">
                      <tr>
                        <th className="MyCourse-text-center" scope="col">
                          Item No.
                        </th>
                        <th className="MyCourse-text-center">Title</th>
                        <th className="MyCourse-text-center" scope="col">
                          Publish Date
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Sales
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Parts
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Category
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Status
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.itemNo}>
                          <td className="MyCourse-text-center">
                            {course.itemNo}
                          </td>
                          <td>{course.title}</td>
                          <td className="MyCourse-text-center">
                            {course.publishDate}
                          </td>
                          <td className="MyCourse-text-center">
                            {course.sales}
                          </td>
                          <td className="MyCourse-text-center">
                            {course.parts}
                          </td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.category} </a>
                          </td>
                          <td className="MyCourse-text-center">
                            <b className="MyCourse-course_active">
                              {course.status}
                            </b>
                          </td>
                          <td className="MyCourse-text-center">
                            {/* <a href={course.actionEdit} title="Edit" className="MyCourse-gray-s"><img src={EditMyCourse}  className="search-icon" /></a> */}
                            <img src={EditMyCourse} className="Edit-icon" />
                            <img src={DeleteMyCourse} className="Edit-icon" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === "my-purchases" && (
            <div
              className="MyCourse-tab-pane active"
              id="my-purchases-tab"
              role="tabpanel"
            >
              {/* Nội dung cho tab My Purchases */}
              <div className="MyCouser-containerr">
                <div className="MyCouser-table-container">
                  <table className="MyCourse-table ucp-table">
                    <thead className="MyCourse-thead-s">
                      <tr>
                        <th className="MyCourse-text-center" scope="col">
                          Item No.
                        </th>
                        <th className="MyCourse-text-center">Title</th>
                        <th className="MyCourse-text-center" scope="col">
                          Vendor
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Category
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Delivery Type
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Price
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Purchase Date
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {MyPurchase.map((course) => (
                        <tr key={course.itemNo}>
                          <td className="MyCourse-text-center">
                            {course.itemNo}
                          </td>
                          <td>{course.title}</td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.Vendor} </a>
                          </td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.Category} </a>
                          </td>
                          <td className="MyCourse-text-center">
                            <b className="MyCourse-course_active">
                              {course.DeliveryType}
                            </b>
                          </td>
                          <td className="MyCourse-text-center">
                            {course.Price}
                          </td>
                          <td className="MyCourse-text-center">
                            {course.Purchase}
                          </td>
                          <td className="MyCourse-text-center">
                            <img src={DowLoadMyCourse} className="Edit-icon" />
                            <img src={DeleteMyCourse} className="Edit-icon" />
                            <img src={Printer} className="Edit-icon" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === "upcoming-courses" && (
            <div
              className="MyCourse-tab-pane active"
              id="upcoming-courses-tab"
              role="tabpanel"
            >
              {/* Nội dung cho tab Upcoming Courses */}
              <div className="MyCouser-containerr">
                <div className="MyCouser-table-container">
                  <table className="MyCourse-table ucp-table">
                    <thead className="MyCourse-thead-s">
                      <tr>
                        <th className="MyCourse-text-center" scope="col">
                          Item No.
                        </th>
                        <th className="MyCourse-text-center">Title</th>
                        <th className="MyCourse-text-center" scope="col">
                          Thumbnail
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Category
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Price
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Date
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Status
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {UpComming.map((course) => (
                        <tr key={course.itemNo}>
                          <td className="MyCourse-text-center">
                            {course.itemNo}
                          </td>
                          <td>{course.title}</td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.Thumbnail} </a>
                          </td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.Category} </a>
                          </td>

                          <td className="MyCourse-text-center">
                            {course.Price}
                          </td>
                          <td className="MyCourse-text-center">
                            {course.Purchase}
                          </td>
                          <td className="MyCourse-text-center">
                            <b className="MyCourse-course_active">
                              {course.Status}
                            </b>
                          </td>
                          <td className="MyCourse-text-center">
                            <img src={EditMyCourse} className="Edit-icon" />
                            <img src={DeleteMyCourse} className="Edit-icon" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === "discounts" && (
            <div
              className="MyCourse-tab-pane active"
              id="discounts-tab"
              role="tabpanel"
            >
              {/* Nội dung cho tab Discounts */}
              <div className=" Mc-panel-default Mt-30">
                <div
                  className="panel-heading-checkout"
                  onClick={toggleDropdown}
                >
                  <span className="edit-title">New Discount</span>
                  <span className="edit-icon">{isOpen ? "−" : "✚"}</span>
                </div>
                <div className={`panel-collapse ${isOpen ? "show" : ""}`}>
                  <div className="panel-body basic_form">
                    <div className="MC-grid-container">
                      <div className="MC-grid-item">
                        <div className="MC1-grid-container">
                          <div className="MC1-grid-item">
                            <div className="ui MC-search focus mt-20 Mc-lbel25">
                              <label>Course*</label>
                            </div>
                            <select className="ui dropdown Mc-cntry152 prompt MC-srch_explore">
                              <option value="">Select Course</option>
                              <option value="1">Course Title Here</option>
                              <option value="2">Course Title Here</option>
                              <option value="3">Course Title Here</option>
                              <option value="4">Course Title Here</option>
                              <option value="5">Course Title Here</option>
                              <option value="6">Course Title Here</option>
                              <option value="7">Course Title Here</option>
                            </select>
                          </div>

                          <div className="MC1-grid-item">
                            <div className="ui MC-search focus mt-20 Mc-lbel25">
                              <label>Discount Amount</label>
                              <div className="ui left icon input swdh19">
                                <input
                                  className="prompt MC-srch_explore"
                                  type="number"
                                  placeholder="Percent (eg. 20 for 20%)"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="MC1-grid-item">
                            <div className="ui MC-search focus mt-20 Mc-lbel25">
                              <label>Start Date</label>
                              <div className="ui left icon input swdh19">
                                <input
                                  className="prompt MC-srch_explore datepicker-here"
                                  type="text"
                                  data-language="en"
                                  placeholder="dd/mm/yyyy"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="MC1-grid-item">
                            <div className="ui MC-search focus mt-20 Mc-lbel25">
                              <label>End Date</label>
                              <div className="ui left icon input swdh19">
                                <input
                                  className="prompt MC-srch_explore datepicker-here"
                                  type="text"
                                  data-language="en"
                                  placeholder="dd/mm/yyyy"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="MC1-grid-item">
                            <button className="Mc-discount_btn" type="submit">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="MyCouser-containerr">
                <div className="MyCouser-table-container">
                  <table className="MyCourse-table ucp-table">
                    <thead className="MyCourse-thead-s">
                      <tr>
                        <th className="MyCourse-text-center" scope="col">
                          Item No.
                        </th>
                        <th className="MyCourse-text-center">Title</th>
                        <th className="MyCourse-text-center" scope="col">
                          Start Date
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          End Date
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Discount
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Status
                        </th>
                        <th className="MyCourse-text-center" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Discount.map((course) => (
                        <tr key={course.itemNo}>
                          <td className="MyCourse-text-center">
                            {course.itemNo}
                          </td>
                          <td>{course.title}</td>
                          <td className="MyCourse-text-center">
                            {course.StartDate}
                          </td>
                          <td className="MyCourse-text-center">
                            {course.EndDate}
                          </td>
                          <td className="MyCourse-text-center">
                            {course.Discount}
                          </td>
                          <td className="MyCourse-text-center">
                            <b className="MyCourse-course_active">
                              {course.Status}
                            </b>
                          </td>
                          <td className="MyCourse-text-center">
                            <img src={EditMyCourse} className="Edit-icon" />
                            <img src={DeleteMyCourse} className="Edit-icon" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === "promotions" && (
            <div
              className="MyCourse-tab-pane active"
              id="promotions-tab"
              role="tabpanel"
            >
              {/* Nội dung cho tab Promotions */}
              <div
                className="MyCourse-tab-pane "
                id="pills-promotions"
                role="tabpanel"
                aria-labelledby="pills-promotions-tab"
              >
                <div className="MyCourse-promotion_tab mb-10">
                  <img
                    src="https://gambolthemes.net/html-items/cursus-new-demo/images/dashboard/promotion.svg"
                    alt=""
                  />
                  <h4>Baby promotion plan is activated!</h4>
                  <p>
                    By activating promotion plans you can improve course views
                    and sales.
                  </p>
                  <button className="MyCourse-plan_link_btn">
                    Change New Plan
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCourse;
