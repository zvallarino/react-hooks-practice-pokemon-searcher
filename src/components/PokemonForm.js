import React from "react";
import { Form } from "semantic-ui-react";

import react, { useState } from "react"

function PokemonForm({ onSubmit }) {




function addNewPokemon(e){
  e.preventDefault()
  fetch("http://localhost:3001/pokemon",{
    method:'POST',
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
      name:newPokemon.name,
      hp:newPokemon.hp,
      sprites:{
        front: newPokemon.front ,
        back: newPokemon.back
      }
    })
  })
  .then(response =>response.json())
  .then(pokemon =>onSubmit(pokemon))

}


function handleChange(e){
  setNewPokemon({
    ...newPokemon,
    [e.target.name]:e.target.value
    
  })
}


  const [newPokemon, setNewPokemon] = useState({
    name:"",
    hp:"" ,
    front: "" ,
    back: "" 
  })

 

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => addNewPokemon(e)}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange = {(e)=>handleChange(e)} value = {newPokemon.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange = {(e)=>handleChange(e)} value = {newPokemon.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange = {(e)=>handleChange(e)}
            value = {newPokemon.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange = {(e)=>handleChange(e)}
            value = {newPokemon.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
