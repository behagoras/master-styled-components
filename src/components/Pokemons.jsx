import React from 'react';
import Pokemon from './Pokemon';

const Pokemons = ({ data: pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <Pokemon data={pokemon} />
      ))}
    </>
  );
};

export default Pokemons;
