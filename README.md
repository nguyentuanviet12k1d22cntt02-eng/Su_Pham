# Khóa Đào Tạo AI Sư Phạm Đại Học 4.0

Hệ thống học liệu & kịch bản sư phạm số hóa 16 buổi dành cho Giảng viên Đại học, tối ưu hóa ứng dụng Trí tuệ Nhân tạo (Generative AI) trong thiết kế bài giảng, soạn học liệu, đánh giá quá trình và cá nhân hóa đào tạo.

---

## 📌 Tổng Quan Lộ Trình Đào Tạo 16 Buổi

- **Buổi 1**: Nhập Môn AI & Tư Duy Sử Dụng AI Trong Giáo Dục Đại Học
- **Buổi 2**: Prompt Engineering Cho Giảng Viên Đại Học (Công thức CRTC-OE)
- **Buổi 3**: AI Thiết Kế Bài Giảng & Học Phần (Mô hình Constructive Alignment & 3 Chặng)
- **Buổi 4**: Dùng AI Tạo Trọn Bộ Tài Liệu Bài Giảng (Slide, Handout điền khuyết, Case Study, FAQ)
- **Buổi 5**: Làm Chủ NotebookLM: Tóm Tắt Học Liệu, Xây Dựng Giáo Án, Soạn Slide & Mô Tả Phong Cách Hình Ảnh (Thực hành SGK Địa Lí 11 - Bài 19: Kinh tế Hoa Kỳ)
- **Buổi 6**: Thiết Kế Trợ Lý Gia Sư AI (AI Tutor) Hỗ Trợ Sinh Viên (Phương pháp Socrates)
- **Buổi 7**: Thiết Kế Bài Tập & Đánh Giá Trong Thời Đại GenAI (Đánh giá quá trình - Process-based)
- **Buổi 8**: Thiết Kế Rubric & Quy Trình Nhận Xét Tự Động (Assessment Workflow)
- **Buổi 9 - 16**: AI Knowledge Assistant, AI Workflow/Agent, Capstone dự án và hoàn thiện bài giảng tương tác.

---

## 🚀 Tính Năng Nổi Bật Của Hệ Thống

1. **Chuẩn Sư Phạm Quốc Tế**:
   - Tích hợp thang đo nhận thức Bloom cải tiến (2001) và tam giác căn chỉnh sư phạm (Constructive Alignment).
   - Thiết kế giao diện học thuật sang trọng, không sử dụng icon/emoji AI Slop generic.

2. **Khai Thác Toàn Diện Google NotebookLM (Buổi 5)**:
   - **Khóa Nguồn Tri Thức (Source-grounded AI)**: Nạp trực tiếp Sách Giáo Khoa PDF (171 trang) để đọc hiểu và trích xuất Dàn ý có dẫn chứng số trang chính xác 100% cho Bài 19: Kinh tế Hoa Kỳ.
   - **Xây Dựng Kế Hoạch Bài Dạy Chuẩn Sư Phạm**: Tự động chuyển đổi tài liệu nạp thành giáo án 4 hoạt động bài bản.
   - **Thiết Kế Slide & Art Direction**: Biên soạn 8 slide súc tích theo quy tắc 3 dòng kèm Speaker Notes đời thường, định hình Cẩm nang phong cách hình ảnh đồng bộ (Visual Style Guide) và viết câu lệnh tạo ảnh AI chi tiết cho từng slide.
   - **Audio Overview Podcast & Notebook Guide**: Tạo bản thảo luận âm thanh 2 chuyên gia AI thảo luận sâu về bài học, xuất đề cương Study Guide và bảng hỏi FAQ tự động.

3. **Thiết Kế Trợ Lý Gia Sư AI Socrates (Buổi 6)**:
   - **Xóa Bỏ Bẫy Lười Chép Bài**: Lập trình Custom AI Tutor trên ChatGPT Free / Gemini Gems với nguyên tắc vàng: Tuyệt đối không bao giờ giải hộ.
   - **Kỹ Thuật Đặt Câu Hỏi Bậc Thang (Scaffolding)**: Dẫn dắt học sinh tự đọc hiểu SGK và đối chiếu bảng số liệu để tự tìm ra đáp án.
   - **Bộ Khiên Phòng Vệ 5 Lớp**: Vô hiệu hóa các chiêu trò nài nỉ ("Nói đáp án đi", "Mai thi rồi"), tự ti ("Em dốt lắm") hoặc đoán mò.
   - **Kiểm Thử Chịu Tải & Voice Mode**: Tương tác đàm thoại giọng nói 1-1 giúp học sinh tự học tại nhà như có gia sư riêng 24/7.

4. **Học Liệu & Dữ Liệu Thực Hành Tích Hợp**:
   - Đính kèm file gốc **Sách Giáo Khoa Địa Lí 11 (Bộ Kết Nối Tri Thức Với Cuộc Sống)** trực tiếp trên nền tảng.
   - Kho bài mẫu tiểu luận 3 mức độ, đề cương chi tiết học phần, 40 câu hỏi trắc nghiệm chẩn đoán.

---

## 💻 Hướng Dẫn Chạy Cục Bộ (Local Setup)

Chỉ cần mở file `index.html` trực tiếp trên trình duyệt hoặc chạy qua bất kỳ máy chủ tĩnh nào:

```bash
# Sử dụng Python HTTP Server
python -m http.server 5500

# Hoặc dùng Live Server trong VS Code / Antigravity IDE
```

Mở trình duyệt tại: `http://localhost:5500`

---

## 🛠️ Công Nghệ Phát Triển

- **Core**: Vanilla HTML5, CSS3 hiện đại (CSS Grid, Flexbox, CSS Variables, Glassmorphism).
- **Architecture**: Modular JavaScript (Registry Pattern, Event-driven State, Dynamic Data Hub).
- **Diagrams**: High-resolution academic graphics rendered with Python Pillow (Segoe UI typography).
- **Lightbox**: Fullscreen image preview modal with keyboard navigation.
