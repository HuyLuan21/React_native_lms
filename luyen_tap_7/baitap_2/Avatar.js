import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar({ uri, size = 64 }) {
  return (
    <Image
      source={{ uri }}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#DDDDDD',
    borderWidth: 2,
    borderColor: '#1E88E5',
  },
});
