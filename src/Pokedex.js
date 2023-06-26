
import Pokecard from "./Pokecard";
import data from "./pokemon-data";
import './Pokedex.css';
import React from "react";

function Pokedex () {
    console.log("Data:", data)

    const cards = data.map(card =>
         <Pokecard data={card} key={card.id}/>
    )

    console.log("Cards:", cards)

    return (
        <React.Fragment>
        {/* <h3>Available cards:</h3> */}
        <div className="Pokedex">
            {cards}
        </div>
        </React.Fragment>
    )
}

export default Pokedex;