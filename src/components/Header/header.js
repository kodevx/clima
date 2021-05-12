import React from 'react'
import { Link } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch';
import Icon from '../Icon';
import Button from '../Button/Button';

import MenuIcon from '../../../assets/icons/menu.svg';

const Header = () =>{

    return(
        <div className="px-4 md:px-2 flex flex-row justify-between items-center dark:text-white dark:bg-coolGray-800 transition-all duration-100 ease-in-out">
          <Button classes="p-4 md:p-2 rounded-xl hover:shadow-2xl focus:outline-none hover:bg-gray-100 dark:bg-custom-greyish flex justify-center items-center transition-all duration-300 ease-in-out">
            <Icon 
              src={MenuIcon}
              height='20x' 
              width='20px' 
              alt={"menu-icon"}
            />
          </Button>
          <Link to="/weather">Clima Icon</Link>
          <ThemeSwitch />
        </div>
    )
}

export default Header;
