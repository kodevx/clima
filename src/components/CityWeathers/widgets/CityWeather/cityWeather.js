import React, { useMemo } from 'react';
import WeatherIcon from '../WeatherIcon/weatherIcon';
import Text from '../../../Text';
import Button from '../../../Button';
import useCityWeather from '../../../../hooks/CityWeathers/useCityWeather';

import { WEATHER_PARAMS } from '../../../../constants/constants';

const CityWeather = ({ name, wind, main, weather }) => {

    const requiredData = { ...wind, ...main, ...weather[0]};

    const { 
      weatherData, 
      isShowMore, 
      handleToggle 
    } = useCityWeather({ requiredData });
    
    const moreWeatherInfo = useMemo(() => (
        <div className="transition-all duration-300 ease-in-out">
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(WEATHER_PARAMS).map(([key, value])=> {
              return (
                <div key={value} className="justify-self-center items-center">
                  <div>{key}</div>
                  <div>{requiredData[value]}</div>
                </div>
              )
            })}
          </div>
          <div className="flex flex-row justify-evenly items-center">
            <div>
              <div className="">Pressure</div>
              <div>{requiredData['pressure']}</div>
            </div>
            <div>
              <div>Humidity</div>
              <div>{requiredData['humidity']}</div>  
            </div> 
          </div>         
        </div>
    ),[weatherData, WEATHER_PARAMS]);

    return (  
        <div className="p-5 md:p-10 md:rounded-lg bg-white dark:bg-opacity-10 shadow-lg flex flex-col transition-all duration-500 ease-in-out">
          <Text classes="pl-7 text-sm md:text-2xl text-black font-gothamBold">{name}</Text>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <WeatherIcon />
              <Text classes="md:text-lg text-black dark:text-white font-gothamBold">{weather[0].main}</Text>
              <Text classes="md:text-lg text-black dark:text-lime-400 font-gothamBold">{main.temp}°C</Text>
            </div>
            {isShowMore ? moreWeatherInfo : null}
            <div className="flex justify-center items-center">
              <Button 
                classes="h-11 w-48 outline-none focus:outline-none rounded-xl font-gothamBold text-white bg-btn-primary hover:bg-opacity-75"
                onClick={handleToggle}
              >
                {isShowMore ? 'ᐱ' :'V'}
              </Button>
            </div>  
          </div>
        </div>
    )
}

export default CityWeather;