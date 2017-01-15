import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import AllNews from './views/all_news';

class MainApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="allNews" component={AllNews} title="AllNews" initial />
        </Scene>
      </Router>
    );
  }
}

export default MainApp;
