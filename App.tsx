import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import RootNavigator from './src/navigation/RootNavigator';

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
