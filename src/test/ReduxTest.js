import React, { Component } from 'react'
import { cityAdded } from '../actions';
import { connect } from 'react-redux';
import Button from '../component/Elements/Button';

class ReduxTest extends Component {
    
    state={

    }

    render() {
        const { place,addCity } = this.props;
        console.log('City:',place);
        return (
            <div><div>
                <Button onClick={()=>{ addCity() }}>Add</Button></div>
                <Button onClick={()=>{ removeCity() }}>delete</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        place: state.city
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addCity: () => dispatch(cityAdded("dubai"))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxTest);

