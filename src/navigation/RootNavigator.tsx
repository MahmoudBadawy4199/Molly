// React
import React from 'react';
// Components
import TabNavigator from './TabNavigator';
// Libraries
import { createStackNavigator } from '@react-navigation/stack';
// Types
import { RootStackParamList } from '../types';

// Navigator
const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Group>
                <RootStack.Screen name="Main" component={TabNavigator} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
};

export default RootNavigator;
