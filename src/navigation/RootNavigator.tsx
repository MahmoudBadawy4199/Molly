import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type RootStackParamList = {
    Main: undefined;
};

const RootStack = createStackNavigator();

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
