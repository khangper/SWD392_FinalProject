import React from "react";
import "./Credit.css";
import { LuWallet } from "react-icons/lu";
import { Link } from "react-router-dom";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { Select } from "antd";

const Credit = () => {
  const { Option } = Select;
  return (
    <main className="credit">
      <div className="credit-wrapper">
        <div className="credit-title">
          <div className="credit-label">
            <div className="credit-icon">
              <LuWallet className="credit-wallet-icon" />
            </div>
            <h3 className="credit-credit">Credits</h3>
          </div>
        </div>

        <div className="credit-parent">
          <div className="credit-next-account-parent">
            <div className="credit-next-wrapper">
              <div className="credit-label-wrapper">
                <div className="credit-label">Added Credits</div>
              </div>
              <div className="credit-via-wrapper">
                <div className="credit-coin">$100</div>
                <div className="credit-via">via Mastercard</div>
              </div>
              <div className="credit-day-wrapper">
                <div className="credit-day">
                  Your credits will be using on <span>purchase courses</span>
                </div>
              </div>
            </div>
            <div className="credit-account-wrapper">
              <div className="credit-label-wrapper">
                <div className="credit-label">Saved Cards</div>
              </div>
              <div className="credit-added-wrapper">
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/Mastercard.svg"
                  alt=""
                  className="credit-image"
                />
                <div className="credit-added">
                  Added: <span>25 Mar 2020</span>
                </div>
              </div>

              <div className="credit-button-wrapper">
                <Link to="#">
                  <button className="credit-button">Change Card</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="credit-table-parent">
            <div className="credit-add-credit">
              <div className="credit-label-wrapper">
                <div className="credit-label">Add Credit Balance</div>
              </div>
              <div className="credit-input-parent">
                <div className="credit-add-balance">
                  <label htmlFor="addbalance">Add Balance</label>
                  <div className="credit-icon-input">
                    <button className="credit-button-dollar">
                      <PiCurrencyDollarLight className="credit-icon-dollar" />
                    </button>
                    <input
                      type="text"
                      className="credit-input"
                      id="addbalance"
                      name="addbalance"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="credit-holder-card">
                  <div className="credit-label-input">
                    <label htmlFor="holdername">Holder Name</label>
                    <input
                      type="text"
                      id="holdername"
                      name="holdername"
                      placeholder="Enter Holder Name"
                    />
                  </div>
                  <div className="credit-label-input">
                    <label htmlFor="cardnumber">Card Number</label>
                    <input
                      type="text"
                      name="cardname"
                      id="cardname"
                      placeholder="Card #"
                    />
                  </div>
                </div>
                <div className="credit-expiration-parent">
                  <div className="credit-label-select">
                    <label htmlFor="">Expiration Month</label>
                    <Select
                      className="credit-select-month"
                      placeholder="Month"
                      style={{ color: "lightgray" }}
                    >
                      <Option value="jan">January</Option>
                      <Option value="feb">February</Option>
                      <Option value="mar">March</Option>
                      <Option value="apr">April</Option>
                      <Option value="may">May</Option>
                      <Option value="jun">June</Option>
                      <Option value="jul">July</Option>
                      <Option value="aug">August</Option>
                      <Option value="sep">September</Option>
                      <Option value="oct">October</Option>
                      <Option value="nov">November</Option>
                      <Option value="dec">December</Option>
                    </Select>
                  </div>
                  <div className="credit-label-input">
                    <label htmlFor="year">Expiration Year</label>
                    <input
                      type="text"
                      name="year"
                      id="year"
                      placeholder="Year"
                    />
                  </div>
                  <div className="credit-label-input">
                    <label htmlFor="cvc">Expiration Year</label>
                    <input type="text" name="cvc" id="cvc" placeholder="CVC" />
                  </div>
                </div>

                <div className="credit-button-wrappers">
                  <button className="credit-add-credit-button" type="submit">
                    Add Credit
                  </button>
                </div>
              </div>
            </div>

            <div className="credit-table">
              <table>
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Payout Method</th>
                    <th>Date Processed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>$50.50</td>
                    <td>Mastercard</td>
                    <td>15 Mar 2020</td>
                  </tr>

                  <tr>
                    <td>$50.50</td>
                    <td>Mastercard</td>
                    <td>15 Feb 2020</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Credit;
