// React
import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

// Components
import { Favourites, About } from '../screens';
import HomeStackNavigator from './HomeStackNavigator';

// Utils
import { horizontalScale, moderateScale } from '../utils/Scale';
import Colors from '../utils/Colors';

// Libraries
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Types
import { TabNavigatorParamList, TabRouteProp } from '../types';

// navigator
const BottomTabNavigator = createBottomTabNavigator<TabNavigatorParamList>();
const TabNavigator = () => {
    return (
        <BottomTabNavigator.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                // Tab Bar Styling
                tabBarActiveTintColor: Colors.white,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Colors.lightnavy,
                    borderTopWidth: 0,
                    height: '10%',
                },
                tabBarIcon: ({ color, focused }) => generateIcons(route, color, focused),
                tabBarButton: CustomTabButtonWithBottomLine,
            })}
        >
            <BottomTabNavigator.Screen name="Favourites" component={Favourites} />
            <BottomTabNavigator.Screen name="Home" component={HomeStackNavigator} />
            <BottomTabNavigator.Screen name="About" component={About} />
        </BottomTabNavigator.Navigator>
    );
};

const CustomTabButtonWithBottomLine = (props: BottomTabBarButtonProps) => (
    <Pressable
        {...props}
        style={
            props.accessibilityState?.selected ? [props.style, styles.activeTabStyle] : props.style
        }
    />
);

function generateIcons(route: TabRouteProp, color: string, focused: boolean) {
    const ICON_SIZE = moderateScale(24);
    let iconName: React.ComponentProps<typeof Ionicons>['name'] | undefined;

    switch (route.name) {
        case 'Home':
            iconName = focused ? 'home' : 'home-outline';
            break;
        case 'About':
            iconName = focused ? 'bulb-sharp' : 'bulb-outline';
            break;
        case 'Favourites':
            iconName = focused ? 'heart' : 'heart-outline';
            break;
        default:
            break;
    }
    return (
        <View style={styles.iconContainerStyle}>
            <Ionicons name={iconName} size={ICON_SIZE} color={color} />
            <Text style={focused ? styles.tabLabelStyle_active : styles.tabLabelStyle}>
                {route.name}
            </Text>
        </View>
    );
}

export default TabNavigator;

const styles = StyleSheet.create({
    activeTabStyle: {
        borderBottomWidth: horizontalScale(2),
        borderBottomColor: Colors.primary,
    },
    iconContainerStyle: {
        alignItems: 'center',
    },
    tabLabelStyle: {
        color: Colors.grey,
    },
    tabLabelStyle_active: {
        color: Colors.white,
    },
});
