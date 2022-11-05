import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favourites, About } from '../screens';
import HomeStackNavigator from './HomeStackNavigator';
import Colors from '../utils/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.lightnavy,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen name="Favourites" component={Favourites} />
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
