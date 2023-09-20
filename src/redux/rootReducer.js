import { combineReducers } from 'redux';
import currentCitySliceReducer from './slices/currentCitySlice';
import currentCoordsSliceReducer from './slices/currentCoordsSlice';
import weatherInfoSliceReducer from './slices/weatherInfoSlice';
import loadingSliceReducer from './slices/loadingSlice';

// Each slice reducer gets a key => slice : sliceReducer

const rootReducer = combineReducers({
    currentCitySlice: currentCitySliceReducer,
    currentCoordsSlice: currentCoordsSliceReducer,
    weatherInfoSlice: weatherInfoSliceReducer,
    loadingSlice: loadingSliceReducer,
});

export default rootReducer;
