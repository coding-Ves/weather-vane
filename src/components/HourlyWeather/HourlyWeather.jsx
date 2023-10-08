import { Card } from '@mui/material';
import HourlyWeatherSingle from './HourlyWeatherSingle';
import { useWeatherInfo } from '../../hooks/useWeatherInfo';

const HourlyWeather = () => {
    const weatherInfo = useWeatherInfo();

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
