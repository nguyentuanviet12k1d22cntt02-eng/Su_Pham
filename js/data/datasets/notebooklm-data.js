/**
 * NOTEBOOKLM DATASET (js/data/datasets/notebooklm-data.js)
 * Tài liệu nguồn học thuật mẫu để thực hành nạp vào Google NotebookLM
 */

(function() {
  const R = window.CurriculumRegistry;

  // DATASET 1: BÁO CÁO KHOA HỌC CHUYỂN ĐỔI SỐ
  R.registerDataset("notebooklm_source_doc", {
    id: "notebooklm_source_doc",
    title: "Tài Liệu Nguồn Học Thuật: Báo Cáo Chuyển Đổi Số & Dạy Học Tích Hợp (Blended Learning)",
    category: "Tài liệu nguồn NotebookLM",
    author: "Viện Nghiên cứu Phát triển Giáo dục Đại học",
    description: "Tài liệu mẫu chuẩn khoa học (số liệu, mô hình, trích dẫn) để nạp vào NotebookLM thực hành: Tự sinh Study Guide, tạo Podcast đàm đạo 2 người và trích xuất Dàn ý Slide có dẫn chứng trang 100%.",
    wordCount: "1.150 từ",
    content: `# BÁO CÁO NGHIÊN CỨU: CHUYỂN ĐỔI SỐ VÀ MÔ HÌNH DẠY HỌC TÍCH HỢP (BLENDED LEARNING) TẠI CÁC TRƯỜNG ĐẠI HỌC SƯ PHẠM VIỆT NAM

Tác giả: Nhóm Nghiên cứu Đổi mới Sư phạm Đại học
Xuất bản: 2024 | Độ dài: Tài liệu chuyên đề nạp nguồn AI

---
## PHẦN 1: TÓM TẮT ĐIỀU HÀNH & BỐI CẢNH (EXECUTIVE SUMMARY)
Chuyển đổi số trong giáo dục đại học không đơn thuần là việc số hóa tài liệu hay chuyển từ bảng đen sang máy chiếu. Bản chất cốt lõi là chuyển dịch mô hình sư phạm từ "Lấy giảng viên làm trung tâm" (Teacher-centered) sang "Lấy người học và trải nghiệm kiến tạo làm trung tâm" (Learner-centered).

Khảo sát thực nghiệm trên 1.250 sinh viên và 140 giảng viên tại 5 trường đại học sư phạm trọng điểm năm học 2023 - 2024 chỉ ra rằng:
- 78.4% sinh viên cảm thấy quá tải khi giảng viên chỉ dùng giờ lên lớp để đọc lại slide bài giảng PowerPoint.
- 82.1% sinh viên hào hứng hơn rõ rệt khi được tiếp cận tài liệu dạng đa phương tiện (Podcast âm thanh, video ngắn dưới 7 phút) trước khi đến lớp.
- Tuy nhiên, 64.5% giảng viên thừa nhận gặp khó khăn lớn nhất là: Thiếu thời gian để tự sản xuất học liệu số chất lượng cao và chưa biết cách thiết kế slide bài giảng có tính tương tác.

---
## PHẦN 2: BA MÔ HÌNH DẠY HỌC TÍCH HỢP HIỆN ĐẠI (THREE PEDAGOGICAL MODELS)

1. Mô hình Lớp học đảo ngược (Flipped Classroom):
- Bản chất: Hoạt động truyền thụ kiến thức cơ bản (mức độ Nhận biết, Thông hiểu theo Bloom) được chuyển giao về nhà thông qua tài liệu số hoặc audio tóm tắt. Giờ lên lớp 90 phút được giải phóng hoàn toàn cho thảo luận nhóm, giải quyết tình huống (Case Study) và phản biện.
- Kết quả thực nghiệm: Tỷ lệ sinh viên đạt điểm Giỏi ở các bài kiểm tra đánh giá năng lực giải quyết vấn đề tăng 24.6% so với lớp học truyền thống.

2. Mô hình Luân chuyển trạm (Station Rotation):
- Giảng đường được chia thành 3 trạm học tập độc lập:
  + Trạm 1 (Trạm Công nghệ): Sinh viên tự nghiên cứu qua phần mềm hoặc làm trắc nghiệm tương tác trên điện thoại.
  + Trạm 2 (Trạm Thảo luận nhóm): Sinh viên cùng nhau giải quyết một bài tập tình huống thực tế.
  + Trạm 3 (Trạm Giảng viên): Giảng viên hướng dẫn chuyên sâu, giải đáp thắc mắc cho nhóm nhỏ 10-12 sinh viên.
- Ưu điểm: Cá nhân hóa tốc độ học tập, xóa bỏ tình trạng sinh viên ngồi thụ động ở cuối giảng đường.

3. Mô hình Học tập kết hợp linh hoạt (HyFlex Model):
- Kết hợp đồng thời giữa sinh viên học trực tiếp tại lớp và sinh viên tham gia trực tuyến qua phòng học ảo.
- Đòi hỏi hệ thống slide bài giảng và học liệu phải được thiết kế dạng thẻ tương tác cao để cả hai nhóm người học đều tham gia thảo luận công bằng.

---
## PHẦN 3: BỐN RÀO CẢN TÂM LÝ & GIẢI PHÁP SƯ PHẠM ĐỘT PHÁ

1. Rào cản "Sợ mất quyền lực bục giảng":
- Nhiều giảng viên lo ngại: "Nếu sinh viên đã nghe podcast và đọc tóm tắt ở nhà, thì lên lớp giảng viên còn có vai trò gì?".
- Lời giải: Giảng viên nâng tầm từ "Người truyền đạt thông tin" thành "Chuyên gia điều phối tranh luận và cố vấn phương pháp" (Facilitator).

2. Rào cản "Ngại công nghệ phức tạp":
- Giảng viên mất quá nhiều thời gian cắt ghép video, chỉnh sửa slide thủ công.
- Giải pháp 4.0: Ứng dụng AI như NotebookLM để tự động tạo Podcast bài giảng trong 2 phút, và dùng Gamma để tự sinh bộ slide dạng thẻ trong 60 giây.

3. Rào cản "Sinh viên lười tự học trước ở nhà":
- Giải pháp: Thiết kế các câu hỏi trắc nghiệm chẩn đoán 3 phút đầu giờ; lồng ghép điểm quá trình khuyến khích.

4. Rào cản "Thiếu tính tương tác trong slide thuyết trình":
- Giải pháp: Cứ mỗi 15 phút trình chiếu, bắt buộc phải có 1 slide câu hỏi thảo luận đôi (Think-Pair-Share) hoặc 1 tình huống éo le (Dilemma Case).

---
## PHẦN 4: KẾT LUẬN & KHUYẾN NGHỊ CHÍNH SÁCH
Công nghệ AI, đặc biệt là các mô hình nạp dữ liệu nguồn như NotebookLM, đang mở ra kỷ nguyên mới: Giảng viên có thể sở hữu một "Trợ lý nghiên cứu và biên tập học liệu số" đắc lực hoàn toàn miễn phí. Đã đến lúc các trường đại học cần chính thức đưa kỹ năng khai thác AI vào chương trình bồi dưỡng nghiệp vụ sư phạm thường niên.`
  });

  // DATASET 2: SÁCH GIÁO KHOA ĐỊA LÍ 11 (KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
  R.registerDataset("sach_dia_li_11", {
    id: "sach_dia_li_11",
    title: "Sách Giáo Khoa Địa Lí 11 — Bộ Kết Nối Tri Thức Với Cuộc Sống (PDF Gốc)",
    category: "Sách giáo khoa & Giáo trình",
    author: "PGS.TS. Lê Huỳnh, Nguyễn Thị Vũ Hà (NXB Giáo Dục Việt Nam)",
    description: "Tài liệu mẫu chuẩn 171 trang PDF (dung lượng 30MB) phục vụ thực hành Buổi 5: Tải về nạp trực tiếp vào Google NotebookLM để trích xuất Dàn ý Slide 8 trang Bài 2 (Toàn cầu hoá kinh tế), bảng số liệu và câu hỏi thảo luận nhóm.",
    wordCount: "171 trang (30MB)",
    downloadUrl: "sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf",
    content: `# SÁCH GIÁO KHOA ĐỊA LÍ 11 — KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
Tác giả: LÊ HUỲNH (Tổng Chủ biên), NGUYỄN THỊ VŨ HÀ (Chủ biên)
Nhà xuất bản: Nhà xuất bản Giáo dục Việt Nam
Độ dài: 171 trang | Dung lượng file PDF: ~30 MB

TÀI LIỆU DÙNG THỰC HÀNH TẠI BUỔI 5:
- File PDF này chứa đầy đủ 31 bài học của chương trình Địa lí 11 mới.
- Trọng tâm thực hành Buổi 5: "Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" (Trang 9 – 12).
- Các chủ đề khác có thể khai thác:
  + Bài 6 & 7: Địa lí khu vực Mỹ La-tinh (Trang 22 - 34)
  + Bài 9: Liên minh châu Âu (EU) (Trang 37 - 43)
  + Bài 11 & 12: Địa lí khu vực Đông Nam Á (Trang 46 - 60)
  + Bài 18 & 19: Hợp chủng quốc Hoa Kỳ (Trang 81 - 96)
  + Bài 23 & 24: Nhật Bản (Trang 114 - 128)
  + Bài 26 & 27: Trung Quốc (Trang 131 - 147)

HƯỚNG DẪN THỰC HÀNH:
1. Bấm nút "Tải file" để tải file PDF này về máy tính.
2. Mở https://notebooklm.google.com/ và kéo thả file PDF này vào một Notebook mới.
3. Sử dụng các câu lệnh mẫu tại Buổi 5 để chiết xuất Dàn ý Slide và dán vào Gamma App.`
  });
})();
