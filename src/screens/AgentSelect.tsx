// React
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// Libraries
import { SafeAreaView } from 'react-native-safe-area-context';
// Utils
import Colors from '../utils/Colors';
import Container from '../components/container-with-background-overlay';
import { moderateScale, verticalScale } from '../utils/Scale';
// Components
import BackgroundGradient from '../components/background-gradient';

const AgentSelect = () => {
    return (
        <SafeAreaView style={styles.main}>
            {/* Gradient */}
            <BackgroundGradient />
            {/* Container with Background overlay */}
            <Container style={styles.containerStyle}>
                {/* Label */}
                <Text style={styles.labelStyle}>select your agent</Text>
            </Container>
        </SafeAreaView>
    );
};

export default AgentSelect;

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.darknavy,
    },
    containerStyle: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
    },
    labelStyle: {
        color: Colors.white,
        fontSize: moderateScale(38),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        marginTop: verticalScale(32),
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 2,
        textShadowColor: Colors.black,
    },
});
