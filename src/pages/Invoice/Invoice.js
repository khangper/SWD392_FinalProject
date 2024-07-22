import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Invoice.css";
import { PATH_NAME } from "../../constant/pathname";

const Invoice = () => {
  const location = useLocation();
  const { originalPrice } = location.state || { originalPrice: 0 };
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ShoppingCart_API_URL =
    "https://66908916c0a7969efd9c67ed.mockapi.io/ojt-repo/ShoppingCart";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(ShoppingCart_API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Tính tổng totalAmount của các mặt hàng
  const totalAmount = courses.reduce((acc, course) => {
    const price = parseFloat(course.price.replace("$", ""));
    const vat = price * 0.2;
    const total = price + vat;
    return acc + total;
  }, 0);

  return (
    <div className="Invoice_Container">
      <div className="Invoice_Header">
        <div className="Invoice_Header_Item">
          <div className="Header_Logo">
            <Link to={PATH_NAME.HOME}>
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg"
                alt="Logo"
              />
            </Link>
          </div>
          <p>Invoice</p>
        </div>
      </div>
      <div className="Invoice_Body">
        <div className="Invoice_Date_Inf">
          <ul>
            <li>
              <div className="vdt-list">
                <span>Date:</span>
                10 April 2020
              </div>
            </li>
            <li>
              <div className="vdt-list">
                <span>Invoice No:</span>
                IVIP12023598
              </div>
            </li>
            <li>
              <div className="vdt-list">
                <span>Order ID:</span>
                1258963487
              </div>
            </li>
          </ul>
        </div>
        <div className="Invoice_Body_Content">
          <div className="Inv_Content_Title">
            <h2>Invoice</h2>
          </div>
          <div className="Inv_Detail_Row">
            <div className="Inv_Detail_Content-To">
              <h4>To</h4>
              <div className="vdt-list">Rock William</div>
              <div className="vdt-list">133, Dracut</div>
              <div className="vdt-list">Massachusetts</div>
              <div className="vdt-list">01826</div>
              <div className="vdt-list">United States</div>
            </div>
            <div className="Inv_Detail_Content-Cursus">
              <h4>Cursus</h4>
              <div className="vdt-list">Cursus LTD</div>
              <div className="vdt-list">#1234, Shahid Karnail Singh Nagar,</div>
              <div className="vdt-list">Near MBD Mall,</div>
              <div className="vdt-list">141001</div>
              <div className="vdt-list">Ludhiana</div>
              <div className="vdt-list">Punjab</div>
              <div className="vdt-list">India</div>
            </div>
          </div>
        </div>
        <div className="Invoice_Table">
          <div className="tb_head">
            <p>Item</p>
            <p>Price</p>
            <p>VAT (20%)</p>
            <p>Total Amount</p>
          </div>
          {courses.map((course) => {
            const price = parseFloat(course.price.replace("$", ""));
            const vat = price * 0.2;
            const totalAmount = price + vat;
            return (
              <div className="user_dt_trans" key={course.id}>
                <p>{course.title}</p>
                <p>${price.toFixed(2)}</p>
                <p>${vat.toFixed(2)}</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
            );
          })}
          <div className="user_dt_trans jsk1145">
            <div className="totalinv2">
              Invoice Total : USD ${totalAmount.toFixed(2)}
            </div>
            <p>Paid via Paypal</p>
          </div>
        </div>
        <div className="Invoice_Footer">
          <div className="Left_Footer">
            <p>Thanks for buying</p>
          </div>
          <div className="Right_Footer">
            <a className="print_btn" href="#">
              Print
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
