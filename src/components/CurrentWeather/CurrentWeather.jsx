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
        color: 'rgba(30, 30, 30, 0.4)',
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
                        backgroundColor: `${weatherInfo.iconBGColor}`,
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

        // <Paper
        //     sx={{
        //         display: 'flex',
        //         flexDirection: 'column',
        //         justifyContent: 'space-between',
        //         color: 'white',
        //         // width: {
        //         //     xs: '100%',
        //         //     sm: '100%',
        //         //     md: '100%',
        //         //     lg: '100%',
        //         //     xl: '250px',
        //         // },
        //         borderRadius: '10px',
        //         gap: 1,
        //         padding: 2,
        //         backgroundColor: 'rgba(200, 200, 200, 0.3)',
        //     }}
        // >
        //     <Box
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'row',
        //             alignItems: 'center',
        //         }}
        //     >
        //         <Box>
        //             <Typography variant='button' sx={{ fontSize: '25px' }}>
        //                 <LocationOnRoundedIcon sx={{ fontSize: '16px' }} />
        //                 {'  '}
        //                 {currentCity.toUpperCase()}

        //                 <Typography variant='h3'>
        //                     {weatherInfo.temp} °C
        //                 </Typography>
        //                 <Typography>
        //                     ..but it feels like: {weatherInfo.feelsLikeTemp} °C
        //                 </Typography>
        //             </Typography>
        //         </Box>
        //         <Box>
        //             <Typography>{weatherInfo.weatherStatus}</Typography>
        //             <Typography sx={{ fontSize: '12px' }}>
        //                 {weatherInfo.weatherDesc}
        //             </Typography>
        //             <Card
        //                 component='img'
        //                 src={weatherInfo.weatherImage}
        //                 style={{
        //                     height: '220px',
        //                     width: '220px',
        //                     marginTop: 5,
        //                     borderRadius: '30px',
        //                     backgroundColor: `${weatherInfo.iconBGColor}`,
        //                     padding: 8,
        //                 }}
        //             />
        //         </Box>
        //     </Box>

        //     <Box
        //         sx={{
        //             display: 'flex',
        //             flexDirection: 'column',
        //             alignItems: 'center',
        //         }}
        //     ></Box>

        // </Paper>
    );
};

export default CurrentWeather;
