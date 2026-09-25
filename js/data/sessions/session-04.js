/**
 * SESSION 4: DÙNG AI TẠO TRỌN BỘ TÀI LIỆU BÀI GIẢNG
 * (js/data/sessions/session-04.js)
 * Căn cứ theo: "Lộ trình đào tạo 16 buổi: AI ứng dụng trong giảng dạy đại học"
 * NỘI DUNG ĐƯỢC TINH GỌN, DỄ HIỂU, HẠN CHẾ THUẬT NGỮ PHỨC TẠP.
 */

(function() {
  // PROMPTS SO SÁNH THỬ NGHIỆM
  const PROMPT_UPGRADE_BEFORE = `Hãy tạo cho tôi tài liệu phát tay và bài tập về Chuỗi giá trị của Michael Porter cho sinh viên.`;

  const PROMPT_UPGRADE_AFTER = `BỐI CẢNH & NHIỆM VỤ:
Tôi là Giảng viên môn Quản trị Kinh doanh, đang chuẩn bị bài giảng 90 phút cho sinh viên năm 3.
Chủ đề bài học: "Phân tích Chuỗi Giá Trị của Michael Porter — Ứng dụng thực tế vào chuỗi bán lẻ tại Việt Nam (như WinCommerce hoặc Thế Giới Di Động)".
Mục tiêu: Sinh viên nhận biết được các khâu tạo ra giá trị và đề xuất được cách cắt giảm chi phí vận hành.

HÃY SOẠN CHO TÔI TRỌN BỘ 4 TÀI LIỆU DƯỚI ĐÂY:

1. DÀN Ý SLIDE (10 slide ngắn gọn):
- Mỗi slide gồm: Tiêu đề ngắn, tối đa 3 ý chính (mỗi ý dưới 15 từ) và Lời giảng gợi ý cho Thầy/Cô (khoảng 40 từ).

2. PHIẾU HỌC TẬP PHÁT TẬN TAY SINH VIÊN (2 trang):
- Tóm tắt lý thuyết nhưng chừa các chỗ trống [.......] ở những từ khóa quan trọng để sinh viên nghe giảng và tự điền vào.
- 01 sơ đồ các khâu còn để trống để sinh viên tự nối và ghi chú trong giờ thảo luận.
- 02 câu hỏi ngắn cho sinh viên thảo luận cặp đôi 2 phút.

3. TÌNH HUỐNG THỰC TẾ VIỆT NAM (khoảng 350 từ):
- Tình huống về bài toán tối ưu chi phí vận chuyển hàng hóa của chuỗi siêu thị mini tại Việt Nam.
- Kèm 3 câu hỏi thảo luận từ dễ đến khó.

4. 3 CÂU HỎI SINH VIÊN HAY HIỂU NHẦM NHẤT:
- Nêu 3 điểm sinh viên hay nhầm lẫn nhất về bài học này kèm lời giải thích ngắn gọn, dễ hiểu.

LƯU Ý QUAN TRỌNG:
- Dùng từ ngữ sư phạm trong sáng, dễ hiểu, tránh lý thuyết sáo rỗng.
- Nếu đưa ra con số hay dữ liệu thực tế, hãy ghi chú [CẦN GIẢNG VIÊN KIỂM TRA LẠI] để tôi rà soát trước khi dùng.`;

  // 5 CÂU LỆNH MẪU THỰC TẾ VÀ DỄ DÙNG NHẤT
  const LIB_P1 = `Tôi là Giảng viên môn [Tên môn học], chuẩn bị dạy bài: "[Tên bài giảng]".
Đối tượng: Sinh viên năm [Mấy], ngành [Tên ngành].
Thời lượng bài giảng: [45 hoặc 90 phút].

Hãy soạn cho tôi Dàn ý Slide trình chiếu gồm [8 đến 10] slide theo quy tắc:
- Mỗi slide có: Tiêu đề hành động, tối đa 3 ý chính ngắn gọn (mỗi ý không quá 12 từ).
- Gợi ý hình ảnh hoặc sơ đồ nên vẽ trên slide.
- Lời giảng gợi ý (Speaker Notes) khoảng 40-50 từ để giảng viên giải thích bằng ví dụ đời thường.`;

  const LIB_P2 = `Tôi cần làm một Phiếu học tập (tài liệu phát tay in sẵn 1-2 trang) cho sinh viên môn [Tên môn học], chủ đề: "[Tên chủ đề]".

Hãy soạn nội dung theo dạng tương tác:
1. Tóm tắt 3 ý cốt lõi nhất của bài, nhưng hãy để trống các từ khóa quan trọng dưới dạng [.......] để sinh viên nghe giảng và tự tay điền vào.
2. Thiết kế một bảng so sánh hoặc sơ đồ còn khuyết để sinh viên vẽ/nối các ý trong lúc học nhóm.
3. Đưa ra 02 câu hỏi tình huống ngắn để sinh viên suy nghĩ và ghi câu trả lời trực tiếp vào phiếu trong 3 phút.`;

  const LIB_P3 = `Hãy viết cho tôi 01 Bài tập tình huống thực tế (Case study) dài khoảng 300 - 400 từ cho môn [Tên môn học], chủ đề: "[Tên chủ đề]".

YÊU CẦU:
1. Tình huống gắn với một doanh nghiệp hoặc vấn đề thực tế quen thuộc tại Việt Nam (ví dụ: VinFast, Bách Hóa Xanh, Viettel, Shopee hoặc các mặt hàng nông sản).
2. Nêu ra một vấn đề khó khăn mà doanh nghiệp đang gặp phải buộc người quản lý phải chọn cách xử lý.
3. Kèm 03 câu hỏi thảo luận:
- Câu 1: Xác định nguyên nhân của vấn đề.
- Câu 2: Nhận xét về cách doanh nghiệp đã làm.
- Câu 3: Nếu là người phụ trách, sinh viên sẽ giải quyết như thế nào?`;

  const LIB_P4 = `Trong môn [Tên môn học], khi học về chủ đề "[Tên chủ đề]", sinh viên thường hay hiểu nhầm hoặc làm sai những điểm nào?

Hãy chỉ ra 05 câu hỏi hoặc ngộ nhận phổ biến nhất của sinh viên và giải thích:
- Nêu rõ sinh viên thường nhầm lẫn điều gì và vì sao lại nhầm.
- Giải thích lại bằng một ví dụ thực tế hoặc đời thường thật dễ hiểu.
- Đúc kết 1 câu ngắn gọn để sinh viên dễ nhớ và không bao giờ bị nhầm nữa.`;

  const LIB_P5 = `Hãy đóng vai một đồng nghiệp phản biện khó tính, đọc lại đoạn nội dung bài giảng dưới đây do AI vừa viết và chỉ ra các điểm chưa ổn:

[Dán nội dung cần kiểm tra vào đây]

HÃY GIÚP TÔI KIỂM TRA:
1. Có tác giả, cuốn sách, năm xuất bản hay số liệu nào có vẻ bịa đặt hoặc không có thật không?
2. Có ví dụ nào xa lạ với thực tế tại Việt Nam không?
3. Có phần nào viết lý thuyết chung chung, đọc xong sinh viên không biết áp dụng vào đâu không?
4. Đề xuất cách viết lại ngắn gọn và thực tế hơn cho những đoạn bị lỗi trên.`;

  const articleHtml = `
    <div class="session-direct-article">

      <!-- PHẦN 1: CHUẨN ĐẦU RA -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 1</span>
          <h2 class="article-section-title">Mục Tiêu Đạt Được Sau Buổi 4</h2>
        </div>
        <p class="article-prose">
          Sau buổi học này, Thầy/Cô sẽ làm chủ cách dùng AI để soạn nhanh trọn bộ tài liệu bài giảng vừa đủ dùng, vừa dễ hiểu và an toàn:
        </p>
        <table class="article-matrix-table">
          <thead>
            <tr>
              <th style="width: 30%;">Mục tiêu chính</th>
              <th style="width: 70%;">Kết quả đạt được cụ thể</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Soạn nhanh bộ tài liệu bài dạy</strong></td>
              <td>Dùng AI tạo trọn bộ tài liệu cho 1 bài giảng trong 20 phút: Dàn ý Slide, Phiếu học tập phát cho sinh viên, Tình huống thực tế và Câu hỏi thảo luận.</td>
            </tr>
            <tr>
              <td><strong>2. Làm tài liệu tương tác, dễ nhớ</strong></td>
              <td>Biết cách yêu cầu AI tạo phiếu học tập có chỗ trống [.......] để sinh viên chú ý nghe giảng và tự tay ghi chép, không còn tình trạng sinh viên bấm điện thoại trên lớp.</td>
            </tr>
            <tr>
              <td><strong>3. Biết kiểm tra và bắt lỗi của AI</strong></td>
              <td>Biết cách phát hiện số liệu cũ, tác giả bịa đặt hoặc các ví dụ nước ngoài xa lạ để sửa lại cho sát với thực tế giảng dạy tại Việt Nam.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- PHẦN 2: QUY TRÌNH 4 BƯỚC -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 2</span>
          <h2 class="article-section-title">Quy Trình 4 Bước Dùng AI Tạo Bộ Tài Liệu Bài Giảng</h2>
        </div>
        <p class="article-prose">
          Để tài liệu tạo ra dùng được ngay và không bị sai sót, Thầy/Cô chỉ cần làm theo 4 bước đơn giản sau:
        </p>

        <!-- Sơ đồ quy trình 4 bước đơn giản -->
        <div class="article-image-figure" style="margin: 20px 0 24px 0; text-align: center;">
          <div class="zoomable-image-wrap" onclick="window.openImageLightbox('assets/images/bai4/content-pipeline.png', 'Quy Trình 4 Bước Dùng AI Tạo Bộ Tài Liệu Bài Giảng', 'Bước 1: Ra lệnh cho AI -> Bước 2: Kiểm tra & Sửa lỗi -> Bước 3: Thêm phần tương tác cho sinh viên -> Bước 4: Xuất ra Slide và Tài liệu để dùng.')" style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 8px; display: inline-block; max-width: 100%; box-shadow: 0 2px 10px rgba(0,0,0,0.04);" title="Bấm vào để xem ảnh phóng to chi tiết">
            <img src="assets/images/bai4/content-pipeline.png" alt="Sơ đồ quy trình 4 bước dùng AI tạo bộ tài liệu bài giảng đơn giản, dễ hiểu" style="max-width: 100%; max-height: 480px; height: auto; border-radius: var(--radius-sm); display: block;" />
          </div>
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">
            <strong>Hình 4.1:</strong> Quy trình 4 bước dùng AI tạo tài liệu bài giảng nhanh chóng và chính xác.
          </p>
        </div>

        <p class="article-prose">
          Một bài giảng lên lớp thường chỉ cần <strong>5 loại tài liệu gọn nhẹ</strong> sau:
        </p>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <table class="article-matrix-table" style="margin-top: 0; border: none;">
            <thead>
              <tr>
                <th style="width: 25%;">Tài liệu cần có</th>
                <th style="width: 45%;">Tác dụng trên lớp</th>
                <th style="width: 30%;">Cách sử dụng nhanh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Dàn ý Slide trình chiếu</strong></td>
                <td>Chiếu trên màn hình: 8-10 slide, chữ ngắn gọn, có sẵn lời thoại gợi ý cho giảng viên.</td>
                <td>Dán dàn ý vào <strong>Canva</strong> hoặc <strong>Gamma</strong> để có slide đẹp ngay.</td>
              </tr>
              <tr>
                <td><strong>2. Phiếu học tập (Handout)</strong></td>
                <td>Tài liệu 1-2 trang in sẵn, có chừa chỗ trống để sinh viên vừa nghe giảng vừa tự điền vào.</td>
                <td>In phát cho sinh viên đầu giờ học hoặc gửi file trước buổi học.</td>
              </tr>
              <tr>
                <td><strong>3. Tình huống thực tế (Case study)</strong></td>
                <td>Một câu chuyện thực tế khoảng 1 trang A4 về doanh nghiệp Việt Nam để sinh viên làm việc nhóm.</td>
                <td>Cho sinh viên đọc và thảo luận nhóm 15-20 phút trong lớp.</td>
              </tr>
              <tr>
                <td><strong>4. Câu hỏi hay gặp (FAQ)</strong></td>
                <td>Giải thích trước 3-5 điểm mà sinh viên khóa trước hay hiểu sai hoặc hay làm nhầm.</td>
                <td>Chiếu lên cuối bài hoặc gửi cho sinh viên tự đọc trước khi thi.</td>
              </tr>
              <tr>
                <td><strong>5. Bài tập về nhà có thang điểm</strong></td>
                <td>Đề bài rõ ràng kèm bảng điểm mẫu (Rubric) cho biết làm thế nào thì được 8 điểm, 10 điểm.</td>
                <td>Giao cho sinh viên làm cá nhân hoặc làm theo nhóm nộp lại.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PHẦN 3: MẸO LÀM PHIẾU HỌC TẬP -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 3</span>
          <h2 class="article-section-title">Mẹo Làm Phiếu Học Tập Giúp Sinh Viên Tập Trung</h2>
        </div>
        <p class="article-prose">
          Thay vì in sẵn toàn bộ chữ trong tài liệu (sinh viên sẽ chỉ đọc lướt rồi bấm điện thoại), Thầy/Cô hãy dùng cách <strong>để trống từ khóa</strong> để sinh viên tự ghi chép:
        </p>

        <!-- Sơ đồ so sánh tài liệu -->
        <div class="article-image-figure" style="margin: 20px 0 24px 0; text-align: center;">
          <div class="zoomable-image-wrap" onclick="window.openImageLightbox('assets/images/bai4/active-handout-comparison.png', 'So Sánh: Tài Liệu In Sẵn Toàn Bộ Chữ vs. Phiếu Học Tập Tự Điền', 'Cách cũ: In sẵn toàn bộ chữ -> sinh viên lười ghi chép, nhanh quên. Cách mới: Chừa chỗ trống [.......] -> sinh viên tập trung nghe giảng để tự điền bài.')" style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 8px; display: inline-block; max-width: 100%; box-shadow: 0 2px 10px rgba(0,0,0,0.04);" title="Bấm vào để xem ảnh phóng to chi tiết">
            <img src="assets/images/bai4/active-handout-comparison.png" alt="Sơ đồ so sánh tài liệu in sẵn toàn bộ chữ và phiếu học tập tự điền khuyết" style="max-width: 100%; max-height: 480px; height: auto; border-radius: var(--radius-sm); display: block;" />
          </div>
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">
            <strong>Hình 4.2:</strong> So sánh tài liệu in sẵn toàn bộ chữ và phiếu học tập có chỗ trống cho sinh viên tự điền.
          </p>
        </div>

        <!-- 3 Mẹo đơn giản -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0; overflow: hidden;">
          <div style="padding: 12px 18px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #0f172a; font-size: 0.95rem;">
            3 Mẹo Đơn Giản Giúp Tài Liệu Đồng Bộ Và Không Bị Sai Lệch
          </div>
          <div style="padding: 16px 18px; font-size: 0.88rem; color: #334155; line-height: 1.65;">
            <div style="margin-bottom: 10px;">
              <strong style="color: #1e40af;">1. Cho AI biết trước danh sách từ ngữ chuyên ngành:</strong> Đưa sẵn 3-5 thuật ngữ quan trọng của bài để AI dùng đúng một cách gọi thống nhất, không bị mỗi chỗ dịch một kiểu.
            </div>
            <div style="margin-bottom: 10px;">
              <strong style="color: #0f766e;">2. Bài tập phải bám sát nội dung đã dạy:</strong> Những gì có trong đề bài tập về nhà phải là những nội dung sinh viên đã được hướng dẫn trên lớp, tránh để AI ra bài tập quá xa lạ.
            </div>
            <div>
              <strong style="color: #b45309;">3. Luôn đọc lại trước khi phát:</strong> Xem lại các con số, tên công ty và luật định mà AI đưa ra xem có đúng với thực tế hiện nay ở Việt Nam không.
            </div>
          </div>
        </div>
      </section>

      <!-- PHẦN 4: SO SÁNH CÂU LỆNH -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 4</span>
          <h2 class="article-section-title">Thử Nghiệm: Câu Lệnh Sơ Sài vs. Câu Lệnh Đầy Đủ</h2>
        </div>
        <p class="article-prose">
          Xem sự khác biệt khi yêu cầu AI soạn tài liệu cho cùng một bài học về Quản trị Kinh doanh:
        </p>

        <!-- Thẻ tình huống -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <div style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #f8fafc;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Ví dụ bài dạy thực tế</span>
            <span style="font-size: 0.8rem; color: #64748b; background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 8px; border-radius: 4px;">Môn: Quản trị • 90 phút</span>
          </div>
          <div style="padding: 14px 18px; font-size: 0.88rem; color: #334155; line-height: 1.6;">
            <strong>Chủ đề:</strong> <em>"Phân tích Chuỗi Giá Trị của Michael Porter trong chuỗi bán lẻ tại Việt Nam"</em>. Giảng viên cần chuẩn bị slide, phiếu học tập và bài tập tình huống cho sinh viên làm việc trên lớp.
          </div>
        </div>

        <!-- Before -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">1. Câu lệnh sơ sài (Chưa nâng cấp)</h4>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Câu Lệnh Sơ Sài</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_BEFORE)}'), 'Đã sao chép câu lệnh sơ sài!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép
              </button>
            </div>
            <pre class="article-prompt-code">${PROMPT_UPGRADE_BEFORE}</pre>
          </div>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 6px; line-height: 1.5;">
            <strong style="color: #dc2626;">Kết quả:</strong> AI trả về bài viết lý thuyết dài dòng giống hệt sách giáo khoa, không có chỗ cho sinh viên ghi chép, ví dụ chung chung không dùng được.
          </p>
        </div>

        <!-- After -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 6px;">2. Câu lệnh đầy đủ và rõ ràng (Đã nâng cấp)</h4>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Câu Lệnh Đầy Đủ</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_AFTER)}'), 'Đã sao chép câu lệnh đầy đủ!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép
              </button>
            </div>
            <pre class="article-prompt-code">${PROMPT_UPGRADE_AFTER}</pre>
          </div>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 6px; line-height: 1.5;">
            <strong style="color: #16a34a;">Kết quả:</strong> AI trả về đủ 4 phần gọn gàng: Slide ngắn gọn có gợi ý lời giảng, phiếu học tập có chỗ trống điền từ, tình huống thực tế tại Việt Nam và câu hỏi hay gặp để sinh viên ôn thi.
          </p>
        </div>
      </section>

      <!-- PHẦN 5: THƯ VIỆN CÂU LỆNH -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 5</span>
          <h2 class="article-section-title">5 Câu Lệnh Mẫu Thực Tế Dễ Dùng Ngay</h2>
        </div>
        <p class="article-prose">
          Thầy/Cô chỉ cần bấm nút sao chép, thay thông tin môn học của mình vào trong ngoặc vuông [......] rồi gửi cho AI:
        </p>

        <!-- Prompt 1 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">1. Soạn Dàn Ý Slide Bài Giảng Kèm Lời Giảng Viên</h4>
            <span style="font-size: 0.8rem; color: #64748b;">Slide ngắn gọn, dưới 12 từ/dòng, có sẵn lời thoại gợi ý</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 01: Dàn Ý Slide & Lời Giảng</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P1)}'), 'Đã sao chép Prompt 1!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P1}</pre>
          </div>
        </div>

        <!-- Prompt 2 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">2. Soạn Phiếu Học Tập Có Chỗ Trống Cho Sinh Viên Tự Điền</h4>
            <span style="font-size: 0.8rem; color: #64748b;">Tài liệu 1-2 trang in sẵn, buộc sinh viên chú ý nghe giảng</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 02: Phiếu Học Tập Tự Điền</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P2)}'), 'Đã sao chép Prompt 2!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P2}</pre>
          </div>
        </div>

        <!-- Prompt 3 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">3. Viết Bài Tập Tình Huống Thực Tế Tại Việt Nam</h4>
            <span style="font-size: 0.8rem; color: #64748b;">Câu chuyện quen thuộc, có bài toán khó và 3 câu hỏi thảo luận</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 03: Tình Huống Thực Tế</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P3)}'), 'Đã sao chép Prompt 3!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P3}</pre>
          </div>
        </div>

        <!-- Prompt 4 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">4. Soạn 5 Câu Hỏi Sinh Viên Hay Hiểu Nhầm Nhất (FAQ)</h4>
            <span style="font-size: 0.8rem; color: #64748b;">Chỉ ra chỗ sinh viên hay làm sai và cách nhớ dễ nhất</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 04: Giải Đáp Ngộ Nhận</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P4)}'), 'Đã sao chép Prompt 4!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P4}</pre>
          </div>
        </div>

        <!-- Prompt 5 -->
        <div style="margin-bottom: 22px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">5. Kiểm Tra Và Bắt Lỗi Trong Bài Do AI Viết</h4>
            <span style="font-size: 0.8rem; color: #64748b;">Nhờ AI tự rà soát xem có bịa số liệu hay viết sai thực tế không</span>
          </div>
          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 05: Kiểm Tra & Bắt Lỗi AI</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P5)}'), 'Đã sao chép Prompt 5!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép
              </button>
            </div>
            <pre class="article-prompt-code">${LIB_P5}</pre>
          </div>
        </div>
      </section>

      <!-- PHẦN 6: BÀI TẬP THỰC HÀNH -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 6</span>
          <h2 class="article-section-title">Bài Tập Thực Hành Tại Lớp (70 Phút)</h2>
        </div>
        <p class="article-prose">
          Thầy/Cô thực hành trực tiếp trên máy tính để tạo tài liệu cho một bài giảng thật của mình:
        </p>

        <!-- Thẻ bài tập -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <div style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #f8fafc;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Đề bài: Tạo Bộ Tài Liệu Cho 1 Bài Giảng Thật</span>
            <span style="font-size: 0.8rem; color: #64748b; background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 8px; border-radius: 4px;">Thời lượng: 70 phút</span>
          </div>

          <div style="padding: 16px 18px; font-size: 0.9rem; line-height: 1.6; color: #334155;">
            <div style="margin-bottom: 10px;">
              <strong style="color: #0f172a;">Công việc cần làm:</strong> Thầy/Cô chọn 01 bài học trong môn mình đang dạy. Dùng các câu lệnh mẫu ở Phần 5 để tạo ra bộ tài liệu hoàn chỉnh sẵn sàng mang lên lớp.
            </div>
            <div>
              <strong style="color: #0f172a;">Sản phẩm nộp lại:</strong> 01 File văn bản chứa: (1) Dàn ý 8 slide; (2) Phiếu học tập 1-2 trang có chỗ trống điền từ; (3) 01 Bài tập tình huống thực tế; (4) Chỉ ra <strong>ít nhất 02 điểm AI viết chưa đúng</strong> mà Thầy/Cô đã trực tiếp phát hiện và sửa lại.
            </div>
          </div>
        </div>

        <!-- 3 Bước làm bài -->
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Bước 1 (25 phút): Tạo Dàn ý Slide và Phiếu học tập
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Dùng Prompt 1 để tạo dàn ý 8 slide có lời giảng. Sau đó dùng Prompt 2 để tạo phiếu học tập có chừa các chỗ trống [.......] để sinh viên tự ghi chép.
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Bước 2 (25 phút): Tạo Bài tập tình huống thực tế
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Dùng Prompt 3 để tạo một tình huống thực tế tại Việt Nam và Prompt 4 để tạo các câu hỏi sinh viên hay hiểu sai.
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Bước 3 (20 phút): Đọc lại và sửa lỗi sai của AI
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Dùng Prompt 5 để nhờ AI tự tìm lỗi hoặc Thầy/Cô tự đọc lại để bắt lỗi: Có số liệu nào sai không? Tên công ty có đúng không? Đổi lại các ví dụ cho gần gũi với sinh viên Việt Nam.
            </div>
          </div>
        </div>

        <!-- Khung dặn dò buổi 5 -->
        <div style="padding: 12px 18px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.86rem; color: #334155; line-height: 1.6;">
          <strong>Chuẩn bị cho Buổi 5 (Tạo Hình Ảnh, Sơ Đồ & Video Bài Giảng Bằng AI):</strong> Thầy/Cô chọn ra 01 khái niệm khó giải thích nhất bằng lời để buổi sau chúng ta sẽ học cách dùng AI biến nó thành sơ đồ trực quan và video minh họa ngắn 5 phút.
        </div>
      </section>

    </div>
  `;

  const session4Data = {
    id: 4,
    number: 4,
    title: "Buổi 4: Dùng AI Tạo Trọn Bộ Tài Liệu Bài Giảng",
    topic: "Soạn Tài Liệu Bài Giảng",
    tools: ["ChatGPT", "Gemini", "Canva"],
    duration: "180 phút (3 giờ)",
    deliverable: "Bộ tài liệu cho 1 bài giảng gồm: Dàn ý Slide + Phiếu học tập + Tình huống thực tế + Câu hỏi hay gặp",
    overview: "Cách dùng AI để soạn nhanh toàn bộ tài liệu giảng dạy cho một buổi học: Dàn ý slide súc tích, phiếu học tập có chỗ trống cho sinh viên điền, bài tập tình huống thực tế tại Việt Nam và cách kiểm tra, sửa các lỗi sai do AI viết.",
    articleHtml: articleHtml,
    objectives: [],
    timeline: [],
    blocks: []
  };

  // Register session into central registry
  window.CurriculumRegistry.registerSession(session4Data);

  // Synchronize metadata with localStorage
  window.CurriculumRegistry.saveSessionMeta(4, {
    title: session4Data.title,
    duration: session4Data.duration,
    tools: session4Data.tools,
    overview: session4Data.overview
  });
})();
