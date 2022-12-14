// React
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// Components
import CustomCachedImage from './custom-cached-image';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Types
import { lineupType } from '../types';
// Redux
import { useAppSelector } from '../redux/hooks';
import { selectMaps } from '../redux/contentSlice';

type SitePickerDropDownItemProps = {
    lineup: lineupType;
    favouritesStack?: boolean;
    onPress: (lineupID: string) => void;
};

const SitePickerDropDownItem = ({
    lineup,
    favouritesStack,
    onPress,
}: SitePickerDropDownItemProps) => {
    // Navigation
    const mapImage = useAppSelector(selectMaps).filter(
        (item: { id: number }) => item.id === lineup.data.mapID,
    )[0].splashImage;

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => onPress(lineup.data.lineupID)}>
            <View style={styles.containerStyle}>
                {/* Black Background Overlay */}
                <View style={styles.blackBackgroundOverlayStyle} />

                {/* Lineup Details */}
                <View style={styles.lineupDetailsContainerStyle}>
                    {/* Map Slash Image */}
                    {favouritesStack ? (
                        <>
                            <CustomCachedImage
                                source={{ uri: mapImage }}
                                style={styles.backgroundMapImageStyle}
                            />
                            <View style={styles.backgroundMapImageBlackOverlayStyle} />
                        </>
                    ) : null}
                    {/* setup Number Label */}
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.setupTextStyle}
                    >
                        setup {lineup.data.setupNumber}
                    </Text>

                    {/* Callout : Dish / main / .... */}
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.subLabelStyle}
                    >
                        {lineup.data.lineupCallout}
                    </Text>
                    {/* Side Text : attack / defense */}
                    <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.subLabelStyle}
                    >
                        {lineup.data.lineupSide}
                    </Text>

                    {/* Ability Image */}
                    <View style={styles.abilityImageContainerStyle}>
                        <CustomCachedImage
                            source={{ uri: lineup.data.lineupAbilityImage }}
                            style={styles.abilityImageStyle}
                        />
                    </View>
                </View>

                {/* Minimap Image */}
                <View
                    style={[
                        favouritesStack
                            ? styles.FavouritesMinimapImageContainerStyle
                            : styles.minimapImageContainerStyle,
                    ]}
                >
                    <CustomCachedImage
                        source={{ uri: lineup.data.lineupMinimap }}
                        style={styles.minimapImageStyle}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SitePickerDropDownItem;

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: verticalScale(120),
        marginVertical: verticalScale(10),
        flexDirection: 'row',
    },
    backgroundMapImageStyle: {
        position: 'absolute',
        resizeMode: 'stretch',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    backgroundMapImageBlackOverlayStyle: {
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.25,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    blackBackgroundOverlayStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.5,
    },
    lineupDetailsContainerStyle: {
        flex: 1,
        padding: moderateScale(10),
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    subLabelStyle: {
        color: Colors.white,
        fontSize: moderateScale(16),
        fontFamily: 'Tungsten',
        textTransform: 'capitalize',
        alignSelf: 'flex-start',
        letterSpacing: 1,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.black,
        marginTop: verticalScale(5),
    },
    setupTextStyle: {
        color: Colors.white,
        fontSize: moderateScale(24),
        textDecorationLine: 'underline',
        alignSelf: 'flex-start',
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.black,
    },
    minimapImageContainerStyle: {
        flex: 1.5,
    },
    FavouritesMinimapImageContainerStyle: {
        flex: 1,
    },
    minimapImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    abilityImageContainerStyle: {
        width: horizontalScale(24),
        height: verticalScale(24),
        marginTop: verticalScale(5),
    },
    abilityImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
});
