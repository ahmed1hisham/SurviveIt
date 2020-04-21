import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
class QRScanComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barcodes: [],
      qrFound: false,
      qrCodeValue: '',
    };
  }

  sendDataToParent = (phoneNumber) => {
    this.props.recipient(phoneNumber);
  };

  onBarCodeRead(scanResult) {
    Vibration.vibrate(300);
    Vibration.cancel();
    this.setState({qrFound: true});
    if (scanResult.data != null) {
      if (!this.state.qrCodes.includes(scanResult.data)) {
        this.state.qrCodes.push(scanResult.data);
        this.setState({
          qrCodeValue: scanResult.data,
        });
      }
    }
    this.sendDataToParent(scanResult.data);
    return;
  }

  render() {
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

export default QRScanComponent;
