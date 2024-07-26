import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { PATH_NAME } from "../../../constant/pathname";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState("");

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(name)) {
      setNameError("Name cannot contain special characters.");
    } else {
      setNameError("");
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setFullName(name);
    validateName(name);
  };

  return (
    <div className="login-container">
      <div className="login-logo-container">
        <Link to={PATH_NAME.HOME}>
          <img
            src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg"
            alt="Cursus Logo"
            className="login-logo"
          />
        </Link>
      </div>
      <div className="login-form-container">
        <h2>Welcome Back</h2>
        <p className="login-banner">Sign Up and start learning</p>
        <div className="SignUp-input-wrapper">
          <input
            type="text"
            placeholder="Full Name"
            className="SignUp-input-field"
            value={fullName}
            onChange={handleNameChange}
          />
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="SignUp-input-wrapper">
          <input
            type="email"
            placeholder="Email Address"
            className="SignUp-input-field"
          />
        </div>
        <div className="SignUp-input-wrapper">
          <input
            type="password"
            placeholder="Password"
            className="SignUp-input-field"
          />
        </div>
        <div className="remember-meSignUp">
          <input type="checkbox" id="emailOptIn" />
          <label htmlFor="emailOptIn" className="Label-signup">
            I’m in for emails with exciting discounts and personalized
            recommendations
          </label>
        </div>
        <Link to={nameError ? "#" : PATH_NAME.SIGN_UP_STEP}>
          <button
            className="loginSingUp-btn"
            type="submit"
            disabled={nameError ? true : false}
          >
            Next
          </button>
        </Link>
        <p className="By-signingup">
          By signing up, you agree to our{" "}
          <a href="terms_of_use.html">Terms of Use</a> and{" "}
          <a href="terms_of_use.html">Privacy Policy</a>.
        </p>
        <p className="mb-0 mt-30">
          Already have an account?{" "}
          <Link to={PATH_NAME.LOGIN} className="LoginMove">
            Log In
          </Link>
        </p>
      </div>
      <div className="form-footer">
        <img
          alt=""
          className="footer-logo"
          src="https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png"
        ></img>
        <span>
          © 2024 <strong>Cursus</strong>. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
