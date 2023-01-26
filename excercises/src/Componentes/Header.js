import React from "react"
import Logo from "../icons_assets/Logo .svg"

const logo = {
  src:Logo,
  text: ""
}


function Header () {
 return (
    <header>          
			<div className="logo-container">
        <img width="100%" height="20%" src={logo.src} alt="logo"/>
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