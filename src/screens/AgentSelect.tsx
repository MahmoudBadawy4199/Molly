import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const AgentSelect = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>AgentSelec uuuuguhghght</Text>
            </View>
        </SafeAreaView>
    );
};

export default AgentSelect;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.darknavy,
        flex: 1,
    },
});
