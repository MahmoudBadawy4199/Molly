import { StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

type ContainerProps = {
    children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/app/bg-overlay.png')}
            style={styles.backgroundOverlay}
        >
            {children}
        </ImageBackground>
    );
};

export default Container;

const styles = StyleSheet.create({
    backgroundOverlay: {
        width: '100%',
        height: '100%',
    },
});
