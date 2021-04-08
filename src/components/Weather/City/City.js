import React from 'react';
import { mergeClasses } from '../../../classify';
import defaultClasses from './city.css'
import Button from '../../Button/DelButton';
import DropBtn from '../../Button';

const City = props =>{
    const classes = mergeClasses(props.classes,defaultClasses);
        
    return (  
            <div className={classes.root}>
                <div className={classes.header}>
                  <div className={classes.name}>Dubai</div>
                  <Button>-</Button>
                </div>
                <div className={classes.content}>
                    <img src={"../../../../assets/icons/Sunn.png"} alt='none'/>
                    <div>Sunny</div>
                    <div>37<span>°</span>C</div>
                </div>
                <div className={classes.footer}>
                   <DropBtn classes={classes.DropDown}> ˅ </DropBtn>
                </div>
                {/* { this.state.showMoreWeather ? <div> More Info!!</div>: null } */}
            </div>
    );
}

export default City;