import React from "react";
import "./Invoice.css";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../constant/pathname";

const Invoice = () => {
  return (
    <div className="Invoice_Container">
      <div className="Invoice_Header">
        <div className="Invoice_Header_Item">
          <div className="Header_Logo">
            <Link to={PATH_NAME.HOME}>
              <img
                src="https://gambolthemes.net/html-items/cursus-new-demo/images/ct_logo.svg"
                alt=""
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
              <div className="vdt-list">#1234, Shahid karnail Singh Nagar,</div>
              <div className="vdt-list">Near MBD Mall,</div>
              <div className="vdt-list">141001</div>
              <div className="vdt-list">Ludhiana </div>
              <div className="vdt-list">Punjab </div>
              <div className="vdt-list">India </div>
            </div>
          </div>
        </div>
        <div className="Invoice_Table">
          <div className="tb_head">
            <p>Item</p>
            <p>Price</p>
            <p>Vat(20%)</p>
            <p>Total Amount</p>
          </div>
          <div className="user_dt_trans">
            <p>Item Tittle</p>
            <p>$79.00</p>
            <p>$10.00</p>
            <p>$89.00</p>
          </div>
          <div className="user_dt_trans jsk1145">
            <div className="totalinv2">Invoice Total : USD $220.00</div>
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
