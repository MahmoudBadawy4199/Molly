import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type BackgroundGradientProps = {
    style?: StyleProp<ViewStyle> | undefined;
};

const BackgroundGradient = ({ style }: BackgroundGradientProps) => {
    return (
        <>
            <LinearGradient
                // Background Linear Gradient
                colors={[
                    'rgba(189, 57, 68, 0.7)',
                    'rgba(83, 33, 43,0.5)',
                    'rgba(30, 47, 65,0.1)',
                    'transparent',
                ]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.3, 0.6, 0.9]}
                style={style}
            />
        </>
    );
};

export default BackgroundGradient;
