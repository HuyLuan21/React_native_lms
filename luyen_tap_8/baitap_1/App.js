import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ProductCard from './ProductCard';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Cửa Hàng Công Nghệ</Text>
          <Text style={styles.subtitle}>Danh sách sản phẩm nổi bật</Text>
        </View>

        {/* Sử dụng component ProductCard ít nhất 3 lần với 3 bộ dữ liệu khác nhau */}
        <ProductCard 
          name="Điện thoại iPhone 15 Pro Max 256GB" 
          price={29990000} 
        />

        <ProductCard 
          name="Laptop Apple MacBook Air M3 13.6 inch" 
          price={27490000} 
        />

        <ProductCard 
          name="Tai nghe không dây AirPods Pro 2 Type-C" 
          price={5790000} 
        />

        <ProductCard 
          name="Đồng hồ thông minh Apple Watch Series 9 GPS" 
          price={9990000} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    padding: 20,
    paddingTop: 30,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
  },
});
