import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Greeting({ name }) {
  return <Text style={styles.text}>Xin chào, {name}!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#1E88E5',
    marginVertical: 6,
  },
});
