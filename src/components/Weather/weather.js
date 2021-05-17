import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherInfo from './widgets/WeatherInfo';

const Weather = ({ cityList }) =>{

    const { cityName } = useParams();

    console.log("Search City Text: ",cityName);

    return (
      <div className="p-4 md:p-2 bg-white dark:bg-coolGray-900 transition-all duration-500 ease-in-out">
        {weatherInfo && weatherInfo.length ? 
            cityList.map((cityWeather) => { 
               return (
                  <WeatherInfo {...cityWeather}/>
               )
            }): null}
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    cityList: state.cityWeatherList
  }
}

export default connect(mapStateToProps, null)(Weather);