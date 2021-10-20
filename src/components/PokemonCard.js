import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const [flipCard, setFlipCard] = useState(true)

  function setterFlipCard(){
    setFlipCard(card=>!card)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src = {flipCard? pokemon.sprites.front : pokemon.sprites.back} onClick ={setterFlipCard} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
