import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
// import HomeScreen from './home/HomeScreen';
// import Home from './demo/Home';
import SearchScreen from './search/SearchScreen';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <HomeScreen /> */}
        {/* <Home /> */}
        <SearchScreen />
      </Provider>
    );
  }
}
