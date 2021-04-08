import React from 'react';
import CityList from './City';
import { mergeClasses } from '../../classify';

const Weather = props =>{
    const classes = mergeClasses(props.classes);
    return(
        <div>
            <img className={classes.image} src={"../../../img/HomeImg.jpg"} alt="Image"/>
            <div className={classes.title}>W E A T H E R</div>
            <CityList />
        </div>
    );
}

export default Weather;