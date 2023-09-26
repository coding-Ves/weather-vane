import AirRoundedIcon from '@mui/icons-material/AirRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import { Box, Card, Paper, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { transformCurrentInfo } from '../../helpers/transformWeatherData';
import { getWeatherInfo } from '../../redux/slices/weatherSlice';
import { getCityName } from '../../redux/slices/currentSelectionSlice';

const CurrentWeather = () => {
    // Get and set the weather info for the city
    const rawWeatherInfo = useSelector((state) => getWeatherInfo(state));
    const weatherInfo = transformCurrentInfo(rawWeatherInfo);

    const currentCity = useSelector((state) => getCityName(state));

    const smallWeatherStyles = {
        display: 'flex',
        flexDirection: {
            sm: 'row',
            xl: 'column',
        },
        justifyContent: {
            sm: 'space-between',
            md: 'space-between',
            lg: 'space-between',
            xl: 'center',
        },
        alignItems: 'center',
        width: {
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100px',
        },
        borderRadius: '10px',
        padding: 1,
        color: 'white',
        backgroundColor: 'rgba(200, 200, 200, 0.4)',
    };

    const iconsStyles = {
        color: 'white',
        fontSize: '30px',
        display: {
            xs: 'none',
            sm: 'none',
            md: 'none',
            lg: 'none',
            xl: 'inline-block',
        },
    };

    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                color: 'white',
                width: {
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '250px',
                },
                borderRadius: '10px',
                gap: 1,
                padding: 2,
                backgroundColor: 'rgba(200, 200, 200, 0.3)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {' '}
                <Typography variant='button' sx={{ fontSize: '25px' }}>
                    <LocationOnRoundedIcon sx={{ fontSize: '16px' }} />
                    {'  '}
                    {currentCity.toUpperCase()}
                </Typography>
                <Typography>{weatherInfo.weatherStatus}</Typography>
                <Typography sx={{ fontSize: '12px' }}>
                    {weatherInfo.weatherDesc}
                </Typography>
                <Card
                    component='img'
                    src={weatherInfo.weatherImage}
                    style={{
                        height: '220px',
                        width: '220px',
                        marginTop: 5,
                        borderRadius: '30px',
                        backgroundColor: `${weatherInfo.iconBGColor}`,
                        padding: 8,
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant='h3'>{weatherInfo.temp} °C</Typography>
                <Typography>
                    ..but it feels like: {weatherInfo.feelsLikeTemp} °C
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 1,
                    marginBottom: 2,
                }}
            >
                <Card sx={smallWeatherStyles}>
                    <WaterDropRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#395493' }}>Humidity</Typography>
                    <Typography variant='h6'>
                        {weatherInfo.humidity}%
                    </Typography>
                </Card>
                <Card sx={smallWeatherStyles}>
                    <AirRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#395493' }}>Windspeed</Typography>
                    <Typography variant='h6'>
                        {weatherInfo.windSpeed} m/s
                    </Typography>
                </Card>
                <Card sx={smallWeatherStyles}>
                    <WbTwilightRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#ea8533' }}>Sunrise</Typography>
                    <Typography variant='h6'>{weatherInfo.sunrise}</Typography>
                </Card>

                <Card sx={smallWeatherStyles}>
                    <WbTwilightRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#ed5550' }}>Sunset</Typography>
                    <Typography variant='h6'>{weatherInfo.sunset}</Typography>
                </Card>
            </Box>
        </Paper>
    );
};

export default CurrentWeather;
