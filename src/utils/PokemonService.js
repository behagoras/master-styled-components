import getData from './getData';

class PokemonService {
  constructor() {
    this.API_URL = 'https://pokeapi.co/api/v2/pokemon';
  }

  async getAllPokemons() {
    const pokemonsURL = await getData(this.API_URL);
    const { results } = pokemonsURL;
    const allPokemons = results.map(async (pokemon) => {
      return getData(pokemon.url);
    });

    return allPokemons;
  }

  async getPokemon(id) {
    const pokemon = getData(`${this.API_URL}/${id}`);
    return pokemon;
  }
}

export default PokemonService;
