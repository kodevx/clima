import React from 'react';
import Button from '../Button/AddButton';
import Text from '../Textfield';
import { mergeClasses } from '../../classify';
import defaultClasses from './CityText.css';

const CityText = (props) =>{

    const classes = mergeClasses(props.classes,defaultClasses);

    return(
        <div className={classes.root}>
            <Text />
            {/* <Button> ❯ </Button> */}
            <Button>+</Button>
        </div>
    );
}

export default CityText;