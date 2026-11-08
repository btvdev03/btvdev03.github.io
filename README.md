# btvdev03.github.io — Personal Academic & Software Engineering Portfolio (v2.0)

> **Võ Tấn Bản** • Kỹ sư Phần mềm & Học viên Cao học Hệ thống Thông tin  
> Trường Đại học Thủ Dầu Một (TDMU) • Bình Dương & Đồng Tháp, Việt Nam  
> 🌐 **Website**: [https://btvdev03.github.io](https://btvdev03.github.io) • 🐙 **GitHub**: [@btvdev03](https://github.com/btvdev03) • ✉️ **Email**: `btv.dev03@gmail.com` • 📘 **Facebook**: [btvdev03](https://www.facebook.com/btvdev03)

---

## 🌾 Triết Lý Thiết Kế & Bản Sắc Văn Hóa (Mekong Delta & Washi-Zen)

Website portfolio cá nhân chính thức của **Kỹ sư Võ Tấn Bản**, được kiến trúc thủ công kết hợp giữa **Nghệ thuật đồ họa 3D Three.js**, **Pixel Art 16-bit retro** và **Văn hóa Sông nước Miền Tây Nam Bộ**:

* **Hồn cốt Phù sa Nam Bộ**: Mô phỏng dòng kênh phù sa dập dềnh bồi đắp, chiếc xuồng ba lá mộc mạc bồng bềnh, đóa sen hồng Đồng Tháp Mười bung nở, giàn vó tre vươn mình ra dòng sông đêm và rặng núi Thất Sơn (An Giang) mờ sương tĩnh lặng.
* **Chu kỳ ánh sáng thực tế (Dynamic Time-of-Day)**: 4 chế độ hiển thị thời gian linh hoạt (*Morning*, *Day*, *Sunset*, *Night*) với bảng màu shader và ánh sáng tự nhiên chuyển động theo thời gian thực.
* **Phong cách Washi-Zen thanh tịnh**: Nền giấy washi mỹ thuật nhẹ nhàng, kết hợp typography sắc nét (`Onest` & `Instrument Serif`) mang lại trải nghiệm đọc thư thái, mộc mạc và chân thành.

---

## 🏗️ Kiến Trúc Hệ Thống (Architecture Highlights)

1. **Phân Tầng Dự Án (Two-Tier Project Architecture)**:
   - **Tầng 1 - Artistic 3D Banner**: Canvas 3D bầu trời đêm Thất Sơn với dải Marquee kép chạy mượt mà vô tận, tôn vinh trọn vẹn cảnh sắc chòi lá, đom đóm và giàn vó tre.
   - **Tầng 2 - Projects Showcase**: Khu vực trưng bày thẻ dự án trên nền giấy washi mộc mạc, tích hợp hệ thống **Category Tabs Filter** tức thì (`Tất Cả Dự Án`, `🛠️ CLI & DevTools`, `🌐 Web App & 3D`, `🔬 Nghiên Cứu & Khai Phá`), sẵn sàng mở rộng khi có hàng chục dự án mà không bị rối mắt.
2. **Lộ Trình Học Tập & Công Tác Thực Tế (Career & Academic Timeline)**:
   - Dòng thời gian trực quan gồm **9 cột mốc thực tế**:
     - *Công tác thực chiến*: IT Lead tại Công ty Hoàng Giang Solar (`hoanggiangsolar.vn`), Chuyên viên Truyền thông & Thành viên Ban chuyên môn Phòng Giải pháp số - Trung tâm Chuyển đổi số ĐH Thủ Dầu Một (TDMU DTC `dtc.tdmu.edu.vn`).
     - *Học tập & Đào tạo*: Học viên Cao học Hệ thống Thông tin (2026 - 2028), Kỹ sư Kỹ thuật Phần mềm ĐH Thủ Dầu Một (2021 - 2026), Trung cấp nghề Tin học Ứng dụng & THPT Nông Lâm nghiệp Bình Dương, THCS Hòa Lợi / Lý Tự Trọng, Tiểu học Hòa Lợi, Tiểu học Láng Biển (Tháp Mười, Đồng Tháp).
   - Tích hợp bộ lọc tabs tương tác và tải hồ sơ năng lực / CV PDF.
3. **Nghiên Cứu Khoa Học & Ấn Phẩm Học Thuật**:
   - Định hướng nghiên cứu cao học tại TDMU: *Semantic Search*, *Khai phá tri thức (Knowledge Discovery)*, *Mô hình hóa dữ liệu* và *Chuyển đổi số*.
   - Hỗ trợ xem trích dẫn và sao chép mã BibTeX tiện lợi với một cú click.
4. **Kiến Thức Chia Sẻ & Ghi Chú Kỹ Thuật**:
   - Nơi ghi chép các bài học thực tiễn: Tối ưu hoá Git Internals CLI, Kiến trúc Offline-First cho nhà máy, và hành trình từ Kỹ sư đến Học viên Cao học HTTT.
5. **100% Responsive Mobile Toàn Diện**:
   - Khóa khung 0 tràn ngang (`scrollWidth <= clientWidth`).
   - Mobile Drawer trượt mờ kính (`backdrop-filter: blur(20px)`), phím đóng mở êm ái, thẻ điều hướng chuẩn touch target Apple/Google HIG (44x44px).
6. **Hệ Thống Dữ Liệu Tự Chủ (`profile-data.js`)**:
   - Tách biệt hoàn toàn tầng dữ liệu và tầng hiển thị. Toàn bộ thông tin lộ trình, dự án, bài báo, bài viết và mạng xã hội được quản lý tập trung, độc lập và dễ dàng cập nhật.

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

- **3D Graphics & Canvas**: Three.js, Custom GLSL Shader Materials, Canvas 2D API, Pixel Art 16-bit
- **Frontend & Build Tool**: HTML5 Semantic, CSS3 Modern (Custom Properties, Grid, Flexbox, Clamp), TypeScript, Vite
- **Typography**: Onest, Instrument Serif, JetBrains Mono
- **Responsive Testing**: Playwright Chromium Headless
- **CI/CD & Hosting**: GitHub Actions (`.github/workflows/deploy.yml`) tự động hóa build và phát hành lên **GitHub Pages**.

---

## 🚀 Khởi Chạy & Phát Triển Cục Bộ

```bash
# 1. Cài đặt thư viện dependencies
npm install

# 2. Khởi chạy dev server
npm run dev

# 3. Build kiểm tra đóng gói bản production
npm run build
```

---

## 📬 Liên Hệ & Hợp Tác

- **Tác giả**: Võ Tấn Bản (Ban Vo Tan)
- **Email**: [btv.dev03@gmail.com](mailto:btv.dev03@gmail.com)
- **GitHub**: [@btvdev03](https://github.com/btvdev03)
- **Facebook**: [facebook.com/btvdev03](https://www.facebook.com/btvdev03)
- **LinkedIn**: [linkedin.com/in/btvdev03](https://www.linkedin.com/in/btvdev03)
- **Cơ quan công tác**: Trung tâm Chuyển đổi số - Trường Đại học Thủ Dầu Một & Công ty Hoàng Giang Solar

---
*© 2026 Võ Tấn Bản. Crafted with ThreeUI Washi-Zen Aesthetic & Mekong Delta Soul.*
