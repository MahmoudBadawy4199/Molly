// React
import React from 'react';
// Components
import { Favourites, MapSelect, LineupSelect, LineupDetails } from '../screens';
// Libraries
import { createStackNavigator } from '@react-navigation/stack';
// Types
import { FavouritesStackParamList } from '../types';

// Navigator
const FavouritesStack = createStackNavigator<FavouritesStackParamList>();

const FavouritesStackNavigator = () => {
    return (
        <FavouritesStack.Navigator
            initialRouteName="Favourites"
            screenOptions={{
                headerShown: false,
            }}
        >
            <FavouritesStack.Screen name="Favourites" component={Favourites} />
            <FavouritesStack.Screen name="MapSelect" component={MapSelect} />
            <FavouritesStack.Screen name="LineupSelect" component={LineupSelect} />
            <FavouritesStack.Screen name="LineupDetails" component={LineupDetails} />
        </FavouritesStack.Navigator>
    );
};

export default FavouritesStackNavigator;
