import { useState } from 'react';
import { Autocomplete, TextField, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchWeatherByCoords } from '../../services/weather.service';
import {
    OPEN_WEATHER_GEOCODING_SEARCH,
    SEARCH_RESULT_LIMIT,
} from '../../common/constants';
import { updateWeather } from '../../redux/slices/weatherSlice';
import { updateLoading } from '../../redux/slices/loadingSlice';
import { useDispatch } from 'react-redux';
import { updateCurrentSelection } from '../../redux/slices/currentSelectionSlice';

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
        dispatch(updateLoading(true));
        dispatch(
            updateCurrentSelection({
                city: result.name,
                coordinates: { lat: result.lat, lon: result.lat },
            })
        );
        fetchWeatherByCoords(result.lat, result.lat)
            .then((data) =>
                dispatch(updateWeather(data)).then(() =>
                    dispatch(updateLoading(false))
                )
            )
            .catch((error) => {
                dispatch(updateLoading(false));
                console.log(error);
            });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            elevation={5}
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
                                border: '2px solid white',
                                width: '45vw',
                                minWidth: '300px',
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
