import React from 'react';
import { mergeClasses } from '../../classify.js';
import defaultClasses from './textfield.css';

const Textfield = props =>{

    const classes = mergeClasses(props.classes,defaultClasses);
    return(
        <input placeholder='E N T E R  A  C I T Y' className={classes.root} />
    );
}

export default Textfield;