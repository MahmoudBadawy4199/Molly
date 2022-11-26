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
import { HomeStackParamList, LineupDetailsType, SiteType } from '../types';
// Data
import data from '../../data.json';

const LineupSelect = () => {
    // Route
    const route = useRoute<RouteProp<HomeStackParamList, 'LineupSelect'>>();
    const { agentID, mapItem } = route.params;

    // Data Manipulation
    const allLineupsInMap = data.lineups[mapItem.id as unknown as keyof typeof data.lineups];

    const sitesWhereAgentHasLineups =
        allLineupsInMap[agentID as unknown as keyof typeof allLineupsInMap];

    const sitesData: SiteType[] = mapItem.sites.filter((site) =>
        Object.keys(sitesWhereAgentHasLineups).find(
            (agentLineupSite) => agentLineupSite.toLowerCase() === site.letter.toLowerCase(),
        ),
    );

    const lineupsInEachSite: Array<LineupDetailsType[]> = Object.keys(
        sitesWhereAgentHasLineups,
    ).map((siteLetter) => {
        return sitesWhereAgentHasLineups[
            siteLetter as unknown as keyof typeof sitesWhereAgentHasLineups
        ];
    });
    // Render Item
    const renderSitePickerItem: ListRenderItem<SiteType> = ({
        item,
        index,
    }: ListRenderItemInfo<SiteType>) => (
        <SitePicker
            style={styles.sitePickerItemStyle}
            siteLetter={item.letter}
            siteImage={item.minimapImage}
            data={lineupsInEachSite[index]}
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
        paddingTop: verticalScale(10),
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
        paddingHorizontal: moderateScale(16),
    },
    sitePickerItemStyle: {
        width: '100%',
        height: verticalScale(60),
    },
});
