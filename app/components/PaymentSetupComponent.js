import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from './Header';
class PaymentSetupComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {
        name: 'Salma medhat',
        phoneNumber: '01111225223',
        cardNumber: '',
        cvv: '',
        expiryDate: '',
        otherAttributes: '...',
      },
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'One more step!'}
          description={'Complete your profile'}
        />

        <View style={styles.bankCard}>
          <View style={styles.card}>
            <Text style={styles.name}>{this.state.currentUser.name}</Text>
          </View>
        </View>
        <View style={styles.doneButton}></View>
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
    justifyContent: 'center',
  },

  bankCard: {
    flex: 2,
    paddingVertical: 75,
  },

  doneButton: {
    flex: 1,
  },
  topText1: {color: 'white', fontSize: 36, fontWeight: 'bold'},
  topText2: {color: 'white', fontSize: 14, opacity: 0.7, marginTop: 5},
  card: {
    flex: 1,
    width: '95%',
    backgroundColor: '#CCCCCC',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  name: {
    fontSize: 32,
  },
});

export default PaymentSetupComponent;
