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
          <button onClick={handleToggle} className="p-2 md:p-2 rounded-xl focus:outline-none bg-transparent hover:bg-hover-btn hover:bg-opacity-50 dark:bg-dark-bck-header dark:bg-opacity-52 dark:hover:bg-dark-btn-primary dark:hover:bg-opacity-50 flex justify-center items-center transition-all duration-300 ease-in-out">
            {isDarkMode
              ? <Icon src={DarkMode} height='30px' width='30px' alt={"dark-mode-icon"}/>
              : <Icon src={LightMode} height='30px' width='30px' alt={"light-mode-icon"}/>}
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