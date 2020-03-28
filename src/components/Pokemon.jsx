import React from 'react';

import './Pokemon.css';

const Pokemon = ({ data: pokemon }) => {
  return (
    <div className="Pokemon" color="blue">
      <div className="Pokemon-Container">
        <h2 className="Pokemon-Header">{pokemon.name}</h2>
        <figure className="Pokemon-Image">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </figure>
        <ul className="Pokemon-Attacks">
          <li className="Pokemon-Attack" type="fire">
            fire-punch
          </li>
          <li className="Pokemon-Attack">{pokemon.moves[1].move.name}</li>
          <li className="Pokemon-Attack">{pokemon.moves[2].move.name}</li>
          <li className="Pokemon-Attack">{pokemon.moves[3].move.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
