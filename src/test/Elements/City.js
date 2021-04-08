import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { cityRemoved } from '../../actions.js';
import styled from 'styled-components';
import Button from './Button';
import DeleteBtn from './DeleteButton';

let CityWrap = styled.div`
    /* border: 4px solid green; */
    margin-bottom: 100px;
    padding: 40px 40px 20px 40px;
    background-color: white;
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 2px 2px 11px 0 rgba(0, 0, 0, 0.19);    
`;

let CityHead = styled.div`
    /* border: 4px solid orange; */
    font-family: 'Gotham';
    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

let CityName = styled.div`
    /* border: 4px solid orange; */
    font-family: 'Gotham';
    font-size: 40px;
    font-weight: bold;
    margin-left: 10px;
`;

let CityInfo = styled.div`
    /* border: 4px solid pink; */
    font-family: 'Gotham';
    margin: 40px 20px;
    font-size: 35px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

let AlignBtn = styled.div`    
    /* border: 4px solid blue; */
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

let MoreInfoBtn = styled(Button)`
    /* border: 4px solid blue; */
    font-size: 3em;
    background-color: white;
    font-weight: bold;
    height: 70px;
    width: 70px;
`;

class City extends Component {

    state ={
        showMoreWeather: true
    }

    // showMore = () =>{
    //   this.setState({showMoreWeather:!this.state.showMoreWeather});
    // }

    render(){
      console.log("Props",this.props);
      const { name,wind,weather,temp,removeCity } = this.props;
      return (  
        <CityWrap>
            <CityHead>
              <CityName>Dubai</CityName>
              <DeleteBtn onClick={ removeCity(name) }>-</DeleteBtn>
            </CityHead>
            <CityInfo>
                <img src='../../../icons/Sunn.png' alt='none'/>
                <div>Sunny</div>
                <div>37<span>°</span>C</div>
            </CityInfo>
            <AlignBtn>
               <MoreInfoBtn> ˅ </MoreInfoBtn>
            </AlignBtn>
            {/* { this.state.showMoreWeather ? <div> More Info!!</div>: null } */}
        </CityWrap>
      );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      removeCity : (cityName) =>{ dispatch(cityRemoved(cityName)) }    
    }
}

export default connect(null,mapDispatchToProps)(City);