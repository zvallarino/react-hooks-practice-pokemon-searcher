import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemonList,setPokemonList] = useState([])
  const [search, setSearch] = useState("")

  function includeHelper(){
    if(search === ""){return pokemonList} else {
    let filteredListOfPokemon = pokemonList.filter((pokemon)=>pokemon.name.includes(search))
    return filteredListOfPokemon}
  }

  function onSubmit(pokemon){
    console.log(pokemonList)
    setPokemonList([pokemon,...pokemonList])
    console.log(pokemonList)
  }

  useEffect(()=>fetch("http://localhost:3001/pokemon")
  .then(response=>response.json())
  .then(pokemons => setPokemonList(pokemons)),[])

  return (
    <div className="App">
      <PokemonPage onSubmit = {onSubmit} pokemonList = {pokemonList} search ={search} setSearch = {setSearch} includeHelper = {includeHelper}/>
    </div>
  );
}

export default App;
