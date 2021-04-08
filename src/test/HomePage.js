import React, { Component } from 'react';
import Home from './Home.js';
import CityPage from './CityPage.js';

export default class HomePage extends Component {
    state = {
       page: 0 
    }

    handleNext = () => {
        this.setState({ page: page+1 });
    }
    
    handlePrev = () => {
        this.setState({ page: page-1 });
    } 

    render(){
        let { page } = this.state;
        switch(page){
            case 0: return ( <Home next={ this.handleNext } /> );
            case 1: return ( <CityPage prev={ this.handlePrev }/>);
        }

    }
}