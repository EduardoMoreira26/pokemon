import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import PokemonCard from "../Card/Card";
import { fetchPokemons, PokemonData } from "../../service/PokeService";
import {
  Button,
  Container,
  List,
  PaginationContainer,
  PageIndicator,
  PokemonCardWrapper,
  SearchContainer,
  SearchInput,
} from "./styled";

const fetchPokemonDetails = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

const PokemonList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, isError } = useQuery<PokemonData, Error>(
    ["pokemons", page],
    () => fetchPokemons(page),
    { keepPreviousData: true }
  );

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Algo deu errado...</div>;

  const filteredPokemons = data?.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Digite o nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <List>
        {filteredPokemons?.map((pokemon) => {
          const { name, url } = pokemon;
          return (
            <PokemonCardWrapper key={name}>
              <PokemonDetails pokemonUrl={url} name={name} />
            </PokemonCardWrapper>
          );
        })}
      </List>
      <PaginationContainer>
        <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
          Voltar
        </Button>
        <PageIndicator>Página {page}</PageIndicator>
        <Button onClick={() => setPage((prev) => prev + 1)}>Próximo</Button>
      </PaginationContainer>
    </Container>
  );
};

const PokemonDetails: React.FC<{ pokemonUrl: string; name: string }> = ({
  pokemonUrl,
  name,
}) => {
  const { data, isLoading, isError } = useQuery(
    ["pokemonDetails", pokemonUrl],
    () => fetchPokemonDetails(pokemonUrl)
  );

  if (isLoading) return <div>Loading {name}...</div>;
  if (isError) return <div>Something went wrong while fetching {name}.</div>;

  return (
    <PokemonCard
      name={name}
      imageUrl={data.sprites.front_default}
      id={data.id}
    />
  );
};

export default PokemonList;
