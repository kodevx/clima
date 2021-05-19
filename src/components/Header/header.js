import React from 'react'
import { Link } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch';
import Icon from '../Icon';
import Button from '../Button';

import MenuIcon from '../../../assets/icons/menu.svg';

const Header = () =>{

    return(
        <div className="px-4 py-2 md:px-5 md:py-3 flex flex-row justify-between items-center text-black dark:text-dark-btn-secondary dark:bg-dark-black-primary transition-all duration-100 ease-in-out">
          <Button classes="p-2 md:p-2 rounded-xl focus:outline-none hover:bg-hover-btn hover:bg-opacity-50 dark:bg-dark-bck-header dark:bg-opacity-52 dark:hover:bg-dark-btn-primary dark:hover:bg-opacity-50 flex justify-center items-center transition-all duration-100 ease-in-out">
            <Icon 
              src={MenuIcon}
              height='25x' 
              width='25px' 
              alt="menu-icon"
            />
          </Button>
          <Link to="/weather">Clima Icon</Link>
          <ThemeSwitch />
        </div>
    )
}

export default Header;
