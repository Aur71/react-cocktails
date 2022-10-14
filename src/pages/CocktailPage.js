import React from 'react';
import { useGlobalContext } from '../context';

const CocktailPage = () => {
  const { cocktailPage, ingredients } = useGlobalContext();

  return (
    <main className="cocktail-page-wrapper">
      <h1>{cocktailPage.name}</h1>
      <div className="grid-container">
        <div className="grid-item" id="gr1">
          <img src={cocktailPage.img} alt={cocktailPage.name} />
        </div>
        <div className="grid-item" id="gr2">
          <h3>
            <span>Name:</span> {cocktailPage.name}
          </h3>

          <h3>
            <span>Category:</span> {cocktailPage.category}
          </h3>

          <h3>
            <span>Info:</span> {cocktailPage.type}
          </h3>

          <h3>
            <span>Glass:</span> {cocktailPage.glass}
          </h3>

          <h3 className="instructions">
            <span>Instructions:</span> {cocktailPage.instructions}
          </h3>

          <h3 className="instructions">
            <span>Ingredients:</span> {ingredients}
          </h3>
        </div>
      </div>
    </main>
  );
};

export default CocktailPage;
