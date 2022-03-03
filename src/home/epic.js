import {combineEpics} from 'redux-observable';
import {getNewsDataEpic, getNewsDataByKeyEpic} from './ducks';

export default combineEpics(getNewsDataEpic, getNewsDataByKeyEpic);
