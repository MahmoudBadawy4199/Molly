// React
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components
import Container from '../components/container-with-background-overlay';
import BackgroundGradient from '../components/background-gradient';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import Colors from '../utils/Colors';

const About = () => {
    return (
        <>
            <Container>
                {/* Background Gradient */}
                <BackgroundGradient style={styles.backgroundGradientStyle} />
                <View style={styles.textsContainer}>
                    {/* Label */}
                    <Text style={styles.labelStyle}>about</Text>
                    <View style={styles.textContainerStyle}>
                        {/* Dot */}
                        <Text style={styles.dotStyle}>{'\u2022'}</Text>
                        {/* Text */}
                        <Text style={styles.textStyle}>
                            Molly is a fan project that features various lineups for many agents.
                        </Text>
                    </View>
                    <View style={styles.textContainerStyle}>
                        {/* Dot */}
                        <Text style={styles.dotStyle}>{'\u2022'}</Text>
                        {/* Text */}
                        <Text style={styles.textStyle}>
                            Molly was created under Riot Games' "Legal Jibber Jabber" policy using
                            assets owned by Riot Games. Riot Games does not endorse or sponsor this
                            project.
                        </Text>
                    </View>
                </View>
            </Container>
        </>
    );
};

export default About;

const styles = StyleSheet.create({
    backgroundGradientStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -2,
    },
    textsContainer: {
        paddingHorizontal: horizontalScale(16),
    },
    labelStyle: {
        color: Colors.white,
        fontSize: moderateScale(38),
        fontFamily: 'Tungsten',
        alignSelf: 'flex-start',
        textTransform: 'uppercase',
        marginTop: verticalScale(32),
        textShadowOffset: { width: 0, height: verticalScale(4) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
    },
    textContainerStyle: {
        flexDirection: 'row',
        marginVertical: verticalScale(12),
    },
    textStyle: {
        color: Colors.white,
        fontSize: moderateScale(22),
        maxWidth: '95%',
        textAlign: 'left',
        alignSelf: 'flex-start',
        lineHeight: moderateScale(24),
        letterSpacing: 0.6,
        fontFamily: 'Tungsten',
    },
    dotStyle: {
        color: Colors.white,
        fontSize: moderateScale(24),
        fontFamily: 'Tungsten',
        paddingRight: horizontalScale(15),
    },
});
