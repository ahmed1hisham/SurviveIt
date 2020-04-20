import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import HelloWorldComponent from './app/components/HelloWorldComponent/HelloWorldComponent';

export default class App extends Component {
  state = {};
  render() {
    return (
      <View>
        <HelloWorldComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
