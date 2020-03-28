import React, { useEffect, useState } from 'react';
import PokemonService from '../utils/PokemonService';
import Pokemons from '../components/Pokemons';

const pokemonService = new PokemonService();

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const pokemonPromises = await pokemonService.getAllPokemons();
      const pokemonObject = await Promise.all(pokemonPromises);
      setPokemons(await pokemonObject);
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Pokemons data={pokemons} />
    </div>
  );
};

export default App;
