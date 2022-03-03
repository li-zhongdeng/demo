import {combineEpics} from 'redux-observable'
import {getDataByKeyEpic} from './ducks'

export default combineEpics(getDataByKeyEpic)