// React
import React from 'react';
import {
    StyleSheet,
    FlatList,
    ListRenderItem,
    ListRenderItemInfo,
    TouchableOpacity,
} from 'react-native';
// Libraries
import { useNavigation } from '@react-navigation/native';
// Utils
import Colors from '../utils/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Scale';
// Components
import Container from '../components/container-with-background-overlay';
import Banner from '../components/banner';
import BackgroundGradient from '../components/background-gradient';
import Agent from '../components/agent';
import InfoCard from '../components/info-card';
// Types
import { AgentType, AgentScreenNavigationProp } from '../types';
// Redux
import { useAppSelector } from '../redux/hooks';
import { selectAgents } from '../redux/contentSlice';
import { selectError } from '../redux/errorsSlice';
// Assets
import images from '../assets/images';

const AgentSelect = () => {
    // Navigation
    const navigation = useNavigation<AgentScreenNavigationProp>();
    function navigationHandler(agentID: number) {
        navigation.navigate('MapSelect', { agentID });
    }
    const error = useAppSelector(selectError);
    // Agents Data
    const agents = useAppSelector(selectAgents);

    // Render Agents
    const renderAgentItem: ListRenderItem<AgentType> = ({
        item,
    }: ListRenderItemInfo<AgentType>) => (
        <TouchableOpacity activeOpacity={1} onPress={() => navigationHandler(item.id)}>
            <Agent data={item} />
        </TouchableOpacity>
    );
    return (
        <>
            <Container>
                {/* Banner */}
                <Banner
                    screenTitle="select agent"
                    defaultBackgroundImage={'Select Agent'}
                    backgroundImageBlurRadius={3}
                />
                {/* Background Gradient */}
                <BackgroundGradient style={styles.backgroundGradientStyle} />
                {error ? (
                    // Server Error Information Card
                    <InfoCard
                        message={error}
                        image={images.errorImage}
                        iconResizeMode={'contain'}
                    />
                ) : (
                    <FlatList
                        style={styles.flatListStyle}
                        data={agents}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.flatListContentContainerStyle}
                        renderItem={renderAgentItem}
                    />
                )}
            </Container>
        </>
    );
};

export default AgentSelect;

const styles = StyleSheet.create({
    backgroundGradientStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: verticalScale(140),
        zIndex: -2,
    },
    labelStyle: {
        ...StyleSheet.absoluteFillObject,
        color: Colors.white,
        fontSize: moderateScale(38),
        fontFamily: 'Tungsten',
        textTransform: 'uppercase',
        alignSelf: 'center',
        textShadowOffset: { width: 0, height: verticalScale(4) },
        textShadowRadius: moderateScale(2),
        textShadowColor: Colors.black,
    },
    flatListStyle: {
        marginTop: verticalScale(3),
    },
    flatListContentContainerStyle: {
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(16),
    },
});
