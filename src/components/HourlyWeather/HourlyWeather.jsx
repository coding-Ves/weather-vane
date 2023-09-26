import { Box, Divider, Paper, Typography } from '@mui/material';
import HourlyWeatherSingle from './HourlyWeatherSingle';
import { useSelector } from 'react-redux';
import { getWeatherInfo } from '../../redux/slices/weatherSlice';

const HourlyWeather = () => {
    const weatherInfo = useSelector((state) => getWeatherInfo(state));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                overflowX: 'auto',
                justifyContent: 'start',
                paddingBottom: 1,
                height: '500px',
            }}
        >
            <Paper
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80px',
                    borderRadius: '10px',
                    alignContent: 'center',
                    gap: 1,
                    paddingLeft: 1,
                    paddingRight: 1,
                    backgroundColor: 'rgba(200, 200, 200, 0.3)',
                    color: 'white',
                }}
            >
                <Typography variant='h5' sx={{ margin: 1, marginTop: 1 }}>
                    Time:
                </Typography>
                <Divider></Divider>
                <Typography sx={{ margin: 1, marginBottom: 0 }}>
                    Date:
                </Typography>
                <Divider></Divider>
                <Box
                    sx={{
                        height: '100px',
                        width: '100px',
                    }}
                ></Box>
                <Divider></Divider>
                <Typography variant='h5' sx={{ marginBottom: 1 }}>
                    Temp:
                </Typography>{' '}
                <Divider></Divider>
                <Typography>Feels like </Typography>
                <Divider></Divider>
                <Typography>Windspeed: </Typography>
                <Divider></Divider>
                <Typography>Pressure: </Typography>
                <Divider></Divider>
                <Typography>Humidity </Typography>
                <Divider></Divider>
            </Paper>

            {weatherInfo.hourly.map((singleHourDataRaw) => {
                return (
                    <HourlyWeatherSingle
                        singleHourDataRaw={singleHourDataRaw}
                        key={singleHourDataRaw.dt}
                    />
                );
            })}
        </Box>
    );
};

export default HourlyWeather;
