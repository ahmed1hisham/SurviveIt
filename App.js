import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import PaymentScreen from './app/screens/PaymentScreen';
export default class App extends Component {
  state = {};
  render() {
    return (
      <View>
        <PaymentScreen />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
