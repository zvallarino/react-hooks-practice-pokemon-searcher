import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ pokemonList, search, setSearch, includeHelper, onSubmit }) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm  onSubmit = {onSubmit}/>
      <br />
      <Search search = {search} setSearch = {setSearch}/>
      <br />
      <PokemonCollection includeHelper = {includeHelper} pokemonList = {pokemonList} />
    </Container>
  );
}

export default PokemonPage;
