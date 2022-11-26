// React
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// Components
import ImageWithIndicator from './ImageWithIndicator';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';

// Libraries
import { useNavigation } from '@react-navigation/native';
// Types
import { LineupDetailsType, LineupSelectScreenNavigationProp } from '../types';

type SitePickerDropDownItemProps = {
    data: LineupDetailsType;
};

const SitePickerDropDownItem = ({ data }: SitePickerDropDownItemProps) => {
    // Navigation
    const navigation = useNavigation<LineupSelectScreenNavigationProp>();
    function navigationHandler(lineupDetailsData: LineupDetailsType) {
        navigation.navigate('LineupDetails', { lineupDetailsData });
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigationHandler(data)}>
            <View style={styles.containerStyle}>
                {/* Black Background Overlay */}
                <View style={styles.blackBackgroundOverlayStyle} />

                <View style={styles.textsContainerStyle}>
                    {/* Label */}
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.textStyle}>
                        setup #{data.setupID}
                    </Text>
                    {/* Sub Label */}
                    <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.textStyle}>
                        {data.lineupCallout}
                    </Text>
                </View>
                {/* Setup Image */}
                <View style={styles.setupImageContainerStyle}>
                    <ImageWithIndicator
                        source={{ uri: data.lineupMinimap }}
                        style={styles.setupImageStyle}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

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
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.5,
    },
    textsContainerStyle: {
        flex: 1.5,
        justifyContent: 'center',
    },
    textStyle: {
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
        resizeMode: 'stretch',
    },
});
