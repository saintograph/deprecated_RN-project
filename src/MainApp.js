import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import store from './redux/index';
// import AllNews from './views/all_news';
import SingleItem from './views/single_item';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class MainApp extends Component {
  render() {
    return (
      // <Provider store={createStoreWithMiddleware(store)}>
      <Provider>
        <Router>
          <Scene key="root">
            <Scene key="singleItem" component={SingleItem} title="SingleItem" initial />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default MainApp;
