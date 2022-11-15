import React from "react";
import Netflix__data from "./data";
import './Cards.css'
function Cards(){
    function getCards(){
        return Netflix__data.cards.map((el,index)=>{
            return <div className={`card ${index%2===1?'reverse':''}`}>
                <div className="card__details">
                    <h2 className="card__title">{el.title}</h2>
                    <p className="card__info">{el.info}</p>
                </div>
                <div className="card__hero">
                    <img src={el.image} alt = "netflix__movie"/>
                </div>
            </div>
        })
    }
    return <section className="cards__section">
        {getCards()}
    </section>
}
export default Cards