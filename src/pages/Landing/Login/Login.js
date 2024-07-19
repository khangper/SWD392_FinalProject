import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import facebook from "../../../assets/facebook.png";
import x from "../../../assets/x.png";
import google from "../../../assets/google.png";
import emailIcon from "../../../assets/email.png";
import passwordIcon from "../../../assets/password.png";
import { AuthContext } from "../../../Router/AuthContext";
import { PATH_NAME } from "../../../constant/pathname";
const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
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
        <p className="login-banner">Log In to Your Cursus Account!</p>
        <button className="login-btn fb">
          <img className="btn-icon" alt="Facebook Icon" src={facebook} />
          Continue with Facebook
        </button>
        <button className="login-btn x">
          <img className="btn-icon" alt="X Icon" src={x} />
          Continue with X
        </button>
        <button className="login-btn google">
          <img className="btn-icon" alt="Google Icon" src={google} />
          Continue with Google
        </button>
        <form onSubmit={handleLogin}>
          <div className="login-input-wrapper">
            <img src={emailIcon} alt="Email" className="login-input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              className="login-input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-input-wrapper">
            <img
              src={passwordIcon}
              alt="Password"
              className="login-input-icon"
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className="login-btn sign-in">
            Sign In
          </button>
        </form>
        <div className="forgot-password-link">
          <span>Or</span>{" "}
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </div>
        <p className="sign-up">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
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
};

export default Login;
