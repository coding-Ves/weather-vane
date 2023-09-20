import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { lat: null, lon: null },
};

const currentCoordsSlice = createSlice({
    name: 'currentCoordsSlice',
    initialState,
    reducers: {
        updateCurrentCoords: (state, action) => {
            // action.payload will contain the fetched current coordinates
            state.value = action.payload;
        },
    },
});

export const { updateCurrentCoords } = currentCoordsSlice.actions;
export default currentCoordsSlice.reducer;
