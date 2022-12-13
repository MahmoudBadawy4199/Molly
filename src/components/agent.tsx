// React
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
// Components
import BackgroundGradient from './background-gradient';
import CustomCachedImage from './custom-cached-image';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Types
import { AgentType } from '../types';

type AgentProps = {
    data: AgentType;
};
const Agent = ({ data }: AgentProps) => {
    return (
        <View style={[styles.container, { shadowColor: data.shadowColor }]}>
            {/* Background Gradient */}
            <BackgroundGradient
                gradientColors={data.gradientColors}
                locations={[0, 0.25, 0.5, 0.75, 1]}
                style={styles.gradientStyle}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            />

            {/* Black Overlay on Gradient */}
            <View style={styles.blackOverlay} />

            {/* Role */}
            <CustomCachedImage style={styles.roleStyle} source={{ uri: data.roleImage }} />

            {/* Name */}
            <CustomCachedImage style={styles.nameStyle} source={{ uri: data.nameImage }} />

            {/* Model */}
            <CustomCachedImage style={styles.modelStyle} source={{ uri: data.modelImage }} />

            {/* Shadow Under Component Workaround For Android */}
            {Platform.OS === 'android' ? (
                <View style={[styles.shadowWorkaround, { backgroundColor: data.shadowColor }]} />
            ) : null}
        </View>
    );
};

export default Agent;

const styles = StyleSheet.create({
    container: {
        width: '98%',
        height: verticalScale(100),
        alignSelf: 'center',
        flexDirection: 'row',
        marginVertical: verticalScale(25),
        shadowOffset: {
            width: 0,
            height: verticalScale(4),
        },
        shadowOpacity: 0.5,
        shadowRadius: 0,
    },
    gradientStyle: {
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(10),
        position: 'absolute',
        zIndex: -3,
    },
    blackOverlay: {
        width: '100%',
        height: '96%',
        position: 'absolute',
        zIndex: -2,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.2,
        borderRadius: moderateScale(10),
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
        height: '30%',
        width: undefined,
        resizeMode: 'stretch',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: verticalScale(2),
        },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    modelStyle: {
        height: verticalScale(120),
        width: horizontalScale(160),
        zIndex: -1,
        resizeMode: 'stretch',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderBottomRightRadius: moderateScale(10),
    },
    shadowWorkaround: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.5,
        zIndex: -5,
        borderRadius: moderateScale(10),
        bottom: verticalScale(-5),
    },
});
