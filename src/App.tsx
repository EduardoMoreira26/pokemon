import React from "react";
import styled from "styled-components";
import PokemonList from "./components/List/List";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <PokemonList />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

export default App;
