import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Container from '../components/container-with-background-overlay';
import BackgroundGradient from '../components/background-gradient';
const AgentSelect = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BackgroundGradient />
            <Container>
                <View>
                    <Text style={{ fontSize: 32, color: 'white' }}>sakldashdkasdashdlaksjas</Text>
                </View>
            </Container>
        </SafeAreaView>
    );
};

export default AgentSelect;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.darknavy,
        flex: 1,
        alignContent: 'center',
    },
    gradient: {
        width: '100%',
        height: '35%',
        position: 'absolute',
    },
});
