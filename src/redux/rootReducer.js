import { combineReducers } from 'redux';
import currentCitySliceReducer from './slices/currentCitySlice';
import currentCoordsSliceReducer from './slices/currentCoordsSlice';
import weatherInfoSliceReducer from './slices/weatherInfoSlice';

// Each slice reducer gets a key => slice : sliceReducer

const rootReducer = combineReducers({
    currentCitySlice: currentCitySliceReducer,
    currentCoordsSlice: currentCoordsSliceReducer,
    weatherInfoSlice: weatherInfoSliceReducer,
});

export default rootReducer;
