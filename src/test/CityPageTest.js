import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading.js';

const CityPageTest = (props) => {

  const [ load, setload ] = useState(true);
  const [ data, setData ] = useState(null);

  useEffect(()=>{
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=AbuDhabi&cnt=16&APPID=${process.env.WEATHER_API_KEY}&units=metric`)
      .then(res => {
        console.log('APIData: ',res);
        setData("Weather Data",res.data);
        setTimeout(()=>{ setload(prevState => !prevState) },3000);
      }).catch(err=>{
        console.log(err);
      })
      // showData();
  },[]);

  const showData = () => {
    console.log("Data: ",data);
  }

  return(
      <>
        { load ? <Loading /> :
          <div>
            <h4>Weather API Test</h4>
            {/* <CityList />  */}
          </div>
        }
      </>
  );
}

export default CityPageTest;