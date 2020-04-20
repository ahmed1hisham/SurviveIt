import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class HelloWorldComponent extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helloWorld}>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  helloWorld: {textAlign: 'center', fontWeight: 'bold', fontSize: 48},
});

export default HelloWorldComponent;
