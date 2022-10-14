import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h1 className="cocktail-error">No cocktails found</h1>;
  }

  return (
    <section className="cocktails-container">
      {cocktails.map((cocktail) => {
        return <Cocktail key={cocktail.id} {...cocktail} />;
      })}
    </section>
  );
};

export default CocktailList;
