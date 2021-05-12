import * as actions from './actionTypes';

let initState = {
    city : ["AbuDhabi","Dubai"],
    cityWeatherList: [{
        "coord": {
            "lon": 55.3,
            "lat": 25.26
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 37.41,
            "feels_like": 36.25,
            "temp_min": 37,
            "temp_max": 38,
            "pressure": 1003,
            "humidity": 39
        },
        "visibility": 10000,
        "wind": {
            "speed": 7.7,
            "deg": 330
        },
        "clouds": {
            "all": 0
        },
        "dt": 1590663628,
        "sys": {
            "type": 1,
            "id": 7537,
            "country": "AE",
            "sunrise": 1590629363,
            "sunset": 1590678190
        },
        "timezone": 14400,
        "id": 292223,
        "name": "Dubai",
        "cod": 200
    }]
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.CITY_ADDED:
            return {
                ...state,
                city: [...state.city, action.payload]
            };

        case actions.SET_THEME_MODE:
            return {
                ...state,
                theme: action.payload
            };
        default: return state;
    }
};

export default reducer;