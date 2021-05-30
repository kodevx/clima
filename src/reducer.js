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
    },
    {
        "coord": {
            "lon": -74.006,
            "lat": 40.7143
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
            "temp": 16.3,
            "feels_like": 15.37,
            "temp_min": 10.82,
            "temp_max": 19.41,
            "pressure": 1025,
            "humidity": 53
        },
        "visibility": 10000,
        "wind": {
            "speed": 0.45,
            "deg": 8,
            "gust": 0.89
        },
        "clouds": {
            "all": 1
        },
        "dt": 1621418827,
        "sys": {
            "type": 2,
            "id": 2039034,
            "country": "US",
            "sunrise": 1621416918,
            "sunset": 1621469399
        },
        "timezone": -14400,
        "id": 5128581,
        "name": "New York",
        "cod": 200
    },
    {
        "coord": {
            "lon": -0.1257,
            "lat": 51.5085
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 13.58,
            "feels_like": 13.16,
            "temp_min": 11.5,
            "temp_max": 15.87,
            "pressure": 1017,
            "humidity": 83,
            "sea_level": 1017,
            "grnd_level": 1014
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.13,
            "deg": 325,
            "gust": 6.41
        },
        "clouds": {
            "all": 100
        },
        "dt": 1621418883,
        "sys": {
            "type": 1,
            "id": 1414,
            "country": "GB",
            "sunrise": 1621396977,
            "sunset": 1621453877
        },
        "timezone": 3600,
        "id": 2643743,
        "name": "London",
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