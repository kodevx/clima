import React from 'react'
import { useHistory, useParams } from 'react-router-dom';

const useWeather = (props) =>{

    const history = useHistory();

    const {
      location: { search },
    } = history;

    const searchParams = new URLSearchParams(search);
    const cityName = searchParams.get('city');

    return {
       cityName
    }
}

export default useWeather;