import { createStore, combineReducers, compose } from 'redux';
import placesReducers from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducers

});

// add mutiple enhancers in our school

let composeEnhancers = compose;

// dev is speical golobal variable only in react native, it only true if you in develop model
if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
}

export default configureStore;