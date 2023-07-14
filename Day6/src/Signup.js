import React, { useState } from 'react';
import './Signup.css';

import {Link} from "react-router-dom"
const SignupPage = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleupSubmit = (event) => {
      event.preventDefault();
     alert.window("Account Created Successfully");
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
    <div className='Total'>
    <div className="signup-page">
      
      <div className="signup-section">
        
        <h3 className='word'>Join us to feel the music you Love</h3>
       
      </div>
    <div className="signup1-page">
      <div className="signup-container">
      <h2>Hey New Listener 👋</h2>
         <form onSubmit={handleupSubmit}>
           <input
            type="text"
            className='signupinput'
            placeholder="Your Name Please!😀"
            value={name}
            onChange={handleNameChange}
            required
          />
         <input
            type="email"
            className='signupinput'
            placeholder="Email📮"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            className='signupinput'
            placeholder="Password 🫣"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <button type="submit" className='signupbutton'><Link to="Signin">Sign Up</Link></button>
          
        </form>
      </div>
    </div>
    </div>
    
    </div>
  );
};

export default SignupPage;