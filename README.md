# TIN PC — website bán linh kiện máy tính (bản demo)

TIN PC là website tĩnh minh họa ý tưởng cửa hàng linh kiện dành cho sinh viên. Trang có danh mục sản phẩm, tìm kiếm, giỏ hàng lưu trên trình duyệt và luồng đặt hàng mô phỏng. Hình sản phẩm là minh họa SVG tự tạo; tên sản phẩm và giá chỉ dùng cho bản demo.

## Chạy trên máy

Mở `index.html` bằng trình duyệt, hoặc từ thư mục dự án chạy:

```bash
python3 -m http.server 8000
```

Truy cập `http://localhost:8000`. Không cần cài thư viện, biến môi trường hay bước build.

## Đưa lên GitHub Pages

1. Tạo một repository mới trên GitHub và tải toàn bộ các file trong thư mục này lên nhánh `main` (đảm bảo `index.html` nằm ở thư mục gốc repository).
2. Trong repository, mở **Settings → Pages**. Ở **Build and deployment**, chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)`, sau đó nhấn **Save**.
3. Khi GitHub Pages hoàn tất triển khai, mở đường dẫn được hiển thị trong mục Pages. Thông thường đường dẫn có dạng `https://<tên-tài-khoản>.github.io/<tên-repository>/`.
4. Cập nhật `links.txt` bằng đường dẫn website và repository thực tế. Có thể dùng đường dẫn website để tạo mã QR cho poster hoặc bản trình bày.

Mỗi lần cập nhật các file trên nhánh đã chọn, GitHub Pages sẽ triển khai lại. Các đường dẫn tài nguyên trong dự án đều là đường dẫn tương đối để hoạt động trong repository con.

## Phạm vi demo

- Không kết nối cổng thanh toán, không tạo đơn hàng thực và không gửi dữ liệu đến máy chủ.
- Chỉ dùng thông tin khách hàng giả trong phần mô phỏng; không nhập hoặc cung cấp thông tin cá nhân thật.
- Giỏ hàng được lưu bằng `localStorage` trên thiết bị đang dùng và có thể bị xóa khi dữ liệu trình duyệt bị xóa. Không dùng trang này để kinh doanh thực tế khi chưa bổ sung máy chủ, quản lý đơn hàng và các chức năng cần thiết.
- Phông chữ tải từ Google Fonts nếu có kết nối mạng; trang vẫn dùng phông dự phòng khi không tải được.
