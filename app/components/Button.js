import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('screen');

export const CommonButton = ({ title, onPressFunc, disabled }) => {
  return (
    <Button
      type="solid"
      title={title}
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      onPress={() => onPressFunc()}
      disabled={disabled}
    />
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  buttonStyle: {
    backgroundColor: '#fdc82b',
    borderRadius: 30,
    width: width * 0.9,
    paddingVertical: 12
  }
})