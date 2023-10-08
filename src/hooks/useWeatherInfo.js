import { useSelector } from 'react-redux';
import { getWeatherInfo } from '../redux/slices/weatherSlice';

export const useWeatherInfo = () => {
    const weatherInfo = useSelector((state) => getWeatherInfo(state));

    return weatherInfo;
};
