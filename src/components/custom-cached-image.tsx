// React
import React, { PropsWithChildren } from 'react';
// Image Caching
import shortHash from 'shorthash2';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

import {
    StyleSheet,
    Image,
    ActivityIndicator,
    ImageProps,
    ImageRequireSource,
    ImageURISource,
    StyleProp,
    ImageBackground,
    ImageStyle,
} from 'react-native';
// Utils
import Colors from '../utils/Colors';
//  Types
type Source = ImageURISource | ImageURISource[] | ImageRequireSource;
type propType = PropsWithChildren<
    ImageProps & {
        source: Source;
        style?: StyleProp<ImageStyle> | undefined;
        backgroundImageStyle?: StyleProp<ImageStyle> | undefined;
        isBackground?: boolean;
    }
>;

const CustomCachedImage = (props: propType) => {
    const [isImageLoading, setIsImageLoading] = React.useState<boolean>(true);
    const [imgSource, setImageSource] = React.useState<Source>(props.source);

    // Handle Loading Indicator
    function handleImageLoading(flag: boolean) {
        setIsImageLoading(flag);
    }

    // Caching Image
    // Download The Image From A Link
    const fetchFromURI = async (uri: string) => {
        const name = shortHash(uri);
        const path = `${FileSystem.cacheDirectory}${name}`;
        const image = await FileSystem.getInfoAsync(path);
        if (image.exists) {
            return image.uri;
        }
        const newImage = await FileSystem.downloadAsync(uri, path);
        return newImage.uri;
    };

    // Download The Image From Local Assets
    const fetchFromLocal = async (source: ImageRequireSource) => {
        const asset = Asset.fromModule(source);
        if (!asset.localUri) {
            await asset.downloadAsync();
        }
        setImageSource({ uri: asset.localUri! });
    };

    const returnNull = async () => {
        return null;
    };

    const getCachedImage = async (source: Source) => {
        if (typeof source === 'number') {
            fetchFromLocal(source);
        } else if (Array.isArray(source)) {
            const newUris = await Promise.all(
                source.map((s) => {
                    if (s.uri) {
                        return fetchFromURI(s.uri);
                    } else {
                        return returnNull();
                    }
                }),
            );

            const newSources = [];

            for (let i = 0; i < source.length; i += 1) {
                const uri = newUris[i];
                if (uri) {
                    newSources.push({
                        ...source[i],
                        uri,
                    });
                }
            }
            setImageSource(newSources);
        } else {
            if (source.uri) {
                const newUri = await fetchFromURI(source.uri);
                setImageSource({ ...source, uri: newUri });
            }
        }
    };

    React.useEffect(() => {
        getCachedImage(props.source);
    }, []);

    return (
        <>
            {isImageLoading ? (
                <ActivityIndicator
                    style={styles.activityIndicatorStyle}
                    size={'small'}
                    color={Colors.white}
                />
            ) : null}
            {props.isBackground ? (
                <ImageBackground
                    {...props}
                    imageStyle={props.backgroundImageStyle}
                    source={imgSource}
                    onLoadStart={() => handleImageLoading(true)}
                    onLoadEnd={() => handleImageLoading(false)}
                >
                    {props.children}
                </ImageBackground>
            ) : (
                <Image
                    source={imgSource}
                    style={props.style}
                    onLoadStart={() => handleImageLoading(true)}
                    onLoadEnd={() => handleImageLoading(false)}
                />
            )}
        </>
    );
};

export default CustomCachedImage;

const styles = StyleSheet.create({
    activityIndicatorStyle: {
        zIndex: 100,
        ...StyleSheet.absoluteFillObject,
    },
});
