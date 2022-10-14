import React from 'react';
import SearchBar from '../components/SearchBar';
import CocktailList from '../components/CocktailList';

const Home = () => {
  return (
    <main>
      <SearchBar />
      <CocktailList />
    </main>
  );
};

export default Home;
