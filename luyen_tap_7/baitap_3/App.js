import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterForm from './RegisterForm';

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
});
