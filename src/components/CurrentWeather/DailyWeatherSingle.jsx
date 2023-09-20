import { Box, Card, Paper, Tooltip, Typography } from '@mui/material';
import moment from 'moment/moment';
import { switchDefaultIcons } from '../../services/weather.service';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const DailyWeatherSingle = ({ singleDay }) => {
    const weatherInfo = useSelector((state) => state.weatherInfoSlice.value);

    const dayOfTheWeek = moment
        .unix(singleDay.dt)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('ddd');

    const date = moment.unix(singleDay.dt).format('DD/MM/YYYY');
    const minTemp = singleDay.temp.min.toFixed(0);
    const maxTemp = singleDay.temp.max.toFixed(0);
    const description = singleDay.weather[0].main.toUpperCase();
    const weatherImage = switchDefaultIcons(singleDay.weather[0].icon);
    const sunriseMilliseconds = singleDay.sunrise;
    const sunsetMilliseconds = singleDay.sunset;
    const windspeed = singleDay.wind_speed.toFixed(0);

    let rainChance = '';
    if (singleDay.rain) {
        rainChance = singleDay.rain + ' ' + '%';
    } else {
        rainChance = 'no data';
    }

    const sunrise = moment
        .unix(sunriseMilliseconds)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('HH:mm');
    const sunset = moment
        .unix(sunsetMilliseconds)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('HH:mm');

    const today = moment().endOf('day').format('DD/MM/YYYY');
    const tomorrow = moment().add(1, 'day').endOf('day').format('DD/MM/YYYY');

    const extraInfo = ` Rain Chance:  ${rainChance} 🌧
    Windspeed: ${windspeed} m/s 🍃
     Sunrise : ${sunrise} 🌅
    Sunset: ${sunset} 🌇 `;

    const customPopperProps = {
        style: {
            width: '150px',
        },
    };

    return (
        <Paper
            elevation={3}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                width: '110px',
                borderRadius: '10px',
                gap: 1,
                paddingLeft: 2,
                paddingRight: 2,
                backgroundColor: 'rgba(200, 200, 200, 0.3)',
                color: 'white',
            }}
        >
            <Tooltip
                title={extraInfo}
                PopperProps={customPopperProps}
                sx={{ position: 'absolute', top: 0, right: 2 }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    {date == today ? (
                        <Typography
                            variant='h6'
                            sx={{ fontWeight: 500, marginTop: 2 }}
                        >
                            TODAY
                        </Typography>
                    ) : date == tomorrow ? (
                        <Typography
                            variant='h6'
                            sx={{ fontWeight: 500, marginTop: 2 }}
                        >
                            TOMORROW
                        </Typography>
                    ) : (
                        <Box sx={{ padding: 3 }}></Box>
                    )}
                    <Typography variant='h6'>{dayOfTheWeek}</Typography>
                    <Typography variant='button'>{date}</Typography>

                    <Card
                        component='img'
                        src={weatherImage}
                        style={{
                            height: '100px',
                            width: '100px',
                            marginTop: 5,
                            borderRadius: '20px',
                            backgroundColor: 'rgba(250, 250, 250, 0.95)',
                            padding: 10,
                        }}
                    />
                    <Typography variant='button'>{description}</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: 1,
                    }}
                >
                    <Typography>Low: {minTemp} °C</Typography>
                    <Typography>High: {maxTemp} °C</Typography>
                </Box>
            </Tooltip>
        </Paper>
    );
};

export default DailyWeatherSingle;

DailyWeatherSingle.propTypes = {
    singleDay: PropTypes.shape({
        dt: PropTypes.number.isRequired,
        temp: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                main: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
            })
        ).isRequired,
        sunrise: PropTypes.number.isRequired,
        sunset: PropTypes.number.isRequired,
        wind_speed: PropTypes.number.isRequired,
        rain: PropTypes.number,
    }).isRequired,
};
