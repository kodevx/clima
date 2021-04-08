import React, { Children } from 'react';
import defaultClasses from './Button.css';
import { mergeClasses } from '../../../classify';

const ActionButton = props => {
    
    const classes = mergeClasses(props.classes,defaultClasses);
    const { add } = props;

    const btn = add ? classes.add: classes.del;

    return(
       <button className={btn}> {props.children} </button>
    );
}

export default ActionButton;