import React from 'react'

const useThemeSwitch = ({ theme, setThemeMode, DARK_MODE }) =>{

    const isDarkMode = theme === DARK_MODE;
    let htmlClasses = document.querySelector('html').classList;

    const handleToggle = React.useCallback(() => {
      if(localStorage.theme === 'dark') {
        htmlClasses.remove('dark');
        localStorage.setItem('theme','light');
        setThemeMode('light')
      } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
        setThemeMode('dark')
      }
    }, [localStorage.theme]);

    return {
      isDarkMode,
      handleToggle
    }

}

export default useThemeSwitch;