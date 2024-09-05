import React from 'react';
import './Style.css';
import { ReactComponent as Logo } from '/Users/haris/Documents/Databillity/src/assets/Images/login-desktop-graphic.svg'; // Use a relative path

const Login = () => {
  return (
    <div className="container">
      <div className="left-side">
        <h1>DATABILLITY</h1>
        <form>
          <div className='email'>
            <label htmlFor="email">Email</label>
          </div>

          <input type="email" id="email" name="email" required />
          <div className='password'>
            <label htmlFor="password">Password</label>
            <a className='forget' href="#">Forgot Password</a>
          </div>
          <input type="password" id="password" name="password" required />

          <button type="submit">Log IN</button>
          <p className='signup'>Don't have an account? <a href="#">Sign Up</a></p>
        </form>
       
            <i className="continue"> or continue with Google
            <button type="button" className="google-btn">
        G
          </button>
          </i>
      </div>
      
      <div className="right-side">
        <Logo className="background-image" />
      </div>
    </div>
  );
};

export default Login;
