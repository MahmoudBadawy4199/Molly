import React from 'react';
import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient';
import { StyleProp, ViewStyle } from 'react-native';

type BackgroundGradientProps = {
    style?: StyleProp<ViewStyle> | undefined;
    gradientColors?: string[];
    locations?: number[] | null;
    start?: LinearGradientPoint | null;
    end?: LinearGradientPoint | null;
};

const defaultProps: BackgroundGradientProps = {
    gradientColors: [
        'rgba(189, 57, 68, 0.7)',
        'rgba(83, 33, 43,0.5)',
        'rgba(30, 47, 65,0.1)',
        'transparent',
    ],
    start: { x: 0.5, y: 0 },
    end: { x: 0.5, y: 1 },
    locations: [0, 0.3, 0.6, 0.9],
};
const BackgroundGradient = ({
    style,
    gradientColors = defaultProps.gradientColors,
    start = defaultProps.start,
    end = defaultProps.end,
    locations = defaultProps.locations,
}: BackgroundGradientProps) => {
    return (
        <LinearGradient
            colors={gradientColors!}
            start={start}
            end={end}
            locations={locations}
            style={style}
        />
    );
};

export default BackgroundGradient;
