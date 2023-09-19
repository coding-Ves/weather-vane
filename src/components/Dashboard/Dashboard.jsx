import CurrentWeather from './../CurrentWeather/CurrentWeather';
import { Tabs, Tab, Box, Card } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import AddWeatherInfo from '../AddWeatherInfo/AddWeatherInfo';
import DailyWeather from '../CurrentWeather/DailyWeather';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Card
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            sx={{ backgroundColor: 'rgba(150, 150, 150, 0.5)', color: 'white' }}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </Card>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Dashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', marginTop: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='basic tabs example'
                >
                    <Tab
                        sx={{
                            backgroundColor: 'rgba(180, 180, 180, 0.2)',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginRight: 2,
                            fontWeight: 700,
                            width: '160px',
                            color: 'white',
                        }}
                        label='CURRENT WEATHER'
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{
                            backgroundColor: 'rgba(180, 180, 180, 0.2)',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginRight: 2,
                            fontWeight: 700,
                            width: '160px',
                            color: 'white',
                        }}
                        label='HOURLY WEATHER'
                        {...a11yProps(1)}
                    />
                    <Tab
                        sx={{
                            backgroundColor: 'rgba(180, 180, 180, 0.2)',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            marginRight: 2,
                            fontWeight: 700,
                            width: '160px',
                            color: 'white',
                        }}
                        label='ADD WEATHER INFO'
                        {...a11yProps(2)}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'column',
                            xl: 'row',
                        },
                        flexWrap: 'no-wrap',
                        gap: 2,
                    }}
                >
                    <CurrentWeather />
                    <DailyWeather />
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <HourlyWeather />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AddWeatherInfo />
            </CustomTabPanel>
        </Box>
    );
}
