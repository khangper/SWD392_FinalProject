import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="login-container">
      <div className="login-logo-container">
        <Link to='/home'>
          <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo.svg" alt="Cursus Logo" className="login-logo" />
        </Link>
      </div>
      <div className="login-form-container">
        <h2>Welcome Back</h2>
        <p className="login-banner">Sign Up and start learning</p>
        <div className="SignUp-input-wrapper">
          <input type="text" placeholder="Full Name" className="SignUp-input-field" />
        </div>
        <div className="SignUp-input-wrapper">
          <input type="email" placeholder="Email Address" className="SignUp-input-field" />
        </div>
        <div className="SignUp-input-wrapper">
          <input type="password" placeholder="Password" className="SignUp-input-field" />
        </div>
        <div className="remember-meSignUp">
          <input type="checkbox" id="emailOptIn" />
          <label htmlFor="emailOptIn" className="Label-signup">
            I’m in for emails with exciting discounts and personalized recommendations
          </label>
        </div>
        <Link to="/StepSignUp">
          <button className="loginSingUp-btn" type="submit">Next</button>
        </Link>
        <p className="By-signingup">
          By signing up, you agree to our <a href="terms_of_use.html">Terms of Use</a> and <a href="terms_of_use.html">Privacy Policy</a>.
        </p>
        <p className="mb-0 mt-30">
          Already have an account? <Link to="/Login" className="LoginMove">Log In</Link>
        </p>
      </div>
      <div className="form-footer">
        <img alt="" className="footer-logo" src="https://gambolthemes.net/html-items/cursus-new-demo/images/sign_logo.png"></img>
        <span>© 2024 <strong>Cursus</strong>. All Rights Reserved.</span>
      </div>
    </div>
  );
}
