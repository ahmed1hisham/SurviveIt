import React from 'react';
import { View, Text } from 'react-native';

import { TextInput } from '../components/Input';
import { CommonButton } from '../components/Button';


class NotificationsScreen extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
        <TextInput
          label="ssssss"
          iconName="user"
          onChangeTextFunc={(text) => console.log(text)}
        />
        <View style={{marginTop: 20}}/>
        <CommonButton title="Next" />
      </View>
    )
  }
}


export default (NotificationsScreen);