import React from 'react';
import image from "../icons_assets/restauranfood.jpg"
import { useEffect, useState } from 'react';

function About () {

  useEffect(()=> {
    const handleResize = () => {
      setDeviceType(getCurrentDeviceType());
    };
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize)
  }
  }, []);

  const getInitialDeviceType = () => 
    window.matchMedia("(max-width: 700px)").matches ? "mobile" : "desktop";
  const getCurrentDeviceType = () => 
    window.matchMedia("(max-width: 700px)").matches ? "mobile" : "desktop";
  const [deviceType, setDeviceType] = useState(getInitialDeviceType());

    return (
      <div className="about-container">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </article>
        {deviceType === 'desktop' ? <img className='aboutImage' src={image} alt="A chef carrying some food"></img> : null}
      </div>
    )
}

export default About;