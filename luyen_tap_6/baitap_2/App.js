import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import StudentInfo from './StudentInfo';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Danh sách sinh viên</Text>
      <StudentInfo fullName="Nguyễn Văn An" className="CNTT K20" major="Công nghệ thông tin" />
      <StudentInfo fullName="Trần Thị Bình" className="KTPM K21" major="Kỹ thuật phần mềm" />
      <StudentInfo fullName="Lê Hoàng Cường" className="HTTT K20" major="Hệ thống thông tin" />
      <StudentInfo fullName="Phạm Minh Dũng" className="ATTT K22" major="An toàn thông tin" />
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
