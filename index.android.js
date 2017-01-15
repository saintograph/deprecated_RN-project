/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MainApp from './src/MainApp';

export default class arcticThisWeek extends Component {
  render() {
    return (
      <MainApp />
    );
  }
}


AppRegistry.registerComponent('arcticThisWeek', () => arcticThisWeek);
