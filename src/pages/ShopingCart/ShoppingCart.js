import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShoppingCart.css";
import Header from "../../components/Header-paidmember/Header";
import { Link } from "react-router-dom";
import Closeshopping from "../../assets/Close-shopping.png";
import Footer from "../../components/Footer/Footer";
import { PATH_NAME } from "../../constant/pathname";
import { removeFromCart } from "../../redux/reduxActions/ShoppingCartAction";

function ShoppingCart() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.cart.cart);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const removeCourse = (courseId) => {
    dispatch(removeFromCart(courseId));
  };

  const applyCouponCode = () => {
    const discountValue = parseFloat(couponCode);
    if (!isNaN(discountValue) && discountValue > 0) {
      setDiscount(discountValue);
    } else {
      setDiscount(0);
      alert("Invalid discount amount");
    }
  };

  const totalPrice = courses.reduce((acc, course) => {
    const price = parseFloat(course.price.replace("$", ""));
    return acc + price;
  }, 0);

  const discountedTotal = Math.max(totalPrice - discount, 0);

  return (
    <div className="ShoppingPage">
      <Header />

      <div className="HelpView1-grid-container">
        <div className="HelpView-title125">
          <div className="HelpView-titleleft">
            <div className="HelpView-ttl121">
              <nav aria-label="breadcrumb">
                <ol className="HelpView-breadcrumb">
                  <li className="HelpView-breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li
                    className="HelpView-breadcrumb-item active"
                    aria-current="page"
                  >
                    /Shopping Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="HelpView-title126">
          <h2>Shopping Cart</h2>
        </div>
      </div>

      <main>
        <div className="Shopping-Container">
          <div className="Billing-Details-GridContainer">
            <div className="Shopping-fcrse-container">
              {courses.map((course) => (
                <div className="Shopping-fcrse_1" key={course.id}>
                  <a href={course.detailLink} className="Shopping-hf_img">
                    <img className="cart_img" src={course.imgSrc} alt="" />
                  </a>
                  <div className="Shopping-hs_content">
                    <div className="eps_dots eps_dots10 more_dropdown">
                      <button
                        onClick={() => removeCourse(course.id)}
                        className="shopping-close-button"
                      >
                        <img src={Closeshopping} className="shopping-close" />
                      </button>
                    </div>
                    <a href={course.detailLink} className="Shopping-crse14s">
                      {course.title}
                    </a>
                    <a href="#" className="Shopping-crse-cate">
                      {course.category}
                    </a>
                    <div className="Shopping-auth1lnkprce">
                      <p className="Shopping-cr1fot">
                        By <a href="#">{course.author}</a>
                      </p>
                      <div className="Shopping-prce142">{course.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="OrderSumury-GridContainer">
            <div className="membership_chk_bg rght1528">
              <div className="checkout_title">
                <h4>Total</h4>
                <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg" />
              </div>
              <div className="order_dt_section">
                <div className="order_title">
                  <h4>Original Price</h4>
                  <div className="order_price">${totalPrice.toFixed(2)}</div>
                </div>
                <div className="order_title">
                  <h6>Discount</h6>
                  <div className="order_price">${discount.toFixed(2)}</div>
                </div>
                <div className="order_title">
                  <h2>Total</h2>
                  <div className="order_price5">
                    ${discountedTotal.toFixed(2)}
                  </div>
                </div>
                <div className="SS-Shopping-coupon_code">
                  <p>Enter a discount amount:</p>
                </div>
                <div className="SS-coupon_input">
                  <div className="SS-ui SS-shopping focus mt-15">
                    <div className="SS-input-container">
                      <input
                        className="SS-srch_shopping"
                        type="text"
                        name="couponcode"
                        id="id_coupon_code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        required=""
                        placeholder="Enter Discount Amount"
                      />
                      <button
                        className="SS-Shopping-code-apply-btn"
                        type="button"
                        onClick={applyCouponCode}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
                <Link to={PATH_NAME.CHECKOUT} className="Shopping-chck-btn22">
                  Checkout Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ShoppingCart;
