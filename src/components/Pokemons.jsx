import React from 'react';
import styled from 'styled-components';
import Pokemon from './Pokemon';

const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  padding:20px;
  grid-gap:50px;
  justify-items:center;
  background:#DD412D;
  max-width:100%;
`;

const Pokemons = ({ data: pokemons }) => {
  return (
    <Container>
      {pokemons.map((pokemon) => (
        <Pokemon data={pokemon} />
      ))}
    </Container>
  );
};

export default Pokemons;
