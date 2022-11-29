import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

////////////////////////////// { NAVIGATION } //////////////////////////////

// Root Navigator Types
export type RootStackParamList = {
    Main: undefined;
};

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
    MapSelect: {
        agentID: number;
    };
    LineupSelect: {
        agentID: number;
        mapItem: MapItemType;
    };
    LineupDetails: {
        lineupDetailsData: LineupDetailsType;
    };
};

// Favourites Stack Types
export type FavouritesStackParamList = {
    FavouritesScreen: undefined;
    MapSelect: undefined;
    LineupSelect: undefined;
    LineupDetails: undefined;
};
export type FavouritesScreenNavigationProp = StackNavigationProp<
    FavouritesStackParamList,
    'FavouritesScreen'
>;
export type AgentScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'AgentSelect'>;
export type MapSelectScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'MapSelect'>;
export type LineupSelectScreenNavigationProp = StackNavigationProp<
    HomeStackParamList,
    'LineupSelect'
>;

export type MapItemType = {
    id: number;
    mapName: string;
    splashImage: string;
    sites: SiteType[];
};

export type SiteType = {
    letter: string;
    minimapImage: string;
};

export type AgentType = {
    id: number;
    name: string;
    gradientColors: Array<string>;
    shadowColor: string;
    modelImage: string;
    nameImage: string;
    roleImage: string;
    lineups: number[];
};
export type sectionType = {
    title: string;
    screenshots: string[];
};

export type LineupDetailsType = {
    setupID: number;
    lineupAbilityImage: string;
    lineupSide: string;
    lineupCallout: string;
    lineupMinimap: string;
    lineupVideoID: string;
    sections: sectionType[];
};
