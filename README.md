# btvdev03.github.io — Personal Academic & Software Engineering Portfolio

> **Võ Tấn Bản** • Software Engineer & Information Systems Researcher  
> M.Sc Candidate in Information Systems @ Trường Đại học Thủ Dầu Một (TDMU)  
> Email: `btv.dev03@gmail.com` • Location: Bình Dương, Việt Nam • GitHub: [@btvdev03](https://github.com/btvdev03)

Live Website: [https://btvdev03.github.io](https://btvdev03.github.io)

---

## 🌟 Overview & Highlights

Trang Portfolio cá nhân của **Kỹ sư Võ Tấn Bản**, được kiến trúc theo chuẩn High-Craft Web Engineering dành cho lập trình viên & nhà nghiên cứu:

1. **Sleek Dark Tech Theme**: Tone nền sâu `#08090d` kết hợp hiệu ứng neon Cyber Teal, Cyan & Indigo.
2. **Interactive Spotlight Cards**: Quầng sáng vật lý di chuyển theo tọa độ chuột (`SpotlightCard`) mang lại trải nghiệm tương tác trực quan, tinh tế.
3. **Command Palette (`Cmd + K` / `Ctrl + K`)**: Bảng điều khiển tra cứu nhanh toàn diện (chuyển mục, sao chép email kèm hiệu ứng confetti, mở GitHub, tìm kiếm dự án và bài báo).
4. **BibTeX Citation & Copy**: Hỗ trợ nhà nghiên cứu trích dẫn các bài báo học thuật với một cú click chuột kèm phản hồi trực quan.
5. **Decoupled Data Architecture (`src/data/portfolioData.ts`)**: Toàn bộ dữ liệu (thông tin cá nhân, bài báo nghiên cứu, case study chuyển đổi số, dự án mã nguồn mở, năng lực công nghệ, lộ trình học vấn) được quản lý tập trung và định kiểu chặt chẽ bằng TypeScript types.

---

## 🏗️ Architecture & Sections

- **Floating Glassmorphism Navbar**: Thanh điều hướng nổi với logo `<VB/>`, phím tắt `⌘K`, menu mobile responsive.
- **Hero & Identity**: Giới thiệu ngắn, status badge `🟢 Open for Research & Digital Transformation Collab`, interactive terminal card (`whoami`), metrics tổng quan.
- **Digital Transformation & Practical Solutions**: Case studies giải quyết bài toán thực tế của doanh nghiệp (Vấn đề -> Giải pháp kiến trúc -> Chỉ số kết quả đo lường).
- **Academic Research & Papers**: Các bài báo & hướng nghiên cứu khoa học tại TDMU (Abstract đóng/mở mượt mà bằng Framer Motion, DOI, PDF, BibTeX copy & preview).
- **Engineering & Open-Source Tools**:
  - `git-roast`: CLI phân tích thói quen code qua Git commit & bóc phốt dev phong cách Spotify Wrapped.
  - `InstantTranslate`: Chrome Extension MV3 dịch thuật ngữ đa ngữ cảnh tức thì.
  - `IdeaClaimer`: Hệ sinh thái tự động thu thập & tổng hợp ý tưởng nghiên cứu / công nghệ từ arXiv & Hacker News.
  - `zen-desk-clock`: Đồng hồ để bàn tối giản phong cách Zen & Pomodoro Deep Work.
- **Systems & Engineering Matrix**: Ma trận năng lực 4 chiều (Kiến trúc HTTT, Software Engineering, AI/NLP & Khai phá dữ liệu, DevOps & Hạ tầng).
- **Academic & Experience Journey**: Lộ trình đào tạo Kỹ sư Kỹ thuật Phần mềm và Cao học Hệ thống Thông tin tại TDMU.
- **Contact & Footer**: Tương tác sao chép email, thông tin liên hệ và copyright.

---

## 🛠️ Tech Stack

- **Framework & Runtime**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation & Physics**: Framer Motion
- **Icons**: Lucide Icons & Custom SVG components
- **Effects**: Canvas Confetti
- **CI/CD & Deployment**: GitHub Actions (`.github/workflows/deploy.yml`) -> GitHub Pages

---

## 🚀 Development & Deployment

### 1. Chạy thử nghiệm Local:
```bash
# Cài đặt thư viện
npm install

# Khởi chạy server phát triển
npm run dev
# Mở trình duyệt tại http://localhost:5173
```

### 2. Kiểm tra đóng gói Production:
```bash
npm run build
npm run preview
```

### 3. Tự động hóa Deployment lên GitHub Pages:
Repo đã được cấu hình GitHub Actions workflow tại `.github/workflows/deploy.yml`. Khi push code lên nhánh `main`:
```bash
git push -u origin main
```
GitHub Actions sẽ tự động kích hoạt workflow, cài đặt dependencies, build Vite project và phát hành trực tiếp lên `https://btvdev03.github.io`.

> **Lưu ý cấu hình trên GitHub Repo**:
> 1. Vào repository **Settings** -> **Pages**.
> 2. Trong mục **Build and deployment** -> **Source**, chọn **GitHub Actions**.
