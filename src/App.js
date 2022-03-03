import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
// import HomeScreen from './home/HomeScreen';
import Home from './demo/Home';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <HomeScreen /> */}
        <Home />
      </Provider>
    );
  }
}
