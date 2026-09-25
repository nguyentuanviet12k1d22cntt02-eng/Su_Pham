/**
 * SESSION 2: KỸ THUẬT VIẾT CÂU LỆNH SƯ PHẠM (PROMPT ENGINEERING) CHO GIẢNG VIÊN ĐẠI HỌC
 * (js/data/sessions/session-02.js)
 * Căn cứ theo: "Lộ trình đào tạo 16 buổi: AI ứng dụng trong giảng dạy đại học"
 * Thiết kế trực tiếp trên trang (Direct Article Layout), chuẩn mực học thuật, không dùng icon emoji.
 */

(function() {
  // PROMPTS FOR SECTION 5: UPGRADE DEMO
  const PROMPT_UPGRADE_BEFORE = `Hãy giải thích Quy luật Lợi ích cận biên giảm dần cho sinh viên.`;

  const PROMPT_UPGRADE_AFTER = `BỐI CẢNH & VAI TRÒ:
Bạn là Chuyên gia Cố vấn Phương pháp Giảng dạy Đại học đồng hành cùng tôi (Giảng viên phụ trách môn Kinh tế vi mô, Khoa Quản trị Kinh doanh, Trường ĐH Kinh tế TP.HCM).
Tôi đang chuẩn bị nội dung 30 phút giảng dạy về: "Quy luật Lợi ích cận biên giảm dần (Law of Diminishing Marginal Utility)".

ĐỐI TƯỢNG NGƯỜI HỌC:
Sinh viên đại học năm nhất. Sinh viên đã học khái niệm Tổng lợi ích (Total Utility) và Lợi ích cận biên (Marginal Utility), nhưng hay gặp khó khăn khi liên hệ công thức toán học với các quyết định tiêu dùng thực tế.

NHIỆM VỤ SƯ PHẠM:
1. Đưa ra 01 ví dụ mở đầu gần gũi với đời sống sinh viên (ví dụ: việc uống ly trà sữa hoặc mua vé xem phim liên tiếp) để minh họa trực quan quy luật.
2. Giải thích 3 luận điểm cốt lõi: định nghĩa chính xác, điều kiện áp dụng quy luật, và ý nghĩa của quy luật đối với chiến lược định giá của doanh nghiệp (combo sản phẩm, giảm giá theo số lượng).
3. Đề xuất 02 câu hỏi gợi mở thảo luận trên lớp để sinh viên phản biện về các trường hợp ngoại lệ (ví dụ: người sưu tầm đồ cổ hoặc sở thích nghe nhạc).

RÀNG BUỘC & ĐỊNH DẠNG ĐẦU RA:
- Ngôn ngữ học thuật chuẩn mực, diễn đạt gãy gọn, tránh dùng lý thuyết trừu tượng khó hiểu.
- Gắn nhãn rõ: [CẦN GIẢNG VIÊN THẨM ĐỊNH] tại những chỗ đưa ra số liệu hoặc ví dụ chiến lược giá.
- Trình bày theo từng đề mục rõ ràng, có phân đoạn thời lượng dự kiến cho giảng viên.`;

  // 10 PROMPTS FOR SECTION 6: PROMPT LIBRARY
  const LIB_P1 = `BỐI CẢNH: Tôi là giảng viên môn [Tên môn học] cho sinh viên đại học năm [1/2/3/4].
VAI TRÒ: Bạn là Cố vấn Thiết kế Kịch bản Sư phạm Đại học.
NHIỆM VỤ: Hãy thiết kế kịch bản lên lớp 90 phút cho chuyên đề "[Tên chủ đề bài học]" theo cấu trúc 4 chặng:
1. Khởi động (15 phút): 01 tình huống hoặc nghịch lý thực tế kích hoạt tư duy người học.
2. Khám phá (45 phút): 3 luận điểm kiến thức trọng tâm, có ví dụ minh họa và so sánh ẩn dụ trực quan.
3. Thực hành (20 phút): 01 bài tập thảo luận nhóm ngắn giải quyết tình huống thực tế.
4. Đúc kết (10 phút): 03 câu hỏi củng cố nhanh và 01 thông điệp cốt lõi mang về.
RÀNG BUỘC: Đánh dấu [CẦN GIẢNG VIÊN THẨM ĐỊNH] tại các số liệu, dẫn chứng thực tế. Trình bày dạng bảng Markdown gồm: Thời lượng | Hoạt động Giảng viên | Hoạt động Sinh viên.`;

  const LIB_P2 = `BỐI CẢNH: Môn [Tên môn học], chuyên ngành [Tên ngành], trường đại học tại Việt Nam.
VAI TRÒ: Chuyên gia biên soạn tình huống kinh doanh / thực hành nghề nghiệp.
NHIỆM VỤ: Xây dựng 01 bài tập tình huống (Case study) thực tế có độ dài khoảng 300 từ liên quan đến chủ đề "[Tên bài học]", đặt trong bối cảnh các doanh nghiệp hoặc tổ chức thực tế tại Việt Nam hiện nay.
YÊU CẦU CẤU TRÚC:
- Bối cảnh tình huống & nhân vật chính đang đối mặt với bài toán cần ra quyết định.
- Dữ kiện và số liệu then chốt (gắn nhãn [CẦN GIẢNG VIÊN THẨM ĐỊNH]).
- 3 câu hỏi thảo luận nhóm phân tầng: 1 câu nhận diện vấn đề, 1 câu phân tích nguyên nhân, 1 câu đề xuất giải pháp khả thi.`;

  const LIB_P3 = `VAI TRÒ: Chuyên gia Điều phối Thảo luận & Tư duy Phản biện Đại học.
BỐI CẢNH: Bài giảng môn [Tên môn học], chủ đề "[Tên chủ đề]".
NHIỆM VỤ: Hãy xây dựng 03 câu hỏi gợi mở thảo luận gây tranh luận (Hook Questions) nhằm kích hoạt tư duy đa chiều của sinh viên:
- Câu hỏi 1: Đặt ra một tình huống tiến thoái lưỡng nan về mặt đạo đức hoặc hiệu quả quản lý.
- Câu hỏi 2: So sánh đối nghịch giữa lý thuyết kinh điển và thực tiễn biến động hiện nay.
- Câu hỏi 3: Thách thức một định kiến hoặc ngộ nhận phổ biến mà sinh viên hay mắc phải.
RÀNG BUỘC: Mỗi câu hỏi kèm theo 02 góc nhìn phản biện đối lập để giảng viên định hướng tranh luận khi sinh viên phát biểu.`;

  const LIB_P4 = `VAI TRÒ: Chuyên gia Sư phạm Trực quan hóa Khái niệm.
BỐI CẢNH: Môn [Tên môn học]. Khái niệm phức tạp cần giải thích là: "[Tên khái niệm khó/trừu tượng]".
NHIỆM VỤ: Hãy thiết kế 02 phép so sánh ẩn dụ (Analogies) gần gũi, trực quan với đời sống sinh viên để giải thích rõ bản chất của khái niệm này.
YÊU CẦU:
- Ẩn dụ 1: Liên hệ với đời sống sinh hoạt hoặc công nghệ hàng ngày.
- Ẩn dụ 2: Liên hệ với một mô hình vận hành quen thuộc trong xã hội.
- Chỉ rõ ranh giới: Điểm nào ẩn dụ tương đồng chính xác với khái niệm học thuật, và điểm nào không được mở rộng máy móc để tránh gây hiểu nhầm.`;

  const LIB_P5 = `VAI TRÒ: Cố vấn Thiết kế Bài giảng Đa phương tiện.
BỐI CẢNH: Soạn slide bài giảng cho môn [Tên môn học], chuyên đề "[Tên chuyên đề]", thời lượng 45 phút.
NHIỆM VỤ: Lập dàn ý cấu trúc bộ slide gồm 8-10 slide theo nguyên lý tối giản (Minimalist Slide Design):
- Slide 1: Tiêu đề & Câu hỏi gợi mở kích thích tò mò.
- Slide 2: Mục tiêu đầu ra bài học (Outcome-based).
- Slide 3-7: Các luận điểm trọng tâm. Mỗi slide chỉ chứa tối đa 1 thông điệp chính, gợi ý hình ảnh/sơ đồ minh họa, và ghi chú cho người thuyết trình (Speaker Notes).
- Slide 8-9: Tình huống thực hành & câu hỏi tương tác.
- Slide 10: Thông điệp đúc kết & câu hỏi suy ngẫm.`;

  const LIB_P6 = `VAI TRÒ: Chuyên gia Khảo thí và Đánh giá Giáo dục Đại học.
BỐI CẢNH: Môn [Tên môn học], chủ đề "[Tên chủ đề bài học]".
NHIỆM VỤ: Soạn bộ 04 câu hỏi trắc nghiệm kiểm tra nhanh mức độ hiểu bài (Quick Check) tại lớp:
- 01 câu ở mức độ Nhận biết & Thông hiểu.
- 02 câu ở mức độ Vận dụng tình huống thực tế.
- 01 câu gài bẫy những ngộ nhận phổ biến (Misconception check).
ĐỊNH DẠNG: Mỗi câu hỏi gồm 4 phương án (A, B, C, D), chỉ rõ đáp án đúng, và giải thích chi tiết tại sao các phương án nhiễu lại sai.`;

  const LIB_P7 = `VAI TRÒ: Chuyên gia Thiết kế Thang đo Đánh giá (Rubric Specialist).
BỐI CẢNH: Đánh giá bài tập [Tự luận / Nghiên cứu tình huống / Thuyết trình nhóm] môn [Tên môn học]. Thang điểm: 10 điểm.
NHIỆM VỤ: Thiết kế bảng Rubric đánh giá định lượng và định tính chi tiết:
- Tiêu chí 1: Độ sâu chuyên môn & Tính chính xác của lập luận (40%).
- Tiêu chí 2: Khả năng vận dụng giải quyết tình huống thực tiễn (30%).
- Tiêu chí 3: Cấu trúc logic, trích dẫn học thuật & quy chuẩn trình bày (20%).
- Tiêu chí 4: Tính sáng tạo hoặc kỹ năng làm việc nhóm/thuyết trình (10%).
ĐỊNH DẠNG: Bảng Markdown phân rõ 4 mức độ thể hiện: Xuất sắc (9-10đ) | Khá (7-8đ) | Trung bình (5-6đ) | Chưa đạt (<5đ).`;

  const LIB_P8 = `VAI TRÒ: Trợ lý Giảng viên phụ trách Nhận xét & Đánh giá Sư phạm.
BỐI CẢNH: Đưa ra phản hồi góp ý (Feedback) cho bài tập của sinh viên môn [Tên môn học].
THÔNG TIN BÀI NỘP CỦA SINH VIÊN:
[Dán tóm tắt nội dung bài làm của sinh viên vào đây]
NHIỆM VỤ: Hãy viết một đoạn nhận xét sư phạm mang tính xây dựng (Constructive Feedback) theo mô hình 3 phần:
1. Điểm sáng: Công nhận 02 luận điểm hoặc kỹ năng sinh viên đã thực hiện tốt.
2. Điểm cần hoàn thiện: Chỉ ra 02 lỗ hổng lập luận, thiếu sót dữ liệu hoặc lỗi phương pháp (giải thích rõ tại sao chưa đạt).
3. Đề xuất hành động: Gợi ý cụ thể 01 tài liệu đọc thêm hoặc hướng tư duy để sinh viên nâng cấp bài làm.
RÀNG BUỘC: Văn phong khích lệ, chuẩn mực, mang tính định hướng sư phạm.`;

  const LIB_P9 = `VAI TRÒ: Gia sư Học thuật AI (Socratic AI Tutor) hướng dẫn sinh viên đại học.
BỐI CẢNH: Sinh viên đang học môn [Tên môn học] và thắc mắc về chủ đề: "[Tên chủ đề sinh viên đang học]".
QUY TẮC BẮT BUỘC KHI ĐỐI THOẠI VỚI SINH VIÊN:
1. Tuyệt đối không cung cấp ngay đáp án hoàn chỉnh hay làm hộ bài tập cho sinh viên.
2. Sử dụng phương pháp hỏi đáp Socrates: Đặt lại câu hỏi phản biện, phân rã vấn đề phức tạp thành 2-3 câu hỏi nhỏ để dẫn dắt sinh viên tự suy luận.
3. Nếu sinh viên trả lời sai hoặc hiểu nhầm, chỉ ra điểm mâu thuẫn trong câu trả lời của sinh viên thay vì phê phán trực tiếp.
4. Chỉ xác nhận khi sinh viên tự mình tìm ra kết luận đúng đắn.`;

  const LIB_P10 = `VAI TRÒ: Cố vấn Khảo thí Đề thi Tự luận Mở Đại học.
BỐI CẢNH: Thiết kế đề kiểm tra giữa kỳ / cuối kỳ dạng đề mở (Open-book Exam) cho môn [Tên môn học].
MỤC TIÊU: Đề thi kiểm tra năng lực tư duy bậc cao (Phân tích, Đánh giá, Sáng tạo), sinh viên không thể sao chép máy móc từ giáo trình hay nhờ AI làm hộ một cách dễ dàng.
NHIỆM VỤ: Thiết kế 01 đề bài tình huống tích hợp gồm:
- Dữ liệu tình huống thực tế có yếu tố biến động, thông tin không hoàn hảo.
- Yêu cầu người học phải đưa ra quyết định độc lập, bảo vệ quan điểm cá nhân dựa trên các căn cứ lý thuyết đã học.
- Đính kèm hướng dẫn chấm bài (Gợi ý các luận điểm bắt buộc và tiêu chuẩn chấp nhận các giải pháp phân kỳ sáng tạo).`;

  const articleHtml = `
    <div class="session-direct-article">

      <!-- PHẦN 1: CHUẨN ĐẦU RA -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 1</span>
          <h2 class="article-section-title">Chuẩn Đầu Ra Buổi 2: Năng Lực Kỹ Thuật Câu Lệnh Sư Phạm</h2>
        </div>
        <p class="article-prose">
          Sau khi hoàn thành buổi học 180 phút, giảng viên làm chủ năng lực thiết kế câu lệnh AI phục vụ giảng dạy đại học:
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
              <td><strong>1. Làm chủ khung cấu trúc 6 thành phần (CRTC-OE)</strong></td>
              <td>Thiết kế các prompt rõ ràng, có bối cảnh, phân hóa người học, thiết lập ràng buộc học thuật và kiểm soát chặt chẽ định dạng đầu ra.</td>
            </tr>
            <tr>
              <td><strong>2. Ứng dụng thuần thục 3 kỹ thuật nâng cao</strong></td>
              <td>Thành thạo Few-shot Prompting (cung cấp mẫu chuẩn học thuật), Socratic Prompting (gợi mở phản biện), và Self-Critique (yêu cầu AI tự phản biện phát hiện lỗi).</td>
            </tr>
            <tr>
              <td><strong>3. Hoàn thiện Thư viện Prompt (Prompt Library)</strong></td>
              <td>Xây dựng bộ 10 câu lệnh chuẩn mực có thể tái sử dụng lâu dài cho một môn học cụ thể (5 prompt soạn bài giảng và 5 prompt tổ chức học tập - đánh giá).</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- PHẦN 2: KHUNG CẤU TRÚC PROMPT 6 THÀNH PHẦN -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 2</span>
          <h2 class="article-section-title">Khung Cấu Trúc Câu Lệnh Chuẩn Sư Phạm 4.0 (Công Thức CRTC-OE)</h2>
        </div>
        <p class="article-prose">
          Để chấm dứt tình trạng AI trả lời chung chung, giáo án đại trà, câu lệnh của giảng viên bắt buộc phải có đầy đủ 6 thành phần cấu trúc:
        </p>

        <!-- Sơ đồ công thức CRTC-OE -->
        <div class="article-image-figure" style="margin: 20px 0 24px 0; text-align: center;">
          <div style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 8px; display: inline-block; max-width: 100%; box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
            <img src="assets/images/bai2/crtc-oe-formula.png" alt="Sơ đồ thiết kế công thức câu lệnh CRTC-OE chuẩn Sư phạm 4.0 cho giảng viên đại học" style="max-width: 100%; max-height: 480px; height: auto; border-radius: var(--radius-sm); display: block;" />
          </div>
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">
            <strong>Hình 2.1:</strong> Sơ đồ công thức CRTC-OE gồm 6 thành phần cốt lõi của câu lệnh sư phạm chuẩn mực.
          </p>
        </div>

        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <table class="article-matrix-table" style="margin-top: 0; border: none;">
            <thead>
              <tr>
                <th style="width: 25%;">Thành phần cấu trúc</th>
                <th style="width: 35%;">Mục đích sư phạm</th>
                <th style="width: 40%;">Ví dụ cụ thể áp dụng vào câu lệnh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Context (Bối cảnh)</strong></td>
                <td>Thu hẹp không gian tri thức của AI vào đúng phân khúc người học và môn học cụ thể.</td>
                <td><em>"Giảng viên môn Kinh tế vi mô, sinh viên năm 1 ngành Quản trị Kinh doanh, Trường ĐH Kinh tế TP.HCM."</em></td>
              </tr>
              <tr>
                <td><strong>2. Role (Vai trò)</strong></td>
                <td>Kích hoạt phong cách tư duy và văn phong học thuật chuyên gia của mô hình ngôn ngữ.</td>
                <td><em>"Bạn là Chuyên gia Cố vấn Phương pháp Sư phạm Đại học và Thiết kế Kịch bản Giảng dạy tích cực."</em></td>
              </tr>
              <tr>
                <td><strong>3. Task (Nhiệm vụ)</strong></td>
                <td>Nêu rõ hành động cần làm, định lượng đầu ra và phân bổ thời lượng cụ thể.</td>
                <td><em>"Thiết kế kịch bản lên lớp 45 phút gồm: 1 tình huống mở đầu gây tranh cãi, 3 luận điểm trọng tâm, 2 câu hỏi mở."</em></td>
              </tr>
              <tr>
                <td><strong>4. Constraints (Ràng buộc)</strong></td>
                <td>Ngăn chặn AI trả về lý thuyết sách giáo khoa khô cứng, bảo đảm chuẩn mực đại học.</td>
                <td><em>"Không dùng lý thuyết sáo rỗng; bắt buộc gắn nhãn [CẦN GIẢNG VIÊN THẨM ĐỊNH] tại những chỗ đưa số liệu."</em></td>
              </tr>
              <tr>
                <td><strong>5. Output (Định dạng)</strong></td>
                <td>Quy định cấu trúc trình bày để dễ dàng tái sử dụng hoặc đưa vào slide/bài giảng.</td>
                <td><em>"Trình bày dưới dạng bảng Markdown: Thời lượng | Hoạt động Giảng viên | Hoạt động Sinh viên."</em></td>
              </tr>
              <tr>
                <td><strong>6. Evaluation (Tự kiểm định)</strong></td>
                <td>Yêu cầu AI tự phản biện lại kết quả trước khi đưa ra bản thảo cuối cùng.</td>
                <td><em>"Trước khi trả lời, hãy tự kiểm tra xem các luận điểm có bám sát đối tượng sinh viên năm nhất hay không."</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- PHẦN 3: 3 KỸ THUẬT PROMPTING CHUYÊN SÂU -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 3</span>
          <h2 class="article-section-title">3 Kỹ Thuật Câu Lệnh Nâng Cao Dành Cho Giảng Viên</h2>
        </div>
        <p class="article-prose">
          Thay vì chỉ đặt một câu hỏi đơn tuyến, giảng viên có thể áp dụng 3 kỹ thuật nâng cao để nâng tầm chất lượng phản hồi của AI:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 16px 0 24px 0;">
          <!-- Card 1 -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; display: flex; flex-direction: column;">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #1e40af; margin-bottom: 4px;">Kỹ thuật 1</div>
            <div style="font-weight: 700; color: #0f172a; font-size: 0.98rem; margin-bottom: 8px;">Few-shot Prompting (Cung cấp mẫu chuẩn)</div>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.55; margin-bottom: 12px;">
              Cung cấp 1 đến 2 ví dụ mẫu hoàn chỉnh (gồm yêu cầu và kết quả mẫu chuẩn). AI sẽ học chính xác văn phong, cấu trúc và thang đo học thuật mà Thầy/Cô mong muốn.
            </p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #3b82f6; border-radius: 6px; padding: 10px 12px; margin-bottom: 12px; font-size: 0.82rem; line-height: 1.5; color: #1e293b; font-family: monospace; white-space: pre-wrap; word-break: break-word;"><strong>Ví dụ câu lệnh:</strong>
[Mẫu chuẩn]:
• Khái niệm: Độ co giãn của cầu
• Diễn giải: Giá xăng tăng 10%, lượng mua giảm 2% -> Cầu co giãn ít vì xăng là hàng thiết yếu khó thay thế.

[Yêu cầu]:
Viết tiếp theo đúng cấu trúc mẫu trên cho 2 khái niệm: "Hàng hóa thứ cấp" và "Hàng hóa bổ sung".</div>

            <div style="margin-top: auto; font-size: 0.8rem; color: #64748b; font-style: italic;">
              Ứng dụng: Soạn câu hỏi trắc nghiệm chuẩn Bloom, viết nhận xét bài tập.
            </div>
          </div>

          <!-- Card 2 -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; display: flex; flex-direction: column;">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #1e40af; margin-bottom: 4px;">Kỹ thuật 2</div>
            <div style="font-weight: 700; color: #0f172a; font-size: 0.98rem; margin-bottom: 8px;">Socratic Prompting (Gợi mở phản biện)</div>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.55; margin-bottom: 12px;">
              Chỉ đạo AI không giải hộ hay đọc ngay đáp án, mà đặt các câu hỏi phản biện dẫn dắt sinh viên từng bước tự suy luận và tự bảo vệ luận điểm khoa học.
            </p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #3b82f6; border-radius: 6px; padding: 10px 12px; margin-bottom: 12px; font-size: 0.82rem; line-height: 1.5; color: #1e293b; font-family: monospace; white-space: pre-wrap; word-break: break-word;"><strong>Ví dụ câu lệnh:</strong>
Sinh viên hỏi: "Tại sao khi Nhà nước áp giá trần xăng dầu thì thị trường lại khan hiếm?"

Lệnh cho AI:
"Đóng vai Giảng viên theo phương pháp Socrates. Đừng trả lời trực tiếp. Hãy hỏi lại sinh viên:
1. Khi giá thấp hơn mức cân bằng, lượng cầu muốn mua tăng hay giảm?
2. Cây xăng nhập giá cao mà phải bán giá thấp thì họ có muốn nhập nhiều không?
Dẫn dắt sinh viên tự rút ra kết luận về thiếu hụt cung."</div>

            <div style="margin-top: auto; font-size: 0.8rem; color: #64748b; font-style: italic;">
              Ứng dụng: Thiết lập AI Tutor hỗ trợ tự học, định hướng thảo luận nhóm.
            </div>
          </div>

          <!-- Card 3 -->
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; display: flex; flex-direction: column;">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #1e40af; margin-bottom: 4px;">Kỹ thuật 3</div>
            <div style="font-weight: 700; color: #0f172a; font-size: 0.98rem; margin-bottom: 8px;">Self-Critique (Tự phản biện & rà soát)</div>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.55; margin-bottom: 12px;">
              Thêm mệnh đề bắt buộc AI tự soi lỗi, phát hiện các điểm ngộ nhận, giả định thiếu căn cứ hoặc nguy cơ gian lận trước khi đưa ra bản thảo cuối cùng.
            </p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #3b82f6; border-radius: 6px; padding: 10px 12px; margin-bottom: 12px; font-size: 0.82rem; line-height: 1.5; color: #1e293b; font-family: monospace; white-space: pre-wrap; word-break: break-word;"><strong>Ví dụ câu lệnh:</strong>
"Sau khi soạn xong đề thi tự luận 3 câu hỏi trên, hãy đóng vai Giảng viên phản biện và thực hiện bước Self-Critique:
1. Chỉ ra 2 điểm sinh viên có thể hiểu nước đôi hoặc đề bài chưa chặt chẽ.
2. Đề thi này có nguy cơ bị sinh viên copy nguyên văn vào ChatGPT để làm hộ không? Nếu có, hãy sửa lại để bắt buộc sinh viên phải liên hệ số liệu thực tế tại Việt Nam."</div>

            <div style="margin-top: auto; font-size: 0.8rem; color: #64748b; font-style: italic;">
              Ứng dụng: Kiểm tra bẫy câu hỏi thi, rà soát tính khả thi bài tập lớn.
            </div>
          </div>
        </div>
      </section>

      <!-- PHẦN 4: THỰC NGHIỆM NÂNG CẤP CÂU LỆNH -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 4</span>
          <h2 class="article-section-title">Thực Nghiệm Sư Phạm: Nâng Cấp Câu Lệnh Trực Tiếp</h2>
        </div>
        <p class="article-prose">
          Đối chiếu trực tiếp sự chuyển hóa từ một câu lệnh thô sơ sang một câu lệnh chuẩn Sư phạm 4.0 trên cùng một chủ đề bài giảng:
        </p>

        <!-- Thẻ Tình huống thực nghiệm -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <div style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #f8fafc;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Tình huống giảng dạy thực nghiệm</span>
            <span style="font-size: 0.8rem; color: #64748b; background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 8px; border-radius: 4px;">Kinh tế vi mô • 30 phút</span>
          </div>
          <div style="padding: 14px 18px; font-size: 0.88rem; color: #334155; line-height: 1.6;">
            <strong>Chủ đề:</strong> <em>"Hành vi người tiêu dùng & Quy luật Lợi ích cận biên giảm dần (Diminishing Marginal Utility)"</em>. Sinh viên hay học vẹt định nghĩa toán học, khó vận dụng để giải thích các chiến lược định giá combo sản phẩm trong thực tế kinh doanh.
          </div>
        </div>

        <!-- Before: Prompt Thô -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin: 0;">Câu lệnh thô (Trước khi nâng cấp)</h4>
            <span style="font-size: 0.82rem; color: #64748b;">Chưa có bối cảnh môn học, đối tượng hay ràng buộc sư phạm</span>
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
            <strong style="color: #dc2626;">Hạn chế:</strong> AI trả về văn bản định nghĩa sao chép sách giáo khoa chung chung, không phân hóa sinh viên năm nhất, ví dụ trừu tượng và không dùng được trên bục giảng.
          </p>
        </div>

        <!-- After: Prompt Chuẩn Sư Phạm -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: #1e293b; margin: 0;">Câu lệnh chuẩn Sư phạm 4.0 (Sau khi nâng cấp theo 6 thành phần)</h4>
            <span style="font-size: 0.82rem; color: #64748b;">Đầy đủ Bối cảnh, Vai trò, Nhiệm vụ 3 bước, Ràng buộc thẩm định</span>
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
            <strong style="color: #16a34a;">Ưu điểm:</strong> AI xây dựng kịch bản 30 phút chi tiết, đưa ra ví dụ gần gũi với sinh viên, kết nối trực tiếp với chiến lược định giá combo trong kinh doanh và gán nhãn thẩm định an toàn.
          </p>
        </div>
      </section>

      <!-- PHẦN 5: THƯ VIỆN 10 CÂU LỆNH CHUẨN SƯ PHẠM (PROMPT LIBRARY) -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 5</span>
          <h2 class="article-section-title">Thư Viện 10 Câu Lệnh Chuẩn Sư Phạm Mẫu (Prompt Library)</h2>
        </div>
        <p class="article-prose">
          Bộ 10 câu lệnh chuẩn mực được đóng gói sẵn thành 2 nhóm công việc then chốt của giảng viên đại học. Giảng viên có thể sao chép, tùy biến thông tin trong ngoặc vuông và tái sử dụng cho toàn bộ học phần:
        </p>

        <!-- Nhóm A: 5 Prompt Chuẩn Bị Bài Giảng -->
        <div style="margin-bottom: 28px;">
          <h3 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 14px; padding-bottom: 6px; border-bottom: 2px solid #e2e8f0;">
            Nhóm A: 05 Câu Lệnh Chuẩn Bị Bài Giảng (Teaching Preparation)
          </h3>

          <!-- Prompt 1 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">1. Thiết kế Kịch bản Giảng dạy Tích cực 90 phút (Active Lesson Flow)</h4>
              <span style="font-size: 0.8rem; color: #64748b;">Phân bổ 4 chặng: Khởi động, Khám phá, Thực hành, Đúc kết</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 01: Thiết kế Kịch bản Giảng dạy</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P1)}'), 'Đã sao chép Prompt 1!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P1}</pre>
            </div>
          </div>

          <!-- Prompt 2 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">2. Xây dựng Bài tập Tình huống (Case Study) Thực tế tại Việt Nam</h4>
              <span style="font-size: 0.8rem; color: #64748b;">Độ dài 300 từ kèm số liệu thực tiễn và 3 câu hỏi phân tầng</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 02: Xây dựng Case Study</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P2)}'), 'Đã sao chép Prompt 2!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P2}</pre>
            </div>
          </div>

          <!-- Prompt 3 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">3. Thiết kế Hệ thống Câu hỏi Gợi mở Tranh luận (Hook Questions)</h4>
              <span style="font-size: 0.8rem; color: #64748b;">3 câu hỏi kích hoạt tư duy phản biện kèm góc nhìn đối lập</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 03: Câu hỏi Gợi mở Tranh luận</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P3)}'), 'Đã sao chép Prompt 3!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P3}</pre>
            </div>
          </div>

          <!-- Prompt 4 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">4. Tạo Phép So Sánh Ẩn Dụ Trực Quan (Analogies) cho Khái niệm Khó</h4>
              <span style="font-size: 0.8rem; color: #64748b;">2 ẩn dụ trực quan kèm ranh giới tương đồng học thuật</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 04: So Sánh Ẩn Dụ Trực Quan</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P4)}'), 'Đã sao chép Prompt 4!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P4}</pre>
            </div>
          </div>

          <!-- Prompt 5 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">5. Lập Dàn ý Cấu trúc Slide Bài giảng (Slide Storyboard Outline)</h4>
              <span style="font-size: 0.8rem; color: #64748b;">Bộ 8-10 slide theo nguyên lý tối giản kèm Speaker Notes</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 05: Dàn ý Slide Bài giảng</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P5)}'), 'Đã sao chép Prompt 5!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P5}</pre>
            </div>
          </div>
        </div>

        <!-- Nhóm B: 5 Prompt Tổ Chức Học Tập & Đánh Giá -->
        <div>
          <h3 style="font-size: 1.05rem; font-weight: 700; color: #1e293b; margin-bottom: 14px; padding-bottom: 6px; border-bottom: 2px solid #e2e8f0;">
            Nhóm B: 05 Câu Lệnh Tổ Chức Học Tập & Đánh Giá (Assessment & Learning)
          </h3>

          <!-- Prompt 6 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">6. Soạn Bộ Câu Hỏi Trắc Nghiệm Nhanh (Quick Check & Misconception)</h4>
              <span style="font-size: 0.8rem; color: #64748b;">4 câu hỏi phân tầng kèm câu hỏi kiểm tra ngộ nhận phổ biến</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 06: Câu hỏi Trắc nghiệm Nhanh</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P6)}'), 'Đã sao chép Prompt 6!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P6}</pre>
            </div>
          </div>

          <!-- Prompt 7 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">7. Xây dựng Thang đo Đánh giá Rubric Chuẩn Học Thuật</h4>
              <span style="font-size: 0.8rem; color: #64748b;">Thang điểm 10 phân bổ 4 tiêu chí và 4 mức độ thể hiện</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 07: Thang đo Đánh giá Rubric</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P7)}'), 'Đã sao chép Prompt 7!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P7}</pre>
            </div>
          </div>

          <!-- Prompt 8 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">8. Soạn Nhận Xét Sư Phạm Mang Tính Xây Dựng (Constructive Feedback)</h4>
              <span style="font-size: 0.8rem; color: #64748b;">Mô hình 3 phần: Điểm sáng, Điểm cần hoàn thiện, Đề xuất hành động</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 08: Nhận xét Phản hồi Sư phạm</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P8)}'), 'Đã sao chép Prompt 8!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P8}</pre>
            </div>
          </div>

          <!-- Prompt 9 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">9. Thiết lập Gia sư Học thuật AI Theo Phương Pháp Socrates (AI Tutor)</h4>
              <span style="font-size: 0.8rem; color: #64748b;">Quy tắc dẫn dắt sinh viên tự suy luận, không làm bài hộ</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 09: Gia sư Học thuật AI Socrates</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P9)}'), 'Đã sao chép Prompt 9!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P9}</pre>
            </div>
          </div>

          <!-- Prompt 10 -->
          <div style="margin-bottom: 20px;">
            <div style="display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
              <h4 style="font-size: 0.92rem; font-weight: 700; color: #1e293b; margin: 0;">10. Thiết Kế Đề Thi Tự Luận Mở Chống Gian Lận AI (Open-ended Exam)</h4>
              <span style="font-size: 0.8rem; color: #64748b;">Tình huống biến động, thông tin không hoàn hảo, đòi hỏi tư duy bậc cao</span>
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 10: Đề thi Tự luận Mở</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P10)}'), 'Đã sao chép Prompt 10!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt
                </button>
              </div>
              <pre class="article-prompt-code">${LIB_P10}</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- PHẦN 6: BÀI TẬP THỰC HÀNH TẠI LỚP -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag">PHẦN 6</span>
          <h2 class="article-section-title">Bài Tập Tình Huống Thực Hành Tại Lớp (70 Phút)</h2>
        </div>
        <p class="article-prose">
          Học viên thực hiện bài tập trực tiếp trên máy tính cá nhân để xây dựng và thẩm định bộ công cụ câu lệnh cá nhân hóa cho học phần của mình:
        </p>

        <!-- Thẻ Tình huống bài tập -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin: 16px 0 20px 0; overflow: hidden;">
          <div style="padding: 12px 18px; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; background: #f8fafc;">
            <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">Đề bài: Xây Dựng Thư Viện Prompt (Prompt Library) Cá Nhân Hóa</span>
            <span style="font-size: 0.8rem; color: #64748b; background: #ffffff; border: 1px solid #cbd5e1; padding: 2px 8px; border-radius: 4px;">Thời lượng: 70 phút</span>
          </div>

          <div style="padding: 16px 18px; font-size: 0.9rem; line-height: 1.6; color: #334155;">
            <div style="margin-bottom: 10px;">
              <strong style="color: #0f172a;">Tình huống thực tế:</strong> Thầy/Cô chọn 01 học phần thực tế mình trực tiếp giảng dạy trong học kỳ này (ví dụ: <em>Kinh tế vi mô, Quản trị học, Pháp luật đại cương, hoặc Kỹ thuật lập trình</em>). Nhiệm vụ là đóng gói một Thư viện câu lệnh chuẩn mực giúp tự động hóa khâu soạn học liệu nhưng vẫn giữ quyền kiểm soát học thuật tuyệt đối.
            </div>
            <div>
              <strong style="color: #0f172a;">Sản phẩm đầu ra (Deliverable):</strong> Bộ tài liệu chứa tối thiểu 05 câu lệnh hoàn chỉnh (chọn từ 10 mẫu ở Phần 5 đã thay thế thông tin thực tế của môn học) kèm kết quả chạy thử nghiệm đã được Thầy/Cô trực tiếp thẩm định.
            </div>
          </div>
        </div>

        <!-- 3 Bước thực hành -->
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 1 (30 phút): Tùy biến và Tinh chỉnh 05 câu lệnh trọng tâm
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Chọn 03 câu lệnh thuộc Nhóm A (Soạn bài giảng) và 02 câu lệnh thuộc Nhóm B (Đánh giá). Thay thế toàn bộ các thông tin trong ngoặc vuông bằng nội dung môn học thật của Thầy/Cô. Bổ sung các ràng buộc riêng biệt về thuật ngữ chuyên ngành hoặc văn hóa học thuật của khoa/trường.
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 2 (25 phút): Chạy thử nghiệm & Kiểm định ranh giới học thuật
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Lần lượt dán các prompt vào ChatGPT, Gemini hoặc Claude. Đọc kỹ đầu ra trả về:
              <br>• Đánh giá xem AI có tuân thủ đúng định dạng bảng/danh sách đã yêu cầu hay không.
              <br>• Kiểm tra chéo các số liệu, tên tác giả hoặc điều luật (nếu có) để phát hiện và chỉnh sửa triệt để các lỗi ảo giác học thuật.
            </div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
            <div style="font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px;">
              Chặng 3 (15 phút): Trao đổi chéo đồng đẳng & Lưu trữ vào sổ tay
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Trao đổi nhanh câu lệnh tâm đắc nhất với đồng nghiệp bên cạnh để tiếp thu góc nhìn phản biện sư phạm. Lưu lại file Word hoặc Notion làm tài nguyên giảng dạy cá nhân (Prompt Library) sử dụng xuyên suốt học kỳ.
            </div>
          </div>
        </div>

        <!-- Khung chuẩn bị cho buổi 3 -->
        <div style="padding: 12px 18px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.86rem; color: #334155; line-height: 1.6;">
          <strong>Chuẩn bị cho Buổi 3 (AI Thiết Kế Bài Giảng & Học Phần):</strong> Thầy/Cô mang theo 01 Đề cương chi tiết học phần (Syllabus) hoàn chỉnh của môn học mình giảng dạy để thực hành phân tích chuẩn đầu ra CLO/PLO và xây dựng kịch bản bài học tích hợp trước - trong - sau lớp.
        </div>
      </section>

    </div>
  `;

  const session2Data = {
    id: 2,
    number: 2,
    title: "Buổi 2: Prompt Engineering Cho Giảng Viên Đại Học",
    topic: "Prompt Engineering",
    tools: ["ChatGPT", "Gemini", "Claude"],
    duration: "180 phút (3 giờ)",
    deliverable: "Thư viện Prompt Library cá nhân gồm tối thiểu 10 prompt có thể tái sử dụng cho môn học",
    overview: "Làm chủ kỹ thuật viết câu lệnh sư phạm chuẩn mực theo khung cấu trúc 6 thành phần (Context, Role, Task, Constraints, Output, Evaluation). Vận dụng 3 kỹ thuật nâng cao (Few-shot, Socratic, Self-critique) và đóng gói Thư viện 10 câu lệnh (Prompt Library) phục vụ toàn diện khâu soạn bài giảng và tổ chức đánh giá học tập.",
    articleHtml: articleHtml,
    objectives: [],
    timeline: [],
    blocks: []
  };

  // Register session into central registry
  window.CurriculumRegistry.registerSession(session2Data);

  // Synchronize metadata with localStorage
  window.CurriculumRegistry.saveSessionMeta(2, {
    title: session2Data.title,
    duration: session2Data.duration,
    tools: session2Data.tools,
    overview: session2Data.overview
  });
})();
