import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { PATH_NAME } from "../../../constant/pathname";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(name)) {
      setNameError("Name cannot contain special characters.");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Invalid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setFullName(name);
    validateName(name);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    validateEmail(email);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    validatePassword(password, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    validatePassword(password, confirmPassword);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    const isNameValid = validateName(fullName);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password, confirmPassword);
    
    if (isNameValid && isEmailValid && isPasswordValid) {
      navigate(PATH_NAME.SIGN_UP_STEP, { state: { email, password } });
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo-container1">
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
        <form onSubmit={handleNextStep}>
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
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="SignUp-input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="SignUp-input-field"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="SignUp-input-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="SignUp-input-field"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <div className="remember-meSignUp">
            <input type="checkbox" id="emailOptIn" />
            <label htmlFor="emailOptIn" className="Label-signup">
              I’m in for emails with exciting discounts and personalized
              recommendations
            </label>
          </div>
          <button
            className="loginSingUp-btn"
            type="submit"
            disabled={nameError || emailError || passwordError ? true : false}
          >
            Next
          </button>
        </form>
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
