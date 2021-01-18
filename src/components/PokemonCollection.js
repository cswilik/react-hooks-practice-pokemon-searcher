import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";


function PokemonCollection({pokemon}) {

const pokemonComponents= pokemon.map(poke => {
  return <PokemonCard key={poke.id} name={poke.name} hp={poke.hp} sprites={poke.sprites}/>
})


  return (
    <Card.Group itemsPerRow={6}>
      {pokemonComponents}
    </Card.Group>
  );
}

export default PokemonCollection;
