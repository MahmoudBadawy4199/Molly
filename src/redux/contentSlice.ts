import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { AgentType, ContentType, lineupType, MapItemType } from '../types';
import { addToFavourites, removeFromFavourites } from './favouritesSlice';

const initialState = {
    agents: [] as AgentType[],
    maps: [] as MapItemType[],
    lineups: [] as lineupType[],
};

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        fillContent: (state, action: PayloadAction<ContentType>) => {
            return action.payload;
        },
        updateLineups: (state, action: PayloadAction<lineupType[]>) => {
            state.lineups = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(addToFavourites, (state, action) => {
            let lineupIndex = state.lineups.findIndex(
                (item) => item.data.lineupID === action.payload,
            );
            state.lineups[lineupIndex].isFavourite = true;
        });

        builder.addCase(removeFromFavourites, (state, action) => {
            let lineupIndex = state.lineups.findIndex(
                (item) => item.data.lineupID === action.payload,
            );
            state.lineups[lineupIndex].isFavourite = false;
        });
    },
});

export const { fillContent, updateLineups } = contentSlice.actions;

export const selectAllContent = (state: RootState) => state.content;
export const selectMaps = (state: RootState) => state.content.maps;
export const selectAgents = (state: RootState) => state.content.agents;
export const selectLineups = (state: RootState) => state.content.lineups;

export default contentSlice.reducer;
