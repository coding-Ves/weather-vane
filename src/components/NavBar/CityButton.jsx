import { Button } from '@mui/material';
import * as coordinateConstants from '/src/common/constants';
import { fetchWeatherByCoords } from '../../services/weather.service';
import { useWeatherStore } from '../../store/weatherStore';
import PropTypes from 'prop-types';

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
    backgroundSize: '400px',
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
    const setWeatherInfo = useWeatherStore((state) => state.setWeatherInfo);
    const setCurrentCity = useWeatherStore((state) => state.setCurrentCity);
    const setCoords = useWeatherStore((state) => state.setCoords);

    const handleClick = () => {
        setCoords(coords.lat, coords.lon);
        setCurrentCity(cityName);
        fetchWeatherByCoords(coords.lat, coords.lon)
            .then((data) => setWeatherInfo(data))
            .catch((error) => console.log(error));
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
