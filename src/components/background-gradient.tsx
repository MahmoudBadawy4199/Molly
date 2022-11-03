import * as React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BackgroundGradient = () => {
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
                style={styles.size}
            />
        </>
    );
};

export default BackgroundGradient;

const styles = StyleSheet.create({
    size: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
});
