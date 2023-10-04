import { Box, Card, Divider, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { transformHourlyInfo } from '../../helpers/transformWeatherData';
import { getWeatherInfo } from '../../redux/slices/weatherSlice';
import { useState, useEffect } from 'react';

const HourlyWeatherSingle = (singleHourDataRaw) => {
    const weatherInfo = useSelector((state) => getWeatherInfo(state));
    const [iconBGColor, setIconBGColor] = useState();

    useEffect(() => {
        if (weatherInfo.current.weather[0].icon.slice(2) === 'd') {
            setIconBGColor('rgba(250, 250, 250, 0.95)');
        } else {
            setIconBGColor('rgba(50, 50, 50, 0.95)');
        }
    }, [weatherInfo]);

    const singleHourData = transformHourlyInfo(
        singleHourDataRaw,
        weatherInfo.timezone_offset
    );

    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 'fit-content',
                height: '300px',
                borderRadius: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                paddingLeft: 3,
                paddingRight: 3,
            }}
            elevation={8}
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
                </Typography>

                <Card
                    component='img'
                    src={singleHourData.weatherImage}
                    style={{
                        height: '100px',
                        width: '100px',
                        margin: 1,
                        borderRadius: '20px',
                        border: `6px solid ${iconBGColor}`,
                        borderColor: `${iconBGColor}`,
                        backgroundColor: `${iconBGColor}`,
                    }}
                />
            </Box>
            <Typography variant='button' sx={{ fontSize: '12px' }}>
                {singleHourData.description}
            </Typography>
            <Divider></Divider>
            <Typography variant='h5'>{singleHourData.temp} °C</Typography>
        </Paper>
    );
};

export default HourlyWeatherSingle;
