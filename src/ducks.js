import {combineReducers} from 'redux';
import home from './home';

const appReducer = combineReducers({
  [home.ducks.NAME]: home.reducer,
});

export default (state, action) => {
  return appReducer(state, action);
};
