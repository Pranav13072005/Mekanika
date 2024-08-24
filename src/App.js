import React, { useEffect } from 'react';
import './App.css';
import gear from './gear.svg';
import Home from './Home';

function App() {
  useEffect(() => {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
      loader.style.display = 'none'; // Hide the loader after 4 seconds
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
      <div>
        <Home text="Mechanical Engineering Association"/>
      </div>
    </div>
  );
}

export default App;
