# Khóa Đào Tạo AI Sư Phạm Đại Học 4.0

Hệ thống học liệu & kịch bản sư phạm số hóa 16 buổi dành cho Giảng viên Đại học, tối ưu hóa ứng dụng Trí tuệ Nhân tạo (Generative AI) trong thiết kế bài giảng, soạn học liệu, đánh giá quá trình và cá nhân hóa đào tạo.

---

## 📌 Tổng Quan Lộ Trình Đào Tạo 16 Buổi

- **Buổi 1**: Nhập Môn AI & Tư Duy Sử Dụng AI Trong Giáo Dục Đại Học
- **Buổi 2**: Prompt Engineering Cho Giảng Viên Đại Học (Công thức CRTC-OE)
- **Buổi 3**: AI Thiết Kế Bài Giảng & Học Phần (Mô hình Constructive Alignment & 3 Chặng)
- **Buổi 4**: Dùng AI Tạo Trọn Bộ Tài Liệu Bài Giảng (Slide, Handout điền khuyết, Case Study, FAQ)
- **Buổi 5**: Ứng Dụng Tạo Slide Bài Giảng Với NotebookLM & Gamma (Thực hành trên SGK Địa Lí 11)
- **Buổi 6**: Thiết Kế Trợ Lý Gia Sư AI (AI Tutor) Hỗ Trợ Sinh Viên (Phương pháp Socrates)
- **Buổi 7**: Thiết Kế Bài Tập & Đánh Giá Trong Thời Đại GenAI (Đánh giá quá trình - Process-based)
- **Buổi 8**: Thiết Kế Rubric & Quy Trình Nhận Xét Tự Động (Assessment Workflow)
- **Buổi 9 - 16**: AI Knowledge Assistant, AI Workflow/Agent, Capstone dự án và hoàn thiện bài giảng tương tác.

---

## 🚀 Tính Năng Nổi Bật Của Hệ Thống

1. **Chuẩn Sư Phạm Quốc Tế**:
   - Tích hợp thang đo nhận thức Bloom cải tiến (2001) và tam giác căn chỉnh sư phạm (Constructive Alignment).
   - Thiết kế giao diện học thuật sang trọng, không sử dụng icon/emoji AI Slop generic.

2. **Quy Trình Thực Chiến 3 Công Cụ (Buổi 5)**:
   - **Google NotebookLM**: Nạp trực tiếp Sách Giáo Khoa PDF (171 trang) để đọc hiểu và trích xuất Dàn ý có dẫn chứng số trang chính xác 100%.
   - **ChatGPT**: Đóng vai Art Director & Instructional Designer để viết Siêu Prompt (Master Prompt) kèm phong cách tạo ảnh AI (*Image Prompts*).
   - **Gamma App**: Tự động sinh bộ Slide PowerPoint (.pptx) mỹ thuật cao trong 60 giây.

3. **Học Liệu & Dữ Liệu Thực Hành Tích Hợp**:
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
