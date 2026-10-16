import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterHook from './CounterHook';

export default function App() {
  return (
    <View style={styles.container}>
      <CounterHook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
  },
});
