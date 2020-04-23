import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Header} from './Header';
import {CommonButton} from './Button';
import {Input} from 'react-native-elements';
class PaymentSetupComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        name: 'Ahmed Hisham',
        phoneNumber: '01111225223',
        cardNumber: '',
        cvv: '',
        expiryDate: '',
        otherAttributes: '...',
      },
      cardNumberInput: '',
      cardExpiry: '',
      cardCVV: '',
    };
  }

  onChangeCardNumber = (text) => {
    this.setState({cardNumberInput: text});
  };

  onChangeCVV = (text) => {
    this.setState({cardCVV: text});
  };

  onChangeExpiry = (text) => {
    this.setState({cardExpiry: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'One more step!'}
          description={'Complete your profile'}
        />

        <View style={styles.bankCard}>
          <ImageBackground
            style={styles.card}
            source={require('../assets/BankCard.png')}
            imageStyle={{
              overflow: 'hidden',
              resizeMode: 'cover',
              borderTopRightRadius: 50,
            }}>
            <Text style={styles.name}>{this.state.currentUser.name}</Text>
            <View style={styles.inputFields}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Input
                  label="Card Number"
                  keyboardType="number-pad"
                  placeholder="XXXX XXXX XXXX XXXX"
                  inputStyle={{color: '#17283e'}}
                  containerStyle={{
                    marginBottom: 20,
                    paddingHorizontal: -5,
                    width: '75%',
                  }}
                  inputContainerStyle={{borderBottomColor: '#fdc82b'}}
                  labelStyle={styles.labelStyle}
                  onChangeText={(text) => onChangeCardNumber(text)}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <Input
                  label="CVV"
                  placeholder="123"
                  keyboardType="number-pad"
                  inputStyle={{color: '#17283e', marginLeft: 5}}
                  containerStyle={{
                    marginBottom: 20,
                    paddingHorizontal: -5,
                    width: '20%',
                  }}
                  inputContainerStyle={{borderBottomColor: '#fdc82b'}}
                  labelStyle={styles.labelStyle}
                  onChangeText={(text) => onChangeCVV(text)}
                />
                <Input
                  label="Expiry"
                  placeholder="02/27"
                  inputStyle={{color: '#17283e', marginLeft: 5}}
                  containerStyle={{
                    marginBottom: 20,
                    paddingHorizontal: -5,
                    width: '25%',
                    marginRight: 50,
                  }}
                  inputContainerStyle={{borderBottomColor: '#fdc82b'}}
                  labelStyle={styles.labelStyle}
                  onChangeText={(text) => onChangeExpiry(text)}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.doneButton}>
          <CommonButton title="Done" onPressFunc={this.props.done} />
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
    backgroundColor: '#f1f1f3',
    justifyContent: 'center',
  },

  bankCard: {
    flex: 2,
    paddingVertical: 75,
  },

  doneButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText1: {color: 'white', fontSize: 36, fontWeight: 'bold'},
  topText2: {color: 'white', fontSize: 14, opacity: 0.7, marginTop: 5},
  card: {
    flex: 1,
    marginRight: '5%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  name: {
    fontSize: 28,
    marginTop: 10,
    marginLeft: 25,
    color: '#17283e',
  },
  inputFields: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '15%',
    marginRight: '10%',
    marginTop: '3%',
    marginBottom: '5%',
  },
  labelStyle: {
    color: 'rgba(0,0,0,0.2)',
    fontSize: 18,
  },
});

export default PaymentSetupComponent;
