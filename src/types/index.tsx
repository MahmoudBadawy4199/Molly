import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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
        mapID: number;
    };
    LineupDetails: {
        lineupID: string;
    };
};

// Favourites Stack Types
export type FavouritesStackParamList = {
    FavouritesScreen: undefined;
    LineupDetails: {
        lineupID: string;
    };
};

export type AgentScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'AgentSelect'>;
export type MapSelectScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'MapSelect'>;
export type LineupSelectScreenNavigationProp = StackNavigationProp<
    HomeStackParamList,
    'LineupSelect'
>;
export type FavouritesScreenNavigationProp = StackNavigationProp<
    FavouritesStackParamList,
    'LineupDetails'
>;

export type ContentType = {
    agents: AgentType[];
    maps: MapItemType[];
    lineups: lineupType[];
};

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
    lineupID: string;
    mapID: number;
    agentID: number;
    siteLetter: string;
    setupNumber: number;
    lineupAbilityImage: string;
    lineupSide: string;
    lineupCallout: string;
    lineupMinimap: string;
    lineupVideoID: string;
    sections: sectionType[];
};

export type lineupType = {
    isFavourite: boolean;
    data: LineupDetailsType;
};
