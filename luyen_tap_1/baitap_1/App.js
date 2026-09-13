import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';

// Mock Data cho danh sách sản phẩm E-commerce (Shopee/Tiki clone)
const CATEGORIES = [
  { id: '1', name: 'Thời trang' },
  { id: '2', name: 'Điện tử' },
  { id: '3', name: 'Gia dụng' },
  { id: '4', name: 'Làm đẹp' },
  { id: '5', name: 'Sách' },
];

const PRODUCTS = [
  {
    id: 'p1',
    title: 'Áo Phông Nam Cotton Premium Form Wide Fit',
    price: '199.000đ',
    rating: 4.8,
    sold: '1.2k',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80',
  },
  {
    id: 'p2',
    title: 'Tai Nghe Bluetooth Không Dây Chống Ồn Active ANC',
    price: '890.000đ',
    rating: 4.9,
    sold: '3.5k',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  },
  {
    id: 'p3',
    title: 'Giày Sneaker Thể Thao Nam Nữ Phong Cách Retro',
    price: '450.000đ',
    rating: 4.7,
    sold: '850',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
  },
  {
    id: 'p4',
    title: 'Đồng Hồ Thông Minh Đo Nhịp Tim Chống Nước IP68',
    price: '1.250.000đ',
    rating: 4.9,
    sold: '2.1k',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('1');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(3);

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
          <Text style={styles.soldText}>Đã bán {item.sold}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header Search Bar */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm sản phẩm, thương hiệu..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.cartIcon}>🛒</Text>
          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Promotion */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerCard}>
            <Text style={styles.bannerTag}>SIÊU SALE 9.9</Text>
            <Text style={styles.bannerTitle}>Giảm Giá Đến 50%</Text>
            <Text style={styles.bannerSubtitle}>Miễn phí vận chuyển toàn quốc</Text>
            <TouchableOpacity style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>Mua Ngay</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories Bar */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Danh Mục Sản Phẩm</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[
                styles.categoryChip,
                activeCategory === cat.id && styles.activeCategoryChip,
              ]}
              onPress={() => setActiveCategory(cat.id)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === cat.id && styles.activeCategoryText,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Product Grid */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Gợi Ý Hôn Nay</Text>
          <Text style={styles.seeMore}>Xem tất cả ›</Text>
        </View>

        <FlatList
          data={PRODUCTS}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.gridContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF0F4',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1A1D1E',
  },
  cartBtn: {
    marginLeft: 12,
    padding: 6,
    position: 'relative',
  },
  cartIcon: {
    fontSize: 22,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  bannerContainer: {
    padding: 16,
  },
  bannerCard: {
    backgroundColor: '#4F46E5',
    borderRadius: 16,
    padding: 20,
  },
  bannerTag: {
    color: '#FBBF24',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    marginVertical: 4,
  },
  bannerSubtitle: {
    color: '#E0E7FF',
    fontSize: 13,
    marginBottom: 12,
  },
  bannerBtn: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  bannerBtnText: {
    color: '#4F46E5',
    fontWeight: '700',
    fontSize: 13,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },
  seeMore: {
    fontSize: 13,
    color: '#4F46E5',
    fontWeight: '600',
  },
  categoryList: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeCategoryChip: {
    backgroundColor: '#4F46E5',
    borderColor: '#4F46E5',
  },
  categoryText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },
  activeCategoryText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  gridContainer: {
    paddingHorizontal: 10,
    paddingBottom: 24,
  },
  productCard: {
    flex: 1,
    margin: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 10,
  },
  productTitle: {
    fontSize: 13,
    color: '#1F2937',
    fontWeight: '500',
    lineHeight: 18,
    height: 36,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#EF4444',
    marginVertical: 4,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 11,
    color: '#4B5563',
  },
  soldText: {
    fontSize: 11,
    color: '#9CA3AF',
  },
});
