import React, { useState } from "react";
import Header from "../../components/Header-paidmember/Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Block1 from "..//../assets/Block1.png";
import Footer from "../../components/Footer/Footer";
import { PATH_NAME } from "../../constant/pathname";
import "./Checkout.css";
export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { total } = location.state || { total: 0 };
  const GTX = total * 0.2;
  const originalPrice = total + GTX;

  const [selectedCountry, setSelectedCountry] = useState("1");
  const [activeTab, setActiveTab] = useState("credit-method-tab");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const [formData, setFormData] = useState({
    firstName: "Joginder",
    lastName: "Singh",
    academyName: "Gambolthemes",
    country: "India",
    postalCode: "302012",
    city: "Jaipur",
    address1: "B-778, JMD, Sitapura, Near Genpact",
    address2: "",
  });

  const [addressText, setAddressText] = useState(`
    Joginder Singh
    #1234 Street No. 45, Ward No. 60, Phase 3,
    Shahid Karnail Singh Nagar, Near Pakhowal
    Road.
    Ludhiana, Punjab, 141013
    India
  `);

  const [name, setName] = useState("Joginder");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeselect = (e) => {
    setFormData({
      ...formData,
      country: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressText(`
      ${formData.firstName} ${formData.lastName}
      ${formData.address1}${formData.address2 ? ", " + formData.address2 : ""}
      ${formData.city}, ${formData.country}, ${formData.postalCode}
    `);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleInvoice = () => {
    navigate(PATH_NAME.INVOICE, {
      state: {
        originalPrice: originalPrice,
        address: addressText,
      },
    });
  };

  return (
    <div className="CheckoutPage">
      <Header />

      <div className="Checkoutfix-grid-container">
        <div className="HelpView-title125">
          <div className="HelpView-titleleft">
            <div className="HelpView-ttl121">
              <nav aria-label="breadcrumb">
                <ol className="HelpView-breadcrumb">
                  <li className="HelpView-breadcrumb-item">
                    <Link to={PATH_NAME.HOME}>Home</Link>
                  </li>

                  <li
                    className="HelpView-breadcrumb-item active"
                    aria-current="page"
                  >
                    /Paidmember ship/ Checkout
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="HelpView-title126">
          <h2>Checkout</h2>
        </div>
      </div>

      {/* Body-Checkout */}

      <div className="Checkout-Container">
        <div className="Billing-Details-GridContainer">
          <div className="Billing-Details">
            <div className="checkout_titie">
              <h4>Billing Details</h4>
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg"
                alt="line"
              />
            </div>

            <div className="panel-group">
              <div className=" panel-default">
                <div
                  className="panel-heading-checkout"
                  onClick={toggleDropdown}
                >
                  <span className="edit-title">Edit Address</span>
                  <span className="edit-icon">{isOpen ? "−" : "✚"}</span>
                </div>
                <div className={`panel-collapse ${isOpen ? "show" : ""}`}>
                  <div className="panel-body basic_form">
                    <form onSubmit={handleSubmit}>
                      <div className="grid-container">
                        <div className="Gridcheckout">
                          <div className="ui search focus mt-30 lbel25">
                            <label>First Name*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="Gridcheckout">
                          <div className="ui search focus mt-30 lbel25">
                            <label>Last Name*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="Gridcheckout-full">
                          <div className="ui search focus mt-30 lbel25">
                            <label>Academy Name*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="academyName"
                                value={formData.academyName}
                                onChange={handleChange}
                                placeholder="Academy Name"
                              />
                            </div>
                            <div className="help-block">
                              If you want your invoices addressed to an academy,
                              leave blank to use your full name.
                            </div>
                          </div>
                        </div>

                        <div className="Gridcheckout-full">
                          <div className="mt-30 lbel25">
                            <label>Country*</label>
                          </div>
                          <input
                            className="prompt srch_explore"
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                          />
                        </div>

                        <div className="Gridcheckout">
                          <div className="ui search focus mt-30 lbel25">
                            <label>Postal Code*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                placeholder="Postal Code"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="Gridcheckout">
                          <div className="ui search focus mt-30 lbel25">
                            <label>City*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="Gridcheckout-full">
                          <div className="ui search focus mt-30 lbel25">
                            <label>Address Line 1*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="address1"
                                value={formData.address1}
                                onChange={handleChange}
                                placeholder="Address 1"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="Gridcheckout-full">
                          <div className="ui search focus mt-30 lbel25">
                            <label>Address Line 2</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="address2"
                                value={formData.address2}
                                onChange={handleChange}
                                placeholder="Address 2"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="Gridcheckout-full">
                          <button className="save_address_btn" type="submit">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="address_text">
              {addressText.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="Billing-Details">
            <div className="Select-Payment-Method ">
              <div className="checkout_titie">
                <h4>Select Payment Method</h4>
                <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg" />
              </div>

              <div className="Select-custom-tabs-container">
                {/* <ul className="Select-custom-tabs-nav" role="tablist">
                  <li className="Select-custom-tabs-item">
                    <a
                      href="#credit-method-tab"
                      className={
                        activeTab === "credit-method-tab"
                          ? "Select-custom-tabs-link active"
                          : "Select-custom-tabs-link"
                      }
                      onClick={() => openTab("credit-method-tab")}
                    >
                      <i className="fa fa-credit-card"></i>
                      <br /> Credit/Debit Card
                    </a>
                  </li>
                  <li className="Select-custom-tabs-item">
                    <a
                      href="#bank-method-tab"
                      className={
                        activeTab === "bank-method-tab"
                          ? "Select-custom-tabs-link active"
                          : "Select-custom-tabs-link"
                      }
                      onClick={() => openTab("bank-method-tab")}
                    >
                      <i className="fa fa-university"></i>
                      <br /> Bank Transfer
                    </a>
                  </li>
                  <li className="Select-custom-tabs-item">
                    <a
                      href="#paypal-method-tab"
                      className={
                        activeTab === "paypal-method-tab"
                          ? "Select-custom-tabs-link active"
                          : "Select-custom-tabs-link"
                      }
                      onClick={() => openTab("paypal-method-tab")}
                    >
                      <i className="fa fa-paypal"></i>
                      <br /> Paypal
                    </a>
                  </li>
                </ul> */}
                <ul className="Select-custom-tabs-nav" role="tablist">
                  <li className="Select-custom-tabs-item">
                    <a
                      href="#"
                      className={
                        activeTab === "credit-method-tab"
                          ? "Select-custom-tabs-link active"
                          : "Select-custom-tabs-link"
                      }
                      onClick={() => openTab("credit-method-tab")}
                    >
                      <i className="fa fa-credit-card"></i>
                      <br /> Credit/Debit Card
                    </a>
                  </li>
                  <li className="Select-custom-tabs-item">
                    <a
                      href="#"
                      className={
                        activeTab === "bank-method-tab"
                          ? "Select-custom-tabs-link active"
                          : "Select-custom-tabs-link"
                      }
                      onClick={() => openTab("bank-method-tab")}
                    >
                      <i className="fa fa-university"></i>
                      <br /> Bank Transfer
                    </a>
                  </li>
                  <li className="Select-custom-tabs-item">
                    <a
                      href="#"
                      className={
                        activeTab === "paypal-method-tab"
                          ? "Select-custom-tabs-link active"
                          : "Select-custom-tabs-link"
                      }
                      onClick={() => openTab("paypal-method-tab")}
                    >
                      <i className="fa fa-paypal"></i>
                      <br /> Paypal
                    </a>
                  </li>
                </ul>

                <div className="custom-tabs-content">
                  <div
                    className={
                      activeTab === "credit-method-tab"
                        ? "Select-custom-tabs-pane active"
                        : "Select-custom-tabs-pane"
                    }
                    id="credit-method-tab"
                  >
                    <form className="basic_form">
                      <div className="gg-grid-container">
                        <div className="grid-item holder-card">
                          <div className="ui search focus lbel25">
                            <label>Holder Name</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="holder[name]"
                                id="id_holdername"
                                required
                                onChange={handleChange}
                                placeholder="Enter Holder Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid-item holder-card">
                          <div className="ui search focus lbel25">
                            <label>Card Number</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="card[number]"
                                onChange={handleChange}
                                placeholder="Card #"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="Ggg-grid-container">
                        <div className="grid-item expiration">
                          <div className="ui search focus lbel25">
                            <label>Expiration Month</label>
                            <select
                              className="selectpicker"
                              name="card[expire-month]"
                              data-size="5"
                              onChange={handleChange}
                            >
                              <option value="">Month</option>
                              <option value="1">January</option>
                              <option value="2">February</option>
                              <option value="3">March</option>
                              <option value="4">April</option>
                              <option value="5">May</option>
                              <option value="6">June</option>
                              <option value="7">July</option>
                              <option value="8">August</option>
                              <option value="9">September</option>
                              <option value="10">October</option>
                              <option value="11">November</option>
                              <option value="12">December</option>
                            </select>
                          </div>
                        </div>
                        <div className="grid-item expiration">
                          <div className="ui search focus lbel25">
                            <label>Expiration Year</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="card[expire-year]"
                                onChange={handleChange}
                                placeholder="Year"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid-item expiration">
                          <div className="ui search focus lbel25">
                            <label>CVC</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="card[cvc]"
                                onChange={handleChange}
                                placeholder="CVC"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className={
                      activeTab === "bank-method-tab"
                        ? "Select-custom-tabs-pane active"
                        : "Select-custom-tabs-pane"
                    }
                    id="bank-method-tab"
                  >
                    <form className="CheckoutCC-grid-container">
                      <div className="item">
                        <div className="ui search focus mt-30 lbel25">
                          <label>Account Holder Name</label>
                          <div className="ui left icon input swdh11 swdh19">
                            <input
                              className="prompt srch_explore"
                              type="text"
                              name="account[holdername]"
                              value=""
                              required=""
                              onChange={handleChange}
                              placeholder="Enter Your Full Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ui search focus mt-30 lbel25">
                          <label>Account Number</label>
                          <div className="ui left icon input swdh11 swdh19">
                            <input
                              className="prompt srch_explore"
                              type="text"
                              name="Account[number]"
                              onChange={handleChange}
                              placeholder="Enter Account Number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="lbel25 mt-30">
                          <label>Bank Name</label>
                          <select
                            className="ui hj145 dropdown cntry152 prompt srch_explore"
                            name="Bank[name]"
                            onChange={handleChange}
                          >
                            <option value="">State Bank of India</option>
                            <option value="1">Indian Bank</option>
                            <option value="2">ICICI Bank</option>
                            <option value="3">HDFC Bank</option>
                            <option value="4">Yes Bank</option>
                            <option value="5">Oriental Bank</option>
                            <option value="6">Punjab National Bank</option>
                          </select>
                        </div>
                      </div>
                      <div className="item">
                        <div className="ui search focus mt-30 lbel25">
                          <label>IFSC Code</label>
                          <div className="ui left icon input swdh11 swdh19">
                            <input
                              className="prompt srch_explore"
                              type="text"
                              name="IFSC[code]"
                              onChange={handleChange}
                              placeholder="Enter IFSC Code"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className={
                      activeTab === "paypal-method-tab"
                        ? "Select-custom-tabs-pane active"
                        : "Select-custom-tabs-pane"
                    }
                    id="paypal-method-tab"
                  >
                    <div className="Paypal-grid-container">
                      <div className="item">
                        <p className="t-body">
                          After payment via PayPal's secure checkout, we will
                          send you a link to download your files.
                        </p>
                        <div className="media h-mt2">
                          <div className="media__item -align-center">
                            <p className="t2-body h-m0">PayPal accepts</p>
                          </div>
                          <div className="media__body">
                            <ul
                              id="paypal-gateway"
                              className="financial-institutes"
                            >
                              <li className="financial-institutes__logo">
                                <img
                                  alt="Visa"
                                  title="Visa"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-1.svg"
                                />
                              </li>
                              <li className="financial-institutes__logo">
                                <img
                                  alt="MasterCard"
                                  title="MasterCard"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-2.svg"
                                />
                              </li>
                              <li className="financial-institutes__logo">
                                <img
                                  alt="American Express"
                                  title="American Express"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-3.svg"
                                />
                              </li>
                              <li className="financial-institutes__logo">
                                <img
                                  alt="Discover"
                                  title="Discover"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-4.svg"
                                />
                              </li>
                              <li className="financial-institutes__logo">
                                <img
                                  alt="China UnionPay"
                                  title="China UnionPay"
                                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/membership/pyicon-5.svg"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="OrderDetail">
              <div className="checkout_titie">
                <h4>Order Detail</h4>
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg"
                  alt="line"
                />
              </div>
              <div className="order_dt_section">
                <div className="order_title">
                  <h4>Baby Plan</h4>
                  <div className="order_price">${total.toFixed(2)}</div>
                </div>
                <div className="order_title">
                  <h6>Taxes(GST)</h6>
                  <div className="order_price">{GTX.toFixed(2)}</div>
                </div>
                <div className="order_title">
                  <h3>Total</h3>
                  <div className="order_price">${originalPrice.toFixed(2)}</div>
                </div>
                <button
                  onClick={handleInvoice}
                  className="chckot_btn"
                  type="submit"
                >
                  Confirm Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="OrderSumury-GridContainer">
          <div className="OrderSumury">
            <div className="checkout_titie">
              <h4>OrderSumury</h4>
              <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg" />
            </div>

            <div className="order_dt_section">
              <div className="order_title">
                <h4>Baby Plan</h4>
                <div className="order_price">${total.toFixed(2)}</div>
              </div>
              <div className="order_title">
                <h6>Taxes(GST)</h6>
                <div className="order_price">{GTX.toFixed(2)}</div>
              </div>
              <div className="order_title">
                <h2>Total</h2>
                <div className="order_price">${originalPrice.toFixed(2)}</div>
              </div>

              <div className="scr_text">Secure checkout</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
