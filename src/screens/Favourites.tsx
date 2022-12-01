// React
import React from 'react';
import { StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
// Components
import Banner from '../components/banner';
import BackgroundGradient from '../components/background-gradient';
import Container from '../components/container-with-background-overlay';
import SitePicker from '../components/site-picker';
import InfoCard from '../components/info-card';
// Utils
import Colors from '../utils/Colors';
import { moderateScale, verticalScale } from '../utils/Scale';
// Types
import { AgentType } from '../types';
// Assets
import images from '../assets/images';

// Static Data Test
import data from '../../data.json';
const testData = ['100', '001'];

const Favourites = () => {
    // Data Manipulation
    const agentsIDs = [...new Set(testData.map((item) => item.charAt(0)))];
    const agentsData = agentsIDs.map((item) => data.agents[+item]);
    const allFavouriteLineupsData = testData.map(
        (id) => data.lineups[id as unknown as keyof typeof data.lineups],
    );
    const filteredLineupsByAgent = agentsIDs.map((agentID) => {
        return allFavouriteLineupsData.filter((item) => item.data.agentID === +agentID);
    });
    // Render Site Picker
    const renderSitePickerItem: ListRenderItem<AgentType> = ({
        item,
        index,
    }: ListRenderItemInfo<AgentType>) => (
        <SitePicker
            style={styles.sitePickerItemStyle}
            title={item.name}
            image={item.modelImage}
            imageStyle={styles.sitePickerImageStyle}
            lineupItemsData={filteredLineupsByAgent[index]}
            favouritesStack={true}
        />
    );
    return (
        <>
            <Container>
                {/* Banner */}
                <Banner
                    screenTitle="Favourites"
                    defaultBackgroundImage="Favourites"
                    backgroundImageStyle={styles.lineupMinimapStyle}
                    blackOverlayWidthPercentage={'60%'}
                    bannerBackgroundColor={Colors.lightnavy}
                />
                {/* Background Gradient */}
                <BackgroundGradient style={styles.backgroundGradientStyle} />

                {/* Render Agents */}
                {testData.length ? (
                    <FlatList
                        // {/* Site Picker List */}
                        data={agentsData}
                        renderItem={renderSitePickerItem}
                        style={styles.flatListStyle}
                        contentContainerStyle={styles.flatListContentContainerStyle}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    // {/* Empty Favourites Information Card */}
                    <InfoCard
                        message="you dont have favourite lineups"
                        image={images.emptyFavouritesImage}
                    />
                )}
            </Container>
        </>
    );
};

export default Favourites;

const styles = StyleSheet.create({
    lineupMinimapStyle: {
        width: '50%',
        left: undefined,
        transform: [{ scaleX: -1 }],
    },
    sitePickerImageStyle: {
        position: 'absolute',
        bottom: 0.1,
        right: 0,
        height: verticalScale(80),
        width: '100%',
    },
    backgroundGradientStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: verticalScale(140),
        zIndex: -2,
    },
    flatListStyle: {
        marginTop: verticalScale(3),
    },
    flatListContentContainerStyle: {
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(16),
    },
    sitePickerItemStyle: {
        width: '100%',
        height: verticalScale(60),
    },
});
