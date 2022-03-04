import {combineEpics} from 'redux-observable';
import {searchRepositoryEpic} from './ducks';

export default combineEpics(searchRepositoryEpic);
