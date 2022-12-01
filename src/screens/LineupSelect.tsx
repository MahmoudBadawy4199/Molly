// React
import React from 'react';
import { StyleSheet, FlatList, Text, ListRenderItem, ListRenderItemInfo } from 'react-native';
// Libraries
import { useRoute, RouteProp } from '@react-navigation/native';
// Components
import Container from '../components/container-with-background-overlay';
import Banner from '../components/banner';
import BackgroundGradient from '../components/background-gradient';
import SitePicker from '../components/site-picker';
// Utils
import Colors from '../utils/Colors';
import { moderateScale, verticalScale } from '../utils/Scale';
// Types
import { HomeStackParamList, lineupType, SiteType } from '../types';
// Data
import data from '../../data.json';

const LineupSelect = () => {
    // Route
    const route = useRoute<RouteProp<HomeStackParamList, 'LineupSelect'>>();
    const { agentID, mapItem } = route.params;

    // Data Manipulation
    const agentLineupIDs = Object.keys(data.lineups).filter((item) =>
        item.startsWith(`${agentID}${mapItem.id}`),
    );

    const allLineupsDataByID: lineupType[] = agentLineupIDs.map(
        (id) => data.lineups[id as unknown as keyof typeof data.lineups],
    );

    const sitesLetters = [...new Set(allLineupsDataByID.map((item) => item.data.siteLetter))];
    // Alphabetical Sort A -> B -> C  So Sites Dont Be Random Like C -> A -> B
    sitesLetters.sort();

    const sitesData: SiteType[] = sitesLetters.map(
        (key) => mapItem.sites.filter((item) => item.letter === key)[0],
    );
    const eachSiteLineups = sitesLetters.map((key) =>
        allLineupsDataByID.filter((item) => item.data.siteLetter === key),
    );

    // Render Site Picker
    const renderSitePickerItem: ListRenderItem<SiteType> = ({
        item,
        index,
    }: ListRenderItemInfo<SiteType>) => (
        <SitePicker
            style={styles.sitePickerItemStyle}
            title={item.letter}
            image={item.minimapImage}
            lineupItemsData={eachSiteLineups[index]}
            imageStyle={styles.sitePickerImageStyle}
            favouritesStack={false}
        />
    );

    return (
        <>
            <Container>
                {/* Banner */}
                <Banner
                    screenTitle="select Lineup"
                    screenSubtitle={`${data.agents[agentID].name} >> ${mapItem.mapName}`}
                    backgroundImageUri={mapItem.splashImage}
                />

                {/* Background Gradient */}
                <BackgroundGradient style={styles.backgroundGradientStyle} />

                {/* Site Picker List */}
                <FlatList
                    data={sitesData}
                    renderItem={renderSitePickerItem}
                    style={styles.flatListStyle}
                    ListHeaderComponent={<Text style={styles.sitesTextStyle}>Sites</Text>}
                    contentContainerStyle={styles.flatListContentContainerStyle}
                    showsVerticalScrollIndicator={false}
                />
            </Container>
        </>
    );
};

export default LineupSelect;

const styles = StyleSheet.create({
    backgroundGradientStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: verticalScale(140),
        zIndex: -2,
    },
    sitesTextStyle: {
        color: Colors.white,
        fontSize: moderateScale(32),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        alignSelf: 'flex-start',
        letterSpacing: 0.5,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
        elevation: verticalScale(12),
    },
    flatListStyle: {
        marginTop: verticalScale(3),
    },
    flatListContentContainerStyle: {
        paddingVertical: verticalScale(15),
        paddingHorizontal: moderateScale(16),
    },
    sitePickerItemStyle: {
        width: '100%',
        height: verticalScale(60),
    },
    sitePickerImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: moderateScale(5),
        backgroundColor: Colors.offwhite,
    },
});
