/**
 * Baitap 2: Minh họa so sánh kiến trúc & cách tiếp cận giữa Native và React Native
 * 
 * 1. Native Approach (Android - Kotlin / iOS - Swift):
 *    - Mỗi nền tảng có ngôn ngữ và SDK riêng biệt.
 *    - Android: Kotlin + Jetpack Compose / XML Layouts.
 *    - iOS: Swift + SwiftUI / UIKit.
 *    - Truy cập trực tiếp Phần cứng & API Hệ điều hành mà không cần cầu nối (Bridge).
 * 
 * 2. React Native Approach (Cross-Platform JS/TS):
 *    - Dùng chung mã nguồn JavaScript/TypeScript.
 *    - Sử dụng React Native Bridge / JSI (JavaScript Interface) để gọi các hàm Native.
 */

// Ví dụ minh họa: Cách gọi một API thiết bị (như Lấy dung lượng Pin / Battery Level)

// ==========================================
// A. REACT NATIVE CODE (Ví dụ dùng chung cho cả Android & iOS)
// ==========================================
import { NativeModules, Platform, StyleSheet, Text, View } from 'react-native';

// React Native gọi Native Module thông qua Bridge/JSI
const getBatteryLevelRN = async () => {
  try {
    // Gọi đến module gốc BatteryModule đã được định nghĩa ở Native
    if (NativeModules.BatteryModule) {
      const level = await NativeModules.BatteryModule.getBatteryLevel();
      console.log(`[React Native] Pin hiện tại (${Platform.OS}):`, level);
      return level;
    }
  } catch (error) {
    console.error('Lỗi khi lấy thông tin pin:', error);
  }
};

// ==========================================
// B. MINH HỌA NATIVE CODE (Được ẩn đằng sau Native Module)
// ==========================================

/*
--- ANDROID (Kotlin Native Code) ---
class BatteryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "BatteryModule"

    @ReactMethod
    fun getBatteryLevel(promise: Promise) {
        val bm = reactContext.getSystemService(Context.BATTERY_SERVICE) as BatteryManager
        val batLevel = bm.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
        promise.resolve(batLevel)
    }
}

--- iOS (Swift Native Code) ---
@objc(BatteryModule)
class BatteryModule: NSObject {
    @objc func getBatteryLevel(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
        UIDevice.current.isBatteryMonitoringEnabled = true
        let level = Int(UIDevice.current.batteryLevel * 100)
        resolve(level)
    }
}
*/

// ==========================================
// BẢNG BẢO TRÌ & NĂNG SUẤT CODE
// ==========================================
export const COMPARISON_METRICS = {
  native: {
    language: 'Kotlin (Android) / Swift (iOS)',
    codeReuse: '0% (Phải viết 2 bộ code riêng biệt)',
    performance: 'Tối đa 100% (Truy cập phần cứng trực tiếp, 60/120 FPS ổn định)',
    timeToMarket: 'Chậm (Tốn gấp 1.5x - 2x thời gian xây dựng)',
    cost: 'Cao (Cần tuyển 2 đội ngũ lập trình viên Android & iOS chuyên biệt)',
    maintenance: 'Phức tạp (Sửa lỗi & thêm tính năng phải làm 2 lần trên 2 codebase)',
  },
  reactNative: {
    language: 'JavaScript / TypeScript',
    codeReuse: '80% - 95% (Dùng chung hầu hết logic & UI)',
    performance: 'Rất tốt (~90-95% so với Native đối với ứng dụng thông thường)',
    timeToMarket: 'Rất nhanh (Phát triển 1 lần, ra mắt 2 hệ điều hành)',
    cost: 'Tiết kiệm (Chỉ cần 1 đội ngũ Web/React dev tiếp quản)',
    maintenance: 'Dễ dàng (Sửa logic hoặc đổi UI chỉ cần sửa ở 1 nơi chung)',
  },
};
