// React
import React from 'react';
import { StyleSheet, FlatList, Text, ListRenderItem, ListRenderItemInfo } from 'react-native';
// Libraries
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
// Components
import Container from '../components/container-with-background-overlay';
import Banner from '../components/banner';
import BackgroundGradient from '../components/background-gradient';
import SitePicker from '../components/site-picker';
// Utils
import Colors from '../utils/Colors';
import { moderateScale, verticalScale } from '../utils/Scale';
// Types
import { HomeStackParamList, LineupSelectScreenNavigationProp, SiteType } from '../types';
// Redux
import { useAppSelector } from '../redux/hooks';
import { selectAgents, selectLineups, selectMaps } from '../redux/contentSlice';

const LineupSelect = () => {
    // Navigation & Route
    const navigation = useNavigation<LineupSelectScreenNavigationProp>();
    const route = useRoute<RouteProp<HomeStackParamList, 'LineupSelect'>>();

    const { agentID, mapID } = route.params;
    function navigationHandler(lineupID: string) {
        navigation.navigate('LineupDetails', { lineupID });
    }
    // Data Manipulation For UI
    const agent = useAppSelector(selectAgents).filter((item) => item.id === agentID)[0];
    const map = useAppSelector(selectMaps).filter((item) => item.id === mapID)[0];
    const allLineupsForAgentInThisMap = useAppSelector(selectLineups).filter(
        (lineup) => lineup.data.agentID === agentID && lineup.data.mapID === mapID,
    );

    const sitesLetter = [
        ...new Set(allLineupsForAgentInThisMap.map((item) => item.data.siteLetter)),
    ];
    // Alphabetical Sort A -> B -> C  So Sites Dont Be Random Like C -> A -> B
    sitesLetter.sort();

    const sitesData: SiteType[] = sitesLetter.map(
        (letter) => map.sites.filter((site) => site.letter === letter)[0],
    );
    const lineupsInEachSite = sitesLetter.map((letter) =>
        allLineupsForAgentInThisMap.filter((lineup) => lineup.data.siteLetter === letter),
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
            lineupItemsData={lineupsInEachSite[index]}
            imageStyle={styles.sitePickerImageStyle}
            favouritesStack={false}
            onItemPress={navigationHandler}
        />
    );

    return (
        <>
            <Container>
                {/* Banner */}
                <Banner
                    screenTitle="select Lineup"
                    screenSubtitle={`${agent.name} >> ${map.mapName}`}
                    backgroundImageUri={map.splashImage}
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
