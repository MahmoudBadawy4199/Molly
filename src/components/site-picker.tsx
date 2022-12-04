// React
import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
    TouchableWithoutFeedback,
    Animated,
    LayoutAnimation,
    ImageStyle,
} from 'react-native';
// Components
import BackgroundGradient from './background-gradient';
import SitePickerDropDownItem from './site-picker-drop-down-item';
import ImageWithIndicator from './ImageWithIndicator';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Libraries
import { Ionicons } from '@expo/vector-icons';
import { lineupType } from '../types';

type SitePickerProps = {
    style?: StyleProp<ViewStyle> | undefined;
    title: string;
    image: string;
    imageStyle?: StyleProp<ImageStyle>;
    lineupItemsData: lineupType[];
    favouritesStack?: boolean;
    onItemPress: (lineupID: string) => void;
};

const SitePicker = ({
    style,
    title,
    image,
    imageStyle,
    lineupItemsData,
    favouritesStack,
    onItemPress,
}: SitePickerProps) => {
    const [isDropped, setIsDropped] = React.useState<Boolean>(false);
    const animationController = React.useRef(new Animated.Value(0)).current;
    // Show or Hide the DropDown List
    const toggleDropDown = () => {
        const arrowAnimationConfig = {
            duration: 300,
            toValue: isDropped ? 0 : 1,
            useNativeDriver: true,
        };
        // Arrow Icon Animation Start
        Animated.timing(animationController, arrowAnimationConfig).start();
        // animate the Layout Change When the DropDown Appears or Hide
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        // Change the State for On / Off
        setIsDropped(!isDropped);
    };
    // Arrow Icon Animation
    const arrowTransform = animationController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    });
    return (
        <>
            <TouchableWithoutFeedback onPress={() => toggleDropDown()}>
                <View style={[styles.containerStyle, style]}>
                    {/* Background Gradient Color */}
                    <BackgroundGradient
                        style={styles.backgroundGradientStyle}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        gradientColors={[Colors.primary, Colors.accent, Colors.dark]}
                        locations={[0, 0.5, 1]}
                    />
                    {/* Title */}
                    <View style={styles.titleContainerStyle}>
                        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.titleStyle}>
                            {title}
                        </Text>
                    </View>
                    {/* Arrow Icon */}
                    <View style={styles.arrowIconContainerStyle}>
                        <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
                            <Ionicons name="md-arrow-forward" size={24} color="white" />
                        </Animated.View>
                    </View>
                    {/* Image */}
                    <View style={styles.imageContainerStyle}>
                        <ImageWithIndicator
                            source={{ uri: image }}
                            style={[styles.imageStyle, imageStyle]}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {/* DropDown List */}
            {isDropped ? (
                <View style={styles.dropDownContainerStyle}>
                    {/* Background Gradient */}
                    <BackgroundGradient
                        style={styles.backgroundGradientStyle}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        gradientColors={[Colors.primary, Colors.accent, Colors.dark]}
                        locations={[0, 0.5, 1]}
                    />

                    {lineupItemsData.map((item) => (
                        <SitePickerDropDownItem
                            favouritesStack={favouritesStack}
                            key={item.data.lineupID}
                            lineup={item}
                            onPress={onItemPress}
                        />
                    ))}
                </View>
            ) : null}
        </>
    );
};

export default SitePicker;

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        marginVertical: verticalScale(20),
        borderRadius: moderateScale(5),
        borderWidth: 0.5,
        borderColor: Colors.black,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(2),
        },
        shadowOpacity: 0.5,
        shadowRadius: moderateScale(5),
        elevation: moderateScale(12),
        zIndex: 10,
    },
    backgroundGradientStyle: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: moderateScale(5),
    },
    titleContainerStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    titleStyle: {
        color: Colors.white,
        fontSize: moderateScale(18),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.black,
        paddingHorizontal: 10,
    },
    arrowIconContainerStyle: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: horizontalScale(15),
    },
    imageContainerStyle: {
        flex: 1.2,
        borderRadius: moderateScale(5),
        alignContent: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        resizeMode: 'stretch',
        borderRadius: moderateScale(5),
    },
    dropDownContainerStyle: {
        alignSelf: 'center',
        height: undefined,
        width: '95%',
        top: verticalScale(-25),
        paddingTop: verticalScale(15),
        paddingBottom: verticalScale(5),
    },
});
