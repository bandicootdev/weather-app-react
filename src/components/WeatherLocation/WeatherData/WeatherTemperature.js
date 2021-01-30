import React from "react";
import WeatherIcons from 'react-weathericons'
import {CLOUD, CLOUDY, SNOW, SUN, RAIN, WINDY} from '../../../contants/weathers'
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
  [CLOUD]: 'cloud',
  [CLOUDY]: 'cloudy',
  [SUN]: 'sun',
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  [WINDY]: 'windy'
}

const getWeatherIcon = weatherState => {
  const sizeIcon = '4x'
  const icon = icons[weatherState];
  if (icon) return <WeatherIcons className={'wicon'} name={icon} size={sizeIcon}/>
  else return <WeatherIcons className={'wicon'} name={'day-sunny'} size={sizeIcon}/>
};


const WeatherTemperature = ({temperature, weatherState}) => (
  <div className={'weatherTemperatureCont'}>
    {getWeatherIcon(weatherState)}
    <span className={'temperature'}>{temperature}
      <span className={'temperatureType'}>c°</span>
    </span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;
