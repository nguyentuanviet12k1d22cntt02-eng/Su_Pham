/**
 * CASE STUDY DATASET (js/data/datasets/case-study-data.js)
 */

(function() {
  const R = window.CurriculumRegistry;

  R.registerDataset("case_study", {
    id: "case_study",
    title: "Hồ Sơ Nghiên Cứu Tình Huống: Xung Đột Liêm Chính Học Thuật & AI",
    category: "Case Study thảo luận",
    author: "Tình huống sư phạm đại học thực tế",
    description: "Tình huống thực tế phức tạp về sinh viên dùng AI làm khóa luận tốt nghiệp: Giảng viên nghi ngờ, công cụ phát hiện AI báo 85%, nhưng sinh viên khẳng định tự viết.",
    wordCount: 890,
    content: `HỒ SƠ TÌNH HUỐNG HỌC THUẬT: BÀI TOÁN LIÊM CHÍNH TRONG KỶ NGUYÊN SỐ
Mã tình huống: CS-EDU-2026-01

1. BỐI CẢNH
Tại Khoa Giáo dục Tiểu học của Trường Đại học Sư phạm X, sinh viên Trần Minh Tú nộp bản thảo Khóa luận tốt nghiệp với đề tài: "Biện pháp rèn luyện kỹ năng giải toán có lời văn cho học sinh lớp 4 bằng sơ đồ tư duy".
Khóa luận được viết rất trôi chảy, lập luận khúc chiết, thuật ngữ sư phạm chuẩn xác và không hề có lỗi chính tả nào.

2. MÂU THUẪN PHÁT SINH
- Giảng viên hướng dẫn (TS. Lê) cảm thấy bất ngờ vì trong 4 năm học, học lực của sinh viên Tú chỉ ở mức trung bình khá (GPA 2.6/4.0), phong cách viết các bài kiểm tra trước đây khá vụng về.
- Khi đưa bản thảo vào phần mềm kiểm tra AI (Turnitin AI Writing Detector), hệ thống thông báo: "88% văn bản có khả năng được tạo bởi Trí tuệ Nhân tạo".
- Giảng viên yêu cầu sinh viên giải trình. Sinh viên Tú khẳng định: "Em chỉ dùng AI để gợi ý dàn ý và tra cứu tài liệu, toàn bộ nội dung do em tự gõ. Phần mềm báo 88% là oan cho em vì nhiều từ ngữ sư phạm có tính khuôn mẫu".
- Khi được hỏi về một số trích dẫn trong bài (ví dụ: công trình nghiên cứu của tác giả Nguyễn Văn Y năm 2021 được trích dẫn trong bài), sinh viên lúng túng và không tìm lại được bài báo gốc.

3. CÂU HỎI THẢO LUẬN DÀNH CHO GIẢNG VIÊN / SINH VIÊN
1. Giảng viên TS. Lê có nên căn cứ 100% vào con số 88% của phần mềm kiểm tra AI để kết luận sinh viên gian lận hay không? Tại sao?
2. Bằng cách nào giảng viên có thể phỏng vấn/vấn đáp để xác định chính xác năng lực thực chất của sinh viên mà không gây oan sai?
3. Nếu bạn là Trưởng khoa, bạn sẽ ban hành quy chế sử dụng AI như thế nào để vừa khuyến khích sinh viên ứng dụng công nghệ, vừa bảo vệ tính liêm chính học thuật?`
  });
})();
