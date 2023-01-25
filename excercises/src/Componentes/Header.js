import React from "react"


function Header () {
 return (
    <header>          
			<div className="logo-container">
        <img src="" alt="logo"/>
      </div>
			<ul className="nav-container">
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#About">Menu</a></li>
        <li><a href="#About">Reservations</a></li>
        <li><a href="#About">Order online</a></li>        
			  <li><a href="#About">Login</a></li>
      </ul>
    </header>
    )
}

export default Header;