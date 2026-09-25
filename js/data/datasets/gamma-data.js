/**
 * GAMMA OUTLINE DATASETS (js/data/datasets/gamma-data.js)
 * Kho Dữ Liệu Dàn Ý Slide Chuẩn Markdown Dành Riêng Cho Gamma App
 */

(function() {
  const R = window.CurriculumRegistry;

  // Dữ liệu 8.1: Dàn ý 15 Slide Chuyên đề Tư duy Phản biện & AI
  R.registerDataset("gamma_outline", {
    id: "gamma_outline",
    title: "Dàn Ý 15 Slide Chuẩn Markdown: Tư Duy Phản Biện & Ứng Dụng AI",
    category: "Dàn ý Slide Gamma",
    author: "Chuyên đề Sư phạm Đại học Hiện đại",
    description: "Dàn ý được cấu trúc tối ưu cho Gamma App: Chia rõ từng Slide bằng dấu phân cách (---), tiêu đề ngắn, các gạch đầu dòng cô đọng dưới 15 từ, sẵn sàng tạo bài giảng trực quan trong 60 giây.",
    wordCount: 820,
    content: `# CHUYÊN ĐỀ: TƯ DUY PHẢN BIỆN VÀ ỨNG DỤNG AI TRONG HỌC THUẬT ĐẠI HỌC
Dành cho Giảng viên và Sinh viên Đại học

---
## Slide 1: Trang Bìa Bài Giảng
* Tiêu đề chính: TƯ DUY PHẢN BIỆN & ỨNG DỤNG AI TRONG HỌC THUẬT
* Phụ đề: Từ Người Dùng Thụ Động Thành Nhà Đối Thoại Thông Minh
* Giảng viên phụ trách: [Tên Giảng Viên]
* Đơn vị: Trường Đại học Sư phạm

---
## Slide 2: Khởi Động - Cú Sốc Dữ Liệu PISA 2022
* Việt Nam xếp thứ 34/81 quốc gia về Đọc hiểu (OECD PISA 2022).
* Nghịch lý: Chỉ 1% học sinh đạt mức độ thành thạo bậc cao (Cấp độ 5 & 6).
* Khoảng trống lớn nhất: Kỹ năng phân tích, đánh giá và tư duy phản biện.

---
## Slide 3: Ba "Căn Bệnh" Trong Phương Pháp Học Truyền Thống
* Thụ động: Thầy đọc - trò chép, tái hiện thông tin một chiều.
* Lạm dụng mẫu: Quá phụ thuộc vào văn mẫu và lời giải sẵn có.
* Đánh giá ghi nhớ: Thi cử nặng về học thuộc lòng thay vì ứng dụng thực tế.

---
## Slide 4: Trí Tuệ Nhân Tạo (AI) - Cơ Hội Hay Nguy Cơ?
* Cơ hội: Tự động hóa việc tìm kiếm, tổng hợp và phân tích dữ liệu khổng lồ.
* Thách thức: Sinh viên lười tư duy, sao chép nguyên văn sản phẩm của máy tính.
* Thông điệp: AI không làm cùn mòn tư duy nếu ta biết cách đặt câu hỏi đúng!

---
## Slide 5: Bản Chất Của Mô Hình Ngôn Ngữ Lớn (LLM)
* AI thực chất là cỗ máy dự đoán từ tiếp theo theo xác suất thống kê.
* AI không có cảm xúc, không có ý thức và không tự thẩm định chân lý.
* Hiện tượng: Nguy cơ "Ảo giác thông tin" và hội chứng "A dua người dùng".

---
## Slide 6: Thang Nhận Thức Bloom Trong Kỷ Nguyên AI
* Tầng đáy (Ghi nhớ & Thông hiểu): AI vượt trội hoàn toàn con người.
* Tầng giữa (Vận dụng & Phân tích): AI làm trợ lý phân tích dữ liệu.
* Tầng đỉnh (Đánh giá & Sáng tạo): Vị thế độc tôn của tư duy con người!

---
## Slide 7: Kỹ Thuật Đặt Câu Hỏi Đối Thoại (Socratic Prompting)
* Không hỏi: "Hãy viết cho tôi bài văn về..." (Nhận đáp án thụ động).
* Hãy hỏi: "Tôi có quan điểm [A]. Hãy đóng vai người phản biện chỉ ra 3 điểm yếu."
* Biến AI thành đối thủ tranh biện thông minh nhất trên giảng đường.

---
## Slide 8: Kỹ Thuật Grounding - Khóa Chặt Ảo Giác Thông Tin
* Nguyên tắc: "Nuôi" AI bằng tài liệu gốc trước khi yêu cầu phân tích.
* Đưa file PDF bài báo/số liệu vào ➔ Khóa phạm vi trả lời trong tài liệu.
* Kết quả: Chính xác 100%, không bịa số liệu, trích dẫn chuẩn mực.

---
## Slide 9: Reviewer #2 - Ép AI Soi Lỗ Hổng Nghiên Cứu
* Đóng vai bình duyệt khó tính của tạp chí khoa học Scopus.
* Bóc tách 4 lỗ hổng: Thiếu nhóm đối chứng, cỡ mẫu nhỏ, hiệu ứng Hawthorne, ngụy biện thống kê.
* "Tìm vết nứt trên tấm khiên" trước khi bước ra hội đồng bảo vệ.

---
## Slide 10: Thuyết Học Tập Trải Nghiệm Kolb (1984)
* Bước 1: Trải nghiệm cụ thể (CE) - Tự tay nấu canh và lỡ nêm quá mặn.
* Bước 2: Quan sát phản tư (RO) - Nhớ lại lúc nãy đã cho mấy thìa muối.
* Bước 3: Khái quát hóa (AC) - Rút ra công thức: 500ml canh cần 1 thìa muối.
* Bước 4: Thử nghiệm mới (AE) - Lần sau nấu canh nêm đúng 1 thìa ngon miệng.

---
## Slide 11: Hoạt Động Tương Tác 5 Phút Tại Giảng Đường
* Tình huống: "Một sinh viên nộp bài luận đạt 9.0 nhưng bị phần mềm báo 65% AI."
* Thảo luận nhóm đôi: Giảng viên nên xử lý thế nào cho thấu tình đạt lý?
* Thời gian: 3 phút thảo luận + 2 phút phát biểu đại diện.

---
## Slide 12: Đổi Mới Đề Bài Kiểm Tra - "Kháng AI" (AI-Resistant)
* Đề cũ: "Phân tích nguyên tắc giáo dục đại học hiện đại" ➔ AI làm được 10 điểm.
* Đề mới: "Khảo sát thực địa tại trường THPT X và phỏng vấn 3 giáo viên về khó khăn khi đổi mới."
* Đề bài kháng AI: Gắn với số liệu địa phương, trải nghiệm thực tế và bảo vệ vấn đáp.

---
## Slide 13: Xây Dựng Bản Cam Kết Minh Bạch AI (AI Honor Code)
* Sinh viên được phép dùng AI để: Tìm ý tưởng, sửa ngữ pháp, gợi ý cấu trúc.
* Sinh viên không được phép: Nộp bài sao chép nguyên văn văn bản từ AI.
* Bắt buộc: Đính kèm phụ lục các câu lệnh Prompt đã sử dụng trong bài làm.

---
## Slide 14: Thông Điệp Cốt Lõi Cho Sinh Viên Sư Phạm
* "AI sẽ không thay thế giáo viên, nhưng giáo viên biết dùng AI sẽ thay thế người không biết."
* Đích đến của giáo dục: Rèn luyện con người có trái tim thấu cảm và khối óc phản biện.
* Luôn giữ tinh thần hoài nghi khoa học trước mọi câu trả lời của công nghệ.

---
## Slide 15: Q&A & Bài Tập Về Nhà
* Quét mã QR trên màn hình để tải toàn bộ tài liệu và bộ Prompt mẫu.
* Bài tập: Sử dụng Gamma tạo 1 slide trình chiếu 10 trang cho môn học của bạn.
* Cảm ơn quý Thầy/Cô và các bạn sinh viên đã lắng nghe!`
  });

  // Dữ liệu 8.2: Dàn ý Slide Bài giảng Phương Pháp Dạy Học Đảo Ngược (Flipped Classroom)
  R.registerDataset("gamma_flipped_classroom", {
    id: "gamma_flipped_classroom",
    title: "Dàn Ý 12 Slide: Mô Hình Lớp Học Đảo Ngược (Flipped Classroom)",
    category: "Dàn ý Slide Gamma",
    author: "Tài liệu tập huấn Phương pháp Dạy học Đại học",
    description: "Bộ dàn ý bài giảng chuyên đề đổi mới phương pháp giảng dạy đại học, định dạng chuẩn Markdown chia thẻ để nạp trực tiếp vào Gamma sinh slide 60 giây.",
    wordCount: 650,
    content: `# BÀI GIẢNG: MÔ HÌNH LỚP HỌC ĐẢO NGƯỢC (FLIPPED CLASSROOM) TRONG ĐẠI HỌC
Thời lượng: 90 phút | Giảng viên: [Tên Giảng Viên]

---
## Slide 1: Trang Bìa
* Tiêu đề: LỚP HỌC ĐẢO NGƯỢC (FLIPPED CLASSROOM)
* Phụ đề: Chuyển Dịch Từ "Truyền Thụ Kiến Thức" Sang "Kiến Tạo Năng Lực"
* Môn học: Phương pháp Dạy học Đại học Hiện đại

---
## Slide 2: Nghịch Lý Giảng Đường Truyền Thống
* Trên lớp: Giảng viên độc thoại 70% thời gian, sinh viên thụ động ghi chép.
* Về nhà: Sinh viên phải tự "đánh vật" với bài tập khó mà không có người hướng dẫn.
* Kết quả: Tỷ lệ hiểu sâu và khả năng ứng dụng thực tế rất thấp.

---
## Slide 3: Lớp Học Đảo Ngược Là Gì?
* Đảo ngược không gian: Hoạt động tiếp nhận kiến thức diễn ra ở nhà qua video ngắn.
* Tối ưu giờ lên lớp: 90 phút trên giảng đường dành trọn cho thảo luận, tranh biện và giải quyết vấn đề.
* Giảng viên: Chuyển từ "Nhà thông thái trên bục giảng" sang "Người hướng dẫn bên cạnh".

---
## Slide 4: Chu Trình 3 Giai Đoạn Của Flipped Classroom
* Giai đoạn 1 (Trước buổi học): Xem video 10 phút + Trả lời 3 câu hỏi kiểm tra trên LMS.
* Giai đoạn 2 (Trong buổi học): Giải đáp thắc mắc + Làm bài tập nhóm + Báo cáo.
* Giai đoạn 3 (Sau buổi học): Hoàn thiện dự án + Phản tư (Reflection) + Đánh giá chéo.

---
## Slide 5: Ứng Dụng AI Hỗ Trợ Giai Đoạn Chuẩn Bị
* Dùng ChatGPT tóm tắt bài đọc thành infographic hoặc thẻ ghi nhớ (Flashcards).
* Dùng MagicSchool tạo bộ câu hỏi trắc nghiệm chẩn đoán 5 câu trước giờ học.
* Giảng viên nắm trước những nội dung sinh viên hay hiểu sai để tập trung chữa trên lớp.

---
## Slide 6: Thiết Kế Hoạt Động Trong Lớp Theo Thang Bloom
* Nhận biết & Thông hiểu: Đã hoàn thành ở nhà qua bài giảng video.
* Lên lớp tập trung vào: Phân tích tình huống (Case Study) và Đánh giá giải pháp.
* Sinh viên đóng vai chuyên gia giải quyết xung đột học thuật thực tế.

---
## Slide 7: Thử Thách Thảo Luận Nhóm 10 Phút
* Tình huống: "Lớp học có 30% sinh viên không xem bài giảng trước ở nhà."
* Nhiệm vụ nhóm: Đề xuất 2 giải pháp sư phạm để kéo các em bắt nhịp mà không làm gián đoạn lớp học.
* Trình bày: Mỗi nhóm cử đại diện phát biểu trong 90 giây.

---
## Slide 8: Đánh Giá Học Tập Trong Mô Hình Đảo Ngược
* Chấm điểm quá trình (Formative Assessment) chiếm 50% tổng điểm.
* Đánh giá theo Rubric tiêu chí rõ ràng: Đóng góp ý kiến, lập luận logic, làm việc nhóm.
* Tự đánh giá (Self-assessment) và Đánh giá đồng đẳng (Peer-assessment).

---
## Slide 9: 3 Rào Cản Thường Gặp & Cách Khắc Phục
* Rào cản 1: Sinh viên chưa quen tự học ➔ Bắt đầu bằng video cực ngắn (5-7 phút).
* Rào cản 2: Giảng viên tốn thời gian soạn học liệu ➔ Ứng dụng AI hỗ trợ soạn kịch bản.
* Rào cản 3: Cơ sở vật chất LMS ➔ Tận dụng các nền tảng miễn phí như Google Classroom/Padlet.

---
## Slide 10: Tổng Kết & Kế Hoạch Hành Động
* Flipped Classroom không chỉ là công nghệ, mà là triết lý lấy người học làm trung tâm.
* Bắt đầu nhỏ: Áp dụng đảo ngược cho đúng 1 buổi học trong học kỳ này.
* Chúc quý Thầy/Cô có những tiết học bùng nổ năng lượng!`
  });
})();
