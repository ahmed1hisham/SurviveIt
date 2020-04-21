import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = ({title, description}) => {
  return (
    <View style={styles.topText}>
      <Text style={styles.topText1}>{title}</Text>
      <Text style={styles.topText2}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topText: {
    height: 150,
    backgroundColor: '#2d77fe',
    borderBottomLeftRadius: 75,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingRight: 45,
  },
  topText1: {color: 'white', fontSize: 36, fontWeight: 'bold'},
  topText2: {color: 'white', fontSize: 14, opacity: 0.7, marginTop: 5},
});
