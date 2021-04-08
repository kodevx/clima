import React from 'react';
import  { mergeClasses } from '../../../classify';
import defaultClasses from './city.css'

const City = props =>{
    const classes = mergeClasses(props.classes,defaultClasses);
        
    return (
        <div>City List</div>
    );
    
}