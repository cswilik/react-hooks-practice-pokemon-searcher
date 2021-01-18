import React, { useEffect, useState }  from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")



  useEffect(() => {
    fetch(API)
    .then(r=> r.json())
    .then(pokeData => setPokemon(pokeData))
  }, [])

  const filteredPokemon = pokemon.filter(poke => {
    // return (poke.name === search)
    return (poke.name.includes(search))
    
  })

  function handleNewPokemon(newPoke) {
    const updatedPokemon =[newPoke, ...pokemon]
    setPokemon(updatedPokemon)
  }

  

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleNewPokemon}/>
      <br />
      <Search search={search} onSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
