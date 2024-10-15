import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import email from "../../../assets/email.png";
import hakaFull_logo from "../../../assets/Haka_Online_Learning_System_logo.png"

const ForgotPassword = () => {
  return (
    <div className="reset-container">
      <div className="reset-logo-container">
        <Link to="/home">
          <img
            src={hakaFull_logo}
            alt="Cursus Logo"
            className="reset-logo"
          />{" "}
        </Link>
      </div>
      <div className="reset-form-container">
        <h2>Request a Password Reset</h2>
        <div className="reset-input-wrapper">
          <img src={email} alt="Email" className="reset-input-icon" />
          <input
            type="email"
            placeholder="Email Address"
            className="reset-input-field"
          />
        </div>
        <button className="reset-btn reset-password">Reset Password</button>
        <div className="back-to-login">
          <p>Go Back</p>
          <Link to="/sign-in" className="sign-in-link">
            Sign In
          </Link>
        </div>
      </div>
      <div className="form-footer">
        <img
          alt=""
          src={hakaFull_logo}
          className="footer-logo"
        />
        <span>
          © 2024 <strong>Haka</strong>. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
