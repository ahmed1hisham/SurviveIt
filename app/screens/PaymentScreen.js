import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import QRDisplayComponent from '../components/QRDipslayComponent';
import QRScanComponent from '../components/QRScanComponent';
import PaymentSetupComponent from '../components/PaymentSetupComponent';

class PaymentScreen extends Component {
  state = {creditDone: true, payMoney: false, recMoney: false};
  constructor(props) {
    super(props);

    this.state = {
      creditDone: false,
      payMoney: false,
      recMoney: false,
      recipientPhoneNumber: '',
    };
  }

  goToQRScan = () => {
    this.setState({payMoney: true, recMoney: false});
  };

  goToQRDisplay = () => {
    this.setState({recMoney: true, payMoney: false});
  };

  recipientReturned = (phoneNumber) => {
    this.setState({recipientPhoneNumber: phoneNumber});
    console.log(this.state.recipientPhoneNumber);
  };

  render() {
    if (this.state.creditDone) {
      if (this.state.payMoney !== true && this.state.recMoney !== true) {
        return (
          <View style={styles.container}>
            <TouchableOpacity style={{margin: 20}} onPress={this.goToQRDisplay}>
              <Text style={styles.buttons}>Recieve Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 20}} onPress={this.goToQRScan}>
              <Text style={styles.buttons}>Pay Money</Text>
            </TouchableOpacity>
          </View>
        );
      }
      if (this.state.payMoney === true) {
        return <QRScanComponent recipient={this.recipientReturned} />;
      } else if (this.state.recMoney === true) {
        return <QRDisplayComponent />;
      }
    } else {
      return <PaymentSetupComponent />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  buttons: {textAlign: 'center', fontWeight: 'bold', fontSize: 32},
});

export default PaymentScreen;
