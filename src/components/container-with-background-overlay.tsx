import { StyleSheet, View, ImageBackground, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

type ContainerProps = {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle> | undefined;
};

const Container: React.FC<ContainerProps> = ({ children, style }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/app/bg-overlay.png')}
            style={styles.backgroundOverlay}
        >
            <View style={style}>{children}</View>
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
