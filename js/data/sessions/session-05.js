/**
 * SESSION 5: ỨNG DỤNG TẠO SLIDE BÀI GIẢNG VỚI NOTEBOOKLM
 * (js/data/sessions/session-05.js)
 * Căn cứ theo yêu cầu:
 * - Lấy Sách Giáo Khoa Địa Lí 11 (Kết Nối Tri Thức) làm tình huống thực hành mẫu (kèm nút tải PDF trực tiếp)
 * - Quy trình thực hành: NotebookLM (rút dàn ý 8 slide + notes) -> ChatGPT (tạo Master Prompt có phong cách tạo ảnh slide) -> Đưa sang NotebookLM và Gamma để tạo slide
 * - Giao diện Bước cuối chia làm 2 CỘT song song trực quan để dễ quan sát
 * - KHÔNG dùng định dạng Markdown thô sơ, tập trung vào Master Prompt tạo slide kèm phong cách hình ảnh.
 */

(function() {
  const ICONS = window.APP_ICONS || {};

  // PROMPTS SO SÁNH THỬ NGHIỆM TỔNG QUÁT
  const PROMPT_UPGRADE_BEFORE = `Tóm tắt tài liệu này để tôi làm slide bài giảng cho sinh viên.`;

  const PROMPT_UPGRADE_AFTER = `Dựa hoàn toàn vào tài liệu PDF tôi vừa nạp vào NotebookLM:

Hãy soạn cho tôi Dàn ý Slide trình chiếu 8 slide cho bài giảng 45 phút theo quy tắc:
1. Mỗi slide gồm:
   - Tiêu đề slide ngắn gọn (dưới 8 từ).
   - Tối đa 3 ý chính trên màn hình (mỗi ý không quá 12 từ, gạch đầu dòng rõ ràng).
   - Số trang trong tài liệu gốc mà ý này được trích ra (ví dụ: [Trang 12]).
   - Lời giảng viên gợi ý (Speaker Notes) khoảng 40 từ giải thích dễ hiểu cho sinh viên.

2. Cấu trúc 8 slide gồm:
   - Slide 1: Đặt vấn đề và thực trạng hiện nay.
   - Slide 2 - 3: Các khái niệm và mô hình cốt lõi.
   - Slide 4 - 5: Các con số thống kê và kết quả khảo sát thực tế trong tài liệu.
   - Slide 6 - 7: Các giải pháp và bài học kinh nghiệm.
   - Slide 8: 02 Câu hỏi mở cho cả lớp cùng thảo luận.

LƯU Ý: Tuyệt đối chỉ lấy thông tin có trong tài liệu đã nạp, không tự chế thêm số liệu.`;

  // 5 CÂU LỆNH MẪU DÀNH CHO GIẢNG VIÊN
  const LIB_P1 = `Dựa vào tài liệu tôi vừa nạp, hãy chỉ ra 05 luận điểm quan trọng nhất của bài viết/cuốn sách này.
Với mỗi luận điểm, hãy nêu rõ:
- Ý chính tóm tắt trong 2 câu ngắn gọn.
- Luận điểm này nằm ở trang mấy hoặc phần nào trong tài liệu gốc.`;

  const LIB_P2 = `Hãy chuyển hóa tài liệu này thành một Dàn ý Slide bài giảng gồm 10 slide để tôi mang lên lớp dạy:
- Mỗi slide có tiêu đề ngắn và 3 gạch đầu dòng ngắn gọn (dưới 12 từ/dòng).
- Kèm theo số trang trích dẫn chính xác trong tài liệu gốc.
- Viết sẵn một đoạn Lời giảng gợi ý (Speaker Notes) 40 từ để tôi nói trên lớp.`;

  const LIB_P3 = `Từ tài liệu đã nạp, hãy rút ra 03 tình huống hoặc câu chuyện thực tế được nhắc đến trong sách để tôi cho sinh viên thảo luận nhóm:
- Tóm tắt tình huống ngắn gọn khoảng 150 từ.
- Đặt 02 câu hỏi để sinh viên thảo luận và tìm câu trả lời ngay trong tài liệu.`;

  const LIB_P4 = `Trong tài liệu này có những khái niệm hoặc thuật ngữ chuyên môn nào khó hiểu đối với sinh viên?
Hãy liệt kê 05 thuật ngữ khó nhất và:
- Giải thích lại bằng ngôn từ đời thường thật dễ hiểu.
- Đưa ra một ví dụ so sánh gần gũi trong đời sống.
- Ghi rõ thuật ngữ đó xuất hiện ở trang mấy trong tài liệu.`;

  const LIB_P5 = `Tôi có Dàn ý bài giảng vừa trích xuất từ tài liệu nguồn như sau:
[DÁN DÀN Ý TỪ NOTEBOOKLM VÀO ĐÂY]

Bạn hãy đóng vai trò là Giám đốc Nghệ thuật & Chuyên gia Thiết kế Bài giảng (Instructional & Visual Designer). Hãy chuyển hóa dàn ý trên thành một MASTER PROMPT TẠO SLIDE CHUYÊN NGHIỆP:
1. Định hình Phong cách mỹ thuật (Visual Style): Tông màu chủ đạo, bố cục thẻ trực quan, tỷ lệ hình ảnh/chữ hài hòa.
2. Chi tiết từng slide:
   - Tiêu đề ngắn gọn (dưới 8 từ).
   - 3 luận điểm cốt lõi trên màn hình.
   - Gợi ý PROMPT TẠO ẢNH AI (Image Generation Prompt) chi tiết cho từng slide (mô tả rõ bối cảnh, ánh sáng, góc máy, phong cách ảnh).
   - Lời giảng viên gợi ý (Speaker Notes).
3. Tối ưu câu lệnh để tôi có thể dán trực tiếp vào Gamma App và tiếp tục hoàn thiện trên NotebookLM.`;

  // CÂU LỆNH ĐO NI ĐÓNG GIÀY CHO SGK ĐỊA LÍ 11 (BÀI TẬP THỰC HÀNH MẪU)
  const PROMPT_DIALI_OUTLINE = `Dựa hoàn toàn vào nội dung "Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" (từ trang 9 đến trang 12) trong cuốn sách giáo khoa Địa lí 11 tôi vừa nạp:

Hãy soạn cho tôi Dàn ý Slide trình chiếu gồm đúng 8 slide cho tiết học 45 phút theo quy tắc:
1. Mỗi slide gồm:
   - Tiêu đề slide ngắn gọn (dưới 8 từ).
   - Tối đa 3 ý chính trên màn hình (mỗi ý dưới 15 từ, gạch đầu dòng rõ ràng).
   - Số trang trong sách giáo khoa được trích xuất (ví dụ: [Trang 9], [Trang 10], [Trang 11]).
   - Lời giảng viên gợi ý (Speaker Notes) khoảng 40 - 50 từ giải thích dễ hiểu, có liên hệ ví dụ thực tế Việt Nam.

2. Cấu trúc 8 slide:
   - Slide 1: Đặt vấn đề - Toàn cầu hoá là gì và tại sao thế giới ngày càng phẳng?
   - Slide 2: 04 Biểu hiện đặc trưng của toàn cầu hoá kinh tế (thương mại, tài chính, đầu tư, xuyên quốc gia).
   - Slide 3: Hệ quả tích cực: Động lực thúc đẩy tăng trưởng kinh tế thế giới.
   - Slide 4: Thách thức: Khoảng cách giàu nghèo, cạnh tranh kinh tế và vấn đề môi trường.
   - Slide 5: Khu vực hoá kinh tế - Nguyên nhân hình thành và các tổ chức liên kết lớn (EU, ASEAN, NAFTA/USMCA).
   - Slide 6: Bảng so sánh nhanh giữa Toàn cầu hoá và Khu vực hoá kinh tế.
   - Slide 7: Cơ hội và thách thức của Việt Nam trong tiến trình hội nhập toàn cầu.
   - Slide 8: 02 Câu hỏi thảo luận nhóm 7 phút dành cho học sinh/sinh viên.

LƯU Ý: Tuyệt đối chỉ lấy số liệu và luận điểm có trong các trang 9 - 12 của sách, không tự chế thêm số liệu.`;

  const PROMPT_CHATGPT_MASTER = `Tôi có Dàn ý 8 slide bài giảng "Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" vừa trích xuất chuẩn xác từ SGK Địa lí 11 (có kèm số trang và lời giảng viên) như sau:
[DÁN TOÀN BỘ KẾT QUẢ DÀN Ý 8 SLIDE VỪA COPY TỪ NOTEBOOKLM VÀO ĐÂY]

Bạn hãy đóng vai trò là Giám đốc Nghệ thuật & Chuyên gia Thiết kế Bài giảng (Instructional & Visual Designer). Hãy chuyển hóa dàn ý trên thành một MASTER PROMPT TẠO SLIDE CHUYÊN NGHIỆP để tôi mang sang Gamma App và NotebookLM:

1. Định hình phong cách thị giác tổng thể (Overall Visual Style):
   - Bảng màu chủ đạo: Tông màu học thuật địa lí hiện đại (Deep Navy #0f172a, Teal #0d9488, Gold Accent).
   - Phong cách hình ảnh: Ảnh chụp tư liệu báo chí chân thực (Documentary Photography) kết hợp Đồ họa thông tin (Modern Infographic).
   - Bố cục: Dạng thẻ (Cards) thoáng đãng, tối đa 3 ý/slide, nhiều khoảng trống trực quan.

2. Chi tiết từng slide (cho đủ 8 slide):
   - Tiêu đề slide ngắn gọn (dưới 8 từ).
   - 3 luận điểm cốt lõi trên màn hình.
   - PROMPT TẠO ẢNH AI CHO SLIDE NÀY (Image Prompt bằng tiếng Anh & tiếng Việt): Mô tả rõ bối cảnh, đối tượng, ánh sáng và góc chụp (ví dụ: Slide 2 mô tả hình ảnh container cảng biển quốc tế nhộn nhịp nhìn từ trên cao, phong cách documentary photography).
   - Lời giảng viên gợi ý (Speaker Notes) súc tích.

3. Tối ưu cấu trúc câu lệnh để tôi có thể dán trực tiếp vào ô mô tả của Gamma App để AI tự sinh slide kèm ảnh minh họa và đối chiếu số trang trên NotebookLM.`;

  const PROMPT_DIALI_DISCUSSION = `Từ các số liệu và tình huống trong Bài 2 sách Địa lí 11 (trang 9 - 12), hãy gợi ý 02 câu hỏi tình huống thực tế để tôi cho sinh viên làm việc nhóm:
- Tình huống 1: Một doanh nghiệp dệt may Việt Nam trước làn sóng toàn cầu hoá cần làm gì để cạnh tranh?
- Tình huống 2: Việc Việt Nam gia nhập các tổ chức kinh tế khu vực (như ASEAN, CPTPP) mang lại lợi ích gì cho người tiêu dùng?
Kèm theo đáp án gợi ý ngắn gọn (3 gạch đầu dòng) và chỉ rõ nằm ở trang nào trong sách.`;

  const articleHtml = `
    <div class="session-direct-article">

      <!-- PHẦN 1: MỤC TIÊU ĐẠT ĐƯỢC -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 1</span>
          <h2 class="article-section-title">Mục Tiêu Đạt Được Sau Buổi 5</h2>
        </div>
        <p class="article-prose">
          Sau buổi học này, Thầy/Cô sẽ làm chủ quy trình kết hợp nhịp nhàng giữa <strong>Google NotebookLM &rarr; ChatGPT &rarr; Gamma App</strong> để biến sách giáo trình dày đặc thành bộ slide bài giảng đẹp mắt, chuẩn kiến thức và có phong cách hình ảnh chuyên nghiệp:
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
              <td><strong>1. Khóa chặt nguồn sách (NotebookLM)</strong></td>
              <td>Nạp sách PDF vào NotebookLM để AI đọc hiểu 171 trang, trích xuất dàn ý slide súc tích và dẫn chứng đúng số trang sách cho từng ý, chống hoàn toàn hiện tượng bịa đặt số liệu.</td>
            </tr>
            <tr>
              <td><strong>2. Nâng cấp Visual & Style (ChatGPT)</strong></td>
              <td>Dùng ChatGPT đóng vai Art Director để nâng cấp dàn ý thô thành <strong>Master Prompt</strong>: thiết kế bảng màu, bố cục thẻ và tạo câu lệnh sinh ảnh AI (Image Prompts) riêng cho từng slide.</td>
            </tr>
            <tr>
              <td><strong>3. Xuất Slide & Podcast (Gamma + NotebookLM)</strong></td>
              <td>Cầm Master Prompt đưa vào Gamma App để tự sinh slide mỹ thuật cao có ảnh AI trong 60 giây (xuất file PowerPoint .pptx), đồng thời dùng NotebookLM để kiểm chứng số liệu và tạo podcast âm thanh.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- PHẦN 2: QUY TRÌNH PHỐI HỢP NOTEBOOKLM - CHATGPT - GAMMA -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 2</span>
          <h2 class="article-section-title">Quy Trình Phối Hợp: NotebookLM &rarr; ChatGPT &rarr; Gamma Tạo Slide</h2>
        </div>
        <p class="article-prose">
          Mỗi công cụ đảm nhận đúng thế mạnh cốt lõi của mình trong chuỗi sản xuất học liệu: <strong>NotebookLM</strong> giữ vững tính chính xác của sách, <strong>ChatGPT</strong> định hình mỹ thuật & gợi ý ảnh AI, và <strong>Gamma App</strong> tự động dàn trang trình chiếu:
        </p>

        <!-- Sơ đồ quy trình mới -->
        <div class="article-image-figure" style="margin: 20px 0 24px 0; text-align: center;">
          <div class="zoomable-image-wrap" onclick="window.openImageLightbox('assets/images/bai5/workflow-notebooklm-chatgpt-gamma.png', 'Quy Trình Phối Hợp: NotebookLM -> ChatGPT -> Gamma Tạo Slide Bài Giảng', 'Bước 1: Nạp SGK Địa Lí 11 vào NotebookLM rút dàn ý -> Bước 2: Dùng ChatGPT tạo Siêu Prompt & phong cách ảnh AI -> Bước 3A: Đưa sang Gamma sinh slide kèm ảnh AI -> Bước 3B: Đối chiếu chuẩn nguồn & tạo Podcast trên NotebookLM.')" style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 8px; display: inline-block; max-width: 100%; box-shadow: 0 2px 10px rgba(0,0,0,0.04);" title="Bấm vào để xem ảnh phóng to chi tiết">
            <img src="assets/images/bai5/workflow-notebooklm-chatgpt-gamma.png" alt="Sơ đồ quy trình phối hợp NotebookLM, ChatGPT và Gamma tạo slide bài giảng" style="max-width: 100%; max-height: 480px; height: auto; border-radius: var(--radius-sm); display: block;" />
          </div>
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">
            <strong>Hình 5.1:</strong> Mô hình phối hợp 4 chặng: Khóa chặt nguồn sách &rarr; Định hình phong cách ảnh AI &rarr; Xuất slide đẹp trên Gamma &rarr; Đối chiếu số liệu trên NotebookLM.
          </p>
        </div>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <table class="article-matrix-table" style="margin-top: 0; border: none;">
            <thead>
              <tr>
                <th style="width: 25%;">Chặng thực hiện</th>
                <th style="width: 50%;">Nhiệm vụ cốt lõi của công cụ</th>
                <th style="width: 25%;">Sản phẩm đầu ra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Chặng 1: NotebookLM</strong></td>
                <td>Nạp sách giáo trình PDF (171 trang). Ra lệnh trích xuất dàn ý 8 slide có trích dẫn số trang [Trang 9, 11] và lời giảng viên gợi ý (Speaker Notes).</td>
                <td>Dàn ý 8 slide chuẩn xác theo sách.</td>
              </tr>
              <tr>
                <td><strong>Chặng 2: ChatGPT</strong></td>
                <td>Cầm dàn ý sang ChatGPT đóng vai Art Director để viết <strong>Master Prompt</strong>: thiết kế bảng màu, bố cục thẻ và viết câu lệnh tạo ảnh AI (Image Prompts) riêng cho từng slide.</td>
                <td>Master Prompt tạo Slide có phong cách ảnh.</td>
              </tr>
              <tr>
                <td><strong>Chặng 3A: Gamma App</strong></td>
                <td>Dán Master Prompt vào Gamma App. AI tự động vẽ layout, sinh các bức ảnh minh họa chất lượng cao theo đúng phong cách và xuất ra file PowerPoint (.pptx).</td>
                <td>File PowerPoint (.pptx) hoàn chỉnh 8 slide.</td>
              </tr>
              <tr>
                <td><strong>Chặng 3B: NotebookLM</strong></td>
                <td>Quay lại NotebookLM dán Master Prompt để đối chiếu lại từng số liệu với trang sách gốc, và bấm nút tạo Podcast Audio Overview 2 người nói gửi cho học sinh/sinh viên.</td>
                <td>Bảo chứng nguồn 100% + Audio Podcast.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PHẦN 3: SO SÁNH NOTEBOOKLM VÀ CHATGPT THƯỜNG -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 3</span>
          <h2 class="article-section-title">Vì Sao Cần Kết Hợp Cả NotebookLM Và ChatGPT?</h2>
        </div>
        <p class="article-prose">
          Nhiều Thầy/Cô thắc mắc: <em>"Tại sao không dùng một mình ChatGPT hoặc một mình NotebookLM mà phải phối hợp cả hai?"</em>. Bảng so sánh dưới đây sẽ giải thích rõ thế mạnh bổ trợ giữa hai công cụ:
        </p>

        <!-- Sơ đồ so sánh -->
        <div class="article-image-figure" style="margin: 20px 0 24px 0; text-align: center;">
          <div class="zoomable-image-wrap" onclick="window.openImageLightbox('assets/images/bai5/chatgpt-vs-notebooklm.png', 'So Sánh: Dùng AI Thường vs. Dùng NotebookLM', 'Bên trái: ChatGPT/Gemini thường dễ bịa đặt thông tin và trôi nổi nguồn tin. Bên phải: NotebookLM chỉ lấy từ tài liệu được nạp, bấm vào là hiện ngay trang gốc trong sách.')" style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 8px; display: inline-block; max-width: 100%; box-shadow: 0 2px 10px rgba(0,0,0,0.04);" title="Bấm vào để xem ảnh phóng to chi tiết">
            <img src="assets/images/bai5/chatgpt-vs-notebooklm.png" alt="Bảng so sánh giữa dùng AI thường và dùng NotebookLM" style="max-width: 100%; max-height: 380px; height: auto; border-radius: var(--radius-sm); display: block;" />
          </div>
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">
            <strong>Hình 5.2:</strong> So sánh sự khác biệt then chốt giữa ChatGPT thường và Google NotebookLM trong giảng dạy.
          </p>
        </div>

        <!-- Khung thử nghiệm so sánh Prompt -->
        <div style="margin-top: 24px;">
          <div style="font-weight: 700; color: #1e293b; font-size: 1rem; margin-bottom: 12px;">
            Thử nghiệm thực tế: Câu lệnh sơ sài vs. Câu lệnh chuẩn cho NotebookLM
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
            <!-- Cột trái: Lệnh sơ sài -->
            <div style="background: #fff8f8; border: 1px solid #fecaca; border-radius: 8px; padding: 16px;">
              <div style="font-weight: 700; color: #991b1b; font-size: 0.88rem; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
                <span>CÂU LỆNH SƠ SÀI (KẾT QUẢ KÉM)</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyToClipboard(\`${PROMPT_UPGRADE_BEFORE}\`)" style="font-size: 0.75rem; padding: 2px 8px;">Copy</button>
              </div>
              <pre style="background: #ffffff; border: 1px solid #fee2e2; border-radius: 6px; padding: 12px; font-size: 0.84rem; color: #7f1d1d; white-space: pre-wrap; font-family: inherit; margin: 0 0 10px 0;">${PROMPT_UPGRADE_BEFORE}</pre>
              <div style="font-size: 0.82rem; color: #991b1b; line-height: 1.5;">
                <strong>Nhược điểm:</strong> AI sẽ viết ra một bài tóm tắt dài dòng, quá nhiều chữ trên một slide, không có gợi ý lời giảng và không ghi rõ thông tin này nằm ở trang mấy.
              </div>
            </div>

            <!-- Cột phải: Lệnh chuẩn -->
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px;">
              <div style="font-weight: 700; color: #166534; font-size: 0.88rem; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
                <span>CÂU LỆNH CHUẨN XÁC (KẾT QUẢ ĐẸP DÙNG ĐƯỢC NGAY)</span>
                <button class="btn btn-primary btn-sm" onclick="window.copyToClipboard(\`${PROMPT_UPGRADE_AFTER}\`)" style="font-size: 0.75rem; padding: 2px 8px;">Copy</button>
              </div>
              <pre style="background: #ffffff; border: 1px solid #dcfce7; border-radius: 6px; padding: 12px; font-size: 0.84rem; color: #14532d; white-space: pre-wrap; font-family: inherit; margin: 0 0 10px 0;">${PROMPT_UPGRADE_AFTER}</pre>
              <div style="font-size: 0.82rem; color: #166534; line-height: 1.5;">
                <strong>Ưu điểm:</strong> Tạo đúng 8 slide súc tích, mỗi slide tối đa 3 ý, có kèm số trang sách để kiểm chứng và có sẵn lời giảng mẫu khoảng 40 từ.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PHẦN 4: THƯ VIỆN CÂU LỆNH MẪU CHO GIẢNG VIÊN -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 4</span>
          <h2 class="article-section-title">Thư Viện 5 Câu Lệnh Mẫu Dành Cho Giảng Viên</h2>
        </div>
        <p class="article-prose">
          Thầy/Cô chỉ cần bấm nút <strong>"Sao chép"</strong> và dán trực tiếp vào khung chat của Google NotebookLM hoặc ChatGPT:
        </p>

        <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 16px;">

          <!-- Prompt 1 -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">
                Mẫu 1: Rút ra 05 luận điểm then chốt nhất kèm số trang (Dùng trên NotebookLM)
              </span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyToClipboard(\`${LIB_P1}\`)">Sao chép</button>
            </div>
            <p style="font-size: 0.84rem; color: #64748b; margin-bottom: 10px;">
              Dùng khi Thầy/Cô muốn nắm nhanh nội dung của một bài báo khoa học tiếng Anh dài hoặc một chương sách mới.
            </p>
            <pre style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; font-size: 0.84rem; color: #334155; white-space: pre-wrap; font-family: inherit; margin: 0;">${LIB_P1}</pre>
          </div>

          <!-- Prompt 2 -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">
                Mẫu 2: Soạn Dàn ý 10 slide bài giảng có sẵn lời giảng (Dùng trên NotebookLM)
              </span>
              <button class="btn btn-primary btn-sm" onclick="window.copyToClipboard(\`${LIB_P2}\`)">Sao chép</button>
            </div>
            <p style="font-size: 0.84rem; color: #64748b; margin-bottom: 10px;">
              Dùng để chuyển một bài đọc thành cấu trúc bài thuyết trình hoàn chỉnh, giảng viên không lo bị bí từ khi đứng lớp.
            </p>
            <pre style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; font-size: 0.84rem; color: #334155; white-space: pre-wrap; font-family: inherit; margin: 0;">${LIB_P2}</pre>
          </div>

          <!-- Prompt 3 -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">
                Mẫu 3: Trích xuất tình huống thực tế trong sách làm bài tập thảo luận (Dùng trên NotebookLM)
              </span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyToClipboard(\`${LIB_P3}\`)">Sao chép</button>
            </div>
            <p style="font-size: 0.84rem; color: #64748b; margin-bottom: 10px;">
              Tìm nhanh các case study có sẵn trong sách và đặt câu hỏi mở để sinh viên thảo luận nhóm trên lớp.
            </p>
            <pre style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; font-size: 0.84rem; color: #334155; white-space: pre-wrap; font-family: inherit; margin: 0;">${LIB_P3}</pre>
          </div>

          <!-- Prompt 4 -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">
                Mẫu 4: Giải thích các thuật ngữ chuyên môn khó bằng ví dụ đời thường (Dùng trên NotebookLM)
              </span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyToClipboard(\`${LIB_P4}\`)">Sao chép</button>
            </div>
            <p style="font-size: 0.84rem; color: #64748b; margin-bottom: 10px;">
              Giúp sinh viên năm nhất hoặc người mới bắt đầu dễ dàng hiểu các định nghĩa trừu tượng, khó nhớ.
            </p>
            <pre style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; font-size: 0.84rem; color: #334155; white-space: pre-wrap; font-family: inherit; margin: 0;">${LIB_P4}</pre>
          </div>

          <!-- Prompt 5 -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">
                Mẫu 5: Chuyển Dàn ý sang ChatGPT để tạo Siêu Prompt Slide kèm Phong Cách Tạo Ảnh AI
              </span>
              <button class="btn btn-primary btn-sm" onclick="window.copyToClipboard(\`${LIB_P5}\`)">Sao chép</button>
            </div>
            <p style="font-size: 0.84rem; color: #64748b; margin-bottom: 10px;">
              Cầu nối quan trọng: Biến Dàn ý thô từ NotebookLM thành Siêu Prompt có kèm hướng dẫn tạo ảnh AI và bảng màu để mang sang Gamma App và NotebookLM.
            </p>
            <pre style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; font-size: 0.84rem; color: #334155; white-space: pre-wrap; font-family: inherit; margin: 0;">${LIB_P5}</pre>
          </div>

        </div>
      </section>

      <!-- PHẦN 5: BÀI TẬP THỰC HÀNH TẠI LỚP (TÌNH HUỐNG SGK ĐỊA LÍ 11) -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 5</span>
          <h2 class="article-section-title">Bài Tập Thực Hành: Thiết Kế Slide Từ SGK Địa Lí 11</h2>
        </div>
        <p class="article-prose">
          Thầy/Cô sẽ thực hành đóng vai giảng viên/giáo viên phụ trách bài giảng: <strong>"Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" (Trang 9 – 12 trong Sách Giáo Khoa Địa Lí 11)</strong>. Mục tiêu là chuyển hóa 4 trang sách giáo khoa thành một bộ slide 8 trang chuyên nghiệp, súc tích và có phong cách tạo ảnh AI đồng bộ.
        </p>

        <!-- KHUNG TẢI FILE TÀI LIỆU PDF TRỰC TIẾP -->
        <div class="exercise-resource-card" style="background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%); border: 1.5px solid #0284c7; border-radius: 12px; padding: 22px 24px; margin-bottom: 24px; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.08);">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
            <div style="display: flex; gap: 16px; align-items: flex-start; max-width: 720px;">
              <div style="width: 52px; height: 60px; background: #dc2626; color: #ffffff; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 800; font-size: 0.82rem; line-height: 1.1; flex-shrink: 0; box-shadow: 0 2px 8px rgba(220, 38, 38, 0.28);">
                <span>PDF</span>
                <span style="font-size: 0.68rem; font-weight: 500; opacity: 0.9;">30MB</span>
              </div>
              <div>
                <div style="font-size: 0.76rem; font-weight: 700; color: #0369a1; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                  Học Liệu Mẫu Thực Hành Buổi 5
                </div>
                <h3 style="margin: 0 0 6px 0; font-size: 1.15rem; color: #0f172a; font-weight: 700;">
                  Sách Giáo Khoa Địa Lí 11 — Bộ Kết Nối Tri Thức Với Cuộc Sống
                </h3>
                <p style="margin: 0; font-size: 0.88rem; color: #334155; line-height: 1.5;">
                  Bản in chuẩn 171 trang của NXB Giáo dục Việt Nam (Lê Huỳnh - Tổng Chủ biên). Bao gồm đầy đủ các bài học kinh tế thế giới, bảng số liệu, bản đồ và biểu đồ mẫu.
                </p>
                <div style="margin-top: 6px; font-size: 0.82rem; color: #475569;">
                  Bài học trọng tâm thực hành: <strong>Bài 2: Toàn cầu hoá và khu vực hoá kinh tế (Trang 9 – 12)</strong>.
                </div>
              </div>
            </div>

            <!-- Nút Tải Về & Xem Trước -->
            <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
              <a href="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" download="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 600; padding: 11px 18px; text-decoration: none; box-shadow: 0 2px 6px rgba(26, 54, 93, 0.2);" title="Bấm vào để tải file PDF về máy tính">
                ${ICONS.download || ''} Tải File PDF Về Máy (30MB)
              </a>
              <a href="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" target="_blank" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 600; padding: 11px 16px; text-decoration: none;" title="Mở xem file PDF trên tab mới">
                ${ICONS.eye || ''} Mở Xem Trực Tiếp
              </a>
            </div>
          </div>
        </div>

        <!-- QUY TRÌNH THỰC HÀNH TỪNG BƯỚC -->
        <div style="display: flex; flex-direction: column; gap: 18px; margin-bottom: 24px;">

          <!-- BƯỚC 1 -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span style="background: #2563eb; color: #ffffff; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem;">1</span>
              <span style="font-weight: 700; color: #0f172a; font-size: 1rem;">Bước 1 (10 phút): Nạp sách Địa lí 11 vào Google NotebookLM</span>
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 10px 0;">
              1. Bấm nút <strong>"Tải File PDF Về Máy"</strong> ở trên để lưu file <code>sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf</code> về máy tính.<br>
              2. Truy cập <code>notebooklm.google.com</code> bằng tài khoản Google, bấm <strong>New Notebook</strong> và đặt tên là <em>"Giáo án Địa Lí 11 - Bài 2"</em>.<br>
              3. Chọn tải file lên (Upload Sources) và kéo thả file PDF vừa tải vào. Chờ khoảng 10 giây để NotebookLM đọc toàn bộ 171 trang sách.
            </p>
            <div style="background: #f8fafc; border: 1px dashed #94a3b8; border-radius: 6px; padding: 10px 14px; font-size: 0.84rem; color: #475569;">
              <strong>Câu lệnh kiểm tra nhanh:</strong> Nhập vào khung chat: <code>Tóm tắt 3 nội dung trọng tâm của "Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" nằm ở trang 9 đến trang 12 trong sách.</code> Thầy/Cô sẽ thấy AI trích dẫn đúng số trang mà không bịa thêm kiến thức ngoài sách.
            </div>
          </div>

          <!-- BƯỚC 2 -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="background: #0d9488; color: #ffffff; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem;">2</span>
                <span style="font-weight: 700; color: #0f172a; font-size: 1rem;">Bước 2 (15 phút): Ra lệnh trích xuất Dàn ý 8 Slide kèm Lời giảng (Speaker Notes)</span>
              </div>
              <button class="btn btn-primary btn-sm" onclick="window.copyToClipboard(\`${PROMPT_DIALI_OUTLINE}\`)">
                ${ICONS.copy || ''} Sao chép câu lệnh
              </button>
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 10px 0;">
              Dán toàn bộ câu lệnh mẫu chuẩn dưới đây vào NotebookLM để yêu cầu AI chắt lọc chính xác 8 slide cho bài giảng 45 phút có trích dẫn số trang:
            </p>
            <pre style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; font-size: 0.84rem; color: #1e293b; white-space: pre-wrap; font-family: inherit; margin: 0 0 10px 0;">${PROMPT_DIALI_OUTLINE}</pre>
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 10px 14px; font-size: 0.84rem; color: #1e40af;">
              <strong>Thao tác quan trọng:</strong> Sau khi NotebookLM tạo xong Dàn ý 8 slide, Thầy/Cô hãy bấm <strong>sao chép toàn bộ kết quả Dàn ý này</strong> để chuẩn bị mang sang bước 3!
            </div>
          </div>

          <!-- BƯỚC 3 -->
          <div style="background: #ffffff; border: 1.5px solid #d97706; border-radius: 8px; padding: 18px 20px; box-shadow: 0 2px 10px rgba(217, 119, 6, 0.06);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="background: #d97706; color: #ffffff; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem;">3</span>
                <span style="font-weight: 700; color: #0f172a; font-size: 1rem;">Bước 3 (10 phút): Mang Dàn ý sang ChatGPT tạo Master Prompt (Kèm Phong Cách Tạo Ảnh AI)</span>
              </div>
              <button class="btn btn-primary btn-sm" onclick="window.copyToClipboard(\`${PROMPT_CHATGPT_MASTER}\`)">
                ${ICONS.copy || ''} Sao chép lệnh ChatGPT
              </button>
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 10px 0;">
              Mở <code>chatgpt.com</code>, dán câu lệnh dưới đây (nhớ dán kèm Dàn ý 8 slide vừa lấy từ NotebookLM ở Bước 2) để ChatGPT đóng vai <strong>Art Director & Visual Designer</strong>:
            </p>
            <pre style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 14px; font-size: 0.84rem; color: #78350f; white-space: pre-wrap; font-family: inherit; margin: 0 0 10px 0;">${PROMPT_CHATGPT_MASTER}</pre>
            <div style="background: #fefce8; border: 1px solid #fef08a; border-radius: 6px; padding: 10px 14px; font-size: 0.84rem; color: #854d0e;">
              <strong>Điểm vượt trội:</strong> ChatGPT sẽ bổ sung cho từng slide một <em>Image Generation Prompt</em> cụ thể (ví dụ: góc chụp drone tàu chở container trên đại dương hoàng hôn, bản đồ chuỗi cung ứng toàn cầu 3D...), giúp việc tạo slide ở bước sau có hình ảnh đồng bộ và đẹp mắt. Hãy <strong>sao chép toàn bộ Master Prompt</strong> mà ChatGPT vừa tạo ra!
            </div>
          </div>

          <!-- BƯỚC 4: GIAO DIỆN CHIA 2 CỘT -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 10px; padding: 20px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
              <span style="background: #0f172a; color: #ffffff; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem;">4</span>
              <span style="font-weight: 700; color: #0f172a; font-size: 1.05rem;">Bước 4 (20 phút): Mang Master Prompt Sang Tạo Slide Trên 2 Công Cụ</span>
            </div>
            <p style="font-size: 0.88rem; color: #475569; margin: 0 0 16px 0; line-height: 1.5;">
              Cầm <strong>Master Prompt</strong> từ ChatGPT ở Bước 3 mang sang thực thi song song trên cả 2 công cụ để thấy rõ vai trò của từng bên:
            </p>

            <!-- KHUNG 2 CỘT SONG SONG -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 20px;">

              <!-- CỘT 1: GAMMA APP -->
              <div style="background: #ffffff; border: 2px solid #8b5cf6; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 14px rgba(139, 92, 246, 0.08); display: flex; flex-direction: column;">
                <div style="background: #f5f3ff; border-bottom: 1.5px solid #ddd6fe; padding: 12px 18px; display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <span style="background: #7c3aed; color: #ffffff; font-size: 0.72rem; font-weight: 700; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px;">CỘT 1 • GAMMA APP</span>
                    <h4 style="margin: 4px 0 0 0; font-size: 1rem; color: #5b21b6; font-weight: 700;">Tự Động Sinh Slide & Ảnh Minh Họa AI</h4>
                  </div>
                </div>

                <div style="padding: 16px 18px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="font-size: 0.86rem; color: #334155; line-height: 1.6; margin-bottom: 12px;">
                      <strong>Các bước thao tác tại Gamma:</strong>
                      <ol style="margin: 6px 0 0 0; padding-left: 18px;">
                        <li style="margin-bottom: 6px;">Mở trang <code>gamma.app</code> (đăng nhập miễn phí bằng Google).</li>
                        <li style="margin-bottom: 6px;">Bấm <strong>Create new with AI</strong> &rarr; Chọn <strong>Generate from text</strong>.</li>
                        <li style="margin-bottom: 6px;">Dán toàn bộ <strong>Master Prompt</strong> (lấy từ ChatGPT) vào khung mô tả.</li>
                        <li style="margin-bottom: 6px;">Chọn số lượng thẻ: <strong>8 Cards</strong>.</li>
                        <li style="margin-bottom: 6px;">Tại mục <strong>Image Settings</strong>: Chọn chế độ <em>AI Generated Images</em>, chọn phong cách ảnh theo gợi ý của ChatGPT (ví dụ: <em>Photorealistic</em> hoặc <em>Editorial</em>).</li>
                        <li style="margin-bottom: 6px;">Bấm <strong>Generate</strong>: Trong 60 giây, Gamma sẽ tự động vẽ bố cục, dàn ảnh và chèn nội dung cho cả 8 slide.</li>
                        <li style="margin-bottom: 0;">Bấm nút <strong>Share</strong> &rarr; <strong>Export to PowerPoint (.pptx)</strong> để tải file về máy.</li>
                      </ol>
                    </div>
                  </div>

                  <div style="background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 6px; padding: 10px 12px; font-size: 0.82rem; color: #6b21a8; margin-top: 10px;">
                    <strong>Kết quả đạt được:</strong> Bộ slide thuyết trình 8 trang với hình ảnh minh họa AI chân thực, hiện đại, bố cục dạng thẻ chuẩn quốc tế mà không cần căn chỉnh thủ công.
                  </div>
                </div>
              </div>

              <!-- CỘT 2: GOOGLE NOTEBOOKLM -->
              <div style="background: #ffffff; border: 2px solid #0d9488; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 14px rgba(13, 148, 136, 0.08); display: flex; flex-direction: column;">
                <div style="background: #f0fdfa; border-bottom: 1.5px solid #ccfbf1; padding: 12px 18px; display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <span style="background: #0d9488; color: #ffffff; font-size: 0.72rem; font-weight: 700; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px;">CỘT 2 • NOTEBOOKLM</span>
                    <h4 style="margin: 4px 0 0 0; font-size: 1rem; color: #0f766e; font-weight: 700;">Đối Chiếu Chuẩn Nguồn & Tạo Podcast Audio</h4>
                  </div>
                </div>

                <div style="padding: 16px 18px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div style="font-size: 0.86rem; color: #334155; line-height: 1.6; margin-bottom: 12px;">
                      <strong>Các bước thao tác tại NotebookLM:</strong>
                      <ol style="margin: 6px 0 0 0; padding-left: 18px;">
                        <li style="margin-bottom: 6px;">Quay lại Sổ tay sách Địa Lí 11 trên <code>notebooklm.google.com</code>.</li>
                        <li style="margin-bottom: 6px;">Dán Master Prompt vào khung chat và hỏi: <em>"Hãy đối chiếu cấu trúc này với trang 9-12 sách Địa lí 11, chỉ ra các số liệu kinh tế và bảng biểu tương ứng."</em></li>
                        <li style="margin-bottom: 6px;">Bấm vào các số trích dẫn <code>[Trang 9]</code>, <code>[Trang 11]</code> để NotebookLM lật ngay trang sách đối chiếu, đảm bảo không có bất kỳ số liệu nào bị sai lệch.</li>
                        <li style="margin-bottom: 6px;">Lưu toàn bộ dàn ý vào mục <strong>Notes</strong> (Studio) của Sổ tay để làm tư liệu giảng dạy chính thức cho môn học.</li>
                        <li style="margin-bottom: 0;">Bấm nút <strong>Generate Audio Overview (Deep Dive)</strong>: AI sẽ tạo một đoạn Podcast đối thoại 2 chuyên gia tóm tắt sinh động toàn bộ bài học này. Tải file âm thanh về gửi cho sinh viên!</li>
                      </ol>
                    </div>
                  </div>

                  <div style="background: #f0fdfa; border: 1px solid #99f6e4; border-radius: 6px; padding: 10px 12px; font-size: 0.82rem; color: #115e59; margin-top: 10px;">
                    <strong>Kết quả đạt được:</strong> Giáo án được bảo chứng 100% về tính chính xác học thuật theo SGK + File âm thanh Podcast bài giảng để sinh viên nghe tự học trước ở nhà.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- MỞ RỘNG: CÂU HỎI THẢO LUẬN TÌNH HUỐNG CHO SINH VIÊN -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">
              Câu lệnh bổ trợ: Trích xuất câu hỏi tình huống thực tế từ Bài 2 cho sinh viên thảo luận
            </span>
            <button class="btn btn-secondary btn-sm" onclick="window.copyToClipboard(\`${PROMPT_DIALI_DISCUSSION}\`)">Sao chép</button>
          </div>
          <p style="font-size: 0.84rem; color: #64748b; margin-bottom: 10px;">
            Dùng để tạo hoạt động thảo luận nhóm (Think-Pair-Share) sinh động giữa tiết học, gắn lý thuyết toàn cầu hoá với thực tiễn doanh nghiệp Việt Nam.
          </p>
          <pre style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; font-size: 0.84rem; color: #334155; white-space: pre-wrap; font-family: inherit; margin: 0;">${PROMPT_DIALI_DISCUSSION}</pre>
        </div>

        <!-- Khung dặn dò & Mẹo Audio Overview -->
        <div style="padding: 14px 20px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; font-size: 0.88rem; color: #92400e; line-height: 1.6;">
          <strong>Mẹo phối hợp vàng:</strong> Thầy/Cô mang bộ <strong>Slide PowerPoint (từ Gamma)</strong> lên lớp để trình chiếu trực quan; đồng thời gửi kèm <strong>bản Podcast âm thanh (từ NotebookLM)</strong> vào nhóm Zalo/LMS để sinh viên nghe ôn bài trên đường đi học hoặc trước giờ thảo luận!
        </div>
      </section>

    </div>
  `;

  const session5Data = {
    id: 5,
    number: 5,
    title: "Buổi 5: Ứng Dụng Tạo Slide Bài Giảng Với NotebookLM",
    topic: "Tạo Slide Với NotebookLM",
    tools: ["NotebookLM", "ChatGPT", "Gamma"],
    duration: "180 phút (3 giờ)",
    deliverable: "Bộ Slide bài giảng 8-12 trang hoàn chỉnh được trích xuất trực tiếp từ SGK Địa Lí 11 kết hợp NotebookLM, ChatGPT & Gamma",
    overview: "Quy trình phối hợp 3 công cụ: Nạp SGK Địa Lí 11 vào Google NotebookLM để trích xuất Dàn ý chuẩn nguồn -> Qua ChatGPT tạo Siêu Prompt & phong cách tạo ảnh -> Đưa sang Gamma xuất bộ Slide PowerPoint (.pptx) và NotebookLM đối chiếu số liệu, tạo Podcast âm thanh.",
    articleHtml: articleHtml,
    objectives: [],
    timeline: [],
    blocks: []
  };

  // Register session into central registry
  window.CurriculumRegistry.registerSession(session5Data);

  // Synchronize metadata with localStorage
  window.CurriculumRegistry.saveSessionMeta(5, {
    title: session5Data.title,
    duration: session5Data.duration,
    tools: session5Data.tools,
    overview: session5Data.overview
  });
})();
