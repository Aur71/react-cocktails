import React from 'react';
import { useState, useEffect, useCallback, useContext } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);
  const [cocktailPage, setCocktailPage] = useState({});
  const [ingredients, setIngredients] = useState('');

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strInstructions,
            strCategory,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            type: strAlcoholic,
            glass: strGlass,
            instructions: strInstructions,
            category: strCategory,
            ingredients: [
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
            ],
          };
        });

        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  const getSinglePage = (id) => {
    cocktails.map((item) => {
      if (item.id === id) {
        setCocktailPage(item);
        localStorage.setItem('item', JSON.stringify(item));

        let str = item.ingredients.filter((item) => item !== null).join(', ');

        setIngredients(str);
        localStorage.setItem('ingredients', JSON.stringify(str));
      }
    });
  };

  useEffect(() => {
    const item1 = localStorage.getItem('item');
    const value1 = JSON.parse(item1);
    if (value1) {
      setCocktailPage(value1);
    }

    const item2 = localStorage.getItem('ingredients');
    const value2 = JSON.parse(item2);
    if (value2) {
      setIngredients(value2);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setSearchTerm,
        cocktails,
        cocktailPage,
        setCocktailPage,
        getSinglePage,
        ingredients,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
