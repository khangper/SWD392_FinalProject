import React from "react";
import "./HelpView2.css";
import search_icon from "..//../assets/search.png";
import Payment from "..//../assets/payment.png";
import tablerow from "..//../assets/tablerow.png";
import helpdestop from "..//../assets/helpdestop.png";
import rulerhelp from "..//../assets/ruler-help.png";
import trade from "..//../assets/trade.png";
import bookhelp from "..//../assets/book-help.png";
import Header from "../../components/Header-paidmember/Header";

function HelpView2() {
  return (
    <div className="HelpView2">
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
                  <li className="HelpView-breadcrumb-item">
                    <a href="help.html">/Selling & Promotion</a>
                  </li>
                  <li
                    className="HelpView-breadcrumb-item active"
                    aria-current="page"
                  >
                    /Pricing & Coupons
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="explore-container">
            <section className="search-box">
              <img
                src={search_icon}
                alt="Search Icon"
                className="search-icon"
              />
              <input type="text" placeholder="Search Tutors" />
            </section>
          </div>
        </div>
        <div className="HelpView-title126">
          <h2>Payments</h2>
        </div>
      </div>
      {/* Body HelpView2 */}

      <div className="HelpView-grid-container">
        <div className="HelpView-grid-item">
          <div className="HelpView-fcrse_3 HelpView-frc123">
            <div className="HelpView-cater_ttle">
              <h4>Instructor Topics</h4>
            </div>
            <ul className="HelpView-allcate15">
              <li>
                <a href="#" className="HelpView-ct_item active">
                  <img
                    src={Payment}
                    alt="Search Icon"
                    className="HelpView-icon"
                  />
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="HelpView-ct_item ">
                  <img
                    src={tablerow}
                    alt="Search Icon"
                    className="HelpView-icon"
                  />
                  Selling & Promotion
                </a>
              </li>
              <li>
                <a href="#" className="HelpView-ct_item">
                  <img
                    src={helpdestop}
                    alt="Search Icon"
                    className="HelpView-icon"
                  />
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#" className="HelpView-ct_item">
                  <img
                    src={rulerhelp}
                    alt="Search Icon"
                    className="HelpView-icon"
                  />
                  Course Building
                </a>
              </li>
              <li>
                <a href="#" className="HelpView-ct_item">
                  <img
                    src={trade}
                    alt="Search Icon"
                    className="HelpView-icon"
                  />
                  Course Management
                </a>
              </li>
              <li>
                <a href="#" className="HelpView-ct_item">
                  <img
                    src={bookhelp}
                    alt="Search Icon"
                    className="HelpView-icon"
                  />
                  Trust & Safety
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="HelpView-grid-item">
          <div className="HelpView-vew120 HelpView-frc123">
            <h4>Taxes</h4>
            <div className="HelpView-ntt125">
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  Common Instructor Questions About The W-8BEN
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  Taxes: What do Instructors Need to Submit to Cursus?
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  What Does Cursus do With my Tax Information (i.e.
                  Withholding)?
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  How do I Submit my Tax Forms to Cursus?
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  How Does Cursus Handle VAT / GST?
                </a>
              </div>
            </div>
          </div>
          <div className="HelpView-vew120 mt-50 mb-30">
            <h4>Payments - General</h4>
            <div className="HelpView-ntt125">
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  How do I Earn Revenue From Cursus for Business?
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  How to opt out of Cursus for Business
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  Payoneer FAQ
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  Missing Instructor Payments
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  Instructor Revenue Share
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  Instructor Revenue Report
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  Instructor Payment Overview
                </a>
              </div>
              <div>
                <a href="help_faq_view.html" className="HelpView-vew121">
                  How do I Opt Into the Affiliate Program?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpView2;
