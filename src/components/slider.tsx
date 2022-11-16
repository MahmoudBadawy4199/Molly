// React
import React from 'react';
import { StyleSheet, FlatList, View, Image, Dimensions, ViewToken } from 'react-native';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';

// Global
const { width } = Dimensions.get('window');
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

// Types
type SliderProps = {
    contentImages: number[];
};
type ViewableItemsChangedProps = {
    changed: ViewToken[];
};
type renderItemProps = {
    item: number;
};

const Slider = ({ contentImages }: SliderProps) => {
    // Ref to Flatlist slider
    let flatListRef = React.useRef<FlatList<number> | null>(null);
    // Image Index for Dots
    const [currentIndex, setCurrentIndex] = React.useState(0);
    // ref to get index of the viewable item in flatlist to update the currentIndex state of dots
    const onViewableItemsChangedRef = React.useRef(({ changed }: ViewableItemsChangedProps) => {
        if (changed[0].isViewable) {
            setCurrentIndex(changed[0].index!);
        }
    });
    // Flatlist Render Item
    const renderItem = ({ item }: renderItemProps) => {
        return <Image source={item} style={styles.imageStyle} />;
    };

    // generate the Dots
    const renderDots = contentImages?.map((_, index: number) => (
        <View
            key={index.toString()}
            style={[
                styles.dotStyle,
                {
                    backgroundColor: index === currentIndex ? Colors.primary : Colors.grey,
                },
            ]}
        />
    ));

    return (
        <>
            {/* Image Slider */}
            <FlatList
                data={contentImages}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment="center"
                ref={(ref) => {
                    flatListRef.current = ref;
                }}
                viewabilityConfig={viewConfigRef}
                onViewableItemsChanged={onViewableItemsChangedRef.current}
            />
            {/* Dots */}
            {renderDots.length > 1 ? (
                <View style={styles.dotsContainerStyle}>{renderDots}</View>
            ) : null}
        </>
    );
};

export default Slider;

const styles = StyleSheet.create({
    imageStyle: {
        width,
        height: verticalScale(150),
        resizeMode: 'cover',
    },
    dotsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(10),
    },
    dotStyle: {
        width: horizontalScale(10),
        height: verticalScale(10),
        borderRadius: moderateScale(10),
        marginHorizontal: horizontalScale(5),
    },
});