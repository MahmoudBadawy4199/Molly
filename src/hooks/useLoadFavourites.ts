// React
import { useEffect, useState } from 'react';
// Redux
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectLineups, updateLineups } from '../redux/contentSlice';
import { selectFavourites } from '../redux/favouritesSlice';

export default function useLoadFavourites() {
    const [isFavouritesLoaded, setFavouritesLoaded] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const allLineups = useAppSelector(selectLineups);
    const favouriteLineupsIDs = useAppSelector(selectFavourites);

    useEffect(() => {
        if (allLineups.length > 0 && !isFavouritesLoaded) {
            const newLineupsAfterTogglingFavourite = JSON.parse(JSON.stringify(allLineups));
            favouriteLineupsIDs.map((id) => {
                const index = newLineupsAfterTogglingFavourite.findIndex(
                    (item: { data: { lineupID: string } }) => item.data.lineupID === id,
                );
                newLineupsAfterTogglingFavourite[index].isFavourite = true;
            });
            // Set The New Content.Lineups In Store
            dispatch(updateLineups(newLineupsAfterTogglingFavourite));
            setFavouritesLoaded(true);
        }
    }, [allLineups]);

    return isFavouritesLoaded;
}
