// import React from 'react';
// import './About.css';
// import AboutImage from './about-image.jpeg';

// function About () {
//     return (
//     //     <div className='about-container'>
//     //   <div className='about-content'>
//     //     <h1 className='title'>ABOUT US</h1>
//     //     <p className='text'>
//     //       Welcome to our About Us page! Here, we share the story behind our organization, our mission, and the values that drive us. Our team is passionate about delivering exceptional results and making a positive impact in our industry. With a dedicated group of professionals, we strive to exceed expectations and continually improve. We invite you to learn more about our journey and how we aim to make a difference.
//     //     </p>
//     //   </div>
//     //   <img src={AboutImage} alt="About Us" className='about-image' />
//     // </div>
//     <div className="container">
//       <div className="content">
//         <div className="background"></div>
//         <div className="title">
//           <span>React</span>
//           <span>Component</span>
//         </div>
//         <div className="description">
//           <p>Converting CodePen example to a React component.</p>
//         </div>
//       </div>
//     </div>
//     )
// }

// export default About;
import React,{useEffect} from 'react';
import './About.css';
import Img1 from './img1.jpg';
import Img2 from './img2.jpeg';
import Img3 from './img3.jpeg';

function About() {
    useEffect(() => {
        const interval = setInterval(() => {
          const radios = document.querySelectorAll('input[name="carousel"]');
          let selectedIndex = Array.from(radios).findIndex(radio => radio.checked);
          selectedIndex = (selectedIndex + 1) % radios.length;
          radios[selectedIndex].checked = true;
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
      }, []);
  return (
    <div className='lr-about-complete'>
      <div className='about_literature_review'>
        <div className='lr-title typewriter'>About <span id="us">Us</span></div>
        <div className="lr-about">
          {/* A literature review is a comprehensive summary and analysis of the existing research on a particular topic. It involves systematically identifying, evaluating, and synthesizing relevant scholarly articles, books, and other sources to provide an overview of current knowledge, identify gaps, and establish the context for new research. The literature review helps to frame the research question, demonstrate the significance of the study, and ensure that the research is built upon a solid foundation of existing work. It is an essential part of academic writing, providing credibility and grounding for the researcher’s own contributions. */}
          <span>M</span>ekanika is the official Mechanical Engineering Society of IIT Kharagpur, dedicated to fostering innovation, knowledge, and collaboration among aspiring mechanical engineers. Through a wide array of events, workshops, and projects, Mekanika provides students with the platform to explore cutting-edge technologies, enhance their technical skills, and engage with industry experts. As a vibrant community, we strive to shape the future of mechanical engineering, upholding a tradition of excellence and continuous learning.
        </div>
      </div>
      <div className="carousel-container">
        <input 
          checked 
          type="radio" 
          name="carousel" 
          id="img1" 
          style={{ 
            backgroundImage: `url(${Img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} 
          title="Mekanika" 
        />
        <input 
          type="radio" 
          name="carousel" 
          id="img2" 
          style={{ 
            backgroundImage: `url(${Img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}  
          title="Department" 
        />
        <input 
          type="radio" 
          name="carousel" 
          id="img3" 
          style={{ 
            backgroundImage: `url(${Img3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} 
          title="Main Building" 
        />
      </div>
    </div>
  );
}

export default About;

