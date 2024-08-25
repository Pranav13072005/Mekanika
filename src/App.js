import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import gear from './gear.svg';
import Home from './Home';
import About from './About';
import Events from './Events';
// import Contact from './Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
      loader.style.display = 'none'; // Hide the loader after 4 seconds
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <div>
      <div className="loader" id="loader">
        <div className="gear-box">
          <img src={gear} alt="gear" className="gear1" />
          <img src={gear} alt="gear" className="gear2" />
        </div>
        <div className="gear-box box1">
          <img src={gear} alt="gear" className="gear1" />
          <img src={gear} alt="gear" className="gear2" />
        </div>
        <div className="gear-box box2">
          <img src={gear} alt="gear" className="gear1" />
          <img src={gear} alt="gear" className="gear2" />
        </div>
        <p className="loading1">Loading..</p>
        <div className="progress-bar">
          <span className="bar">
            <span className="progress"></span>
          </span>
        </div>
      </div>
      {isLoaded && <Home text="Mechanical Engineering Association" />}
      <About/>
      <Events/>
      {/* <Contact /> */}
    </div>
  );
}

export default App;
