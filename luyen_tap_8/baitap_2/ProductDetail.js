import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Alert } from 'react-native';

export default function ProductDetail({ id, name, price, description, image, rating, category, onBack }) {
  const formattedPrice = typeof price === 'number' 
    ? price.toLocaleString('vi-VN') + ' đ' 
    : price;

  const handleAddToCart = () => {
    Alert.alert('Thành công', `Đã thêm sản phẩm "${name}" vào giỏ hàng!`);
  };

  const handleBuyNow = () => {
    Alert.alert('Đặt hàng', `Bạn đang tiến hành thanh toán cho sản phẩm: \n${name}\nTổng tiền: ${formattedPrice}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Thanh Header với nút Back */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
          <Text style={styles.backButtonText}>← Quay lại</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Chi tiết sản phẩm</Text>
        <View style={{ width: 70 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Hình ảnh lớn sản phẩm */}
        {image && (
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: image }} 
              style={styles.image} 
              resizeMode="cover" 
            />
          </View>
        )}

        <View style={styles.contentCard}>
          {/* Tag mã sản phẩm & danh mục */}
          <View style={styles.metaRow}>
            <View style={styles.idBadge}>
              <Text style={styles.idText}>Mã: {id}</Text>
            </View>
            {category && (
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            )}
            {rating && (
              <Text style={styles.ratingText}>⭐ {rating} / 5.0</Text>
            )}
          </View>

          {/* Tên sản phẩm */}
          <Text style={styles.name}>{name}</Text>

          {/* Giá sản phẩm */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Giá ưu đãi:</Text>
            <Text style={styles.price}>{formattedPrice}</Text>
          </View>

          {/* Đường phân cách */}
          <View style={styles.divider} />

          {/* Mô tả sản phẩm */}
          <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
          <Text style={styles.description}>
            {description || 'Chưa có thông tin mô tả chi tiết cho sản phẩm này.'}
          </Text>

          {/* Chính sách bảo hành & giao hàng */}
          <View style={styles.policyBox}>
            <Text style={styles.policyItem}>✓ Cam kết chính hãng 100%</Text>
            <Text style={styles.policyItem}>✓ Bảo hành chính hãng 12 tháng</Text>
            <Text style={styles.policyItem}>✓ Miễn phí giao hàng toàn quốc</Text>
          </View>
        </View>
      </ScrollView>

      {/* Thanh nút hành động ở chân màn hình */}
      <View style={styles.bottomBar}>
        <TouchableOpacity 
          style={styles.cartButton} 
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <Text style={styles.cartButtonText}>+ Giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buyButton} 
          onPress={handleBuyNow}
          activeOpacity={0.8}
        >
          <Text style={styles.buyButtonText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
  },
  topBarTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },
  container: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#F8FAFC',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentCard: {
    padding: 20,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  idBadge: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  idText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
  },
  categoryBadge: {
    backgroundColor: '#E0F2FE',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0284C7',
    textTransform: 'uppercase',
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#F59E0B',
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    lineHeight: 28,
    marginBottom: 14,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 16,
  },
  priceLabel: {
    fontSize: 14,
    color: '#64748B',
    marginRight: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    color: '#E11D48',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#475569',
    marginBottom: 20,
  },
  policyBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  policyItem: {
    fontSize: 13,
    color: '#334155',
    marginBottom: 6,
    fontWeight: '500',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cartButton: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 10,
  },
  cartButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
  },
  buyButton: {
    flex: 1.5,
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buyButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
