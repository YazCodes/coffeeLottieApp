import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FavoritesContext } from '../FavoritesContext';
import CustomButton from '../components/CustomButton';

const FavoritesScreen = () => {
  const [isIntroAnimationDone, setIntroAnimationDone] = useState(false);
  const { favorites, clearFavorites } = useContext(FavoritesContext);

  useFocusEffect(
    React.useCallback(() => {
      setIntroAnimationDone(false); 
      const timer = setTimeout(() => setIntroAnimationDone(true), 3000); 
      return () => clearTimeout(timer);
    }, [])
  );

  if (!isIntroAnimationDone) {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/animations/stars.json')} 
          autoPlay
          loop={true}
          style={styles.animation}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorite Coffee Shops</Text>
      {favorites.length > 0 ? (
        <>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rating}>
                  Aesthetics Rating: {item.aestheticsRating}
                </Text>
              </View>
            )}
          />
          <CustomButton title="Clear Favorites" onPress={clearFavorites} />
        </>
      ) : (
        <Text style={styles.noFavorites}>No favorites added yet!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC', 
  },
  animation: {
    width: 300,
    height: 300,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5DC', 
  },
  title: {
    fontSize: 32,
    fontFamily: 'DancingScript_400Regular',
    color: '#6F4E37',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#6F4E37',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: 'DancingScript_400Regular',
    color: '#6F4E37',
  },
  rating: {
    fontSize: 16,
    fontFamily: 'DancingScript_400Regular',
    color: '#6F4E37',
  },
  noFavorites: {
    fontSize: 18,
    fontFamily: 'DancingScript_400Regular',
    color: '#6F4E37',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavoritesScreen;
