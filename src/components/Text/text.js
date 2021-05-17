import React from 'react';

const Text = ({ classes, children }) => {

    const isCustomClasses = classes ? true: false;
    const defaultClasses ="text-sm md:text-2xl text-black dark:text-orange-400 font-gothamBold flex flex-row"

    return(
        <div className={isCustomClasses ? classes: defaultClasses}>
          {children}
        </div>
    );
}

export default Text;