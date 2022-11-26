// React
import React from 'react';
import { StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
// Libraries
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
// Components
import Container from '../components/container-with-background-overlay';
import Banner from '../components/banner';
import BackgroundGradient from '../components/background-gradient';
import MapItem from '../components/map-item';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, verticalScale } from '../utils/Scale';
// Types
import { HomeStackParamList, MapItemType, MapSelectScreenNavigationProp } from '../types';

import data from '../../data.json';

const MapSelect = () => {
    // Navigation & Params
    const route = useRoute<RouteProp<HomeStackParamList, 'MapSelect'>>();
    const { agentID } = route.params;
    const navigation = useNavigation<MapSelectScreenNavigationProp>();
    function navigationHandler(mapItem: MapItemType) {
        navigation.navigate('LineupSelect', { agentID, mapItem });
    }
    // Data Manipulation
    const modelImage = data.agents[agentID].modelImage;
    const allMapsThatAgentHasLineups = data.agents[agentID].lineups.map((item) => {
        return data.maps[item];
    });

    // Render Map items
    const renderMapItem: ListRenderItem<MapItemType> = ({
        item,
    }: ListRenderItemInfo<MapItemType>) => (
        <MapItem
            style={styles.mapItemStyle}
            mapData={item}
            onPress={() => navigationHandler(item)}
        />
    );

    return (
        <>
            <Container>
                {/* Banner */}
                <Banner
                    screenTitle="select map"
                    defaultBackgroundImage="Select Map"
                    modelImage={modelImage}
                />
                {/* Background Gradient */}
                <BackgroundGradient style={styles.backgroundGradientStyle} />

                {/* Map List */}
                <FlatList
                    style={styles.flatListStyle}
                    data={allMapsThatAgentHasLineups}
                    numColumns={2}
                    columnWrapperStyle={styles.flatListColumnStyle}
                    renderItem={renderMapItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContentContainerStyle}
                />
            </Container>
        </>
    );
};

export default MapSelect;

const styles = StyleSheet.create({
    backgroundGradientStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: verticalScale(140),
        zIndex: -2,
    },
    flatListStyle: {
        marginTop: verticalScale(2),
    },
    flatListColumnStyle: {
        justifyContent: 'space-between',
        paddingVertical: verticalScale(10),
    },
    flatListContentContainerStyle: {
        paddingVertical: verticalScale(12),
        paddingHorizontal: horizontalScale(16),
    },
    mapItemStyle: {
        width: '48%',
        height: verticalScale(150),
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(3),
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 12,
        zIndex: 5,
        borderWidth: 0.4,
        borderColor: Colors.black,
        borderRadius: 6,
    },
});
