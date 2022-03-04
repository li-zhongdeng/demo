import { get } from 'lodash';
import {combineReducers} from 'redux';
import {createRequestByKeyEpicDucks} from 'redux-observable-utils';
import * as api from './api';

export const NAME = 'SEARCH';

export const {
  ducks: searchRepositoryDucks, 
  epic: searchRepositoryEpic
} = createRequestByKeyEpicDucks({
  moduleName: NAME,
  reducerName: 'SEARCH_REPOSITORY',
  api: api.searchRepository,
  mapActionToKey: action => get(action.params, 'keyword')
});

export default combineReducers({
  [searchRepositoryDucks.reducerName]: searchRepositoryDucks.reducer,
});
