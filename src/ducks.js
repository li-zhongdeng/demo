import {combineReducers} from 'redux';
// import home from './home';
import demo from './demo';

// const appReducer = combineReducers({
//   [home.ducks.NAME]: home.reducer,
// });

const appReducer = combineReducers({
  [demo.ducks.NAME]: demo.reducer,
});

export default (state, action) => {
  return appReducer(state, action);
};
