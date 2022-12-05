// React
import { I18nManager, StatusBar, StyleSheet } from 'react-native';
// Libraries
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// Components
import TabNavigator from './src/navigation/TabNavigator';
// assets
import { Tungsten } from './src/assets/fonts';
// Hooks
import useLoadContent from './src/hooks/useLoadContent';
import useLoadFavourites from './src/hooks/useLoadFavourites';
// Redux & Redux Persist
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';

// Disable RTL
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
// View Splash Screen Until Data Is Loaded
SplashScreen.preventAutoHideAsync();

function App() {
    const isContentLoaded = useLoadContent();
    const isFavouritesLoaded = useLoadFavourites();
    // Load Fonts
    const [loaded] = useFonts({
        Tungsten: Tungsten,
    });

    if (!loaded) {
        return null;
    }
    if (isContentLoaded && isFavouritesLoaded && loaded) {
        // Hide Splash Screen When Data Is Loaded
        SplashScreen.hideAsync();
    }
    return (
        <SafeAreaView style={styles.appBackgroundStyle}>
            <StatusBar barStyle={'light-content'} />
            <TabNavigator />
        </SafeAreaView>
    );
}
export default () => {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <NavigationContainer>
                        <App />
                    </NavigationContainer>
                </SafeAreaProvider>
            </PersistGate>
        </ReduxProvider>
    );
};

const styles = StyleSheet.create({
    appBackgroundStyle: {
        flex: 1,
        backgroundColor: '#000',
    },
});
