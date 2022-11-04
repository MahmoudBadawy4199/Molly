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
import Agent from '../components/agent';
import images from '../../assets/images/mock';

const AgentSelect = () => {
    return (
        <SafeAreaView style={styles.main}>
            {/* Gradient */}
            <BackgroundGradient />
            {/* Container with Background overlay */}
            <Container style={styles.containerStyle}>
                {/* Label */}
                <Text style={styles.labelStyle}>select your agent</Text>
                {/* Static Agent Item*/}
                <View style={styles.agentContainerStyle}>
                    <Agent
                        gradientColors={[
                            'rgba(104, 20, 0, 1)',
                            'rgba(159, 58, 4,1)',
                            'rgba(183, 151, 129,1)',
                            'rgba(255, 237, 203,1)',
                            'rgba(255, 237, 173,1)',
                        ]}
                        shadowColor="#FF972F"
                        modelImage={images.brim}
                        nameImage={images.brimName}
                        roleImage={images.role}
                    />
                    <Agent
                        gradientColors={[
                            'rgba(33, 55, 38, 1)',
                            'rgba(58, 115, 97,1)',
                            'rgba(100, 161, 113,1)',
                            'rgba(176, 255, 176,1)',
                            'rgba(173, 255, 200,1)',
                        ]}
                        shadowColor="#89F476"
                        modelImage={images.viper}
                        nameImage={images.viperName}
                        roleImage={images.role}
                    />
                </View>
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
        textShadowOffset: { width: 0, height: verticalScale(4) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
    },
    agentContainerStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
});
