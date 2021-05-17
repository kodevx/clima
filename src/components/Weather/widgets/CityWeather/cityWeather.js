import React from 'react';
import WeatherIcon from '../WeatherIcon/weatherIcon';
import Text from '../../../Text';

const CityWeather = ({ name, coord, wind, main, weather}) => {
        
    return (  
        <div className="p-5 md:p-4 space-y-4 md:space-y-3 rounded-lg bg-white dark:bg-opacity-10 shadow-2xl flex flex-col transition-all duration-500 ease-in-out">
          <Text>{name}</Text>
          <div className="flex flex-row justify-between items-center">
            <WeatherIcon />
            <Text classes="md:text-lg text-black dark:text-white font-gothamBold">{weather[0].main}</Text>
            <Text classes="md:text-lg text-black dark:text-lime-400 font-gothamBold">{main.temp}°C</Text>
          </div>
          <div>
            More Info
          </div>  
        </div>
    );
}

export default CityWeather;