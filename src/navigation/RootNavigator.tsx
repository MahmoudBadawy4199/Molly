// React
import React from 'react';
// Components
import TabNavigator from './TabNavigator';
// Libraries
import { createStackNavigator } from '@react-navigation/stack';
// Types
import { ContentType, RootStackParamList } from '../types';
// Redux
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fillContent, selectLineups, updateLineups } from '../redux/contentSlice';
import { fillFavourites } from '../redux/favouritesSlice';

// Navigator
const RootStack = createStackNavigator<RootStackParamList>();
// Fake Data
import dataTwo from '../../dataTwo.json';
const favouriteLineupsIDs = ['00A1'];

// TODO: Copy Logic To Splash Screen Once Created
const RootNavigator = () => {
    const [isDoneLoadingRedux, setIsDoneLoadingRedux] = React.useState<Boolean>(false);
    const dispatch = useAppDispatch();
    const allLineups = useAppSelector(selectLineups);

    React.useEffect(() => {
        dispatch(fillContent(dataTwo as unknown as ContentType));
        dispatch(fillFavourites(favouriteLineupsIDs));
    }, []);

    React.useEffect(() => {
        if (allLineups.length > 0 && !isDoneLoadingRedux) {
            const newLineupsAfterTogglingFavourite = JSON.parse(JSON.stringify(allLineups));
            favouriteLineupsIDs.map((id) => {
                const index = newLineupsAfterTogglingFavourite.findIndex(
                    (item: { data: { lineupID: string } }) => item.data.lineupID === id,
                );
                newLineupsAfterTogglingFavourite[index].isFavourite = true;
            });
            // Set The New Content.Lineups In Store
            dispatch(updateLineups(newLineupsAfterTogglingFavourite));
            setIsDoneLoadingRedux(true);
        }
    }, [allLineups]);

    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Group>
                <RootStack.Screen name="Main" component={TabNavigator} />
            </RootStack.Group>
        </RootStack.Navigator>
    );
};

export default RootNavigator;
