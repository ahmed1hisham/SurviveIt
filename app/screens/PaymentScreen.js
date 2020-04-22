import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import QRDisplayComponent from '../components/QRDipslayComponent';
import PaymentSetupComponent from '../components/PaymentSetupComponent';
import {Header} from '../components/Header';
import {Input, Button} from 'react-native-elements';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creditDone: false,
      payMoney: false,
      recMoney: false,
      recipientPhoneNumber: '',
      paymentAmount: '',
    };
  }

  goToQRScan = () => {
    this.props.navigation.navigate('Camera');
  };

  doneWithSetup = () => {
    this.setState({creditDone: true});
  };

  onChangeAmountFunc = (text) => {
    this.setState({paymentAmount: text});
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
            {this.state.creditDone ? (
              <Header
                title={'Services'}
                description={'Pay or receive money with a click'}
              />
            ) : (
              <Header
                title={'One more step!'}
                description={'Complete your profile'}
              />
            )}
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
                <View style={styles.amountInput}>
                  <Input
                    label="Amount (SR)"
                    inputStyle={{color: 'black', marginLeft: 10}}
                    containerStyle={{marginBottom: 20, paddingHorizontal: -5}}
                    inputContainerStyle={{borderBottomColor: '#fdc82b'}}
                    labelStyle={styles.labelStyle}
                    onChangeText={(text) => this.onChangeAmountFunc(text)}
                    keyboardType="numeric"
                    placeholder="0.00"
                  />
                </View>
                <View style={styles.nextButton}>
                  <Button
                    type="solid"
                    title="Next"
                    titleStyle={styles.titleStyle}
                    buttonStyle={styles.buttonStyle}
                    onPress={() => this.goToQRScan()}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      }
    } else {
      return <PaymentSetupComponent done={this.doneWithSetup} />;
    }
  }
}
const {width} = Dimensions.get('screen');
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
  amountInput: {
    flex: 1,
    padding: 30,
  },
  nextButton: {
    flex: 1,
    alignItems: 'center',
  },
  labelStyle: {
    color: 'rgba(0,0,0,0.2)',
    fontSize: 18,
  },
  titleStyle: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#fdc82b',
    borderRadius: 30,
    width: width * 0.8,
    paddingVertical: 12,
  },
});

export default PaymentScreen;
