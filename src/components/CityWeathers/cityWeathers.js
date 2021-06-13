import React from 'react';
import { connect } from 'react-redux'
import CityWeather from './widgets/CityWeather';

const CityWeathers = ({ cityList }) => {

    return (
      <div className="p-8 md:p-12 space-y-4 md:space-y-20 bg-white dark:bg-black transition-all duration-400 ease-in-out">
        {cityList && cityList.length ? 
            cityList.map((weatherData) => { 
               return (
                  <CityWeather key={weatherData.id} {...weatherData}/>
               )
            })
        : null}
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    cityList: state.cityWeatherList
  }
}

export default connect(mapStateToProps, null)(CityWeathers);