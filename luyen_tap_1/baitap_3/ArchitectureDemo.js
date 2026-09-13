/**
 * Baitap 3: Mô phỏng Quy trình Hoạt động & Luồng Dữ liệu trong React Native Architecture
 * 
 * Luồng di chuyển của một thay đổi giao diện (UI Update):
 * 1. [JS Thread]: Người dùng bấm nút -> React State thay đổi -> Tạo cây Virtual DOM mới.
 * 2. [JS Engine]: Hermes / V8 biên dịch & tối ưu hóa mã JS.
 * 3. [Bridge / JSI]: Gửi lệnh serialize/direct-call dạng JSON hoặc C++ reference sang Native.
 * 4. [Shadow Thread & Yoga Engine]: Tính toán bố cục (Layout), kích thước (Flexbox) sang tọa độ pixels.
 * 5. [UI Main Thread]: Native iOS/Android Render trực tiếp các UI View gốc lên màn hình thiết bị.
 */

// Simulation of JS to Native Bridge Mechanism
class SimulatedRNBridge {
  constructor() {
    this.nativeQueue = [];
  }

  // Bước 1: Mã JS phát một sự kiện yêu cầu Render
  enqueueNativeCall(moduleName, methodName, args) {
    const payload = {
      module: moduleName,
      method: methodName,
      args: args,
      timestamp: Date.now(),
    };
    this.nativeQueue.push(payload);
    console.log(`[JS THREAD] Enqueued Native Command:`, payload);
    this.flushToNative();
  }

  // Bước 2: Chuyển tiếp dữ liệu qua Bridge / JSI đến Native
  flushToNative() {
    while (this.nativeQueue.length > 0) {
      const command = this.nativeQueue.shift();
      this.executeOnNativeThread(command);
    }
  }

  // Bước 3: Native Side nhận lệnh và tạo Native View thực tế
  executeOnNativeThread(command) {
    console.log(
      `[NATIVE THREAD] Executing ${command.module}.${command.method} with args:`,
      command.args
    );

    if (command.module === 'UIManager' && command.method === 'createView') {
      const [viewId, className, props] = command.args;
      console.log(
        `[NATIVE UI] Created Real Native Widget: <${className}> (ID: ${viewId}) on Device Screen.`
      );
    }
  }
}

// Chạy mô phỏng luồng
const bridge = new SimulatedRNBridge();

// Giả lập React Component re-render
function simulateButtonPress() {
  console.log('--- START USER INTERACTION: CLICK BUTTON ---');
  // Khi người dùng bấm nút: React muốn tạo một Native View mới
  bridge.enqueueNativeCall('UIManager', 'createView', [
    101,
    'RCTUIButton', // Trên iOS: UIButton, Trên Android: android.widget.Button
    { title: 'Thêm vào giỏ hàng', color: '#4F46E5' },
  ]);
}

simulateButtonPress();
