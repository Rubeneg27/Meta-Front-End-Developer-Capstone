import Card from "./Card"
import bruchetta from "../icons_assets/bruchetta.svg"

const cards = [
    {
        src:bruchetta,
        title:"Plato 1",
        text:"Descripción 1",
    },
    
    {
        src:"dgs",
        title:"Plato 2",
        text:"Descripción 2",
    },
    {
        src:"asdf",
        title:"Plato 3",
        text:"Descripción 3",
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