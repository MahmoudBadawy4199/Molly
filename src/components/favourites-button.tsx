// React
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation,
    StyleProp,
    ViewStyle,
} from 'react-native';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Libraries
import { Ionicons } from '@expo/vector-icons';

type FavouritesButtonProps = {
    style: StyleProp<ViewStyle> | undefined;
    active: boolean;
};
const FavouritesButton = ({ style, active }: FavouritesButtonProps) => {
    const [isFavourite, setIsFavourite] = React.useState<Boolean>(active);

    const toggleFavourite = () => {
        const layoutAnimationConfig = {
            duration: 300,
            update: {
                type: LayoutAnimation.Types.easeInEaseOut,
            },
            delete: {
                duration: 100,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity,
            },
        };
        // animate the Layout Change When the DropDown Appears or Hide
        LayoutAnimation.configureNext(layoutAnimationConfig);
        // Change the State for On / Off
        setIsFavourite(!isFavourite);
    };
    return (
        <TouchableWithoutFeedback onPress={() => toggleFavourite()}>
            <View
                style={[
                    styles.containerStyle,
                    isFavourite ? styles.containerStyle_active : styles.containerStyle,
                    style,
                ]}
            >
                {/* Button Text */}
                {isFavourite ? null : (
                    <Text adjustsFontSizeToFit numberOfLines={1} style={styles.textStyle}>
                        Add To Favourites
                    </Text>
                )}
                {/* Button Icon */}
                <View
                    style={[
                        styles.iconStyleContainer,
                        styles[isFavourite ? 'iconStyleContainer_active' : 'iconStyleContainer'],
                    ]}
                >
                    <Ionicons name="heart" size={moderateScale(24)} color={Colors.white} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default FavouritesButton;

const styles = StyleSheet.create({
    containerStyle: {
        width: '40%',
        height: verticalScale(30),
        paddingHorizontal: horizontalScale(5),
        backgroundColor: Colors.grey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        zIndex: 10,
    },
    containerStyle_active: {
        width: horizontalScale(50),
        height: verticalScale(30),
        paddingHorizontal: horizontalScale(5),
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginTop: verticalScale(15),
    },
    textStyle: {
        flex: 0.7,
        color: Colors.white,
        fontSize: moderateScale(14),
        fontFamily: 'Tungsten',
        textAlignVertical: 'center',
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    iconStyleContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyleContainer_active: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
