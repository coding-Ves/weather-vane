import { Box } from '@mui/material';
import CurrentWeather from './../CurrentWeather/CurrentWeather';

import DailyWeather from '../CurrentWeather/DailyWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';

const Dashboard = () => {
    return (
        <Box
            sx={{
                width: '100%',
                marginTop: 4,
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            <CurrentWeather />
            <DailyWeather />
            <HourlyWeather />
        </Box>
    );
};

export default Dashboard;
