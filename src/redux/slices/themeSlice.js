import { createSlice } from '@reduxjs/toolkit';
import { createTheme } from '@mui/material';

const initialState = {
    theme: createTheme({
        palette: {
            mode: 'light',
        },
    }),
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggleDark: (state) => {
            state.theme = createTheme({
                palette: {
                    mode: 'dark',
                },
            });
        },
        toggleLight: (state) => {
            state.theme = createTheme({
                palette: {
                    mode: 'light',
                },
            });
        },
    },
});

export const { toggleDark, toggleLight } = themeSlice.actions;
export const getTheme = (state) => state.themeSlice.theme;

export default themeSlice.reducer;
