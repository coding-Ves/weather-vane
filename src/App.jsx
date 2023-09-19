import './App.css';
import { useWeatherStore } from './store/weatherStore.js';

import { Typography } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search.jsx';

export const App = () => {
    const weatherInfo = useWeatherStore((state) => state.weatherInfo);

    return (
        <>
            <NavBar />
            {weatherInfo === null ? (
                <Typography
                    variant='h4'
                    sx={{
                        paddingTop: 4,
                        marginLeft: 60,
                        marginRight: 60,
                        paddingBottom: 78,
                    }}
                >
                    Search for a city to find the weather!
                </Typography>
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
