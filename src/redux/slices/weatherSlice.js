import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    weatherInfo: null,
};

const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        updateWeather: (state, action) => {
            // action.payload will contain the fetched weather data
            state.weatherInfo = action.payload;
        },
    },
});

export const { updateWeather: updateWeather } = weatherSlice.actions;

// retrieve specific data from slice
export const getWeatherInfo = (state) => state.weatherSlice.weatherInfo;

export default weatherSlice.reducer;
