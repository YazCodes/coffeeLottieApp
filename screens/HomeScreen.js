import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const coffeeShops = [
    { name: "The Note Coffee", aestheticsRating: 4.5, 
      image: require('../assets/images/note-3.jpg'),
      videos: [
        require('../assets/videos/note-coffee.mp4'),
        require('../assets/videos/note-1.mp4'),
        require('../assets/videos/note-2.mp4'),
      ],
    },
    { name: "Train Street Coffee", aestheticsRating: 5.0,
      image: require('../assets/images/train-street-2.jpg'),
      videos: [
        require('../assets/videos/train-street-1.mp4'),
      ],
    },
    { name: "Giao Mua Coffee", aestheticsRating: 4.0,
      videos: [
        require('../assets/videos/Giao-Mua-1.mp4'),
        require('../assets/videos/Giao-Mua-2.mp4'),
        require('../assets/videos/Giao-Mua-4.mp4'),
      ],
     },
    { name: "Hidden Gem Cafe Hanoi", aestheticsRating: 3.7,
      videos: [
        require('../assets/videos/hidden-coffee-1.mp4'),
        require('../assets/videos/hidden-coffee-2.mp4'),
      ],
     },
    { name: "Nosan Coffee & Tea", aestheticsRating: 3.5,
      videos: [
        require('../assets/videos/nosan.mp4'),
        require('../assets/videos/nosan-1.mp4'),
        require('../assets/videos/nosan-3.mp4'),
      ],
    },
    { name: "Highlands Coffee", aestheticsRating: 3.0, image: require('../assets/images/Highlands-coffee.jpg'),},
  ];

  const handleGenerate = () => {
    setIsLoading(true);
    const selectedCoffeeShop =
      coffeeShops[Math.floor(Math.random() * coffeeShops.length)];

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Coffee Shop", { coffeeShops: selectedCoffeeShop });
    }, 3500);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LottieView
          source={require('../assets/animations/loading-coffee-beans.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      ) : (
        <>
          <LottieView
            source={require('../assets/animations/coffee-home-screen.json')}
            autoPlay
            loop
            style={styles.animation}
          />
          <Text style={styles.title}>Welcome to Coffee Lottie</Text>
          <Text style={styles.subtitle}>
            The coffee lottery where you'll win every time!
          </Text>
          <CustomButton
            title="Get Caffeinated, đi thôi!"
            onPress={handleGenerate}
          />
          <Image
            source={require('../assets/images/flag-pair.png')}
            style={styles.flagImage}
            resizeMode="contain"
          />
        </>
      )}
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
  animation: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  flagImage: {
    width: 100, 
    height: 100,
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
    fontFamily: 'DancingScript_400Regular',
    color: '#6F4E37',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'DancingScript_400Regular',
    color: '#6F4E37',
    textAlign: 'center',
    marginBottom: 32,
  },
});

export default HomeScreen;
