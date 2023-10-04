import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentSelection: { city: null, coordinates: { lat: null, lon: null } },
};

const currentSelectionSlice = createSlice({
    name: 'currentSelection',
    initialState,
    reducers: {
        updateCurrentSelection: (state, action) => {
            // action.payload will contain the fetched current coordinates
            state.currentSelection = action.payload;
        },
    },
});

export const { updateCurrentSelection } = currentSelectionSlice.actions;

export const getCoords = (state) =>
    state.currentSelectionSlice.currentSelection.coordinates;

export const getCityName = (state) =>
    state.currentSelectionSlice.currentSelection.city;

export default currentSelectionSlice.reducer;
