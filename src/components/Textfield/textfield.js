import React from 'react';

const Textfield = props =>{

    const classes = mergeClasses(props.classes,defaultClasses);
    return(
        <input placeholder='E N T E R  A  C I T Y' className={classes.root} />
    );
}

export default Textfield;