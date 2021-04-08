import React from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './Home.css';
import CityText from '../CityText';
import City from '../Weather/City';

const Home = props => {
    
    const classes = mergeClasses(props.classes, defaultClasses);

    return(
        <div>
           <img className={classes.image} src={"../../../assets/images/BckImg.jpg"} alt="Image"/>
           <div className='text-5xl font-lovelo'>W E A T H E R - L O V E L O</div>
           <div className={classes.textfield}> 
              <CityText />    
           </div>
           <div className="text-5xl bg-gradient-to-l from-teal-500 via-white to-lightBlue-300 text-red-700 font-gothamBold">TailwindCSS - G O T H A M</div> 
        </div>    
    );
}

export default Home;