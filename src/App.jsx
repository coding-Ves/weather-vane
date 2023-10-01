import './App.css';
import { Typography, Box } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search.jsx';
import { useSelector } from 'react-redux';
import Loader from './components/Loader/Loader';
import { getWeatherInfo } from './redux/slices/weatherSlice';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { getTheme } from './redux/slices/themeSlice';

export const App = () => {
    // const weatherInfo = useWeatherStore((state) => state.weatherInfo);
    const weatherInfo = useSelector((state) => getWeatherInfo(state));
    const theme = useSelector((state) => getTheme(state));

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Loader />
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
            </ThemeProvider>
        </>
    );
};

export default App;
