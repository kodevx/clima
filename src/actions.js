import * as actions from './actionTypes';

export const cityAdded = (data) => ({
    type: actions.CITY_ADDED,
    payload: data
});

export const cityRemoved = (data) => ({
    type: actions.CITY_REMOVED,
    payload: data
});

export const setThemeMode = (data) => ({
    type: actions.SET_THEME_MODE,
    payload: data
});