// React
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
// Assets
import images from '../assets/images';
// Utils
import Colors from '../utils/Colors';

type ContainerProps = {
    children?: React.ReactNode;
};
/**
 * Definition:
 * a Parent View With Default Background Color and an Overlay for all screens.
 */
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <View style={styles.containerStyle}>
            <ImageBackground source={images.backgroundOverlay} style={styles.backgroundOverlay}>
                <View style={styles.childrenContainerStyle}>{children}</View>
            </ImageBackground>
        </View>
    );
};

export default Container;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: Colors.darknavy,
    },
    childrenContainerStyle: {
        flex: 1,
    },
    backgroundOverlay: {
        width: '100%',
        height: '100%',
    },
});
