import React from 'react';
import { Input, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';



export const TextInput = ({ password, placeholder, iconName, value, onChangeTextFunc, label }) => {
  return (
    <Input
      placeholder={placeholder}
      leftIcon={
        iconName ? <Icon
          name={iconName}
          type="font-awesome"
          size={24}
          color='#fdc82b'
        /> : null
      }
      secureTextEntry={password}
      value={value}
      label={label}
      inputStyle={{ color: 'black', marginLeft: 10 }}
      containerStyle={{ marginBottom: 20, paddingHorizontal: -5 }}
      inputContainerStyle={{ borderBottomColor: '#fdc82b' }}
      labelStyle={styles.labelStyle}
      onChangeText={(text) => onChangeTextFunc(text)}
    />
  )
}

const styles = StyleSheet.create({
  labelStyle: {
    color: 'rgba(0,0,0,0.2)',
    fontSize: 18
  }
})