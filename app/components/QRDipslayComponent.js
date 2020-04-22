import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

class QRDisplayComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        name: 'Ahmed Hisham',
        phoneNumber: '01111225223',
        otherAttributes: '...',
      },
    };
  }
  render() {
    return (
      <View style={styles.container}>
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
