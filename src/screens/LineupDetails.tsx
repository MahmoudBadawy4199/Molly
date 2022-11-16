// React
import React from 'react';
import { ScrollView, Platform, StyleSheet, Image, Text, View } from 'react-native';
// Components
import Container from '../components/container-with-background-overlay';
import BackgroundGradient from '../components/background-gradient';
import LineupDetailsSection from '../components/lineup-details-section';
// Libraries
import YoutubeIframe from 'react-native-youtube-iframe';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Assets
import images from '../assets/images';
import { ShapeColorOverlay } from '../assets/svg';

const LineupDetails = () => {
    return (
        <View style={styles.main}>
            {/* Container with Background overlay */}
            <Container style={styles.containerStyle}>
                {/* Banner */}
                <View style={styles.bannerContainerStyle}>
                    <Image source={images.lineupMap} style={styles.lineupMapStyle} />
                    {/* Colorful Shape Overlay */}
                    <ShapeColorOverlay
                        width={'60%'}
                        height={'100%'}
                        preserveAspectRatio="none"
                        style={styles.shapeColorOverlayStyle}
                    />

                    {/* Label */}
                    <View style={styles.labelContainerStyle}>
                        <Text style={styles.labelStyle}>{`setup #1`}</Text>
                        <Text style={styles.labelStyle}>Dish</Text>
                    </View>
                </View>
                {/* Body  */}
                {/* Colorful Background Gradient */}
                <View style={styles.bodyStyle}>
                    <BackgroundGradient style={styles.backgroundGradientStyle} />
                    {/* Modify to Flatlist when Server Data Arrives */}
                    <ScrollView
                        style={styles.scrollViewStyle}
                        contentContainerStyle={styles.scrollViewContentContainerStyle}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Video Tutorial Section */}
                        <Text style={styles.sectionLabelTextStyle}>video tutorial</Text>
                        <YoutubeIframe
                            height={verticalScale(185)}
                            videoId={'xIXHAz4v3IA'}
                            // To Fix Webview Crash on Android Devices
                            webViewStyle={styles.webViewStyle}
                            webViewProps={{
                                androidLayerType:
                                    Platform.OS === 'android' && Platform.Version <= 22
                                        ? 'hardware'
                                        : 'none',
                            }}
                        />

                        {/* Static Scrollable Items */}
                        <LineupDetailsSection
                            style={{ marginVertical: 10 }}
                            contentImages={[images.spike, images.lineup, images.result]}
                            sectionLabelText={'/ spike'}
                        />
                        <LineupDetailsSection
                            style={{ marginVertical: 10 }}
                            contentImages={[images.position]}
                            sectionLabelText={'// position'}
                        />
                        <LineupDetailsSection
                            style={{ marginVertical: 10 }}
                            contentImages={[images.lineup]}
                            sectionLabelText={'/// lineup'}
                        />
                        <LineupDetailsSection
                            style={{ marginVertical: 10 }}
                            contentImages={[images.result]}
                            sectionLabelText={'//// result'}
                        />
                    </ScrollView>
                </View>
            </Container>
        </View>
    );
};

export default LineupDetails;

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
    lineupMapStyle: {
        width: '70%',
        height: '100%',
        alignSelf: 'flex-end',
        resizeMode: 'stretch',
    },
    shapeColorOverlayStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    labelContainerStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        paddingHorizontal: horizontalScale(16),
    },
    labelStyle: {
        color: Colors.white,
        fontSize: moderateScale(32),
        fontFamily: 'Tungsten',
        top: 0,
        bottom: 0,
        textTransform: 'uppercase',
        textShadowOffset: { width: 0, height: verticalScale(4) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
        letterSpacing: 0.5,
    },
    bodyStyle: {
        flex: 1,
    },
    backgroundGradientStyle: {
        width: '100%',
        height: '100%',
        zIndex: -2,
        position: 'absolute',
    },
    scrollViewStyle: {
        flex: 1,
    },
    scrollViewContentContainerStyle: {
        paddingTop: verticalScale(15),
        paddingBottom: verticalScale(25),
    },
    sectionLabelTextStyle: {
        color: Colors.white,
        fontSize: moderateScale(28),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        alignSelf: 'center',
        paddingBottom: 10,
        textShadowOffset: { width: 0, height: verticalScale(2) },
        textShadowRadius: moderateScale(1),
        textShadowColor: Colors.black,
    },
    webViewStyle: {
        opacity: 0.99,
    },
});
