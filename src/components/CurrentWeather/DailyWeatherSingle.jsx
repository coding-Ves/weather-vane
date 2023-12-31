import { Box, Card, Paper, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { transformDailyInfo } from '../../helpers/transformWeatherData';
import { useSelector } from 'react-redux';

const DailyWeatherSingle = (singleDayRaw) => {
    const weatherInfo = useSelector((state) => state.weatherInfoSlice.value);
    const singleDay = transformDailyInfo(
        singleDayRaw,
        weatherInfo.timezone_offset
    );

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
                title={singleDay.extraInfo}
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
                    {singleDay.date == singleDay.today ? (
                        <Typography
                            variant='h6'
                            sx={{ fontWeight: 500, marginTop: 2 }}
                        >
                            TODAY
                        </Typography>
                    ) : singleDay.date == singleDay.tomorrow ? (
                        <Typography
                            variant='h6'
                            sx={{ fontWeight: 500, marginTop: 2 }}
                        >
                            TOMORROW
                        </Typography>
                    ) : (
                        <Box sx={{ padding: 3 }}></Box>
                    )}
                    <Typography variant='h6'>
                        {singleDay.dayOfTheWeek}
                    </Typography>
                    <Typography variant='button'>{singleDay.date}</Typography>

                    <Card
                        component='img'
                        src={singleDay.weatherImage}
                        style={{
                            height: '100px',
                            width: '100px',
                            marginTop: 5,
                            borderRadius: '20px',
                            backgroundColor: 'rgba(250, 250, 250, 0.95)',
                            padding: 10,
                        }}
                    />
                    <Typography variant='button'>
                        {singleDay.description}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: 1,
                    }}
                >
                    <Typography>Low: {singleDay.minTemp} °C</Typography>
                    <Typography>High: {singleDay.maxTemp} °C</Typography>
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
