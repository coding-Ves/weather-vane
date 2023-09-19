/* eslint-disable no-unused-vars */
import { create } from 'zustand';

export const useWeatherStore = create((set) => ({
    currentCity: null,
    setCurrentCity: (city) => set((state) => ({ currentCity: city })),

    coords: { lat: null, lon: null },
    setCoords: (latitude, longitude) =>
        set((state) => ({ currentCoords: { lat: latitude, lon: longitude } })),

    weatherInfo: null,

    setWeatherInfo: (data) => set((state) => ({ weatherInfo: data })),
    loading: true,
    setLoading: (bool) => set((state) => ({ loading: bool })),
}));
