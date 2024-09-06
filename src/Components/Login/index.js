import React, { useState } from 'react';
import './Style.css';
import { ReactComponent as BackgroundImage } from '../../assets/Images/login-desktop-graphic.svg';
import { ReactComponent as GoogleIcon } from '../../assets/Images/google-icon.svg';

const Login = ({ onLogin }) => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        onLogin();
    };

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className='body-login'>
        <div className="container">
            <div className="left-side">
                <h1>DATABILLITY</h1>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                        </div>
                        <input type="email" id="email" name="email" required />

                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <a className="forget" href="#">Forgot Password</a>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <div className="remember-me">
                            <input 
                                type="checkbox" 
                                id="remember-me" 
                                name="remember-me" 
                                checked={rememberMe} 
                                onChange={handleCheckboxChange} 
                            />
                            <label className='remember' htmlFor="remember-me">Remember information</label>
                        </div>

                        <button type="submit">Login</button>
                        <p className="signup">Don't have an account? <a className='signup-btn' href="#">Sign Up</a></p>
                    </form>

                    <div className="social-login">
                        <p className='continue'>or continue with</p>
                        <button type="button" className="google-btn">
                            <GoogleIcon className="google-icon" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <BackgroundImage className="background-image" />
            </div>
        </div>
        </div>
    );
};

export default Login;
