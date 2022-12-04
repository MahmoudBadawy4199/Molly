import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouritesSlice';
import contentReducer from './contentSlice';
export const store = configureStore({
    reducer: {
        content: contentReducer,
        favourites: favouritesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
