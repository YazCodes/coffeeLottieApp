import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FavoritesScreen from '../screens/FavoritesScreen';
import { FavoritesContext } from '../FavoritesContext';

const mockClearFavorites = jest.fn();

const mockFavorites = [
  { name: 'Train Street Coffee', aestheticsRating: 5.0 },
  { name: 'Hidden Gem Cafe Hanoi', aestheticsRating: 4.0 },
];

const renderWithContext = (favorites) =>
  render(
    <FavoritesContext.Provider value={{ favorites, clearFavorites: mockClearFavorites }}>
      <FavoritesScreen />
    </FavoritesContext.Provider>
  );

describe('FavoritesScreen', () => {
  it('renders the title correctly', () => {
    const { getByText } = renderWithContext(mockFavorites);
    expect(getByText('Your Favorite Coffee Shops')).toBeTruthy();
  });

  it('displays a list of favorite coffee shops', () => {
    const { getByText } = renderWithContext(mockFavorites);
    expect(getByText('Train Street Coffee')).toBeTruthy();
    expect(getByText('Hidden Gem Cafe Hanoi')).toBeTruthy();
  });

  it.skip('calls clearFavorites when the Clear Favorites button is pressed', () => {
    const { getByText } = renderWithContext(mockFavorites);
    const button = getByText('Clear Favorites');
    fireEvent.press(button);
    expect(mockClearFavorites).toHaveBeenCalled();
  });

  it('shows a message when no favorites are present', () => {
    const { getByText } = renderWithContext([]);
    expect(getByText('No favorites added yet!')).toBeTruthy();
  });
});

