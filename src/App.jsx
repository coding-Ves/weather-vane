import './App.css';
import { Typography, Box } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search.jsx';
import { useSelector } from 'react-redux';

export const App = () => {
    // const weatherInfo = useWeatherStore((state) => state.weatherInfo);
    const weatherInfo = useSelector((state) => state.weatherInfoSlice.value);

    return (
        <>
            <NavBar />
            <Search />
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
                    <Dashboard />
                </>
            )}
        </>
    );
};

export default App;
