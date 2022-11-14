// React
import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    View,
    Image,
    ViewStyle,
    TouchableWithoutFeedback,
} from 'react-native';
// Components
import BackgroundGradient from './background-gradient';
import SitePickerDropDownItem from './site-picker-drop-down-item';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Libraries
import { Ionicons } from '@expo/vector-icons';

type SitePickerProps = {
    style?: StyleProp<ViewStyle> | undefined;
    siteLetter: string;
    siteImage?: number;
};

const SitePicker = ({ style, siteLetter, siteImage }: SitePickerProps) => {
    const [isDropped, setIsDropped] = React.useState<Boolean>(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsDropped(!isDropped)}>
                {/* Site Letter Item */}
                <View style={[styles.containerStyle, style]}>
                    {/* Background Gradient Color */}
                    <BackgroundGradient
                        style={styles.backgroundGradient}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        gradientColors={[Colors.primary, Colors.accent, Colors.dark]}
                        locations={[0, 0.5, 1]}
                    />
                    {/* Letter Text */}
                    <View style={styles.letterContainerStyle}>
                        <Text style={styles.letterTextStyle}>{siteLetter}</Text>
                    </View>
                    {/* Arrow Icon */}
                    <View style={styles.arrowIconContainerStyle}>
                        <Ionicons
                            name="md-arrow-forward"
                            size={24}
                            color="white"
                            style={styles.arrowIconStyle}
                        />
                    </View>
                    {/* Site Minimap Image */}
                    <View style={styles.siteMinimapImageContainerStyle}>
                        <Image source={siteImage} style={styles.siteMinimapImageStyle} />
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {/* DropDown List */}

            {isDropped ? (
                <View style={styles.dropDownContainerStyle}>
                    {/* Background Gradient */}
                    <BackgroundGradient
                        style={styles.backgroundGradient}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        gradientColors={[Colors.primary, Colors.accent, Colors.dark]}
                        locations={[0, 0.5, 1]}
                    />
                    {/* Static Drop Down Items For Mocking */}
                    <SitePickerDropDownItem />
                    <SitePickerDropDownItem />
                </View>
            ) : null}
        </>
    );
};

export default SitePicker;

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: moderateScale(5),
        flexDirection: 'row',
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
        marginVertical: verticalScale(15),
    },
    backgroundGradient: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: moderateScale(5),
    },
    letterContainerStyle: {
        flex: 3,
        justifyContent: 'center',
    },
    letterTextStyle: {
        color: Colors.white,
        fontSize: moderateScale(28),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        letterSpacing: 1,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.black,
        paddingHorizontal: 10,
    },
    arrowIconContainerStyle: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    arrowIconStyle: {
        paddingRight: horizontalScale(15),
    },
    siteMinimapImageContainerStyle: {
        flex: 4,
        borderRadius: moderateScale(5),
        alignContent: 'center',
        justifyContent: 'center',
    },
    siteMinimapImageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: moderateScale(5),
        backgroundColor: Colors.offwhite,
    },
    dropDownContainerStyle: {
        alignSelf: 'center',
        height: undefined,
        width: '95%',
        top: verticalScale(-20),
        paddingTop: verticalScale(15),
        paddingBottom: verticalScale(5),
    },
});
