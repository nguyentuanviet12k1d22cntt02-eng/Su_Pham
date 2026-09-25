/**
 * RUBRIC DATASET (js/data/datasets/rubric-data.js)
 * Bộ Ma Trận Rubric Đánh Giá Chuẩn Đại Học Việt Nam (8 Cột & 5 Mức Độ)
 */

(function() {
  const R = window.CurriculumRegistry;

  // Dữ liệu 4.1: Rubric Đánh giá Đồ án / Thực tập tốt nghiệp chuẩn ĐH Việt Nam (như hình mẫu)
  R.registerDataset("rubric_vietnam_university", {
    id: "rubric_vietnam_university",
    title: "Phiếu Đánh Giá Rubric Đồ Án / Khóa Luận (Chuẩn ĐH Việt Nam 8 Cột)",
    category: "Rubric đánh giá",
    author: "Mẫu chuẩn Đào tạo Đại học (Thang điểm 10, lẻ 0.25)",
    description: "Phiếu đánh giá chuẩn gồm thông tin hành chính, thang 5 mức độ (Yếu, TB, Khá, Giỏi, Xuất sắc), cột Điểm tối đa và Điểm chấm lẻ đến 0.25.",
    wordCount: 850,
    content: `ĐÁNH GIÁ ĐỒ ÁN THỰC TẬP TỐT NGHIỆP / KHÓA LUẬN
(Dành cho cán bộ hướng dẫn / Giảng viên chấm điểm)

Họ và tên cán bộ hướng dẫn: ................................................................
Đơn vị công tác: ............................................................................
Họ và tên sinh viên: ........................................................................
Mã sinh viên: ................................... Lớp: ......................................
Tên đề tài: .................................................................................

BẢNG TIÊU CHÍ ĐÁNH GIÁ:

| Tiêu chí đánh giá | Yếu (0 - 39%) | Trung Bình (40 - 54%) | Khá (55 - 69%) | Giỏi (70 - 84%) | Xuất sắc (85 - 100%) | Điểm tối đa | Điểm (lẻ đến 0.25) |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **1. Ý THỨC, THÁI ĐỘ** | | | | | | **5.0** | |
| **1.1 Chấp hành nội quy** | Không chấp hành các nội quy, quy chế của đơn vị. | Thường xuyên vi phạm nội quy, quy chế của đơn vị. | Có vi phạm một vài nội quy, quy chế của đơn vị. | Chấp hành tốt nội quy, quy chế của đơn vị. | Chấp hành xuất sắc, gương mẫu thực hiện nội quy đơn vị. | 1.0 | |
| **1.2 Thái độ làm việc** | Rất thụ động với công việc được giao, trễ hạn. | Thụ động với công việc được giao, cần nhắc nhở. | Hoàn thành công việc được giao đúng tiến độ. | Tích cực, chủ động đối với công việc được giao. | Rất tích cực, có sáng kiến và tinh thần trách nhiệm cao. | 1.0 | |
| **1.3 Ý thức học hỏi** | Không có thái độ học hỏi, không tiếp thu góp ý. | Rất ít học hỏi và chậm tiếp thu kiến thức mới. | Có thái độ học hỏi và tiếp thu kiến thức mới. | Tích cực học hỏi, nhanh chóng tiếp thu kiến thức. | Rất tích cực học hỏi, đam mê nghiên cứu và tự đào sâu. | 1.0 | |
| **1.4 Tinh thần đồng đội** | Không có thái độ hợp tác trong làm việc nhóm. | Có thái độ chưa tích cực trong các hoạt động nhóm. | Hoàn thành các công việc được phân công trong nhóm. | Hoàn thành tốt vai trò và tích cực hỗ trợ thành viên khác. | Luôn sẵn sàng dẫn dắt, phối hợp và hỗ trợ nhóm xuất sắc. | 1.0 | |
| **1.5 Kiến thức & kỹ năng** | Thu nhận kém kiến thức và kỹ năng được yêu cầu. | Thu nhận một phần kiến thức cơ bản và kỹ năng yêu cầu. | Thu nhận ở mức cơ bản kiến thức và kỹ năng được giao. | Thu nhận đầy đủ kiến thức và kỹ năng chuyên môn yêu cầu. | Thu nhận rất tốt, vận dụng thành thạo và sáng tạo kỹ năng. | 1.0 | |
| **2. KẾT QUẢ THỰC HIỆN** | | | | | | **5.0** | |
| **2.1 Hoàn thành nội dung** | Hầu hết không hoàn thành các nội dung theo yêu cầu. | Hoàn thành dưới 50% khối lượng nội dung đồ án. | Hoàn thành cơ bản các nội dung công việc được giao. | Hoàn thành tốt, đầy đủ các nội dung theo đề cương. | Hoàn thành xuất sắc, vượt khối lượng và có giá trị thực tiễn. | 1.5 | |
| **2.2 Chất lượng sản phẩm** | Sản phẩm/báo cáo sai sót nghiêm trọng, không dùng được. | Chất lượng sản phẩm trung bình, còn nhiều lỗi kỹ thuật. | Sản phẩm đạt yêu cầu cơ bản, đáp ứng mục tiêu đồ án. | Sản phẩm hoàn thiện tốt, đáp ứng chuẩn kỹ thuật/nghiên cứu. | Sản phẩm chất lượng vượt trội, tính ứng dụng cao trong thực tế. | 1.5 | |
| **2.3 Báo cáo & Trình bày** | Báo cáo cẩu thả, sai lỗi chính tả, không theo quy chuẩn. | Bố cục sơ sài, lập luận rời rạc, trích dẫn không đúng. | Bố cục rõ ràng, trình bày sạch sẽ theo quy định trường. | Báo cáo logic, văn phong học thuật chuẩn mực, trích dẫn tốt. | Báo cáo xuất sắc, lập luận chặt chẽ, bảo vệ vấn đáp tự tin. | 2.0 | |
| **TỔNG CỘNG ĐIỂM** | | | | | | **10.0** | |

Nhận xét của Cán bộ hướng dẫn / Giảng viên chấm điểm:
..............................................................................................................
..............................................................................................................
Ngày ..... tháng ..... năm 202...
Người đánh giá (Ký và ghi rõ họ tên)`
  });

  // Dữ liệu 4.2: Ma trận Rubric Đánh giá Bài tiểu luận học phần
  R.registerDataset("rubric_essay", {
    id: "rubric_essay",
    title: "Bảng Ma Trận Rubric Đánh Giá Tiểu Luận Học Thuật (Thang Điểm 10)",
    category: "Rubric đánh giá",
    author: "Khung chuẩn Sư phạm Đại học",
    description: "Bảng ma trận 4 tiêu chí cốt lõi (Bố cục, Chiều sâu lập luận, Trích dẫn & Liêm chính, Giải pháp) theo 5 thang mức điểm chuẩn trường đại học.",
    wordCount: 650,
    content: `MA TRẬN RUBRIC ĐÁNH GIÁ BÀI TIỂU LUẬN HỌC PHẦN (THANG ĐIỂM 10)

1. TIÊU CHÍ 1: BỐ CỤC VÀ TÍNH HỌC THUẬT (2.0 Điểm)
- Xuất sắc (1.8 - 2.0 đ): Cấu trúc hoàn chỉnh theo chuẩn IMRAD/tiểu luận khoa học. Trình bày đẹp, văn phong học thuật chuẩn mực, không lỗi chính tả.
- Giỏi (1.5 - 1.7 đ): Đủ các phần chính, bố cục rõ ràng, đôi chỗ câu văn còn lủng củng nhưng không ảnh hưởng nội dung.
- Khá (1.2 - 1.4 đ): Đủ các phần nhưng phân chia đề mục chưa thật sự cân đối.
- Trung bình (1.0 - 1.1 đ): Thiếu phần phụ, còn nhiều lỗi chính tả/ngữ pháp.
- Yếu (0.0 - 0.9 đ): Bố cục lộn xộn, không theo quy chuẩn học thuật, trình bày cẩu thả.

2. TIÊU CHÍ 2: TƯ DUY PHẢN BIỆN VÀ LẬP LUẬN (3.5 Điểm)
- Xuất sắc (3.1 - 3.5 đ): Lập luận sắc bén, đa chiều; phân tích nguyên nhân - kết quả sâu sắc; có bằng chứng/số liệu minh chứng thuyết phục.
- Giỏi (2.6 - 3.0 đ): Luận điểm rõ ràng, có dẫn chứng nhưng chưa phân tích sâu tính phản biện hoặc góc nhìn trái chiều.
- Khá (2.1 - 2.5 đ): Có lập luận nhưng góc nhìn còn đơn tuyến, ít số liệu đối chứng.
- Trung bình (1.8 - 2.0 đ): Chỉ liệt kê thông tin hoặc nêu quan điểm cá nhân mà thiếu bằng chứng khoa học chứng minh.
- Yếu (0.0 - 1.7 đ): Lập luận rời rạc, sai lệch bản chất vấn đề, sao chép nguyên văn không qua xử lý tư duy.

3. TIÊU CHÍ 3: TRÍCH DẪN VÀ LIÊM CHÍNH HỌC THUẬT (2.5 Điểm)
- Xuất sắc (2.2 - 2.5 đ): Tối thiểu 3-5 tài liệu khoa học uy tín; trích dẫn trong bài (in-text) và danh mục tài liệu chuẩn APA 7th 100%.
- Giỏi (1.8 - 2.1 đ): Có trích dẫn tài liệu nhưng sai quy cách nhỏ (thiếu năm, sai thứ tự); có danh mục tài liệu tham khảo.
- Khá (1.4 - 1.7 đ): Trích dẫn còn ít, danh mục tài liệu chưa chuẩn quy cách.
- Trung bình (1.0 - 1.3 đ): Trích dẫn nguồn không rõ ràng (chỉ ghi link web hoặc tên báo); danh mục sơ sài.
- Yếu (0.0 - 0.9 đ): Hoàn toàn không trích dẫn nguồn hoặc có dấu hiệu sao chép/đạo văn nghiêm trọng (>30%).

4. TIÊU CHÍ 4: TÍNH KHẢ THI VÀ ĐÓNG GÓP CỦA GIẢI PHÁP (2.0 Điểm)
- Xuất sắc (1.8 - 2.0 đ): Giải pháp sáng tạo, bám sát thực trạng, có tính khả thi cao và lộ trình áp dụng rõ ràng.
- Giỏi (1.5 - 1.7 đ): Đề xuất giải pháp hợp lý nhưng còn mang tính khái quát, cần cụ thể hóa thêm.
- Khá (1.2 - 1.4 đ): Giải pháp vừa phải, tính ứng dụng thực tế ở mức trung bình.
- Trung bình (1.0 - 1.1 đ): Giải pháp chung chung ("cần nâng cao ý thức", "cần đầu tư"), thiếu tính thực tiễn.
- Yếu (0.0 - 0.9 đ): Không có phần giải pháp hoặc giải pháp phi thực tế, không liên quan đến vấn đề nghiên cứu.`
  });
})();
