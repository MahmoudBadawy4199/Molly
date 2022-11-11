// React
import React from 'react';
import { StyleSheet, FlatList, View, ListRenderItem, ListRenderItemInfo } from 'react-native';
// Libraries
import { useNavigation } from '@react-navigation/native';
// Components
import Container from '../components/container-with-background-overlay';
import Banner from '../components/banner';
import BackgroundGradient from '../components/background-gradient';
import MapItem from '../components/map-item';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, verticalScale } from '../utils/Scale';
// Assets
import images from '../../src/assets/images';
// Types
import { MapSelectScreenNavigationProp } from '../types';

// Static Mock Data for UI
type mockType = {
    id?: number;
    title: string;
    image?: number;
};
const MapSelect = () => {
    // Navigation
    const navigation = useNavigation<MapSelectScreenNavigationProp>();
    function navigationHandler() {
        navigation.navigate('LineupSelect');
    }

    // Static Mock Data
    const mock: mockType[] = [
        {
            id: 0,
            title: 'ascent',
            image: images.ascent,
        },
        {
            id: 1,
            title: 'fracture',
            image: images.ascent,
        },
        {
            id: 2,
            title: 'bind',
            image: images.ascent,
        },
        {
            id: 3,
            title: 'breeze',
            image: images.ascent,
        },
        {
            id: 4,
            title: 'icebox',
            image: images.ascent,
        },
        {
            id: 5,
            title: 'haven',
            image: images.ascent,
        },
        {
            id: 6,
            title: 'pearl',
            image: images.ascent,
        },
        {
            id: 7,
            title: 'split',
            image: images.ascent,
        },
    ];

    // Flat List Item Render
    const renderMapItem: ListRenderItem<mockType> = ({ item }: ListRenderItemInfo<mockType>) => (
        <MapItem
            style={styles.mapItemStyle}
            mapName={item.title}
            mapImage={item.image}
            onPress={navigationHandler}
        />
    );
    return (
        <View style={styles.main}>
            {/* Container with Background overlay */}
            <Container style={styles.containerStyle}>
                {/* Banner */}
                <View style={styles.bannerStyle}>
                    <Banner
                        screenTitle="choose map"
                        backgroundImage={images.mapSelectBackground}
                        agentImage={images.viperMap}
                    />
                </View>
                {/* Body  */}
                <View style={styles.bodyStyle}>
                    {/* Colorful Background Gradient */}
                    <BackgroundGradient style={styles.backgroundGradientStyle} />
                    {/* Map List */}
                    <FlatList
                        data={mock}
                        numColumns={2}
                        columnWrapperStyle={styles.flatListColumnStyle}
                        renderItem={renderMapItem}
                    />
                </View>
            </Container>
        </View>
    );
};

export default MapSelect;

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.darknavy,
        flex: 1,
    },
    containerStyle: {
        flex: 1,
    },
    bannerStyle: {
        flex: 0.5,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(2),
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 12,
        zIndex: 10,
        borderBottomWidth: 0.4,
        borderColor: Colors.black,
    },
    bodyStyle: {
        flex: 1,
    },
    backgroundGradientStyle: {
        width: '100%',
        height: '100%',
        zIndex: -2,
        position: 'absolute',
    },
    flatListColumnStyle: {
        justifyContent: 'space-between',
        paddingVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(12),
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
