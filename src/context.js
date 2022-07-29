import React, { useState, useContext, useEffect, Children } from "react";
// import { useCallback } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  const fetchRequest = async () => {
    setLoading(true);
    try {
      const response = await axios(url);
      const data = response.data;
      // console.log(data);
      const { drinks: shots } = data;
      if (shots) {
        const newshots = shots.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strGlass, strCategory } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            category: strCategory,
          };
        });
        setDrinks(newshots);
      } else {
        setDrinks([]);
      }
      setLoading(false);
    } catch (error) {
      // console.log(error.response);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);
  return (
    <AppContext.Provider value={{ loading, drinks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
