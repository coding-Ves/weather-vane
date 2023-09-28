import { Box, Typography, Grid } from '@mui/material';
import CurrentWeather from './../CurrentWeather/CurrentWeather';

import DailyWeather from '../CurrentWeather/DailyWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import { getCityName } from '../../redux/slices/currentSelectionSlice';
import { useSelector } from 'react-redux';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import WeatherAlerts from '../CurrentWeather/WeatherAlerts';

const Dashboard = () => {
    const currentCity = useSelector((state) => getCityName(state));

    return (
        <Box sx={{ padding: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 2,
                }}
            >
                <LocationOnRoundedIcon
                    sx={{ fontSize: '45px', marginLeft: 'auto' }}
                />
                <Typography
                    variant='h2'
                    sx={{ marginLeft: 1, marginRight: 'auto' }}
                >
                    {currentCity.toUpperCase()}
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xl={5} lg={12} md={12} sm={12} xs={12}>
                    <Box sx={{ width: '100%', marginBottom: 2 }}>
                        <CurrentWeather />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <WeatherAlerts />
                    </Box>
                </Grid>

                <Grid item xl={7} lg={12} md={12} sm={12} xs={12}>
                    <Box sx={{ width: '100%', marginBottom: 2 }}>
                        <HourlyWeather />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <DailyWeather />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
