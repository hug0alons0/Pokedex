import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import ListaPokemon from "./components/ListaPokemon/ListaPokemon";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokeCard, setPokeCard] = useState({});
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    if (pokemon !== "") {
      getPokeInfo(pokemon);
    }
  }, [pokemon]);

  useEffect(async () => {
    if (pokeList.length === 0 && Object.keys(pokeCard).length !== 0) {
      await setPokeList([pokeCard]);
    } else if (pokeList.length !== 0 && Object.keys(pokeCard).length !== 0) {
      await setPokeList([...pokeList, pokeCard]);
    }
  }, [pokeCard]);

  const getPokeInfo = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokeInfo = res.data;
    await setPokeCard(pokeInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setPokemon(e.target.pokemon.value.toLowerCase());
    e.target.reset();
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
      <img className="dld"src="https://www.3dnatives.com/es/wp-content/uploads/sites/4/Pokemoan-dildos.jpg" alt="dld" />
        <label htmlFor='pokemon'>Elije tu Pokémon para la batalla!</label>
        <input type='text' name='pokemon' />
        <button type='submit'>TE ELIJO A TI !!</button>
      </form>
      {Object.keys(pokeCard).length !== 0 ? (
        <>
          <h2>Pokédex</h2>
          <ul>
            <Card data={pokeCard} />
          </ul>
        </>
      ) : (
        ""
      )}
      {pokeList.length > 0 ? (
        <>
          <h2>Historial de búsqueda</h2>
          <ul className='ListaPokemon'>
            <ListaPokemon data={pokeList} />
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
