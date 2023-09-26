import { combineReducers } from 'redux';
import weatherSliceReducer from './slices/weatherSlice';
import loadingSliceReducer from './slices/loadingSlice';
import currentSelectionSliceReducer from './slices/currentSelectionSlice';

const rootReducer = combineReducers({
    currentSelectionSlice: currentSelectionSliceReducer,
    weatherSlice: weatherSliceReducer,
    loadingSlice: loadingSliceReducer,
});

export default rootReducer;
