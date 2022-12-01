// React
import React from 'react';
// Components
import { Favourites, LineupDetails } from '../screens';
// Libraries
import { createStackNavigator } from '@react-navigation/stack';
// Types
import { FavouritesStackParamList } from '../types';

// Navigator
const FavouritesStack = createStackNavigator<FavouritesStackParamList>();

const FavouritesStackNavigator = () => {
    return (
        <FavouritesStack.Navigator
            initialRouteName="FavouritesScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <FavouritesStack.Screen name="FavouritesScreen" component={Favourites} />
            <FavouritesStack.Screen name="LineupDetails" component={LineupDetails} />
        </FavouritesStack.Navigator>
    );
};

export default FavouritesStackNavigator;
