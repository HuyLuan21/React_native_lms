import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from './Avatar';

export default function UserProfile({ name, bio, profileImage }) {
  return (
    <View style={styles.card}>
      <Avatar uri={profileImage} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginBottom: 4,
  },
  bio: {
    fontSize: 15,
    color: '#333333',
  },
});
