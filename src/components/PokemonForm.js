import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon}) {
  const [ name, setName] = useState("")
  const [ hp, setHp] = useState("")
  const [ frontImg, setFrontImg] =useState("")
  const [ backImg, setBackImg] = useState("")

 
  const formData = {
    name: name,
    hp: hp,
    sprites: {
      front: frontImg,
      back: backImg
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(evt) => {
          evt.preventDefault()
          fetch("http://localhost:3001/pokemon", {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(r => r.json())
        .then(newPoke => onAddPokemon(newPoke))
      }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(evt) =>{setName(evt.target.value)}} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={(evt) =>{setHp(evt.target.value)}} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImg}
            onChange={(evt) =>{setFrontImg(evt.target.value)}}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImg}
            onChange={(evt) =>{setBackImg(evt.target.value)}}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
