import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AgentSelect, MapSelect, LineupSelect, LineupDetails } from '../screens';
import { HomeStackParamList } from '../types';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="AgentSelect"
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen name="AgentSelect" component={AgentSelect} />
            <HomeStack.Screen name="MapSelect" component={MapSelect} />
            <HomeStack.Screen name="LineupSelect" component={LineupSelect} />
            <HomeStack.Screen name="LineupDetails" component={LineupDetails} />
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;
