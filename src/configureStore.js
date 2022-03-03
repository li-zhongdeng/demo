import rootReducer from './ducks';
import rootEpic from './epics';
import logger from 'redux-logger' 
import {createEpicMiddleware} from 'redux-observable';

import {applyMiddleware, createStore} from 'redux';
const epicMiddleware = createEpicMiddleware();

export default () => {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware, logger));
  epicMiddleware.run(rootEpic);
  return store;
};
