import React from 'react'

const ThemeToggle = () => {

    let htmlClasses = document.querySelector('html').classList;

    const handleToggle = React.useCallback(() => {
            if(localStorage.theme === 'dark') {
              htmlClasses.remove('dark');
              localStorage.removeItem('theme');
            } else {
              htmlClasses.add('dark');
              localStorage.theme = 'dark';
            }
    },[localStorage.theme]);

    return(
        <React.Fragment>
          <button onClick={handleToggle}>
            Toggle Me!
          </button>    
        </React.Fragment>    
    )
}

export default ThemeToggle;