import { Button } from '@mui/material';
import * as coordinateConstants from '/src/common/constants';
import { fetchWeatherByCoords } from '../../services/weather.service';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { updateCurrentCity } from '../../redux/slices/currentCitySlice';
// import { updateCurrentCoords } from '../../redux/slices/currentCoordsSlice';
import { updateWeather } from '../../redux/slices/weatherSlice';
import { updateLoading } from '../../redux/slices/loadingSlice';
import { updateCurrentSelection } from '../../redux/slices/currentSelectionSlice';

const buttonStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 4,
    borderRadius: 10,
    width: '200px',
    height: '60px',
    borderColor: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundBlendMode: 'darken',
    bgcolor: 'rgba(130, 130, 130, 0.80)',
    ':hover': {
        bgcolor: 'rgba(40, 40, 40, 0.80)',
        backgroundBlendMode: 'darken',
        border: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        borderStyle: 'hidden',
    },
    '&:focus': {
        boxShadow: 'none',
        borderStyle: 'hidden',
    },
    '&:focus, &:active': {
        outline: 'none',
        bgcolor: 'rgba(35, 35, 35, 0.73)',
        backgroundBlendMode: 'multiply',
    },
};

const CityButton = ({ backgroundImage, cityName }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateLoading(true));
        dispatch(
            updateCurrentSelection({
                city: cityName,
                coordinates: { lat: coords.lat, lon: coords.lon },
            })
        );

        fetchWeatherByCoords(coords.lat, coords.lon)
            .then((data) => {
                dispatch(updateWeather(data));
            })
            .then(() => {
                dispatch(updateLoading(false));
            })
            .catch((error) => {
                console.log(error);
                dispatch(updateLoading(true));
            });
    };

    const coords = coordinateConstants[`COORDS_${cityName.toUpperCase()}`];

    return (
        <Button
            sx={{ ...buttonStyle, backgroundImage: `url(${backgroundImage})` }}
            onClick={handleClick}
        >
            {cityName}
        </Button>
    );
};

export default CityButton;

CityButton.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
};
