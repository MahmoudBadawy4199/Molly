// React
import React from 'react';
// Components
import TabNavigator from './TabNavigator';
// Libraries
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Types
import { RootStackParamList } from '../types';

// Navigator
const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <SafeAreaProvider>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <RootStack.Group>
                    <RootStack.Screen name="Main" component={TabNavigator} />
                </RootStack.Group>
            </RootStack.Navigator>
        </SafeAreaProvider>
    );
};

export default RootNavigator;
