// React
import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, Text, Image, View, ViewStyle } from 'react-native';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import Colors from '../utils/Colors';
// Assets
import { ShapeOverlay } from '../assets/svg';

type BannerProps = {
    style?: StyleProp<ViewStyle> | undefined;
    screenTitle: string;
    screenSubtitle?: string;
    agentImage?: number;
    backgroundImage: number;
};

const Banner = ({
    style,
    screenTitle,
    screenSubtitle,
    backgroundImage,
    agentImage,
}: BannerProps) => {
    return (
        // Banner Background Image
        <ImageBackground
            source={backgroundImage}
            imageStyle={styles.backgroundImageStyle}
            style={style}
        >
            {/* Banner Shape overlay  */}
            <ShapeOverlay width={'85%'} height={'100%'} preserveAspectRatio="none" />

            {/* Agent Image */}
            {agentImage ? (
                <View style={styles.agentContainerStyle}>
                    <Image source={agentImage} style={styles.agentImageStyle} />
                </View>
            ) : null}
            {/* Label */}
            <View style={styles.labelContainerStyle}>
                <Text style={styles.labelStyle}>{` \\\\ ${screenTitle}`}</Text>
                {screenSubtitle ? <Text style={styles.subLabelStyle}>{screenSubtitle}</Text> : null}
            </View>
        </ImageBackground>
    );
};

export default Banner;

const styles = StyleSheet.create({
    backgroundImageStyle: {
        width: '100%',
        height: '100%',
    },
    agentContainerStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    agentImageStyle: {
        width: '100%',
        height: '100%',
        right: horizontalScale(-30),
        resizeMode: 'stretch',
        bottom: 0,
    },
    labelContainerStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(16),
    },
    labelStyle: {
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
    },
    subLabelStyle: {
        color: Colors.white,
        fontSize: moderateScale(16),
        fontFamily: 'Tungsten',
        top: 0,
        bottom: 0,
        opacity: 0.7,
        marginLeft: horizontalScale(5),
        textTransform: 'uppercase',
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
    },
});
