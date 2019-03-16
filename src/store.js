import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import WeatherReducer from '../src/redux/WeatherReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  combineReducers({ WeatherReducer }),
  composeEnhancers(applyMiddleware(createLogger(), thunk, promise))
);

export default Store;