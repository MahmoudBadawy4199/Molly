// React
import React from 'react';
import { StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
// Components
import Banner from '../components/banner';
import BackgroundGradient from '../components/background-gradient';
import Container from '../components/container-with-background-overlay';
import SitePicker from '../components/site-picker';
import InfoCard from '../components/info-card';
// Libraries
import { useNavigation } from '@react-navigation/native';
// Utils
import Colors from '../utils/Colors';
import { moderateScale, verticalScale } from '../utils/Scale';
// Types
import { AgentType, FavouritesScreenNavigationProp } from '../types';
// Assets
import images from '../assets/images';
// Redux
import { useAppSelector } from '../redux/hooks';
import { selectAgents, selectLineups } from '../redux/contentSlice';
import { selectError } from '../redux/errorsSlice';

const Favourites = () => {
    // Navigation
    const navigation = useNavigation<FavouritesScreenNavigationProp>();
    function navigationHandler(lineupID: string) {
        navigation.navigate('LineupDetails', { lineupID });
    }
    const error = useAppSelector(selectError);

    // Data Manipulation For UI
    const favouriteLineups = useAppSelector(selectLineups).filter((lineup) => lineup.isFavourite);
    const agents = useAppSelector(selectAgents);

    const agentsIDs = [...new Set(favouriteLineups.map((lineup) => lineup.data.agentID))];
    const agentsData = agentsIDs.map((id) => agents.filter((agent) => agent.id === id)[0]);
    const lineupsFilteredByAgentID = agentsIDs.map((agentID) => {
        return favouriteLineups.filter((lineup) => lineup.data.agentID === agentID);
    });

    // // Render Site Picker
    const renderSitePickerItem: ListRenderItem<AgentType> = ({
        item,
        index,
    }: ListRenderItemInfo<AgentType>) => (
        <SitePicker
            style={styles.sitePickerItemStyle}
            title={item.name}
            image={item.modelImage}
            imageStyle={styles.sitePickerImageStyle}
            lineupItemsData={lineupsFilteredByAgentID[index]}
            favouritesStack={true}
            onItemPress={navigationHandler}
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

                {error ? (
                    // Server Error Information Card
                    <InfoCard
                        message={error}
                        image={images.errorImage}
                        iconResizeMode={'contain'}
                    />
                ) : (
                    <>
                        {/* Render Agents */}
                        {favouriteLineups.length ? (
                            <FlatList
                                data={agentsData}
                                renderItem={renderSitePickerItem}
                                style={styles.flatListStyle}
                                contentContainerStyle={styles.flatListContentContainerStyle}
                                showsVerticalScrollIndicator={false}
                            />
                        ) : (
                            // Empty Favourites Information Card
                            <InfoCard
                                message="you dont have favourite lineups"
                                image={images.emptyFavouritesImage}
                            />
                        )}
                    </>
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
