// React
import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableWithoutFeedback,
    StyleProp,
    ViewStyle,
} from 'react-native';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import Colors from '../utils/Colors';
// Assets
import { DiamondOverlay } from '../assets/svg';
// Types
import { MapItemType } from '../types';

type MapItemProps = {
    mapData: MapItemType;
    style?: StyleProp<ViewStyle>;
    onPress: () => void;
};
const MapItem = ({ mapData, style, onPress }: MapItemProps) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.containerStyle, style]}>
                {/* Map Background Image */}
                <Image source={{ uri: mapData.splashImage }} style={styles.mapImageStyle} />
                {/* Darker Overlay To Control Map Brightness */}
                <View style={styles.darkerOverlayOnMapStyle} />
                {/* White Diamond Overlay Behind Map Title */}
                <DiamondOverlay style={styles.diamondOverlayStyle} width={'100%'} height={'100%'} />
                {/* Map Title */}
                <Text style={styles.titleStyle}>{mapData.mapName}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MapItem;

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapImageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
        resizeMode: 'cover',
        ...StyleSheet.absoluteFillObject,
    },
    darkerOverlayOnMapStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        position: 'absolute',
        opacity: 0.1,
        borderRadius: 6,
    },
    diamondOverlayStyle: {
        position: 'absolute',
    },
    titleStyle: {
        color: Colors.white,
        fontSize: moderateScale(26),
        fontFamily: 'Tungsten',
        top: 0,
        bottom: 0,
        textTransform: 'uppercase',
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
        elevation: horizontalScale(10),
        letterSpacing: 0.8,
    },
});
