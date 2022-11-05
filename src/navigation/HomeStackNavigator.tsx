import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { AgentSelect, MapSelect, LineupSelect, LineupDetails } from '../screens';

export type HomeStackParamList = {
    AgentSelect: undefined;
    MapSelect: undefined;
    LineupSelect: undefined;
    LineupDetails: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();
export type AgentScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'AgentSelect'>;

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
