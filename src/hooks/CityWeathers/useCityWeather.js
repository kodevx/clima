import React,{ useCallback, useMemo } from 'react'

const useCityWeather = ({ requiredData }) => {

    const [isShowMore, setIsShowMore] = React.useState(true);

    const handleToggle = useCallback(() => {
      setIsShowMore(prevState => !prevState);
    },[isShowMore]);

    const weatherData = useMemo(   
        () => {
            const refinedData;   
            Object.entries(WEATHER_PARAMS).map(([key, value]) => {
                refinedData.push({ label: key, value: requiredData[value] })
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