import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigation/Navigator';
import RNLocalNotifications from 'react-native-local-notifications';
import BackgroundTimer from 'react-native-background-timer';

console.disableYellowBox = true;
export default class App extends Component {
  componentDidMount() {
    // BackgroundTimer.runBackgroundTimer(() => {
    // RNLocalNotifications.createNotification(1, 'Some text', '2020-04-24 02:43', 'default')
    // console.log('ss');
    // },
    // 3000);
  }
  state = {};
  render() {
    return <AppNavigator />;
  }
}

AppRegistry.registerComponent('App', () => App);
