import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentInfo({ fullName, className, major }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.info}>Lớp: {className}</Text>
      <Text style={styles.info}>Ngành học: {major}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#1E88E5',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginBottom: 4,
  },
  info: {
    fontSize: 15,
    color: '#333333',
  },
});
