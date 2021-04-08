import React ,{ Component } from 'react';
import styled from 'styled-components';
import ImgLayout from './Elements/Layout';
import Title from './Elements/Title';
import CityList from './Elements/CityList';
import Wrapper from './Elements/Wrapper';
import City from './Elements/City';

let Text = styled(Title)`
    top: 100px;
    left: 29%;
`;

export default class CityPage extends Component{

    state={

    }

    render(){
        return(
          <Wrapper>
            <ImgLayout src={'../../img/BckImg.jpg'} alt='None'/>
            <Text> W E A T H E R </Text>
            <CityList />
          </Wrapper>
        );
    }
}