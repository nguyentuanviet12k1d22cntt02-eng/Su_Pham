/**
 * SESSION 4: DÙNG AI TẠO TRỌN BỘ NỘI DUNG SLIDE BÀI GIẢNG
 * (js/data/sessions/session-04.js)
 * Tiếp nối Kế hoạch bài dạy đã xây dựng ở Buổi 3:
 * Chuyển hóa Kế hoạch bài dạy Bài 2 SGK Địa Lí 11 (Trang 9 - 12) thành trọn bộ nội dung Slide bài giảng:
 * - Dàn ý 8 slide trình chiếu theo tiến trình 4 hoạt động
 * - Quy tắc Slide 3 dòng: Tiêu đề hành động, tối đa 3 ý ngắn gọn, không quá tải chữ
 * - Gợi ý hình ảnh, sơ đồ và biểu đồ trực quan từ SGK Địa lí 11
 * - Lời giảng gợi ý (Speaker Notes) chi tiết để người dạy nói bằng ngôn từ đời thường
 * NỘI DUNG THỰC CHIẾN, TỰ NHIÊN, DỄ HIỂU, TẬP TRUNG 100% VÀO SLIDE, KHÔNG TỰ SỰ, KHÔNG XƯNG HÔ THẦY CÔ.
 */

(function() {
  // PROMPTS SO SÁNH THỬ NGHIỆM ĐẦU GIỜ
  const PROMPT_UPGRADE_BEFORE = `Hãy soạn cho tôi slide bài giảng về Bài 2 Địa lí 11 Toàn cầu hoá kinh tế cho học sinh.`;

  const PROMPT_UPGRADE_AFTER = `VAI TRÒ: Chuyên gia thiết kế nội dung slide trình chiếu môn Địa Lí 11.
BỐI CẢNH: Tiếp nối Kế hoạch bài dạy Bài 2: "Toàn cầu hoá và khu vực hoá kinh tế" (Trang 9 - 12 SGK Địa Lí 11 - Kết Nối Tri Thức Với Cuộc Sống). Thời lượng bài dạy: 90 phút.
MỤC TIÊU: Thiết kế nội dung trình chiếu gồm 8 slide súc tích, trực quan, nói không với slide toàn chữ.

YÊU CẦU CẤU TRÚC CHO TỪNG SLIDE:
1. TIÊU ĐỀ SLIDE: Ngắn gọn, mang tính hành động hoặc gợi mở (dưới 8 từ).
2. NỘI DUNG HIỂN THỊ TRÊN MÀN HÌNH:
   - Tối đa 3 gạch đầu dòng ngắn gọn (mỗi gạch dưới 12 từ).
   - Nêu bật các từ khóa trọng tâm, số liệu so sánh, không viết thành đoạn văn dài.
3. GỢI Ý HÌNH ẢNH / BIỂU ĐỒ: Đề xuất cụ thể 1 hình ảnh đời thường, biểu đồ số liệu hoặc sơ đồ trực quan minh họa cho slide.
4. LỜI GIẢNG GỢI Ý (SPEAKER NOTES): Viết sẵn đoạn văn 40 - 50 từ để giáo viên giải thích tự nhiên bằng ví dụ thực tế trên lớp, không đọc lại chữ trên slide.

CẤU TRÚC 8 SLIDE BÁM SÁT TIẾN TRÌNH:
- Slide 1: Khởi động (Tình huống chiếc điện thoại thông minh toàn cầu).
- Slide 2: Bản chất của toàn cầu hoá kinh tế.
- Slide 3: 4 biểu hiện chính (thương mại, tài chính, đầu tư, công nghệ).
- Slide 4: Phân tích số liệu FDI và thương mại thế giới (Trang 10 SGK).
- Slide 5: Ý nghĩa & tác động đối với các nước đang phát triển.
- Slide 6: Phân biệt Toàn cầu hoá (WTO) và Khu vực hoá (ASEAN, EU).
- Slide 7: Cơ hội và thách thức của Việt Nam khi hội nhập sâu rộng.
- Slide 8: Bài tập tình huống vận dụng thực tế cho học sinh.`;

  // BỘ 5 CÂU LỆNH MẪU SẴN SÀNG SỬ DỤNG
  const LIB_P1 = `VAI TRÒ: Chuyên gia thiết kế dàn ý slide trình chiếu Địa Lí 11.
NHIỆM VỤ: Dựa trên Bài 2 SGK Địa Lí 11 (Trang 9 - 12), hãy lập Dàn ý chi tiết cho bộ Slide gồm 8 slide theo 4 hoạt động bài dạy:

YÊU CẦU CHO TỪNG SLIDE:
1. Tên slide & Tiêu đề hành động.
2. Nội dung hiển thị trên slide: Tối đa 3 gạch đầu dòng, mỗi gạch dưới 12 từ.
3. Ý tưởng hình ảnh hoặc sơ đồ minh họa tương ứng trong SGK Địa lí 11.
4. Lời giảng gợi ý (Speaker Notes) khoảng 40 - 50 từ để người dạy diễn giải sinh động.

DANH SÁCH 8 SLIDE CẦN SOẠN:
- Slide 1: Khởi động — Hình ảnh linh kiện điện thoại thông minh từ nhiều quốc gia.
- Slide 2: Khái niệm & bản chất toàn cầu hoá kinh tế.
- Slide 3: 4 biểu hiện cốt lõi (Thương mại, tài chính, FDI, công nghệ).
- Slide 4: Số liệu thực tế thương mại & FDI thế giới (Trích bảng trang 10 SGK).
- Slide 5: Tác động của toàn cầu hóa đến các nước đang phát triển.
- Slide 6: So sánh đối chiếu Toàn cầu hoá (WTO) và Khu vực hoá (ASEAN, EU).
- Slide 7: Cơ hội và thách thức đối với nền kinh tế Việt Nam.
- Slide 8: Bài tập tình huống thực tế cho học sinh thảo luận.`;

  const LIB_P2 = `VAI TRÒ: Chuyên gia biên soạn nội dung slide trình chiếu Địa Lí 11.
NHIỆM VỤ: Viết nội dung chi tiết cho Slide số 3 (4 biểu hiện của toàn cầu hoá) và Slide số 6 (Phân biệt toàn cầu hoá vs khu vực hoá) của Bài 2 Địa lí 11:

YÊU CẦU:
1. Với mỗi slide, chia rõ 3 phần:
   - TIÊU ĐỀ MÀN HÌNH: Ngắn gọn, hấp dẫn.
   - NỘI DUNG SLIDE: Đúng 3 gạch đầu dòng, tuyệt đối không dùng câu văn dài.
   - SPEAKER NOTES: Đoạn văn 50 từ giải thích dễ hiểu, dùng ngôn ngữ đời thường gần gũi với học sinh lớp 11.
2. Nhấn mạnh điểm học sinh hay nhầm lẫn nhất giữa WTO và ASEAN để giáo viên nhấn mạnh trong lời giảng.`;

  const LIB_P3 = `VAI TRÒ: Chuyên gia trực quan hóa số liệu Địa lí 11 lên slide.
NHIỆM VỤ: Dựa vào bảng số liệu FDI và thương mại thế giới tại Trang 10 SGK Địa Lí 11, hãy thiết kế nội dung cho Slide số 4 (Số liệu thương mại và FDI):

YÊU CẦU THIẾT KẾ:
1. Không chép nguyên cả bảng số liệu dày đặc lên màn hình slide.
2. Hãy rút ra 02 con số so sánh ấn tượng nhất (ví dụ: tốc độ tăng FDI so với tốc độ tăng GDP toàn cầu).
3. Thiết kế thành dạng so sánh đối chiếu 2 cột ngắn gọn để người học nhìn vào thấy ngay xu hướng phát triển.
4. Viết sẵn Lời giảng gợi ý (Speaker Notes) 50 từ hướng dẫn học sinh cách đọc và nhận xét biểu đồ số liệu trong sách giáo khoa.`;

  const LIB_P4 = `VAI TRÒ: Chuyên gia thiết kế slide bài tập tương tác môn Địa Lí 11.
NHIỆM VỤ: Thiết kế nội dung cho Slide số 7 và Slide số 8 (Cơ hội, thách thức và bài tập tình huống thực tế nông sản Việt Nam):

YÊU CẦU TRÊN SLIDE:
1. SLIDE 7: Bố cục 2 cột song song (Cột trái: 3 cơ hội lớn — Cột phải: 3 thách thức gay gắt của Việt Nam).
2. SLIDE 8: Đưa ra 01 câu chuyện ngắn 60 từ về lô hàng sầu riêng hoặc tôm cá Việt Nam xuất khẩu sang Mỹ/EU gặp rào cản kỹ thuật.
3. Kèm theo 02 câu hỏi ngắn gọn đặt trực tiếp trên màn hình để cả lớp thảo luận nhanh trong 3 phút.
4. Lời giảng gợi ý (Speaker Notes): Định hướng câu trả lời chuẩn để giáo viên chốt lại kiến thức sau giờ thảo luận.`;

  const LIB_P5 = `VAI TRÒ: Chuyên gia tối ưu hóa và tinh gọn slide bài giảng.
NHIỆM VỤ: Đọc đoạn nội dung slide dưới đây do AI vừa sinh ra và tinh gọn lại theo đúng Quy tắc Slide 3 dòng:

[DÁN NỘI DUNG SLIDE BỊ QUÁ TẢI CHỮ VÀO ĐÂY]

HÃY SỬA LẠI:
1. Rút ngắn nội dung trên màn hình thành tối đa 3 gạch đầu dòng, mỗi gạch dưới 12 từ.
2. Giữ lại toàn bộ ý giải thích chi tiết, ví dụ cụ thể và số liệu để chuyển vào phần Lời giảng gợi ý (Speaker Notes) cho giáo viên.
3. Đề xuất 01 ý tưởng hình ảnh hoặc biểu đồ phù hợp nhất để thay thế cho phần chữ đã cắt giảm.`;

  const articleHtml = `
    <div class="session-direct-article">

      <!-- BANNER TIÊU ĐỀ BUỔI HỌC -->
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: var(--radius-lg); padding: 24px 28px; box-shadow: var(--shadow-md); border: 1px solid #334155; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap;">
          <span style="background: #2563eb; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Khóa Đào Tạo AI Sư Phạm 4.0</span>
          <span style="background: #059669; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase;">Thực Hành Tiếp Nối Buổi 3</span>
        </div>
        <h1 style="font-size: 1.65rem; font-weight: 900; line-height: 1.35; margin: 0 0 10px 0; color: #ffffff;">
          BUỔI 4: DÙNG AI TẠO TRỌN BỘ NỘI DUNG SLIDE BÀI GIẢNG
        </h1>
        <p style="font-size: 0.95rem; color: #cbd5e1; margin: 0; line-height: 1.65;">
          Tiếp nối Kế hoạch bài dạy đã có ở Buổi 3, sử dụng AI để thiết kế trọn bộ nội dung Slide trình chiếu hoàn chỉnh từ <strong>Sách Giáo Khoa Địa Lí 11 (Bộ Kết Nối Tri Thức Với Cuộc Sống)</strong> — Bài 2: Toàn cầu hoá và khu vực hoá kinh tế. Trọng tâm: <em>Dàn ý 8 slide, quy tắc slide 3 dòng, trực quan hóa số liệu bảng biểu và lời giảng Speaker Notes chi tiết</em>.
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
          Mục tiêu đạt được sau bài học khi áp dụng AI thiết kế nội dung slide trình chiếu giảng dạy:
        </p>

        <!-- 1. Kiến thức -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #1e3a8a; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #dbeafe; color: #1e40af; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">1</span>
            Kiến Thức
          </div>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #334155; line-height: 1.65;">
            <li><strong>Quy tắc Slide 3 dòng:</strong> Hiểu rõ bản chất của slide trình chiếu là hỗ trợ thị giác, chỉ chứa tiêu đề hành động và tối đa 3 gạch đầu dòng ngắn (dưới 12 từ/dòng), kiên quyết loại bỏ slide "bức tường chữ".</li>
            <li><strong>Cấu trúc bộ Slide bài dạy 4 chặng:</strong> Nắm vững tiến trình chuyển từ Kế hoạch bài dạy sang 8 slide (Slide mở đầu gợi mở &rarr; Slide khám phá &rarr; Slide phân tích số liệu &rarr; Slide vận dụng thực tế).</li>
            <li><strong>Kỹ thuật Speaker Notes (Lời giảng gợi ý):</strong> Hiểu cách tách biệt giữa chữ hiển thị trên màn hình và câu chuyện thực tế giáo viên kể trên lớp.</li>
          </ul>
        </div>

        <!-- 2. Năng lực -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #065f46; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #dcfce7; color: #15803d; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">2</span>
            Năng Lực Thiết Kế Slide
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <div style="border-left: 3px solid #10b981; padding-left: 12px;">
              <strong style="color: #065f46; font-size: 0.9rem;">Tạo dàn ý slide súc tích:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Biết cách bắt AI xuất ra dàn ý 8 slide hoàn chỉnh bám sát nội dung Bài 2 Địa lí 11, chuẩn bị sẵn dữ liệu để nạp vào công cụ tạo slide tự động ở Buổi 5.
              </p>
            </div>
            <div style="border-left: 3px solid #3b82f6; padding-left: 12px;">
              <strong style="color: #1e40af; font-size: 0.9rem;">Trực quan hóa bảng số liệu:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Biết cách chuyển bảng số liệu FDI và thương mại dày đặc ở trang 10 SGK Địa lí 11 thành dạng đối chiếu 2 cột ngắn gọn, dễ hiểu trên màn hình.
              </p>
            </div>
            <div style="border-left: 3px solid #8b5cf6; padding-left: 12px;">
              <strong style="color: #6d28d9; font-size: 0.9rem;">Tinh gọn slide bị quá tải chữ:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Biết cách dùng câu lệnh để ép AI cắt gọt các đoạn văn dài dòng thành các từ khóa then chốt và chuyển chi tiết vào phần lời giảng gợi ý.
              </p>
            </div>
          </div>
        </div>

        <!-- 3. Phẩm chất -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #92400e; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #fef3c7; color: #b45309; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">3</span>
            Phẩm Chất
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <div style="border-left: 3px solid #f59e0b; padding-left: 12px;">
              <strong style="color: #92400e; font-size: 0.9rem;">Chính xác số liệu:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Luôn đối chiếu lại số liệu GDP, FDI và kim ngạch thương mại trên slide với bảng số liệu chính thức trang 9-11 SGK Địa lí 11 trước khi trình chiếu.
              </p>
            </div>
            <div style="border-left: 3px solid #10b981; padding-left: 12px;">
              <strong style="color: #065f46; font-size: 0.9rem;">Thấu cảm thị giác học sinh:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Không bắt học sinh phải đọc những slide dày đặc chữ gây mỏi mắt và mất tập trung; ưu tiên thiết kế thoáng đãng, dễ theo dõi.
              </p>
            </div>
            <div style="border-left: 3px solid #2563eb; padding-left: 12px;">
              <strong style="color: #1e40af; font-size: 0.9rem;">Tự tin làm chủ công nghệ:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Biến AI thành trợ lý đắc lực để tiết kiệm thời gian gõ nội dung, tập trung năng lượng vào việc thiết kế trải nghiệm giảng dạy sinh động.
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
              Nhận diện sai lầm phổ biến nhất khi dùng AI làm slide bài giảng: Nếu chỉ gõ lệnh chung chung, AI sẽ tự động sinh ra những slide chứa hàng chục dòng chữ sao chép nguyên văn SGK, biến buổi học thành giờ đọc chữ trên màn hình.
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
                  <span style="font-size: 0.85rem; font-weight: 700; color: #dc2626;">❌ 1. Câu lệnh thô (Gõ ngắn 1 dòng, không có quy chuẩn slide)</span>
                  <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_BEFORE)}'), 'Đã sao chép prompt thô!')">
                    Sao chép Prompt Thô
                  </button>
                </div>
                <div class="article-prompt-card" style="margin-top: 2px;">
                  <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.85rem;">${PROMPT_UPGRADE_BEFORE}</pre>
                </div>
                <div style="font-size: 0.84rem; color: #991b1b; margin-top: 4px; line-height: 1.5;">
                  <strong>Hậu quả:</strong> AI sinh ra các slide chi chít chữ (mỗi slide chứa 7-10 dòng văn bản dài ngoằng sao chép từ SGK). Lên lớp giáo viên chỉ biết quay lưng lại nhìn màn hình đọc chữ, học sinh mỏi mắt và mất tập trung sau 10 phút.
                </div>
              </div>

              <!-- After -->
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 0.85rem; font-weight: 700; color: #16a34a;">✅ 2. Câu lệnh chuẩn (Quy tắc 3 dòng + Gợi ý hình ảnh + Speaker Notes)</span>
                  <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_UPGRADE_AFTER)}'), 'Đã sao chép prompt chuẩn!')">
                    Sao chép Prompt Chuẩn
                  </button>
                </div>
                <div class="article-prompt-card" style="margin-top: 2px;">
                  <pre class="article-prompt-code" style="padding: 14px 16px; font-size: 0.85rem; max-height: 240px; overflow-y: auto;">${PROMPT_UPGRADE_AFTER}</pre>
                </div>
                <div style="font-size: 0.84rem; color: #166534; margin-top: 4px; line-height: 1.5;">
                  <strong>Ưu điểm:</strong> AI chia rõ ràng: Màn hình slide chỉ có 3 gạch đầu dòng từ khóa ngắn gọn (dưới 12 từ/dòng), có ý tưởng hình ảnh trực quan (chuỗi cung ứng điện thoại thông minh), và có sẵn đoạn Lời giảng Speaker Notes 50 từ để giáo viên giải thích tự nhiên.
                </div>
              </div>
            </div>

            <!-- Kết luận khởi động -->
            <div style="margin-top: 14px; padding: 12px 16px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; font-size: 0.88rem; color: #1e3a8a;">
              <strong>Nguyên tắc vàng:</strong> Slide sinh ra là để <em>nhìn</em> (hỗ trợ thị giác bằng từ khóa và hình ảnh), chứ không phải để <em>đọc</em> cả cuốn sách giáo khoa lên màn hình.
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
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Phương Pháp Biên Soạn Nội Dung Slide & Bộ Câu Lệnh Mẫu (50 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 50 phút</span>
          </div>

          <!-- Mục tiêu tự nhiên, dễ hiểu -->
          <div style="margin-bottom: 18px; background: #f8fafc; border-left: 4px solid #10b981; padding: 10px 14px; border-radius: 0 6px 6px 0;">
            <strong style="color: #065f46; font-size: 0.9rem;">Mục tiêu phần này:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.88rem; color: #334155; line-height: 1.6;">
              Nắm chắc cấu trúc 3 phần của một Slide chuẩn <strong>(Tiêu đề &rarr; Màn hình 3 dòng &rarr; Speaker Notes)</strong> và lấy bộ 5 câu lệnh mẫu chuyên sâu để chuẩn bị thực hành.
            </p>
          </div>

          <!-- PHẦN 1: CẤU TRÚC 3 THÀNH PHẦN CỦA SLIDE -->
          <div style="margin-bottom: 24px;">
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 6px;">
              1. Cấu trúc chuẩn của một Slide bài giảng hiện đại
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.65; margin: 0 0 12px 0;">
              Khi nhờ AI tạo nội dung cho từng slide, bắt buộc phải yêu cầu AI phân tách rạch ròi giữa <strong>cái hiển thị trên màn hình</strong> và <strong>lời người dạy nói trên bục giảng</strong>:
            </p>

            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin: 10px 0;">
              <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                
                <!-- Cột trái: Màn hình Slide -->
                <div style="flex: 1; min-width: 280px;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                    <strong style="color: #0f172a; font-size: 0.88rem;">🖥️ Hiển thị trên màn hình Slide:</strong>
                    <span style="font-size: 0.78rem; background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-weight: 700;">Dưới 35 chữ</span>
                  </div>
                  <div style="background: #0f172a; color: #ffffff; padding: 16px; border-radius: 6px; font-size: 0.85rem; line-height: 1.65; border: 1px solid #334155;">
                    <div style="color: #38bdf8; font-weight: 800; font-size: 0.95rem; margin-bottom: 8px; border-bottom: 1px solid #1e293b; padding-bottom: 6px;">
                      4 BIỂU HIỆN CỦA TOÀN CẦU HOÁ KINH TẾ
                    </div>
                    • Thương mại quốc tế bùng nổ, WTO điều phối toàn cầu.<br>
                    • Dòng vốn FDI và thị trường tài chính xuyên biên giới.<br>
                    • Các tập đoàn đa quốc gia (TNCs) dẫn dắt chuỗi sản xuất.<br>
                    • Công nghệ và tri thức chuyển giao tốc độ cao.
                    <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed #334155; font-size: 0.78rem; color: #94a3b8;">
                      📷 <em>Gợi ý hình ảnh:</em> Sơ đồ mạng lưới vệ tinh kết nối các châu lục và logo của WTO, WB, IMF.
                    </div>
                  </div>
                </div>

                <!-- Cột phải: Lời giảng gợi ý -->
                <div style="flex: 1; min-width: 280px;">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                    <strong style="color: #0f172a; font-size: 0.88rem;">🎙️ Speaker Notes (Lời giảng gợi ý cho giáo viên):</strong>
                    <span style="font-size: 0.78rem; background: #fef3c7; color: #b45309; padding: 2px 6px; border-radius: 4px; font-weight: 700;">Khoảng 50 từ</span>
                  </div>
                  <div style="background: #fffbeb; border: 1px solid #fde68a; color: #92400e; padding: 16px; border-radius: 6px; font-size: 0.85rem; line-height: 1.65;">
                    <em>"Các em hãy nhìn lên màn hình. Toàn cầu hóa không phải là lý thuyết xa xôi mà đang diễn ra ngay trước mắt: Chiếc áo các em mặc có thể may từ vải nhập khẩu Hàn Quốc, chiếc máy bay Airbus có linh kiện từ 30 nước. Bốn mũi tên trên màn hình chính là bốn dòng chảy đang gắn kết mọi nền kinh tế lại với nhau..."</em>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- PHẦN 2: TRỰC QUAN HÓA BẢNG SỐ LIỆU SGK -->
          <div style="margin-bottom: 24px;">
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 6px;">
              2. Kỹ thuật đưa bảng số liệu SGK lên Slide (Không copy cả bảng khô khan)
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 10px 0;">
              Trang 10 SGK Địa lí 11 có bảng số liệu nhiều cột, nhiều hàng. Nếu copy nguyên bảng lên slide, học sinh sẽ không biết nhìn vào đâu. Cách xử lý chuẩn:
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 12px 0;">
              <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 14px;">
                <div style="font-weight: 700; color: #b91c1c; font-size: 0.9rem; margin-bottom: 4px;">❌ Cách làm sai:</div>
                <div style="font-size: 0.85rem; color: #7f1d1d; line-height: 1.55;">
                  Chụp ảnh nguyên bảng số liệu trang 10 SGK dán lên slide với 20 con số nhỏ li ti.<br>
                  &rarr; <strong>Hậu quả:</strong> Người ngồi bàn dưới không đọc được chữ nào, giáo viên phải tự đọc từng dòng số liệu rất nhàm chán.
                </div>
              </div>
              <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; padding: 14px;">
                <div style="font-weight: 700; color: #15803d; font-size: 0.9rem; margin-bottom: 4px;">✅ Cách làm đúng (Trực quan hóa):</div>
                <div style="font-size: 0.85rem; color: #14532d; line-height: 1.55;">
                  Rút ra 2 thông điệp đắt giá nhất:<br>
                  • <strong>Thương mại tăng nhanh gấp 2 lần GDP:</strong> Thể hiện sự trao đổi hàng hóa toàn cầu bùng nổ.<br>
                  • <strong>Dòng vốn FDI tăng kỷ lục:</strong> Các tập đoàn liên tục mở rộng nhà máy ra khắp thế giới.
                </div>
              </div>
            </div>
          </div>

          <!-- PHẦN 3: BỘ 5 CÂU LỆNH MẪU SẴN SÀNG SỬ DỤNG -->
          <div>
            <div style="font-weight: 700; color: #1e3a8a; font-size: 1rem; margin-bottom: 6px;">
              3. Bộ 5 câu lệnh mẫu sẵn sàng sử dụng cho Bài 2 SGK Địa Lí 11
            </div>
            <p style="font-size: 0.88rem; color: #334155; line-height: 1.6; margin: 0 0 12px 0;">
              Các câu lệnh dưới đây đã được viết chuẩn cho nội dung slide Bài 2 SGK Địa Lí 11. Bạn chỉ cần bấm <strong>Sao chép</strong> để dán vào AI khi thực hành ở <strong>Hoạt động 3</strong>:
            </p>

            <!-- Thư viện 5 Prompts -->
            <div style="display: flex; flex-direction: column; gap: 12px;">
              
              <!-- P1 -->
              <div class="article-prompt-card">
                <div class="article-prompt-header">
                  <span class="article-prompt-title">Prompt 01: Thiết Kế Khung Dàn Ý 8 Slide Bài Giảng Bài 2 Địa Lí 11</span>
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
                  <span class="article-prompt-title">Prompt 02: Viết Chi Tiết Nội Dung Từng Slide Kèm Lời Giảng Speaker Notes</span>
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
                  <span class="article-prompt-title">Prompt 03: Chuyển Bảng Số Liệu Trang 10 SGK Thành Slide So Sánh Đối Chiếu</span>
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
                  <span class="article-prompt-title">Prompt 04: Tạo Slide Tình Huống Thực Tế Nông Sản Việt Nam Kèm Câu Hỏi</span>
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
                  <span class="article-prompt-title">Prompt 05: Tinh Gọn Slide — Rút Ngắn Văn Bản Chi Chít Thành 3 Gạch Đầu Dòng</span>
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
        <!-- HOẠT ĐỘNG 3: LUYỆN TẬP                                               -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #fef3c7; color: #b45309; font-weight: 800; font-size: 0.85rem; padding: 3px 10px; border-radius: 4px;">Hoạt động 3</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Luyện Tập: Thực Hành Tạo Bộ Nội Dung 8 Slide Bài 2 Địa Lí 11 (80 phút)</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Thời lượng: 80 phút</span>
          </div>

          <div style="margin-bottom: 14px;">
            <strong style="color: #92400e; font-size: 0.92rem;">• Mục tiêu:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Mở file PDF <strong>Sách Giáo Khoa Địa Lí 11</strong> (Bài 2: Trang 9-12), chạy các câu lệnh mẫu trên AI để hoàn thành toàn bộ nội dung cho 8 slide trình chiếu và trực tiếp rà soát số liệu thật trước khi lưu trữ.
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
                  Chặng 3.1 (35 phút): Tạo Khung Dàn Ý 8 Slide & Chi Tiết Lời Giảng Speaker Notes
                </div>
                <div style="font-size: 0.88rem; color: #475569; line-height: 1.6;">
                  • Dùng <strong>Prompt 1</strong> để AI tạo Dàn ý khung 8 slide ngắn gọn bám sát tiến trình bài học.
                  <br>• Dùng <strong>Prompt 2</strong> để viết chi tiết nội dung slide hiển thị (tối đa 3 gạch đầu dòng) và đoạn Lời giảng Speaker Notes 50 từ cho từng slide.
                </div>
              </div>

              <!-- Chặng 3.2 -->
              <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 14px 16px;">
                <div style="font-weight: 700; color: #b45309; font-size: 0.92rem; margin-bottom: 4px;">
                  Chặng 3.2 (45 phút): Trực quan hóa số liệu bảng biểu & Tạo slide tình huống
                </div>
                <div style="font-size: 0.88rem; color: #475569; line-height: 1.6;">
                  • Mở bảng số liệu trang 10 SGK Địa lí 11, dùng <strong>Prompt 3</strong> biến các con số FDI và thương mại khô khan thành slide so sánh đối chiếu 2 cột.
                  <br>• Dùng <strong>Prompt 4</strong> tạo slide bài tập tình huống xuất khẩu sầu riêng/nông sản Việt Nam kèm 2 câu hỏi tranh luận nhanh 3 phút.
                  <br>• Dùng <strong>Prompt 5</strong> nếu phát hiện slide nào bị AI viết quá dài, ép rút gọn lại dưới 12 từ/dòng.
                </div>
              </div>

            </div>

            <div style="margin-top: 14px; padding: 12px 16px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; color: #1e293b;">
              <strong>Sản phẩm cần hoàn thành:</strong> 01 File văn bản chứa nội dung hoàn chỉnh của 8 slide trình chiếu cho Bài 2 Địa lí 11 (Mỗi slide gồm: Tiêu đề + 3 gạch đầu dòng + Gợi ý hình ảnh + Speaker Notes lời giảng đời thường).
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
              Tự rà soát và đối chiếu bộ nội dung 8 slide vừa tạo với 4 tiêu chuẩn chất lượng trình chiếu, loại bỏ triệt để các slide bị quá tải chữ trước khi nạp vào phần mềm tạo slide tự động.
            </p>
          </div>

          <div>
            <strong style="color: #6b21a8; font-size: 0.92rem;">• Tiêu chí đánh giá kết quả Slide bài giảng (Bảng tự kiểm tra 4 tiêu chí):</strong>
            <p style="margin: 4px 0 10px 0; font-size: 0.9rem; color: #334155; line-height: 1.6;">
              Dùng bảng tiêu chí bên dưới để tự rà soát bộ nội dung 8 slide Bài 2 Địa lí 11 vừa hoàn thành:
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
                  <td><strong>1. Tính súc tích (Quy tắc 3 dòng)</strong></td>
                  <td>Mỗi slide tối đa 3-4 gạch đầu dòng ngắn gọn (dưới 12 từ/dòng); không có slide nào chứa đoạn văn xuôi dài dòng.</td>
                  <td>Đạt / Cần rút ngắn bớt chữ</td>
                </tr>
                <tr>
                  <td><strong>2. Lời giảng gợi ý (Speaker Notes)</strong></td>
                  <td>Mỗi slide đều có đoạn lời giảng gợi ý 40-50 từ viết bằng ngôn từ đời thường gần gũi, không đọc lại chữ trên màn hình.</td>
                  <td>Đạt / Cần bổ sung lời giảng</td>
                </tr>
                <tr>
                  <td><strong>3. Trực quan hóa số liệu & Tình huống</strong></td>
                  <td>Số liệu FDI và thương mại trang 10 SGK được trình bày so sánh đối chiếu; slide tình huống có câu hỏi thảo luận nhanh 3 phút.</td>
                  <td>Đạt / Cần thêm câu hỏi tương tác</td>
                </tr>
                <tr>
                  <td><strong>4. Đối chiếu số liệu SGK (Chính xác 100%)</strong></td>
                  <td>Các con số thống kê trên slide đã được đối chiếu khớp 100% với trang 9–11 SGK Địa lí 11; không có số liệu bịa đặt của AI.</td>
                  <td>Đạt 100% chuẩn SGK / Cần sửa lại</td>
                </tr>
              </tbody>
            </table>

            <div style="padding: 12px 16px; background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 6px; font-size: 0.88rem; color: #581c87;">
              <strong>Sản phẩm hoàn thành:</strong> 01 File kịch bản nội dung 8 slide trình chiếu cho Bài 2 Địa lí 11 đạt đủ 4 tiêu chuẩn trên, sẵn sàng làm dữ liệu đầu vào nạp vào NotebookLM và Gamma ở Buổi 5 để tạo slide tự động.
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
              <h3 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0;">Ôn tập bài cũ & Lưu trữ kịch bản slide</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #475569; line-height: 1.65;">
              <li>Ôn lại bài cũ: Xem lại quy tắc Slide 3 dòng và kỹ thuật viết lời giảng Speaker Notes đời thường.</li>
              <li>Hoàn thiện và lưu trữ file kịch bản nội dung 8 slide vào thư mục học tập cá nhân.</li>
              <li>Kiểm tra lại lần cuối số liệu FDI và thương mại với file PDF SGK Địa lí 11 để đảm bảo tính chuẩn xác.</li>
            </ul>
          </div>

          <!-- Hộp 2: Chuẩn bị Buổi 5 -->
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(37,99,235,0.06);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #eff6ff; color: #1d4ed8; font-weight: 800; font-size: 0.82rem; padding: 2px 8px; border-radius: 4px;">Nhiệm vụ 2</span>
              <h3 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0;">Chuẩn bị học liệu cho Buổi 5</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #475569; line-height: 1.65;">
              <li><strong>Nội dung Buổi 5 tiếp theo:</strong> <em>"Ứng Dụng Tạo Slide Bài Giảng Tự Động Với NotebookLM & Gamma"</em>.</li>
              <li>Lấy chính Kịch bản 8 slide đã soạn hôm nay và file PDF SGK Địa Lí 11 làm dữ liệu đầu vào.</li>
              <li>Đăng ký sẵn tài khoản miễn phí trên <a href="https://notebooklm.google.com" target="_blank" style="color: #2563eb; font-weight: 600; text-decoration: underline;">NotebookLM</a> và <a href="https://gamma.app" target="_blank" style="color: #2563eb; font-weight: 600; text-decoration: underline;">Gamma.app</a> để thực hành tạo slide tự động ở buổi sau.</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  `;

  const session4Data = {
    id: 4,
    number: 4,
    title: "Buổi 4: Dùng AI Tạo Trọn Bộ Nội Dung Slide Bài Giảng",
    topic: "Tạo Nội Dung Slide Bài Giảng",
    tools: ["ChatGPT", "Gemini", "NotebookLM"],
    duration: "180 phút (3 giờ)",
    deliverable: "01 File kịch bản nội dung 8 slide trình chiếu hoàn chỉnh cho Bài 2 SGK Địa Lí 11 (Tiêu đề, 3 gạch đầu dòng, gợi ý hình ảnh và Speaker Notes)",
    overview: "Chuyển hóa Kế hoạch bài dạy đã xây dựng ở Buổi 3 thành trọn bộ nội dung Slide bài giảng hoàn chỉnh từ Sách Giáo Khoa Địa Lí 11: Dàn ý 8 slide, quy tắc slide 3 dòng súc tích, trực quan hóa số liệu bảng biểu và lời giảng Speaker Notes chi tiết.",
    articleHtml: articleHtml,
    objectives: [
      "1. Kiến thức: Nắm vững quy tắc slide 3 dòng và cách tổ chức một bộ slide giảng dạy 4 chặng từ SGK Địa lí 11.",
      "2. Năng lực: Làm chủ kỹ năng ra lệnh cho AI soạn dàn ý slide, trực quan hóa số liệu bảng biểu và viết lời giảng Speaker Notes đời thường.",
      "3. Phẩm chất: Đề cao tính chính xác khi đối chiếu số liệu SGK, tôn trọng trải nghiệm thị giác của người học."
    ],
    timeline: [
      { time: "00 - 15p", title: "Hoạt động 1: Khởi động (Tạo tình huống xuất phát)", desc: "So sánh câu lệnh thô (slide quá tải chữ) vs Câu lệnh chuẩn tạo slide 3 dòng kèm Speaker Notes." },
      { time: "15 - 65p", title: "Hoạt động 2: Khám phá kiến thức mới", desc: "Quy tắc Slide 3 dòng, kỹ thuật trực quan hóa số liệu SGK và bàn giao bộ 5 câu lệnh mẫu chuyên sâu tạo slide." },
      { time: "65 - 145p", title: "Hoạt động 3: Luyện tập tại lớp", desc: "Mở file SGK Địa lí 11 (Bài 2), tự tay dùng AI tạo trọn bộ nội dung 8 slide và đối chiếu số liệu thật." },
      { time: "145 - 175p", title: "Hoạt động 4: Vận dụng / Tiêu chí nghiệm thu", desc: "Tự rà soát bộ slide theo bảng 4 tiêu chuẩn chất lượng trình chiếu." },
      { time: "175 - 180p", title: "III. Hướng dẫn về nhà & Dặn dò", desc: "Lưu trữ kịch bản slide, chuẩn bị sẵn sàng nạp vào NotebookLM và Gamma ở Buổi 5." }
    ],
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
