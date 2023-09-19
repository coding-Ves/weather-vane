import './App.css';
import { useWeatherStore } from './store/weatherStore.js';

import { Typography, Box } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search.jsx';

export const App = () => {
    const weatherInfo = useWeatherStore((state) => state.weatherInfo);

    return (
        <>
            <NavBar />
            {weatherInfo === null ? (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '75vh',
                    }}
                >
                    <Typography variant='h2'>
                        Select a city to get started!
                    </Typography>
                </Box>
            ) : (
                <>
                    <Search />
                    <Dashboard />
                </>
            )}
        </>
    );
};

export default App;
