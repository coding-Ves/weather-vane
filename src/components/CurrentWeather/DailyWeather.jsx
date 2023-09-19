import { useWeatherStore } from '../../store/weatherStore';
import DailyWeatherSingle from './DailyWeatherSingle';
import { Box } from '@mui/material';

const DailyWeather = () => {
    const weatherInfo = useWeatherStore((state) => state.weatherInfo);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,

                overflowX: 'auto',
                height: '320px',
                marginLeft: 2,
                paddingBottom: 1,
                marginTop: {
                    xs: 2,
                    sm: 2,
                    md: 2,
                    lg: 0,
                    xl: 0,
                },
            }}
        >
            {weatherInfo.daily.map((singleDay) => {
                return (
                    <DailyWeatherSingle
                        singleDay={singleDay}
                        key={singleDay.dt}
                    />
                );
            })}
        </Box>
    );
};

export default DailyWeather;
