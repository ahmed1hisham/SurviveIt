import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const AuthHeader = ({ title, description }) => {
  return (
    <View style={styles.topText}>
      <Text style={styles.topText1}>{title}</Text>
      {/* <Text style={styles.topText2}>{description}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  topText: {
    backgroundColor: '#2d77fe',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingHorizontal: 55,
    height: 300
  },
  topText1: { color: 'white', fontSize: 36, fontWeight: 'bold' },
  topText2: { color: 'white', fontSize: 14, opacity: 0.7, marginTop: 5 },

});