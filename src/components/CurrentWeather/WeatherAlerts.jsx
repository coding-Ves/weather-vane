import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { transformAlertsData } from '../../helpers/transformWeatherData';
import { useWeatherInfo } from '../../hooks/useWeatherInfo';

const WeatherAlerts = () => {
    const rawWeatherInfo = useWeatherInfo();
    const weatherAlertInfo = transformAlertsData(
        rawWeatherInfo,
        rawWeatherInfo.timezone_offset
    );

    return (
        <Paper
            sx={{
                borderRadius: 3,
                borderTopLeftRadius: {
                    xl: 0,
                },
                borderBottomLeftRadius: {
                    xl: 50,
                },
            }}
            elevation={4}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    margin: 1,
                    gap: 2,
                }}
            >
                <Typography sx={{ marginTop: 3 }}>
                    <WarningRoundedIcon sx={{ fontSize: '50px' }} />
                </Typography>
                <Typography variant='h5' sx={{ marginTop: 3 }}>
                    WEATHER ALERTS
                </Typography>
            </Box>
            {weatherAlertInfo === null ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyItems: 'center',
                        alignContent: 'center',
                        gap: 1,
                        p: 2,
                    }}
                >
                    <Typography
                        variant='overline'
                        fontWeight={600}
                        sx={{
                            fontSize: '20px',
                            alignSelf: 'center',
                        }}
                    >
                        No Alerts
                    </Typography>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyItems: 'center',
                        alignContent: 'center',
                        gap: 1,
                        p: 3,
                        height: '100%',
                    }}
                >
                    <Typography variant='button' sx={{ fontSize: '30px' }}>
                        {weatherAlertInfo.title}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}
                    >
                        <Typography variant='caption'>
                            From: {weatherAlertInfo.start}
                        </Typography>
                        <Typography variant='caption'>
                            Until: From: {weatherAlertInfo.end}
                        </Typography>
                    </Box>
                    <Divider></Divider>
                    <Typography
                        variant='overline'
                        fontWeight={500}
                        sx={{
                            display: 'flex',
                            overflowY: 'scroll',
                            height: '185px',
                        }}
                    >
                        {weatherAlertInfo.description}
                    </Typography>
                    <Divider></Divider>
                    <Typography variant='button'>
                        Source: {weatherAlertInfo.sender}
                    </Typography>
                </Box>
            )}
        </Paper>
    );
};

export default WeatherAlerts;
