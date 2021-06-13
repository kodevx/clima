import React ,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';
import useSearch from '../../hooks/Search/useSearch';
import LoadingPage from '../../test/Loading';
import CityWeather from '../CityWeathers/widgets/CityWeather/cityWeather';

import { getCityFromParams } from '../../utils/getCityFromParams';

const Search = (props) => {

  const { cityName } = getCityFromParams();  

  const talonProps = useSearch({ city: cityName });

  const {
    cityData,
    isBusy
  } = talonProps;

  const searchInfo = cityData ? <CityWeather {...cityData}/> : null;

  return(
      <div>
          {isBusy ? <LoadingPage /> : searchInfo}
      </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addCity: () => dispatch(cityAdded("dubai"))
    }
}

export default connect(null,mapDispatchToProps)(Search);
