import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
// provider component will connect store and app component
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'


// highlight: configureSotre is a function
const conStore = configureStore();

const RNRedux = () => (
    <Provider store={conStore}>
    <App />
    </Provider>
);

// register Component is expecting to connect a function
AppRegistry.registerComponent('firstapp', () => RNRedux);