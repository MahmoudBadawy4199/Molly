import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favourites, AgentSelect, About } from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Favourites" component={Favourites} />
            <Tab.Screen name="Home" component={AgentSelect} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
