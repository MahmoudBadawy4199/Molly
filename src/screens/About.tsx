// React
import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

// Components
import Container from '../components/container-with-background-overlay';
import BackgroundGradient from '../components/background-gradient';
// Utils
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
import Colors from '../utils/Colors';
// Assets
import { DiscordIcon } from '../assets/svg';

const About = () => {
    const openDiscord = () => {
        Linking.openURL('https://discord.gg/e3U46HSFNk');
    };
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
                    <View style={styles.textContainerStyle}>
                        {/* Dot */}
                        <Text style={styles.dotStyle}>{'\u2022'}</Text>
                        {/* Text */}
                        <Text style={styles.textStyle}>Have issues or suggestions? DM me.</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.discordButtonStyle}
                        onPress={openDiscord}
                    >
                        <View style={styles.discordButtonContentContainerStyle}>
                            <DiscordIcon width={horizontalScale(40)} height={verticalScale(40)} />
                            <Text style={styles.discordTextStyle}>Join the discord</Text>
                        </View>
                    </TouchableOpacity>
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
    discordButtonStyle: {
        height: verticalScale(60),
        width: '90%',
        alignSelf: 'center',
        borderRadius: moderateScale(15),
        backgroundColor: '#3858A3',
    },
    discordButtonContentContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    discordTextStyle: {
        color: Colors.white,
        marginLeft: horizontalScale(15),
        fontSize: moderateScale(22),
        letterSpacing: 0.6,
        fontFamily: 'Tungsten',
    },
});
