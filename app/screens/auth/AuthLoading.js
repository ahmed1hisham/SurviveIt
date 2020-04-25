import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';



export default class AuthLoading extends React.Component {
  async componentDidMount() {
    // await AsyncStorage.clear()
    let log_in = await AsyncStorage.getItem('logged_in')
    if (log_in === 'true') {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Auth');
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }
}


