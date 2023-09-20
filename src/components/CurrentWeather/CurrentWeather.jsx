import AirRoundedIcon from '@mui/icons-material/AirRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import { Box, Card, Paper, Typography } from '@mui/material';
import moment from 'moment/moment';
import { switchDefaultIcons } from '../../services/weather.service';
import { useSelector } from 'react-redux';

const CurrentWeather = () => {
    const weatherInfo = useSelector((state) => state.weatherInfoSlice.value);
    const currentCity = useSelector((state) => state.currentCitySlice.value);

    const weatherImage = switchDefaultIcons(
        weatherInfo.current.weather[0].icon
    );

    const temp = weatherInfo.current.temp.toFixed(0);
    const feelsLikeTemp = weatherInfo.current.feels_like;
    const humidity = weatherInfo.current.humidity;
    const windSpeed = weatherInfo.current.wind_speed.toFixed(0);

    const sunriseMilliseconds = weatherInfo.current.sunrise;
    const sunsetMilliseconds = weatherInfo.current.sunset;

    const sunrise = moment
        .unix(sunriseMilliseconds)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('HH:mm');
    const sunset = moment
        .unix(sunsetMilliseconds)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('HH:mm');

    const weatherStatus = weatherInfo.current.weather[0].main.toUpperCase();
    const weatherDesc =
        weatherInfo.current.weather[0].description.toUpperCase();

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
                <Typography>{weatherStatus}</Typography>
                <Typography sx={{ fontSize: '12px' }}>{weatherDesc}</Typography>
                <Card
                    component='img'
                    src={weatherImage}
                    style={{
                        height: '200px',
                        width: '200px',
                        marginTop: 5,
                        borderRadius: '30px',
                        backgroundColor: 'rgba(250, 250, 250, 0.95)',
                        padding: 10,
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
                <Typography variant='h3'>{temp} °C</Typography>
                <Typography>..but it feels like: {feelsLikeTemp} °C</Typography>
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
                    <Typography variant='h6'>{humidity}%</Typography>
                </Card>
                <Card sx={smallWeatherStyles}>
                    <AirRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#395493' }}>Windspeed</Typography>
                    <Typography variant='h6'>{windSpeed} m/s</Typography>
                </Card>
                <Card sx={smallWeatherStyles}>
                    <WbTwilightRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#ea8533' }}>Sunrise</Typography>
                    <Typography variant='h6'>{sunrise}</Typography>
                </Card>

                <Card sx={smallWeatherStyles}>
                    <WbTwilightRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#ed5550' }}>Sunset</Typography>
                    <Typography variant='h6'>{sunset}</Typography>
                </Card>
            </Box>
        </Paper>
    );
};

export default CurrentWeather;
