// React
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Libraries
import { Ionicons } from '@expo/vector-icons';

const FavouritesButton = () => {
    const [isFavourite, setIsFavourite] = React.useState<Boolean>(false);

    // If not Favourite
    if (isFavourite) {
        return (
            <TouchableWithoutFeedback onPress={() => setIsFavourite(!isFavourite)}>
                <View style={styles.containerStyle}>
                    {/* Button Text */}
                    <Text style={styles.textStyle}>Add To Favourites</Text>
                    {/* Button Icon */}
                    <View style={styles.iconStyleContainer}>
                        <Ionicons name="heart" size={moderateScale(24)} color={Colors.white} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    } else {
        //  If Favourite
        return (
            <TouchableWithoutFeedback onPress={() => setIsFavourite(!isFavourite)}>
                <View
                    style={[
                        styles.containerStyle,
                        { width: horizontalScale(50), backgroundColor: Colors.primary },
                    ]}
                >
                    {/* Button Icon */}
                    <View style={styles.iconStyleContainer_active}>
                        <Ionicons name="heart" size={moderateScale(24)} color={Colors.white} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

export default FavouritesButton;

const styles = StyleSheet.create({
    containerStyle: {
        height: verticalScale(40),
        paddingHorizontal: horizontalScale(5),
        backgroundColor: Colors.grey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginTop: verticalScale(15),
    },
    textStyle: {
        flex: 0.75,
        color: Colors.white,
        fontSize: moderateScale(14),
        fontFamily: 'Tungsten',
        textAlignVertical: 'center',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    iconStyleContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyleContainer_active: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
