import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [fullName, setFullName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập họ tên</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập họ tên của bạn"
        value={fullName}
        onChangeText={setFullName}
      />
      <Text style={styles.result}>Bạn đã nhập: {fullName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 64,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    color: '#1E88E5',
  },
});
