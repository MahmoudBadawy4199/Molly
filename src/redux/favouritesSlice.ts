import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {
    favourites: [] as string[],
};

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        fillFavourites: (state, action: PayloadAction<string[]>) => {
            return { favourites: action.payload };
        },
        addToFavourites: (state, action: PayloadAction<string>) => {
            state.favourites.push(action.payload);
        },
        removeFromFavourites: (state, action: PayloadAction<string>) => {
            let index = state.favourites.indexOf(action.payload);
            state.favourites.splice(index, 1);
        },
    },
});

export const { addToFavourites, removeFromFavourites, fillFavourites } = favouritesSlice.actions;

export const selectFavourites = (state: RootState) => state.favourites.favourites;

export default favouritesSlice.reducer;
