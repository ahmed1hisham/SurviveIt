import React from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';

import { TextInput } from '../../components/Input';
import { CommonButton } from '../../components/Button';
import { AuthHeader } from '../../components/AuthHeader';
import { userSignIn } from '../../services/UserService';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      password: '',
      loading: false
    }
  }
  onLoginPress = () => {
    let { number, password } = this.state;
    this.setState({ loading: true })
    userSignIn(number, password).then(async res => {
      console.log(res)
      await AsyncStorage.setItem('logged_in', 'true');
      this.setState({ loading: false })
      this.props.navigation.navigate('App')
    }).catch(err => Alert.alert('Error', 'Invalid phone number or password'))
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AuthHeader title={`Together, we can  ${'\n'} survive it`} />
        <View style={styles.inputDataView}>
          <Text style={styles.titleStyle}>Welcome {'\n'}Back</Text>
          <TextInput
            label="Mobile Number"
            iconName="mobile"
            onChangeTextFunc={(text) => {
              this.setState({ number: text })
            }}
          />
          <TextInput
            label="Password"
            iconName="lock"
            onChangeTextFunc={(text) => {
              this.setState({ password: text })
            }}
          />
          <View style={styles.linedButtonsView}>
            <Text
              style={styles.forgotPasswordStyle}
              onPress={() => this.props.navigation.navigate('SignUp')}
            >Create a new account!</Text>
            <Text
              style={styles.forgotPasswordStyle}>Forgot Password</Text>
          </View>

        </View>
        <View style={{ alignSelf: 'center', flex: 0.4 }}>
          {this.state.loading ?
            <ActivityIndicator />
            :
            < CommonButton title="Login" onPressFunc={this.onLoginPress.bind(this)} />}

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputDataView: {
    borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: 'white', padding: 30, marginTop: -30, flex: 2
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 31,
    marginBottom: 40,
  },
  forgotPasswordStyle: {
    color: '#2d77fe',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 5,
  },
  linedButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})


export default (Login);