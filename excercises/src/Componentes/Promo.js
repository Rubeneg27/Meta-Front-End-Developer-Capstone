import React, { Component }  from 'react';
import Card from "./Card"
import bruchetta from "../icons_assets/bruchetta.svg"
import greekSalad from "../icons_assets/greekSalad.jpg"
import lemonDessert from "../icons_assets/lemonDessert.jpg"


const cards = [
    {
        src:bruchetta,
        title:"Bruchetta",
        text:"Taste our incredible bruchetta",
    },
    
    {
        src:greekSalad,
        title:"greekSalad",
        text:"Open your stomach with this gorgeous salad",
    },
    {
        src:lemonDessert,
        title:"Lemon dessert",
        text:"Finish your meal with the incredible citric dessert",
    },
    
];
function Promo () {
    return (
        <div className="promo-container">
            <div className="promo-title">
              <h1>This week specials!</h1>
              <button>Online Menu</button>
            </div>
            <section className="menu-container">
                {cards.map((card) => (
                    <Card
                    title={card.title}
                    text={card.text}
                    url={card.src}
                    />
                ))}
            </section>
        </div>
    )
}

export default Promo;