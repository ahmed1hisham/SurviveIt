import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import React, {Component} from 'react';
import QRDisplayComponent from '../components/QRDipslayComponent';
import PaymentSetupComponent from '../components/PaymentSetupComponent';
import {Header} from '../components/Header';
import {Input, Button} from 'react-native-elements';
import QRScanScreen from './QRScanScreen';
import AsyncStorage from '@react-native-community/async-storage';
import {paymentSetup} from '../services/UserService';
import {getUserByPhoneNumber} from '../services/UserService';

class PaymentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {},
      scanning: false,
      creditDone: false,
      payMoney: false,
      recMoney: false,
      recipientPhoneNumber: '',
      paymentAmount: '',
    };
  }
  componentDidMount() {
    this.updateCurrentUser();
  }

  async updateCurrentUser() {
    let user = await AsyncStorage.getItem('user');
    user = JSON.parse(user);
    getUserByPhoneNumber(user.phoneNumber)
      .then((res) => {
        console.log(res);
        this.setState({
          currentUser: res.data.data,
          creditDone: res.data.data.paymentSetup,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({userFound: false});
        Alert.alert('Error', err.response.data.data);
      });
  }

  goToQRScan = () => {
    this.props.navigation.navigate('Camera');
  };

  doneWithSetup = (cardNumber, cvv, expiry) => {
    paymentSetup(this.state.currentUser.phoneNumber, cardNumber, cvv, expiry)
      .then((res) => {
        console.log(res);
        Alert.alert('Success', 'Payment setup successful');
        this.updateCurrentUser();
        this.setState({creditDone: true});
      })
      .catch((err) => {
        console.log(err);
        this.setState({creditDone: false});
        Alert.alert('Error', err.response.data.data);
      });
  };

  onChangeAmountFunc = (text) => {
    this.setState({paymentAmount: text});
  };

  recipientReturned = (phoneNumber) => {
    this.setState({recipientPhoneNumber: phoneNumber});
    console.log(this.state.recipientPhoneNumber);
  };

  scanCode = () => {
    if (this.state.paymentAmount === '') {
      Alert.alert('Error', 'Please enter payment amount');
    } else {
      this.setState({scanning: true});
    }
  };

  doneScanning = (phoneNumber) => {
    this.setState({scanning: false});
    Alert.alert(
      'Confirmation',
      'Send ' + this.state.paymentAmount + ' SR ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            Alert.alert('Success', 'Money sent successfully');
          },
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    if (this.state.creditDone === true) {
      if (!this.state.scanning) {
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
                    onPress={() => this.scanCode()}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      } else {
        return <QRScanScreen done={this.doneScanning} />;
      }
    } else {
      return (
        <View style={styles.container}>
          <PaymentSetupComponent
            done={(x, y, z) => this.doneWithSetup(x, y, z)}
          />
        </View>
      );
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
    paddingBottom: 15,
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
    marginBottom: 15,
  },
  nextButton: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 15,
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
