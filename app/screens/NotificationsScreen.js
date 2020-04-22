import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TextInput } from '../components/Input';
import { CommonButton } from '../components/Button';
import { AuthHeader } from '../components/AuthHeader';


class NotificationsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      nationalID: '',
      password: ''
    }
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
              console.log(text)
              this.setState({ name: text })
            }}
          />
          <TextInput
            label="National ID"
            iconName="user"
            onChangeTextFunc={(text) => {
              console.log(text)
              this.setState({ nationalID: text })
            }}
          />
          <TextInput
            label="Mobile Number"
            iconName="mobile"
            onChangeTextFunc={(text) => {
              console.log(text)
              this.setState({ number: text })
            }}
          />
          <TextInput
            label="Password"
            iconName="lock"
            onChangeTextFunc={(text) => {
              console.log(text)
              this.setState({ password: text })
            }}
          />


        </View>
        {/* <TextInput
          label="ssssss"
          iconName="user"
          onChangeTextFunc={(text) => console.log(text)}
        />
        <View style={{marginTop: 20}}/> */}
        <View style={{ alignSelf: 'center' }}>
          <CommonButton title="Sign Up" />
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


export default (NotificationsScreen);