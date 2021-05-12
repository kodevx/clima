import React from 'react'
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/themeToggle';

const Header = () =>{

    return(
        <div className="flex flex-row justify-around items-center dark:text-white dark:bg-grey-800">
          <Link to="/weather">Clima Icon</Link>
          <ThemeToggle />
        </div>
    )
}

export default Header;
