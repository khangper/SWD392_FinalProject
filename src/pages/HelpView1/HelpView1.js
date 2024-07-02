import React from 'react'
import Header from '../../components/Header-paidmember/Header'
import "./HelpView1.css";
import Footer from '../../components/Footer/Footer'
import search_icon from '..//../assets/search.png';
import Payment from '..//../assets/payment.png';
import tablerow from '..//../assets/tablerow.png';
import helpdestop from '..//../assets/helpdestop.png';
import rulerhelp from '..//../assets/ruler-help.png';
import trade from '..//../assets/trade.png';
import bookhelp from '..//../assets/book-help.png';



function HelpView1() {
  return (
    <div className="HelpView1">
        <Header/>

        <div className="HelpView1-grid-container">
    <div className="HelpView-title125">
        <div className="HelpView-titleleft">
            <div className="HelpView-ttl121">
                <nav aria-label="breadcrumb">
                    <ol className="HelpView-breadcrumb">
                        <li className="HelpView-breadcrumb-item"><a href="index.html">Home</a></li>
                        
                        <li className="HelpView-breadcrumb-item active" aria-current="page">/Payment</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div className="explore-container">
            <section className="search-box">
        <img src={search_icon} alt="Search Icon" className="search-icon" />
        <input
          type="text"
          placeholder="Search Tutors"
        />
      </section>
            </div>
    </div>
    <div className="HelpView-title126">
        <h2>Promote Your Course With Coupons and Referral Links</h2>
    </div>
</div>



        {/* Body HelpView1 */}

        <div className="HelpView-grid-container">
            <div className="HelpView-grid-item">

            <div className="HelpView-fcrse_3 HelpView-frc123">
  <div className="HelpView-cater_ttle">
    <h4>Instructor Topics</h4>
  </div>
  <ul className="HelpView-allcate15">
    <li><a href="#" className="HelpView-ct_item"><img src={Payment} alt="Search Icon" className="HelpView-icon" />Payments</a></li>
    <li><a href="#" className="HelpView-ct_item active"><img src={tablerow} alt="Search Icon" className="HelpView-icon" />Selling & Promotion</a></li>
    <li><a href="#" className="HelpView-ct_item"><img src={helpdestop} alt="Search Icon" className="HelpView-icon" />Quality Standards</a></li>
    <li><a href="#" className="HelpView-ct_item"><img src={rulerhelp} alt="Search Icon" className="HelpView-icon" />Course Building</a></li>
    <li><a href="#" className="HelpView-ct_item"><img src={trade} alt="Search Icon" className="HelpView-icon" />Course Management</a></li>
    <li><a href="#" className="HelpView-ct_item"><img src={bookhelp} alt="Search Icon" className="HelpView-icon" />Trust & Safety</a></li>
  </ul>
</div>
<div className="HelpView-fcrse_3">
  <div className="HelpView-cater_ttle">
    <h4>Related Articles</h4>
  </div>
  <ul className="HelpView-allcate15">
    <li><a href="#" className="HelpView-ct_item">Instructor Revenue Share</a></li>
    <li><a href="#" className="HelpView-ct_item">Coupons & Course Referral Links: Rules and Guidelines</a></li>
    <li><a href="#" className="HelpView-ct_item">Rules and Guidelines</a></li>
    <li><a href="#" className="HelpView-ct_item">Instructor Promotional Agreements and Cursus Deals</a></li>
    <li><a href="#" className="HelpView-ct_item">Cursus Coupons: FAQ</a></li>
    <li><a href="#" className="HelpView-ct_item">How to Select Your Payout Method And Become a Premium Instructor</a></li>
  </ul>
</div>

<a href="#" className="HelpView-rqst152">Submit A Request</a>


            </div>
            
            <div className="HelpView-grid-item">
            <div className="HelpView-vew120 HelpView-frc123">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat maximus pellentesque. Integer sem enim, luctus at nibh at, condimentum sagittis sapien. Sed tempus ipsum erat, sit amet efficitur velit interdum eu. Vestibulum hendrerit id dolor eu scelerisque. Phasellus ex dui, consequat nec feugiat eu, dapibus eget ante. Sed sodales interdum dui, at euismod mi feugiat hendrerit. Suspendisse auctor libero in tempor mollis. Nulla et dolor velit. Aliquam sit amet luctus quam.</p>
						</div>
						<div className="HelpView-vew120 mt-35 mb-30">			
							<h4>Course referral links</h4>
							<p>Nam a egestas libero, eget eleifend turpis. Sed id ipsum a ipsum aliquam laoreet sit amet sit amet nibh. Proin dapibus, libero sed posuere rhoncus, orci mi cursus enim, at accumsan eros massa lacinia mi. Nunc eget finibus felis, volutpat malesuada sem. Aliquam ac nisl pellentesque, varius neque sit amet, porttitor nunc. Nullam elit tellus, dapibus non eleifend sed, hendrerit eget velit. Aliquam ut felis dictum, tincidunt magna vitae, aliquam massa. In porttitor tristique quam, non dignissim sapien pharetra ultrices. Cras non ante non velit mollis mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.</p>
							<p className="mt-4">Etiam lobortis dictum tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ultricies efficitur dui, suscipit tempus elit condimentum quis. Duis sed vestibulum tortor, eget cursus odio.</p>
						</div>
						<div className="HelpView-vew120 mt-35 mb-30">			
							<h4>How to create a coupon</h4>
							<ol className="HelpView-ntt125 mtl145">
								<li><p>Navigate to the <strong>course Promotions page</strong></p></li>								
								<li><p>Click <strong>Create new coupon</strong></p></li>								
								<li><p><strong>Select the coupon type</strong></p></li>								
								<li><p>If applicable, choose your coupon price</p></li>								
								<li><p>Edit the coupon code if you wish (the coupon code must be between 6 and 20 characters, and can only contain alphanumeric characters (A-Z, 0-9) , periods ("."), dashes ("-") or underscores ("_").</p></li>								
								<li><p>Click <strong>Review coupon</strong> to double check the coupon’s details</p></li>								
								<li><p>Click <strong>Create coupon</strong></p></li>								
							</ol>
						</div>
						<div className="HelpView-vew120 mt-35 mb-30">			
							<h4>How to share your coupon code</h4>
							<p>Morbi lectus nunc, lacinia ut consequat a, semper vel erat. Duis ut lacus nec dui sodales mattis. Mauris tellus dolor, pulvinar sit amet pretium a, malesuada sed tellus. Aliquam ultrices elit neque, quis lacinia ex porttitor non. Donec ac iaculis turpis. Nulla lacinia enim quis orci aliquam, non cursus urna pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in mi a nisi auctor interdum. Vivamus faucibus magna sed elit interdum consequat. Vestibulum eu tortor vel ante feugiat faucibus quis et urna. Quisque interdum ac enim eu tempus. Fusce viverra, lectus egestas tincidunt cursus, tortor sapien convallis metus, vitae auctor risus metus vel nisi. Aenean dapibus bibendum mauris ut iaculis.</p>
						</div>
						<div className="HelpView-vew120 mt-35 mb-30">			
							<h4>How to deactivate a coupon</h4>
							<p>Quisque et bibendum urna, eget consequat sapien. Integer sed condimentum nibh. Integer id neque tristique, lobortis massa ac, dapibus nibh. Donec nulla odio, porttitor ac rutrum eget, volutpat a velit. Curabitur et enim quis diam congue dictum et vitae dui. Nulla tortor orci, luctus a pretium vel, ultrices porta nisl.</p>
						</div>
						<div className="HelpView-rpt100 mt-35 mb-20">
							<span>Was this review helpful?</span>
							<div className="HelpView-radio--group-inline-container">
								<div className="HelpView-radio-item">
                                <input id="radio-1" name="radio" type="radio"/>
                                <label htmlFor="radio-1" className="HelpView-radio-label">Yes</label>
								</div>
								<div className="HelpView-radio-item">
									<input id="radio-2" name="radio" type="radio"/>
									<label htmlFor="radio-2" className="HelpView-radio-label">No</label>
								</div>
							</div>
						</div>

            </div>

        </div>

        <Footer/>


      
    </div>
  )
}

export default HelpView1
