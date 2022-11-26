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
};
const FavouritesButton = ({ style }: FavouritesButtonProps) => {
    const [isNotFavourite, setIsNotFavourite] = React.useState<Boolean>(true);
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
        setIsNotFavourite(!isNotFavourite);
    };
    return (
        <TouchableWithoutFeedback onPress={() => toggleFavourite()}>
            <View
                style={[
                    styles.containerStyle,
                    isNotFavourite ? styles.containerStyle : styles.containerStyle_active,
                    style,
                ]}
            >
                {/* Button Text */}
                {isNotFavourite ? <Text style={styles.textStyle}>Add To Favourites</Text> : null}
                {/* Button Icon */}
                <View
                    style={[
                        styles.iconStyleContainer,
                        styles[isNotFavourite ? 'iconStyleContainer' : 'iconStyleContainer_active'],
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
        width: '45%',
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
