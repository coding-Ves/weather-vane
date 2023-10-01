import { Card } from '@mui/material';
import { useSelector } from 'react-redux';
import { getWeatherInfo } from '../../redux/slices/weatherSlice';
import HourlyWeatherSingle from './HourlyWeatherSingle';

const HourlyWeather = () => {
    const weatherInfo = useSelector((state) => getWeatherInfo(state));

    return (
        <Card
            sx={{
                display: 'flex',
                borderRadius: 3,
                borderTopRightRadius: {
                    xl: 50,
                },
                flexDirection: 'row',
                gap: 2,
                overflowX: 'scroll',
                justifyContent: 'start',
                padding: 2,
            }}
            elevation={2}
        >
            {weatherInfo.hourly.map((singleHourDataRaw) => {
                return (
                    <HourlyWeatherSingle
                        singleHourDataRaw={singleHourDataRaw}
                        key={singleHourDataRaw.dt}
                    />
                );
            })}
        </Card>
    );
};

export default HourlyWeather;
