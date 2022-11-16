// React
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
// Components
import Slider from './slider';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';

type LineupDetailsSectionProps = {
    style?: StyleProp<ViewStyle> | undefined;
    sectionLabelText: string;
    contentImages?: number[];
};

const LineupDetailsSection = ({
    style,
    sectionLabelText,
    contentImages,
}: LineupDetailsSectionProps) => {
    return (
        <View style={style}>
            {/* Label */}
            <Text style={styles.sectionLabelTextStyle}>{sectionLabelText}</Text>
            {/* Images Slider */}
            <Slider contentImages={contentImages!} />
        </View>
    );
};

export default LineupDetailsSection;

const styles = StyleSheet.create({
    sectionLabelTextStyle: {
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
