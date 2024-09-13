import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/Actions/Auth/authActions';
import './Style.css';
import { ReactComponent as BackgroundImage } from '../../assets/Images/login-desktop-graphic.svg';
import { ReactComponent as GoogleIcon } from '../../assets/Images/google-icon.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error, userId } = useSelector((state) => state.auth);

    // Redirect to dashboard if authenticated
    console.log('userId==', userId);
    useEffect(() => {
        if (userId) {
            navigate('/dashboard');
        }
    }, [userId, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
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
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required 
                                />
                            </div>

                            <div className="password">
                                <label htmlFor="password">Password</label>
                                <a className="forget" href="#">Forgot Password</a>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    required 
                                />
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

                            <button type="submit" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Logging in...' : 'Login'}
                            </button>
                            {error && <p className="error">{error}</p>}
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
