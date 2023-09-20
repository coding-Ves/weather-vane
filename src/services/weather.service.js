import {
    OPEN_WEATHER_BASE_URL,
    OPEN_WEATHER_SUBMIT_DATA_URL,
    WEATHER_STATION_ID,
} from '../common/constants';

// Get the weather information for given coordinates
export const fetchWeatherByCoords = async (lat, lon) => {
    const requestUrl =
        OPEN_WEATHER_BASE_URL +
        'lat=' +
        lat +
        '&lon=' +
        lon +
        '&exclude=minutely&units=metric&appid=' +
        import.meta.env.VITE_OPENWEATHER_API_KEY;

    return fetch(requestUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch weather info!');
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Error fetching weather info!:', error.message);
            throw error;
        });
};

// Submit weather information

export const submitWeatherInfo = async (
    temp,
    windspeed,
    humidt,
    atmPressure,
    rain
) => {
    const today = new Date();
    const todayMilliseconds = today.getMilliseconds();

    const payload = {
        station_id: WEATHER_STATION_ID,
        dt: todayMilliseconds,
        temperature: temp,
        wind_speed: windspeed,
        humidity: humidt,
        pressure: atmPressure,
        rain_1h: rain,
    };

    try {
        const response = fetch(OPEN_WEATHER_SUBMIT_DATA_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${
                    import.meta.env.VITE_OPENWEATHER_API_KEY
                }`,
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            console.log('Unable to post weather data!');
        }
        const responseData = await response;
        return responseData;
    } catch (error) {
        console.error('Error sending measurement data:', error);
        throw error;
    }
};

// Switch the default weather API icons with selected ones + gif background
export const switchDefaultIcons = (icon) => {
    const timeOfDay = icon.slice(2);
    const iconName = icon.slice(0, 2);

    switch (iconName) {
        // clear sky
        case '01':
            if (timeOfDay === 'd') {
                return '/src/assets/weather-icons/clear-sky-day.gif';
            } else {
                return '/src/assets/weather-icons/clear-sky-day.gif';
            }
        // few clouds
        case '02':
            if (timeOfDay === 'd') {
                return '/src/assets/weather-icons/few-clouds-day.gif';
            } else {
                return '/src/assets/weather-icons/few-clouds-night.gif';
            }
        // scattered clouds
        case '03':
            if (timeOfDay === 'd') {
                return '/src/assets/weather-icons/few-clouds-day.gif';
            } else {
                return '/src/assets/weather-icons/few-clouds-night.gif';
            }
        // broken clouds
        case '04':
            if (timeOfDay === 'd') {
                return '/src/assets/weather-icons/few-clouds-day.gif';
            } else {
                return '/src/assets/weather-icons/few-clouds-night.gif';
            }
        // shower rain
        case '09':
            if (timeOfDay === 'd') {
                return '/src/assets/weather-icons/rain-day.gif';
            } else {
                return '/src/assets/weather-icons/rain-night.gif';
            }
        // rain
        case '10':
            if (timeOfDay === 'd') {
                return '/src/assets/weather-icons/rain-day.gif';
            } else {
                return '/src/assets/weather-icons/rain-night.gif';
            }
        // thunderstorm
        case '11':
            return '/src/assets/weather-icons/thunderstorm.gif.gif';

        // snow
        case '13':
            return '/src/assets/weather-icons/snow.gif';
        // mist
        case '50':
            return '/src/assets/weather-icons/mist.gif';
        default:
            break;
    }
};
