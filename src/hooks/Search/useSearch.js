import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const useSearch = ({ city }) => {

    const [isPageUpdating, setIsPageUpdating] = useState(false);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        try {
            setIsPageUpdating(true);
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=16&APPID=${process.env.WEATHER_API_KEY}&units=metric`)
                .then(res => {
                    // console.log('APIData: ',res);
                    setApiData(res.data);
                });
        } catch(error){
            console.log("API Fetch Error: ",error);
        } finally{
            setTimeout(() => setIsPageUpdating(false), 3000);
        }
    },[]);

    return {
        cityData: apiData,
        isBusy: isPageUpdating
    }

}

export default useSearch;