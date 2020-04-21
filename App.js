import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import PaymentScreen from './app/screens/PaymentScreen';
import AppNavigator from './app/navigation/Navigator';
export default class App extends Component {
  state = {};
  render() {
    return (
      // <View>
      /* <PaymentScreen /> */
      <AppNavigator />
      // </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
