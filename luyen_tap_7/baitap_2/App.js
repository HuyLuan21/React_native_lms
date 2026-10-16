import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import UserProfile from './UserProfile';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hồ sơ người dùng</Text>
      <UserProfile
        name="Nguyễn Văn An"
        bio="Sinh viên CNTT, yêu thích lập trình di động."
        profileImage="https://i.pravatar.cc/150?img=12"
      />
      <UserProfile
        name="Trần Thị Bình"
        bio="Thiết kế UI/UX, thích chụp ảnh và du lịch."
        profileImage="https://i.pravatar.cc/150?img=47"
      />
      <UserProfile
        name="Lê Hoàng Cường"
        bio="Lập trình viên backend, đang học React Native."
        profileImage="https://i.pravatar.cc/150?img=33"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
