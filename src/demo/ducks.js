import { get } from 'lodash';
import {combineReducers} from 'redux';
import {createRequestEpicDucks, createRequestByKeyEpicDucks} from 'redux-observable-utils';
import * as api from './api';

export const NAME = 'DEMO'

export const {
    ducks: getDataByKeyDucks, 
    epic: getDataByKeyEpic
  } = createRequestByKeyEpicDucks({
    moduleName: NAME,
    reducerName: 'GET_DATA_BY_KEY',
    api: api.getData,
    mapActionToPayload: action => action.payload,
    mapActionToKey: action =>action.params.test,
    // restoreFetchableKeyToAction: ()=>{

    // }
  });

  export default combineReducers({
    [getDataByKeyDucks.reducerName]: getDataByKeyDucks.reducer,
  });

