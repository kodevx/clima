import React from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';

import CityWeather from './widgets/CityWeather';

const Weather = ({ cityList }) =>{

    const { searchCity } = useParams();

    console.log("Search City Text: ",searchCity);

    return (
      <div className="p-8 md:p-10 bg-white dark:bg-black transition-all duration-400 ease-in-out">
        {cityList && cityList.length ? 
            cityList.map((weatherData) => { 
               return (
                  <CityWeather key={weatherData.id} {...weatherData}/>
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