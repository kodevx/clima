import React, { useState, useCallback, useMemo } from 'react'
import { WEATHER_PARAMS } from '../../constants/constants';

const useCityWeather = ({ requiredData }) => {

    const [isShowMore, setIsShowMore] = useState(false);

    const handleToggle = useCallback(() => {
      setIsShowMore(prevState => !prevState);
    },[setIsShowMore]);

    const weatherData = useMemo(   
        () => {
            let refinedData = [];   
            Object.entries(WEATHER_PARAMS).map(([key, value]) => {
                refinedData.push({ label: key, value: requiredData[value] });
            });

            return refinedData;
        }
    , [requiredData]);

    return {
        weatherData,
        isShowMore,
        handleToggle
    }

}

export default useCityWeather;