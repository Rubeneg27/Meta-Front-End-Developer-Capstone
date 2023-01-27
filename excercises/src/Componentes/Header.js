import React, { useEffect, useState } from "react"
import Logo from "../icons_assets/Logo .svg"

const logo = {
  src:Logo,
  text: ""
}


const Header = () => {
  

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
    <header className= {`${deviceType === 'mobile' ? 'header-mobile' : 'header-desktop'}`}>          
			<div className="logo-container">
        <img width="100%" height="30%" src={logo.src} alt="logo"/>
        <h2>{logo.text}</h2>
      </div>
			<ul className="nav-container">
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#About">Menu</a></li>
        <li><a href="#About">Book</a></li>
        <li><a href="#About">Order online</a></li>        
			  <li><a href="#About">Login</a></li>
      </ul>
    </header>
    )
}

export default Header;