// React
import React from 'react';
import { StyleSheet, Text, View, StyleProp, ImageStyle } from 'react-native';
// Components
import CustomCachedImage from './custom-cached-image';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import Colors from '../utils/Colors';
// Assets
import { ShapeColoredOverlay, ShapeBlackOverlay } from '../assets/svg';
import images from '../assets/images';

type ScreenDefaultBackgroundImage = 'Select Agent' | 'Select Map' | 'Favourites';
type OverlayType = 'black' | 'colored';
type BannerProps = {
    screenTitle: string;
    screenSubtitle?: string;
    lineupDetails?: { lineupCallout: string; lineupAbilityImage: string };
    modelImage?: string;
    backgroundImageUri?: string;
    backgroundImageBlurRadius?: number;
    defaultBackgroundImage?: ScreenDefaultBackgroundImage;
    backgroundImageStyle?: StyleProp<ImageStyle> | undefined;
    overlay?: OverlayType;
    blackOverlayWidthPercentage?: string;
    bannerBackgroundColor?: string;
};

const Banner: React.FC<BannerProps> = (props) => {
    const defaultBackgroundImage = (): number => {
        return props.defaultBackgroundImage === 'Favourites'
            ? images.favouritesBannerImage
            : props.defaultBackgroundImage === 'Select Agent'
            ? images.agentSelectBannerImage
            : images.mapSelectBannerImage;
    };

    const bannerBackgroundColor = (): string => {
        return props.bannerBackgroundColor ? props.bannerBackgroundColor : 'black';
    };

    const overlay = () => {
        const shapeBlackOverlayDefaultWidth = '70%';
        return props.overlay === 'colored' ? (
            <ShapeColoredOverlay width={'60%'} height={'100%'} preserveAspectRatio="none" />
        ) : (
            <ShapeBlackOverlay
                width={
                    props.blackOverlayWidthPercentage
                        ? props.blackOverlayWidthPercentage
                        : shapeBlackOverlayDefaultWidth
                }
                height={'100%'}
                preserveAspectRatio="none"
            />
        );
    };
    return (
        <View
            style={[
                styles.bannerContainer,
                {
                    backgroundColor: bannerBackgroundColor(),
                },
            ]}
        >
            {/* Background Image */}
            <CustomCachedImage
                isBackground
                source={
                    props.backgroundImageUri
                        ? { uri: props.backgroundImageUri }
                        : defaultBackgroundImage()
                }
                backgroundImageStyle={[styles.backgroundImageStyle, props.backgroundImageStyle]}
                blurRadius={props.backgroundImageBlurRadius}
            >
                {/* Shape overlay  */}
                <View style={styles.shapeContainer}>{overlay()}</View>

                {/* Model Image */}
                {props.modelImage ? (
                    <View style={styles.modelContainerStyle}>
                        <CustomCachedImage
                            source={{ uri: props.modelImage }}
                            style={styles.modelImageStyle}
                        />
                    </View>
                ) : null}

                <View style={styles.screenTitleContainerStyle}>
                    {/* Screen Label */}
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit={true}
                        style={styles.screenTitleStyle}
                    >
                        {props.screenTitle}
                    </Text>
                    {/* Sub Title */}
                    {props.screenSubtitle ? (
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit={true}
                            style={styles.subTitleStyle}
                        >
                            {props.screenSubtitle}
                        </Text>
                    ) : null}

                    {/* Lineup Callout */}
                    {props.lineupDetails ? (
                        <View style={styles.lineupDetailsContainerStyle}>
                            {/* Callout */}
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit={true}
                                style={styles.lineupCalloutStyle}
                            >
                                {props.lineupDetails.lineupCallout}
                            </Text>

                            {/* Ability Image */}
                            <View style={styles.abilityImageContainerStyle}>
                                <CustomCachedImage
                                    source={{ uri: props.lineupDetails.lineupAbilityImage }}
                                    style={styles.abilityImageStyle}
                                />
                            </View>
                        </View>
                    ) : null}
                </View>
                {/* Bottom Highlight Line */}
                <View style={styles.bottomHighlightLineContainerStyle}>
                    <View style={styles.bottomHighlightLineStyle} />
                </View>
            </CustomCachedImage>
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    bannerContainer: {
        width: '100%',
        height: verticalScale(160),
        borderBottomLeftRadius: horizontalScale(25),
        borderBottomRightRadius: horizontalScale(25),
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(2),
        },
        shadowOpacity: 0.5,
        shadowRadius: moderateScale(5),
        elevation: moderateScale(12),
        zIndex: 5,
    },
    activityIndicatorStyle: {
        zIndex: 999,
        ...StyleSheet.absoluteFillObject,
    },
    backgroundImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderBottomLeftRadius: horizontalScale(25),
        borderBottomRightRadius: horizontalScale(25),
    },
    shapeContainer: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: horizontalScale(25),
        overflow: 'hidden',
    },
    modelContainerStyle: {
        width: '100%',
        height: verticalScale(155),
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    modelImageStyle: {
        width: '80%',
        height: '100%',
        resizeMode: 'stretch',
        alignSelf: 'flex-end',
        bottom: 0,
        borderBottomRightRadius: horizontalScale(25),
    },
    screenTitleContainerStyle: {
        width: '60%',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(16),
    },
    screenTitleStyle: {
        color: Colors.white,
        alignSelf: 'flex-start',
        fontSize: moderateScale(32),
        fontFamily: 'Tungsten',
        top: 0,
        bottom: 0,
        textTransform: 'uppercase',
        textShadowOffset: { width: 0, height: verticalScale(4) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
        letterSpacing: 0.5,
        elevation: horizontalScale(10),
    },
    subTitleStyle: {
        color: Colors.white,
        fontSize: moderateScale(18),
        fontFamily: 'Tungsten',
        top: 0,
        bottom: 0,
        opacity: 0.8,
        textTransform: 'capitalize',
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
        elevation: horizontalScale(6),
        letterSpacing: 0.8,
    },
    lineupCalloutStyle: {
        color: Colors.white,
        fontSize: moderateScale(24),
        fontFamily: 'Tungsten',
        top: 0,
        bottom: 0,
        textTransform: 'uppercase',
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
        elevation: horizontalScale(6),
        letterSpacing: 0.8,
    },
    bottomHighlightLineContainerStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: verticalScale(-2),
        alignItems: 'center',
    },
    bottomHighlightLineStyle: {
        width: '98%',
        height: '100%',
        borderColor: Colors.primary,
        borderBottomWidth: horizontalScale(2),
        borderBottomRightRadius: horizontalScale(25),
        borderBottomLeftRadius: horizontalScale(25),
    },
    lineupDetailsContainerStyle: {
        width: '80%',
        marginBottom: verticalScale(15),
    },
    abilityImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    abilityImageContainerStyle: {
        width: horizontalScale(24),
        height: verticalScale(24),
    },
});
