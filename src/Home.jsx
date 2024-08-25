import React from 'react';
import './Home.css';
import videoBg from './videoBg.mp4';
import Logo from './logo.png';

function Home() {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='navbar'>
        <div className='navbar-left'>
          <img src={Logo} alt="Logo" className='logo' />
        </div>
        <div className='navbar-right'>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Events</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      <div className='content'>
        <div className='text-container'>
          <h1 className='main-title'>MEKANIKA</h1>
          <h1 className='secondary-title'>
            <span className='border-left'></span>
            
            <span className='highlight'>
              
              <span className='border-right'></span>
            </span>
            <span className='border-left'></span>
          </h1>
          <div className='IITKGP'>
          <h2>IIT KHARAGPUR</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
