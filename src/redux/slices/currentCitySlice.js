import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
};

const currentCitySlice = createSlice({
    name: 'currentCitySlice',
    initialState,
    reducers: {
        updateCurrentCity: (state, action) => {
            // action.payload will contain the fetched current coordinates
            state.value = action.payload;
        },
    },
});

export const { updateCurrentCity } = currentCitySlice.actions;
export default currentCitySlice.reducer;
