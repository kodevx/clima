import React from 'react';
import { mergeClasses } from '../../classify';
import defaultClassses from './Home.css';
import CityText from '../CityText';
import City from '../Weather/City';

const Home = props => {
    
    const classes = mergeClasses(props.classes,defaultClassses);

    return(
        <div className={classes.root}>
           <img className={classes.image} src={"../../../assets/images/BckImg.jpg"} alt="Image"/>
           <div className={classes.title}>W E A T H E R</div>
           <div className={classes.textfield}> 
              <CityText />    
           </div> 
        </div>    
    );
}

export default Home;