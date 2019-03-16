import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import UserReducer from '../src/redux/UserReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  UserReducer,
  composeEnhancers(applyMiddleware(createLogger(), thunk, promise()))
);

export default Store;