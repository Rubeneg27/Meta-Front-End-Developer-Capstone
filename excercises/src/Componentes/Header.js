import React from "react"

const logo = {
  url:"",
  text: "Little Lemon"
}


function Header () {
 return (
    <header>          
			<div className="logo-container">
        <img src="logo.url" alt="logo"/>
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