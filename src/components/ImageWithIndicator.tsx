// React
import React from 'react';
import { StyleSheet, Image, ActivityIndicator, ImageProps } from 'react-native';
// Utils
import Colors from '../utils/Colors';

const ImageWithIndicator: React.FC<ImageProps> = (props) => {
    const [isImageLoading, setIsImageLoading] = React.useState<boolean>(true);
    function handleImageLoading(flag: boolean) {
        setIsImageLoading(flag);
    }

    return (
        <>
            {isImageLoading ? (
                <ActivityIndicator
                    style={styles.activityIndicatorStyle}
                    size={'small'}
                    color={Colors.white}
                />
            ) : null}

            <Image
                {...props}
                onLoadStart={() => handleImageLoading(true)}
                onLoadEnd={() => handleImageLoading(false)}
            />
        </>
    );
};

export default ImageWithIndicator;

const styles = StyleSheet.create({
    activityIndicatorStyle: {
        zIndex: 100,
        ...StyleSheet.absoluteFillObject,
    },
});
