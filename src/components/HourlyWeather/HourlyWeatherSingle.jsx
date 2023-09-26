import { Box, Card, Divider, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { transformHourlyInfo } from '../../helpers/transformWeatherData';
import { getWeatherInfo } from '../../redux/slices/weatherSlice';

const HourlyWeatherSingle = (singleHourDataRaw) => {
    const weatherInfo = useSelector((state) => getWeatherInfo(state));

    const singleHourData = transformHourlyInfo(
        singleHourDataRaw,
        weatherInfo.timezone_offset
    );

    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                borderRadius: '10px',
                gap: 1,
                paddingLeft: 3,
                paddingRight: 3,
                backgroundColor: 'rgba(200, 200, 200, 0.3)',
                color: 'white',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <Typography variant='h4' sx={{ margin: 1, marginTop: 2 }}>
                    {singleHourData.hour}
                    <Divider></Divider>
                </Typography>

                <Typography sx={{ margin: 1 }}>
                    {singleHourData.date}
                    <Divider></Divider>
                </Typography>

                <Card
                    component='img'
                    src={singleHourData.weatherImage}
                    style={{
                        height: '100px',
                        width: '100px',
                        margin: 3,
                        borderRadius: '20px',
                        backgroundColor: 'rgba(250, 250, 250, 0.95)',
                    }}
                />
            </Box>
            <Divider></Divider>
            <Typography variant='h4'>{singleHourData.temp} °C</Typography>
            <Divider></Divider>

            <Typography> {singleHourData.feelsLike} °C</Typography>
            <Divider></Divider>
            <Typography>🍃{singleHourData.windspeed} m/s</Typography>
            <Divider></Divider>
            <Typography>💨{singleHourData.pressure} hPa</Typography>
            <Divider></Divider>
            <Typography>💧{singleHourData.humidity} </Typography>
            <Divider></Divider>
        </Paper>
    );
};

export default HourlyWeatherSingle;

// HourlyWeatherSingle.propTypes = {
//     singleHourData: PropTypes.shape({
//         dt: PropTypes.number.isRequired,
//         temp: PropTypes.number.isRequired,
//         feels_like: PropTypes.number.isRequired,
//         clouds: PropTypes.number.isRequired,
//         pressure: PropTypes.number.isRequired,
//         wind_speed: PropTypes.number.isRequired,
//         humidity: PropTypes.number.isRequired,
//         weather: PropTypes.arrayOf(
//             PropTypes.shape({
//                 icon: PropTypes.string.isRequired,
//             })
//         ).isRequired,
//     }).isRequired,
// };
