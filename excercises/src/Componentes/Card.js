import React from 'react';

const Card = ({url, title, text}) => {
    
    return (
        <article>  
        <div className="card">
            <div className="card-img">        
                <img src={url} alt="imagen del plato"></img>
            </div>
            <div className="plato-info"> 
                <h3>{title}</h3>
                <h3>$</h3>
            </div>
            <p className="plato-text">{text}</p>
            <a href="x">Order here</a>
            </div>
            
        </article>
    )
}

export default Card;
