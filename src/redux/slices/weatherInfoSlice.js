import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null,
};

const weatherInfoSlice = createSlice({
    name: 'weatherInfoSlice',
    initialState,
    reducers: {
        updateWeatherInfo: (state, action) => {
            // action.payload will contain the fetched weather data
            state.value = action.payload;
        },
    },
});

export const { updateWeatherInfo } = weatherInfoSlice.actions;
export default weatherInfoSlice.reducer;
