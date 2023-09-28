import moment from 'moment';
import { switchDefaultIcons } from '../services/weather.service';

export const transformCurrentInfo = (weatherInfo) => {
    const timeOfDay = weatherInfo.current.weather[0].icon.slice(2);
    let iconBGColor = '';
    if (timeOfDay === 'd') {
        iconBGColor = 'rgba(250, 250, 250, 0.95)';
    } else {
        iconBGColor = 'rgba(50, 50, 50, 0.95)';
    }

    const weatherImage = switchDefaultIcons(
        weatherInfo.current.weather[0].icon
    );

    const temp = weatherInfo.current.temp.toFixed(0);
    const feelsLikeTemp = weatherInfo.current.feels_like.toFixed(0);
    const humidity = weatherInfo.current.humidity;
    const windSpeed = weatherInfo.current.wind_speed.toFixed(0);

    const sunriseMilliseconds = weatherInfo.current.sunrise;
    const sunsetMilliseconds = weatherInfo.current.sunset;

    const sunrise = moment
        .unix(sunriseMilliseconds)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('HH:mm');
    const sunset = moment
        .unix(sunsetMilliseconds)
        .utcOffset(weatherInfo.timezone_offset / 60)
        .format('HH:mm');

    const weatherStatus = weatherInfo.current.weather[0].main.toUpperCase();
    const weatherDesc =
        weatherInfo.current.weather[0].description.toUpperCase();

    return {
        iconBGColor: iconBGColor,
        weatherImage: weatherImage,
        temp: temp,
        feelsLikeTemp: feelsLikeTemp,
        humidity: humidity,
        windSpeed: windSpeed,
        sunrise: sunrise,
        sunset: sunset,
        weatherStatus: weatherStatus,
        weatherDesc: weatherDesc,
    };
};

export const transformDailyInfo = ({ singleDay }, timezoneOffset) => {
    const date = moment.unix(singleDay.dt).format('DD/MM/YYYY');
    const minTemp = singleDay.temp.min.toFixed(0);
    const maxTemp = singleDay.temp.max.toFixed(0);
    const description = singleDay.weather[0].main.toUpperCase();
    const weatherImage = switchDefaultIcons(singleDay.weather[0].icon);
    const sunriseMilliseconds = singleDay.sunrise;
    const sunsetMilliseconds = singleDay.sunset;
    const windspeed = singleDay.wind_speed.toFixed(0);

    let rainChance = '';
    if (singleDay.rain) {
        rainChance = singleDay.rain + ' ' + '%';
    } else {
        rainChance = 'no data';
    }

    const today = moment().endOf('day').format('DD/MM/YYYY');
    const tomorrow = moment().add(1, 'day').endOf('day').format('DD/MM/YYYY');

    const dayOfTheWeek = moment
        .unix(singleDay.dt)
        .utcOffset(timezoneOffset / 60)
        .format('ddd');

    const sunrise = moment
        .unix(sunriseMilliseconds)
        .utcOffset(timezoneOffset / 60)
        .format('HH:mm');
    const sunset = moment
        .unix(sunsetMilliseconds)
        .utcOffset(timezoneOffset / 60)
        .format('HH:mm');

    const extraInfo = ` Rain Chance:  ${rainChance} 🌧
      Windspeed: ${windspeed} m/s 🍃
      Sunrise : ${sunrise} 🌅
      Sunset: ${sunset} 🌇 `;

    return {
        dayOfTheWeek: dayOfTheWeek,
        date: date,
        minTemp: minTemp,
        maxTemp: maxTemp,
        description: description,
        weatherImage: weatherImage,
        sunriseMilliseconds: sunriseMilliseconds,
        sunsetMilliseconds: sunsetMilliseconds,
        windspeed: windspeed,
        rainChance: rainChance,
        sunrise: sunrise,
        sunset: sunset,
        today: today,
        tomorrow: tomorrow,
        extraInfo: extraInfo,
    };
};

export const transformHourlyInfo = (singleHourDataRaw, timezoneOffset) => {
    const singleHourData = singleHourDataRaw.singleHourDataRaw;
    const temp = singleHourData.temp.toFixed(0);
    const feelsLike = singleHourData.feels_like;
    const pressure = singleHourData.pressure;
    const windspeed = singleHourData.wind_speed.toFixed(0);
    const humidity = singleHourData.humidity;
    const weatherImage = switchDefaultIcons(singleHourData.weather[0].icon);
    const description = singleHourData.weather[0].description.toUpperCase();

    const date = moment
        .unix(singleHourData.dt)
        .utcOffset(timezoneOffset / 60)
        .format('DD/MM/YYYY');

    const hour = moment
        .unix(singleHourData.dt)
        .utcOffset(timezoneOffset / 60)
        .format('HH:mm');

    return {
        temp: temp,
        description: description,
        date: date,
        hour: hour,
        feelsLike: feelsLike,
        pressure: pressure,
        windspeed: windspeed,
        humidity: humidity,
        weatherImage: weatherImage,
    };
};

export const transformAlertsData = (weatherInfo, timezoneOffset) => {
    if (!weatherInfo.alerts) {
        return null;
    }

    const alertInfo = weatherInfo.alerts[0];

    const start = moment
        .unix(alertInfo.start)
        .utcOffset(timezoneOffset / 60)
        .format('Do MMM YYYY, HH:mm a');

    const end = moment
        .unix(alertInfo.end)
        .utcOffset(timezoneOffset / 60)
        .format('Do MMM YYYY, HH:mm a');

    return {
        title: alertInfo.event,
        description: alertInfo.description,
        start: start,
        end: end,
        sender: alertInfo.sender_name,
    };
};
