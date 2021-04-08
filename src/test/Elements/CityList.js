import React,{ Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import City from './City';

let CityListWrap = styled(Wrapper)`
  /* position: absolute; */
  /* top: 300px;
  left: 5%; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  /* background-image: url('../../../img/BckImg.jpg');
  background-repeat: cover; */
`;

const CityList = (props) => {
    let { cityList } = props;
    return (  
      <CityListWrap>
        { cityList.map(city => <City key={ city.weather[0].id } 
          weather={ city.weather[0] } temp={ city.main } 
          wind={ city.wind } name={ city.name } />) }
      </CityListWrap>
    );
}

const mapStateToProps = (state) => {
  return{
    cityList: state.cityWeatherList     
  }
}

export default connect(mapStateToProps,null)(CityList);