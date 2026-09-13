import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

// Minh họa 3 Domain App khác nhau trong Bài tập 2
export default function App() {
  const [selectedApp, setSelectedApp] = useState('entertainment');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>So Sánh 3 Lĩnh Vực Ứng Dụng Di Động</Text>
        <Text style={styles.headerSubtitle}>Giải Trí • Học Tập • Thương Mại Điện Tử</Text>
      </View>

      {/* Selector Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedApp === 'entertainment' && styles.activeTab]}
          onPress={() => setSelectedApp('entertainment')}
        >
          <Text style={[styles.tabText, selectedApp === 'entertainment' && styles.activeTabText]}>
            🎵 Giải Trí (TikTok)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedApp === 'education' && styles.activeTab]}
          onPress={() => setSelectedApp('education')}
        >
          <Text style={[styles.tabText, selectedApp === 'education' && styles.activeTabText]}>
            🦉 Học Tập (Duolingo)
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedApp === 'ecommerce' && styles.activeTab]}
          onPress={() => setSelectedApp('ecommerce')}
        >
          <Text style={[styles.tabText, selectedApp === 'ecommerce' && styles.activeTabText]}>
            🛒 TMĐT (Shopee)
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {selectedApp === 'entertainment' && (
          <View style={styles.card}>
            <View style={[styles.badge, { backgroundColor: '#FE2C55' }]}>
              <Text style={styles.badgeText}>GIẢI TRÍ</Text>
            </View>
            <Text style={styles.cardTitle}>TikTok / YouTube Short</Text>
            <Text style={styles.sectionHeading}>👥 Đối tượng người dùng:</Text>
            <Text style={styles.bodyText}>Giới trẻ (Gen Z, Millennial), người có nhu cầu thư giãn nhanh.</Text>
            
            <Text style={styles.sectionHeading}>⚡ Chức năng chính:</Text>
            <Text style={styles.bodyText}>- Dòng tin video ngắn phát liên tục (Infinite Scroll feed).{'\n'}- Thuật toán gợi ý cá nhân hóa dựa trên AI.{'\n'}- Tương tác Thích, Bình luận, Chia sẻ và Tạo video.</Text>
            
            <Text style={styles.sectionHeading}>📊 Mức độ tương tác & UX:</Text>
            <Text style={styles.bodyText}>- Tương tác vuốt dọc cực kỳ đơn giản.{'\n'}- Đòi hỏi mạng 4G/5G/Wi-Fi băng thông cao để xem video mượt.</Text>
          </View>
        )}

        {selectedApp === 'education' && (
          <View style={styles.card}>
            <View style={[styles.badge, { backgroundColor: '#58CC02' }]}>
              <Text style={styles.badgeText}>HỌC TẬP</Text>
            </View>
            <Text style={styles.cardTitle}>Duolingo - Học Ngoại Ngữ</Text>
            <Text style={styles.sectionHeading}>👥 Đối tượng người dùng:</Text>
            <Text style={styles.bodyText}>Học sinh, sinh viên, người đi làm muốn học thêm ngôn ngữ mới.</Text>
            
            <Text style={styles.sectionHeading}>⚡ Chức năng chính:</Text>
            <Text style={styles.bodyText}>- Bài học dạng Game hóa (Gamification): trắc nghiệm, phát âm, ghép từ.{'\n'}- Hệ thống điểm số, chuỗi ngày học (Streak), bảng xếp hạng.{'\n'}- Nhắc nhở học tập hàng ngày.</Text>
            
            <Text style={styles.sectionHeading}>📊 Mức độ tương tác & UX:</Text>
            <Text style={styles.bodyText}>- Tương tác cao qua micro thu âm phát âm và chạm chọn đáp án.{'\n'}- Hỗ trợ học Offline khi tải bài học trước.</Text>
          </View>
        )}

        {selectedApp === 'ecommerce' && (
          <View style={styles.card}>
            <View style={[styles.badge, { backgroundColor: '#EE4D2D' }]}>
              <Text style={styles.badgeText}>THƯƠNG MẠI ĐIỆN TỬ</Text>
            </View>
            <Text style={styles.cardTitle}>Shopee - Sàn Mua Sắm Trực Tuyến</Text>
            <Text style={styles.sectionHeading}>👥 Đối tượng người dùng:</Text>
            <Text style={styles.bodyText}>Mọi lứa tuổi có nhu cầu mua sắm hàng hóa online.</Text>
            
            <Text style={styles.sectionHeading}>⚡ Chức năng chính:</Text>
            <Text style={styles.bodyText}>- Tìm kiếm sản phẩm, áp mã giảm giá (Voucher), thanh toán ví điện tử.{'\n'}- Quản lý giỏ hàng và theo dõi hành trình giao vận.{'\n'}- Đánh giá sản phẩm và chat trực tiếp với người bán.</Text>
            
            <Text style={styles.sectionHeading}>📊 Mức độ tương tác & UX:</Text>
            <Text style={styles.bodyText}>- Tương tác đa dạng (tìm kiếm, chọn thuộc tính màu/size, thanh toán).{'\n'}- Bắt buộc có kết nối mạng để tải giá và tồn kho thời gian thực.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 3,
    backgroundColor: '#F3F4F6',
  },
  activeTab: {
    backgroundColor: '#4F46E5',
  },
  tabText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4B5563',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  contentContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 10,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '800',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 14,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginTop: 10,
    marginBottom: 4,
  },
  bodyText: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 20,
  },
});
