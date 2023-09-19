import { useState } from 'react';
import { Autocomplete, TextField, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useWeatherStore } from '../../store/weatherStore';
import { fetchWeatherByCoords } from '../../services/weather.service';
import { SEARCH_RESULT_LIMIT } from '../../common/constants';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_URL = 'https://api.openweathermap.org/geo/1.0/direct';

export const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const setCurrentCity = useWeatherStore((state) => state.setCurrentCity);
    const setCoords = useWeatherStore((state) => state.setCoords);
    const setWeatherInfo = useWeatherStore((state) => state.setWeatherInfo);

    const handleSearch = async (value) => {
        setQuery(value);

        if (value.length >= 3) {
            try {
                const response = await fetch(
                    `${API_URL}?q=${value}&limit=${SEARCH_RESULT_LIMIT}&appid=${API_KEY}`
                );

                if (response.ok) {
                    const data = await response.json();
                    setResults(data);
                } else {
                    setResults([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            setResults([]);
        }
    };

    const handleResultClick = (result) => {
        setCoords(result.lat, result.lon);
        setCurrentCity(result.name);
        fetchWeatherByCoords(result.lat, result.lon)
            .then((data) => setWeatherInfo(data))
            .catch((error) => console.log(error));
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Autocomplete
                options={results}
                getOptionLabel={(option) => `${option.name}, ${option.country}`}
                onInputChange={(e, value) => handleSearch(value)}
                filterOptions={(x) => x}
                noOptionsText="Can't find that place!"
                freeSolo
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder='Search for a city'
                        variant='outlined'
                        InputProps={{
                            ...params.InputProps,
                            style: {
                                borderRadius: '30px',
                                width: '45vw',
                                minWidth: '300px',
                                backgroundColor: 'white',
                            },
                            endAdornment: (
                                <IconButton
                                    aria-label='search'
                                    onClick={() => handleSearch(query)}
                                    edge='end'
                                    sx={{ marginRight: 1 }}
                                >
                                    <SearchIcon
                                        sx={{
                                            height: '30px',
                                            width: '30px',
                                            fontSize: '30px',
                                        }}
                                    />
                                </IconButton>
                            ),
                        }}
                    />
                )}
                onChange={(event, value) => handleResultClick(value)}
                renderOption={(props, option) => (
                    <Box
                        component='li'
                        {...props}
                        key={option.lat + option.lon}
                    >
                        {option.name}, {option.country}
                    </Box>
                )}
            />
        </Box>
    );
};

export default Search;
