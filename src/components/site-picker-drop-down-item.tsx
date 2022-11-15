// React
import React from 'react';
import { StyleSheet, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Assets
import images from '../assets/images';
// Libraries
import { useNavigation } from '@react-navigation/native';
// Types
import { LineupSelectScreenNavigationProp } from '../types';

function SitePickerDropDownItem() {
    // Navigation
    const navigation = useNavigation<LineupSelectScreenNavigationProp>();
    function navigationHandler() {
        navigation.navigate('LineupDetails');
    }

    return (
        <TouchableWithoutFeedback onPress={navigationHandler}>
            <View style={styles.containerStyle}>
                {/* Black Background Overlay */}
                <View style={styles.blackBackgroundOverlayStyle} />
                {/* Label & SubLabel */}
                <View style={styles.textsContainerStyle}>
                    <Text style={styles.setupLabel}>setup #1</Text>
                    <Text style={styles.setupLabel}>Dish</Text>
                </View>
                {/* Setup Image */}
                <View style={styles.setupImageContainerStyle}>
                    <Image source={images.lineupMap} style={styles.setupImageStyle} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default SitePickerDropDownItem;

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        height: verticalScale(120),
        marginVertical: verticalScale(10),
        flexDirection: 'row',
    },
    blackBackgroundOverlayStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
    },
    textsContainerStyle: {
        flex: 1.2,
        justifyContent: 'center',
    },
    setupLabel: {
        color: Colors.white,
        fontSize: moderateScale(22),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.black,
        paddingHorizontal: horizontalScale(10),
    },
    setupImageContainerStyle: {
        flex: 2,
    },
    setupImageStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.offwhite,
        resizeMode: 'stretch',
    },
});
