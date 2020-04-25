import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-community/async-storage';

class QRDisplayComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
    };
  }
  async componentDidMount() {
    let user = await AsyncStorage.getItem('user');
    user = JSON.parse(user);
    this.setState({currentUser: user});
  }
  render() {
    return (
      <View style={styles.container}>
        {/* {this.state.currentUser !== {} ? (

        ) : null} */}
        <QRCode
          value={this.state.currentUser.phoneNumber}
          backgroundColor="transparent"
          size={150}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QRDisplayComponent;
