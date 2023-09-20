import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const weatherStore = configureStore({
    reducer: rootReducer,
});

export default weatherStore;
