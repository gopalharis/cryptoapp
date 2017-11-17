import { Platform } from 'react-native';
import { applyMiddleware,
    createStore, compose } from 'redux';

import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import logger from 'redux-logger';

import RootReducer from './Reducers';


const middleware = applyMiddleware(thunk, promise, logger)

const Store = createStore(
    RootReducer, 
    compose(middleware, devTools({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5678
    }))
);

export default Store;
