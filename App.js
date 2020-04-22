import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import AppNavigator from './app/navigation/Navigator';

console.disableYellowBox = true;
export default class App extends Component {
  state = {};
  render() {
    return <AppNavigator />;
  }
}

AppRegistry.registerComponent('App', () => App);
