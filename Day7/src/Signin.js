import React, { useState } from 'react';
import './Signin.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google';
import {Link} from "react-router-dom"
import { FaInstagram,FaYoutube,FaTwitter, FaMobile } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
    console.log('Email:', email);
    // console.log('Password:', password);
  };

  return (
    <div>

    <div className='main' >
      <div className="login-page">
      <div className="company-section">
        <h1 className='Title'>MUCIFY</h1>
        <div className='Subtitle'>
        Love Listening!
        </div>
        <div className='footer'>
         <h3 className='rights'>@2023 All Rights Reserved   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="https://www.instagram.com/"><FaInstagram size={20} className='icon'/></a>&nbsp;&nbsp;
         <a href="https://www.twitter.com/"><FaTwitter size={20} className='icon' /></a>&nbsp;&nbsp;
         <a href="https://www.youtube.com/"><FaYoutube size={20} className='icon' /></a>&nbsp;&nbsp;
         </h3>
        </div>
      </div>
    <div className="login1-page">
      <div className="login-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            />
            <div className='box'>
           <input type='checkbox' className='box1' required></input>
           <h6 className='text1'>By clicking You accept Our <a href='https://media.tenor.com/cGTlF3RWmV8AAAAC/endha-payanum-illa-dmk-stalin-meme.gif'>Privacy Policy</a>
           </h6>
           </div>
          <button type="submit"><Link to ='Home'>Log In</Link></button>
          <h4>------------- or ----------------</h4>
          <GoogleOAuthProvider clientId="860294895690-hr7eapradl423793dpqkkiva1k954m49.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>  <br/>
         
          <button type="submit" className='continue'><FaMobile className='music'/>  Continue with Number</button>
          <br /><br />
        </form>
        <br />
          <h5 className='newuser'>New Listener?</h5>
          <button type="button"><Link to="signup">Create new Account</Link></button></div>  
      </div>
      <div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default LoginPage;