/**
 * SESSION 3: AI THIẾT KẾ BÀI GIẢNG VÀ HỌC PHẦN (LESSON PLAN & COURSE DESIGN)
 * (js/data/sessions/session-03.js)
 * TÌNH HUỐNG THỰC HÀNH XUYÊN SUỐT: Sách Giáo Khoa Địa Lí 11 — Bộ Kết Nối Tri Thức Với Cuộc Sống
 * Trọng tâm bài mẫu: Bài 2: Toàn cầu hoá và khu vực hoá kinh tế (Trang 9 – 12)
 * Cấu trúc chuẩn: I. MỤC TIÊU — III. TIẾN TRÌNH DẠY HỌC — IV. HƯỚNG DẪN VỀ NHÀ VÀ DẶN DÒ
 */

(function() {
  // CÂU LỆNH THỰC NGHIỆM ĐỐI CHIẾU TRÊN SGK ĐỊA LÍ 11
  const PROMPT_UPGRADE_BEFORE = `Hãy soạn cho tôi một giáo án bài giảng 90 phút Bài 2: "Toàn cầu hoá và khu vực hoá kinh tế" môn Địa lí 11 sách Kết nối tri thức.`;

  const PROMPT_UPGRADE_AFTER = `BỐI CẢNH & VAI TRÒ:
Bạn là chuyên gia thiết kế bài dạy tương tác môn Địa lí.
Tôi dạy môn Địa lí 11, bộ sách Kết Nối Tri Thức Với Cuộc Sống.

BÀI HỌC CỤ THỂ:
Bài 2: Toàn cầu hoá và khu vực hoá kinh tế (Trang 9 – 12 trong SGK Địa lí 11).

ĐỐI TƯỢNG HỌC SINH:
Học sinh lớp 11. Các em đã học xong Bài 1 về các nhóm nước phát triển và đang phát triển. Học sinh hay nhầm lẫn giữa "Toàn cầu hoá" (mở rộng trên phạm vi toàn thế giới) và "Khu vực hoá" (chỉ liên kết giữa các nước gần nhau như ASEAN, EU).

MỤC TIÊU BÀI DẠY (DÙNG ĐỘNG TỪ HÀNH ĐỘNG CỤ THỂ):
1. Phân tích được 4 biểu hiện của toàn cầu hoá kinh tế qua chuỗi sản xuất 1 sản phẩm quen thuộc (ví dụ chiếc điện thoại thông minh hoặc hạt cà phê xuất khẩu).
2. So sánh và phân biệt rõ sự khác nhau giữa Toàn cầu hoá và Khu vực hoá kinh tế.
3. Đánh giá được cơ hội và thách thức của Việt Nam khi hội nhập kinh tế quốc tế.

YÊU CẦU THIẾT KẾ 4 BƯỚC KHÁM PHÁ (90 PHÚT):
1. Khởi động (10 phút): Tình huống chiếc điện thoại thông minh: "Thiết kế tại Mỹ, chip sản xuất tại Đài Loan, màn hình tại Hàn Quốc, lắp ráp tại Việt Nam". Câu hỏi tranh luận: Tại sao không quốc gia nào tự sản xuất từ A đến Z?
2. Khám phá kiến thức (35 phút): Hướng dẫn học sinh khai thác số liệu và thông tin trang 9-11 SGK Địa lí 11 để tìm ra 4 biểu hiện của toàn cầu hoá.
3. Luyện tập tại lớp (30 phút): Cặp ví dụ đối chiếu: Phân biệt rõ WTO (toàn cầu) với ASEAN/EU (khu vực). Xử lý tình huống nông sản Việt Nam khi xuất khẩu.
4. Vận dụng thực tế (15 phút): Bài toán nhỏ: Nếu gia đình em kinh doanh hàng may mặc hoặc nông sản, toàn cầu hoá mang lại cơ hội gì và rủi ro gì?

LƯU Ý:
- Bám sát nội dung và bảng số liệu trang 9-12 SGK Địa lí 11 Kết nối tri thức.
- Trình bày dạng bảng: Hoạt động | Thời gian | Việc người dạy làm | Việc người học làm | Sản phẩm cần nộp.`;

  // 6 CÂU LỆNH MẪU ÁP DỤNG TRỰC TIẾP CHO SGK ĐỊA LÍ 11
  const LIB_P1 = `VAI TRÒ: Chuyên gia biên soạn mục tiêu bài học môn Địa lí theo chuẩn đo lường.
BỐI CẢNH: Tôi đang dạy môn Địa lí 11 (Bộ Kết Nối Tri Thức Với Cuộc Sống).
BÀI DẠY: Bài 2: Toàn cầu hoá và khu vực hoá kinh tế (Trang 9 – 12).
NHIỆM VỤ: Hãy chuyển nội dung bài học thành 3 mục tiêu hành động cụ thể, đo lường được:

QUY TẮC:
1. Bắt đầu bằng động từ hành động rõ ràng (như: Phân tích, So sánh, Đánh giá). Tuyệt đối không dùng từ mơ hồ như: "hiểu được", "nắm được".
2. Phân rõ 3 mức: Mức 1 (Nêu được biểu hiện) &rarr; Mức 2 (Phân biệt được toàn cầu hoá và khu vực hoá) &rarr; Mức 3 (Đánh giá được cơ hội và thách thức của Việt Nam).
3. Gợi ý 1 câu hỏi kiểm tra nhanh tương ứng với từng mục tiêu.`;

  const LIB_P2 = `VAI TRÒ: Chuyên gia thiết kế bài dạy khám phá tích cực môn Địa lí 11.
BỐI CẢNH: Dạy Bài 2: "Toàn cầu hoá và khu vực hoá kinh tế" (Trang 9-12 SGK Địa lí 11 Kết Nối Tri Thức), thời lượng 90 phút.
MỤC TIÊU: Học sinh phân tích được 4 biểu hiện toàn cầu hoá và phân biệt được với khu vực hoá.

NHIỆM VỤ: Lập kế hoạch bài dạy theo tiến trình 4 hoạt động:
1. Khởi động (10 phút): Một hình ảnh hoặc tình huống đời sống kích hoạt tò mò về sự phụ thuộc kinh tế giữa các quốc gia.
2. Khám phá (35 phút): Chia trạm học tập để học sinh khai thác số liệu FDI, thương mại thế giới và công ty đa quốc gia từ trang 9-11 SGK.
3. Luyện tập (30 phút): Bài tập thực hành nhóm phân biệt tổ chức WTO và ASEAN/EU.
4. Vận dụng (15 phút): Bài tập liên hệ thực tế về xuất khẩu nông sản Việt Nam.

ĐỊNH DẠNG: Bảng gồm: Hoạt động | Thời lượng | Việc người dạy làm | Việc người học làm | Sản phẩm nộp.`;

  const LIB_P3 = `VAI TRÒ: Chuyên gia thiết kế tình huống sư phạm môn Địa lí.
BỐI CẢNH: Dạy Bài 2 SGK Địa lí 11. Học sinh rất hay nhầm lẫn giữa "Toàn cầu hoá" và "Khu vực hoá".
LỖI HAY GẶP: Học sinh nghĩ rằng cứ gia nhập bất kỳ tổ chức quốc tế nào (như ASEAN) cũng là toàn cầu hoá.

NHIỆM VỤ: Hãy tạo một Cặp ví dụ đối chiếu (Đúng vs Sai):
1. Ví dụ Toàn Cầu Hoá (Chuẩn): Hoạt động của Tổ chức Thương mại Thế giới (WTO) hoặc chuỗi sản xuất máy bay Boeing/Airbus với linh kiện từ hàng chục nước trên thế giới.
2. Ví dụ Khu Vực Hoá (Đối chiếu): Hiệp hội các quốc gia Đông Nam Á (ASEAN) hoặc Liên minh châu Âu (EU) chỉ bao gồm các nước trong cùng một khu vực địa lý láng giềng.
3. 02 Câu hỏi tranh luận: Giúp học sinh tự so sánh phạm vi địa lý và mức độ cam kết giữa hai hình thức này.`;

  const LIB_P4 = `VAI TRÒ: Chuyên gia phân hóa bài tập môn Địa lí 11.
BỐI CẢNH: Bài 2: Toàn cầu hoá và khu vực hoá kinh tế (SGK Địa lí 11 Kết Nối Tri Thức).
MỤC TIÊU: Thiết kế hệ thống bài tập vừa sức cho học sinh trung bình nhưng vẫn tạo thử thách cho học sinh khá giỏi.

NHIỆM VỤ: Hãy tạo 01 bài tập lớn chia thành 3 mức độ tăng tiến:
- MỨC 1 - CƠ BẢN (Đạt 6 điểm): Đọc biểu đồ hoặc bảng số liệu trang 10 SGK Địa lí 11, nêu nhận xét về tốc độ tăng trưởng thương mại thế giới so với GDP.
- MỨC 2 - KHÁ (Đạt 8 điểm): Giải thích vì sao các công ty đa quốc gia (như Samsung, Apple, Toyota) lại đặt nhà máy sản xuất tại các nước đang phát triển như Việt Nam?
- MỨC 3 - THỬ THÁCH (Đạt 10 điểm): Đóng vai một doanh nghiệp dệt may hoặc chế biến thủy sản Việt Nam, đề xuất 2 giải pháp ứng phó với hàng rào thuế quan và tiêu chuẩn xanh của các nước phát triển.`;

  const LIB_P5 = `VAI TRÒ: Chuyên gia thiết kế câu hỏi trắc nghiệm kiểm tra đầu giờ môn Địa lí 11.
BỐI CẢNH: Chuẩn bị dạy Bài 2: Toàn cầu hoá kinh tế. Học sinh đã học Bài 1 về các nhóm nước.
MỤC TIÊU: Soạn 4 câu hỏi trắc nghiệm ngắn gọn làm trong 5 phút đầu giờ:

YÊU CẦU:
- Câu 1: Nhớ lại tiêu chí phân chia nhóm nước phát triển và đang phát triển (Bài 1).
- Câu 2: Câu hỏi nhận biết về biểu hiện của toàn cầu hoá.
- Câu 3: Câu hỏi gài bẫy phân biệt giữa WTO (toàn cầu) và ASEAN (khu vực) mà học sinh hay nhầm.
- Câu 4: Một câu hỏi thực tế về một sản phẩm quen thuộc hàng ngày được sản xuất từ nhiều quốc gia.`;

  const LIB_P6 = `VAI TRÒ: Cố vấn tự học môn Địa lí 11.
BỐI CẢNH: Kết thúc Bài 2: Toàn cầu hoá và khu vực hoá kinh tế (SGK Địa lí 11).
MỤC TIÊU: Soạn Phiếu tự tổng kết nhanh (15 phút làm tại nhà):

NỘI DUNG PHIẾU:
1. 3 ĐIỂM SÁNG: Viết ra 3 biểu hiện rõ nhất của toàn cầu hoá mà em quan sát được trong đời sống hàng ngày.
2. 1 ĐIỂM CÒN THẮC MẮC: Em còn thấy điểm nào khó hiểu giữa toàn cầu hoá và khu vực hoá?
3. 1 BÀI TẬP NHỎ (15 phút): Tìm trên nhãn mác của 3 đồ vật trong nhà em (quần áo, đồ gia dụng, thiết bị điện tử) xem chúng được sản xuất tại quốc gia nào và thương hiệu của quốc gia nào.
4. GỢI Ý TÌM HIỂU THÊM: Đề xuất 1 video phóng sự ngắn về chuỗi cung ứng toàn cầu.`;

  const articleHtml = `
    <div class="session-direct-article">

      <!-- BANNER TIÊU ĐỀ BUỔI HỌC -->
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: var(--radius-lg); padding: 24px 28px; box-shadow: var(--shadow-md); border: 1px solid #334155; margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap;">
          <span style="background: #2563eb; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Khóa Đào Tạo AI Sư Phạm 4.0</span>
          <span style="background: #059669; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Tình Huống: SGK Địa Lí 11</span>
          <span style="color: #94a3b8; font-size: 0.85rem;">Thời lượng: 180 phút (3 giờ)</span>
        </div>
        <h1 style="font-size: 1.75rem; font-weight: 800; color: #ffffff; margin: 0 0 10px 0; letter-spacing: -0.02em;">
          BUỔI 3: AI THIẾT KẾ BÀI GIẢNG VÀ HỌC PHẦN
        </h1>
        <p style="font-size: 0.95rem; color: #cbd5e1; margin: 0; line-height: 1.65;">
          Thực hành dùng AI thiết kế bài dạy hoàn chỉnh dựa trên cuốn <strong>Sách Giáo Khoa Địa Lí 11 (Bộ Kết Nối Tri Thức Với Cuộc Sống)</strong> — Trọng tâm là <em>Bài 2: Toàn cầu hoá và khu vực hoá kinh tế (Trang 9 – 12)</em>.
        </p>
      </div>


      <!-- ========================================================================= -->
      <!-- I. MỤC TIÊU                                                              -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag" style="background-color: #1e3a8a;">MỤC TIÊU</span>
          <h2 class="article-section-title">Mục Tiêu Bài Học</h2>
        </div>
        <p class="article-prose">
          Mục tiêu đạt được sau bài học khi áp dụng AI vào thiết kế bài giảng môn Địa lí 11:
        </p>

        <!-- 1. Kiến thức -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="background: #eff6ff; color: #1d4ed8; font-weight: 800; font-size: 0.85rem; padding: 2px 8px; border-radius: 4px; border: 1px solid #bfdbfe;">1. Kiến thức</span>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #0f172a; margin: 0;">Kiến thức cốt lõi cần nắm được</h3>
          </div>
          <ul style="margin: 0; padding-left: 22px; color: #334155; font-size: 0.92rem; line-height: 1.7;">
            <li><strong>Nguyên tắc ăn khớp:</strong> Mục tiêu bài học đặt ra việc gì &rarr; Trên lớp tổ chức đúng hoạt động đó &rarr; Đề kiểm tra đánh giá đúng kỹ năng đó. Tránh việc mục tiêu ghi học sinh phân tích bảng số liệu thương mại, nhưng trên lớp chỉ đọc chép lý thuyết và đề kiểm tra lại hỏi học thuộc lòng định nghĩa.</li>
            <li><strong>Đặt mục tiêu bằng động từ hành động:</strong> Sử dụng các động từ đo được (như: <em>phân tích biểu đồ, so sánh tổ chức WTO và ASEAN, giải thích nguyên nhân</em>). Loại bỏ hoàn toàn các từ mơ hồ như: <em>"hiểu bài", "nắm được kiến thức", "biết về toàn cầu hóa"</em>.</li>
            <li><strong>Tiến trình bài dạy 4 bước chuẩn:</strong> Khởi động (Tạo tình huống thực tế chiếc điện thoại thông minh) &rarr; Khám phá kiến thức mới (Khai thác số liệu trang 9-11 SGK Địa lí 11) &rarr; Luyện tập tại lớp &rarr; Vận dụng thực tế.</li>
            <li><strong>Cặp ví dụ đối chiếu:</strong> Sử dụng ví dụ chuẩn (Tổ chức Thương mại Thế giới WTO - phạm vi toàn cầu) và ví dụ đối chiếu (Hiệp hội các quốc gia Đông Nam Á ASEAN - phạm vi khu vực) để học sinh không bị nhầm lẫn ranh giới khái niệm.</li>
          </ul>
        </div>

        <!-- HỘP GIẢI THÍCH THEN CHỐT: TẠI SAO PHẢI THAY ĐỔI ĐỘNG TỪ? -->
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 20px; margin-bottom: 18px; box-shadow: 0 1px 4px rgba(217,119,6,0.06);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="background: #fef3c7; color: #b45309; font-weight: 800; font-size: 0.82rem; padding: 3px 8px; border-radius: 4px; border: 1px solid #fcd34d;">GIẢI THÍCH THEN CHỐT</span>
            <h3 style="font-size: 1.05rem; font-weight: 800; color: #92400e; margin: 0;">Tại Sao Bắt Buộc Phải Đổi Động Từ Trong Mục Tiêu Bài Dạy?</h3>
          </div>
          
          <p style="font-size: 0.92rem; color: #78350f; line-height: 1.65; margin: 0 0 12px 0;">
            Đây là sai lầm phổ biến nhất của giáo viên khi soạn bài và khi ra lệnh cho AI. Việc thay đổi từ ngữ không phải là chơi chữ, mà quyết định trực tiếp xem tiết học sẽ là <strong>"học sinh tự làm"</strong> hay <strong>"người dạy đọc chép một chiều"</strong>:
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; margin-bottom: 14px;">
            <div style="background: #ffffff; border: 1px solid #fde68a; border-radius: 6px; padding: 12px 14px;">
              <strong style="color: #dc2626; font-size: 0.9rem;">1. Tại sao từ "Hiểu", "Biết", "Nắm được" là cái bẫy?</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.6;">
                Từ "hiểu" nằm trong đầu học sinh, người dạy <strong>không thể nhìn thấy, không thể đo đếm hay chấm điểm</strong> chính xác. Học sinh gật đầu chưa chắc đã hiểu; học sinh đọc thuộc lòng định nghĩa trong sách chỉ là học vẹt chứ chưa chắc hiểu bản chất.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #fde68a; border-radius: 6px; padding: 12px 14px;">
              <strong style="color: #16a34a; font-size: 0.9rem;">2. Thế nào là "Động từ hành động đo đếm được"?</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.6;">
                Bắt buộc học sinh phải <strong>làm ra một hành động cụ thể ra giấy hoặc trên máy tính</strong> (như: <em>tính ra con số, vẽ biểu đồ, chỉ ra 4 nước trên chiếc điện thoại, lập bảng so sánh</em>). Nhìn vào hành động là biết ngay đúng hay sai, được mấy điểm.
              </p>
            </div>

            <div style="background: #ffffff; border: 1px solid #fde68a; border-radius: 6px; padding: 12px 14px;">
              <strong style="color: #2563eb; font-size: 0.9rem;">3. Tại sao điều này quyết định chất lượng lệnh AI?</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.6;">
                Nếu bảo AI: <em>"Giúp học sinh hiểu bài"</em>, AI sẽ tạo ra <strong>60 phút đọc chép lý thuyết suông</strong>. Nhưng nếu bắt AI dùng từ hành động (<em>so sánh, tính toán, đóng vai</em>), AI sẽ <strong>bắt buộc phải tạo bài tập thực hành và câu hỏi tranh luận</strong> để học sinh tự làm việc!
              </p>
            </div>
          </div>

          <!-- Bảng đối chiếu 3 cột -->
          <div style="overflow-x: auto;">
            <table class="article-matrix-table" style="margin: 0; font-size: 0.86rem; background: #ffffff;">
              <thead>
                <tr style="background: #fef3c7;">
                  <th style="width: 30%; color: #92400e;">Viết kiểu mơ hồ (Không đo được)</th>
                  <th style="width: 38%; color: #92400e;">Sửa lại bằng hành động cụ thể (Đo đếm được 100%)</th>
                  <th style="width: 32%; color: #92400e;">Cách kiểm tra xem học sinh đạt chưa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><em>Học sinh <strong>hiểu</strong> biểu hiện của toàn cầu hoá.</em></td>
                  <td><em>Học sinh <strong>chỉ ra được</strong> 4 quốc gia tham gia sản xuất các bộ phận của 1 chiếc điện thoại thông minh.</em></td>
                  <td>Học sinh viết ra giấy: Mỹ (thiết kế), Hàn Quốc (màn hình), Đài Loan (chip), Việt Nam (lắp ráp) &rarr; <strong>Đúng 4 nước = Đạt</strong>.</td>
                </tr>
                <tr>
                  <td><em>Học sinh <strong>nắm được</strong> sự khác nhau giữa WTO và ASEAN.</em></td>
                  <td><em>Học sinh <strong>lập được bảng so sánh</strong> 2 điểm khác nhau giữa tổ chức toàn cầu (WTO) và tổ chức khu vực (ASEAN).</em></td>
                  <td>Chấm bài thi: Nêu đúng 2 tiêu chí phạm vi địa lý và mức độ cam kết &rarr; <strong>Cho điểm trọn vẹn</strong>.</td>
                </tr>
                <tr>
                  <td><em>Học sinh <strong>biết</strong> cách đọc bảng số liệu SGK.</em></td>
                  <td><em>Học sinh <strong>tính được</strong> tốc độ tăng trưởng xuất khẩu dựa vào bảng số liệu trang 10 SGK Địa lí 11.</em></td>
                  <td>Học sinh bấm máy tính ra đúng con số tăng trưởng &rarr; <strong>Chấm điểm đúng/sai ngay lập tức</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 2. Năng lực -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="background: #ecfdf5; color: #047857; font-weight: 800; font-size: 0.85rem; padding: 2px 8px; border-radius: 4px; border: 1px solid #a7f3d0;">2. Năng lực</span>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #0f172a; margin: 0;">Năng lực chung & Năng lực đặc thù môn Địa lí</h3>
          </div>
          
          <!-- Năng lực chung -->
          <div style="margin-bottom: 12px;">
            <div style="font-weight: 700; color: #065f46; font-size: 0.92rem; margin-bottom: 6px;">a. Năng lực chung:</div>
            <ul style="margin: 0; padding-left: 22px; color: #334155; font-size: 0.9rem; line-height: 1.65;">
              <li><strong>Tự chủ & Tự học:</strong> Biết mở file PDF SGK Địa lí 11, tự viết câu lệnh ra lệnh cho AI (ChatGPT, Gemini, NotebookLM) và tự đối chiếu số liệu trong sách để phát hiện lỗi sai của AI.</li>
              <li><strong>Giao tiếp & Hợp tác:</strong> Trao đổi nhóm, nhận xét và góp ý cho bản kế hoạch bài dạy của bạn học.</li>
              <li><strong>Giải quyết vấn đề & Sáng tạo:</strong> Chuyển hóa các bảng số liệu khô khan trong SGK thành tình huống thực tế kích thích tranh luận.</li>
            </ul>
          </div>

          <!-- Năng lực đặc thù -->
          <div>
            <div style="font-weight: 700; color: #065f46; font-size: 0.92rem; margin-bottom: 6px;">b. Năng lực đặc thù môn Địa lí & Ứng dụng AI:</div>
            <ul style="margin: 0; padding-left: 22px; color: #334155; font-size: 0.9rem; line-height: 1.65;">
              <li><strong>Năng lực khai thác tư liệu địa lí:</strong> Dùng AI hướng dẫn học sinh đọc bảng số liệu kinh tế, biểu đồ tăng trưởng thương mại thế giới và bản đồ các tổ chức liên kết khu vực.</li>
              <li><strong>Kỹ năng ra lệnh cho AI tạo bài giảng tương tác:</strong> Viết câu lệnh yêu cầu AI thiết kế trạm học tập phân tích biểu hiện toàn cầu hoá, không để AI sinh bài giảng đọc chép một chiều.</li>
              <li><strong>Kỹ năng phân chia bài tập địa lí 3 mức độ:</strong> Mức 1 (Đọc bảng số liệu SGK) &rarr; Mức 2 (Giải thích vì sao doanh nghiệp đa quốc gia đầu tư vào Việt Nam) &rarr; Mức 3 (Đề xuất giải pháp cho nông sản Việt Nam khi hội nhập quốc tế).</li>
            </ul>
          </div>
        </div>

        <!-- 3. Phẩm chất -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
            <span style="background: #fffbeb; color: #b45309; font-weight: 800; font-size: 0.85rem; padding: 2px 8px; border-radius: 4px; border: 1px solid #fde68a;">3. Phẩm chất</span>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: #0f172a; margin: 0;">Phẩm chất nghề nghiệp rèn luyện qua bài học</h3>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
            <div style="border-left: 3px solid #f59e0b; padding-left: 12px;">
              <strong style="color: #92400e; font-size: 0.9rem;">Cẩn thận & Tỉ mỉ:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Luôn đối chiếu lại số liệu GDP, FDI và tỷ lệ phần trăm do AI đưa ra với bảng số liệu chính thức trang 9-12 SGK Địa lí 11 trước khi sử dụng.
              </p>
            </div>
            <div style="border-left: 3px solid #10b981; padding-left: 12px;">
              <strong style="color: #065f46; font-size: 0.9rem;">Trung thực & Trách nhiệm:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Không phó mặc hoàn toàn cho AI; chịu trách nhiệm về tính chính xác của kiến thức địa lý truyền đạt cho học sinh.
              </p>
            </div>
            <div style="border-left: 3px solid #2563eb; padding-left: 12px;">
              <strong style="color: #1e40af; font-size: 0.9rem;">Tình yêu quê hương & Ý thức hội nhập:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Giúp học sinh tự hào về vị thế kinh tế của Việt Nam trên trường quốc tế và hiểu rõ những cơ hội, thách thức của đất nước trong thời kỳ hội nhập.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- BÀI TẬP: TIẾN TRÌNH CÁC HOẠT ĐỘNG DẠY HỌC                                 -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header" style="margin-bottom: 20px;">
          <span class="article-section-tag" style="background-color: #047857;">BÀI TẬP</span>
          <h2 class="article-section-title">Bài Tập & Tiến Trình Hoạt Động Giảng Dạy</h2>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- HOẠT ĐỘNG 1: MỞ ĐẦU / KHỞI ĐỘNG                                      -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #dbeafe; color: #1e40af; font-weight: 800; font-size: 0.85rem; padding: 3px 10px; border-radius: 4px;">Hoạt động 1</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Mở Đầu / Khởi Động: Tạo Tình Huống Xuất Phát (15 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 15 phút</span>
          </div>

          <div style="margin-bottom: 14px;">
            <strong style="color: #1e3a8a; font-size: 0.92rem;">• Mục tiêu:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Nhận diện sai lầm phổ biến khi dùng AI: Nếu chỉ gõ một dòng ngắn ngủi yêu cầu soạn giáo án Bài 2 Địa lí 11, AI sẽ tự động sinh ra một tiết học 60 phút đọc chép định nghĩa trong sách, học sinh ngồi nghe thụ động và không hiểu bản chất toàn cầu hoá là gì.
            </p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #1e3a8a; font-size: 0.92rem;">• Nội dung & Sản phẩm:</strong>
            <p style="margin: 4px 0 10px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              So sánh trực tiếp kết quả của 02 câu lệnh trên cùng bài học <em>"Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" (Trang 9 – 12 SGK Địa lí 11)</em>:
            </p>

            <!-- Card Đối chiếu Before - After -->
            <div style="display: flex; flex-direction: column; gap: 14px;">
              
              <!-- Before -->
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 0.85rem; font-weight: 700; color: #dc2626;">❌ 1. Câu lệnh thô (Gõ ngắn 1 dòng, thiếu mục tiêu và bối cảnh)</span>
                  <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_BEFORE)}'), 'Đã sao chép prompt thô!')">
                    Sao chép Prompt Thô
                  </button>
                </div>
                <div class="article-prompt-card" style="margin-top: 2px;">
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.85rem;">${PROMPT_UPGRADE_BEFORE}</pre>
                </div>
                <div style="font-size: 0.84rem; color: #991b1b; margin-top: 4px; line-height: 1.5;">
                  <strong>Hậu quả:</strong> AI sinh ra 60 phút giáo viên đọc lại 4 biểu hiện toàn cầu hóa trong sách giáo khoa, 15 phút hỏi đáp chung chung ("Toàn cầu hóa là gì?") và 15 phút bảo học sinh về nhà học thuộc lòng. Học sinh hoàn toàn không biết liên hệ thực tế.
                </div>
              </div>

              <!-- After -->
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 0.85rem; font-weight: 700; color: #16a34a;">✅ 2. Câu lệnh chuẩn đầy đủ (Bám sát trang 9-12 SGK Địa lí 11, có hoạt động tranh luận)</span>
                  <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_AFTER)}'), 'Đã sao chép prompt chuẩn!')">
                    Sao chép Prompt Chuẩn
                  </button>
                </div>
                <div class="article-prompt-card" style="margin-top: 2px;">
                  <pre class="article-prompt-code" style="padding: 14px 16px; font-size: 0.85rem; max-height: 240px; overflow-y: auto;">${PROMPT_UPGRADE_AFTER}</pre>
                </div>
                <div style="font-size: 0.84rem; color: #166534; margin-top: 4px; line-height: 1.5;">
                  <strong>Ưu điểm:</strong> Nêu rõ học sinh lớp 11 hay nhầm lẫn giữa toàn cầu hóa và khu vực hóa, có tình huống chiếc điện thoại thông minh khơi gợi tò mò, có bài tập nhóm phân tích số liệu bảng biểu trang 9-11 SGK và bài tập xử lý nông sản xuất khẩu.
                </div>
              </div>
            </div>

            <!-- Kết luận khởi động -->
            <div style="margin-top: 14px; padding: 12px 16px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; font-size: 0.88rem; color: #1e3a8a;">
              <strong>Sản phẩm đạt được:</strong> Rút ra 3 nguyên tắc viết lệnh cho AI: (1) Chỉ rõ bài học và số trang trong SGK; (2) Viết mục tiêu bằng động từ cụ thể (phân tích, so sánh); (3) Yêu cầu có hoạt động thực tế để học sinh làm việc, không giảng suông.
            </div>
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- HOẠT ĐỘNG 2: PHƯƠNG PHÁP & CÂU LỆNH MẪU                               -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #dcfce7; color: #15803d; font-weight: 800; font-size: 0.85rem; padding: 3px 10px; border-radius: 4px;">Hoạt động 2</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Phương Pháp Viết Lệnh Chuẩn & Bộ 6 Câu Lệnh Mẫu (50 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 50 phút</span>
          </div>

          <!-- Mục tiêu tự nhiên, dễ hiểu -->
          <div style="margin-bottom: 18px; background: #f8fafc; border-left: 4px solid #10b981; padding: 10px 14px; border-radius: 0 6px 6px 0;">
            <strong style="color: #065f46; font-size: 0.9rem;">Mục tiêu phần này:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.88rem; color: #334155; line-height: 1.6;">
              Nắm chắc nguyên tắc 3 chân kiềng <strong>(Mục tiêu &rarr; Luyện tập &rarr; Kiểm tra)</strong>, biết cách chọn động từ cụ thể khi ra lệnh cho AI và lấy bộ 6 câu lệnh mẫu để chuẩn bị sang phần thực hành.
            </p>
          </div>

          <!-- PHẦN 1: GIẢI THÍCH SƠ ĐỒ NGUYÊN TẮC ĂN KHỚP -->
          <div style="margin-bottom: 24px;">
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 6px;">
              1. Nguyên tắc 3 chân kiềng: "Nói gì &rarr; Luyện nấy &rarr; Thi nấy"
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.65; margin: 0 0 12px 0;">
              Khi nhờ AI soạn giáo án, lỗi phổ biến nhất là <strong>"đầu voi đuôi chuột"</strong>: AI viết mục tiêu rất to tát, nhưng bên dưới lại tạo ra một tiết học giáo viên đứng đọc cho học sinh chép, và câu hỏi kiểm tra thì toàn hỏi thuộc lòng. Sơ đồ bên dưới giúp bạn kiểm soát để AI không làm sai:
            </p>

            <!-- Hình ảnh sơ đồ -->
            <div class="article-image-figure" style="margin: 14px 0; text-align: center;">
              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 8px; display: inline-block; max-width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <img src="assets/images/bai3/constructive-alignment.png" alt="Sơ đồ 3 trụ cột liên kết tương thích: Chuẩn đầu ra — Hoạt động dạy học — Đánh giá đo lường" style="max-width: 100%; max-height: 360px; height: auto; border-radius: 4px; display: block;" />
              </div>
              <p style="font-size: 0.83rem; color: #64748b; margin-top: 6px; font-style: italic;">
                <strong>Hình 3.1:</strong> Sơ đồ 3 trụ cột liên kết chặt chẽ (Chuẩn đầu ra &mdash; Hoạt động dạy học &mdash; Đánh giá đo lường).
              </p>
            </div>

            <!-- Khối giải thích chi tiết 3 cột bằng ngôn ngữ gần gũi -->
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 16px; margin: 14px 0;">
              <div style="font-weight: 700; color: #166534; font-size: 0.92rem; margin-bottom: 8px;">
                💡 Giải thích chi tiết 3 cột trong sơ đồ trên (Qua ví dụ Bài 2 Địa lí 11):
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.87rem; color: #1e293b; line-height: 1.6;">
                <div>
                  <strong style="color: #1e40af;">• Cột 1 - Chuẩn đầu ra (Mục tiêu):</strong> Xác định rõ học sinh <em>làm được việc gì cụ thể</em> sau bài học. Ví dụ: Học sinh <em>"Phân tích được cơ hội và thách thức của Việt Nam khi gia nhập kinh tế thế giới"</em> (không dùng từ mơ hồ như "hiểu bài", "nắm được kiến thức").
                </div>
                <div>
                  <strong style="color: #065f46;">• Cột 2 - Hoạt động dạy học (Luyện tập trên lớp):</strong> Giáo viên phải cho học sinh <em>luyện tập đúng việc đã đặt ra ở Cột 1</em>. Ví dụ: Cho học sinh chia nhóm mổ xẻ số liệu xuất nhập khẩu trang 10 SGK Địa lí 11 để tự tìm ra cơ hội, chứ không bắt học sinh ngồi chép định nghĩa suông.
                </div>
                <div>
                  <strong style="color: #b45309;">• Cột 3 - Đánh giá đo lường (Đề thi):</strong> Đề kiểm tra phải <em>đo đúng năng lực đã luyện ở Cột 2</em>. Cho tình huống thực tế để học sinh vận dụng phân tích, chấm điểm theo barem rõ ràng.
                </div>
              </div>

              <!-- Ví dụ thực tế về câu hỏi tình huống -->
              <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #86efac; font-size: 0.86rem; color: #15803d; line-height: 1.6;">
                <strong>Ví dụ tránh lệch pha:</strong> Nếu mục tiêu yêu cầu học sinh <em>"Phân tích cơ hội..."</em>, nhưng đề thi chỉ hỏi thuộc lòng <em>"Toàn cầu hóa là gì?"</em> thì học sinh chỉ cần chép vẹt sách giáo khoa là được điểm tối đa &rarr; Đề thi như vậy không đo lường được xem học sinh có biết phân tích hay không.
              </div>
            </div>
          </div>

          <!-- PHẦN 2: BẢNG CHỌN ĐỘNG TỪ HÀNH ĐỘNG -->
          <div style="margin-bottom: 24px;">
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 6px;">
              2. Bảng chọn động từ cụ thể để ra lệnh cho AI
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 10px 0;">
              Khi yêu cầu AI viết mục tiêu bài học hoặc bài tập, hãy thay thế những từ mơ hồ khó kiểm tra bằng các động từ hành động cụ thể sau:
            </p>

            <!-- Bảng chọn động từ -->
            <div style="overflow-x: auto; margin: 12px 0;">
              <table class="article-matrix-table" style="margin-top: 0; font-size: 0.86rem;">
                <thead>
                  <tr>
                    <th style="width: 18%;">Mức độ bài học</th>
                    <th style="width: 26%;">Động từ hành động nên dùng (Địa lí 11)</th>
                    <th style="width: 26%;">Từ mơ hồ cần tránh</th>
                    <th style="width: 30%;">Ví dụ câu lệnh ra lệnh cho AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Nhớ lại</strong></td>
                    <td>Trình bày, liệt kê, nêu tên các tổ chức.</td>
                    <td>"Học sinh nắm được khái niệm..."</td>
                    <td>"Liệt kê đúng 4 biểu hiện của toàn cầu hoá trang 9 SGK..."</td>
                  </tr>
                  <tr>
                    <td><strong>2. Hiểu rõ</strong></td>
                    <td>Giải thích, so sánh, phân loại.</td>
                    <td>"Học sinh hiểu được ý nghĩa..."</td>
                    <td>"Giải thích vì sao thương mại thế giới tăng nhanh hơn GDP..."</td>
                  </tr>
                  <tr>
                    <td><strong>3. Áp dụng</strong></td>
                    <td>Tính toán số liệu, vẽ biểu đồ, xử lý dữ liệu.</td>
                    <td>"Biết cách đọc biểu đồ..."</td>
                    <td>"Dựa vào bảng số liệu trang 10 SGK, tính tốc độ tăng trưởng..."</td>
                  </tr>
                  <tr>
                    <td><strong>4. Phân tích</strong></td>
                    <td>Đối chiếu, mổ xẻ nguyên nhân, chỉ ra tác động.</td>
                    <td>"Xem xét các mặt tích cực..."</td>
                    <td>"Phân tích cơ hội và thách thức của nông sản Việt Nam..."</td>
                  </tr>
                  <tr>
                    <td><strong>5. Đánh giá</strong></td>
                    <td>Phán đoán, bảo vệ quan điểm, nhận định.</td>
                    <td>"Có ý thức về hội nhập..."</td>
                    <td>"Đánh giá tác động của cuộc cách mạng 4.0 đến việc làm tại VN..."</td>
                  </tr>
                  <tr>
                    <td><strong>6. Sáng tạo</strong></td>
                    <td>Đề xuất giải pháp, lập kế hoạch hành động.</td>
                    <td>"Nâng cao tư duy thực tế..."</td>
                    <td>"Đề xuất 2 giải pháp giúp doanh nghiệp dệt may xuất khẩu..."</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- PHẦN 3: BỘ 6 CÂU LỆNH MẪU SẴN SÀNG SỬ DỤNG -->
          <div>
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 6px;">
              3. Bộ 6 câu lệnh mẫu sẵn sàng sử dụng cho Bài 2 SGK Địa Lí 11
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 12px 0;">
              Các câu lệnh dưới đây đã được viết chuẩn theo nguyên tắc trên. Bạn chỉ cần bấm <strong>Sao chép</strong> để dán vào AI khi thực hành ở <strong>Hoạt động 3</strong>:
            </p>

              <!-- Thư viện 6 Prompts -->
              <div style="display: flex; flex-direction: column; gap: 12px;">
                
                <!-- P1 -->
                <div class="article-prompt-card">
                  <div class="article-prompt-header">
                    <span class="article-prompt-title">Prompt 01: Viết Mục Tiêu Bài Dạy SGK Địa Lí 11 Đo Lường Được</span>
                    <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P1)}'), 'Đã sao chép Prompt 1!')">
                      <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Sao chép Prompt 1
                    </button>
                  </div>
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 160px; overflow-y: auto;">${LIB_P1}</pre>
                </div>

                <!-- P2 -->
                <div class="article-prompt-card">
                  <div class="article-prompt-header">
                    <span class="article-prompt-title">Prompt 02: Lập Kế Hoạch 4 Hoạt Động Khám Phá Bài 2 Địa Lí 11</span>
                    <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P2)}'), 'Đã sao chép Prompt 2!')">
                      <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Sao chép Prompt 2
                    </button>
                  </div>
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 160px; overflow-y: auto;">${LIB_P2}</pre>
                </div>

                <!-- P3 -->
                <div class="article-prompt-card">
                  <div class="article-prompt-header">
                    <span class="article-prompt-title">Prompt 03: Tạo Cặp Ví Dụ Đúng vs Sai (Toàn Cầu Hóa vs Khu Vực Hóa)</span>
                    <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P3)}'), 'Đã sao chép Prompt 3!')">
                      <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Sao chép Prompt 3
                    </button>
                  </div>
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 160px; overflow-y: auto;">${LIB_P3}</pre>
                </div>

                <!-- P4 -->
                <div class="article-prompt-card">
                  <div class="article-prompt-header">
                    <span class="article-prompt-title">Prompt 04: Chia Bài Tập Địa Lí 11 Theo 3 Mức Độ (6đ &rarr; 8đ &rarr; 10đ)</span>
                    <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P4)}'), 'Đã sao chép Prompt 4!')">
                      <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Sao chép Prompt 4
                    </button>
                  </div>
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 160px; overflow-y: auto;">${LIB_P4}</pre>
                </div>

                <!-- P5 -->
                <div class="article-prompt-card">
                  <div class="article-prompt-header">
                    <span class="article-prompt-title">Prompt 05: Tạo 4 Câu Hỏi Trắc Nghiệm Khởi Động Đầu Giờ Địa Lí 11</span>
                    <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P5)}'), 'Đã sao chép Prompt 5!')">
                      <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Sao chép Prompt 5
                    </button>
                  </div>
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 160px; overflow-y: auto;">${LIB_P5}</pre>
                </div>

                <!-- P6 -->
                <div class="article-prompt-card">
                  <div class="article-prompt-header">
                    <span class="article-prompt-title">Prompt 06: Phiếu Tự Tổng Kết Nhanh Sau Lớp Bài 2 Địa Lí 11</span>
                    <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P6)}'), 'Đã sao chép Prompt 6!')">
                      <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Sao chép Prompt 6
                    </button>
                  </div>
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 160px; overflow-y: auto;">${LIB_P6}</pre>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- HOẠT ĐỘNG 3: LUYỆN TẬP                                               -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #fef3c7; color: #b45309; font-weight: 800; font-size: 0.85rem; padding: 3px 10px; border-radius: 4px;">Hoạt động 3</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Luyện Tập: Thực Hành Soạn Kế Hoạch Bài Dạy SGK Địa Lí 11 (80 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 80 phút</span>
          </div>

          <div style="margin-bottom: 14px;">
            <strong style="color: #92400e; font-size: 0.92rem;">• Mục tiêu:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Tự tay mở file PDF <strong>Sách Giáo Khoa Địa Lí 11</strong> (Bài 2: Trang 9-12 hoặc bài bất kỳ trong sách), sử dụng các câu lệnh mẫu để hoàn thành 01 Kế hoạch bài dạy chi tiết 90 phút và trực tiếp đối chiếu, sửa lỗi số liệu của AI.
            </p>
          </div>

          <!-- HỌC LIỆU THỰC HÀNH: MỞ FILE PDF SGK ĐỊA LÍ 11 -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 18px; margin: 16px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="background: #10b981; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem;">
                PDF
              </div>
              <div>
                <div style="font-weight: 700; color: #065f46; font-size: 0.95rem;">Học liệu thực hành: Sách Giáo Khoa Địa Lí 11 — Kết Nối Tri Thức Với Cuộc Sống</div>
                <div style="font-size: 0.83rem; color: #047857;">File PDF gốc 171 trang có sẵn trong thư mục dự án • Trọng tâm thực hành: Bài 2 (Trang 9 – 12)</div>
              </div>
            </div>
            <a href="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" target="_blank" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Mở File PDF SGK Địa Lí 11
            </a>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #92400e; font-size: 0.92rem;">• Các bước thực hiện thực tế:</strong>
            
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
              
              <!-- Chặng 3.1 -->
              <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 14px 16px;">
                <div style="font-weight: 700; color: #b45309; font-size: 0.92rem; margin-bottom: 4px;">
                  Chặng 3.1 (30 phút): Viết mục tiêu hành động & Lập khung 4 hoạt động Bài 2
                </div>
                <div style="font-size: 0.88rem; color: #475569; line-height: 1.6;">
                  Mở file PDF SGK Địa lí 11 tại trang 9:
                  <br>• Dùng <strong>Prompt 1</strong> viết 3 mục tiêu hành động cụ thể cho Bài 2.
                  <br>• Dùng <strong>Prompt 2</strong> để AI gợi ý khung tiến trình 4 hoạt động cân đối giữa việc dạy và việc học.
                </div>
              </div>

              <!-- Chặng 3.2 -->
              <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 14px 16px;">
                <div style="font-weight: 700; color: #b45309; font-size: 0.92rem; margin-bottom: 4px;">
                  Chặng 3.2 (50 phút): Tạo cặp ví dụ đối chiếu & Đối chiếu bảng số liệu thật
                </div>
                <div style="font-size: 0.88rem; color: #475569; line-height: 1.6;">
                  • Dùng <strong>Prompt 3</strong> tạo cặp ví dụ phân biệt WTO và ASEAN/EU.
                  <br>• Dùng <strong>Prompt 4</strong> chia bài tập trên lớp thành 3 mức độ (Cơ bản, Khá, Thử thách).
                  <br>• <strong>Kiểm tra số liệu SGK:</strong> Mở trang 10-11 SGK Địa lí 11, đối chiếu bảng số liệu FDI và thương mại thế giới do AI đưa ra xem có bịa đặt số liệu hay không, chỉnh sửa lại cho đúng 100% với sách giáo khoa.
                </div>
              </div>

            </div>

            <div style="margin-top: 14px; padding: 12px 16px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; color: #1e293b;">
              <strong>Sản phẩm cần hoàn thành:</strong> 01 File văn bản Kế hoạch bài dạy hoàn chỉnh cho Bài 2 Địa lí 11 đáp ứng đủ 4 tiêu chuẩn: (1) Mục tiêu rõ ràng; (2) Tiến trình 4 hoạt động cân đối; (3) Có ví dụ đối chiếu; (4) Số liệu đã được đối chiếu chuẩn xác với SGK Địa lí 11.
            </div>
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- HOẠT ĐỘNG 4: VẬN DỤNG / TIÊU CHÍ KẾT QUẢ                              -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #f3e8ff; color: #7e22ce; font-weight: 800; font-size: 0.85rem; padding: 3px 10px; border-radius: 4px;">Hoạt động 4</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Vận Dụng: Tiêu Chí Nghiệm Thu Kế Hoạch Bài Dạy (30 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 30 phút</span>
          </div>

          <div style="margin-bottom: 14px;">
            <strong style="color: #6b21a8; font-size: 0.92rem;">• Mục tiêu:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Tự rà soát và đối chiếu kế hoạch bài dạy vừa soạn với bộ tiêu chí chất lượng, phát hiện các điểm chưa ăn khớp hoặc lỗi số liệu của AI để hoàn thiện bản giáo án hoàn chỉnh nhất.
            </p>
          </div>

          <div>
            <strong style="color: #6b21a8; font-size: 0.92rem;">• Tiêu chí đánh giá kết quả bài dạy (Bảng tự kiểm tra 4 tiêu chí cốt lõi):</strong>
            <p style="margin: 4px 0 10px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Dùng bảng tiêu chí bên dưới để tự kiểm tra chất lượng bản Kế hoạch bài dạy Bài 2 Địa lí 11:
            </p>

            <table class="article-matrix-table" style="font-size: 0.88rem; margin-bottom: 14px;">
              <thead>
                <tr>
                  <th style="width: 25%;">Tiêu chí kết quả</th>
                  <th style="width: 48%;">Yêu cầu cần đạt cụ thể</th>
                  <th style="width: 27%;">Kết quả tự đánh giá</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Mục tiêu bài học (Đo lường được)</strong></td>
                  <td>Dùng đúng các động từ hành động cụ thể (liệt kê, giải thích, phân tích, tính toán...); không dùng các từ mơ hồ khó đo lường như <em>"hiểu bài"</em>, <em>"nắm được kiến thức"</em>.</td>
                  <td>Đạt / Cần sửa lại động từ</td>
                </tr>
                <tr>
                  <td><strong>2. Hoạt động trên lớp (Tránh thụ động)</strong></td>
                  <td>Học sinh có hoạt động tự tay làm việc (đọc số liệu, xử lý bảng biểu trang 9-11 SGK, thảo luận nhóm), không bị bắt ngồi nghe giáo viên đọc chép quá 15 phút.</td>
                  <td>Đạt / Cần thêm việc cho HS</td>
                </tr>
                <tr>
                  <td><strong>3. Cặp ví dụ đối chiếu (Rõ ranh giới)</strong></td>
                  <td>Có đủ cặp ví dụ chuẩn (toàn cầu hóa - WTO, chuỗi Boeing) và ví dụ sai/đối chiếu (khu vực hóa - ASEAN, EU) để học sinh không bị nhầm lẫn ranh giới khái niệm.</td>
                  <td>Đạt / Cần bổ sung ví dụ</td>
                </tr>
                <tr>
                  <td><strong>4. Đối chiếu số liệu SGK (Chính xác 100%)</strong></td>
                  <td>Đã mở file PDF đối chiếu các số liệu FDI, thương mại và GDP với trang 9–11 SGK Địa lí 11; đã sửa lại chuẩn xác các số liệu bịa đặt do AI đưa ra.</td>
                  <td>Đạt 100% chuẩn SGK / Cần sửa lại</td>
                </tr>
              </tbody>
            </table>

            <div style="padding: 12px 16px; background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 6px; font-size: 0.88rem; color: #581c87;">
              <strong>Sản phẩm hoàn thành:</strong> 01 Bản Kế hoạch bài dạy hoàn chỉnh cho Bài 2 Địa lí 11 đã được tự kiểm tra đạt đủ 4 tiêu chí trên, sẵn sàng đưa vào giảng dạy thực tế.
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- IV. HƯỚNG DẪN VỀ NHÀ VÀ DẶN DÒ                                           -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag" style="background-color: #c2410c;">DẶN DÒ</span>
          <h2 class="article-section-title">Hướng Dẫn Về Nhà & Dặn Dò</h2>
        </div>
        <p class="article-prose">
          Hai nhiệm vụ cần hoàn thành tại nhà sau buổi học:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-top: 10px;">
          
          <!-- Hộp 1: Ôn tập & Hoàn thiện -->
          <div style="background: #ffffff; border: 1px solid #fed7aa; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(234,88,12,0.06);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #ffedd5; color: #c2410c; font-weight: 800; font-size: 0.82rem; padding: 2px 8px; border-radius: 4px;">Nhiệm vụ 1</span>
              <h3 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0;">Ôn tập bài cũ & Hoàn thiện bài soạn</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #475569; line-height: 1.65;">
              <li>Ôn lại bài cũ: Xem lại các động từ hành động và cách thiết kế 4 hoạt động dạy học khám phá.</li>
              <li>Hoàn thiện bản Kế hoạch bài dạy Bài 2 Địa lí 11 theo các tiêu chí đã đối chiếu.</li>
              <li>Lưu trữ file Kế hoạch bài dạy hoàn chỉnh vào thư mục học tập cá nhân.</li>
            </ul>
          </div>

          <!-- Hộp 2: Chuẩn bị Buổi 4 & Buổi 5 -->
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(37,99,235,0.06);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #eff6ff; color: #1d4ed8; font-weight: 800; font-size: 0.82rem; padding: 2px 8px; border-radius: 4px;">Nhiệm vụ 2</span>
              <h3 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0;">Chuẩn bị học liệu cho Buổi 4 & Buổi 5</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #475569; line-height: 1.65;">
              <li><strong>Nội dung Buổi 4 & Buổi 5 tiếp theo:</strong> <em>"AI Tạo Nội Dung & Slide Bài Giảng Từ SGK Địa Lí 11 Với NotebookLM & Gamma"</em>.</li>
              <li>Lấy chính Kế hoạch bài dạy Bài 2 vừa hoàn thiện hôm nay làm đầu vào để tự động hóa sinh ra: Dàn ý Slide bài giảng, Phiếu học tập điền khuyết (Handout) và xuất sang Gamma để tạo slide PowerPoint tự động.</li>
              <li>Giữ sẵn file <code>sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf</code> trên máy để nạp trực tiếp vào NotebookLM ở các buổi tiếp theo.</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  `;

  const session3Data = {
    id: 3,
    number: 3,
    title: "Buổi 3: AI Thiết Kế Bài Giảng Và Học Phần",
    topic: "Thiết kế Bài giảng & Học phần",
    tools: ["ChatGPT", "Gemini", "NotebookLM"],
    duration: "180 phút (3 giờ)",
    deliverable: "01 Kế hoạch bài dạy Bài 2 SGK Địa Lí 11 hoàn chỉnh theo tiến trình 4 hoạt động khám phá",
    overview: "Thực hành dùng AI thiết kế bài dạy hoàn chỉnh dựa trên Sách Giáo Khoa Địa Lí 11 (Bộ Kết Nối Tri Thức Với Cuộc Sống) — Trọng tâm là Bài 2: Toàn cầu hoá và khu vực hoá kinh tế (Trang 9 – 12).",
    articleHtml: articleHtml,
    objectives: [
      "1. Kiến thức: Nắm vững nguyên tắc ăn khớp giữa mục tiêu, hoạt động học và đề kiểm tra trên bài mẫu SGK Địa lí 11.",
      "2. Năng lực: Làm chủ kỹ năng Prompt Engineering chuyển hóa nội dung SGK Địa lí 11 thành mục tiêu hành động và bài tập phân tầng.",
      "3. Phẩm chất: Đề cao tính cẩn thận đối chiếu số liệu SGK, trung thực và tinh thần trách nhiệm với người học."
    ],
    timeline: [
      { time: "00 - 15p", title: "Hoạt động 1: Khởi động (Tạo tình huống xuất phát)", desc: "So sánh câu lệnh thô (1 dòng) vs Câu lệnh chuẩn đầy đủ trên Bài 2 SGK Địa lí 11." },
      { time: "15 - 65p", title: "Hoạt động 2: Khám phá kiến thức mới", desc: "4 bước: Giao việc -> Học sinh làm -> Báo cáo thảo luận -> Chốt kiến thức & Bàn giao 6 câu lệnh mẫu cho SGK Địa lí 11." },
      { time: "65 - 145p", title: "Hoạt động 3: Luyện tập tại lớp", desc: "Mở file SGK Địa lí 11 (Bài 2), tự tay dùng AI soạn 01 Kế hoạch bài dạy hoàn chỉnh và đối chiếu số liệu thật." },
      { time: "145 - 175p", title: "Hoạt động 4: Vận dụng / Mở rộng", desc: "Đổi bài kiểm tra chéo theo bảng kiểm tra 4 câu hỏi thực tế." },
      { time: "175 - 180p", title: "IV. Hướng dẫn về nhà & Dặn dò", desc: "Hoàn thiện bài dạy, chuẩn bị học liệu đầu vào cho Buổi 4 và Buổi 5." }
    ],
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
