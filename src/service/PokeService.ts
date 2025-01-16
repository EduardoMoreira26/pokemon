import axios from "axios";

export interface PokemonDetail {
  id: number;
  types: string[];
  abilities: string[];
  stats: { name: string; base_stat: number }[];
}

export interface PokemonData {
  results: Pokemon[];
  count: number;
}

export interface Pokemon {
  name: string;
  url: string;
}

export const urls = {
  pokemonList: "https://pokeapi.co/api/v2/pokemon",
  pokemonDetail: "https://pokeapi.co/api/v2/pokemon",
};

export const fetchPokemons = async (page: number): Promise<PokemonData> => {
  const res = await axios.get(
    `${urls.pokemonList}?limit=20&offset=${(page - 1) * 20}`
  );
  return res.data;
};

export const fetchPokemonDetails = async (
  id: number
): Promise<PokemonDetail> => {
  const { data } = await axios.get(`${urls.pokemonDetail}/${id}`);
  const { types, abilities, stats } = data;

  return {
    id,
    types: types.map((type: { type: { name: string } }) => type.type.name),
    abilities: abilities.map(
      (ability: { ability: { name: string } }) => ability.ability.name
    ),
    stats: stats.map((stat: { stat: { name: string }; base_stat: number }) => ({
      name: stat.stat.name,
      base_stat: stat.base_stat,
    })),
  };
};
