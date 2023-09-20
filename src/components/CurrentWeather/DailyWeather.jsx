import DailyWeatherSingle from './DailyWeatherSingle';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const DailyWeather = () => {
    const weatherInfo = useSelector((state) => state.weatherInfoSlice.value);

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
