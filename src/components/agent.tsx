// React
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
// Libraries
import { LinearGradient } from 'expo-linear-gradient';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';

type AgentProp = {
    gradientColors: Array<string>;
    shadowColor: string;
    modelImage: number;
    nameImage: number;
    roleImage: number;
    onPress: () => void;
};

const Agent = (props: AgentProp) => {
    const shadowColor = props.shadowColor;
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.container, { shadowColor }]}>
            {/* Background Gradient */}
            <LinearGradient
                colors={props.gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                locations={[0, 0.25, 0.5, 0.75, 1]}
                style={styles.gradientStyle}
            />

            {/* Black Overlay on Gradient */}
            <View style={styles.blackOverlay} />

            {/* Role */}
            <Image style={styles.roleStyle} source={props.roleImage} />

            {/* Name */}
            <Image style={styles.nameStyle} source={props.nameImage} />

            {/* Model */}
            <Image style={styles.modelStyle} source={props.modelImage} />
        </TouchableOpacity>
    );
};

export default Agent;

const styles = StyleSheet.create({
    gradientStyle: {
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(10),
        position: 'absolute',
    },
    blackOverlay: {
        width: '100%',
        height: '96%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.2,
        borderRadius: moderateScale(10),
    },
    container: {
        flexDirection: 'row',
        height: '25%',
        shadowOffset: {
            width: 0,
            height: verticalScale(4),
        },
        shadowOpacity: 0.5,
        shadowRadius: 0,
    },
    roleStyle: {
        flex: 0.08,
        height: undefined,
        width: undefined,
        resizeMode: 'contain',
        marginLeft: horizontalScale(16),
        marginRight: horizontalScale(5),
        shadowOffset: {
            width: 0,
            height: verticalScale(3),
        },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    nameStyle: {
        flex: 0.4,
        height: undefined,
        width: undefined,
        resizeMode: 'contain',
        shadowOffset: {
            width: 0,
            height: verticalScale(1),
        },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    modelStyle: {
        height: verticalScale(120),
        width: horizontalScale(120),
        resizeMode: 'stretch',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderBottomRightRadius: moderateScale(10),
    },
});
