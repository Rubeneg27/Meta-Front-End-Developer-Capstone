import React from 'react';
import image from "../icons_assets/restauranfood.jpg"

function About () {
    return (
      <div className="about-container">
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p> We are a family owned <br />
          Mediterranean restaurant, <br />
          focused on traditional
          <br />
          recipes served with a modern twist.
          </p>
        </article>
        <img className='aboutImage' src={image} alt="A chef carrying some food"></img>
      </div>
    )
}

export default About;