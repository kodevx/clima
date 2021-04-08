import * as actions from './actionTypes';

export const cityAdded = (data) => ({
    type: actions.CITY_ADDED,
    payload: data
});

export const cityRemoved = (data) => ({
    type: actions.CITY_REMOVED,
    payload: data
});