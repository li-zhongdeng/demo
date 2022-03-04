import {combineEpics} from 'redux-observable';
import home from './home';
import demo from './demo';
import search from './search';

export default combineEpics(
  home.epic,
  demo.epic,
  search.epic
);
