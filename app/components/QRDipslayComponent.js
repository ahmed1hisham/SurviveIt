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
        <View style={styles.qrCode}>
          <QRCode
            value={this.state.currentUser.phoneNumber}
            backgroundColor="transparent"
            size={300}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },

  qrCode: {
    marginTop: 15,
  },
});

export default QRDisplayComponent;
