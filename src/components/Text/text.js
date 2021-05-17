import React from 'react';

const Text = ({ classes, children }) =>{

    const isCustomClasses = classes ? true: false;
    const defaultClasses = "text-lg md:text-sm text-white dark:text-orange-500 flex flex-row"

    return(
        <div className={isCustomClasses ? classes: defaultClasses}>
          {children}
        </div>
    );
}

export default Text;