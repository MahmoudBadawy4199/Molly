// React
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
// Components
import Container from '../components/container-with-background-overlay';
import Banner from '../components/banner';
import SitePicker from '../components/site-picker';
// Utils
import Colors from '../utils/Colors';
import { moderateScale, verticalScale } from '../utils/Scale';
// Assets
import images from '../assets/images';

const LineupSelect = () => {
    return (
        <View style={styles.main}>
            {/* Container with Background overlay */}
            <Container style={styles.containerStyle}>
                {/* Banner */}
                <View style={styles.bannerContainerStyle}>
                    <Banner
                        screenTitle="Lineups"
                        screenSubtitle={`35°48'BI\\"N 106°08'YQ\\"W`}
                        backgroundImage={images.ascent}
                    />
                </View>
                {/* Body  */}
                <ScrollView
                    style={styles.scrollViewStyle}
                    contentContainerStyle={styles.scrollViewContentContainerStyle}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Static Scrollable Items */}
                    <Text style={styles.sitesTextStyle}>Sites</Text>
                    <SitePicker
                        style={styles.sitePickerItemStyle}
                        siteLetter={'A'}
                        siteImage={images.minimap}
                    />
                    <SitePicker
                        style={styles.sitePickerItemStyle}
                        siteLetter={'B'}
                        siteImage={images.minimap}
                    />
                </ScrollView>
            </Container>
        </View>
    );
};

export default LineupSelect;

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.darknavy,
        flex: 1,
    },
    containerStyle: {
        flex: 1,
    },
    bannerContainerStyle: {
        flex: 0.5,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: verticalScale(2),
        },
        shadowOpacity: 0.5,
        shadowRadius: moderateScale(5),
        elevation: moderateScale(12),
        zIndex: 10,
        borderBottomWidth: 0.4,
        borderColor: Colors.black,
    },
    scrollViewStyle: {
        flex: 1,
        padding: moderateScale(16),
    },
    scrollViewContentContainerStyle: {
        paddingBottom: verticalScale(25),
    },
    sitesTextStyle: {
        color: Colors.white,
        fontSize: moderateScale(32),
        fontFamily: 'Tungsten',
        backgroundColor: Colors.darknavy,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.accent,
    },
    sitePickerItemStyle: {
        width: '100%',
        height: verticalScale(60),
    },
});
