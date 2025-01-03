import React, { useContext } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, Image, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { FavoritesContext } from '../FavoritesContext';
import CustomButton from '../components/CustomButton';

const { width } = Dimensions.get('window');

const DetailsScreen = ({ route }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);
  const { coffeeShops } = route.params;

  const handleSaveToFavorites = () => {
    const isAlreadyFavorite = favorites.some(
      (shop) => shop.name === coffeeShops.name
    );

    if (isAlreadyFavorite) {
      Alert.alert('Oops', `${coffeeShops.name} is already in your favorites!`);
    } else {
      addFavorite(coffeeShops);
      Alert.alert('Yum', `${coffeeShops.name} has been added to your favorites!`);
    }
  };

  const media = [
    { type: 'image', source: coffeeShops.image },
    ...coffeeShops.videos.map((video) => ({ type: 'video', source: video })),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{coffeeShops.name}</Text>
      <Text style={styles.rating}>
        Aesthetics Rating: {coffeeShops.aestheticsRating}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {media.map((item, index) => (
          <View key={index} style={styles.mediaContainer}>
            {item.type === 'image' ? (
              <Image source={item.source} style={styles.media} resizeMode="cover" />
            ) : (
              <Video
                source={item.source}
                style={styles.media}
                useNativeControls
                resizeMode="contain"
                shouldPlay={false}
              />
            )}
          </View>
        ))}
      </ScrollView>

      <CustomButton title="Save to Favorites" onPress={handleSaveToFavorites} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
    padding: 16,
  },
  name: {
    fontSize: 28,
    fontFamily: 'DancingScript_400Regular',
    color: '#6F4E37',
    marginBottom: 16,
    textAlign: 'center',
  },
  rating: {
    fontSize: 20,
    fontFamily: 'DancingScript_400Regular',
    color: '#6F4E37',
    marginBottom: 32,
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 16,
  },
  mediaContainer: {
    width: width * 0.8, 
    height: 300,
    marginRight: 16, 
  },
  media: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default DetailsScreen;
