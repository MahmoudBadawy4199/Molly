import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Tab Navigator Types
export type TabNavigatorParamList = {
    Favourites: undefined;
    Home: undefined;
    About: undefined;
};
export type TabRouteProp = RouteProp<TabNavigatorParamList, keyof TabNavigatorParamList>;

// Home Stack Types
export type HomeStackParamList = {
    AgentSelect: undefined;
    MapSelect: undefined;
    LineupSelect: undefined;
    LineupDetails: undefined;
};
export type AgentScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'AgentSelect'>;
