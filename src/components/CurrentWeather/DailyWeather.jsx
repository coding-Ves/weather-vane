import DailyWeatherSingle from './DailyWeatherSingle';
import { Box } from '@mui/material';
import { useWeatherInfo } from '../../hooks/useWeatherInfo';

const DailyWeather = () => {
    const weatherInfo = useWeatherInfo();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                paddingBottom: 1,
            }}
            elevation={4}
        >
            {weatherInfo.daily.slice(1).map((singleDay) => {
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
