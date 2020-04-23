import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput } from '../../components/Input';
import { CommonButton } from '../../components/Button';
import { AuthHeader } from '../../components/AuthHeader';
import { userSignUp } from '../../services/UserService';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      nationalID: '',
      password: '',
      loading: false
    }
  }
  onSignUpPress() {
    this.setState({ loading: true })
    let { name, password, number, nationalID } = this.state;
    userSignUp(name, number, password, nationalID)
      .then(async (res) => {
        console.log(res);
        await AsyncStorage.setItem('logged_in', 'true');
        this.setState({ loading: false })
        this.props.navigation.navigate('App')
      })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <AuthHeader title={`Together, we can  ${'\n'} survive it`} />
        </View>
        <View style={styles.inputDataView}>
          <Text style={styles.titleStyle}>New Account</Text>
          <TextInput
            label="Full Name"
            iconName="user"
            onChangeTextFunc={(text) => {
              this.setState({ name: text })
            }}
          />
          <TextInput
            label="National ID"
            iconName="user"
            onChangeTextFunc={(text) => {
              this.setState({ nationalID: text })
            }}
          />
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


        </View>
        <View style={{ alignSelf: 'center', flex: 0.4 }}>
          {this.state.loading ?
            <ActivityIndicator />
            :
            <CommonButton title="Sign Up" onPressFunc={this.onSignUpPress.bind(this)} />}
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
  }
})


export default (SignUp);