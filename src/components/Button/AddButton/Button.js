import React, { Children } from 'react';
import defaultClasses from './Button.css';
import { mergeClasses } from '../../../classify';

const Button = props => {
    
    const classes = mergeClasses(props.classes,defaultClasses);

    const cls = props.classes ? props.classes: classes.root;

    return(
       <button className={cls}> {props.children} </button>
    );
}

export default Button;