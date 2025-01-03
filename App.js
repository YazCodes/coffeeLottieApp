import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-reanimated';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { FavoritesProvider } from './FavoritesContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#6F4E37' }, 
      headerTintColor: '#F5F5DC', 
      headerTitleStyle: {
        fontFamily: 'DancingScript_400Regular',
        fontSize: 24,
      },
    }}
  >
    <Stack.Screen name="HomePage" component={HomeScreen} />
    <Stack.Screen name="Coffee Shop" component={DetailsScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [fontsLoaded] = useFonts({
    DancingScript_400Regular,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home'; 
              } else if (route.name === 'Favorites') {
                iconName = 'heart';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6F4E37', 
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: '#F5F5DC',
              height: 60,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              headerStyle: { backgroundColor: '#6F4E37' },
              headerTintColor: '#F5F5DC',
              headerTitleStyle: {
                fontFamily: 'DancingScript_400Regular',
                fontSize: 24,
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
