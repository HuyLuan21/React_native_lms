import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductCard({ name, price }) {
  // Định dạng hiển thị giá tiền (VNĐ)
  const formattedPrice = typeof price === 'number' 
    ? price.toLocaleString('vi-VN') + ' đ' 
    : price;

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.productName} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.productPrice}>
          {formattedPrice}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    // Hiệu ứng đổ bóng trên Android và iOS
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  content: {
    justifyContent: 'center',
  },
  productName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0284C7',
  },
});
