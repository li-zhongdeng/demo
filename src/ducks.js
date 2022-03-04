import {combineReducers} from 'redux';
import home from './home';
import demo from './demo';
import search from './search';

const appReducer = combineReducers({
  [home.ducks.NAME]: home.reducer,
  [demo.ducks.NAME]: demo.reducer,
  [search.ducks.NAME]: search.reducer,
});

export default (state, action) => {
  return appReducer(state, action);
};
