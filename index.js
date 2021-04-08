import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store.js';
import App from './src/components/App';
// import Home from './src/components/Home';
// import City from './src/components/Weather/City'
// import Weather from './src/components/Weather/Weather.js';
// import Loading from './src/test/Loading';

ReactDOM.render(<Provider store={store}> <App/> </Provider>, document.getElementById('root'));