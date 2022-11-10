// React
import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, Text, Image, View, ViewStyle } from 'react-native';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import Colors from '../utils/Colors';
// Assets
import images from '../../src/assets/images';
import { ShapeOverlay } from '../assets/svg';

type BannerProps = {
    style?: StyleProp<ViewStyle> | undefined;
};

const Banner = ({ style }: BannerProps) => {
    return (
        // Banner Background Image
        <ImageBackground
            source={images.mapSelectBackground}
            imageStyle={styles.backgroundImageStyle}
            style={style}
            blurRadius={10}
        >
            {/* Banner Shape overlay  */}
            <ShapeOverlay width={'85%'} height={'100%'} preserveAspectRatio="none" />

            {/* Agent Image */}
            <View style={styles.agentContainerStyle}>
                <Image source={images.viperMap} style={styles.agentImageStyle} />
            </View>
            {/* Label */}
            <View style={styles.labelContainerStyle}>
                <Text style={styles.labelStyle}>\\ Choose Map</Text>
            </View>
        </ImageBackground>
    );
};

export default Banner;

const styles = StyleSheet.create({
    backgroundImageStyle: {
        width: '100%',
        height: '100%',
        transform: [{ rotateY: '180deg' }],
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
    },
});
