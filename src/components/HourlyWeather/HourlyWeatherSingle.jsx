import { Box, Card, Paper, Typography, Divider } from '@mui/material';
import moment from 'moment/moment';
import { switchDefaultIcons } from '../../services/weather.service';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const HourlyWeatherSingle = ({ singleHourData }) => {
    const weatherInfo = useSelector((state) => state.weatherInfoSlice.value);

    const date = moment
        .unix(singleHourData.dt)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('DD/MM/YYYY');
    const hour = moment
        .unix(singleHourData.dt)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('HH:mm');
    const temp = singleHourData.temp.toFixed(0);
    const feelsLike = singleHourData.feels_like;
    const pressure = singleHourData.pressure;
    const windspeed = singleHourData.wind_speed.toFixed(0);
    const humidity = singleHourData.humidity;
    const weatherImage = switchDefaultIcons(singleHourData.weather[0].icon);

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
                    {hour}
                    <Divider></Divider>
                </Typography>

                <Typography sx={{ margin: 1 }}>
                    {date}
                    <Divider></Divider>
                </Typography>

                <Card
                    component='img'
                    src={weatherImage}
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
            <Typography variant='h4'>{temp} °C</Typography>
            <Divider></Divider>

            <Typography> {feelsLike} °C</Typography>
            <Divider></Divider>
            <Typography>🍃{windspeed} m/s</Typography>
            <Divider></Divider>
            <Typography>💨{pressure} hPa</Typography>
            <Divider></Divider>
            <Typography>💧{humidity} </Typography>
            <Divider></Divider>
        </Paper>
    );
};

export default HourlyWeatherSingle;

HourlyWeatherSingle.propTypes = {
    singleHourData: PropTypes.shape({
        dt: PropTypes.number.isRequired,
        temp: PropTypes.number.isRequired,
        feels_like: PropTypes.number.isRequired,
        clouds: PropTypes.number.isRequired,
        pressure: PropTypes.number.isRequired,
        wind_speed: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};
