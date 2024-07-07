import React from "react";
import "./Payout.css";
import { LuWallet } from "react-icons/lu";
import { Link } from "react-router-dom";

const Payout = () => {
  return (
    <main className="payout">
      <div className="payout-wrapper">
        <div className="payout-title">
          <div className="payout-label">
            <div className="payout-icon">
              <LuWallet className="payout-wallet-icon" />
            </div>
            <h3 className="payout-payout">Payout</h3>
          </div>
        </div>

        <div className="payout-parent">
          <div className="payout-next-account-parent">
            <div className="payout-next-wrapper">
              <div className="payout-label-wrapper">
                <div className="payout-label">Next payout</div>
              </div>
              <div className="payout-via-wrapper">
                <div className="payout-coin">$4568.50</div>
                <div className="payout-via">via Payoneer</div>
              </div>
              <div className="payout-day-wrapper">
                <div className="payout-day">
                  Your payout will be processed on <span>April 15, 2020</span>
                </div>
              </div>
            </div>
            <div className="payout-account-wrapper">
              <div className="payout-label-wrapper">
                <div className="payout-label">Payout account</div>
              </div>
              <div className="payout-added-wrapper">
                <img
                  src="https://gambolthemes.net/html-items/cursus-new-demo/images/payoneer.svg"
                  alt=""
                  className="payout-image"
                />
                <div className="payout-added">
                  Added: <span>01 Mar 2020</span>
                </div>
              </div>
              
              <div className="payout-button-wrapper">
              <Link to='#'>             
                <button className="payout-button">Set Account</button>              
                </Link>
              </div>
              
            </div>
          </div>
          <div className="payout-table">
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
                  <td>$2550.54</td>
                  <td>Payoneer</td>
                  <td>15 Mar 2020</td>
                </tr>

                <tr>
                  <td>$1950.14</td>
                  <td>Payoneer</td>
                  <td>15 Feb 2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payout;
