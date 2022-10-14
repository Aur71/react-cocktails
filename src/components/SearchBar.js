import React from 'react';
import { useGlobalContext } from '../context';

const SearchBar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef();

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchBar">Search Your Favorite Cocktail</label>
      <input
        type="text"
        id="searchBar"
        name="searchBar"
        ref={searchValue}
        onChange={searchCocktail}
      />
    </form>
  );
};

export default SearchBar;
