// React
import { I18nManager, StatusBar, StyleSheet } from 'react-native';
// Libraries
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// Components
import RootNavigator from './src/navigation/RootNavigator';
// assets
import { Tungsten } from './src/assets/fonts';

// Disable RTL
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function App() {
    // Load Fonts
    const [loaded] = useFonts({
        Tungsten: Tungsten,
    });

    if (!loaded) {
        return null;
    }
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <SafeAreaView style={styles.appBackgroundStyle}>
                    <StatusBar barStyle={'light-content'} />
                    <RootNavigator />
                </SafeAreaView>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    appBackgroundStyle: {
        flex: 1,
        backgroundColor: '#000',
    },
});
