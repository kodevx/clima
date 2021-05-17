import React from 'react';
import { setThemeMode } from '../../actions';
import { connect } from 'react-redux';
import useThemeSwitch from '../../hooks/ThemeSwitch/useThemeSwitch';

import Icon from '../Icon';
import DarkMode from '../../../assets/icons/crescentMoon.svg';
import LightMode from '../../../assets/icons/sun.svg';

import {DARK_MODE} from '../../constants/constants';

const ThemeSwitch = ({ theme, setThemeMode, }) => {
    // const [themeMode, setThemeMode] = React.useState('light');
    const talonProps = useThemeSwitch({theme, setThemeMode, DARK_MODE});

    const {
      isDarkMode,
      handleToggle
    } = talonProps;

    return (
        <React.Fragment>
          <button onClick={handleToggle} className="p-4 md:p-2 my-3 rounded-xl focus:outline-none hover:bg-gray-100 dark:bg-custom-greyish flex justify-center items-center transition-all duration-300 ease-in-out">
            {isDarkMode
              ? <Icon src={DarkMode} height='35px' width='35px' alt={"dark-mode-icon"}/>
              : <Icon src={LightMode} height='35px' width='35px' alt={"light-mode-icon"}/>}
          </button>    
        </React.Fragment>    
    )
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setThemeMode: (mode) => dispatch(setThemeMode(mode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);