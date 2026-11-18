# TIN PC — website bán linh kiện máy tính (bản demo)

TIN PC là website tĩnh minh họa ý tưởng cửa hàng linh kiện dành cho sinh viên. Trang có danh mục sản phẩm, tìm kiếm, giỏ hàng lưu trên trình duyệt và luồng đặt hàng mô phỏng. Hình sản phẩm là minh họa SVG tự tạo; tên sản phẩm và giá chỉ dùng cho bản demo.

## Chạy trên máy

Mở `index.html` bằng trình duyệt, hoặc từ thư mục dự án chạy:

```bash
python3 -m http.server 8000
```

Truy cập `http://localhost:8000`. Không cần cài thư viện, biến môi trường hay bước build.

## Đưa lên GitHub Pages
Quét QR được nhóm đưa ra hoặc truy cập vào liên kết https://ectoiv.github.io/DraftWebsite/

Mỗi lần cập nhật các file trên nhánh đã chọn, GitHub Pages sẽ triển khai lại. Các đường dẫn tài nguyên trong dự án đều là đường dẫn tương đối để hoạt động trong repository con.

## Phạm vi demo

- Không kết nối cổng thanh toán, không tạo đơn hàng thực và không gửi dữ liệu đến máy chủ.
- Chỉ dùng thông tin khách hàng giả trong phần mô phỏng; không nhập hoặc cung cấp thông tin cá nhân thật.
- Giỏ hàng được lưu bằng `localStorage` trên thiết bị đang dùng và có thể bị xóa khi dữ liệu trình duyệt bị xóa. Không dùng trang này để kinh doanh thực tế khi chưa bổ sung máy chủ, quản lý đơn hàng và các chức năng cần thiết.
- Phông chữ tải từ Google Fonts nếu có kết nối mạng; trang vẫn dùng phông dự phòng khi không tải được.


## Cấu trúc trang

- `index.html`: trang chủ.
- `products.html`: danh sách, tìm kiếm và lọc sản phẩm. Tham số `category` có thể là `CPU`, `GPU`, `RAM` hoặc `SSD`.
- `categories.html`: các danh mục linh kiện.
- `product.html?id=1` đến `product.html?id=8`: thông tin chi tiết và thông số của từng sản phẩm.
- `backstory.html`: câu chuyện dự án.

Giỏ hàng vẫn được lưu trên trình duyệt và được dùng chung giữa các trang. Nút **Mua ngay** thêm sản phẩm vào giỏ rồi mở bước đặt hàng thử; các sản phẩm khác đã có trong giỏ cũng sẽ được tính vào đơn thử. Sản phẩm, giá và toàn bộ quy trình đặt hàng chỉ mang tính minh họa.
