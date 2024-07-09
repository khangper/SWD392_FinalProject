import React, { useState } from "react";
import Header from "../../components/Header-paidmember/Header";
import { Link } from "react-router-dom";
import Block1 from "..//../assets/Block1.png";
import Footer from "../../components/Footer/Footer";
import { PATH_NAME } from "../../constant/pathname";
import "./Checkout.css";
export default function Checkout() {
  const [selectedCountry, setSelectedCountry] = useState("1");

  const handleChangeselect = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [name, setName] = useState("Joginder");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const [activeTab, setActiveTab] = useState("credit-method-tab"); // State để lưu trữ tab đang active

  const openTab = (tabId) => {
    setActiveTab(tabId); // Hàm mở tab
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
              <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg" />
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
                    <form>
                      <div className="grid-container">
                        <div className="Gridcheckout">
                          <div className="ui search focus mt-30 lbel25">
                            <label>First Name*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="name"
                                defaultValue="Joginder"
                                id="id_name"
                                required
                                onChange={handleChange}
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Add other form fields here */}
                        <div className="Gridcheckout">
                          <div className="ui search focus mt-30 lbel25">
                            <label>Last Name*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="surname"
                                defaultValue="Singh"
                                id="id_surname"
                                required
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
                                name="academyname"
                                defaultValue="Gambolthemes"
                                id="id_academy"
                                required
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
                          <select
                            className="selectpicker-checkout"
                            title="Select Country"
                            data-size="7"
                            value={selectedCountry}
                            onChange={handleChangeselect}
                          >
                            <option value="1">Afghanistan</option>
                            <option value="2">Albania</option>
                            <option value="3">Algeria</option>
                            <option value="4">American Samoa</option>
                            <option value="5">Andorra</option>
                            <option value="6">Angola</option>
                            <option value="7">Anguilla</option>
                            <option value="8">Antarctica</option>
                            <option value="9">Antigua and Barbuda</option>
                            <option value="10">Argentina</option>
                            <option value="11">Armenia</option>
                            <option value="12">Aruba</option>
                            <option value="13">Australia</option>
                            <option value="14">Austria</option>
                            <option value="15">Azerbaijan</option>
                            <option value="16">Bahamas</option>
                            <option value="17">Bahrain</option>
                            <option value="18">Bangladesh</option>
                            <option value="19">Barbados</option>
                            <option value="20">Belarus</option>
                            <option value="21">Belgium</option>
                            <option value="22">Belize</option>
                            <option value="23">Benin</option>
                            <option value="24">Bermuda</option>
                            <option value="25">Bhutan</option>
                            <option value="26">Bolivia</option>
                            <option value="27">Bosnia and Herzegovina</option>
                            <option value="28">Botswana</option>
                            <option value="29">Bouvet Island</option>
                            <option value="30">Brazil</option>
                            <option value="31">
                              British Indian Ocean Territory
                            </option>
                            <option value="32">Brunei Darussalam</option>
                            <option value="33">Bulgaria</option>
                            <option value="34">Burkina Faso</option>
                            <option value="35">Burundi</option>
                            <option value="36">Cambodia</option>
                            <option value="37">Cameroon</option>
                            <option value="38">Canada</option>
                            <option value="39">Cape Verde</option>
                            <option value="40">Cayman Islands</option>
                            <option value="41">Central African Republic</option>
                            <option value="42">Chad</option>
                            <option value="43">Chile</option>
                            <option value="44">China</option>
                            <option value="45">Christmas Island</option>
                            <option value="46">Cocos (Keeling) Islands</option>
                            <option value="47">Colombia</option>
                            <option value="48">Comoros</option>
                            <option value="49">Congo</option>
                            <option value="50">Cook Islands</option>
                            <option value="51">Costa Rica</option>
                            <option value="52">Croatia (Hrvatska)</option>
                            <option value="53">Cuba</option>
                            <option value="54">Cyprus</option>
                            <option value="55">Czech Republic</option>
                            <option value="56">Denmark</option>
                            <option value="57">Djibouti</option>
                            <option value="58">Dominica</option>
                            <option value="59">Dominican Republic</option>
                            <option value="60">East Timor</option>
                            <option value="61">Ecuador</option>
                            <option value="62">Egypt</option>
                            <option value="63">El Salvador</option>
                            <option value="64">Equatorial Guinea</option>
                            <option value="65">Eritrea</option>
                            <option value="66">Estonia</option>
                            <option value="67">Ethiopia</option>
                            <option value="68">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="69">Faroe Islands</option>
                            <option value="70">Fiji</option>
                            <option value="71">Finland</option>
                            <option value="72">France</option>
                            <option value="73">France, Metropolitan</option>
                            <option value="74">French Guiana</option>
                            <option value="75">French Polynesia</option>
                            <option value="76">
                              French Southern Territories
                            </option>
                            <option value="77">Gabon</option>
                            <option value="78">Gambia</option>
                            <option value="79">Georgia</option>
                            <option value="80">Germany</option>
                            <option value="81">Ghana</option>
                            <option value="82">Gibraltar</option>
                            <option value="83">Guernsey</option>
                            <option value="84">Greece</option>
                            <option value="85">Greenland</option>
                            <option value="86">Grenada</option>
                            <option value="87">Guadeloupe</option>
                            <option value="88">Guam</option>
                            <option value="89">Guatemala</option>
                            <option value="90">Guinea</option>
                            <option value="91">Guinea-Bissau</option>
                            <option value="92">Guyana</option>
                            <option value="93">Haiti</option>
                            <option value="94">
                              Heard and Mc Donald Islands
                            </option>
                            <option value="95">Honduras</option>
                            <option value="96">Hong Kong</option>
                            <option value="97">Hungary</option>
                            <option value="98">Iceland</option>
                            <option value="99">India</option>
                            <option value="100">Isle of Man</option>
                            <option value="101">Indonesia</option>
                            <option value="102">
                              Iran (Islamic Republic of)
                            </option>
                            <option value="103">Iraq</option>
                            <option value="104">Ireland</option>
                            <option value="105">Israel</option>
                            <option value="106">Italy</option>
                            <option value="107">Ivory Coast</option>
                            <option value="108">Jersey</option>
                            <option value="109">Jamaica</option>
                            <option value="110">Japan</option>
                            <option value="111">Jordan</option>
                            <option value="112">Kazakhstan</option>
                            <option value="113">Kenya</option>
                            <option value="114">Kiribati</option>
                            <option value="115">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="116">Korea, Republic of</option>
                            <option value="117">Kosovo</option>
                            <option value="118">Kuwait</option>
                            <option value="119">Kyrgyzstan</option>
                            <option value="120">
                              Lao People's Democratic Republic
                            </option>
                            <option value="121">Latvia</option>
                            <option value="122">Lebanon</option>
                            <option value="123">Lesotho</option>
                            <option value="124">Liberia</option>
                            <option value="125">Libyan Arab Jamahiriya</option>
                            <option value="126">Liechtenstein</option>
                            <option value="127">Lithuania</option>
                            <option value="128">Luxembourg</option>
                            <option value="129">Macau</option>
                            <option value="130">Macedonia</option>
                            <option value="131">Madagascar</option>
                            <option value="132">Malawi</option>
                            <option value="133">Malaysia</option>
                            <option value="134">Maldives</option>
                            <option value="135">Mali</option>
                            <option value="136">Malta</option>
                            <option value="137">Marshall Islands</option>
                            <option value="138">Martinique</option>
                            <option value="139">Mauritania</option>
                            <option value="140">Mauritius</option>
                            <option value="141">Mayotte</option>
                            <option value="142">Mexico</option>
                            <option value="143">
                              Micronesia, Federated States of
                            </option>
                            <option value="144">Moldova, Republic of</option>
                            <option value="145">Monaco</option>
                            <option value="146">Mongolia</option>
                            <option value="147">Montenegro</option>
                            <option value="148">Montserrat</option>
                            <option value="149">Morocco</option>
                            <option value="150">Mozambique</option>
                            <option value="151">Myanmar</option>
                            <option value="152">Namibia</option>
                            <option value="153">Nauru</option>
                            <option value="154">Nepal</option>
                            <option value="155">Netherlands</option>
                            <option value="156">Netherlands Antilles</option>
                            <option value="157">New Caledonia</option>
                            <option value="158">New Zealand</option>
                            <option value="159">Nicaragua</option>
                            <option value="160">Niger</option>
                            <option value="161">Nigeria</option>
                            <option value="162">Niue</option>
                            <option value="163">Norfolk Island</option>
                            <option value="164">
                              Northern Mariana Islands
                            </option>
                            <option value="165">Norway</option>
                            <option value="166">Oman</option>
                            <option value="167">Pakistan</option>
                            <option value="168">Palau</option>
                            <option value="169">Panama</option>
                            <option value="170">Papua New Guinea</option>
                            <option value="171">Paraguay</option>
                            <option value="172">Peru</option>
                            <option value="173">Philippines</option>
                            <option value="174">Pitcairn</option>
                            <option value="175">Poland</option>
                            <option value="176">Portugal</option>
                            <option value="177">Puerto Rico</option>
                            <option value="178">Qatar</option>
                            <option value="179">Reunion</option>
                            <option value="180">Romania</option>
                            <option value="181">Russian Federation</option>
                            <option value="182">Rwanda</option>
                            <option value="183">Saint Kitts and Nevis</option>
                            <option value="184">Saint Lucia</option>
                            <option value="185">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="186">Samoa</option>
                            <option value="187">San Marino</option>
                            <option value="188">Sao Tome and Principe</option>
                            <option value="189">Saudi Arabia</option>
                            <option value="190">Senegal</option>
                            <option value="191">Serbia</option>
                            <option value="192">Seychelles</option>
                            <option value="193">Sierra Leone</option>
                            <option value="194">Singapore</option>
                            <option value="195">Slovak Republic</option>
                            <option value="196">Slovenia</option>
                            <option value="197">Solomon Islands</option>
                            <option value="198">Somalia</option>
                            <option value="199">South Africa</option>
                            <option value="200">
                              South Georgia & South Sandwich Islands
                            </option>
                            <option value="201">Spain</option>
                            <option value="202">Sri Lanka</option>
                            <option value="203">St. Helena</option>
                            <option value="204">St. Pierre and Miquelon</option>
                            <option value="205">Sudan</option>
                            <option value="206">Suriname</option>
                            <option value="207">
                              Svalbard and Jan Mayen Islands
                            </option>
                            <option value="208">Swaziland</option>
                            <option value="209">Sweden</option>
                            <option value="210">Switzerland</option>
                            <option value="211">Syrian Arab Republic</option>
                            <option value="212">Taiwan</option>
                            <option value="213">Tajikistan</option>
                            <option value="214">
                              Tanzania, United Republic of
                            </option>
                            <option value="215">Thailand</option>
                            <option value="216">Togo</option>
                            <option value="217">Tokelau</option>
                            <option value="218">Tonga</option>
                            <option value="219">Trinidad and Tobago</option>
                            <option value="220">Tunisia</option>
                            <option value="221">Turkey</option>
                            <option value="222">Turkmenistan</option>
                            <option value="223">
                              Turks and Caicos Islands
                            </option>
                            <option value="224">Tuvalu</option>
                            <option value="225">Uganda</option>
                            <option value="226">Ukraine</option>
                            <option value="227">United Arab Emirates</option>
                            <option value="228">United Kingdom</option>
                            <option value="229">United States</option>
                            <option value="230">Uruguay</option>
                            <option value="231">Uzbekistan</option>
                            <option value="232">Vanuatu</option>
                            <option value="233">
                              Vatican City State (Holy See)
                            </option>
                            <option value="234">Venezuela</option>
                            <option value="235">Viet Nam</option>
                            <option value="236">
                              Virgin Islands (British)
                            </option>
                            <option value="237">Virgin Islands (U.S.)</option>
                            <option value="238">
                              Wallis and Futuna Islands
                            </option>
                            <option value="239">Western Sahara</option>
                            <option value="240">Yemen</option>
                            <option value="241">Yugoslavia</option>
                            <option value="242">Zambia</option>
                            <option value="243">Zimbabwe</option>
                          </select>
                        </div>
                        <div className="Gridcheckout">
                          <div className="ui search focus mt-30 lbel25">
                            <label>Postal Code*</label>
                            <div className="ui left icon input swdh11 swdh19">
                              <input
                                className="prompt srch_explore"
                                type="text"
                                name="postalcode"
                                defaultValue="302012"
                                id="id_postalcode"
                                required
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
                                defaultValue="Jaipur"
                                id="id_city"
                                required
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
                                defaultValue="B-778, JMD, Sitapura, Near Genpact"
                                id="id_address1"
                                required
                                onChange={handleChange}
                                placeholder="Address Line 1"
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
                                defaultValue=""
                                id="id_address2"
                                onChange={handleChange}
                                placeholder="Address Line 2"
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
              Joginder Singh
              <br />
              #1234 Street No. 45, Ward No. 60, Phase 3,
              <br /> Shahid Karnail Singh Nagar, Near Pakhowal
              <br /> Road.
              <br />
              Ludhiana, Punjab, 141013
              <br />
              India
            </div>
          </div>

          <div className="Billing-Details">
            <div className="Select-Payment-Method ">
              <div className="checkout_titie">
                <h4>Select Payment Method</h4>
                <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg" />
              </div>

              <div className="Select-custom-tabs-container">
                <ul className="Select-custom-tabs-nav" role="tablist">
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

            <div className="OrderDetail ">
              <div className="checkout_titie">
                <h4>Order Detail</h4>
                <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/line.svg" />
              </div>

              <div className="order_dt_section">
                <div className="order_title">
                  <h4>Baby Plan</h4>
                  <div className="order_price">$49</div>
                </div>
                <div className="order_title">
                  <h6>Taxes(GST)</h6>
                  <div className="order_price">$2</div>
                </div>
                <div className="order_title">
                  <h3>Total</h3>
                  <div className="order_price">$51</div>
                </div>
                <Link to={PATH_NAME.INVOICE}>
                  <button className="chckot_btn" type="submit">
                    Confirm Checkout
                  </button>
                </Link>
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
                <div className="order_price">$49</div>
              </div>
              <div className="order_title">
                <h6>Taxes(GST)</h6>
                <div className="order_price">$2</div>
              </div>
              <div className="order_title">
                <h2>Total</h2>
                <div className="order_price">$51</div>
              </div>

              <div className="scr_text">
                {/* <img src={Block1} alt="Secure Checkout Icon" className="block-icon-page" /> */}
                Secure checkout
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
