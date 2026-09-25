/**
 * SESSION 1: NHẬP MÔN AI VÀ TƯ DUY SỬ DỤNG AI TRONG GIÁO DỤC ĐẠI HỌC
 * (js/data/sessions/session-01.js)
 * Căn cứ theo: "Lộ trình đào tạo 16 buổi: AI ứng dụng trong giảng dạy đại học"
 * NỘI DUNG ĐƯỢC VIẾT TRỰC TIẾP TRÊN TRANG (Direct Article Layout).
 */

(function() {
  const ICONS = window.APP_ICONS || {
    check: '✓',
    clipboard: '📋',
    clock: '⏱',
    award: '🎯',
    copy: '📄'
  };

  const PROMPT_LEVEL_1 = `Hãy soạn cho tôi bài giảng về Quy luật Cung - Cầu trong môn Kinh tế vi mô.`;

  const PROMPT_LEVEL_2 = `Tôi là giảng viên phụ trách môn Kinh tế vi mô dành cho sinh viên năm nhất chuyên ngành Quản trị Kinh doanh, trường Đại học Kinh tế TP.HCM.
Chủ đề bài giảng hôm nay là: "Quy luật Cung - Cầu và Cơ chế hình thành giá thị trường".
Sinh viên đã học qua khái niệm thị trường và hành vi người tiêu dùng.

Hãy xây dựng dàn ý bài giảng 45 phút, bao gồm:
1. 3 khái niệm cốt lõi bắt buộc sinh viên phải nắm vững (Cầu, Cung, Trạng thái cân bằng).
2. 2 ví dụ tình huống thực tế gắn liền với thị trường Việt Nam (biến động giá vé máy bay dịp Tết Nguyên đán và biến động giá nông sản sau mùa thu hoạch).
3. 2 câu hỏi mở để sinh viên thảo luận sôi nổi trên lớp.`;

  const PROMPT_LEVEL_3 = `BỐI CẢNH & VAI TRÒ:
Bạn là Chuyên gia Cố vấn Phương pháp Sư phạm Đại học đồng hành cùng tôi (Giảng viên phụ trách môn Kinh tế vi mô, Khoa Quản trị Kinh doanh, Trường Đại học Kinh tế TP.HCM).
Tôi đang thiết kế một kịch bản lên lớp 90 phút cho chuyên đề: "Quy luật Cung - Cầu và Cơ chế hình thành giá thị trường".

ĐỐI TƯỢNG NGƯỜI HỌC:
Sinh viên năm nhất ngành Quản trị Kinh doanh. Sinh viên đã học khái niệm thị trường và hành vi người tiêu dùng, nhưng thường nhầm lẫn giữa "sự dịch chuyển của đường cầu" (shift in demand) và "sự di chuyển dọc đường cầu" (movement along demand curve), đồng thời lúng túng khi giải thích các biến động giá thực tế.

NHIỆM VỤ SƯ PHẠM CHI TIẾT (4 CHẶNG):
Hãy thiết kế kịch bản giảng dạy theo cấu trúc 4 chặng sư phạm tích cực:
1. CHẶNG 1 - KHỞI ĐỘNG (15 phút): 01 tình huống thực tế gây tò mò: "Nghịch lý giá vé máy bay chặng TP.HCM - Hà Nội những ngày cận Tết tăng gấp 3 lần ngày thường nhưng vẫn cháy vé, trong khi chiều ngược lại giá giảm kịch sàn mà vẫn vắng khách". Đặt câu hỏi kích hoạt tư duy phản biện của người học.
2. CHẶNG 2 - KHÁM PHÁ TRI THỨC (45 phút): 3 luận điểm trọng tâm (Định luật Cầu, Định luật Cung, Điểm cân bằng thị trường & cơ chế tự điều chỉnh). Dùng ví dụ trực quan và phép so sánh ẩn dụ (analogy) gần gũi để làm rõ sự khác biệt giữa "dịch chuyển đường cầu" và "di chuyển dọc đường cầu".
3. CHẶNG 3 - LUYỆN TẬP THỰC CHIẾN (20 phút): 01 bài tập phân tích tình huống (Case study) giải quyết theo nhóm 3-4 sinh viên: "Bài toán giải cứu nông sản sầu riêng / dưa hấu - Góc nhìn can thiệp giá trần và giá sàn của Nhà nước".
4. CHẶNG 4 - ĐÚC KẾT & CHUYỂN GIAO (10 phút): 03 câu hỏi trắc nghiệm kiểm tra nhanh mức độ hiểu bài (Quick check) gài bẫy những lỗi ngộ nhận phổ biến và 01 thông điệp cốt lõi mang về (Key Takeaway).

RÀNG BUỘC & TIÊU CHÍ ĐẦU RA (CONSTRAINTS):
- Ngôn ngữ học thuật, khúc chiết, chuẩn mực sư phạm đại học; tuyệt đối không dùng lý thuyết sách giáo khoa khô cứng, chung chung.
- Đánh dấu rõ nhãn: [CẦN GIẢNG VIÊN THẨM ĐỊNH] tại những chỗ đưa ra số liệu, chính sách giá hoặc ví dụ thực tế tại Việt Nam.
- Xuất kết quả dưới định dạng bảng Markdown phân rõ: Thời lượng | Hoạt động Giảng viên | Hoạt động Sinh viên | Học liệu cần chuẩn bị.`;

  const articleHtml = `
    <div class="session-direct-article">

      <!-- PHẦN 1: CHUẨN ĐẦU RA -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 1</span>
          <h2 class="article-section-title">Chuẩn Đầu Ra Buổi 1 (Theo Khung Năng Lực UNESCO 2024)</h2>
        </div>
        <p class="article-prose" style="margin-bottom: 8px;">
          Sau khi hoàn thành buổi học 180 phút, giảng viên đạt được các năng lực sư phạm số cốt lõi:
        </p>
        <ul class="block-objectives-list">
          <li>
            <span class="bullet-check"><svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Hiểu rõ bản chất GenAI:</strong> Phân biệt chính xác giữa AI, Học máy (Machine Learning), Học sâu (Deep Learning) và AI Tạo sinh (Generative AI / LLM).</span>
          </li>
          <li>
            <span class="bullet-check"><svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Kiểm soát Ảo giác (Hallucination):</strong> Nhận diện cơ chế sinh từ theo xác suất của LLM để thiết lập quy trình kiểm chứng nguồn học thuật, ngăn ngừa sai lệch kiến thức.</span>
          </li>
          <li>
            <span class="bullet-check"><svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Tái định vị vai trò người thầy:</strong> Chuyển dịch từ người truyền đạt thụ động sang người thiết kế trải nghiệm học tập và đánh giá năng lực tư duy bậc cao.</span>
          </li>
          <li>
            <span class="bullet-check"><svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Thấu triệt nguyên tắc sư phạm:</strong> <em>Pedagogy → Problem → AI → Workflow → Assessment → Reflection</em> (Sư phạm luôn đi trước công nghệ).</span>
          </li>
          <li>
            <span class="bullet-check"><svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
            <span><strong>Hoàn thành sản phẩm cốt lõi:</strong> Thiết lập xong <em>Bản đồ ứng dụng AI trong giảng dạy (AI Teaching Map)</em> cho môn học đang trực tiếp phụ trách.</span>
          </li>
        </ul>
      </section>

      <!-- PHẦN 2: TIẾN TRÌNH LÊN LỚP 180 PHÚT -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 2</span>
          <h2 class="article-section-title">Tiến Trình Sư Phạm 180 Phút (3 Giờ Lên Lớp)</h2>
        </div>
        <p class="article-prose" style="margin-bottom: 8px;">
          Thời lượng phân bổ theo chuẩn 40% lý thuyết nền tảng + 60% thực hành trực tiếp trên laptop:
        </p>
        <div class="block-timeline-grid">
          <div class="timeline-stage-card">
            <span class="stage-time-tag">20 phút</span>
            <strong class="stage-title">1. Khởi động & Nêu vấn đề</strong>
            <p class="stage-desc">Tình huống sinh viên nộp bài làm bằng AI; thảo luận về thách thức giữ chuẩn mực học thuật.</p>
          </div>
          <div class="timeline-stage-card">
            <span class="stage-time-tag">45 phút</span>
            <strong class="stage-title">2. Lý thuyết trọng tâm</strong>
            <p class="stage-desc">Phân tầng công nghệ, bản chất LLM, hiện tượng ảo giác, Khung năng lực UNESCO 2024 & OECD 2026.</p>
          </div>
          <div class="timeline-stage-card">
            <span class="stage-time-tag">25 phút</span>
            <strong class="stage-title">3. Giảng viên Demo</strong>
            <p class="stage-desc">Thực nghiệm trực tiếp cùng 1 tác vụ qua 3 cấp độ câu lệnh để thấy rõ sự khác biệt đầu ra.</p>
          </div>
          <div class="timeline-stage-card">
            <span class="stage-time-tag">70 phút</span>
            <strong class="stage-title">4. Thực hành tại lớp</strong>
            <p class="stage-desc">Áp dụng trên môn học thật: Chạy thử nghiệm prompt 3 cấp độ và thiết lập bản đồ AI Teaching Map cá nhân.</p>
          </div>
          <div class="timeline-stage-card">
            <span class="stage-time-tag">15 phút</span>
            <strong class="stage-title">5. Chia sẻ & Góp ý chéo</strong>
            <p class="stage-desc">Trình bày 2 bản đồ tiêu biểu, thảo luận về kiểm soát rủi ro và bản quyền học liệu.</p>
          </div>
          <div class="timeline-stage-card">
            <span class="stage-time-tag">5 phút</span>
            <strong class="stage-title">6. Đúc kết & Giao bài</strong>
            <p class="stage-desc">Chốt nguyên tắc Human-in-the-loop; chuẩn bị đề cương tài liệu cho Buổi 2: Prompt Engineering.</p>
          </div>
        </div>
      </section>

      <!-- PHẦN 3: LÝ THUYẾT CỐT LÕI -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 3</span>
          <h2 class="article-section-title">Lý Thuyết Trọng Tâm: Bản Chất GenAI & Hiện Tượng Ảo Giác Học Thuật</h2>
        </div>

        <div class="article-prose">
          <h3 class="article-subheading">1. Bốn cấp độ công nghệ (Hiểu nhanh trong 1 phút)</h3>
          <ul>
            <li><strong>AI (Trí tuệ nhân tạo):</strong> Khái niệm bao trùm - Máy móc mô phỏng hành vi thông minh của con người (nhận thức, lý luận, giải quyết vấn đề).</li>
            <li><strong>Machine Learning (Học máy):</strong> Máy tự học các quy luật thống kê từ tập dữ liệu lớn, không cần lập trình thủ công từng quy tắc.</li>
            <li><strong>Deep Learning (Học sâu):</strong> Sử dụng mạng nơ-ron nhiều lớp để phân tích dữ liệu phi cấu trúc phức tạp (văn bản, giọng nói, hình ảnh).</li>
            <li><strong>Generative AI (AI Tạo sinh):</strong> Bước nhảy vọt gần đây - Không chỉ dừng lại ở phân loại dữ liệu cũ mà có khả năng <strong>tự tạo ra nội dung mới</strong> (văn bản, slide, code, hình ảnh) tương tự tác phẩm của con người.</li>
          </ul>

          <h3 class="article-subheading">2. Bản chất thật sự của Mô hình ngôn ngữ lớn (LLM - ChatGPT, Gemini, Claude)</h3>
          <ul>
            <li><strong>Cơ chế toán học:</strong> Bản chất của LLM là cỗ máy <em>"Dự đoán từ tiếp theo có xác suất xuất hiện cao nhất dựa trên ngữ cảnh được cung cấp"</em> (Next-token prediction).</li>
            <li><strong>AI không có ý thức:</strong> AI không thực sự "hiểu" chiều sâu kiến thức như con người; nó chỉ liên kết câu từ cực kỳ mượt mà dựa trên quy luật ngôn ngữ đã học.</li>
            <li><strong>Thế mạnh:</strong> Tóm tắt tài liệu nhanh, lập dàn ý phong phú, dịch thuật đa ngữ, biến đổi phong cách diễn đạt cho người học.</li>
            <li><strong>Giới hạn:</strong> Dễ mắc lỗi ở suy luận logic sâu; không tự cập nhật kiến thức thời gian thực nếu không có công cụ tìm kiếm bổ trợ.</li>
          </ul>

          <!-- Minh họa trực quan cơ chế Next-token prediction -->
          <div class="article-image-figure" style="margin: 24px 0 20px 0; text-align: center;">
            <div style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 10px; display: inline-block; max-width: 100%; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
              <img src="assets/images/bai1/image.png" alt="Minh họa cơ chế dự đoán từ tiếp theo Next-token prediction của mô hình ngôn ngữ lớn LLM" style="max-width: 100%; max-height: 480px; height: auto; border-radius: var(--radius-sm); display: block;" />
            </div>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">
              <strong>Hình 1.1:</strong> Cơ chế dự đoán từ tiếp theo (Next-token prediction).
            </p>
          </div>

          <h3 class="article-subheading">3. Ảo giác (Hallucination) — "Bẫy" nguy hiểm nhất trong học thuật</h3>
          <ul>
            <li><strong>Khái niệm:</strong> Hiện tượng AI tự tin khẳng định những điều <strong>hoàn toàn sai sự thật</strong>, tự bịa ra tên tác giả, năm xuất bản, bài báo khoa học hoặc số liệu thống kê trông rất đáng tin.</li>
            <li><strong>Nguyên nhân:</strong> AI được tối ưu hóa để viết <em>"trôi chảy, thuyết phục"</em> chứ không được thiết kế như một cơ sở dữ liệu chân lý.</li>
            <li><strong>Nguyên tắc sư phạm:</strong> Tuyệt đối không để AI tự trích dẫn tài liệu học thuật nếu không có dữ liệu gốc (Grounding). Giảng viên bắt buộc phải là người kiểm chứng cuối cùng (<em>Human-in-the-loop</em>).</li>
          </ul>

          <!-- Minh họa thực tế hiện tượng Ảo giác (Hallucination) -->
          <div class="article-image-figure" style="margin: 24px 0 20px 0; text-align: center;">
            <div style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 10px; display: inline-block; max-width: 100%; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
              <img src="assets/images/bai1/image%20copy.png" alt="Ví dụ thực tế về hiện tượng ảo giác và suy diễn rập khuôn của AI" style="max-width: 100%; max-height: 480px; height: auto; border-radius: var(--radius-sm); display: block;" />
            </div>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">
              <strong>Hình 1.2:</strong> Ví dụ ảo giác AI — Tự suy diễn thêm "sắt" dù câu hỏi là "1 tấn bông và 1 tấn bông".
            </p>
          </div>

        </div>
      </section>

      <!-- PHẦN 4: THỰC NGHIỆM SO SÁNH 3 CẤP ĐỘ CÂU LỆNH -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 4</span>
          <h2 class="article-section-title">Thực Nghiệm Sư Phạm: So Sánh 3 Cấp Độ Câu Lệnh (Prompt)</h2>
        </div>
        <p class="article-prose">
          Để nhận diện rõ ranh giới giữa kết quả sơ sài và đầu ra chuẩn mực sư phạm, học viên sẽ thực hành trực tiếp trên một tình huống giảng dạy cụ thể:
        </p>

        <!-- Card Tình huống Thực nghiệm Sư phạm -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 24px 0; overflow: hidden;">
          <div style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #f8fafc;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Tình huống giảng dạy thực nghiệm</span>
            <span style="font-size: 0.8rem; color: #64748b; background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 8px; border-radius: 4px;">Kinh tế vi mô • 90 phút</span>
          </div>

          <div style="padding: 14px 18px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
            <div>
              <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Môn học & Người học</div>
              <div style="font-size: 0.9rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">Kinh tế vi mô (Microeconomics)</div>
              <div style="font-size: 0.84rem; color: #475569; line-height: 1.5;">Sinh viên năm 1, chuyên ngành Quản trị Kinh doanh, Trường ĐH Kinh tế TP.HCM.</div>
            </div>

            <div>
              <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Chủ đề bài giảng</div>
              <div style="font-size: 0.9rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">Quy luật Cung - Cầu & Giá thị trường</div>
              <div style="font-size: 0.84rem; color: #475569; line-height: 1.5;">Kịch bản lên lớp 90 phút theo mô hình dạy học tích cực.</div>
            </div>

            <div>
              <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">Thách thức của người học</div>
              <div style="font-size: 0.9rem; font-weight: 600; color: #0f172a; margin-bottom: 2px;">Dễ học vẹt công thức & đồ thị</div>
              <div style="font-size: 0.84rem; color: #475569; line-height: 1.5;">Hay nhầm giữa dịch chuyển và di chuyển dọc đường cầu; khó giải thích giá cả thực tế tại VN.</div>
            </div>
          </div>

          <div style="padding: 10px 18px; background: #f8fafc; border-top: 1px solid #f1f5f9; font-size: 0.85rem; color: #475569;">
            <strong>Hướng dẫn thực hành:</strong> Lần lượt bấm "Sao chép Prompt" ở 3 cấp độ bên dưới, dán vào ChatGPT hoặc Gemini để đối chiếu sự thay đổi của kết quả.
          </div>
        </div>

        <!-- Level 1 -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin: 0;">
              Cấp độ 1: Prompt thô (Mức cơ bản)
            </h4>
            <span style="font-size: 0.82rem; color: #64748b;">Sơ sài, chưa có bối cảnh & đối tượng</span>
          </div>

          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt Thô</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_LEVEL_1)}'), 'Đã sao chép Prompt Cấp độ 1!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${PROMPT_LEVEL_1}</pre>
          </div>

          <p style="font-size: 0.85rem; color: #64748b; margin-top: 6px; line-height: 1.5;">
            <strong style="color: #dc2626;">Nhận xét:</strong> AI chỉ liệt kê định nghĩa sách giáo khoa chung chung, không phân hóa sinh viên năm nhất, ví dụ xa rời thực tế và chưa thể dùng trực tiếp trên bục giảng đại học.
          </p>
        </div>

        <!-- Level 2 -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin: 0;">
              Cấp độ 2: Prompt có bối cảnh (Mức nâng cao)
            </h4>
            <span style="font-size: 0.82rem; color: #64748b;">Đã xác định môn học, đối tượng & ví dụ thị trường Việt Nam</span>
          </div>

          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt Có Bối Cảnh</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_LEVEL_2)}'), 'Đã sao chép Prompt Cấp độ 2!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${PROMPT_LEVEL_2}</pre>
          </div>

          <p style="font-size: 0.85rem; color: #64748b; margin-top: 6px; line-height: 1.5;">
            <strong style="color: #d97706;">Nhận xét:</strong> AI bám sát bài giảng 45 phút, đưa ra các ví dụ thực tế tại Việt Nam (vé máy bay Tết, nông sản) và có câu hỏi thảo luận; bài giảng có tính ứng dụng cao hơn đáng kể.
          </p>
        </div>

        <!-- Level 3 -->
        <div>
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin: 0;">
              Cấp độ 3: Prompt chuẩn Sư phạm 4.0 (Mức chuyên gia)
            </h4>
            <span style="font-size: 0.82rem; color: #64748b;">Cấu trúc 4 chặng + Ràng buộc học thuật + Gắn nhãn thẩm định</span>
          </div>

          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt Chuẩn Sư Phạm 4.0</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(PROMPT_LEVEL_3)}'), 'Đã sao chép Prompt Cấp độ 3!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt
              </button>
            </div>
            <pre class="article-prompt-code">${PROMPT_LEVEL_3}</pre>
          </div>

          <p style="font-size: 0.85rem; color: #64748b; margin-top: 6px; line-height: 1.5;">
            <strong style="color: #16a34a;">Nhận xét:</strong> Kịch bản 90 phút chi tiết theo 4 chặng: giải quyết trúng điểm nghẽn nhận thức của sinh viên, có tình huống thực chiến tranh biện sâu sắc, và gán nhãn [CẦN GIẢNG VIÊN THẨM ĐỊNH] để kiểm chứng số liệu.
          </p>
        </div>
      </section>

      <!-- PHẦN 5: MA TRẬN RANH GIỚI SƯ PHẠM -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 5</span>
          <h2 class="article-section-title">Ma Trận Ranh Giới: Điểm AI Làm Tốt vs. Giảng Viên Phải Kiểm Soát</h2>
        </div>
        <p class="article-prose">
          Bảng đối chiếu phân định trách nhiệm giúp giảng viên giải phóng sức lao động mà vẫn kiểm soát tuyệt đối chất lượng:
        </p>

        <table class="article-matrix-table">
          <thead>
            <tr>
              <th style="width: 50%; color: #16a34a;">ĐIỂM AI LÀM RẤT TỐT (NÊN TẬN DỤNG)</th>
              <th style="width: 50%; color: #dc2626;">ĐIỂM GIẢNG VIÊN BẮT BUỘC KIỂM SOÁT (HUMAN-IN-THE-LOOP)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Khởi tạo ý tưởng:</strong> Gợi mở các góc nhìn mới, tạo tình huống khởi động bài giảng (Icebreaker, Hook).</td>
              <td><strong>1. Tính xác thực chuyên môn:</strong> Kiểm tra độ chính xác của số liệu, công thức, định lý và dẫn chứng khoa học.</td>
            </tr>
            <tr>
              <td><strong>2. Soạn thảo thô thần tốc:</strong> Viết dàn ý, tạo khung bài học, tiết kiệm 70% thời gian đánh máy thủ công.</td>
              <td><strong>2. Văn hóa & Bối cảnh:</strong> Điều chỉnh nội dung phù hợp với văn hóa, quy định pháp luật và sinh viên Việt Nam.</td>
            </tr>
            <tr>
              <td><strong>3. Đa dạng hóa văn phong:</strong> Diễn đạt lại khái niệm trừu tượng thành ví dụ trực quan gần gũi cho sinh viên.</td>
              <td><strong>3. Tiêu chí đánh giá:</strong> Thiết kế thang điểm, Rubric và đảm bảo tính công bằng trong kiểm tra đánh giá.</td>
            </tr>
            <tr>
              <td><strong>4. Ngân hàng câu hỏi tham khảo:</strong> Tạo câu hỏi trắc nghiệm, tình huống thảo luận sơ bộ.</td>
              <td><strong>4. Quyết định sư phạm cuối cùng:</strong> Chọn lọc phần nào được đưa vào giáo án và chịu trách nhiệm học thuật.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- PHẦN 6: BÀI TẬP THỰC HÀNH TÌNH HUỐNG TẠI LỚP (70 PHÚT) -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 6</span>
          <h2 class="article-section-title">Bài Tập Thực Hành Tình Huống Tại Lớp (70 Phút)</h2>
        </div>
        <p class="article-prose">
          Học viên thực hiện bài tập thực hành trực tiếp trên máy tính cá nhân theo tình huống cụ thể dưới đây nhằm áp dụng trọn vẹn tư duy Prompt chuẩn Sư phạm 4.0 và nguyên tắc kiểm soát chất lượng (Human-in-the-loop).
        </p>

        <!-- Thẻ Tình huống bài tập -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <div style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #f8fafc;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Đề bài: Thiết kế Kịch bản Giảng dạy & Kiểm định Ranh giới Học thuật</span>
            <span style="font-size: 0.8rem; color: #64748b; background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 8px; border-radius: 4px;">Thời lượng: 70 phút</span>
          </div>

          <div style="padding: 16px 18px; font-size: 0.9rem; line-height: 1.6; color: #334155;">
            <div style="margin-bottom: 10px;">
              <strong style="color: #0f172a;">Tình huống giả định:</strong> Thầy/Cô chuẩn bị bài giảng 45 phút cho môn học mình phụ trách (hoặc chọn chuyên đề <em>"Đạo đức kinh doanh và Trách nhiệm xã hội CSR"</em>). Thách thức lớn nhất là sinh viên hay học vẹt lý thuyết, ngại tương tác và khó áp dụng vào các tình huống thực tế tại thị trường Việt Nam.
            </div>
            <div>
              <strong style="color: #0f172a;">Mục tiêu sản phẩm:</strong> Vận dụng ChatGPT hoặc Gemini để tạo kịch bản lên lớp tích cực, sau đó đóng vai trò chuyên gia (Human-in-the-loop) trực tiếp thẩm định, chỉnh sửa và loại bỏ rủi ro ảo giác học thuật.
            </div>
          </div>
        </div>

        <!-- 3 Bước thực hiện chi tiết -->
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 1 (25 phút): Soạn thảo câu lệnh Prompt Cấp độ 3 cho môn học
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Áp dụng công thức 5 thành phần (Role + Context + Task + Constraints + Output) từ Phần 4 để viết prompt. Yêu cầu bắt buộc: 01 tình huống mở đầu gây tranh luận (Hook), 3 luận điểm trọng tâm có ví dụ thực tế tại Việt Nam, và yêu cầu AI gắn nhãn <code>[CẦN GIẢNG VIÊN THẨM ĐỊNH]</code> tại những chỗ trích dẫn số liệu hoặc văn bản pháp lý.
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 2 (25 phút): Chạy thực nghiệm & Rà soát ảo giác học thuật
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Dán prompt vào ChatGPT hoặc Gemini. Đọc kỹ đầu ra và thực hiện rà soát chuyên môn:
              <br>• Ghi nhận 02 ý tưởng hoặc ví dụ hay có thể đưa ngay vào giáo án.
              <br>• Phát hiện ít nhất 01 điểm (nếu có) AI trả lời chung chung, thiếu căn cứ hoặc trích dẫn thông tin chưa kiểm chứng để trực tiếp chỉnh sửa lại.
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 3 (20 phút): Hoàn thiện Phiếu thẩm định & Trao đổi chéo
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Tổng hợp kết quả vào 3 mục ngắn gọn: <em>[Câu lệnh Prompt đã tối ưu]</em> — <em>[Nội dung AI hỗ trợ tốt]</em> — <em>[Nội dung Giảng viên đã thẩm định & hiệu đính]</em>. Trao đổi chéo với đồng nghiệp ngồi cạnh để nhận phản hồi sư phạm.
            </div>
          </div>
        </div>

        <!-- Khung chuẩn bị cho buổi 2 -->
        <div style="padding: 12px 18px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.86rem; color: #334155; line-height: 1.6;">
          <strong>Chuẩn bị cho Buổi 2 (Prompt Engineering Chuyên Sâu):</strong> Thầy/Cô lưu lại câu lệnh và sản phẩm bài tập hôm nay, đồng thời chuẩn bị sẵn 01 đề cương chi tiết học phần hoặc 01 giáo án bài giảng thật để thực hành xây dựng Thư viện câu lệnh (Prompt Library) có thể tái sử dụng cho cả học kỳ.
        </div>
      </section>

    </div>
  `;

  const session1Data = {
    id: 1,
    number: 1,
    title: "Buổi 1: Nhập Môn AI & Tư Duy Sử Dụng AI Trong Giáo Dục Đại Học",
    topic: "AI & Giáo dục đại học",
    tools: ["ChatGPT", "Gemini"],
    duration: "180 phút (3 giờ)",
    deliverable: "Kịch bản bài giảng tích hợp AI & Phiếu thẩm định ranh giới học thuật (Human-in-the-loop)",
    overview: "Nắm vững bản chất Generative AI & mô hình LLM, nhận diện ranh giới khả năng - giới hạn, kiểm soát hiện tượng ảo giác (hallucination) trong học thuật. Thiết lập tư duy sư phạm lấy con người làm trung tâm theo Khung UNESCO (2024) và Báo cáo OECD (2026). Thực hành so sánh 3 cấp độ câu lệnh và hoàn thành bài tập tình huống thiết kế kịch bản giảng dạy tại lớp.",
    articleHtml: articleHtml,
    objectives: [],
    timeline: [],
    blocks: []
  };

  // Register session into central registry
  window.CurriculumRegistry.registerSession(session1Data);

  // Synchronize metadata with localStorage
  window.CurriculumRegistry.saveSessionMeta(1, {
    title: session1Data.title,
    duration: session1Data.duration,
    tools: session1Data.tools,
    overview: session1Data.overview
  });
})();
