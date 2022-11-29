// React
import React from 'react';
import {
    Platform,
    StyleSheet,
    FlatList,
    Text,
    View,
    ListRenderItem,
    ListRenderItemInfo,
    ActivityIndicator,
} from 'react-native';
// Components
import Container from '../components/container-with-background-overlay';
import Banner from '../components/banner';
import BackgroundGradient from '../components/background-gradient';
import LineupDetailsSection from '../components/lineup-details-section';
import FavouritesButton from '../components/favourites-button';
// Libraries
import YoutubeIframe from 'react-native-youtube-iframe';
import { useRoute, RouteProp } from '@react-navigation/native';

// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';

// Types
import { HomeStackParamList, sectionType } from '../types';

const LineupDetails = () => {
    // Route
    const route = useRoute<RouteProp<HomeStackParamList, 'LineupDetails'>>();
    const { lineupDetailsData } = route.params;

    // Loading Indicator for Video Section
    const [isVideoLoading, setIsVideoLoading] = React.useState<boolean>(true);
    function handleVideoLoading(flag: boolean) {
        setIsVideoLoading(flag);
    }

    // Section Item
    const renderSectionItem: ListRenderItem<sectionType> = ({
        item,
    }: ListRenderItemInfo<sectionType>) => <LineupDetailsSection data={item} />;

    // Video Section Item
    const renderVideoSection = () => (
        <>
            {/* Video Tutorial Section */}
            <Text style={styles.sectionLabelTextStyle}>video tutorial</Text>

            {/* Loading Indicator */}
            {isVideoLoading ? (
                <ActivityIndicator
                    style={styles.activityIndicatorStyle}
                    size={'small'}
                    color={Colors.white}
                />
            ) : null}
            {/* Video */}
            <YoutubeIframe
                height={verticalScale(155)}
                videoId={lineupDetailsData.lineupVideoID}
                onReady={() => handleVideoLoading(false)}
                forceAndroidAutoplay={false}
                play={false}
                // To Fix Webview Crash on Android Devices
                webViewStyle={styles.webViewStyle}
                webViewProps={{
                    androidLayerType:
                        Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'none',
                }}
            />
        </>
    );

    return (
        <>
            <Container>
                <View>
                    {/* Banner */}
                    <Banner
                        screenTitle={`setup ${lineupDetailsData.setupID}`}
                        lineupDetails={{
                            lineupCallout: lineupDetailsData.lineupCallout,
                            lineupAbilityImage: lineupDetailsData.lineupAbilityImage,
                        }}
                        backgroundImageUri={lineupDetailsData.lineupMinimap}
                        backgroundImageStyle={styles.lineupMinimapStyle}
                        overlay={'colored'}
                    />

                    {/* Add to Favourites Button */}
                    <FavouritesButton style={styles.favouritesButtonStyle} />
                </View>

                {/* Background Gradient */}
                <BackgroundGradient style={styles.backgroundGradientStyle} />

                {/* Sections List */}
                <FlatList
                    data={lineupDetailsData.sections}
                    style={styles.flatListStyle}
                    keyExtractor={(_, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContentContainerStyle}
                    ListHeaderComponent={renderVideoSection()}
                    renderItem={renderSectionItem}
                />
            </Container>
        </>
    );
};

export default LineupDetails;

const styles = StyleSheet.create({
    lineupMinimapStyle: {
        width: '70%',
        left: undefined,
    },
    favouritesButtonStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: horizontalScale(16),
        marginBottom: verticalScale(10),
    },
    backgroundGradientStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: verticalScale(140),
        zIndex: -2,
    },
    sectionLabelTextStyle: {
        color: Colors.white,
        fontSize: moderateScale(28),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        alignSelf: 'center',
        paddingBottom: 10,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.black,
    },
    activityIndicatorStyle: {
        zIndex: 100,
        ...StyleSheet.absoluteFillObject,
    },
    webViewStyle: {
        opacity: 0.99,
        backgroundColor: 'black',
    },
    flatListStyle: {
        marginTop: verticalScale(3),
        borderTopRightRadius: verticalScale(10),
        borderTopLeftRadius: verticalScale(10),
    },
    flatListContentContainerStyle: {
        paddingVertical: verticalScale(20),
    },
});
