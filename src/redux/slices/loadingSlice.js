import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

const loadingSlice = createSlice({
    name: 'loadingSlice',
    initialState,
    reducers: {
        updateLoading: (state, action) => {
            // action.payload will contain the fetched current coordinates
            state.value = action.payload;
        },
    },
});

export const { updateLoading } = loadingSlice.actions;
export const getLoading = (state) => state.loadingSlice.value;

export default loadingSlice.reducer;
