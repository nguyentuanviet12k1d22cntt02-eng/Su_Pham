/**
 * SESSION 5: TẠO SLIDE TỰ ĐỘNG VỚI NOTEBOOKLM & KIỂM SOÁT CHẤT LƯỢNG AI
 * (js/data/sessions/session-05.js)
 * Cấu trúc thiết kế đồng bộ 100% theo phong cách Buổi 3 và Buổi 4:
 * - Banner tiêu đề chuẩn màu tối sang trọng (#0f172a -> #1e293b)
 * - Khung học liệu thực hành SGK Địa Lí 11 (nút tải trực tiếp & xem trước)
 * - I. MỤC TIÊU BÀI HỌC (1. Kiến thức, 2. Năng lực, 3. Phẩm chất)
 * - II. BÀI TẬP & TIẾN TRÌNH HOẠT ĐỘNG GIẢNG DẠY (Tiến trình 4 hoạt động bài bản)
 *   + Hoạt động 1: Mở đầu / Khởi động (So sánh câu lệnh thô vs lệnh có kiểm soát 4 bước)
 *   + Hoạt động 2: Phương pháp kiểm soát AI & Bộ 5 câu lệnh mẫu sẵn sàng (Tích hợp Bài 6 Giáo trình)
 *   + Hoạt động 3: Luyện tập tạo slide bằng 3 công cụ (NotebookLM, ChatGPT, Gamma) theo 3 chặng
 *   + Hoạt động 4: Vận dụng / Bảng tiêu chí tự kiểm tra kết quả (Self-Audit 5 tiêu chí)
 * - III. HƯỚNG DẪN VỀ NHÀ VÀ DẶN DÒ (2 nhiệm vụ gọn gàng: Ôn bài cũ & Chuẩn bị buổi sau)
 */

(function() {
  // =========================================================================
  // 1. CÂU LỆNH SO SÁNH THỬ NGHIỆM ĐẦU GIỜ (TƯ DUY KIỂM SOÁT AI)
  // =========================================================================
  const PROMPT_UPGRADE_BEFORE = `Hãy soạn cho tôi bộ slide bài giảng về Bài 2 Địa lí 11 Toàn cầu hoá kinh tế.`;

  const PROMPT_UPGRADE_AFTER = `VAI TRÒ: Chuyên gia thiết kế nội dung bài giảng Địa lí 11.
BỐI CẢNH: Soạn nội dung slide cho Bài 2: "Toàn cầu hoá và khu vực hoá kinh tế" (Trang 9 - 12 SGK Địa lí 11 - Bộ Kết Nối Tri Thức Với Cuộc Sống). Thời lượng: 45 phút.

YÊU CẦU KIỂM SOÁT CHUẨN 4 BƯỚC (BẮT BUỘC):
Trước khi viết nội dung chi tiết từng slide:
1. Hãy phân tích ngắn gọn mục tiêu kiến thức trọng tâm của bài.
2. Liệt kê các số liệu kinh tế bắt buộc phải có theo trang 9-12 trong SGK (FDI, thương mại, tổ chức liên kết).
3. Đề xuất khung dàn ý 8 slide dự kiến theo quy tắc Slide 3 dòng.
=> SAU ĐÓ DỪNG LẠI VÀ CHỜ TÔI XÁC NHẬN. Sau khi tôi phản hồi "ĐỒNG Ý", bạn mới được viết nội dung chi tiết từng slide.`;

  // =========================================================================
  // 2. BỘ 5 CÂU LỆNH MẪU SẴN SÀNG CHO GIẢNG VIÊN (TÍCH HỢP BÀI 6 GIÁO TRÌNH)
  // =========================================================================
  
  // Prompt 1: Quy trình kiểm soát 4 bước (Chặn chốt trước khi làm)
  const LIB_P1 = `VAI TRÒ: Trợ lý sư phạm biên soạn nội dung trình chiếu.
BỐI CẢNH: Soạn bài giảng cho "Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" (Trang 9 - 12 SGK Địa Lí 11 - Bộ Kết Nối Tri Thức).

QUY TRÌNH KIỂM SOÁT CHUẨN (CHỐT CHẶN):
Bước 1: Bạn hãy phân tích mục tiêu bài học và đề xuất dàn khung 8 slide trình chiếu theo 4 hoạt động bài dạy.
Bước 2: Chỉ rõ mỗi slide tương ứng với nội dung và bảng số liệu ở trang mấy trong SGK Địa lí 11.
Bước 3: DỪNG LẠI TẠI ĐÂY VÀ CHỜ TÔI XÁC NHẬN.
TUYỆT ĐỐI CHƯA VIẾT CHI TIẾT TỪNG SLIDE KHI TÔI CHƯA PHÊ DUYỆT KHUNG!`;

  // Prompt 2: Trích xuất Dàn ý 8 slide có trích dẫn số trang từ NotebookLM
  const LIB_P2 = `Dựa hoàn toàn vào nội dung Bài 2 Địa lí 11 (từ trang 9 đến trang 12) trong cuốn SGK Địa lí 11 tôi vừa nạp:

Hãy soạn cho tôi Dàn ý Slide trình chiếu gồm đúng 8 slide cho tiết học 45 phút theo quy tắc:
1. Mỗi slide gồm:
   - Tiêu đề slide ngắn gọn (dưới 8 từ).
   - Tối đa 3 ý chính trên màn hình (mỗi ý dưới 12 từ, gạch đầu dòng rõ ràng).
   - Số trang trong sách giáo khoa được trích xuất (ví dụ: [Trang 9], [Trang 10], [Trang 11]).
   - Lời giảng gợi ý (Speaker Notes) khoảng 40 - 50 từ giải thích dễ hiểu, có liên hệ ví dụ thực tế Việt Nam.

2. Cấu trúc 8 slide:
   - Slide 1: Đặt vấn đề - Khởi động với chiếc điện thoại thông minh toàn cầu.
   - Slide 2: Bản chất của toàn cầu hoá kinh tế.
   - Slide 3: 04 Biểu hiện cốt lõi (thương mại, tài chính, FDI, công nghệ).
   - Slide 4: Phân tích số liệu FDI và thương mại thế giới (Trích bảng trang 10 SGK).
   - Slide 5: Hệ quả tích cực và thách thức đối với các nước đang phát triển.
   - Slide 6: Phân biệt Toàn cầu hoá (WTO) và Khu vực hoá (ASEAN, EU).
   - Slide 7: Cơ hội và thách thức của nền kinh tế Việt Nam khi hội nhập.
   - Slide 8: Bài tập tình huống thực tế nông sản Việt Nam cho học sinh thảo luận.

LƯU Ý: Tuyệt đối chỉ lấy số liệu và luận điểm có trong các trang 9 - 12 của sách, không tự chế thêm số liệu.`;

  // Prompt 3: Master Prompt chuyển dàn ý thành 8 slide ngắn gọn mang sang Gamma App
  const LIB_P3 = `Dựa vào Dàn ý 8 slide bài giảng "Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" tôi vừa trích xuất từ SGK Địa lí 11:
[DÁN TOÀN BỘ KẾT QUẢ DÀN Ý 8 SLIDE VỪA COPY TỪ NOTEBOOKLM VÀO ĐÂY]

Nhiệm vụ của bạn: Hãy viết lại thành NỘI DUNG 8 SLIDE HOÀN CHỈNH ĐỂ TÔI COPY DÁN THẲNG VÀO CÔNG CỤ TẠO SLIDE GAMMA APP.

QUY TẮC BẮT BUỘC ĐỂ TRÁNH TRẢ LỜI DÀI DÒNG:
1. TUYỆT ĐỐI KHÔNG viết lời chào, KHÔNG giải thích lý thuyết sư phạm, KHÔNG tạo các mục vai trò, bảng màu hay quy tắc rườm rà.
2. CHỈ XUẤT RA DUY NHẤT NỘI DUNG ĐÚNG 8 SLIDE theo định dạng ngắn gọn dưới đây:

--- SLIDE [Số]: [Tiêu đề ngắn gọn dưới 8 từ]
- [Ý 1: dưới 12 từ, cô đọng]
- [Ý 2: dưới 12 từ, cô đọng]
- [Ý 3: dưới 12 từ, cô đọng]
* Gợi ý hình ảnh AI: [Mô tả ngắn gọn 1 câu về bức ảnh AI cần vẽ, theo phong cách ảnh tư liệu báo chí chân thực hoặc infographic hiện đại, không dùng hình hoạt hình]
* Lời giảng (Speaker Notes): [2 câu ngắn gọn giải thích bằng ví dụ đời thường cho học sinh]

Hãy bắt đầu viết trực tiếp từ Slide 1 đến Slide 8 ngay dưới đây:`;

  // Prompt 4: Đặt câu hỏi ngược (Reverse Critique) để phản biện & bắt lỗi AI tự sửa
  const LIB_P4 = `Dưới vai trò chuyên gia kiểm định chất lượng nội dung slide bài giảng:
Hãy đọc lại toàn bộ 8 slide vừa tạo ở trên và phản biện để tìm ra các lỗi còn tồn tại:
1. KIỂM TRA QUÁ TẢI CHỮ: Có slide nào dài hơn 3 dòng hoặc câu chữ còn rườm rà vi phạm quy tắc Slide 3 dòng không?
2. KIỂM TRA SỐ LIỆU: Số liệu về FDI và kim ngạch thương mại ở Slide 4 có chính xác 100% như bảng số liệu trang 10 SGK Địa lí 11 chưa?
3. KIỂM TRA LỜI GIẢNG: Lời giảng gợi ý ở Slide 7 (Cơ hội, thách thức Việt Nam) đã có liên hệ thực tế xuất khẩu nông sản (sầu riêng, dệt may) chưa?
Nếu phát hiện bất kỳ điểm nào chưa đạt, hãy viết lại phiên bản chỉnh sửa hoàn hảo cho các slide đó ngay bên dưới.`;

  // Prompt 5: Yêu cầu AI giải thích lại thuật ngữ khó thành ví dụ đời thường cho Speaker Notes
  const LIB_P5 = `Trong nội dung Bài 2 Địa lí 11 có các thuật ngữ chuyên môn: "Đầu tư trực tiếp nước ngoài (FDI)", "Thị trường tài chính quốc tế", "Khu vực hoá kinh tế".
Hãy viết lại phần giải thích cho 3 thuật ngữ này để đưa vào phần Lời giảng (Speaker Notes) của giáo viên:
- Giải thích bằng ngôn ngữ đời thường, gần gũi với học sinh lớp 11 (tối đa 2 câu/thuật ngữ).
- Mỗi thuật ngữ gắn liền với 01 ví dụ thực tế tại Việt Nam (ví dụ: nhà máy Samsung Bắc Ninh, tập đoàn Lego tại Bình Dương, hiệp định thương mại tự do ASEAN).
- Đảm bảo học sinh nghe xong hiểu ngay bản chất mà không phải học vẹt.`;

  // =========================================================================
  // 3. TOÀN BỘ NỘI DUNG HIỂN THỊ TRÊN GIAO DIỆN WEB (ARTICLE HTML)
  // =========================================================================
  const articleHtml = `
    <div class="session-direct-article">

      <!-- BANNER TIÊU ĐỀ BUỔI HỌC -->
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: var(--radius-lg); padding: 24px 28px; box-shadow: var(--shadow-md); border: 1px solid #334155; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap;">
          <span style="background: #2563eb; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Khóa Đào Tạo AI Sư Phạm 4.0</span>
          <span style="background: #059669; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase;">Thực Hành Tiếp Nối Buổi 4</span>
          <span style="color: #94a3b8; font-size: 0.85rem;">Thời lượng: 180 phút (3 giờ)</span>
        </div>
        <h1 style="font-size: 1.65rem; font-weight: 900; line-height: 1.35; margin: 0 0 10px 0; color: #ffffff;">
          BUỔI 5: TẠO SLIDE TỰ ĐỘNG VỚI NOTEBOOKLM & KIỂM SOÁT CHẤT LƯỢNG AI
        </h1>
        <p style="font-size: 0.95rem; color: #cbd5e1; margin: 0; line-height: 1.65;">
          Tiếp nối kịch bản nội dung đã chuẩn bị ở Buổi 4, sử dụng bộ ba công cụ <strong>NotebookLM &rarr; ChatGPT &rarr; Gamma App</strong> để tự động sinh toàn bộ slide trình chiếu mỹ thuật từ <strong>Sách Giáo Khoa Địa Lí 11</strong>. Đồng thời áp dụng trọn vẹn <strong>Tư duy đánh giá & kiểm soát AI (Bài 6 trong giáo trình)</strong>: Chốt chặn kiểm soát 4 bước, 6 kỹ thuật thẩm định số liệu và đối chiếu chuẩn nguồn SGK.
        </p>
      </div>

      <!-- ========================================================================= -->
      <!-- I. MỤC TIÊU BÀI HỌC (3 KHỐI: KIẾN THỨC, NĂNG LỰC, PHẨM CHẤT)             -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag" style="background-color: #1e3a8a;">MỤC TIÊU</span>
          <h2 class="article-section-title">Mục Tiêu Bài Học</h2>
        </div>
        <p class="article-prose">
          Mục tiêu đạt được sau bài học khi áp dụng công nghệ tạo slide tự động và tư duy kiểm soát AI:
        </p>

        <!-- 1. Kiến thức -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #1e3a8a; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #dbeafe; color: #1e40af; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">1</span>
            Kiến Thức Cốt Lõi Cần Nắm Được
          </div>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #334155; line-height: 1.65;">
            <li><strong>Quy trình phối hợp 3 công cụ:</strong> Hiểu rõ vai trò của từng công cụ: <em>NotebookLM</em> giữ vững độ chuẩn xác của sách giáo trình &rarr; <em>ChatGPT</em> tinh gọn câu chữ và định hình phong cách ảnh &rarr; <em>Gamma App</em> tự động vẽ layout trình chiếu dạng thẻ hiện đại.</li>
            <li><strong>Quy trình kiểm soát chuẩn 4 bước (Bài 6 Giáo trình):</strong> Hiểu nguyên lý làm chủ AI: <em>1. Giao đề bài &rarr; 2. AI mô tả lại cách hiểu &rarr; 3. Người dùng xác nhận duyệt khung &rarr; 4. AI mới thực thi chi tiết</em>. Kiên quyết không thả cho AI tự viết một mạch cả bộ slide.</li>
            <li><strong>6 Kỹ thuật đánh giá & thẩm định kết quả AI:</strong> Nắm chắc các cách kiểm tra chất lượng sản phẩm do AI sinh ra (đối chiếu SGK gốc, yêu cầu giải thích thuật ngữ, đặt câu hỏi ngược phản biện AI, kiểm tra chéo đa công cụ, rà soát dữ liệu đầu vào và chia nhỏ kiểm tra từng slide).</li>
          </ul>
        </div>

        <!-- 2. Năng lực -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #065f46; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #dcfce7; color: #15803d; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">2</span>
            Năng Lực Thiết Kế & Kiểm Soát
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <div style="border-left: 3px solid #10b981; padding-left: 12px;">
              <strong style="color: #065f46; font-size: 0.9rem;">Khóa chặt nguồn sách (NotebookLM):</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Biết cách nạp file PDF 171 trang SGK Địa Lí 11 vào Google NotebookLM để AI chắt lọc dàn ý 8 slide có trích dẫn chính xác số trang [Trang 9, 10, 11].
              </p>
            </div>
            <div style="border-left: 3px solid #3b82f6; padding-left: 12px;">
              <strong style="color: #1e40af; font-size: 0.9rem;">Sinh slide tự động (Gamma App):</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Biết cách chuyển Master Prompt vào Gamma App để tự động xuất bộ Slide PowerPoint (.pptx) mỹ thuật cao có hình minh họa AI chỉ trong 60 giây.
              </p>
            </div>
            <div style="border-left: 3px solid #8b5cf6; padding-left: 12px;">
              <strong style="color: #6d28d9; font-size: 0.9rem;">Phản biện & Bắt lỗi AI (Reverse Critique):</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Thành thạo kỹ thuật đặt câu hỏi ngược để ép AI tự phát hiện lỗi sai số liệu kinh tế và cắt giảm triệt để các slide bị quá tải chữ.
              </p>
            </div>
          </div>
        </div>

        <!-- 3. Phẩm chất -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #92400e; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #fef3c7; color: #b45309; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">3</span>
            Phẩm Chất Sư Phạm & Trách Nhiệm
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <div style="border-left: 3px solid #f59e0b; padding-left: 12px;">
              <strong style="color: #92400e; font-size: 0.9rem;">Trách nhiệm học thuật:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Thấu hiểu rằng người sử dụng phải là người chịu trách nhiệm cuối cùng; không bao giờ tin tưởng mù quáng vào kết quả do AI tạo ra.
              </p>
            </div>
            <div style="border-left: 3px solid #10b981; padding-left: 12px;">
              <strong style="color: #065f46; font-size: 0.9rem;">Tôn trọng nguồn tri thức:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Luôn đối chiếu lại số liệu GDP, FDI và kim ngạch thương mại trên slide với bảng số liệu chính thức trang 9-11 SGK Địa lí 11 trước khi giảng dạy.
              </p>
            </div>
            <div style="border-left: 3px solid #2563eb; padding-left: 12px;">
              <strong style="color: #1e40af; font-size: 0.9rem;">Tự tin làm chủ công nghệ:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Xem AI là công cụ hỗ trợ tăng tốc công việc chứ không để AI thay thế tư duy sư phạm; chủ động kiểm soát quy trình từ đầu đến cuối.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- VẤN ĐỀ TRỌNG TÂM: HẬU QUẢ KHI KHÔNG KIỂM SOÁT CHẤT LƯỢNG AI               -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag" style="background-color: #dc2626;">VẤN ĐỀ TRỌNG TÂM</span>
          <h2 class="article-section-title">Vấn Đề Của Bài Này: Chuyện Gì Xảy Ra Nếu Thả Nổi, Không Kiểm Soát Chất Lượng AI?</h2>
        </div>
        <p class="article-prose">
          Khi thấy các công cụ AI (ChatGPT, Gamma, NotebookLM) có thể tạo ra cả bộ slide trong 60 giây, rất nhiều người nảy sinh tâm lý chủ quan: <em>"Cứ để AI tự làm hết, mình chỉ việc mang lên chiếu!"</em>. Đây chính là chiếc bẫy nguy hiểm nhất. Nếu người dạy không làm chủ tay lái và không có kỹ năng kiểm soát chất lượng (như Bài 6 trong giáo trình đã cảnh báo), <strong>4 thảm họa sư phạm</strong> dưới đây chắc chắn sẽ xảy ra:
        </p>

        <!-- LƯỚI 4 NGUY CƠ SƯ PHẠM KHI MẤT KIỂM SOÁT -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0 20px 0;">
          
          <!-- Nguy cơ 1 -->
          <div style="background: #ffffff; border: 1.5px solid #fecaca; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(220, 38, 38, 0.05); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #fee2e2; color: #dc2626; width: 28px; height: 28px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.88rem;">1</span>
              <h3 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #991b1b;">Ảo Giác & Bịa Đặt Số Liệu (Hallucination)</h3>
            </div>
            <div style="font-size: 0.85rem; color: #7f1d1d; line-height: 1.55; margin-bottom: 8px;">
              <strong>Hiện tượng:</strong> AI tự chế ra các số liệu FDI của Việt Nam, nhầm lẫn năm thành lập WTO, hoặc bịa ra tên các tổ chức liên kết kinh tế không hề tồn tại trong SGK.
            </div>
            <div style="margin-top: auto; padding-top: 8px; border-top: 1px dashed #fecaca; font-size: 0.82rem; color: #b91c1c; font-style: italic;">
              ⚠️ <strong>Hậu quả:</strong> Truyền tải sai kiến thức cho học sinh; khi bị đặt câu hỏi phản biện sẽ lúng túng và mất uy tín học thuật nghiêm trọng.
            </div>
          </div>

          <!-- Nguy cơ 2 -->
          <div style="background: #ffffff; border: 1.5px solid #fed7aa; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(234, 88, 12, 0.05); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #ffedd5; color: #ea580c; width: 28px; height: 28px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.88rem;">2</span>
              <h3 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #9a3412;">Slide Thành "Bức Tường Chữ" Gây Kiệt Quệ Thị Giác</h3>
            </div>
            <div style="font-size: 0.85rem; color: #7c2d12; line-height: 1.55; margin-bottom: 8px;">
              <strong>Hiện tượng:</strong> AI sao chép nguyên cả đoạn văn xuôi dài 15 dòng vào slide. Chữ nhỏ li ti, không có cấu trúc thẻ, không có từ khóa và không có điểm nhấn thị giác.
            </div>
            <div style="margin-top: auto; padding-top: 8px; border-top: 1px dashed #fed7aa; font-size: 0.82rem; color: #c2410c; font-style: italic;">
              ⚠️ <strong>Hậu quả:</strong> Người dạy chỉ biết quay lưng lại màn hình để "đọc chữ", học sinh mỏi mắt, buồn ngủ và tiết học biến thành giờ đọc chính tả nhàm chán.
            </div>
          </div>

          <!-- Nguy cơ 3 -->
          <div style="background: #ffffff; border: 1.5px solid #fef08a; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(202, 138, 4, 0.05); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #fef9c3; color: #ca8a04; width: 28px; height: 28px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.88rem;">3</span>
              <h3 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #854d0e;">Lạc Đề Cương & Vỡ Trận Kế Hoạch Bài Dạy</h3>
            </div>
            <div style="font-size: 0.85rem; color: #713f12; line-height: 1.55; margin-bottom: 8px;">
              <strong>Hiện tượng:</strong> AI tự thêm thắt các nội dung viễn vông, lý thuyết kinh tế học vĩ mô phức tạp vượt quá mức độ cần đạt của học sinh lớp 11 (trang 9-12 SGK).
            </div>
            <div style="margin-top: auto; padding-top: 8px; border-top: 1px dashed #fef08a; font-size: 0.82rem; color: #a16207; font-style: italic;">
              ⚠️ <strong>Hậu quả:</strong> Cháy giáo án, không kịp hoàn thành 4 hoạt động bài dạy, học sinh hoang mang không biết đâu là kiến thức trọng tâm cần nhớ.
            </div>
          </div>

          <!-- Nguy cơ 4 -->
          <div style="background: #ffffff; border: 1.5px solid #e9d5ff; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(147, 51, 234, 0.05); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #f3e8ff; color: #9333ea; width: 28px; height: 28px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.88rem;">4</span>
              <h3 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #6b21a8;">Biến Giáo Viên Thành "Người Bấm Máy Thụ Động"</h3>
            </div>
            <div style="font-size: 0.85rem; color: #581c87; line-height: 1.55; margin-bottom: 8px;">
              <strong>Hiện tượng:</strong> Người dạy không nắm rõ từng slide có gì, không có sẵn Lời giảng Speaker Notes đời thường, lên bục giảng bấm tới đâu mới nhìn thấy tới đó.
            </div>
            <div style="margin-top: auto; padding-top: 8px; border-top: 1px dashed #e9d5ff; font-size: 0.82rem; color: #7e22ce; font-style: italic;">
              ⚠️ <strong>Hậu quả:</strong> Mất hoàn toàn vai trò chủ đạo của người thầy; biến mình thành "người phát ngôn hộ cho AI" thay vì người truyền cảm hứng.
            </div>
          </div>

        </div>

        <!-- KHUNG THÔNG ĐIỆP CỐT LÕI (CĂN CỨ BÀI 6 GIÁO TRÌNH) -->
        <div style="background: linear-gradient(135deg, #fff1f2 0%, #fff7ed 100%); border: 1.5px solid #f43f5e; border-radius: 8px; padding: 16px 20px; box-shadow: 0 2px 8px rgba(244, 63, 94, 0.08);">
          <div style="display: flex; align-items: flex-start; gap: 14px;">
            <div style="background: #f43f5e; color: #ffffff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.1rem; flex-shrink: 0;">
              !
            </div>
            <div>
              <div style="font-weight: 800; color: #9f1239; font-size: 1rem; margin-bottom: 4px;">
                CĂN CỨ BÀI 6 GIÁO TRÌNH: "AI KHÔNG PHẢI LÚC NÀO CŨNG ĐÚNG — BẠN MỚI LÀ NGƯỜI CHỊU TRÁCH NHIỆM CUỐI CÙNG!"
              </div>
              <p style="margin: 0; font-size: 0.88rem; color: #4c0519; line-height: 1.6;">
                Giáo trình đã nhấn mạnh rõ tại trang 21: <em>"Chất lượng kết quả phụ thuộc vào dữ liệu và cách đặt yêu cầu; người sử dụng phải là người chịu trách nhiệm cuối cùng đối với kết quả, xem AI là công cụ hỗ trợ chứ không phải thay thế hoàn toàn con người."</em><br>
                Vì vậy, giá trị cốt lõi của Buổi 5 <strong>không nằm ở việc biết bấm nút tạo slide</strong>, mà nằm ở việc <strong>làm chủ Quy trình kiểm soát 4 bước</strong> và <strong>6 Kỹ thuật thẩm định</strong> để bắt lỗi và biến slide của AI thành tài sản giảng dạy chuẩn mực!
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- II. BÀI TẬP: TIẾN TRÌNH CÁC HOẠT ĐỘNG DẠY HỌC                              -->
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
              Nhận diện sai lầm phổ biến nhất khi dùng AI làm slide: Nếu chỉ ra lệnh sơ sài, AI sẽ tự biên tự diễn viết một mạch 15 slide ngập tràn chữ, tự bịa số liệu kinh tế và người dạy hoàn toàn mất quyền kiểm soát sản phẩm.
            </p>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #1e3a8a; font-size: 0.92rem;">• Nội dung & Sản phẩm đối chiếu:</strong>
            <p style="margin: 4px 0 10px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              So sánh trực tiếp kết quả của 02 câu lệnh khi yêu cầu AI tạo slide cho <em>"Bài 2: Toàn cầu hoá và khu vực hoá kinh tế" (Trang 9 – 12 SGK Địa lí 11)</em>:
            </p>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              
              <!-- Before -->
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 0.85rem; font-weight: 700; color: #dc2626;">❌ 1. Câu lệnh thô (Gõ lệnh chung chung, AI tự biên tự diễn mất kiểm soát)</span>
                  <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_BEFORE)}'), 'Đã sao chép prompt thô!')">
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Sao chép Prompt Thô
                  </button>
                </div>
                <div class="article-prompt-card" style="margin-top: 2px;">
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.85rem;">${PROMPT_UPGRADE_BEFORE}</pre>
                </div>
                <div style="font-size: 0.84rem; color: #991b1b; margin-top: 4px; line-height: 1.5;">
                  <strong>Hậu quả:</strong> AI tự viết một mạch các đoạn văn dài ngoằng sao chép từ mạng Internet, không căn cứ vào SGK Địa lí 11, tự bịa số liệu FDI và không dừng lại để người dạy kịp kiểm tra cấu trúc.
                </div>
              </div>

              <!-- After -->
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 0.85rem; font-weight: 700; color: #16a34a;">✅ 2. Câu lệnh chuẩn (Cài khóa chốt kiểm soát 4 bước theo Bài 6 Giáo trình)</span>
                  <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_AFTER)}'), 'Đã sao chép prompt chuẩn!')">
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Sao chép Prompt Chuẩn
                  </button>
                </div>
                <div class="article-prompt-card" style="margin-top: 2px;">
                  <pre class="article-prompt-code" style="padding: 14px 16px; font-size: 0.85rem; max-height: 240px; overflow-y: auto;">${PROMPT_UPGRADE_AFTER}</pre>
                </div>
                <div style="font-size: 0.84rem; color: #166534; margin-top: 4px; line-height: 1.5;">
                  <strong>Ưu điểm:</strong> AI buộc phải phân tích mục tiêu, liệt kê số liệu bắt buộc ở trang 9-12 và <strong>dừng lại chờ người dạy xác nhận</strong>. Người dạy duyệt xong khung thì AI mới được viết nội dung chi tiết.
                </div>
              </div>

            </div>

            <!-- Kết luận khởi động -->
            <div style="margin-top: 14px; padding: 12px 16px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; font-size: 0.88rem; color: #1e3a8a;">
              <strong>Nguyên tắc kiểm soát vàng (Bài 6):</strong> Không bao giờ thả cho AI tự viết một mạch cả bộ slide; người dạy phải là người cầm cương, bắt AI phân tích và duyệt khung trước khi cho phép sinh chi tiết.
            </div>
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- HOẠT ĐỘNG 2: PHƯƠNG PHÁP KIỂM SOÁT AI & BỘ CÂU LỆNH MẪU               -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #dcfce7; color: #15803d; font-weight: 800; font-size: 0.85rem; padding: 3px 10px; border-radius: 4px;">Hoạt động 2</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Phương Pháp Kiểm Soát AI & Bộ Câu Lệnh Mẫu Sẵn Sàng (50 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 50 phút</span>
          </div>

          <!-- Mục tiêu tự nhiên, dễ hiểu -->
          <div style="margin-bottom: 18px; background: #f8fafc; border-left: 4px solid #10b981; padding: 10px 14px; border-radius: 0 6px 6px 0;">
            <strong style="color: #065f46; font-size: 0.9rem;">Mục tiêu phần này:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.88rem; color: #334155; line-height: 1.6;">
              Làm chủ <strong>Quy trình kiểm soát chuẩn 4 bước</strong> và <strong>6 Kỹ thuật đánh giá kết quả</strong> từ Bài 6 trong giáo trình, đồng thời trang bị trọn bộ 5 câu lệnh mẫu chuyên sâu để chuẩn bị thực hành tạo slide trên 3 công cụ.
            </p>
          </div>

          <!-- PHẦN 1: QUY TRÌNH KIỂM SOÁT CHUẨN 4 BƯỚC -->
          <div style="margin-bottom: 24px;">
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 8px;">
              1. Quy trình kiểm soát AI chuẩn 4 bước (Bài 6 trong giáo trình)
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.65; margin: 0 0 12px 0;">
              Khi giao việc cho AI tạo tài liệu học tập hoặc slide bài giảng, bắt buộc phải tuân thủ nghiêm ngặt 4 bước chốt chặn:
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
              <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3px solid #3b82f6; border-radius: 6px; padding: 12px 14px;">
                <div style="font-weight: 700; color: #1e40af; font-size: 0.88rem; margin-bottom: 4px;">Bước 1: Yêu cầu AI phân tích đề</div>
                <div style="font-size: 0.83rem; color: #475569; line-height: 1.5;">Giao đề bài kèm câu lệnh chốt chặn: <em>"Trước khi làm, hãy phân tích bài toán và chờ tôi xác nhận."</em></div>
              </div>
              <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3px solid #0d9488; border-radius: 6px; padding: 12px 14px;">
                <div style="font-weight: 700; color: #0f766e; font-size: 0.88rem; margin-bottom: 4px;">Bước 2: AI mô tả lại cách hiểu</div>
                <div style="font-size: 0.83rem; color: #475569; line-height: 1.5;">AI phản hồi tóm tắt cách hiểu, đề xuất mục tiêu, số liệu SGK và khung 8 slide dự kiến rồi dừng lại.</div>
              </div>
              <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3px solid #d97706; border-radius: 6px; padding: 12px 14px;">
                <div style="font-weight: 700; color: #b45309; font-size: 0.88rem; margin-bottom: 4px;">Bước 3: Người dạy duyệt & xác nhận</div>
                <div style="font-size: 0.83rem; color: #475569; line-height: 1.5;">Người dạy rà soát khung dàn ý: Nếu thiếu số liệu FDI trang 10 thì bảo sửa; nếu đạt thì phê duyệt tiếp tục.</div>
              </div>
              <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3px solid #16a34a; border-radius: 6px; padding: 12px 14px;">
                <div style="font-weight: 700; color: #15803d; font-size: 0.88rem; margin-bottom: 4px;">Bước 4: AI mới chính thức thực hiện</div>
                <div style="font-size: 0.83rem; color: #475569; line-height: 1.5;">Sau khi nhận được lệnh duyệt, AI mới bắt đầu viết chi tiết nội dung 8 slide theo đúng quy chuẩn 3 dòng.</div>
              </div>
            </div>
          </div>

          <!-- PHẦN 2: 6 KỸ THUẬT ĐÁNH GIÁ & THẨM ĐỊNH KẾT QUẢ AI -->
          <div style="margin-bottom: 24px;">
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 8px;">
              2. Bộ 6 Kỹ thuật đánh giá & thẩm định kết quả AI (Bài 6 trong giáo trình)
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 12px 0;">
              Khi AI đã xuất ra kết quả, người dạy áp dụng 6 kỹ thuật dưới đây để nghiệm thu chất lượng sản phẩm:
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 12px;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px 14px;">
                <strong style="color: #2563eb; font-size: 0.86rem;">1. Đọc lại & So sánh với SGK gốc:</strong>
                <p style="margin: 4px 0 0 0; font-size: 0.82rem; color: #475569; line-height: 1.5;">
                  Mở NotebookLM bấm vào các trích dẫn <code>[Trang 10]</code> xem AI trích xuất có đúng số liệu FDI hay tự bịa số liệu. Thấy bất thường &rarr; kiểm tra lại ngay.
                </p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px 14px;">
                <strong style="color: #2563eb; font-size: 0.86rem;">2. Yêu cầu AI giải thích lại:</strong>
                <p style="margin: 4px 0 0 0; font-size: 0.82rem; color: #475569; line-height: 1.5;">
                  Nếu thuật ngữ "FDI" hoặc "Khu vực hoá" trên slide còn học thuật, yêu cầu AI viết lại Speaker Notes bằng 1 ví dụ đời thường quen thuộc với học sinh.
                </p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px 14px;">
                <strong style="color: #2563eb; font-size: 0.86rem;">3. Đặt câu hỏi ngược (Phản biện AI):</strong>
                <p style="margin: 4px 0 0 0; font-size: 0.82rem; color: #475569; line-height: 1.5;">
                  Hỏi thẳng AI: <em>"Trong 8 slide này, có chỗ nào đang vi phạm quy tắc quá 3 gạch đầu dòng không? Có số liệu nào chưa khớp SGK không?"</em> để AI tự bắt lỗi.
                </p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px 14px;">
                <strong style="color: #2563eb; font-size: 0.86rem;">4. Kiểm tra chéo đa công cụ:</strong>
                <p style="margin: 4px 0 0 0; font-size: 0.82rem; color: #475569; line-height: 1.5;">
                  So sánh nội dung slide do ChatGPT tạo ra với bản trích xuất gốc từ NotebookLM để loại bỏ những luận điểm trôi nổi không có trong SGK.
                </p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px 14px;">
                <strong style="color: #2563eb; font-size: 0.86rem;">5. Kiểm tra dữ liệu đầu vào (Input review):</strong>
                <p style="margin: 4px 0 0 0; font-size: 0.82rem; color: #475569; line-height: 1.5;">
                  Rà soát thông tin cung cấp: Nếu ta nạp thiếu trang 11-12 về Việt Nam, AI sẽ viết slide cơ hội/thách thức rất chung chung (Dữ liệu sai &rarr; Kết quả sai).
                </p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px 14px;">
                <strong style="color: #2563eb; font-size: 0.86rem;">6. Chia nhỏ để kiểm tra từng slide:</strong>
                <p style="margin: 4px 0 0 0; font-size: 0.82rem; color: #475569; line-height: 1.5;">
                  Thẩm định từng slide theo thứ tự từ Slide 1 đến Slide 8 thay vì nhìn lướt cả bộ, giúp dễ dàng phát hiện lỗi sai ở từng số liệu nhỏ.
                </p>
              </div>
            </div>
          </div>

          <!-- PHẦN 3: BỘ 5 CÂU LỆNH MẪU SẴN SÀNG SỬ DỤNG -->
          <div>
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 6px;">
              3. Bộ 5 câu lệnh mẫu sẵn sàng sử dụng cho Bài 2 SGK Địa Lí 11
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 12px 0;">
              Các câu lệnh dưới đây đã được tích hợp chặt chẽ giữa <strong>kỹ thuật tạo slide</strong> và <strong>tư duy kiểm soát AI</strong>. Bạn chỉ cần bấm <strong>Sao chép</strong> để sử dụng khi thực hành ở <strong>Hoạt động 3</strong>:
            </p>

            <div style="display: flex; flex-direction: column; gap: 12px;">
              
              <!-- P1 -->
              <div class="article-prompt-card">
                <div class="article-prompt-header">
                  <span class="article-prompt-title">Prompt 01: Quy Trình Kiểm Soát 4 Bước Có Chặn Chốt (Bắt AI Dừng Lại Chờ Duyệt)</span>
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
                  <span class="article-prompt-title">Prompt 02: Trích Xuất Dàn Ý 8 Slide Kèm Trích Dẫn Số Trang (Dùng Trên NotebookLM)</span>
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
                  <span class="article-prompt-title">Prompt 03: Master Prompt Tinh Gọn 8 Slide Kèm Gợi Ý Ảnh AI (Dán Vào Gamma App)</span>
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
                  <span class="article-prompt-title">Prompt 04: Đặt Câu Hỏi Ngược Phản Biện Bắt AI Tự Sửa Lỗi Số Liệu & Quá Tải Chữ</span>
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
                  <span class="article-prompt-title">Prompt 05: Giải Thích Thuật Ngữ Khó Bằng Ví Dụ Đời Thường Cho Speaker Notes</span>
                  <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P5)}'), 'Đã sao chép Prompt 5!')">
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Sao chép Prompt 5
                  </button>
                </div>
                <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 160px; overflow-y: auto;">${LIB_P5}</pre>
              </div>

            </div>
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- HOẠT ĐỘNG 3: LUYỆN TẬP TẠI LỚP                                       -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #fef3c7; color: #b45309; font-weight: 800; font-size: 0.85rem; padding: 3px 10px; border-radius: 4px;">Hoạt động 3</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Luyện Tập: Tạo Slide Bằng 3 Công Cụ & Kiểm Soát Chất Lượng (80 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 80 phút</span>
          </div>

          <div style="margin-bottom: 14px;">
            <strong style="color: #92400e; font-size: 0.92rem;">• Mục tiêu:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Mở file PDF <strong>Sách Giáo Khoa Địa Lí 11</strong> (Bài 2: Trang 9-12), phối hợp nhịp nhàng 3 công cụ (NotebookLM, ChatGPT, Gamma App) để sản xuất bộ Slide bài giảng hoàn chỉnh và trực tiếp áp dụng các kỹ thuật thẩm định số liệu trước khi lưu trữ.
            </p>
          </div>

          <!-- HỌC LIỆU THỰC HÀNH: NÚT TẢI & XEM PDF SGK ĐỊA LÍ 11 -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 18px; margin: 16px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="background: #10b981; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem;">
                PDF
              </div>
              <div>
                <div style="font-weight: 700; color: #065f46; font-size: 0.95rem;">Học liệu thực hành: Sách Giáo Khoa Địa Lí 11 — Kết Nối Tri Thức Với Cuộc Sống</div>
                <div style="font-size: 0.83rem; color: #047857;">Bản in chuẩn 171 trang của NXB Giáo dục Việt Nam • Trọng tâm thực hành: Bài 2 (Trang 9 – 12)</div>
              </div>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <a href="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" download="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Tải File PDF (30MB)
              </a>
              <a href="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" target="_blank" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
                Mở Xem Trực Tiếp
              </a>
            </div>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="color: #92400e; font-size: 0.92rem;">• Tiến trình thực hiện qua 3 chặng cụ thể:</strong>
            
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
              
              <!-- Chặng 3.1 -->
              <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 14px 16px;">
                <div style="font-weight: 700; color: #b45309; font-size: 0.92rem; margin-bottom: 4px;">
                  Chặng 3.1 (25 phút): Nạp SGK Vào NotebookLM & Chạy Kiểm Soát 4 Bước Rút Dàn Ý 8 Slide
                </div>
                <div style="font-size: 0.88rem; color: #475569; line-height: 1.6;">
                  • Truy cập <code>notebooklm.google.com</code>, tạo sổ tay mới và tải file PDF SGK Địa Lí 11 lên.
                  <br>• Dùng <strong>Prompt 1</strong> cài chốt chặn kiểm soát: Yêu cầu AI phân tích bài toán và dừng lại chờ xác nhận.
                  <br>• Sau khi duyệt khung, dùng <strong>Prompt 2</strong> để NotebookLM trích xuất Dàn ý 8 slide súc tích kèm trích dẫn số trang [Trang 9, 10, 11] và Speaker Notes. Sao chép toàn bộ kết quả này!
                </div>
              </div>

              <!-- Chặng 3.2 -->
              <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 14px 16px;">
                <div style="font-weight: 700; color: #b45309; font-size: 0.92rem; margin-bottom: 4px;">
                  Chặng 3.2 (30 phút): Dùng ChatGPT Tinh Gọn Chữ & Mang Sang Gamma App Sinh Slide Tự Động
                </div>
                <div style="font-size: 0.88rem; color: #475569; line-height: 1.6;">
                  • Mở <code>chatgpt.com</code>, dùng <strong>Prompt 3</strong> dán kèm Dàn ý từ NotebookLM để AI khóa chặt quy tắc Slide 3 dòng và tạo câu lệnh sinh ảnh AI (Image Prompts).
                  <br>• Mở <code>gamma.app</code> &rarr; <em>Create new with AI</em> &rarr; <em>Generate from text</em> &rarr; Dán Master Prompt vào &rarr; Chọn <strong>8 Cards</strong> & chế độ ảnh AI &rarr; Bấm <strong>Generate</strong>.
                  <br>• Trong 60 giây, Gamma tự động dàn trang 8 slide đẹp mắt. Bấm <em>Share &rarr; Export to PowerPoint (.pptx)</em> để tải về máy!
                </div>
              </div>

              <!-- Chặng 3.3 -->
              <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 14px 16px;">
                <div style="font-weight: 700; color: #b45309; font-size: 0.92rem; margin-bottom: 4px;">
                  Chặng 3.3 (25 phút): Thẩm Định Số Liệu, Phản Biện Bắt Lỗi & Tạo Podcast Bài Học
                </div>
                <div style="font-size: 0.88rem; color: #475569; line-height: 1.6;">
                  • Quay lại NotebookLM bấm vào các trích dẫn <code>[Trang 10]</code> để đối chiếu lại bảng số liệu FDI và thương mại với sách gốc.
                  <br>• Dùng <strong>Prompt 4</strong> (Kỹ thuật 3) đặt câu hỏi ngược để AI tự rà soát lỗi quá tải chữ hoặc sai lệch số liệu.
                  <br>• Dùng <strong>Prompt 5</strong> nếu cần giải thích lại các khái niệm khó như FDI bằng ví dụ đời thường.
                  <br>• Bấm nút <strong>Generate Audio Overview</strong> trên NotebookLM để xuất file Podcast âm thanh bài giảng.
                </div>
              </div>

            </div>

            <div style="margin-top: 14px; padding: 12px 16px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; color: #1e293b;">
              <strong>Sản phẩm cần hoàn thành:</strong> 01 File PowerPoint (.pptx) gồm 8 slide hoàn chỉnh tải từ Gamma App + 01 Bản ghi chú đối chiếu số liệu nguồn và file âm thanh Podcast từ NotebookLM.
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
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Vận Dụng: Tiêu Chí Nghiệm Thu Bộ Slide Bài Giảng (30 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 30 phút</span>
          </div>

          <div style="margin-bottom: 14px;">
            <strong style="color: #6b21a8; font-size: 0.92rem;">• Mục tiêu:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Tự rà soát và đối chiếu bộ Slide bài giảng vừa tạo với <strong>5 tiêu chuẩn chất lượng cốt lõi</strong> (kết hợp chuẩn thiết kế trình chiếu và tư duy kiểm soát AI theo Bài 6 giáo trình), loại bỏ triệt để các sai sót trước khi trình chiếu thực tế.
            </p>
          </div>

          <div>
            <strong style="color: #6b21a8; font-size: 0.92rem;">• Tiêu chí đánh giá kết quả Slide bài giảng (Bảng tự kiểm tra 5 tiêu chí):</strong>
            <p style="margin: 4px 0 10px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Dùng bảng tiêu chí bên dưới để tự rà soát bộ sản phẩm Slide Bài 2 Địa lí 11 vừa hoàn thành:
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
                  <td><strong>1. Tính kiểm soát chốt chặn (Bài 6)</strong></td>
                  <td>Đã cài câu lệnh chặn chốt "chờ xác nhận" trước khi AI sinh chi tiết; người dạy duyệt dàn khung trước?</td>
                  <td>Đạt / Cần bổ sung lệnh chốt</td>
                </tr>
                <tr>
                  <td><strong>2. Độ chính xác số liệu SGK</strong></td>
                  <td>Các số liệu thương mại, FDI ở Slide 4 đã đối chiếu khớp 100% với bảng trang 10 SGK Địa lí 11; không bịa số liệu?</td>
                  <td>Đạt 100% chuẩn SGK / Cần sửa lại</td>
                </tr>
                <tr>
                  <td><strong>3. Tính súc tích (Quy tắc 3 dòng)</strong></td>
                  <td>Mỗi slide tối đa 3 gạch đầu dòng ngắn gọn (dưới 12 từ/dòng); không có slide nào chứa đoạn văn xuôi dài dòng?</td>
                  <td>Đạt / Cần rút ngắn bớt chữ</td>
                </tr>
                <tr>
                  <td><strong>4. Lời giảng gợi ý (Speaker Notes)</strong></td>
                  <td>Mỗi slide đều có đoạn lời giảng gợi ý 40-50 từ viết bằng ví dụ đời thường gần gũi, không đọc lại chữ trên màn hình?</td>
                  <td>Đạt / Cần bổ sung lời giảng</td>
                </tr>
                <tr>
                  <td><strong>5. Năng lực phản biện AI</strong></td>
                  <td>Đã thực hiện ít nhất 01 lần đặt câu hỏi ngược (Reverse Critique) để AI tự rà soát và sửa lỗi chất lượng?</td>
                  <td>Đạt / Cần thực hiện phản biện</td>
                </tr>
              </tbody>
            </table>

            <div style="padding: 12px 16px; background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 6px; font-size: 0.88rem; color: #581c87;">
              <strong>Sản phẩm hoàn thành:</strong> Bộ Slide PowerPoint (.pptx) hoàn chỉnh 8 slide đạt đủ 5 tiêu chuẩn trên, kết hợp file âm thanh Podcast bài giảng, sẵn sàng mang lên lớp giảng dạy thực tế.
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- III. HƯỚNG DẪN VỀ NHÀ VÀ DẶN DÒ                                          -->
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
              <h3 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0;">Ôn tập bài cũ & Lưu trữ sản phẩm</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #475569; line-height: 1.65;">
              <li>Ôn lại bài cũ: Nắm vững Quy trình kiểm soát 4 bước và kỹ thuật đặt câu hỏi ngược phản biện AI.</li>
              <li>Lưu trữ file PowerPoint (.pptx) từ Gamma App và file âm thanh Podcast (.mp3) từ NotebookLM vào thư mục học tập cá nhân.</li>
              <li>Thử nghiệm nạp một tài liệu giảng dạy khác thuộc chuyên môn của mình vào NotebookLM và chạy lại quy trình kiểm soát 4 bước.</li>
            </ul>
          </div>

          <!-- Hộp 2: Chuẩn bị Buổi 6 -->
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(37,99,235,0.06);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #eff6ff; color: #1d4ed8; font-weight: 800; font-size: 0.82rem; padding: 2px 8px; border-radius: 4px;">Nhiệm vụ 2</span>
              <h3 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0;">Chuẩn bị học liệu cho Buổi 6</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #475569; line-height: 1.65;">
              <li><strong>Nội dung Buổi 6 tiếp theo:</strong> <em>"Thiết Kế Đề Thi, Ma Trận Đánh Giá & Rubric Chấm Điểm Chuẩn Đo Lường"</em>.</li>
              <li>Chuẩn bị sẵn bảng chuẩn kiến thức kỹ năng hoặc đề kiểm tra mẫu của học phần mình đang giảng dạy.</li>
              <li>Tìm hiểu trước cách xây dựng Rubric đánh giá đa mức độ để sẵn sàng thực hành tương tác ở buổi sau.</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  `;

  // =========================================================================
  // 4. ĐĂNG KÝ VÀO REGISTRY HỆ THỐNG
  // =========================================================================
  const session5Data = {
    id: 5,
    number: 5,
    title: "Buổi 5: Tạo Slide Tự Động Với NotebookLM & Kiểm Soát Chất Lượng AI",
    topic: "Tạo Slide Tự Động & Kiểm Soát AI",
    tools: ["NotebookLM", "ChatGPT", "Gamma"],
    duration: "180 phút (3 giờ)",
    deliverable: "Bộ Slide bài giảng 8 slide hoàn chỉnh (.pptx từ Gamma) chuẩn nguồn SGK Địa Lí 11, áp dụng quy trình kiểm soát 4 bước và bộ 6 kỹ thuật đánh giá chất lượng slide AI",
    overview: "Phối hợp Google NotebookLM, ChatGPT và Gamma App để sản xuất bộ Slide bài giảng chuyên nghiệp; làm chủ quy trình kiểm soát AI chuẩn 4 bước và 6 kỹ thuật thẩm định, phản biện lỗi số liệu AI theo giáo trình.",
    articleHtml: articleHtml,
    objectives: [
      "1. Kiến thức: Nắm vững quy trình phối hợp 3 công cụ (NotebookLM, ChatGPT, Gamma), hiểu bản chất Quy trình kiểm soát chuẩn 4 bước và 6 kỹ thuật thẩm định kết quả AI từ Bài 6 giáo trình.",
      "2. Năng lực: Tự tay dùng AI tạo bộ slide 8 trang có phong cách ảnh chuyên nghiệp, biết cách đặt lệnh chốt chặn kiểm soát và đặt câu hỏi ngược phản biện để AI tự sửa lỗi sai số liệu.",
      "3. Phẩm chất: Trách nhiệm học thuật cao, luôn đối chiếu số liệu SGK chính thức, làm chủ công nghệ và không để AI tự biên tự diễn."
    ],
    timeline: [
      { time: "00 - 15p", title: "Hoạt động 1: Khởi động (Tạo tình huống xuất phát)", desc: "So sánh câu lệnh thô (AI tự biên tự diễn mất kiểm soát) vs Câu lệnh có chốt chặn kiểm soát 4 bước." },
      { time: "15 - 65p", title: "Hoạt động 2: Phương pháp kiểm soát AI & Bộ 5 câu lệnh mẫu", desc: "Quy trình kiểm soát 4 bước, 6 kỹ thuật thẩm định kết quả và bàn giao bộ 5 câu lệnh mẫu chuyên sâu." },
      { time: "65 - 145p", title: "Hoạt động 3: Luyện tập tại lớp", desc: "Thực hành 3 chặng: Nạp SGK vào NotebookLM -> Chuyển sang ChatGPT & Gamma sinh slide -> Phản biện lỗi số liệu và xuất Podcast." },
      { time: "145 - 175p", title: "Hoạt động 4: Vận dụng / Tiêu chí nghiệm thu", desc: "Tự rà soát bộ slide theo bảng 5 tiêu chuẩn chất lượng (tính kiểm soát, chuẩn số liệu SGK, quy tắc 3 dòng, Speaker Notes, phản biện)." },
      { time: "175 - 180p", title: "III. Hướng dẫn về nhà & Dặn dò", desc: "Ôn lại bài cũ, lưu trữ slide .pptx và audio .mp3, chuẩn bị học liệu cho Buổi 6." }
    ],
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
