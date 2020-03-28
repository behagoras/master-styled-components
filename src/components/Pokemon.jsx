import React from 'react';

const Pokemon = ({ data: pokemon }) => {
  console.log(pokemon);
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <ul>
        <li>{pokemon.moves[0].move.name}</li>
        <li>{pokemon.moves[1].move.name}</li>
        <li>{pokemon.moves[2].move.name}</li>
        <li>{pokemon.moves[3].move.name}</li>
      </ul>
    </div>
  );
};

export default Pokemon;
