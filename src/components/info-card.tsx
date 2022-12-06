// React
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components
import CustomCachedImage from './custom-cached-image';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';

type InfoCardProps = {
    image: number;
    message: string;
};

const InfoCard = ({ image, message }: InfoCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                {/* Black overlay */}
                <View style={styles.blackoverlay} />
                {/* Image */}
                <CustomCachedImage style={styles.imageStyle} source={image} />
                {/* Message */}
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.messageStyle}>
                    {message}
                </Text>
            </View>
        </View>
    );
};

export default InfoCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messageContainer: {
        flex: 1,
        marginVertical: verticalScale(32),
        marginHorizontal: horizontalScale(16),
        alignItems: 'center',
        justifyContent: 'center',
    },
    blackoverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors.black,
        borderRadius: moderateScale(25),
        opacity: 0.7,
    },
    imageStyle: {
        height: verticalScale(150),
        width: horizontalScale(200),
        top: verticalScale(-15),
    },
    messageStyle: {
        color: Colors.white,
        fontSize: moderateScale(28),
        fontFamily: 'Tungsten',
        textTransform: 'capitalize',
        letterSpacing: 0.5,
        marginHorizontal: horizontalScale(15),
        alignSelf: 'center',
    },
});
