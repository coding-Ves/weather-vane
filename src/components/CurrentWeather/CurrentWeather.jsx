import AirRoundedIcon from '@mui/icons-material/AirRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import { Box, Card, Paper, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { transformCurrentInfo } from '../../helpers/transformWeatherData';
import { getWeatherInfo } from '../../redux/slices/weatherSlice';

const CurrentWeather = () => {
    // Get and set the weather info for the city
    const rawWeatherInfo = useSelector((state) => getWeatherInfo(state));
    const weatherInfo = transformCurrentInfo(rawWeatherInfo);

    const smallWeatherStyles = {
        display: 'flex',
        flexDirection: {
            xs: 'row',
            sm: 'row',
            md: 'column',
            lg: 'column',
            xl: 'column',
        },
        justifyContent: {
            xs: 'space-between',
            sm: 'space-between',
            md: 'space-between',
            lg: 'space-between',
            xl: 'center',
        },
        alignItems: 'center',

        borderRadius: '10px',
        width: {
            xs: '100%',
            sm: '100%',
            md: '100px',
            lg: '100px',
            xl: '100px',
        },

        padding: 1,
        // color: 'white',
        // backgroundColor: 'rgba(200, 200, 200, 0.4)',
    };

    const iconsStyles = {
        fontSize: '30px',
        display: {
            xs: 'none',
            sm: 'none',
            md: 'inline-block',
            lg: 'inline-block',
            xl: 'inline-block',
        },
    };

    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                },
                padding: 2,
                justifyContent: 'space-between',
                borderRadius: 3,
                borderTopLeftRadius: {
                    xl: 50,
                },
                borderBottomLeftRadius: {
                    xl: 0,
                },
            }}
            elevation={4}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Typography variant='h4' marginBottom={1}>
                    {weatherInfo.weatherStatus}
                </Typography>
                <Typography>{weatherInfo.weatherDesc}</Typography>
                <Card
                    component='img'
                    src={weatherInfo.weatherImage}
                    style={{
                        height: '230px',
                        width: '230px',
                        marginTop: 5,
                        borderRadius: 55,
                        border: `4px solid ${weatherInfo.iconBGColor}`,
                    }}
                />

                <Typography variant='h2'>{weatherInfo.temp} °C</Typography>
                <Typography variant='h6'>
                    Feels like inc. {weatherInfo.feelsLikeTemp} °C
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                    margin: 1,
                }}
            >
                {/*This can be pulled out for reusability and accept props  */}
                <Card sx={smallWeatherStyles} elevation={8}>
                    <WaterDropRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#395493' }}>Humidity</Typography>
                    <Typography variant='h6'>
                        {weatherInfo.humidity}%
                    </Typography>
                </Card>
                <Card sx={smallWeatherStyles} elevation={8}>
                    <AirRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#395493' }}>Windspeed</Typography>
                    <Typography variant='h6'>
                        {weatherInfo.windSpeed} m/s
                    </Typography>
                </Card>
                <Card sx={smallWeatherStyles} elevation={8}>
                    <WbTwilightRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#ea8533' }}>Sunrise</Typography>
                    <Typography variant='h6'>{weatherInfo.sunrise}</Typography>
                </Card>

                <Card sx={smallWeatherStyles} elevation={8}>
                    <WbTwilightRoundedIcon sx={iconsStyles} />
                    <Typography sx={{ color: '#ed5550' }}>Sunset</Typography>
                    <Typography variant='h6'>{weatherInfo.sunset}</Typography>
                </Card>
            </Box>
        </Paper>
    );
};

export default CurrentWeather;
