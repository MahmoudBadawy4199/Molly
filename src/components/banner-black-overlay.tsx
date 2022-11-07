import React from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BannerBlackOverlay = (props: SvgProps) => {
    const originalWidth = 270;
    const originalHeight = 130;

    return (
        <View>
            <Svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox={`0 0 ${originalWidth} ${originalHeight}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <Path d="M-4 0h155.027l82.259 151H-4V0Z" fill="#000" fillOpacity={0.5} />
            </Svg>
        </View>
    );
};

export default BannerBlackOverlay;
