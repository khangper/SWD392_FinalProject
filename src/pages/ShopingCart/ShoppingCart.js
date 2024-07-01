import React from 'react'
import "./ShoppingCart.css"
import Header from '../../components/Header-paidmember/Header'
import { Link } from 'react-router-dom'
import share from "../../assets/share.png";
import saved_course from "../../assets/saved-course.png";
import not_interested from "../../assets/not-interested.png";
import report from "../../assets/report.png";
import card_icon from '..//../assets/cart-icon.png';
import Closeshopping from '..//../assets/Close-shopping.png';
import Footer from '../../components/Footer/Footer'




function ShoppingCart() {
	const courses = [
		{
		  id: 1,
		  imageSrc: "https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg",
		  detailLink: "course_detail_view.html",
		  title: "The Web Developer Bootcamp",
		  category: "Web Development | Python",
		  author: "John Doe",
		  price: "$10"
		},


		// Add more course objects here
	  ];
  return (
    <div className="ShoppingPage">
              <Header/>

              <div className="Shopping-conten">   
    <div className="row">
       <div className="title125">
           <div className="titleleft">
               <div className="ttl121">
                   <nav aria-label="breadcrumb">
                       <div className="breadcrumb">
                           <Link href="index.html" className="breadcrumb-item">Home</Link>
                           <Link className="breadcrumb-item active" aria-current="page">/Shopping Cart</Link>
                       </div>
                   </nav>
               </div>
           </div>
       </div>
       <div className="Paidmember-title" >
           <h2>Shopping Cart</h2>
       </div>
   </div>      
              </div>

              {/* Body ShoppingPage */}

              <main>
              <div className="Shopping-Container">
        <div className="Billing-Details-GridContainer">

                         {/* <div className="Shopping-fcrse_1">
							<a href="course_detail_view.html" className="Shopping-hf_img">
								<img className="cart_img" src="https://gambolthemes.net/html-items/cursus-new-demo/images/courses/img-2.jpg" alt=""/>
							</a>
							<div className="Shopping-hs_content">
								<div className="eps_dots eps_dots10 more_dropdown">
									<a href="#"><img src={Closeshopping} className="shopping-close" /></a>																										
								</div>
								<a href="course_detail_view.html" className="Shopping-crse14s ">The Web Developer Bootcamp</a>
								<a href="#" className="Shopping-crse-cate">Web Development | Python</a>
								<div className="Shopping-auth1lnkprce">
									<p className="Shopping-cr1fot">By <a href="#">John Doe</a></p>
									<div className="Shopping-prce142">$10</div>
								</div>
							</div>
						</div>  */}


<div className="Shopping-fcrse-container">
      {courses.map((course) => (
        <div className="Shopping-fcrse_1" key={course.id}>
          <a href={course.detailLink} className="Shopping-hf_img">
            <img className="cart_img" src={course.imageSrc} alt="" />
          </a>
          <div className="Shopping-hs_content">
            <div className="eps_dots eps_dots10 more_dropdown">
              <a href="#"><img src={Closeshopping} className="shopping-close" /></a>																										
            </div>
            <a href={course.detailLink} className="Shopping-crse14s">{course.title}</a>
            <a href="#" className="Shopping-crse-cate">{course.category}</a>
            <div className="Shopping-auth1lnkprce">
              <p className="Shopping-cr1fot">By <a href="#">{course.author}</a></p>
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
                                    <img src= "https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg" />

								</div>
								<div className="order_dt_section">
									<div className="order_title">
										<h4>Orignal Price</h4>
										<div className="order_price">$15</div>
									</div>
									<div className="order_title">
										<h6>Discount Price</h6>
										<div className="order_price">$5</div>
									</div>
									<div className="order_title">
										<h2>Total</h2>
										<div className="order_price5">$10</div>
									</div>
									<div className="Shopping-coupon_code">
										<p>Learn now is applied.</p>
										<div className="coupon_input">
											<div className="ui shopping focus mt-15">
												<div className="ui left icon input swdh11 swdh19">
													<input className=" srch_shopping" type="text" name="couponcode"  id="id_coupon_code" required="" placeholder="Enter Coupon Code"/>
												</div>
												<button className="Shopping-code-apply-btn" type="submit">Apply</button>
											</div>
										</div>
									</div>
									<a href="#" className="Shopping-chck-btn22">Checkout Now</a>
								</div>
						</div>


        </div>
        
             </div>
             </main>



             <Footer/>

     

    
      
    </div>
  )
}

export default ShoppingCart
