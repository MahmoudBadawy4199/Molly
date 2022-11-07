import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import RootNavigator from './src/navigation/RootNavigator';
import { I18nManager } from 'react-native';

// Disable RTL
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function App() {
    const [loaded] = useFonts({
        Tungsten: require('./assets/fonts/Tungsten-Bold.otf'),
    });

    if (!loaded) {
        return null;
    }
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}
