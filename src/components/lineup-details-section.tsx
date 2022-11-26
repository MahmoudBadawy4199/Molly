// React
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components
import Slider from './slider';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import { sectionType } from '../types';

type LineupDetailsSectionProps = {
    data: sectionType;
};

const LineupDetailsSection = ({ data }: LineupDetailsSectionProps) => {
    return (
        <View style={styles.containerStyle}>
            {/* Label */}
            <Text style={styles.titleStyle}>{data.title}</Text>
            {/* Images Slider */}
            <Slider screenshots={data.screenshots} />
        </View>
    );
};

export default LineupDetailsSection;

const styles = StyleSheet.create({
    containerStyle: {
        marginVertical: verticalScale(12),
    },
    titleStyle: {
        color: Colors.white,
        fontSize: moderateScale(28),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        alignSelf: 'flex-start',
        paddingLeft: horizontalScale(16),
        paddingBottom: 10,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.black,
    },
});
