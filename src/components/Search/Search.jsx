import { useState } from 'react';
import { Autocomplete, TextField, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchWeatherByCoords } from '../../services/weather.service';
import {
    OPEN_WEATHER_GEOCODING_SEARCH,
    SEARCH_RESULT_LIMIT,
} from '../../common/constants';
import { updateCurrentCity } from '../../redux/slices/currentCitySlice';
import { updateCurrentCoords } from '../../redux/slices/currentCoordsSlice';
import { updateWeatherInfo } from '../../redux/slices/weatherInfoSlice';
import { useDispatch } from 'react-redux';

export const Search = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (value) => {
        setQuery(value);

        if (value.length >= 3) {
            try {
                const response = await fetch(
                    `${OPEN_WEATHER_GEOCODING_SEARCH}?q=${value}&limit=${SEARCH_RESULT_LIMIT}&appid=${
                        import.meta.env.VITE_OPENWEATHER_API_KEY
                    }`
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
        dispatch(updateCurrentCoords({ lat: result.lat, lon: result.lon }));
        dispatch(updateCurrentCity(result.name));
        fetchWeatherByCoords(result.lat, result.lon)
            .then((data) => dispatch(updateWeatherInfo(data)))
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
