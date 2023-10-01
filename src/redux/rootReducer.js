import { combineReducers } from 'redux';
import weatherSliceReducer from './slices/weatherSlice';
import loadingSliceReducer from './slices/loadingSlice';
import currentSelectionSliceReducer from './slices/currentSelectionSlice';
import themeSliceReducer from './slices/themeSlice';

const rootReducer = combineReducers({
    currentSelectionSlice: currentSelectionSliceReducer,
    weatherSlice: weatherSliceReducer,
    loadingSlice: loadingSliceReducer,
    themeSlice: themeSliceReducer,
});

export default rootReducer;
