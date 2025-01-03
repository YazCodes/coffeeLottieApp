import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites);

        // Remove duplicates
        const uniqueFavorites = Array.from(
          new Map(parsedFavorites.map((item) => [item.name, item])).values()
        );

        setFavorites(uniqueFavorites);
      }
    };
    loadFavorites();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (coffeeShop) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (shop) => shop.name === coffeeShop.name
      );
      if (!isAlreadyFavorite) {
        return [...prevFavorites, coffeeShop];
      } else {
        console.log(`${coffeeShop.name} is already in favorites!`);
        return prevFavorites;
      }
    });
  };

  const removeFavorite = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((shop) => shop.name !== name)
    );
  };

  const clearFavorites = () => {
    setFavorites([]); 
    AsyncStorage.removeItem('favorites'); 
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
