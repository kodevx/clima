import React from 'react';
import WeatherIcon from '../WeatherIcon/weatherIcon';
import Text from '../../../Text';

const WeatherInfo = ({name, main, coord, weather, wind, sys }) => {
        
    return (  
        <div className="p-4 md:p-2 space-y-3 bg-white dark:bg-coolGray-700 shadow-2xl flex flex-col transition-all duration-500 ease-in-out">
          <Text>Dubai</Text>
          <div className="flex flex-row justify-between content-between">
            <WeatherIcon />
            <Text>{name}</Text>
            <Text>{main.temp}°C</Text>
          </div>
          {}
        </div>
    );
}

export default WeatherInfo;