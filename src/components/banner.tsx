// React
import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    ActivityIndicator,
    View,
    Image,
    StyleProp,
    ImageStyle,
} from 'react-native';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import Colors from '../utils/Colors';
// Assets
import { ShapeColoredOverlay, ShapeBlackOverlay } from '../assets/svg';
import images from '../assets/images';

type ScreenDefaultBackgroundImage = 'Select Agent' | 'Select Map';
type OverlayType = 'black' | 'colored';
type BannerProps = {
    screenTitle: string;
    screenSubtitle?: string;
    modelImage?: string;
    backgroundImageUri?: string;
    backgroundImageBlurRadius?: number;
    defaultBackgroundImage?: ScreenDefaultBackgroundImage;
    backgroundImageStyle?: StyleProp<ImageStyle> | undefined;
    overlay?: OverlayType;
};

const Banner: React.FC<BannerProps> = (props) => {
    // Loading Indicator State
    const [isImageLoading, setIsImageLoading] = React.useState<boolean>(true);
    function handleImageLoading(flag: boolean) {
        setIsImageLoading(flag);
    }

    const defaultBackgroundImage = (): number => {
        return props.defaultBackgroundImage === 'Select Agent'
            ? images.agentSelectBannerImage
            : images.mapSelectBannerImage;
    };

    const overlay = () => {
        return props.overlay === 'colored' ? (
            <ShapeColoredOverlay width={'60%'} height={'100%'} preserveAspectRatio="none" />
        ) : (
            <ShapeBlackOverlay width={'85%'} height={'100%'} preserveAspectRatio="none" />
        );
    };
    return (
        <View style={styles.bannerContainer}>
            {/* Loading Indicator  */}
            {isImageLoading ? (
                <ActivityIndicator
                    style={styles.activityIndicatorStyle}
                    size={'small'}
                    color={Colors.white}
                />
            ) : null}
            {/* Background Image */}
            <ImageBackground
                source={
                    props.backgroundImageUri
                        ? { uri: props.backgroundImageUri }
                        : defaultBackgroundImage()
                }
                imageStyle={[styles.backgroundImageStyle, props.backgroundImageStyle]}
                blurRadius={props.backgroundImageBlurRadius}
                onLoadStart={() => handleImageLoading(true)}
                onLoadEnd={() => handleImageLoading(false)}
            >
                {/* Shape overlay  */}
                <View style={styles.shapeContainer}>{overlay()}</View>

                {/* Model Image */}
                {props.modelImage ? (
                    <View style={styles.modelContainerStyle}>
                        <Image source={{ uri: props.modelImage }} style={styles.modelImageStyle} />
                    </View>
                ) : null}

                <View style={styles.screenTitleContainerStyle}>
                    {/* Label */}
                    <Text
                        numberOfLines={2}
                        adjustsFontSizeToFit={true}
                        style={styles.screenTitleStyle}
                    >
                        {props.screenTitle}
                    </Text>
                    {/* Sub Label */}
                    {props.screenSubtitle ? (
                        <Text style={styles.subTitleStyle}>{props.screenSubtitle}</Text>
                    ) : null}
                </View>
                {/* Bottom Highlight Line */}
                <View style={styles.bottomHighlightLineContainerStyle}>
                    <View style={styles.bottomHighlightLineStyle} />
                </View>
            </ImageBackground>
        </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
    bannerContainer: {
        width: '100%',
        height: verticalScale(160),
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
        width: '70%',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(16),
    },
    screenTitleStyle: {
        color: Colors.white,
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
        fontSize: moderateScale(16),
        fontFamily: 'Tungsten',
        top: 0,
        bottom: 0,
        opacity: 0.8,
        textTransform: 'uppercase',
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
        elevation: horizontalScale(6),
        letterSpacing: 0.5,
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
});
