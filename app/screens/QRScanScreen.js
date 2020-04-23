import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
class QRScanScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qrCodes: [],
      qrFound: false,
      qrCodeValue: '',
    };
  }

  sendDataToParent = (phoneNumber) => {
    this.props.recipient(phoneNumber);
  };

  onBarCodeRead = (scanResult) => {
    // Vibration.vibrate(300);
    // Vibration.cancel();
    this.setState({qrFound: true});
    if (scanResult.data != null) {
      if (!this.state.qrCodes.includes(scanResult.data)) {
        this.state.qrCodes.push(scanResult.data);
        this.setState({
          qrCodeValue: scanResult.data,
        });
      }
    }
    this.props.navigation.navigate('Payment', {
      phoneNumber: scanResult.data,
      justScanned: true,
    });
    return;
  };

  render() {
    if (!this.state.qrFound) {
      return (
        <View style={styles.container}>
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.camera}
            defaultTouchToFocus
            flashMode={RNCamera.Constants.FlashMode.auto}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}></RNCamera>
        </View>
      );
    } else {
      return (
        <View>
          <Text>{this.state.qrCodeValue}</Text>
        </View>
      );
    }
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
  camera: {
    flex: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

export default QRScanScreen;
