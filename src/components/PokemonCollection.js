import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList, includeHelper }) {
  let pokemonListz = includeHelper().map(pokemon => <PokemonCard key= {pokemon.name} pokemon = {pokemon}/>) 
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonListz}
    </Card.Group>
  );
}

export default PokemonCollection;
