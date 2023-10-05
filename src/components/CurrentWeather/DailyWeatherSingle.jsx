import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRounded from '@mui/icons-material/ArrowUpwardRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { Box, Card, Paper, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { transformDailyInfo } from '../../helpers/transformWeatherData';
import { useWeatherInfo } from '../../hooks/useWeatherInfo';

const DailyWeatherSingle = (singleDayRaw) => {
    const weatherInfo = useWeatherInfo();
    const [iconBGColor, setIconBGColor] = useState();

    const singleDay = transformDailyInfo(
        singleDayRaw,
        weatherInfo.timezone_offset
    );

    const customPopperProps = {
        style: {
            width: '150px',
        },
    };

    useEffect(() => {
        if (weatherInfo.current.weather[0].icon.slice(2) === 'd') {
            setIconBGColor('rgba(250, 250, 250, 0.95)');
        } else {
            setIconBGColor('rgba(50, 50, 50, 0.95)');
        }
    }, [weatherInfo]);

    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                borderRadius: '10px',
                gap: 1,
                padding: 1,
                position: 'relative',
            }}
            elevation={8}
        >
            <Tooltip
                title={singleDay.extraInfo}
                PopperProps={customPopperProps}
            >
                <InfoRoundedIcon
                    sx={{
                        position: 'absolute',
                        top: 25,
                        right: 7,
                        opacity: '50%',
                        color: 'rgba(20, 20, 20, 0.6)',
                    }}
                />
            </Tooltip>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {' '}
                <Typography variant='h6'>{singleDay.dayOfTheWeek}</Typography>
                <Typography variant='button'>{singleDay.date}</Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Card
                    component='img'
                    src={singleDay.weatherImage}
                    style={{
                        height: '50px',
                        width: '50px',
                        borderRadius: '15px',
                        backgroundColor: `${iconBGColor}`,
                        borderColor: `${iconBGColor}`,
                        border: `4px solid ${iconBGColor}`,
                        marginLeft: '15px',
                    }}
                />
                <Typography
                    variant='button'
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'inline-block',
                            lg: 'inline-block',
                            xl: 'inline-block',
                        },
                    }}
                >
                    {singleDay.description}
                </Typography>
            </Box>

            <Typography
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 'auto',
                }}
            >
                <ArrowUpwardRounded sx={{ fontSize: '18px' }} />
                {singleDay.maxTemp} °C
            </Typography>
            <Typography
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '40px',
                }}
            >
                <ArrowDownwardRoundedIcon sx={{ fontSize: '18px' }} />
                {singleDay.minTemp} °C
            </Typography>
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
