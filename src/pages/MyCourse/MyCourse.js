import React, { useState, useEffect } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoursesRequest,
  editCourseRequest,
  deleteCourseRequest,
} from "../../redux/reduxActions/MyCourse/CourseAction";
import {
  fetchUpcommingCoursesRequest,
  editUpcommingCourseRequest,
  deleteUpcommingCourseRequest,
} from "../../redux/reduxActions/MyCourse/UpcommingCourseActions";
import {
  deleteMyPurchaseCourseRequest,
  fetchMyPurchaseCoursesRequest,
} from "../../redux/reduxActions/MyCourse/MyPurchaseAction";
import {
  fetchDiscountRequest,
  editDiscountRequest,
  deleteDiscountRequest,
} from "../../redux/reduxActions/MyCourse/DiscountAction";
function MyCourse() {
  // My Course
  const handleDelete = (courseId) => {
    dispatch(deleteCourseRequest(courseId));
  };
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    dispatch(fetchCoursesRequest());
  }, [dispatch]);

  const handleEdit = (course) => {
    setCurrentCourse(course);
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCourseRequest(currentCourse));
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  // UpComing
  const dispatchUpcomming = useDispatch();
  const { upcommingCourses, loadingUpcomming, errorUpcomming } = useSelector(
    (state) => state.upcommingCourses
  );
  const [isEditingUpcoming, setIsEditingUpcoming] = useState(false);
  const [currentUpcomingCourse, setCurrentUpcomingCourse] = useState(null);

  useEffect(() => {
    dispatchUpcomming(fetchUpcommingCoursesRequest());
  }, [dispatchUpcomming]);

  const handleEditUpcoming = (course) => {
    setCurrentUpcomingCourse({
      ...course,
      Price: course.Price.startsWith("$") ? course.Price : `$${course.Price}`,
    });
    setIsEditingUpcoming(true);
  };

  const handleDeleteUpcoming = (courseId) => {
    dispatch(deleteUpcommingCourseRequest(courseId));
  };

  const handleSubmitUpcoming = (e) => {
    e.preventDefault();
    const updatedCourse = {
      ...currentUpcomingCourse,
      Price: currentUpcomingCourse.Price.replace("$", ""),
    };
    dispatch(editUpcommingCourseRequest(updatedCourse));
    setIsEditingUpcoming(false);
  };

  const handleInputChangeUpcoming = (e) => {
    const { name, value } = e.target;
    setCurrentUpcomingCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };
  //Purchase Course
  const dispatchPurchase = useDispatch();
  const { myPurchaseCourses, loadingPurchase, errorPurchase } = useSelector(
    (state) => state.myPurchaseCourses
  );

  useEffect(() => {
    dispatchPurchase(fetchMyPurchaseCoursesRequest());
  }, [dispatchPurchase]);

  const handleDeletePurchase = (courseId) => {
    dispatch(deleteMyPurchaseCourseRequest(courseId));
  };
  const discountDispatch = useDispatch();
  const { discounts, discountLoading, discountError } = useSelector(
    (state) => state.discount
  );
  const [discountIsEditing, setDiscountIsEditing] = useState(false);
  const [currentDiscount, setCurrentDiscount] = useState(null);

  useEffect(() => {
    discountDispatch(fetchDiscountRequest());
  }, [discountDispatch]);

  const handleDiscountEdit = (discount) => {
    setCurrentDiscount(discount);
    setDiscountIsEditing(true);
  };

  const handleDiscountDelete = (discountId) => {
    discountDispatch(deleteDiscountRequest(discountId));
  };

  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    discountDispatch(editDiscountRequest(currentDiscount));
    setDiscountIsEditing(false);
  };

  const handleDiscountInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentDiscount((prevDiscount) => ({
      ...prevDiscount,
      [name]: value,
    }));
  };

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const Discount = [
  //   {
  //     itemNo: "01",
  //     title: "Course Title Here",
  //     StartDate: "02 November 2019",
  //     EndDate: "19 November 2019",
  //     Discount: "20%",
  //     Status: "Active",
  //     actionEdit: "#",
  //     actionDelete: "#",
  //   },
  // ];

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
              <a href="/create-course">
                <button className="MyCoursePage1-create_btn_dash">
                  Create Your Course
                </button>
              </a>
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
                      {loading && (
                        <tr>
                          <td colSpan="8">Loading...</td>
                        </tr>
                      )}
                      {error && (
                        <tr>
                          <td colSpan="8">Error: {error}</td>
                        </tr>
                      )}
                      {courses.map((course) => (
                        <tr key={course.id}>
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
                            <a href="#">{course.category}</a>
                          </td>
                          <td className="MyCourse-text-center">
                            <b className="MyCourse-course_active">
                              {course.status}
                            </b>
                          </td>
                          <td className="MyCourse-text-center">
                            <img
                              src={EditMyCourse}
                              className="Edit-icon"
                              onClick={() => handleEdit(course)}
                              alt="Edit"
                            />
                            <img
                              src={DeleteMyCourse}
                              className="Edit-icon"
                              onClick={() => handleDelete(course.id)}
                              alt="Delete"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {isEditing && currentCourse && (
                  <div className="edit-form-overlay">
                    <div className="edit-form">
                      <h2>Edit Course</h2>
                      <form onSubmit={handleSubmit}>
                        <label>
                          Item No.:
                          <input
                            type="text"
                            name="itemNo"
                            value={currentCourse.itemNo}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                        <label>
                          Title:
                          <input
                            type="text"
                            name="title"
                            value={currentCourse.title}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                        <label>
                          Publish Date:
                          <input
                            type="text"
                            name="publishDate"
                            value={currentCourse.publishDate}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                        <label>
                          Sales:
                          <input
                            type="number"
                            name="sales"
                            value={currentCourse.sales}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                        <label>
                          Parts:
                          <input
                            type="text"
                            name="parts"
                            value={currentCourse.parts}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                        <label>
                          Category:
                          <input
                            type="text"
                            name="category"
                            value={currentCourse.category}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                        <label>
                          Status:
                          <input
                            type="text"
                            name="status"
                            value={currentCourse.status}
                            onChange={handleInputChange}
                            required
                          />
                        </label>
                        <button type="submit">Save</button>
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                )}
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
              <div className="MyCourse-container">
                <div className="MyCourse-table-container">
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
                      {loadingPurchase && (
                        <tr>
                          <td colSpan="8">Loading...</td>
                        </tr>
                      )}
                      {errorPurchase && (
                        <tr>
                          <td colSpan="8">Error: {errorPurchase}</td>
                        </tr>
                      )}
                      {myPurchaseCourses.map((course) => (
                        <tr key={course.itemNo}>
                          <td className="MyCourse-text-center">
                            {course.itemNo}
                          </td>
                          <td>{course.title}</td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.Vendor}</a>
                          </td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.Category}</a>
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
                            <img
                              src={DeleteMyCourse}
                              className="Edit-icon"
                              onClick={() =>
                                handleDeletePurchase(course.itemNo)
                              }
                              alt="Delete"
                            />
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
              <div className="MyCourse-container">
                <div className="MyCourse-table-container">
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
                      {loadingUpcomming && (
                        <tr>
                          <td colSpan="8">Loading...</td>
                        </tr>
                      )}
                      {errorUpcomming && (
                        <tr>
                          <td colSpan="8">Error: {errorUpcomming}</td>
                        </tr>
                      )}
                      {upcommingCourses.map((course) => (
                        <tr key={course.itemNo}>
                          <td className="MyCourse-text-center">
                            {course.itemNo}
                          </td>
                          <td>{course.title}</td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.Thumbnail}</a>
                          </td>
                          <td className="MyCourse-text-center">
                            <a href="#">{course.Category}</a>
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
                            <img
                              src={EditMyCourse}
                              className="Edit-icon"
                              onClick={() => handleEditUpcoming(course)}
                              alt="Edit"
                            />
                            <img
                              src={DeleteMyCourse}
                              className="Edit-icon"
                              onClick={() =>
                                handleDeleteUpcoming(course.itemNo)
                              }
                              alt="Delete"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {isEditingUpcoming && currentUpcomingCourse && (
                  <div className="edit-form-overlay">
                    <div className="edit-form">
                      <h2>Edit Course</h2>
                      <form onSubmit={handleSubmitUpcoming}>
                        <label>
                          Item No.:
                          <input
                            type="text"
                            name="itemNo"
                            value={currentUpcomingCourse.itemNo}
                            onChange={handleInputChangeUpcoming}
                            required
                          />
                        </label>
                        <label>
                          Title:
                          <input
                            type="text"
                            name="title"
                            value={currentUpcomingCourse.title}
                            onChange={handleInputChangeUpcoming}
                            required
                          />
                        </label>
                        <label>
                          Thumbnail:
                          <input
                            type="text"
                            name="Thumbnail"
                            value={currentUpcomingCourse.Thumbnail}
                            onChange={handleInputChangeUpcoming}
                            required
                          />
                        </label>
                        <label>
                          Category:
                          <input
                            type="text"
                            name="Category"
                            value={currentUpcomingCourse.Category}
                            onChange={handleInputChangeUpcoming}
                            required
                          />
                        </label>
                        <label>
                          Price:
                          <input
                            type="text"
                            name="Price"
                            value={currentUpcomingCourse.Price}
                            onChange={handleInputChangeUpcoming}
                            required
                          />
                        </label>
                        <label>
                          Date:
                          <input
                            type="text"
                            name="Purchase"
                            value={currentUpcomingCourse.Purchase}
                            onChange={handleInputChangeUpcoming}
                            required
                          />
                        </label>
                        <label>
                          Status:
                          <input
                            type="text"
                            name="Status"
                            value={currentUpcomingCourse.Status}
                            onChange={handleInputChangeUpcoming}
                            required
                          />
                        </label>
                        <button type="submit">Save</button>
                        <button
                          type="button"
                          onClick={() => setIsEditingUpcoming(false)}
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                )}
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
                      {discountLoading && (
                        <tr>
                          <td colSpan="7">Loading...</td>
                        </tr>
                      )}
                      {discountError && (
                        <tr>
                          <td colSpan="7">Error: {discountError}</td>
                        </tr>
                      )}
                      {discounts.map((discount) => (
                        <tr key={discount.id}>
                          <td className="MyCourse-text-center">
                            {discount.itemNo}
                          </td>
                          <td>{discount.title}</td>
                          <td className="MyCourse-text-center">
                            {discount.StartDate}
                          </td>
                          <td className="MyCourse-text-center">
                            {discount.EndDate}
                          </td>
                          <td className="MyCourse-text-center">
                            {discount.Discount}
                          </td>
                          <td className="MyCourse-text-center">
                            <b className="MyCourse-course_active">
                              {discount.Status}
                            </b>
                          </td>
                          <td className="MyCourse-text-center">
                            <img
                              src={EditMyCourse}
                              className="Edit-icon"
                              onClick={() => handleDiscountEdit(discount)}
                              alt="Edit"
                            />
                            <img
                              src={DeleteMyCourse}
                              className="Edit-icon"
                              onClick={() => handleDiscountDelete(discount.id)}
                              alt="Delete"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {discountIsEditing && currentDiscount && (
                  <div className="edit-form-overlay">
                    <div className="edit-form">
                      <h2>Edit Discount</h2>
                      <form onSubmit={handleDiscountSubmit}>
                        <label>
                          Item No.:
                          <input
                            type="text"
                            name="itemNo"
                            value={currentDiscount.itemNo}
                            onChange={handleDiscountInputChange}
                            required
                          />
                        </label>
                        <label>
                          Title:
                          <input
                            type="text"
                            name="title"
                            value={currentDiscount.title}
                            onChange={handleDiscountInputChange}
                            required
                          />
                        </label>
                        <label>
                          Start Date:
                          <input
                            type="text"
                            name="StartDate"
                            value={currentDiscount.StartDate}
                            onChange={handleDiscountInputChange}
                            required
                          />
                        </label>
                        <label>
                          End Date:
                          <input
                            type="text"
                            name="EndDate"
                            value={currentDiscount.EndDate}
                            onChange={handleDiscountInputChange}
                            required
                          />
                        </label>
                        <label>
                          Discount:
                          <input
                            type="text"
                            name="Discount"
                            value={currentDiscount.Discount}
                            onChange={handleDiscountInputChange}
                            required
                          />
                        </label>
                        <label>
                          Status:
                          <input
                            type="text"
                            name="Status"
                            value={currentDiscount.Status}
                            onChange={handleDiscountInputChange}
                            required
                          />
                        </label>
                        <button type="submit">Save</button>
                        <button
                          type="button"
                          onClick={() => setDiscountIsEditing(false)}
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                )}
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
