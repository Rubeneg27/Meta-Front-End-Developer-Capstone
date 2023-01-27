const Card = ({url, title, text}) => {
    
    return (
        <article className="card">  
            <div className="card-img">        
                <img height="100%" width="100%" src={url} alt="imagen del plato"></img>
            </div>
            <div className="plato-info"> 
                <h3>{title}</h3>
                <h3>$</h3>
            </div>
            <p className="plato-text">{text}</p>
            <a href="x">Order here</a>
        </article>
    )
}

export default Card;
