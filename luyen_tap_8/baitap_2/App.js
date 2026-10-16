import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { MOCK_PRODUCTS } from './mockData';
import ProductItem from './ProductItem';
import ProductDetail from './ProductDetail';

export default function App() {
  // Quản lý sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Xử lý khi người dùng ấn vào 1 item trong danh sách
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Xử lý quay lại màn hình danh sách
  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // MÀN HÌNH CHI TIẾT: khi đã chọn một sản phẩm
  if (selectedProduct) {
    return (
      <ProductDetail
        id={selectedProduct.id}
        name={selectedProduct.name}
        price={selectedProduct.price}
        description={selectedProduct.description}
        image={selectedProduct.image}
        rating={selectedProduct.rating}
        category={selectedProduct.category}
        onBack={handleBackToList}
      />
    );
  }

  // MÀN HÌNH DANH SÁCH SẢN PHẨM: sử dụng FlatList
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      <View style={styles.container}>
        {/* Tiêu đề ứng dụng */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TechZone Store</Text>
          <Text style={styles.headerSubtitle}>
            Danh sách thiết bị công nghệ hàng đầu ({MOCK_PRODUCTS.length} sản phẩm)
          </Text>
        </View>

        {/* Danh sách 10 sản phẩm sử dụng FlatList */}
        <FlatList
          data={MOCK_PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem 
              item={item} 
              onPress={handleSelectProduct} 
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  listContent: {
    paddingBottom: 24,
  },
});
