import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { cityAdded } from '../actions';
import ImgLayout from './Elements/Layout';
import Title from './Elements/Title';
import Input from './Elements/Input';
import Button from './Elements/Button';
import Wrapper from './Elements/Wrapper';
import SrchWrapper from './Elements/SrchWrapper';

class Home extends Component {
    state = { 
      cityName: null
    }

    handleCityChange = (e) => {
      this.setState({ cityName: e.target.value});
    }

    render() {
      const { addCity } = this.props; 
    //const { cityName } = this.state; 
    //console.log('City Name: ',cityName);
    //console.log('City Name Props: ',this.props.name);
      return (
      <Wrapper>
        <ImgLayout src={'../../img/HomeImg.jpg'} alt='None'/>
          <Title> W E A T H E R </Title> 
          <SrchWrapper>
            <div>
              <Input onChange= { this.handleCityChange }placeholder='E N T E R  A  C I T Y' placeholderTextColor="white" />
            </div>
            <div>
              <Button onClick={ ()=>{ addCity(this.state.cityName) } }> ❯ </Button>
            </div>
          </SrchWrapper>
      </Wrapper>
      );
    }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addCity: (city) => dispatch(cityAdded(city))
  }
}

export default connect(null, mapDispatchToProps)(Home); 
