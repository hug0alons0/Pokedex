import React, { useState, useEffect } from "react";
import Lista from "./components/Lista/Lista";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeInput, setPokeInput] = useState(""); //Inicializa el estado en string vacío
  const [find, setFind] = useState(true); //Inicializa en True para que no salga el mensaje de Pokémon no encontrado
  // const [pokeCard, setPokemonCard] = useState({});
  // const [pokeList, setPokeList] = useState([]);

    //AQUÍ RECOGE DEL INPUT
  const handleSubmit = (e) => {
    let value = (e.target.value);
    setPokeInput(value);
    console.log(pokeInput);
  };

  //Fetch
  const getPokeInfo = () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`
    axios.get(url)
      .then(response => {
        // console.log(response.data)
        if(response.data) {
        setPokemon([...pokemon, response.data])
        console.log(pokemon) // no sale el valor que se acaba de setear en el estado
        setFind(true)
        }
        //setea el input a vacío. A su vez le tengo que pasar un value al input con el nuevo estado
        setPokeInput('')
      })
      .catch(error => {
        setFind(false) //
      })
  }


  
  // useEffect(async () => {
  //   if (pokeList.length === 0 && Object.keys(pokeCard).length !== 0) {
  //     await setPokeList([pokeCard]);
  //   } else if (pokeList.length !== 0 && Object.keys(pokeCard).length !== 0) {
  //     await setPokeList([...pokeList, pokeCard]);
  //   }
  // }, [pokeCard]);


  return (
    <div className='App'>

      <img className="dld"src="https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png" alt="dld" /> <br />
        <label htmlFor='pokemon'>ELIJE UN POKÉMON PARA LA BATALLA!!</label> <br />
        <input type='text' name='pokemon' value={pokeInput} onChange={handleSubmit}/> <br />
        <button onClick={getPokeInfo}>TE ELIJO A TI!!</button>
        {find?<Lista data={pokemon} /> : <h3>Pokémon no encontrado</h3>} 
        <img className="pokeball" src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png" alt="pok" />
    </div>
  );
}

export default App;