import React from 'react';
import './Home.css';


function Home() {
  return (
    <div>
        <video autoPlay loop muted className='background-clip'>
            <source src="./Final Mekanika bg" type="video/mp4"/>
        </video>
      <h1>Hi</h1>
    </div>
  );
}

export default Home;