import React from 'react';
import { View, StyleSheet } from 'react-native';
import Greeting from './Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Nguyễn Văn A" />
      <Greeting name="Trần Thị B" />
      <Greeting name="Lê Văn C" />
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
