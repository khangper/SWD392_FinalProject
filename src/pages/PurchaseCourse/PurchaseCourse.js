import React, { useEffect } from "react";
import DeleteMyCourse from "..//../assets/garbage.png";
import EditMyCourse from "..//../assets/Edit-mycourse.png";
import MyCourseBook from "..//../assets/MyCourse-Book.png";
import DowLoadMyCourse from "..//../assets/DowLoadMyCourse.png";
import Printer from "..//../assets/Printer.png";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";
import {
  deleteMyPurchaseCourseRequest,
  fetchMyPurchaseCoursesRequest,
} from "../../redux/reduxActions/MyCourse/MyPurchaseAction";
import { useDispatch, useSelector } from "react-redux";

function PurchaseCourse() {
  const dispatchPurchase = useDispatch();
  const { myPurchaseCourses, loadingPurchase, errorPurchase } = useSelector(
    (state) => state.myPurchaseCourses
  );

  useEffect(() => {
    dispatchPurchase(fetchMyPurchaseCoursesRequest());
  }, [dispatchPurchase]);

  return (
    <div className="PurchaseCoursePage">
      <div className="MyCoursePage-grid-container">
        <div className="MyCoursePage-grid-item">
          <div className="MyCoursePage-st_title">
            <img src={MyCourseBook} className="Edit-icon" />
            Purchased Course
          </div>
        </div>
      </div>

      {/* Body */}
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
                  <td className="MyCourse-text-center">{course.itemNo}</td>
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
                  <td className="MyCourse-text-center">{course.Price}$</td>
                  <td className="MyCourse-text-center">{course.Purchase}</td>
                  <td className="MyCourse-text-center">
                    <Link
                      to={`${PATH_NAME.VIEWlISTCOURSE.replace(
                        ":id",
                        course.id
                      )}`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PurchaseCourse;
