/**
 * SESSION 3: AI THIẾT KẾ BÀI GIẢNG VÀ HỌC PHẦN (LESSON PLAN & COURSE DESIGN)
 * (js/data/sessions/session-03.js)
 * Căn cứ theo: "Lộ trình đào tạo 16 buổi: AI ứng dụng trong giảng dạy đại học"
 * NỘI DUNG ĐƯỢC VIẾT TRỰC TIẾP TRÊN TRANG (Direct Article Layout).
 */

(function() {
  // PROMPTS FOR UPGRADE EXPERIMENT
  const PROMPT_UPGRADE_BEFORE = `Hãy soạn cho tôi một giáo án bài giảng 90 phút về chủ đề "Quản trị Rủi ro Tín dụng trong Ngân hàng Thương mại" dành cho sinh viên.`;

  const PROMPT_UPGRADE_AFTER = `BỐI CẢNH & VAI TRÒ:
Bạn là Chuyên gia Cố vấn Phương pháp Sư phạm Đại học và Thiết kế Chương trình Giảng dạy Tích cực (Active Learning Curriculum Designer). 
Tôi là Giảng viên phụ trách môn "Quản trị Ngân hàng Thương mại", Khoa Tài chính - Ngân hàng, Trường Đại học Kinh tế TP.HCM.

ĐỐI TƯỢNG NGƯỜI HỌC:
Sinh viên năm 3 chuyên ngành Tài chính - Ngân hàng. Sinh viên đã học môn Tiền tệ Ngân hàng và Kế toán Ngân hàng, nắm được lý thuyết tín dụng cơ bản nhưng chưa có kinh nghiệm thực tế trong việc đọc hồ sơ báo cáo tài chính doanh nghiệp để thẩm định rủi ro vỡ nợ, dễ nhầm lẫn giữa rủi ro tín dụng và rủi ro thanh khoản.

MỤC TIÊU BÀI DẠY (CLO THEO THANG BLOOM SỬA ĐỔI):
1. Phân tích được 5 yếu tố trong mô hình 5C thẩm định tín dụng trên một hồ sơ doanh nghiệp thực tế (Bậc 4 - Analyze).
2. Đánh giá được mức độ rủi ro và ra quyết định chấp thuận / từ chối cấp hạn mức tín dụng có kèm điều kiện bảo đảm (Bậc 5 - Evaluate).

NHIỆM VỤ THIẾT KẾ KẾ HOẠCH BÀI DẠY 90 PHÚT THEO MÔ HÌNH 3 CHẶNG TÍCH CỰC:
Hãy thiết kế Kế hoạch bài dạy chi tiết gồm 3 chặng:

CHẶNG 1: TRƯỚC LỚP (PRE-CLASS - TỰ HỌC NỀN TẢNG):
- Hướng dẫn tự học: 01 bài đọc 3 trang tóm lược chuẩn mực Basel II/III về rủi ro tín dụng.
- Câu hỏi chẩn đoán: 03 câu hỏi trắc nghiệm kiểm tra nhanh kiến thức nền tảng để sinh viên làm trên LMS trước khi đến lớp.

CHẶNG 2: TRONG LỚP (IN-CLASS - 90 PHÚT TƯƠNG TÁC SÂU):
1. Khởi động & Kích hoạt (15 phút): 01 tình huống mở đầu gây sốc: "Nghịch lý một công ty xây dựng doanh thu ngàn tỷ nhưng bất ngờ mất khả năng thanh toán nợ vay ngân hàng sau 6 tháng". Câu hỏi kích hoạt tranh luận: "Chỉ số nào trên báo cáo tài chính đã phát tín hiệu cảnh báo sớm mà chuyên viên thẩm định bỏ qua?".
2. Khám phá & Làm chủ kỹ thuật (30 phút): Giảng viên hướng dẫn kỹ thuật phân tích ma trận 5C và phân biệt rõ ranh giới giữa Rủi ro tín dụng (Credit Risk) và Rủi ro thanh khoản (Liquidity Risk).
3. Thực hành giải quyết tình huống (35 phút): Chia lớp thành các tổ thẩm định tín dụng độc lập (3-4 sinh viên/nhóm), giải quyết 01 tình huống doanh nghiệp sản xuất xin vay bổ sung vốn lưu động 50 tỷ đồng.
4. Đúc kết & Phản hồi sư phạm (10 phút): Đúc kết 3 nguyên tắc bất biến khi thẩm định tín dụng và phát hiện các lỗi ngộ nhận phổ biến.

CHẶNG 3: SAU LỚP (POST-CLASS - KHẮC SÂU & ĐÁNH GIÁ):
- 01 bài tập phản tư cá nhân (Reflection): Sinh viên tự viết một bản ghi nhớ thẩm định tín dụng (Credit Memo) dài 500 từ bảo vệ quyết định của mình.
- Tiêu chí đánh giá Rubric chấm điểm nhanh (Thang điểm 10).

RÀNG BUỘC & ĐỊNH DẠNG ĐẦU RA (CONSTRAINTS & OUTPUT):
- Tuyệt đối không dùng lý thuyết sách giáo khoa chung chung, không đọc - chép thụ động.
- Gắn nhãn [CẦN GIẢNG VIÊN THẨM ĐỊNH] tại những chỗ đưa ra số liệu tài chính, chỉ số đòn bẩy hoặc quy định pháp lý của Ngân hàng Nhà nước Việt Nam.
- Trình bày dưới dạng bảng Markdown chi tiết: Thời lượng | Hoạt động Giảng viên | Hoạt động Sinh viên | Mục tiêu CLO tương ứng | Học liệu cần chuẩn bị.`;

  // 6 REUSABLE PROMPTS (PROMPT LIBRARY FOR SESSION 3)
  const LIB_P1 = `VAI TRÒ: Chuyên gia Khảo thí và Kiểm định Chất lượng Giáo dục Đại học chuẩn AUN-QA.
BỐI CẢNH: Tôi đang rà soát và thiết kế lại Chuẩn đầu ra bài học (CLO - Course Learning Outcomes) cho môn [Tên môn học], ngành [Tên ngành], dành cho sinh viên [Năm thứ mấy].
NHIỆM VỤ: Hãy chuẩn hóa danh sách các mục tiêu học tập dưới đây sang Chuẩn đầu ra đo lường được theo Thang đo Bloom Sửa đổi (Bloom's Revised Taxonomy):
[Dán danh sách mục tiêu thô hoặc nội dung các chương cần soạn CLO vào đây]

QUY TẮC BẮT BUỘC:
1. Mỗi CLO bắt đầu bằng 01 động từ hành vi có thể quan sát và đo lường định lượng được (ví dụ: Phân tích, So sánh, Đánh giá, Thiết kế, Giải thích; tuyệt đối không dùng các từ mơ hồ như: "hiểu được", "nắm được", "biết về", "có nhận thức").
2. Phân loại rõ từng CLO thuộc bậc nào của thang Bloom (Bậc 1: Nhớ đến Bậc 6: Sáng tạo).
3. Ứng với mỗi CLO, gợi ý 01 Phương pháp đánh giá (Assessment Method) và 01 Chỉ báo thực hiện (Performance Indicator) tương ứng.`;

  const LIB_P2 = `VAI TRÒ: Cố vấn Thiết kế Kịch bản Giảng dạy Đại học theo Phương pháp Sư phạm Tích cực (Active Learning).
BỐI CẢNH: Tôi chuẩn bị lên lớp bài giảng [Thời lượng: 90 phút hoặc 180 phút] cho môn [Tên môn học], chủ đề: "[Tên chủ đề bài giảng]". Đối tượng là sinh viên [Năm thứ mấy, ngành học].
CHUẨN ĐẦU RA CẦN ĐẠT: [Ghi 2-3 chuẩn đầu ra CLO chính của buổi học].

NHIỆM VỤ: Thiết kế Kế hoạch bài dạy (Lesson Plan) toàn diện theo mô hình 3 chặng sư phạm:
1. TRƯỚC LỚP (Pre-class): Nhiệm vụ sinh viên tự học ở nhà (đọc tài liệu gì, xem video gì, làm bài tập chẩn đoán nào trong bao nhiêu phút).
2. TRONG LỚP (In-class): Phân bổ chi tiết các chặng lên lớp (Khởi động -> Khám phá tri thức -> Thực hành nhóm giải quyết bài toán -> Đúc kết & Đánh giá quá trình). Nêu rõ Hoạt động của Giảng viên và Hoạt động của Sinh viên để sinh viên không ngồi nghe thụ động quá 15 phút liên tục.
3. SAU LỚP (Post-class): Nhiệm vụ củng cố, bài tập ứng dụng thực tế và phiếu phản tư (Reflection).

ĐỊNH DẠNG: Trình bày bảng chi tiết gồm: Chặng | Thời lượng | Hoạt động Giảng viên | Hoạt động Sinh viên | Công cụ/Học liệu hỗ trợ.`;

  const LIB_P3 = `VAI TRÒ: Chuyên gia Thiết kế Tình huống Giảng dạy Đại học (Pedagogical Case Study Designer).
BỐI CẢNH: Giảng viên môn [Tên môn học]. Tôi cần giảng giải một khái niệm rất dễ gây nhầm lẫn: "[Tên khái niệm khó / quy tắc / kỹ thuật]".
ĐỐI TƯỢNG: Sinh viên [Ngành học] thường mắc lỗi ngộ nhận là [Mô tả ngắn gọn lỗi sai hoặc ngộ nhận phổ biến của sinh viên].

NHIỆM VỤ: Hãy thiết kế một Cặp Tình huống Đối chiếu Sư phạm (Example vs. Counter-example):
1. Tình huống Chuẩn (Valid Example): Một ví dụ thực tế chuẩn xác, nêu rõ các tiêu chí thỏa mãn khái niệm và lý do vì sao nó đúng.
2. Phản Ví dụ (Counter-example / Non-example): Một tình huống thoạt nhìn tưởng là đúng nhưng thực chất lại vi phạm một điều kiện then chốt của khái niệm.
3. 02 Câu hỏi gợi mở sắc bén: Để giảng viên đưa ra cho cả lớp tranh biện, dẫn dắt sinh viên tự so sánh và tự rút ra ranh giới bản chất của khái niệm.`;

  const LIB_P4 = `VAI TRÒ: Cố vấn Phương pháp Dạy học Phân hóa Đại học (Differentiated Instruction Specialist).
BỐI CẢNH: Trong cùng một lớp học môn [Tên môn học], sinh viên có sự phân hóa rõ rệt về năng lực tiếp thu và nền tảng đầu vào đối với chủ đề "[Tên chủ đề]".
MỤC TIÊU: Thiết kế hệ thống nhiệm vụ học tập phân tầng để cả sinh viên trung bình lẫn sinh viên khá giỏi đều được thử thách phù hợp.

NHIỆM VỤ: Xây dựng 01 bài tập lớn với 3 tầng mức độ tăng tiến:
- TẦNG 1 - NỀN TẢNG (Remedial / Core Level - 6.0 điểm): Nhận diện, giải thích định nghĩa và áp dụng công thức/quy trình cơ bản vào dữ liệu tiêu chuẩn.
- TẦNG 2 - TIÊU CHUẨN (Standard / Competent Level - 8.0 điểm): Phân tích tình huống có biến động, so sánh 2 giải pháp và chọn phương án tối ưu.
- TẦNG 3 - THỬ THÁCH MỞ RỘNG (Advanced / Master Level - 10.0 điểm): Xử lý tình huống thông tin không hoàn hảo, phát hiện lỗi ngầm định, đề xuất chiến lược sáng tạo và dự báo rủi ro phát sinh.
Đính kèm hướng dẫn phân công nhiệm vụ để hoạt động nhóm không có sinh viên ỷ lại.`;

  const LIB_P5 = `VAI TRÒ: Giảng viên Thiết kế Khảo sát Chẩn đoán Học tập (Diagnostic Assessment Designer).
BỐI CẢNH: Môn học [Tên môn học]. Tuần tới lớp sẽ học chuyên đề mới: "[Tên chủ đề mới]", đòi hỏi sinh viên phải có sẵn kiến thức nền tảng về [Kiến thức tiên quyết đã học ở các bài trước].
MỤC TIÊU: Thiết kế bộ câu hỏi trắc nghiệm chẩn đoán đầu giờ (Diagnostic Pre-test) gồm 4 câu hỏi để giảng viên chiếu lên màn hình trong 5 phút đầu giờ:

YÊU CẦU CHO TỪNG CÂU HỎI:
- Câu 1: Kiểm tra việc ghi nhớ khái niệm nền tảng tiên quyết.
- Câu 2: Kiểm tra khả năng vận dụng cơ bản.
- Câu 3: Gài bẫy một lỗi ngộ nhận kinh điển mà 70% sinh viên thường mắc phải (kèm giải thích vì sao các đáp án nhiễu lại dễ đánh lừa).
- Câu 4: Một câu hỏi tình huống mở (Scenario-based question) kích hoạt sự tò mò để dẫn dắt ngay vào bài giảng hôm nay.`;

  const LIB_P6 = `VAI TRÒ: Cố vấn Đánh giá Phát triển Năng lực Tự học (Metacognition & Self-regulation Advisor).
BỐI CẢNH: Kết thúc buổi học 90 phút môn [Tên môn học] về chủ đề: "[Tên chủ đề]".
MỤC TIÊU: Thiết kế Phiếu Hướng dẫn Tự học & Phản tư Sau Lớp (Post-class Learning Log & Reflection Form) giúp sinh viên tự đúc kết trong 15 phút tại nhà.

NHIỆM VỤ: Hãy soạn thảo phiếu phản tư ngắn gọn gồm 4 phần:
1. 3 ĐIỂM SÁNG (Key Takeaways): Tự viết ra 3 luận điểm cốt lõi nhất dưới ngôn từ của chính sinh viên (không chép lại slide).
2. 1 ĐIỂM MÙ (Muddiest Point): Khái niệm hoặc thao tác nào trong buổi học sinh viên cảm thấy còn mơ hồ hoặc khó hiểu nhất?
3. 1 BÀI TẬP VẬN DỤNG MICRO-PRACTICE (15 phút): Một bài toán mini yêu cầu sinh viên tìm một ví dụ thực tế ngoài đời sống/doanh nghiệp minh họa cho bài học.
4. GỢI Ý HỌC LIỆU NÂNG CAO: Đề xuất 1 bài báo khoa học hoặc 1 video chuyên sâu ngắn cho sinh viên muốn đào sâu.`;

  const articleHtml = `
    <div class="session-direct-article">

      <!-- PHẦN 1: CHUẨN ĐẦU RA -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 1</span>
          <h2 class="article-section-title">Chuẩn Đầu Ra Buổi 3: Năng Lực Thiết Kế Bài Giảng Chuẩn Mực</h2>
        </div>
        <p class="article-prose">
          Sau khi hoàn thành buổi học 180 phút, giảng viên làm chủ năng lực ứng dụng GenAI để chuẩn hóa toàn diện từ Chuẩn đầu ra (CLO) đến Kế hoạch bài dạy (Lesson Plan):
        </p>
        <table class="article-matrix-table">
          <thead>
            <tr>
              <th style="width: 32%;">Chuẩn năng lực sư phạm</th>
              <th style="width: 68%;">Mô tả chi tiết năng lực đạt được</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Khung Liên kết Tương thích (Constructive Alignment)</strong></td>
              <td>Thiết lập mối liên kết hữu cơ không thể tách rời giữa Chuẩn đầu ra học phần (CLO/PLO), Chuỗi hoạt động học tập tích cực (TLA) và Công cụ đánh giá đo lường (AT) theo mô hình của John Biggs.</td>
            </tr>
            <tr>
              <td><strong>2. Chuẩn hóa CLO theo Thang đo Bloom Sửa đổi</strong></td>
              <td>Thành thạo điều khiển AI bóc tách và viết lại các mục tiêu học tập mơ hồ thành các động từ hành vi có thể quan sát, định lượng và kiểm chứng độc lập theo 6 bậc nhận thức Bloom.</td>
            </tr>
            <tr>
              <td><strong>3. Thiết kế Kịch bản Lên lớp 3 Chặng Tích cực</strong></td>
              <td>Xây dựng tiến trình học tập liên hoàn: Trước lớp (Pre-class tự học kích hoạt) — Trong lớp (In-class tương tác sâu & giải quyết tình huống) — Sau lớp (Post-class phản tư & ứng dụng thực tiễn).</td>
            </tr>
            <tr>
              <td><strong>4. Đóng gói Kế hoạch Bài dạy (Lesson Plan) Hoàn chỉnh</strong></td>
              <td>Tạo lập 01 Lesson Plan hoàn chỉnh cho một chuyên đề thực tế, tích hợp cặp tình huống đối chiếu (Ví dụ chuẩn & Phản ví dụ), phân tầng người học và tiêu chí thẩm định chất lượng.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- PHẦN 2: NGUYÊN LÝ CONSTRUCTIVE ALIGNMENT & THANG ĐO BLOOM -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 2</span>
          <h2 class="article-section-title">Mô Hình Liên Kết Tương Thích & Thang Đo Bloom Sửa Đổi</h2>
        </div>
        <p class="article-prose">
          Lỗi phổ biến nhất khi ứng dụng AI trong giảng dạy là giảng viên yêu cầu AI sinh ra một giáo án ngẫu nhiên không bám theo chuẩn đầu ra. Mô hình <strong>Constructive Alignment</strong> của Giáo sư John Biggs là kim chỉ nam bảo đảm tính khoa học sư phạm:
        </p>

        <!-- Sơ đồ mô hình Constructive Alignment -->
        <div class="article-image-figure" style="margin: 20px 0 24px 0; text-align: center;">
          <div style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 8px; display: inline-block; max-width: 100%; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
            <img src="assets/images/bai3/constructive-alignment.png" alt="Sơ đồ mô hình liên kết tương thích Constructive Alignment trong thiết kế bài giảng sư phạm 4.0" style="max-width: 100%; max-height: 480px; height: auto; border-radius: var(--radius-sm); display: block;" />
          </div>
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">
            <strong>Hình 3.1:</strong> Mô hình liên kết tương thích (Constructive Alignment) giữa Chuẩn đầu ra (CLO) — Hoạt động dạy học (TLA) — Đánh giá đo lường (AT).
          </p>
        </div>

        <p class="article-prose">
          Để hoạt động dạy học và đánh giá đo lường chính xác, Chuẩn đầu ra (CLO) bắt buộc phải được lượng hóa theo 6 bậc của Thang đo Bloom Sửa đổi:
        </p>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <table class="article-matrix-table" style="margin-top: 0; border: none;">
            <thead>
              <tr>
                <th style="width: 18%;">Bậc nhận thức Bloom</th>
                <th style="width: 25%;">Động từ hành vi chuẩn mực</th>
                <th style="width: 27%;">Lỗi phổ biến khi prompt AI</th>
                <th style="width: 30%;">Cách điều lệnh AI chuẩn Sư phạm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bậc 1: Nhớ (Remember)</strong></td>
                <td>Liệt kê, nhận diện, gọi tên, nhắc lại, định nghĩa.</td>
                <td>Dùng từ mơ hồ: <em>"Sinh viên nắm được khái niệm..."</em></td>
                <td>Yêu cầu AI: <em>"Liệt kê đúng 4 điều kiện bắt buộc của hợp đồng..."</em></td>
              </tr>
              <tr>
                <td><strong>Bậc 2: Hiểu (Understand)</strong></td>
                <td>Giải thích, phân loại, tóm tắt, diễn giải, so sánh sơ bộ.</td>
                <td>AI sao chép nguyên văn định nghĩa sách giáo khoa khô khan.</td>
                <td>Yêu cầu AI: <em>"Dùng từ ngữ đời thường giải thích khái niệm cho người ngoại đạo..."</em></td>
              </tr>
              <tr>
                <td><strong>Bậc 3: Vận dụng (Apply)</strong></td>
                <td>Tính toán, thực thi, giải quyết, áp dụng công thức.</td>
                <td>Bài tập mang tính máy móc, chỉ thay số vào công thức có sẵn.</td>
                <td>Yêu cầu AI: <em>"Cho dữ liệu kinh doanh biến động, tính toán chi phí cơ hội thực tế..."</em></td>
              </tr>
              <tr>
                <td><strong>Bậc 4: Phân tích (Analyze)</strong></td>
                <td>Phân rã, đối chiếu, chỉ ra mối quan hệ nhân quả, suy luận.</td>
                <td>AI đưa ra phân tích hời hợt một chiều, thiếu phản biện.</td>
                <td>Yêu cầu AI: <em>"Chỉ ra 3 mâu thuẫn ngầm định giữa báo cáo tài chính và thực trạng kho hàng..."</em></td>
              </tr>
              <tr>
                <td><strong>Bậc 5: Đánh giá (Evaluate)</strong></td>
                <td>Phán đoán, thẩm định, phản biện, bảo vệ quan điểm, chấm điểm.</td>
                <td>AI kết luận chung chung 'tùy thuộc vào bối cảnh'.</td>
                <td>Yêu cầu AI: <em>"Đóng vai hội đồng thẩm định, ra quyết định chọn Phương án A hay B kèm 3 luận cứ..."</em></td>
              </tr>
              <tr>
                <td><strong>Bậc 6: Sáng tạo (Create)</strong></td>
                <td>Thiết kế, xây dựng, lập kế hoạch, đề xuất giải pháp mới.</td>
                <td>AI tạo ra sản phẩm đại trà, có thể sao chép trên mạng.</td>
                <td>Yêu cầu AI: <em>"Xây dựng đề xuất giải pháp với ràng buộc ngân sách dưới 20 triệu VNĐ..."</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PHẦN 3: KHUNG KỊCH BẢN BÀI HỌC 3 CHẶNG TÍCH CỰC -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 3</span>
          <h2 class="article-section-title">Khung Kịch Bản Bài Học 3 Chặng Tích Cực (Pre - In - Post)</h2>
        </div>
        <p class="article-prose">
          Mô hình Lớp học đảo ngược (Flipped Classroom) và Dạy học tích cực chia buổi học thành 3 chặng liên hoàn, tối ưu hóa tối đa thời gian tương tác quý giá giữa thầy và trò trên giảng đường:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0 24px 0;">
          <!-- Card 1: Trước lớp -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; display: flex; flex-direction: column;">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #2563eb; margin-bottom: 4px;">Chặng 1 • Tự học & Kích hoạt</div>
            <div style="font-weight: 700; color: #0f172a; font-size: 0.98rem; margin-bottom: 8px;">Trước Buổi Học (Pre-class)</div>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.55; margin-bottom: 12px;">
              Sinh viên tiếp cận tri thức nền tảng tại nhà (đọc tài liệu tóm lược, xem video ngắn 5-7 phút) và làm bài kiểm tra chẩn đoán nhanh trên hệ thống LMS.
            </p>
            <div class="zoomable-image-wrap" onclick="window.openImageLightbox('assets/images/bai3/preclass-ai-flow.png', 'Chặng 1: Trước Lớp (Pre-class) — Ứng Dụng AI Chuẩn Bị Tri Thức Nền Tảng', 'Sơ đồ luồng: (1) Tinh gọn học liệu từ 20 trang thành 2 trang cô đọng; (2) Khảo sát chẩn đoán 3 câu hỏi LMS phát hiện lỗ hổng kiến thức trước khi đến lớp.')" style="margin-bottom: 12px; border: 1px solid #bfdbfe; box-shadow: 0 1px 4px rgba(37,99,235,0.06);" title="Bấm vào để xem ảnh phóng to chi tiết">
              <img src="assets/images/bai3/preclass-ai-flow.png" alt="Sơ đồ ứng dụng AI chặng Trước lớp: Tinh gọn tài liệu và khảo sát chẩn đoán" style="width: 100%; height: auto; display: block;" />
            </div>
            <div style="margin-top: auto; font-size: 0.8rem; color: #64748b; font-style: italic;">
              Đầu ra: Sinh viên đến lớp với vốn hiểu biết tối thiểu, sẵn sàng tranh biện.
            </div>
          </div>

          <!-- Card 2: Trong lớp -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; display: flex; flex-direction: column;">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #0d9488; margin-bottom: 4px;">Chặng 2 • Tương tác & Tranh biện</div>
            <div style="font-weight: 700; color: #0f172a; font-size: 0.98rem; margin-bottom: 8px;">Trong Buổi Học (In-class)</div>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.55; margin-bottom: 12px;">
              Không giảng lại lý thuyết sách giáo khoa. Giảng viên dành toàn bộ 90 hoặc 180 phút để giải quyết tình huống thực tế, tranh luận phản ví dụ và làm việc nhóm.
            </p>
            <div class="zoomable-image-wrap" onclick="window.openImageLightbox('assets/images/bai3/inclass-ai-flow.png', 'Chặng 2: Trong Lớp (In-class) — Ứng Dụng AI Tổ Chức Tương Tác Sâu & Tranh Biện', 'Sơ đồ luồng: (1) Kích hoạt tư duy bằng tình huống nghịch lý (Hook Question); (2) Cặp tình huống đối chiếu Ví dụ chuẩn (Valid Example) và Phản ví dụ (Counter-example).')" style="margin-bottom: 12px; border: 1px solid #99f6e4; box-shadow: 0 1px 4px rgba(13,148,136,0.06);" title="Bấm vào để xem ảnh phóng to chi tiết">
              <img src="assets/images/bai3/inclass-ai-flow.png" alt="Sơ đồ ứng dụng AI chặng Trong lớp: Tình huống nghịch lý và cặp ví dụ phản ví dụ" style="width: 100%; height: auto; display: block;" />
            </div>
            <div style="margin-top: auto; font-size: 0.8rem; color: #64748b; font-style: italic;">
              Đầu ra: Rèn luyện tư duy phản biện và năng lực giải quyết vấn đề thực tế.
            </div>
          </div>

          <!-- Card 3: Sau lớp -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; display: flex; flex-direction: column;">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #d97706; margin-bottom: 4px;">Chặng 3 • Khắc sâu & Phản tư</div>
            <div style="font-weight: 700; color: #0f172a; font-size: 0.98rem; margin-bottom: 8px;">Sau Buổi Học (Post-class)</div>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.55; margin-bottom: 12px;">
              Chuyển hóa kiến thức lớp học thành năng lực cá nhân thông qua bài tập thực tế có phân tầng độ khó và viết phiếu phản tư (Reflection Log).
            </p>
            <div class="zoomable-image-wrap" onclick="window.openImageLightbox('assets/images/bai3/postclass-ai-flow.png', 'Chặng 3: Sau Lớp (Post-class) — Ứng Dụng AI Khắc Sâu Tri Thức & Đánh Giá Phân Tầng', 'Sơ đồ luồng: (1) Phân tầng nhiệm vụ tự học 3 cấp độ (Nền tảng, Tiêu chuẩn, Thử thách); (2) Khung Rubric tự đánh giá và Phiếu phản tư 15 phút (Reflection Log).')" style="margin-bottom: 12px; border: 1px solid #fde68a; box-shadow: 0 1px 4px rgba(217,119,6,0.06);" title="Bấm vào để xem ảnh phóng to chi tiết">
              <img src="assets/images/bai3/postclass-ai-flow.png" alt="Sơ đồ ứng dụng AI chặng Sau lớp: Phân tầng nhiệm vụ và rubric phản tư" style="width: 100%; height: auto; display: block;" />
            </div>
            <div style="margin-top: auto; font-size: 0.8rem; color: #64748b; font-style: italic;">
              Đầu ra: Đóng gói hồ sơ học tập (Portfolio) và củng cố tri thức lâu dài.
            </div>
          </div>
        </div>
      </section>

      <!-- PHẦN 4: THỰC NGHIỆM NÂNG CẤP CÂU LỆNH THIẾT KẾ BÀI DẠY -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 4</span>
          <h2 class="article-section-title">Thực Nghiệm Sư Phạm: Nâng Cấp Câu Lệnh Thiết Kế Bài Dạy</h2>
        </div>
        <p class="article-prose">
          Đối chiếu trực tiếp sự khác biệt giữa câu lệnh thiết kế bài dạy đại trà và câu lệnh chuẩn Sư phạm 4.0 trên cùng một chuyên đề giảng dạy đại học:
        </p>

        <!-- Thẻ Tình huống thực nghiệm -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <div style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #f8fafc;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Tình huống sư phạm đối chiếu</span>
            <span style="font-size: 0.8rem; color: #64748b; background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 8px; border-radius: 4px;">Tài chính Ngân hàng • 90 phút</span>
          </div>
          <div style="padding: 14px 18px; font-size: 0.88rem; color: #334155; line-height: 1.6;">
            <strong>Chuyên đề lên lớp:</strong> <em>"Quản trị Rủi ro Tín dụng trong Ngân hàng Thương mại — Mô hình 5C thẩm định khách hàng doanh nghiệp"</em>. Sinh viên hay học thuộc lòng lý thuyết 5C (Character, Capacity, Capital, Collateral, Conditions) nhưng khi đọc báo cáo tài chính thật thì hoàn toàn không nhận diện được dấu hiệu cảnh báo rủi ro vỡ nợ.
          </div>
        </div>

        <!-- Before: Prompt Thô -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin: 0;">Câu lệnh thô (Trước khi nâng cấp)</h4>
            <span style="font-size: 0.82rem; color: #64748b;">Thiếu bối cảnh người học, không có chuẩn Bloom, mô hình đọc - chép cũ</span>
          </div>

          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt Thô</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_BEFORE)}'), 'Đã sao chép câu lệnh thô!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${PROMPT_UPGRADE_BEFORE}</pre>
          </div>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 6px; line-height: 1.5;">
            <strong style="color: #dc2626;">Hạn chế:</strong> AI trả về một dàn ý truyền thống gồm 60 phút giảng viên đứng thuyết trình lý thuyết 5C, 15 phút hỏi đáp chung chung và 15 phút bài tập về nhà đọc sách. Sinh viên hoàn toàn thụ động, không đạt được bất kỳ kỹ năng phân tích thực tế nào.
          </p>
        </div>

        <!-- After: Prompt Chuẩn Sư Phạm 4.0 -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin: 0;">Câu lệnh chuẩn Sư phạm 4.0 (Sau khi áp dụng Mô hình 3 Chặng & Bloom)</h4>
            <span style="font-size: 0.82rem; color: #64748b;">Đầy đủ Chuẩn đầu ra Bậc 4-5, chia 3 chặng Pre-In-Post, hoạt động GV-SV đối xứng</span>
          </div>

          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt Chuẩn Sư Phạm 4.0</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_AFTER)}'), 'Đã sao chép câu lệnh chuẩn sư phạm!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${PROMPT_UPGRADE_AFTER}</pre>
          </div>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 6px; line-height: 1.5;">
            <strong style="color: #16a34a;">Ưu điểm:</strong> AI xây dựng kịch bản chặt chẽ với nhiệm vụ chuẩn bị trước lớp, tình huống nghịch lý kích hoạt tranh luận trong lớp, đóng vai hội đồng thẩm định tín dụng phân tích hồ sơ thật và phiếu phản tư sau lớp đo lường chính xác chuẩn đầu ra Bậc 4 và Bậc 5.
          </p>
        </div>
      </section>

      <!-- PHẦN 5: BỘ 06 CÂU LỆNH CHUẨN MẪU THIẾT KẾ BÀI GIẢNG -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 5</span>
          <h2 class="article-section-title">Thư Viện 06 Câu Lệnh Chuẩn Thiết Kế Bài Giảng (Prompt Library)</h2>
        </div>
        <p class="article-prose">
          Bộ 06 câu lệnh chuẩn mực được đóng gói công phu phục vụ toàn bộ chu trình thiết kế bài dạy của giảng viên. Giảng viên chỉ cần sao chép, điền thông tin môn học trong dấu ngoặc vuông và đưa vào ChatGPT/Gemini/NotebookLM:
        </p>

        <!-- Prompt 1 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">1. Chuẩn Hóa Chuẩn Đầu Ra (CLO) Đo Lường Được Theo Thang Đo Bloom Sửa Đổi</h4>
            <span style="font-size: 0.8rem; color: #64748b;">Khử từ mơ hồ, gán động từ hành vi và chỉ báo đo lường</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 01: Chuẩn Hóa CLO Theo Thang Bloom</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P1)}'), 'Đã sao chép Prompt 1!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P1}</pre>
          </div>
        </div>

        <!-- Prompt 2 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">2. Thiết Kế Kế Hoạch Bài Dạy (Lesson Plan) Toàn Diện Theo Mô Hình 3 Chặng</h4>
            <span style="font-size: 0.8rem; color: #64748b;">Phân bổ Trước lớp - Trong lớp - Sau lớp đối xứng hoạt động GV-SV</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 02: Kế Hoạch Bài Dạy 3 Chặng Tích Cực</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P2)}'), 'Đã sao chép Prompt 2!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P2}</pre>
          </div>
        </div>

        <!-- Prompt 3 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">3. Thiết Kế Cặp Tình Huống: Ví Dụ Chuẩn & Phản Ví Dụ (Counter-example)</h4>
            <span style="font-size: 0.8rem; color: #64748b;">Làm rõ ranh giới lý thuyết và xóa bỏ các ngộ nhận phổ biến</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 03: Thiết Kế Ví Dụ & Phản Ví Dụ Đối Chiếu</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P3)}'), 'Đã sao chép Prompt 3!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P3}</pre>
          </div>
        </div>

        <!-- Prompt 4 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">4. Phân Tầng Nhiệm Vụ Học Tập Theo Năng Lực (Differentiated Instruction)</h4>
            <span style="font-size: 0.8rem; color: #64748b;">3 tầng nhiệm vụ: Nền tảng (6đ) - Tiêu chuẩn (8đ) - Thử thách mở rộng (10đ)</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 04: Phân Tầng Nhiệm Vụ Học Tập</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P4)}'), 'Đã sao chép Prompt 4!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P4}</pre>
          </div>
        </div>

        <!-- Prompt 5 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">5. Thiết Kế Bộ Câu Hỏi Chẩn Đoán Đầu Giờ (Diagnostic Pre-test)</h4>
            <span style="font-size: 0.8rem; color: #64748b;">4 câu hỏi kiểm tra nhanh kiến thức tiên quyết và kích hoạt tò mò</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 05: Khảo Sát Chẩn Đoán Đầu Giờ</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P5)}'), 'Đã sao chép Prompt 5!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P5}</pre>
          </div>
        </div>

        <!-- Prompt 6 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">6. Lập Phiếu Đúc Kết & Phản Tư Sau Lớp (Post-class Reflection Log)</h4>
            <span style="font-size: 0.8rem; color: #64748b;">3 điểm sáng, 1 điểm mù, 1 bài toán thực tế mini 15 phút tại nhà</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 06: Phiếu Phản Tư & Đúc Kết Tự Học</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P6)}'), 'Đã sao chép Prompt 6!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P6}</pre>
          </div>
        </div>
      </section>

      <!-- PHẦN 6: BÀI TẬP THỰC HÀNH TẠI LỚP (70 PHÚT) -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 6</span>
          <h2 class="article-section-title">Bài Tập Tình Huống Thực Hành Tại Lớp (70 Phút)</h2>
        </div>
        <p class="article-prose">
          Học viên thực hiện bài tập trực tiếp trên máy tính cá nhân để xây dựng và thẩm định Kế hoạch bài dạy hoàn chỉnh cho một buổi học thật của môn mình giảng dạy:
        </p>

        <!-- Thẻ Tình huống bài tập -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <div style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #f8fafc;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Đề bài: Thiết Kế Kế Hoạch Bài Dạy (Lesson Plan) 3 Chặng Tích Cực</span>
            <span style="font-size: 0.8rem; color: #64748b; background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 8px; border-radius: 4px;">Thời lượng: 70 phút</span>
          </div>

          <div style="padding: 16px 18px; font-size: 0.9rem; line-height: 1.6; color: #334155;">
            <div style="margin-bottom: 10px;">
              <strong style="color: #0f172a;">Tình huống thực tế:</strong> Thầy/Cô mở Đề cương chi tiết học phần (Syllabus) của môn học mình đang phụ trách trong học kỳ này. Chọn đúng <strong>01 buổi học trọng tâm</strong> (thường là bài học chứa đựng khái niệm phức tạp hoặc sinh viên hay gặp khó khăn nhất khi tiếp thu) để thiết kế kịch bản sư phạm hoàn chỉnh.
            </div>
            <div>
              <strong style="color: #0f172a;">Sản phẩm đầu ra (Deliverable):</strong> 01 File văn bản Kế hoạch bài dạy (Lesson Plan) hoàn chỉnh từ 90 đến 180 phút đáp ứng đủ 4 tiêu chuẩn vàng: (1) Chuẩn đầu ra CLO rõ ràng theo thang Bloom; (2) Có đủ hoạt động Trước lớp - Trong lớp - Sau lớp; (3) Tích hợp 01 tình huống thực tế hoặc phản ví dụ; (4) Giảng viên đã trực tiếp thẩm định, chỉnh sửa lỗi ảo giác của AI.
            </div>
          </div>
        </div>

        <!-- 3 Bước thực hành -->
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 1 (25 phút): Chuẩn hóa CLO & Thiết lập Khung tiến trình 3 chặng
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Dùng Prompt 1 để chuyển hóa các mục tiêu bài học thành 2-3 chuẩn đầu ra CLO theo thang Bloom (tối thiểu đạt Bậc 3 hoặc Bậc 4). Sau đó dùng Prompt 2 để AI phác thảo khung tiến trình 3 chặng sư phạm: Trước lớp - Trong lớp - Sau lớp.
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 2 (30 phút): Tích hợp Tình huống thực tiễn & Phân tầng độ khó
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Dùng Prompt 3 để tạo một Cặp ví dụ chuẩn và Phản ví dụ (Non-example) giúp giải thích điểm ngộ nhận cốt lõi của bài học. Áp dụng Prompt 4 để phân tầng bài tập thực hành trên lớp cho các nhóm sinh viên. Thầy/Cô trực tiếp đọc kỹ, rà soát tính chính xác học thuật và sửa các điểm AI viết chưa sát thực tế Việt Nam.
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 3 (15 phút): Rà soát chéo đồng đẳng theo Checklist Sư phạm
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Đổi máy hoặc chia sẻ màn hình với đồng nghiệp ngồi kế bên. Đánh giá chéo Lesson Plan dựa trên 3 câu hỏi kiểm định:
              <br>• Sinh viên có bị biến thành người nghe thụ động quá 20 phút không?
              <br>• Hoạt động thực hành trong lớp có thực sự đo lường được chuẩn đầu ra CLO đã đề ra không?
              <br>• Các tình huống và số liệu đã được giảng viên kiểm chứng an toàn học thuật chưa?
            </div>
          </div>
        </div>

        <!-- Khung chuẩn bị cho buổi 4 -->
        <div style="padding: 12px 18px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.86rem; color: #334155; line-height: 1.6;">
          <strong>Chuẩn bị cho Buổi 4 (AI Tạo Nội Dung Giảng Dạy & Bộ Học Liệu Có Cấu Trúc):</strong> Thầy/Cô giữ lại Kế hoạch bài dạy vừa hoàn thành để làm đầu vào cho Buổi 4, nơi chúng ta sẽ dùng AI để tự động hóa việc xuất bản đồng bộ: Dàn ý Slide bài giảng, Tài liệu phát tay (Handout), Ngân hàng câu hỏi FAQ và Bài đọc chuyên sâu.
        </div>
      </section>

    </div>
  `;

  const session3Data = {
    id: 3,
    number: 3,
    title: "Buổi 3: AI Thiết Kế Bài Giảng & Học Phần (Lesson Plan)",
    topic: "Thiết kế Bài giảng & Học phần",
    tools: ["ChatGPT", "Gemini", "NotebookLM"],
    duration: "180 phút (3 giờ)",
    deliverable: "01 Kế hoạch bài dạy (Lesson Plan) hoàn chỉnh cho một buổi học thật chuẩn mô hình 3 chặng tích cực",
    overview: "Ứng dụng GenAI chuẩn hóa Chuẩn đầu ra (CLO) theo Thang đo Bloom sửa đổi, ánh xạ ma trận liên kết tương thích (Constructive Alignment) và kiến tạo kịch bản sư phạm 3 chặng (Trước - Trong - Sau lớp). Tích hợp tình huống thực tiễn, phản ví dụ đối chiếu và phân tầng năng lực người học.",
    articleHtml: articleHtml,
    objectives: [],
    timeline: [],
    blocks: []
  };

  // Register session into central registry
  window.CurriculumRegistry.registerSession(session3Data);

  // Synchronize metadata with localStorage
  window.CurriculumRegistry.saveSessionMeta(3, {
    title: session3Data.title,
    duration: session3Data.duration,
    tools: session3Data.tools,
    overview: session3Data.overview
  });
})();
