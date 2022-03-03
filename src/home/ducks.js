import { get } from 'lodash';
import {combineReducers} from 'redux';
import {createRequestEpicDucks, createRequestByKeyEpicDucks} from 'redux-observable-utils';
import * as api from './api';

export const NAME = 'HOME';

export const {
  ducks: getNewsDataDucks, 
  epic: getNewsDataEpic
} = createRequestEpicDucks({
  moduleName: NAME,
  reducerName: 'GET_NEWS',
  api: api.getStaticData,
  mapActionToPayload: action => action.payload
});

export const {
  ducks: getNewsDataByKeyDucks, 
  epic: getNewsDataByKeyEpic
} = createRequestByKeyEpicDucks({
  moduleName: NAME,
  reducerName: 'GET_NEWS_BY_KEY',
  api: api.getStaticData,
  mapActionToPayload: action => action.payload,
  mapActionToKey: action => get(action.params, 'key', 0)
});

export default combineReducers({
  [getNewsDataDucks.reducerName]: getNewsDataDucks.reducer,
  [getNewsDataByKeyDucks.reducerName]: getNewsDataByKeyDucks.reducer,
});
