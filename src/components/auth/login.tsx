
// import { useState } from 'react';
import '../../assets/styles/auth/login.css'
import logo from '../../assets/images/logo.png';
import googleLogo from '../../assets/images/google.png';

export const Login = () => {


  return (
    <>
      <div className="main-content">
        <div className="wrapper">
          <div className="auth-wrapper">
            <div className="login-lg-wrapper">
              <div className="login-sm-wrapper">
                <div className="login-header">
                  <div className="login-header-logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <p>Sign up your account</p>
                </div>
                <div className="login-form">
                  <div className="form-group">
                    <input type="text" placeholder="Name*" id="name" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email*" id="email" />
                  </div>
                  <div className="form-group">
                    <input type="password" placeholder="Password*" id="password" />
                  </div>
                  <div className="sign-up-btn">
                    <button><p>SIGN UP</p></button>
                  </div>


                  <div className="social-login">
                    <div className="line-container">
                      <div className="line"></div>
                      <span>Or sign sign with</span>
                      <div className="line"></div>
                    </div>
                    <div className="google-logo">
                      <img src={googleLogo} alt="google-logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="welcome-wrapper">
            <h1>Welcome to Document Manager</h1>
            <h2>Enter your details to sign up</h2>
            <p>Already have an account:</p>
            <div className="sign-in-btn">
              <button><p>SIGN IN</p></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


