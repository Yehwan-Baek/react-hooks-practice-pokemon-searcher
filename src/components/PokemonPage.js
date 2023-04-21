import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  
  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then(res=>res.json())
    .then(data => {
      setPokemon(data)
    })
  }, [])

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }

  const pokemonsToDisplay = pokemon.filter((poke) =>
  poke.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search searchInput={searchInput} onChangeSearch={setSearchInput}/>
      <br />
      <PokemonCollection pokemon={pokemonsToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
