import React, { useState } from "react";
import Header from "../../components/Header-paidmember/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import ".//PaidMembership.css";
import check from "..//../assets/check.png";
import Closepaidment from "..//../assets/Close-paidment.png";

export default function PaidMembership() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDetails = () => {
  //   setIsOpen(!isOpen);
  // };
  const [isOpen, setIsOpen] = useState(Array(10).fill(false)); // Assuming there are 10 items

  const toggleDetails = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  const [isOpen1, setIsOpen1] = useState(Array(10).fill(false)); // Assuming there are 10 items

  const toggleDetails1 = (index) => {
    const newOpenState = [...isOpen1];
    newOpenState[index] = !newOpenState[index];
    setIsOpen1(newOpenState);
  };

  return (
    <div>
      <Header />
      <main>
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
                      /Paymember Ship
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="HelpView-title126">
            <h2>Paymember Ship</h2>
          </div>
        </div>
        <div className="memb4d25">
          <div className="PMMS-container">
            <div className="membership-container">
              <div className="membership-card">
                <div className="membership-title">
                  <div>
                    <h2>Baby Plan</h2>
                    <div className="membership-price">$49/month</div>
                    <div className="save-price">
                      Save $79 when paid annually
                    </div>
                  </div>
                  <img
                    className="Member-icon"
                    src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/icon-1.svg"
                    alt=""
                  />
                </div>
                <div className="membership-des">
                  <p>For instructors launching their first digital products.</p>
                </div>
                {/* <div className="accordion">
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Your own shop</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. VHS.
                    </div>
                  </details>
                  <details>
                    <summary>
                      <img src={check} alt="" className="Check-iocn" />
                      Online courses
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>
                  <details>
                    <summary>
                      <img src={check} alt="" className="Check-iocn" />
                      Email marketing
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.{" "}
                    </div>
                  </details>
                  <details>
                    <summary>
                      <img src={check} alt="" className="Check-iocn" />
                      Messaging
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.le VHS.
                    </div>
                  </details>
                  <details>
                    <summary>
                      <img src={check} alt="" className="Check-iocn" />
                      Zero charges comissions 10 sales
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>
                  <details>
                    <summary>
                      <img src={check} alt="" className="Check-iocn" />
                      7-days-a-week support
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.{" "}
                    </div>
                  </details>
                  <details className="panel-default-1">
                    <summary>
                      <img src={Closepaidment} alt="" className="Check-iocn" />
                      Memberships
                    </summary>
                  </details>
                  <details className="panel-default-1">
                    <summary>
                      <img src={Closepaidment} alt="" className="Check-iocn" />
                      Blog
                    </summary>
                  </details>
                  <details className="panel-default-1">
                    <summary>
                      <img src={Closepaidment} alt="" className="Check-iocn" />
                      Affiliate marketings
                    </summary>
                  </details>
                  <details className="panel-default-1">
                    <summary>
                      <img src={Closepaidment} alt="" className="Check-iocn" />
                      Third-party code
                    </summary>
                  </details>
                </div> */}
                {/* <div className="accordion">
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Your own shop</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. VHS.
                    </div>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Online courses</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Email marketing</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Messaging</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. le VHS.
                    </div>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Zero charges commissions 10 sales</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>7-days-a-week support</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img
                          src={Closepaidment}
                          alt=""
                          className="Check-icon"
                        />
                        <span>Memberships</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img
                          src={Closepaidment}
                          alt=""
                          className="Check-icon"
                        />
                        <span>Blog</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img
                          src={Closepaidment}
                          alt=""
                          className="Check-icon"
                        />
                        <span>Affiliate marketing</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                  </details>
                  <details onToggle={toggleDetails}>
                    <summary
                      className={`details-summary ${isOpen ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img
                          src={Closepaidment}
                          alt=""
                          className="Check-icon"
                        />
                        <span>Third-party code</span>
                      </div>
                      <span className="icon">{isOpen ? "−" : "✚"}</span>
                    </summary>
                  </details>
                </div> */}
                <div className="accordion">
                  <details open={isOpen[0]} onToggle={() => toggleDetails(0)}>
                    <summary
                      className={`details-summary ${isOpen[0] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Your own shop</span>
                      </div>
                      <span className="icon">{isOpen[0] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. VHS.
                    </div>
                  </details>

                  <details open={isOpen[1]} onToggle={() => toggleDetails(1)}>
                    <summary
                      className={`details-summary ${isOpen[1] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Online courses</span>
                      </div>
                      <span className="icon">{isOpen[1] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen[2]} onToggle={() => toggleDetails(2)}>
                    <summary
                      className={`details-summary ${isOpen[2] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Email marketing</span>
                      </div>
                      <span className="icon">{isOpen[2] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen[3]} onToggle={() => toggleDetails(3)}>
                    <summary
                      className={`details-summary ${isOpen[3] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Messaging</span>
                      </div>
                      <span className="icon">{isOpen[3] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. le VHS.
                    </div>
                  </details>

                  <details open={isOpen[4]} onToggle={() => toggleDetails(4)}>
                    <summary
                      className={`details-summary ${isOpen[4] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Zero charges commissions 10 sales</span>
                      </div>
                      <span className="icon">{isOpen[4] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen[5]} onToggle={() => toggleDetails(5)}>
                    <summary
                      className={`details-summary ${isOpen[5] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>7-days-a-week support</span>
                      </div>
                      <span className="icon">{isOpen[5] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen[6]} onToggle={() => toggleDetails(6)}>
                    <summary
                      className={`details-summary1 ${isOpen[6] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img
                          src={Closepaidment}
                          alt=""
                          className="Check-icon"
                        />
                        <span>Memberships</span>
                      </div>
                      {/* <span className="icon">{isOpen[6] ? "−" : "✚"}</span> */}
                    </summary>
                  </details>

                  <details open={isOpen[7]} onToggle={() => toggleDetails(7)}>
                    <summary
                      className={`details-summary1 ${isOpen[7] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img
                          src={Closepaidment}
                          alt=""
                          className="Check-icon"
                        />
                        <span>Blog</span>
                      </div>
                      {/* <span className="icon">{isOpen[7] ? "−" : "✚"}</span> */}
                    </summary>
                  </details>

                  <details open={isOpen[8]} onToggle={() => toggleDetails(8)}>
                    <summary
                      className={`details-summary1 ${isOpen[8] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img
                          src={Closepaidment}
                          alt=""
                          className="Check-icon"
                        />
                        <span>Affiliate marketing</span>
                      </div>
                      {/* <span className="icon">{isOpen[8] ? "−" : "✚"}</span> */}
                    </summary>
                  </details>

                  <details open={isOpen[9]} onToggle={() => toggleDetails(9)}>
                    <summary
                      className={`details-summary1 ${isOpen[9] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img
                          src={Closepaidment}
                          alt=""
                          className="Check-icon"
                        />
                        <span>Third-party code</span>
                      </div>
                      {/* <span className="icon">{isOpen[9] ? "−" : "✚"}</span> */}
                    </summary>
                  </details>
                </div>
                <button className="prmb_btn1">Purchase Membership</button>
              </div>
              <div className="membership-card">
                <div className="membership-title">
                  <div>
                    <h2>Business Plan</h2>
                    <div className="membership-price">$99/month</div>
                    <div className="save-price">
                      Save $189 when paid annually
                    </div>
                  </div>
                  <img
                    className="Member-icon"
                    src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/icon-2.svg"
                    alt=""
                  />
                </div>
                <div className="membership-des">
                  <p>For instructors who are ready to grow their business.</p>
                </div>
                <div className="accordion">
                  <details open={isOpen1[0]} onToggle={() => toggleDetails1(0)}>
                    <summary
                      className={`details-summary ${isOpen1[0] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Your own shop</span>
                      </div>
                      <span className="icon">{isOpen1[0] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. VHS.
                    </div>
                  </details>

                  <details open={isOpen1[1]} onToggle={() => toggleDetails1(1)}>
                    <summary
                      className={`details-summary ${isOpen1[1] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Online courses</span>
                      </div>
                      <span className="icon">{isOpen1[1] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen1[2]} onToggle={() => toggleDetails1(2)}>
                    <summary
                      className={`details-summary ${isOpen1[2] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Email marketing</span>
                      </div>
                      <span className="icon">{isOpen1[2] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen1[3]} onToggle={() => toggleDetails1(3)}>
                    <summary
                      className={`details-summary ${isOpen1[3] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Messaging</span>
                      </div>
                      <span className="icon">{isOpen1[3] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. le VHS.
                    </div>
                  </details>

                  <details open={isOpen1[4]} onToggle={() => toggleDetails1(4)}>
                    <summary
                      className={`details-summary ${isOpen1[4] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Zero charges commissions 10 sales</span>
                      </div>
                      <span className="icon">{isOpen1[4] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen1[5]} onToggle={() => toggleDetails1(5)}>
                    <summary
                      className={`details-summary ${isOpen1[5] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>7-days-a-week support</span>
                      </div>
                      <span className="icon">{isOpen1[5] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen1[6]} onToggle={() => toggleDetails1(6)}>
                    <summary
                      className={`details-summary ${isOpen1[6] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Memberships</span>
                      </div>
                      <span className="icon">{isOpen1[6] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen1[7]} onToggle={() => toggleDetails1(7)}>
                    <summary
                      className={`details-summary ${isOpen1[7] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Memberships</span>
                      </div>
                      <span className="icon">{isOpen1[7] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen1[8]} onToggle={() => toggleDetails1(8)}>
                    <summary
                      className={`details-summary ${isOpen1[8] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Affiliate marketing</span>
                      </div>
                      <span className="icon">{isOpen1[8] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>

                  <details open={isOpen1[9]} onToggle={() => toggleDetails1(9)}>
                    <summary
                      className={`details-summary ${isOpen1[9] ? "open" : ""}`}
                    >
                      <div className="left-content">
                        <img src={check} alt="" className="Check-icon" />
                        <span>Third-party code</span>
                      </div>
                      <span className="icon">{isOpen1[9] ? "−" : "✚"}</span>
                    </summary>
                    <div className="panel-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </div>
                  </details>
                </div>

                <button className="prmb_btn">Purchase Membership</button>
              </div>
            </div>

            <div className="Paidmember1-grid-container">
              <div className="title-section">
                <h2>Membership FAQ</h2>
                <p>Wait, what about…</p>
              </div>
              <div className="faq-section">
                <details className="faq-item">
                  <summary>Is it easy to change plans?</summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.le VHS.
                  </div>
                </details>
                <details className="faq-item">
                  <summary>Can I cancel at any time?</summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </div>
                </details>

                <details className="faq-item">
                  <summary>Are there any credit card or PayPal fees?</summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    Do I have to choose my plan before I start my trial?
                  </summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </div>
                </details>

                <details className="faq-item">
                  <summary>Edututs+ isn’t for me. Can I have a refund?</summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </div>
                </details>

                <details className="faq-item">
                  <summary>How do I get my money? </summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </div>
                </details>

                <details className="faq-item">
                  <summary>Do I need a credit card to sign up?</summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    Is Edututs+ safe and secure for online transactions?
                  </summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </div>
                </details>

                <details className="faq-item">
                  <summary>I still have questions. HELP!</summary>
                  <div className="panel-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
