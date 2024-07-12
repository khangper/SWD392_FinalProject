import React from "react";
import DeleteMyCourse from "..//../assets/garbage.png";
import EditMyCourse from "..//../assets/Edit-mycourse.png";
import MyCourseBook from "..//../assets/MyCourse-Book.png";
import DowLoadMyCourse from "..//../assets/DowLoadMyCourse.png";
import Printer from "..//../assets/Printer.png";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";

function PurchaseCourse() {
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
                  <td className="MyCourse-text-center">{course.itemNo}</td>
                  <td>{course.title}</td>
                  <td className="MyCourse-text-center">
                    <a href="#">{course.Vendor} </a>
                  </td>
                  <td className="MyCourse-text-center">
                    <a href="#">{course.Category} </a>
                  </td>
                  <td className="MyCourse-text-center">
                    <Link to={PATH_NAME.DOWLOADCOURSE}>
                      <b className="MyCourse-course_active">
                        {course.DeliveryType}
                      </b>
                    </Link>
                  </td>
                  <td className="MyCourse-text-center">{course.Price}</td>
                  <td className="MyCourse-text-center">{course.Purchase}</td>
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
  );
}

export default PurchaseCourse;
