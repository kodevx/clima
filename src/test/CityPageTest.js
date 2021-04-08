import React ,{ useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImgLayout from '../component/Elements/Layout';
import Title from '../component/Elements/Title';
import CityList from '../component/Elements/CityList';
import Wrapper from '../component/Elements/Wrapper';
import City from '../component/Elements/City';
import Loading from './Loading.js';

let Text = styled(Title)`
    top: 100px;
    left: 29%;
`;

const CityPageTest = (props) => {

  const [ load, setload ] = useState(true);
  const [ data, setData ] = useState(null);

  useEffect(()=>{
      axios.get('http://api.openweathermap.org/data/2.5/weather?q=Abu Dhabi&cnt=16&APPID=API_KEY&units=metric')
      .then(res => {
        console.log('APIData: ',res.data);
        setData("Weather Data",res.data);
        // setTimeout(()=>{ setload(!load) },9000);
      }).catch(err=>{
        console.log(err);
      })
      showData();
  },[]);

  const showData = () => {
    console.log("Data: ",data);
  }

  return(
      <Wrapper>
        { load ? <Loading /> :
          <div>
            <ImgLayout src={'../../img/BckImg.jpg'} alt='None'/>
            <Text> W E A T H E R </Text>
            {/* <CityList />  */}
          </div>
        }
      </Wrapper>
  );
}

export default CityPageTest;