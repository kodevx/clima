import React, { Children } from 'react';

const Button = ({ children, classes }) => {
    
    return(
       <button className={classes? classes
                : "p-4 md:p-2 my-3 rounded-xl hover:shadow-2xl focus:outline-none hover:bg-gray-100 dark:bg-custom-greyish flex justify-center items-center transition-all duration-300 ease-in-out"}> 
         {children} 
       </button>
    );
}

export default Button;