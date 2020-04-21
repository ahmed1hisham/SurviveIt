import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import QRDisplayComponent from '../components/QRDipslayComponent';
import QRScanScreen from './QRScanScreen';
import PaymentSetupComponent from '../components/PaymentSetupComponent';
import {Header} from '../components/Header';

class PaymentScreen extends Component {
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
    // this.props.navigation.navigate('Camera');
  };

  goToQRDisplay = () => {
    this.setState({recMoney: true, payMoney: false});
  };

  recipientReturned = (phoneNumber) => {
    this.setState({recipientPhoneNumber: phoneNumber});
    console.log(this.state.recipientPhoneNumber);
  };

  render() {
    if (this.state.creditDone === true) {
      if (this.state.payMoney !== true && this.state.recMoney !== true) {
        return (
          <View style={styles.container}>
            <Header
              title={'One more step!'}
              description={'Complete your profile'}
            />
            {/* <TouchableOpacity style={{margin: 20}} onPress={this.goToQRDisplay}>
              <Text style={styles.buttons}>Recieve Money</Text>
            </TouchableOpacity> */}
            <View style={{flex: 1}}>
              <View style={styles.card}>
                <Text style={styles.buttons}>Recieve Money</Text>
                <QRDisplayComponent />
              </View>
              <View style={styles.card}>
                <Text style={styles.buttons}>Pay Money</Text>
              </View>
            </View>
          </View>
        );
      }
      if (this.state.payMoney === true) {
        return <QRScanScreen recipient={this.recipientReturned} />;
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
    backgroundColor: '#f1f1f3',
  },
  buttons: {textAlign: 'center', fontWeight: 'bold', fontSize: 32},
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 15,
    marginHorizontal: 20,
  },
});

export default PaymentScreen;
