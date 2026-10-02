/**
 * SESSION 5: LÀM CHỦ NOTEBOOKLM: TÓM TẮT HỌC LIỆU, XÂY DỰNG GIÁO ÁN, SOẠN NỘI DUNG SLIDE & MÔ TẢ PHONG CÁCH HÌNH ẢNH TRỰC QUAN
 * (js/data/sessions/session-05.js)
 * Cấu trúc thiết kế sư phạm chuẩn quốc tế, trình bày bài bản theo yêu cầu người học:
 * - Banner tiêu đề chuẩn màu tối sang trọng (#0f172a -> #1e293b)
 * - Khung học liệu thực hành SGK Địa Lí 11 (nút tải trực tiếp & xem trước PDF)
 * - I. MỤC TIÊU BÀI HỌC (1. Kiến thức, 2. Năng lực, 3. Phẩm chất)
 * - II. BẢNG KHÁM PHÁ CÁC TÍNH NĂNG CỐT LÕI CỦA NOTEBOOKLM
 * - III. BÀI TẬP THỰC HÀNH: ĐỀ BÀI YÊU CẦU & QUY TRÌNH 5 BƯỚC THỰC HIỆN CHI TIẾT
 *   + ĐỀ BÀI YÊU CẦU: Bối cảnh, Học liệu nguồn đầu vào & Bộ sản phẩm đầu ra bắt buộc
 *   + SƠ ĐỒ CHUYỂN DỮ LIỆU: Làm trên đâu? Chuyển sang đâu? Dùng công cụ gì?
 *   + BƯỚC 1: Tóm tắt học liệu trọng tâm có trích dẫn (Thực hiện trên Google NotebookLM)
 *   + BƯỚC 2: Xây dựng Kế hoạch bài dạy / Giáo án 45 phút (Thực hiện trên NotebookLM & lưu Word/Docs)
 *   + BƯỚC 3: Lên kịch bản 8 Slide & Mô tả phong cách hình ảnh + Prompt AI (Thực hiện trên NotebookLM)
 *   + BƯỚC 4: Tạo bộ Slide trình chiếu mỹ thuật hoàn chỉnh (Thực hiện trên Gamma App / PowerPoint / Canva)
 *   + BƯỚC 5: Khai thác Audio Overview Podcast & Bộ công cụ Notebook Guide (Thực hiện trên NotebookLM)
 *   + BẢNG TIÊU CHÍ NGHIỆM THU ĐẦU RA 5 SAO
 * - IV. HƯỚNG DẪN VỀ NHÀ VÀ DẶN DÒ (2 nhiệm vụ gọn gàng: Lưu trữ học liệu & Chuẩn bị Buổi 6)
 */

(function() {
  // =========================================================================
  // 1. CÂU LỆNH SO SÁNH THỬ NGHIỆM ĐẦU GIỜ (TƯ DUY KIỂM SOÁT NOTEBOOKLM)
  // =========================================================================
  const PROMPT_UPGRADE_BEFORE = `Hãy tóm tắt bài 19 Địa lí 11 và làm cho tôi giáo án cùng bộ slide về kinh tế Hoa Kỳ.`;

  const PROMPT_UPGRADE_AFTER = `VAI TRÒ: Trợ lý sư phạm môn Địa Lí 11.
BỐI CẢNH: Dựa hoàn toàn vào "Bài 19: Kinh tế Hoa Kỳ" (Trang 88 – 96 SGK Địa Lí 11 vừa nạp vào NotebookLM).

YÊU CẦU BƯỚC 1 (HỎI MỤC TIÊU ĐẦU RA HÀNH ĐỘNG):
Hãy đọc nội dung Bài 19, tóm tắt tổng quan bài học và cho tôi biết sau buổi học học sinh phải BIẾT LÀM ĐƯỢC CÁI GÌ CỤ THỂ (áp dụng nguyên tắc đổi động từ Buổi 3: dùng các động từ đo lường được như phân tích, so sánh, giải thích... tuyệt đối không dùng từ 'hiểu' hay 'biết' mơ hồ) kèm theo các số liệu then chốt và số trang [Trang xx].
=> DỪNG LẠI TẠI ĐÂY. Tôi duyệt xong mục tiêu hành động thì chúng ta mới bước sang soạn Kế hoạch bài dạy!`;

  // =========================================================================
  // 2. BỘ 5 CÂU LỆNH MẪU SẴN SÀNG CHO GIẢNG VIÊN (TÌNH HUỐNG BÀI 19 SGK ĐỊA LÍ 11)
  // =========================================================================
  
  // Prompt 1: Tóm tắt tổng quan bài học & xác định mục tiêu học sinh BIẾT LÀM ĐƯỢC GÌ (Bước 1)
  const LIB_P1 = `Dựa vào nội dung "Bài 19: Kinh tế Hoa Kỳ" (Trang 88 – 96) trong cuốn SGK Địa Lí 11 tôi vừa nạp:

1. Hãy tóm tắt tổng quan bức tranh kinh tế Hoa Kỳ một cách ngắn gọn, dễ hiểu.
2. Cho tôi biết sau khi học xong bài này, học sinh phải BIẾT LÀM ĐƯỢC CÁI GÌ CỤ THỂ? (Áp dụng nguyên tắc đổi động từ ở Buổi 3: Bắt buộc dùng các động từ hành động đo lường được như phân tích, so sánh, giải thích, vẽ biểu đồ... Tuyệt đối KHÔNG dùng các từ mơ hồ như "hiểu được", "biết được", "nắm được").
3. Trích xuất các số liệu thống kê quan trọng nhất và từ khóa then chốt trong bài (kèm số trang trích dẫn tương ứng trong sách [Trang xx]).`;

  // Prompt 2: Soạn Kế hoạch bài dạy (Giáo án) 45 phút định hướng "Học sinh làm được gì" (Bước 2)
  const LIB_P2 = `Dựa vào bản tóm tắt tổng quan và các mục tiêu hành động bạn vừa đề xuất ở Bước 1:

ÁP DỤNG TRIỆT ĐỂ NGUYÊN TẮC SƯ PHẠM (BUỔI 3):
"Mục tiêu bài dạy KHÔNG PHẢI ĐỂ HỌC SINH 'HIỂU', mà phải xác định rõ trong buổi học học sinh PHẢI BIẾT LÀM ĐƯỢC CÁI GÌ CỤ THỂ. Mục tiêu dùng động từ nào thì hoạt động phải cho học sinh thực hành động từ đó!"

Nhiệm vụ của bạn: Hãy xây dựng Kế hoạch bài dạy (Giáo án) 45 phút cho Bài 19 theo cấu trúc định hướng hành động:

I. MỤC TIÊU BÀI DẠY (BẮT BUỘC DÙNG ĐỘNG TỪ HÀNH ĐỘNG ĐO LƯỜNG ĐƯỢC):
   - Phân tích được bảng số liệu quy mô GDP và tỉ trọng 3 ngành kinh tế Hoa Kỳ (Trang 88).
   - Giải thích được 4 nguyên nhân giúp Hoa Kỳ giữ vững vị thế nền kinh tế số 1 thế giới.
   - So sánh được sự khác biệt về cơ cấu ngành và không gian phát triển giữa vùng Đông Bắc truyền thống và Vành đai Mặt trời (Sun Belt) trên bản đồ (Trang 92-94).
   - Đánh giá được cơ hội và thách thức của nông sản Việt Nam khi xuất khẩu sang thị trường Hoa Kỳ.
   (Tuyệt đối không dùng các từ mơ hồ: "hiểu bài", "biết kiến thức", "nắm vững").

II. THIẾT BỊ DẠY HỌC & HỌC LIỆU SỐ:
   Bản đồ kinh tế Hoa Kỳ, phiếu học tập số 1 & 2, tệp PDF SGK trên NotebookLM.

III. TIẾN TRÌNH 4 HOẠT ĐỘNG DẠY HỌC (TẬP TRUNG 100% VÀO HÀNH ĐỘNG HỌC SINH TỰ LÀM):
   1. Hoạt động 1: Khởi động (7 phút) — Học sinh LÀM GÌ?: Quan sát hình ảnh và LIỆT KÊ nhanh vào vở 5 thương hiệu/sản phẩm Mỹ quen thuộc (Apple, Ford, Boeing, Starbucks...).
   2. Hoạt động 2: Khám phá kiến thức mới (23 phút) — Học sinh LÀM GÌ?: Chia 3 trạm làm việc nhóm, mỗi trạm hoàn thành một sản phẩm cụ thể ra phiếu học tập:
      - Trạm 1: TÍNH TOÁN tỉ trọng và NHẬN XÉT bảng số liệu GDP Hoa Kỳ so với thế giới.
      - Trạm 2: LẬP BẢNG SO SÁNH đặc điểm nổi bật của nông nghiệp hiện đại và các ngành công nghiệp đỉnh cao (hàng không vũ trụ Boeing, bán dẫn Silicon Valley).
      - Trạm 3: ĐỌC VÀ CHỈ TRÊN BẢN ĐỒ sự dịch chuyển công nghiệp từ Đông Bắc xuống Vành đai Mặt trời.
   3. Hoạt động 3: Luyện tập (10 phút) — Học sinh LÀM GÌ?: TRÌNH BÀY kết quả thảo luận nhóm và PHẢN BIỆN câu hỏi giữa các nhóm.
   4. Hoạt động 4: Vận dụng (5 phút) — Học sinh LÀM GÌ?: ĐÓNG VAI chuyên gia xuất nhập khẩu ĐỀ XUẤT 02 giải pháp giúp nông sản Việt Nam (sầu riêng, tôm basa) vượt qua tiêu chuẩn kỹ thuật FDA của Hoa Kỳ.

IV. HỒ SƠ ĐÁNH GIÁ: Bảng tiêu chí đánh giá sản phẩm phiếu học tập của học sinh (Rubric 3 mức độ: Chưa đạt - Đạt - Xuất sắc).`;

  // Prompt 3: Soạn trọn bộ nội dung 8 Slide súc tích kèm gợi ý phong cách ảnh tự nhiên, thật hoàn toàn (Bước 3)
  const LIB_P3 = `Dựa trên nguồn tài liệu Bài 19 SGK Địa Lí 11 đã nạp, hãy biên soạn trọn bộ nội dung 8 SLIDE TRÌNH CHIẾU hoàn chỉnh cho tiết dạy:

QUY TẮC BẮT BUỘC ĐỐI VỚI TỪNG SLIDE:
1. TIÊU ĐỀ SLIDE: Ngắn gọn, mang tính hành động hoặc gợi mở (dưới 8 từ).
2. NỘI DUNG HIỂN THỊ: Tối đa đúng 3 gạch đầu dòng, mỗi gạch dưới 12 từ, nêu bật từ khóa và số liệu so sánh đắt giá. Nói không với slide toàn chữ.
3. PHONG CÁCH HÌNH ẢNH TỰ NHIÊN & ẢNH PHẢI THẬT HOÀN TOÀN (100% REAL-WORLD PHOTOGRAPHY): 
   - Cứ mỗi slide, hãy tạo theo một phong cách sao cho tự nhiên và phù hợp chuẩn xác với nội dung bài học của slide đó.
   - Hình ảnh phải là ẢNH CHỤP THỰC TẾ ĐỜI THƯỜNG / TƯ LIỆU BÁO CHÍ (Photojournalism), người thật, địa danh thật, ánh sáng tự nhiên.
   - TUYỆT ĐỐI NÓI KHÔNG VỚI: hình vẽ hoạt hình (cartoon), tranh 3D chibi, clipart cách điệu, đồ họa anime hay ảnh viễn tưởng CGI.
4. LỜI GIẢNG GỢI Ý (SPEAKER NOTES): Đoạn văn 40 - 50 từ viết bằng ngôn ngữ đời thường, giàu hình ảnh thực tế để người dạy diễn giải sinh động, không đọc lại chữ trên slide.

CẤU TRÚC 8 SLIDE BÁM SÁT BÀI 19:
- Slide 1: Khởi động — Sức ảnh hưởng của các thương hiệu Hoa Kỳ trong đời sống hàng ngày (Ảnh thật góc làm việc tự nhiên có iPhone, laptop, xe Ford).
- Slide 2: Vị thế số 1 thế giới — Quy mô GDP ~21.000 tỉ USD và GDP/người vượt trội [Trang 88] (Ảnh tư liệu báo chí sầm uất trung tâm tài chính Manhattan).
- Slide 3: Nông nghiệp hiện đại — Trang trại quy mô lớn và các vành đai chuyên canh [Trang 90] (Ảnh chụp thật cánh đồng lúa mì Kansas và máy gặt John Deere thu hoạch dưới nắng chiều).
- Slide 4: Công nghiệp đỉnh cao — Sự chuyển dịch về Vành đai Mặt trời (Sun Belt) & Silicon Valley [Trang 92] (Ảnh thật kỹ sư trong phòng sạch kiểm tra vi mạch bán dẫn hoặc xưởng máy bay Boeing).
- Slide 5: Dịch vụ dẫn dắt — Chiếm >80% GDP và trung tâm tài chính toàn cầu Phố Wall [Trang 93] (Ảnh chụp đời thực vỉa hè phố Wall và Sở giao dịch chứng khoán NYSE).
- Slide 6: Bức tranh phân hóa kinh tế 4 vùng lãnh thổ (Đông Bắc, Trung Tây, Nam, Tây) [Trang 94] (Bộ ảnh ghép tư liệu 4 cảnh quan thật đặc trưng của 4 vùng kinh tế).
- Slide 7: Cơ hội và thách thức trong quan hệ kinh tế - thương mại Việt Nam - Hoa Kỳ (Ảnh phóng sự tàu container thật rời cảng biển Việt Nam sang Mỹ).
- Slide 8: Bài tập tình huống thực tế: Nông sản Việt Nam vượt qua hàng rào kỹ thuật vào thị trường Mỹ (Ảnh chụp thật cận cảnh công nhân đóng gói trái cây/thủy sản dán tem kiểm định FDA).`;

  // Prompt 4: Cẩm nang phong cách hình ảnh thật hoàn toàn & Trọn bộ Prompt tạo ảnh AI cho 8 slide (Bước 3)
  const LIB_P4 = `VAI TRÒ: Giám đốc nghệ thuật (Art Director) & Chuyên gia hình ảnh tư liệu sư phạm số.
NHIỆM VỤ: Thiết lập Cẩm nang phong cách hình ảnh tự nhiên, chân thực 100% (Real-world Photography) và viết trọn bộ Prompt tạo ảnh AI chi tiết cho từng slide của Bài 19: Kinh tế Hoa Kỳ:

QUY TẮC BẮT BUỘC: MỖI SLIDE PHẢI TẠO THEO PHONG CÁCH TỰ NHIÊN, PHÙ HỢP NỘI DUNG & HÌNH ẢNH PHẢI THẬT HOÀN TOÀN
1. TÍNH TỰ NHIÊN & PHÙ HỢP NỘI DUNG TỪNG SLIDE:
   - Mỗi slide phản ánh một khía cạnh địa lý - kinh tế khác nhau, do đó phong cách hình ảnh phải tự nhiên tương ứng:
     + Slide Khởi động (Thương hiệu): Phong cách đời sống hiện đại tự nhiên (Candid lifestyle photography).
     + Slide Quy mô kinh tế: Phong cách ảnh kiến trúc đô thị đại cảnh (Urban architecture photography).
     + Slide Nông nghiệp: Phong cách ảnh tư liệu phóng sự đồng ruộng thực tế (Agricultural documentary photography).
     + Slide Công nghiệp & Vành đai Mặt trời: Phong cách ảnh tư liệu công nghiệp kỹ thuật cao (Industrial photojournalism).
     + Slide Dịch vụ & Phố Wall: Phong cách ảnh đường phố tài chính đời thực (Street documentary photography).
     + Slide 4 vùng kinh tế: Phong cách ảnh tư liệu phong cảnh 4 vùng chân thực (Geographic documentary photography).
     + Slide Giao thương Việt - Mỹ: Phong cách tư liệu logistics cảng biển quốc tế (Maritime seaport photography).
     + Slide Tình huống nông sản xuất khẩu: Phong cách phóng sự chuỗi cung ứng thực tế (Supply chain documentary photography).
2. NGUYÊN TẮC HÌNH ẢNH PHẢI THẬT HOÀN TOÀN:
   - 100% là ảnh chụp thực tế đời thường (Authentic Photography), góc máy chân thực (Shot on 35mm/50mm DSLR lens), ánh sáng tự nhiên ban ngày (Natural soft daylight).
   - TUYỆT ĐỐI CẤM: Tranh vẽ hoạt hình (cartoon), hình vẽ 3D render, clipart, anime chibi, tranh vẽ giả tưởng CGI không có thật.
3. TỶ LỆ KHUNG HÌNH: 16:9 chuẩn màn hình trình chiếu.

BỘ CÂU LỆNH TẠO ẢNH AI CHÂN THỰC 100% (TEXT-TO-IMAGE PROMPTS) CHO TỪNG SLIDE:
Hãy viết câu lệnh Prompt tiếng Anh chuẩn xác (dùng cho Midjourney, DALL-E 3, Canva, Bing Image Creator) khóa chặt tính chân thực cho từng slide:

- Slide 1 (Khởi động): Cảnh đời thực tự nhiên góc làm việc quán cà phê hiện đại có iPhone, laptop và xe hơi Ford chạy ngoài phố.
  Prompt: A candid realistic documentary photograph of a modern wooden workspace in a bright urban cafe, authentic iPhone and laptop on table, a genuine Ford car visible through the window, natural soft daylight, 35mm lens, photojournalistic style, authentic real-world look, no cartoon, no 3D render --ar 16:9

- Slide 2 (Quy mô GDP vị thế số 1): Toàn cảnh thực tế đường chân trời khu tài chính Manhattan, New York dưới ánh nắng rực rỡ.
  Prompt: A breathtaking wide-angle authentic documentary photograph of the Manhattan financial district skyline in New York City, real skyscrapers under clear blue sky, sharp architectural details, professional editorial journalism photography, 8k resolution, authentic realistic look --ar 16:9

- Slide 3 (Nông nghiệp trang trại lớn): Cánh đồng lúa mì vàng bao la ở bang Kansas, máy gặt đập John Deere đang thu hoạch thật dưới nắng hoàng hôn.
  Prompt: A genuine documentary photograph of a vast golden wheat harvest field in Kansas, a real green John Deere modern combine harvester working in the distance during late afternoon golden hour, authentic agricultural dust rising, crisp DSLR photography, highly realistic, true to life --ar 16:9

- Slide 4 (Công nghiệp đỉnh cao & Sun Belt): Kỹ sư thật trong trang phục phòng sạch vô trùng đang kiểm tra tấm silicon wafer sản xuất chip bán dẫn tại Thung lũng Silicon.
  Prompt: An authentic editorial documentary photograph inside a real semiconductor cleanroom laboratory in Silicon Valley, a real female engineer in white cleanroom suit inspecting a real silicon wafer under technical laboratory lighting, razor-sharp focus, genuine industrial photojournalism --ar 16:9

- Slide 5 (Dịch vụ & Phố Wall): Ảnh chụp đời thực sảnh ngoài phố Wall với lá cờ Mỹ trước tòa nhà Sở Giao dịch Chứng khoán New York (NYSE).
  Prompt: An authentic street-level documentary photograph of Wall Street outside the New York Stock Exchange building, real financial professionals and pedestrians walking on historic stone pavement, natural morning sunlight, genuine editorial street photography --ar 16:9

- Slide 6 (Phân hóa 4 vùng kinh tế): Ảnh ghép tư liệu 4 khung cảnh đời thực đặc trưng: Cầu Cổng Vàng (phía Tây), Giàn khoan dầu Texas (phía Nam), Tòa cao ốc New York (Đông Bắc), và cánh đồng ngô rộng lớn (Trung Tây).
  Prompt: A clean 4-quadrant photojournalistic collage showing authentic landscapes of USA: Golden Gate Bridge, an offshore oil platform in the Gulf of Mexico, Manhattan skyline, and an expansive Iowa corn farm, authentic realistic photography, no CGI --ar 16:9

- Slide 7 (Hợp tác kinh tế Việt - Mỹ): Tàu container khổng lồ cập cảng nước sâu Cái Mép - Thị Vải lúc bình minh chở hàng hóa giao thương hai nước.
  Prompt: An authentic editorial documentary photograph of a bustling deep-water container terminal in Vietnam at dawn, a real massive cargo ship loaded with colorful export containers departing on international trade route, dramatic authentic seaport lighting, crisp realism --ar 16:9

- Slide 8 (Tình huống thực tế nông sản): Công nhân Việt Nam trong xưởng đóng gói xuất khẩu đạt chuẩn đang dán tem kiểm định FDA lên thùng trái cây tươi.
  Prompt: A realistic documentary close-up photograph in a certified tropical fruit packaging facility in Vietnam, real worker hands in hygienic gloves affixing official quality inspection stamps onto fresh dragon fruit boxes, natural bright lighting, authentic food supply chain photography --ar 16:9`;

  // Prompt 5: Khai thác bộ tính năng nâng cao (Audio Overview, FAQ, Study Guide & Phản biện lỗi) (Bước 5)
  const LIB_P5 = `Dưới vai trò Cố vấn chuyên môn sư phạm, hãy hướng dẫn và xuất nội dung khai thác toàn diện các tính năng độc quyền của Google NotebookLM cho Bài 19:

1. KỊCH BẢN THẢO LUẬN AUDIO OVERVIEW (PODCAST AI 2 NGƯỜI):
   - Tóm tắt kịch bản đàm thoại sinh động 2-3 phút giữa Host Nam và Host Nữ: Phân tích vì sao Hoa Kỳ chỉ có 1% lao động làm nông nghiệp nhưng lại là quốc gia xuất khẩu nông sản hàng đầu thế giới; Giải thích hiện tượng dịch chuyển công nghiệp sang "Vành đai Mặt trời".
2. BỘ CÂU HỎI THƯỜNG GẶP (FAQ & STUDY GUIDE):
   - Tạo bộ 5 câu hỏi học sinh hay thắc mắc nhất kèm lời giải thích ngắn gọn dựa đúng SGK trang 88 - 96 (ví dụ: "Tại sao đồng USD lại có sức ảnh hưởng toàn cầu?", "Silicon Valley nằm ở bang nào và đóng góp gì?").
3. PHẢN BIỆN LỖI SỐ LIỆU (REVERSE CRITIQUE):
   - Hãy đặt câu hỏi ngược để NotebookLM kiểm tra chéo: Số liệu GDP 20.893 tỉ USD và cơ cấu ngành năm 2020 đã khớp 100% với Bảng số liệu ở trang 88 SGK Địa lí 11 chưa? Có chỗ nào bị nhầm lẫn với số liệu của năm khác không?`;

  // =========================================================================
  // 3. TOÀN BỘ NỘI DUNG HIỂN THỊ TRÊN GIAO DIỆN WEB (ARTICLE HTML)
  // =========================================================================
  const articleHtml = `
    <div class="session-direct-article">

      <!-- BANNER TIÊU ĐỀ BUỔI HỌC -->
      <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; border-radius: var(--radius-lg); padding: 24px 28px; box-shadow: var(--shadow-md); border: 1px solid #334155; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap;">
          <span style="background: #2563eb; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;">Khóa Đào Tạo AI Sư Phạm 4.0</span>
          <span style="background: #0d9488; color: #ffffff; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; text-transform: uppercase;">Thực Hành Chuyên Sâu NotebookLM</span>
          <span style="color: #94a3b8; font-size: 0.85rem;">Thời lượng: 180 phút (3 giờ)</span>
        </div>
        <h1 style="font-size: 1.65rem; font-weight: 900; line-height: 1.35; margin: 0 0 10px 0; color: #ffffff;">
          BUỔI 5: LÀM CHỦ NOTEBOOKLM: TÓM TẮT HỌC LIỆU, XÂY DỰNG GIÁO ÁN, SOẠN NỘI DUNG SLIDE & MÔ TẢ PHONG CÁCH HÌNH ẢNH TRỰC QUAN
        </h1>
        <p style="font-size: 0.95rem; color: #cbd5e1; margin: 0; line-height: 1.65;">
          Khai thác toàn diện sức mạnh của <strong>Google NotebookLM (Mô hình AI khóa chặt nguồn tri thức)</strong> trên học liệu thực chiến <strong>Sách Giáo Khoa Địa Lí 11 — Bài 19: Kinh tế Hoa Kỳ (Trang 88 – 96)</strong>. Nắm chắc lộ trình liên hoàn: <em>Tóm tắt trên NotebookLM &rarr; Soạn giáo án trên NotebookLM &rarr; Lên nội dung slide & phong cách ảnh trên NotebookLM &rarr; Chuyển sang Gamma/Canva tạo slide & vẽ ảnh &rarr; Xuất Audio Overview Podcast bài học</em>.
        </p>
      </div>

      <!-- HỌC LIỆU THỰC HÀNH: NÚT TẢI & XEM PDF SGK ĐỊA LÍ 11 -->
      <div style="background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; box-shadow: 0 1px 4px rgba(16,185,129,0.06);">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="background: #059669; color: #ffffff; width: 44px; height: 44px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.15rem; flex-shrink: 0;">
            PDF
          </div>
          <div>
            <div style="font-weight: 800; color: #065f46; font-size: 0.96rem;">Học liệu thực hành chính thức: SGK Địa Lí 11 — Bộ Kết Nối Tri Thức Với Cuộc Sống</div>
            <div style="font-size: 0.84rem; color: #047857;">Bản in chuẩn 171 trang của NXB Giáo dục Việt Nam • <strong>Trọng tâm tình huống bài tập: Bài 19 — Kinh tế Hoa Kỳ (Trang 88 – 96)</strong></div>
          </div>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <a href="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" download="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" class="btn btn-primary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
            <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Tải File SGK PDF (30MB)
          </a>
          <a href="sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf" target="_blank" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none;">
            Mở Xem Trực Tiếp
          </a>
        </div>
      </div>

      <!-- ========================================================================= -->
      <!-- I. MỤC TIÊU BÀI HỌC (3 KHỐI: KIẾN THỨC, NĂNG LỰC, PHẨM CHẤT)             -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag" style="background-color: #1e3a8a;">MỤC TIÊU</span>
          <h2 class="article-section-title">I. Mục Tiêu Bài Học</h2>
        </div>
        <p class="article-prose">
          Mục tiêu người học đạt được sau buổi học khi áp dụng Google NotebookLM vào toàn bộ chu trình thiết kế bài giảng:
        </p>

        <!-- 1. Kiến thức -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #1e3a8a; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #dbeafe; color: #1e40af; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">1</span>
            Kiến Thức Cốt Lõi Về NotebookLM & Thiết Kế Học Liệu
          </div>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #334155; line-height: 1.65;">
            <li><strong>Nguyên lý khóa nguồn tri thức (Source-grounded AI):</strong> Hiểu rõ sự khác biệt bản chất giữa AI thông thường (dễ bịa số liệu, ảo giác) và NotebookLM (chỉ trả lời dựa trên tài liệu người dùng nạp, có trích dẫn số trang chính xác từng dòng).</li>
            <li><strong>Quy trình chuyển đổi liên hoàn giữa các công cụ:</strong> Nắm chắc quy trình: <em>NotebookLM (Tóm tắt & Tạo kịch bản) &rarr; Google Docs/Word (Lưu trữ giáo án) &rarr; Gamma/Canva (Tạo slide & vẽ ảnh AI) &rarr; NotebookLM (Sản xuất Podcast âm thanh)</em>.</li>
            <li><strong>Nguyên tắc định hướng thị giác (Visual Art Direction):</strong> Hiểu cách mô tả phong cách hình ảnh đồng bộ (bảng màu, ánh sáng, góc chụp, thể loại ảnh tư liệu hoặc infographic 3D) thay vì để AI tự vẽ ngẫu nhiên.</li>
          </ul>
        </div>

        <!-- 2. Năng lực -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #065f46; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #dcfce7; color: #15803d; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">2</span>
            Năng Lực Thực Thi Chuyên Môn
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <div style="border-left: 3px solid #10b981; padding-left: 12px;">
              <strong style="color: #065f46; font-size: 0.9rem;">Tóm tắt & Tra cứu có trích dẫn:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Biết nạp file PDF SGK Địa lí 11 vào NotebookLM, trích xuất tóm tắt toàn diện Bài 19 (GDP, cơ cấu ngành, 4 vùng kinh tế) với liên kết số trang [Trang 88 - 96].
              </p>
            </div>
            <div style="border-left: 3px solid #3b82f6; padding-left: 12px;">
              <strong style="color: #1e40af; font-size: 0.9rem;">Trình bày Giáo án & Kịch bản Slide:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Biết chỉ đạo NotebookLM xuất ra Kế hoạch bài dạy 4 hoạt động bài bản và 8 slide chuẩn quy tắc 3 dòng kèm Speaker Notes thực tế.
              </p>
            </div>
            <div style="border-left: 3px solid #8b5cf6; padding-left: 12px;">
              <strong style="color: #6d28d9; font-size: 0.9rem;">Mô tả phong cách ảnh & Tạo slide mỹ thuật:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Thành thạo kỹ thuật viết Prompt tạo ảnh AI chi tiết cho từng slide, mang sang Gamma/Canva tạo slide hoàn chỉnh và xuất Audio Overview Podcast 2 người.
              </p>
            </div>
          </div>
        </div>

        <!-- 3. Phẩm chất -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);">
          <div style="font-weight: 800; color: #92400e; font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            <span style="background: #fef3c7; color: #b45309; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem;">3</span>
            Phẩm Chất Sư Phạm & Trách Nhiệm Học Thuật
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <div style="border-left: 3px solid #f59e0b; padding-left: 12px;">
              <strong style="color: #92400e; font-size: 0.9rem;">Tôn trọng tính chuẩn xác của SGK:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Luôn đối chiếu lại số liệu GDP, tỷ trọng dịch vụ >80% và phân bố công nghiệp Sun Belt với văn bản SGK gốc trước khi duyệt nội dung.
              </p>
            </div>
            <div style="border-left: 3px solid #10b981; padding-left: 12px;">
              <strong style="color: #065f46; font-size: 0.9rem;">Thẩm mỹ thị giác sư phạm:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Kiên quyết xây dựng ngôn ngữ hình ảnh chuyên nghiệp, trang nhã, tránh dùng các hình vẽ hoạt họa tùy tiện gây xao nhãng học sinh lớp 11.
              </p>
            </div>
            <div style="border-left: 3px solid #2563eb; padding-left: 12px;">
              <strong style="color: #1e40af; font-size: 0.9rem;">Chủ động làm chủ công nghệ:</strong>
              <p style="margin: 4px 0 0 0; font-size: 0.86rem; color: #475569; line-height: 1.55;">
                Sử dụng NotebookLM như một trợ lý biên tập học liệu số đắc lực; kiên định vai trò quyết định chuyên môn và sư phạm của người thầy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- II. 5 TÍNH NĂNG QUYỀN NĂNG CỦA NOTEBOOKLM TRONG GIẢNG DẠY                -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag" style="background-color: #0d9488;">TÍNH NĂNG NOTEBOOKLM</span>
          <h2 class="article-section-title">II. 5 Tính Năng Quyền Năng Của Google NotebookLM Trong Giảng Dạy</h2>
        </div>
        <p class="article-prose">
          Khác với các chatbot AI thông thường, Google NotebookLM được thiết kế chuyên biệt để hoạt động như một <strong>bộ não nghiên cứu và biên tập học liệu cá nhân</strong>:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin: 16px 0 20px 0;">
          
          <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-top: 4px solid #2563eb; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-weight: 800; color: #1e40af; font-size: 0.98rem; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="background: #eff6ff; color: #2563eb; width: 26px; height: 26px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem;">1</span>
              Nạp Đa Nguồn & Khóa Trích Dẫn (Citations)
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Nạp trực tiếp PDF SGK (tối đa 500.000 từ/nguồn). Mọi câu trả lời đều kèm trích dẫn số trang tương tác <code>[Trang 88]</code>, nhấp vào là nhảy thẳng đến đúng dòng trong sách.
            </div>
          </div>

          <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-top: 4px solid #059669; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-weight: 800; color: #065f46; font-size: 0.98rem; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="background: #ecfdf5; color: #059669; width: 26px; height: 26px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem;">2</span>
              Tóm Tắt Học Thuật Thông Minh (Smart Summary)
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Phân tách chính xác cấu trúc bài học: Quy mô GDP, nguyên nhân vị thế số 1, cơ cấu 3 ngành nông - công - dịch vụ và đặc trưng phân hóa 4 vùng lãnh thổ.
            </div>
          </div>

          <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-top: 4px solid #7c3aed; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-weight: 800; color: #6d28d9; font-size: 0.98rem; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="background: #f5f3ff; color: #7c3aed; width: 26px; height: 26px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem;">3</span>
              Biên Soạn Kế Hoạch Bài Dạy & Kịch Bản Slide
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Chuyển hóa tài liệu nạp thành Kế hoạch bài dạy 4 hoạt động bài bản và xuất kịch bản 8 slide theo quy tắc 3 dòng kèm Speaker Notes đời thường.
            </div>
          </div>

          <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-top: 4px solid #ea580c; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-weight: 800; color: #c2410c; font-size: 0.98rem; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="background: #fff7ed; color: #ea580c; width: 26px; height: 26px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem;">4</span>
              Mô Tả Phong Cách Hình Ảnh (Visual Style Prompts)
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Đóng vai Art Director: Định hình phong cách hình ảnh tự nhiên, chân thực 100% (Photojournalism / Authentic Real-world Photography) và viết Prompt tiếng Anh chuẩn cho AI vẽ ảnh từng slide.
            </div>
          </div>

          <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-top: 4px solid #0891b2; border-radius: 8px; padding: 16px 18px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-weight: 800; color: #0e7490; font-size: 0.98rem; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="background: #ecfeff; color: #0891b2; width: 26px; height: 26px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.85rem;">5</span>
              Audio Overview (Podcast AI 2 Người) & Notebook Guide
            </div>
            <div style="font-size: 0.86rem; color: #475569; line-height: 1.6;">
              Bấm nút <em>"Generate Audio Overview"</em> để tạo bản Podcast âm thanh cực sống động giữa 2 chuyên gia AI bàn luận bài học, đi kèm tính năng Study Guide, FAQ và Ghim Notes.
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- III. BÀI TẬP: ĐỀ BÀI YÊU CẦU & QUY TRÌNH 5 BƯỚC THỰC HIỆN CHI TIẾT          -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header" style="margin-bottom: 20px;">
          <span class="article-section-tag" style="background-color: #047857;">BÀI TẬP THỰC HÀNH</span>
          <h2 class="article-section-title">III. Bài Tập: Đề Bài Yêu Cầu & Quy Trình 5 Bước Thực Hiện</h2>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- KHUNG ĐỀ BÀI YÊU CẦU BÀI TẬP (ĐỂ HỌC VIÊN HIỂU RÕ ĐỀ BÀI)            -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #f8fafc; border: 2px solid #047857; border-radius: 8px; padding: 22px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(4,120,87,0.08);">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <span style="background: #047857; color: #ffffff; font-weight: 800; font-size: 0.85rem; padding: 4px 12px; border-radius: 4px; text-transform: uppercase;">Đề Bài Thực Hành</span>
            <h3 style="font-size: 1.2rem; font-weight: 800; color: #064e3b; margin: 0;">Tình Huống Giảng Dạy: Biên Soạn Trọn Gói Học Liệu Số Cho "Bài 19: Kinh Tế Hoa Kỳ"</h3>
          </div>

          <div style="font-size: 0.92rem; color: #1e293b; line-height: 1.65; margin-bottom: 16px;">
            <strong>BỐI CẢNH TÌNH HUỐNG:</strong> Bạn là giáo viên phụ trách bộ môn Địa lí 11 (hoặc giảng viên chuyên ngành). Bạn được phân công chuẩn bị bài giảng cho <strong>Bài 19: Kinh tế Hoa Kỳ (Trang 88 – 96 SGK Địa lí 11 — Bộ Kết Nối Tri Thức Với Cuộc Sống)</strong>. Thay vì phải đọc thủ công 9 trang tài liệu nhiều số liệu kinh tế phức tạp, bạn sẽ sử dụng <strong>Google NotebookLM kết hợp công cụ tạo slide AI</strong> để thiết kế toàn bộ hồ sơ bài dạy một cách nhanh chóng, chuẩn xác và trực quan.
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-bottom: 14px;">
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px 14px;">
              <div style="font-weight: 700; color: #065f46; font-size: 0.88rem; margin-bottom: 4px;">📥 Học liệu đầu vào (Input):</div>
              <div style="font-size: 0.84rem; color: #475569; line-height: 1.55;">
                • Tệp PDF <code>sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf</code>.<br>
                • Phạm vi nội dung bài học: <strong>Bài 19 (Trang 88 đến 96)</strong>.
              </div>
            </div>
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px 14px;">
              <div style="font-weight: 700; color: #1e40af; font-size: 0.88rem; margin-bottom: 4px;">📦 Bộ 5 sản phẩm đầu ra bắt buộc (Outputs):</div>
              <div style="font-size: 0.84rem; color: #475569; line-height: 1.55;">
                1. Bản tóm tắt học liệu có trích dẫn số trang chính xác.<br>
                2. Kế hoạch bài dạy (Giáo án 45 phút) chuẩn 4 hoạt động.<br>
                3. Kịch bản 8 Slide chuẩn 3 dòng + Speaker Notes đời thường.<br>
                4. Cẩm nang phong cách hình ảnh & Prompt tạo ảnh AI từng slide.<br>
                5. Bản trình chiếu Slide hoàn chỉnh (.pptx) + Podcast Audio Overview.
              </div>
            </div>
          </div>

          <!-- SƠ ĐỒ CHUYỂN DỮ LIỆU GIỮA CÁC CÔNG CỤ -->
          <div style="background: #ecfdf5; border: 1px dashed #059669; border-radius: 6px; padding: 12px 16px;">
            <div style="font-weight: 800; color: #065f46; font-size: 0.88rem; margin-bottom: 6px;">
              🔄 SƠ ĐỒ DÒNG DỮ LIỆU: BẠN SẼ LÀM GÌ, TRÊN ĐÂU VÀ CHUYỂN NHƯ THẾ NÀO?
            </div>
            <div style="font-size: 0.85rem; color: #047857; line-height: 1.6;">
              <strong>[Bước 1, 2, 3] Làm trên Google NotebookLM</strong>: Nạp SGK &rarr; Tóm tắt có trích dẫn &rarr; Soạn Giáo án &rarr; Soạn kịch bản 8 Slide & viết Prompt phong cách ảnh &rarr; <em>Lưu toàn bộ vào bảng Notes của NotebookLM</em>.
              <br>
              <strong>[Bước 4] Chuyển sang Gamma App / Canva / PowerPoint</strong>: Copy kịch bản 8 slide & prompt ảnh từ NotebookLM dán vào Gamma App để tự động dàn trang sinh slide PowerPoint (.pptx) và vẽ ảnh AI.
              <br>
              <strong>[Bước 5] Quay lại Google NotebookLM</strong>: Bấm nút sinh Audio Overview để nhận file Podcast âm thanh 2 người bàn luận bài học & xuất đề cương Study Guide.
            </div>
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- BƯỚC 1: TÓM TẮT TRÊN NOTEBOOKLM                                       -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #2563eb; color: #ffffff; font-weight: 900; font-size: 0.88rem; width: 30px; height: 30px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center;">1</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Bước 1: Tóm Tắt Bức Tranh Tổng Quan & Cho Biết Mục Tiêu Cốt Lõi Học Sinh Cần Nắm</h3>
            </div>
            <span style="background: #eff6ff; color: #1e40af; font-size: 0.82rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; border: 1px solid #bfdbfe;">
              📍 Nơi thực hiện: <strong>Google NotebookLM</strong>
            </span>
          </div>

          <div style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 12px;">
            <strong>Tư duy thực chiến (Không cần gõ dài):</strong> Bạn không cần phải đọc trước cả bài rồi ngồi gõ chi tiết từng đề mục nhỏ. Bạn chỉ cần hỏi AI một câu ngắn gọn, thông minh: <em>"Tóm tắt tổng quan bài này và cho tôi biết học sinh bắt buộc phải nắm được những mục tiêu cốt lõi nào?"</em>. AI sẽ tự động đọc hiểu toàn bộ trang 88–96 trong SGK Địa lí 11, tổng hợp bức tranh toàn cảnh và đề xuất chuẩn mục tiêu đầu ra kèm các số liệu đắt giá nhất. Từ chính các mục tiêu này, ta mới bước sang Bước 2 để xây dựng Giáo án!
          </div>

          <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 10px 14px; margin-bottom: 14px; font-size: 0.86rem; color: #1e293b;">
            <strong>Hướng dẫn thao tác cụ thể:</strong><br>
            1. Mở trình duyệt truy cập <code>notebooklm.google.com</code> &rarr; Bấm <strong>New Notebook</strong> &rarr; Đặt tên: <em>"Địa Lí 11 - Bài 19: Kinh tế Hoa Kỳ"</em>.<br>
            2. Bấm <strong>Upload Sources</strong> &rarr; Tải lên file <code>sach-giao-khoa-dia-li-11-ket-noi-tri-thuc-voi-cuoc-song.pdf</code>.<br>
            3. Sao chép câu lệnh <strong>Prompt 01</strong> dưới đây dán vào khung chat &rarr; Bấm gửi.
          </div>

          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 01: Tóm Tắt Tổng Quan Bài 19 & Cho Biết Mục Tiêu Cốt Lõi Học Sinh Cần Nắm [Kèm Trích Dẫn SGK]</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P1)}'), 'Đã sao chép Prompt 1!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt 1
              </button>
            </div>
            <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 180px; overflow-y: auto;">${LIB_P1}</pre>
          </div>

          <div style="margin-top: 10px; font-size: 0.86rem; color: #047857; background: #ecfdf5; padding: 8px 12px; border-radius: 4px;">
            ✅ <strong>Kết quả thu được:</strong> Một bức tranh toàn cảnh về kinh tế Hoa Kỳ kèm <strong>bộ mục tiêu trọng tâm học sinh cần đạt</strong> và các số liệu đắt giá có trích dẫn số trang <code>[Trang 88]</code>, <code>[Trang 92]</code>. Bấm nút <strong>"Save to note" (Ghim vào ghi chú)</strong> để làm dữ liệu nền tảng cho Bước 2.
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- BƯỚC 2: SOẠN GIÁO ÁN TRÊN ĐÂU?                                        -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #059669; color: #ffffff; font-weight: 900; font-size: 0.88rem; width: 30px; height: 30px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center;">2</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Bước 2: Xây Dựng Kế Hoạch Bài Dạy Bằng Động Từ Hành Động Đo Lường Được</h3>
            </div>
            <span style="background: #ecfdf5; color: #065f46; font-size: 0.82rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; border: 1px solid #a7f3d0;">
              📍 Nơi thực hiện: <strong>Tiếp tục trên Google NotebookLM &rarr; Lưu sang Word / Google Docs</strong>
            </span>
          </div>

          <!-- HỘP LƯU Ý SƯ PHẠM KẾ THỪA BUỔI 3 -->
          <div style="background: #fffbeb; border: 1.5px solid #fcd34d; border-radius: 6px; padding: 12px 16px; margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="background: #fef3c7; color: #b45309; font-weight: 800; font-size: 0.78rem; padding: 2px 8px; border-radius: 4px; border: 1px solid #fcd34d;">KẾ THỪA NGUYÊN TẮC BUỔI 3</span>
              <strong style="color: #92400e; font-size: 0.92rem;">Tại Sao Bắt Buộc Phải Đổi Động Từ Trong Mục Tiêu Bài Dạy?</strong>
            </div>
            <p style="margin: 0; font-size: 0.86rem; color: #78350f; line-height: 1.6;">
              Ở Buổi 3, chúng ta đã chứng minh: <em>"Từ 'hiểu', 'biết', 'nắm được' là cái bẫy lớn nhất vì chúng nằm trong đầu học sinh, giáo viên không thể nhìn thấy hay chấm điểm được. Nếu ra lệnh 'giúp học sinh hiểu bài', AI sẽ tạo ra một tiết dạy đọc chép lý thuyết suông!"</em>.<br>
              Vì vậy ở Bước 2 này, khi yêu cầu NotebookLM soạn giáo án, bạn phải ép AI dùng các <strong>ĐỘNG TỪ HÀNH ĐỘNG ĐO LƯỜNG ĐƯỢC</strong>: Tiết học không phải là người thầy đọc cho học sinh nghe, mà học sinh <strong>phải biết làm được cái gì</strong> (phân tích bảng số liệu GDP trang 88, so sánh vùng công nghiệp Sun Belt trên bản đồ trang 94, giải thích 4 nguyên nhân, đề xuất giải pháp cho nông sản Việt Nam).
            </p>
          </div>

          <div style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 12px;">
            <strong>Lên giáo án trên đâu & bắt đầu từ đâu?</strong><br>
            Bạn <strong>tiếp tục chat ngay trên Google NotebookLM</strong> để AI lấy chính các dữ liệu và mục tiêu hành động vừa tóm tắt ở Bước 1 phát triển thành Kế hoạch bài dạy 4 hoạt động bài bản. Mỗi hoạt động đều quy định rõ: <em>Học sinh làm hành động gì? Tạo ra sản phẩm gì ra phiếu học tập?</em> Khi AI xuất xong, bạn copy lưu vào <strong>Microsoft Word hoặc Google Docs</strong>.
          </div>

          <div style="background: #f8fafc; border-left: 4px solid #059669; padding: 10px 14px; margin-bottom: 14px; font-size: 0.86rem; color: #1e293b;">
            <strong>Hướng dẫn thao tác cụ thể:</strong><br>
            1. Trong cùng phiên làm việc NotebookLM của Bài 19, sao chép <strong>Prompt 02</strong> dưới đây dán vào ô chat.<br>
            2. Quan sát AI thiết kế 4 hoạt động: Khởi động (liệt kê thương hiệu), Khám phá (3 trạm học tập có sản phẩm tính toán, so sánh, chỉ bản đồ), Luyện tập (thuyết trình phản biện), Vận dụng (đóng vai đề xuất giải pháp xuất khẩu nông sản).<br>
            3. Bấm biểu tượng <strong>"Save to note"</strong> để ghim giáo án vào cột ghi chú.
          </div>

          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 02: Soạn Kế Hoạch Bài Dạy 45 Phút Định Hướng Hành Động "Học Sinh Làm Được Gì" (Đo Đếm Được 100%)</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P2)}'), 'Đã sao chép Prompt 2!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt 2
              </button>
            </div>
            <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 180px; overflow-y: auto;">${LIB_P2}</pre>
          </div>

          <div style="margin-top: 10px; font-size: 0.86rem; color: #047857; background: #ecfdf5; padding: 8px 12px; border-radius: 4px;">
            ✅ <strong>Kết quả thu được:</strong> 01 Kế hoạch bài dạy 45 phút hoàn chỉnh theo chuẩn sư phạm hiện đại: 100% mục tiêu được đo bằng động từ hành động, mọi hoạt động đều có sản phẩm học tập cụ thể của học sinh.
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- BƯỚC 3: LÊN NỘI DUNG SLIDE VÀ PHONG CÁCH ẢNH TRÊN ĐÂU?                 -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #7c3aed; color: #ffffff; font-weight: 900; font-size: 0.88rem; width: 30px; height: 30px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center;">3</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Bước 3: Lên Nội Dung 8 Slide Súc Tích & Mô Tả Phong Cách Hình Ảnh (Visual Style)</h3>
            </div>
            <span style="background: #f5f3ff; color: #6d28d9; font-size: 0.82rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; border: 1px solid #ddd6fe;">
              📍 Nơi thực hiện: <strong>Trên Google NotebookLM</strong>
            </span>
          </div>

          <!-- HỘP QUY TẮC MỸ THUẬT: PHONG CÁCH TỰ NHIÊN & ẢNH PHẢI THẬT HOÀN TOÀN -->
          <div style="background: #faf5ff; border: 1.5px solid #d8b4fe; border-left: 5px solid #7c3aed; border-radius: 6px; padding: 14px 16px; margin-bottom: 16px;">
            <div style="font-weight: 800; color: #581c87; font-size: 0.95rem; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 1.1rem;">📸</span>
              QUY TẮC MỸ THUẬT BẮT BUỘC: PHONG CÁCH TỰ NHIÊN, PHÙ HỢP NỘI DUNG TỪNG SLIDE & HÌNH ẢNH THẬT HOÀN TOÀN (100% REAL-WORLD PHOTOGRAPHY)
            </div>
            <p style="margin: 0 0 10px 0; font-size: 0.86rem; color: #4c1d95; line-height: 1.6;">
              Trong giảng dạy Địa Lí 11 nói riêng và các môn học nói chung, <strong>hình ảnh minh họa không phải để trang trí cho có</strong>. Nếu dùng hình vẽ hoạt hình (cartoon), chibi 3D hay clipart sẽ khiến bài giảng bị trẻ con hóa, làm mất đi tính hàn lâm và giảm độ tin cậy của số liệu SGK.<br>
              Vì vậy, <strong>cứ mỗi slide phải được tạo theo một phong cách sao cho tự nhiên và phù hợp với nội dung</strong>, đồng thời <strong>hình ảnh phải thật hoàn toàn 100%</strong> (ảnh chụp đời thực, ảnh tư liệu báo chí phóng sự, ánh sáng tự nhiên ban ngày, người thật việc thật, địa danh có thật, tuyệt đối không đồ họa giả lập).
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; margin-top: 10px;">
              <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 6px; padding: 10px 12px;">
                <div style="font-weight: 700; color: #6b21a8; font-size: 0.85rem; margin-bottom: 4px;">🎯 1. Phong Cách Tự Nhiên & Phù Hợp Từng Nội Dung</div>
                <div style="font-size: 0.82rem; color: #334155; line-height: 1.5;">
                  • <em>Nông nghiệp:</em> Ảnh tư liệu phóng sự đồng ruộng thực tế (máy gặt John Deere thật trên cánh đồng lúa mì vàng Kansas lúc hoàng hôn).<br>
                  • <em>Công nghiệp & Vành đai Mặt trời:</em> Ảnh phóng sự công nghiệp kỹ thuật cao (phòng sạch vô trùng, kỹ sư thật kiểm tra chip bán dẫn ở Thung lũng Silicon).<br>
                  • <em>Dịch vụ & Phố Wall:</em> Ảnh đường phố tài chính đời thực (vỉa hè phố Wall và Sở Giao dịch Chứng khoán New York thực tế).<br>
                  • <em>Thương mại Việt - Mỹ:</em> Ảnh tư liệu logistics chuỗi cung ứng thực tế (tàu container cảng Cái Mép, công nhân dán tem FDA lên thùng hoa quả thật).
                </div>
              </div>

              <div style="background: #ffffff; border: 1px solid #e9d5ff; border-radius: 6px; padding: 10px 12px;">
                <div style="font-weight: 700; color: #b91c1c; font-size: 0.85rem; margin-bottom: 4px;">🚫 2. Hình Ảnh Phải Thật Hoàn Toàn (Nói Không Với Hoạt Họa)</div>
                <div style="font-size: 0.82rem; color: #334155; line-height: 1.5;">
                  • <strong>TUYỆT ĐỐI KHÔNG:</strong> Hoạt hình (Cartoon), Anime, 3D Render/Chibi nhân vật giả tưởng, tranh minh họa clipart, hình ảnh viễn tưởng CGI.<br>
                  • <strong>100% ẢNH THẬT (Authentic Photography):</strong> Ống kính DSLR 35mm/50mm, ánh sáng tự nhiên (Natural daylight), độ chân thực sống động (True-to-life), người thật việc thật.<br>
                  • <strong>Khóa prompt tiếng Anh:</strong> Mọi prompt tạo ảnh AI ở Bước 3B đều khóa chặt từ khóa: <code>authentic documentary photograph, photojournalistic style, natural soft daylight, 35mm lens, no cartoon, no 3D render</code>.
                </div>
              </div>
            </div>
          </div>

          <div style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 12px;">
            <strong>Lên nội dung slide và mô tả phong cách hình ảnh trên đâu?</strong><br>
            Bạn <strong>thực hiện trực tiếp trên Google NotebookLM</strong> để AI chắt lọc chính xác từ SGK Bài 19, tránh sao chép văn bản dài dòng. Bước này gồm 2 phần liên hoàn:
          </div>

          <!-- Phần 3A: Lên nội dung 8 slide -->
          <div style="margin-bottom: 16px;">
            <div style="font-weight: 700; color: #6d28d9; font-size: 0.92rem; margin-bottom: 6px;">
              3A. Soạn trọn bộ nội dung 8 Slide chuẩn Quy tắc Slide 3 dòng + Speaker Notes + Gợi ý ảnh thật tự nhiên theo từng chủ đề:
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 03: Soạn Kịch Bản 8 Slide Ngắn Gọn Kèm Speaker Notes & Mô Tả Ảnh Thật Tự Nhiên Theo Từng Bài Học</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P3)}'), 'Đã sao chép Prompt 3!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Sao chép Prompt 3
                </button>
              </div>
              <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 180px; overflow-y: auto;">${LIB_P3}</pre>
            </div>
          </div>

          <!-- Phần 3B: Mô tả phong cách ảnh -->
          <div>
            <div style="font-weight: 700; color: #6d28d9; font-size: 0.92rem; margin-bottom: 6px;">
              3B. Thiết kế Cẩm nang phong cách hình ảnh (Visual Art Style) & Câu lệnh Prompt vẽ ảnh AI cho từng slide (Cam kết ảnh thật hoàn toàn 100%, phong cách tự nhiên tương thích từng nội dung):
            </div>
            <div class="article-prompt-card">
              <div class="article-prompt-header">
                <span class="article-prompt-title">Prompt 04: Định Hình Phong Cách Ảnh Thật Đời Thường & Trọn Bộ Prompt Tạo Ảnh AI Chân Thực 100% Cho Từng Slide</span>
                <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P4)}'), 'Đã sao chép Prompt 4!')">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt 4
              </button>
            </div>
            <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 180px; overflow-y: auto;">${LIB_P4}</pre>
          </div>

          <div style="margin-top: 10px; font-size: 0.86rem; color: #047857; background: #ecfdf5; padding: 8px 12px; border-radius: 4px;">
            ✅ <strong>Kết quả thu được:</strong> Kịch bản 8 slide cực kỳ cô đọng (mỗi slide tối đa 3 ý, dưới 12 từ/ý) kèm lời giảng Speaker Notes đời thường, và đặc biệt là <strong>Cẩm nang phong cách hình ảnh tự nhiên chuẩn xác + bộ Prompt tạo ảnh AI thật hoàn toàn 100% (không hoạt họa/3D)</strong> để đưa thẳng vào Gamma App / Canva ở Bước 4!
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- BƯỚC 4: TẠO SLIDE NHƯ THẾ NÀO?                                       -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #ea580c; color: #ffffff; font-weight: 900; font-size: 0.88rem; width: 30px; height: 30px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center;">4</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Bước 4: Tạo Bộ Slide Trình Chiếu Mỹ Thuật Hoàn Chỉnh</h3>
            </div>
            <span style="background: #fff7ed; color: #c2410c; font-size: 0.82rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; border: 1px solid #fed7aa;">
              📍 Nơi thực hiện: <strong>Gamma App (gamma.app) / Canva / PowerPoint</strong>
            </span>
          </div>

          <div style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 12px;">
            <strong>Trả lời câu hỏi: Tạo slide như thế nào?</strong><br>
            Bạn lấy nội dung 8 slide và prompt hình ảnh đã được chuẩn bị ở Bước 3 mang sang <strong>Gamma App</strong> (hoặc Canva/PowerPoint) để AI tự động dàn layout, chèn hình ảnh và xuất ra file trình chiếu chuyên nghiệp. Dưới đây là 2 cách thực hiện:
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px; margin-bottom: 14px;">
            
            <!-- Cách 1: Gamma App -->
            <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 14px 16px;">
              <div style="font-weight: 800; color: #b45309; font-size: 0.92rem; margin-bottom: 6px;">
                🚀 Cách 1 (Khuyên dùng - Nhanh nhất 60s): Dùng Gamma App
              </div>
              <div style="font-size: 0.85rem; color: #475569; line-height: 1.6;">
                1. Mở <code>gamma.app</code> &rarr; Chọn <strong>Create new with AI</strong> &rarr; Chọn <strong>Generate from text</strong>.<br>
                2. Sao chép nội dung kịch bản 8 slide kèm mô tả ảnh từ Bước 3 dán vào khung nội dung của Gamma.<br>
                3. Chọn số lượng thẻ: <strong>8 Cards</strong> &bull; Chọn chế độ ảnh: <strong>AI Generated Image</strong> &bull; Tỉ lệ <strong>16:9</strong>.<br>
                4. Bấm <strong>Generate</strong>. Trong 60 giây, Gamma tự động phân bổ layout dạng thẻ và vẽ ảnh AI.<br>
                5. Bấm nút <strong>Share &rarr; Export to PowerPoint (.pptx)</strong> để tải trọn bộ slide về máy tính!
              </div>
            </div>

            <!-- Cách 2: Vẽ ảnh AI chuyên sâu -->
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 14px 16px;">
              <div style="font-weight: 800; color: #1e40af; font-size: 0.92rem; margin-bottom: 6px;">
                🎨 Cách 2: Vẽ ảnh AI chất lượng cao chèn vào PowerPoint / Canva
              </div>
              <div style="font-size: 0.85rem; color: #475569; line-height: 1.6;">
                1. Sao chép các câu lệnh Prompt tiếng Anh từ Bước 3B (ví dụ Prompt Slide 3 về nông trại Midwest, Slide 4 về Silicon Valley, Slide 5 về Phố Wall).<br>
                2. Dán vào công cụ tạo ảnh AI: <strong>Canva Magic Media</strong>, <strong>Bing Image Creator (DALL-E 3)</strong> hoặc <strong>Midjourney</strong>.<br>
                3. Nhận về các bức ảnh nghệ thuật sắc nét 8K chuẩn phong cách <em>Corporate Documentary</em>.<br>
                4. Kéo thả các bức ảnh này vào slide PowerPoint cá nhân để tạo nên bộ slide độc bản.
              </div>
            </div>

          </div>

          <div style="font-size: 0.86rem; color: #047857; background: #ecfdf5; padding: 8px 12px; border-radius: 4px;">
            ✅ <strong>Kết quả thu được:</strong> Một file trình chiếu PowerPoint (<code>.pptx</code>) 8 slide tuyệt đẹp, có cấu trúc thẻ thoáng đãng, hình ảnh minh họa sống động, hoàn toàn không có slide "bức tường chữ".
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- BƯỚC 5: KHAI THÁC CÁC TÍNH NĂNG ĐỘC QUYỀN TRÊN NOTEBOOKLM            -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #0891b2; color: #ffffff; font-weight: 900; font-size: 0.88rem; width: 30px; height: 30px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center;">5</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Bước 5: Khai Thác Audio Overview (Podcast AI) & Bộ Công Cụ Notebook Guide</h3>
            </div>
            <span style="background: #ecfeff; color: #0e7490; font-size: 0.82rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; border: 1px solid #a5f3fc;">
              📍 Nơi thực hiện: <strong>Quay lại Google NotebookLM (Khu vực Notebook Guide)</strong>
            </span>
          </div>

          <div style="font-size: 0.9rem; color: #334155; line-height: 1.6; margin-bottom: 12px;">
            <strong>Mục tiêu bước 5:</strong> Sử dụng các tính năng cao cấp độc quyền của NotebookLM để tạo học liệu đa phương tiện hoàn chỉnh:
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; font-size: 0.86rem; color: #1e293b;">
            <div style="background: #f8fafc; border-left: 3px solid #0891b2; padding: 8px 12px;">
              <strong>1. Tạo Podcast Audio Overview:</strong> Nhìn sang bảng <em>Notebook guide</em> bên phải màn hình &rarr; Nhấp nút <strong>"Generate"</strong> tại mục Audio Overview. Sau 2-3 phút, bạn sẽ có một bản đàm thoại âm thanh cực kỳ tự nhiên giữa 2 host AI thảo luận về Kinh tế Hoa Kỳ. Bấm nút Tải về để gửi cho học sinh nghe trước buổi học.
            </div>
            <div style="background: #f8fafc; border-left: 3px solid #0891b2; padding: 8px 12px;">
              <strong>2. Xuất Study Guide & FAQ:</strong> Nhấp vào nút <strong>"FAQ"</strong> và <strong>"Study Guide"</strong> để NotebookLM tự động trích xuất bảng hỏi đáp ôn tập và bảng thuật ngữ kinh tế.
            </div>
            <div style="background: #f8fafc; border-left: 3px solid #0891b2; padding: 8px 12px;">
              <strong>3. Phản biện kiểm tra số liệu:</strong> Dán <strong>Prompt 05</strong> vào khung chat để bắt AI rà soát đối chiếu chéo số liệu GDP năm 2020 (khoảng 20.893 tỉ USD) và tỉ trọng dịch vụ >80% xem có khớp 100% với trang 88 SGK Địa lí 11 không.
            </div>
          </div>

          <div class="article-prompt-card">
            <div class="article-prompt-header">
              <span class="article-prompt-title">Prompt 05: Khai Thác Audio Overview Podcast, FAQ & Phản Biện Bắt Lỗi Số Liệu</span>
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(LIB_P5)}'), 'Đã sao chép Prompt 5!')">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Sao chép Prompt 5
              </button>
            </div>
            <pre class="article-prompt-code" style="padding: 12px 16px; font-size: 0.83rem; max-height: 180px; overflow-y: auto;">${LIB_P5}</pre>
          </div>

          <div style="margin-top: 10px; font-size: 0.86rem; color: #047857; background: #ecfdf5; padding: 8px 12px; border-radius: 4px;">
            ✅ <strong>Kết quả thu được:</strong> File âm thanh Podcast bài giảng (.mp3) + Bản đề cương Study Guide & bộ câu hỏi FAQ tự động được lưu trữ ngăn nắp trong sổ tay NotebookLM.
          </div>
        </div>

        <!-- --------------------------------------------------------------------- -->
        <!-- BẢNG MA TRẬN 5 TIÊU CHÍ NGHIỆM THU ĐẦU RA 5 SAO                      -->
        <!-- --------------------------------------------------------------------- -->
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
          <div style="display: flex; align-items: baseline; justify-content: space-between; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="background: #f3e8ff; color: #7e22ce; font-weight: 800; font-size: 0.85rem; padding: 3px 10px; border-radius: 4px;">Nghiệm Thu</span>
              <h3 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin: 0;">Bảng Ma Trận 5 Tiêu Chí Nghiệm Thu Hồ Sơ Học Liệu Hoàn Chỉnh</h3>
            </div>
            <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 4px;">Tự kiểm tra kết quả</span>
          </div>

          <table class="article-matrix-table" style="font-size: 0.88rem; margin-bottom: 14px;">
            <thead>
              <tr>
                <th style="width: 22%;">Tiêu chí nghiệm thu</th>
                <th style="width: 50%;">Yêu cầu cần đạt cụ thể</th>
                <th style="width: 28%;">Kết quả tự kiểm tra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Khóa nguồn & Trích dẫn (Citations)</strong></td>
                <td>Toàn bộ câu trả lời, tóm tắt và giáo án đều có số trích dẫn tương tác [Trang 88 - 96]; nhấp vào nhảy đúng vị trí trong file SGK Địa lí 11; không bịa số liệu.</td>
                <td>Đạt chuẩn 100% / Cần kiểm tra lại nguồn</td>
              </tr>
              <tr>
                <td><strong>2. Kế hoạch bài dạy chuẩn sư phạm</strong></td>
                <td>Giáo án có đủ 3 mục tiêu (kiến thức, năng lực, phẩm chất), 4 hoạt động bài bản (Khởi động, Khám phá, Luyện tập, Vận dụng) gắn liền với bối cảnh kinh tế Hoa Kỳ.</td>
                <td>Đạt chuẩn / Cần bổ sung hoạt động</td>
              </tr>
              <tr>
                <td><strong>3. Kịch bản Slide súc tích (Quy tắc 3 dòng)</strong></td>
                <td>Bộ 8 slide có tiêu đề hành động, tối đa 3 gạch đầu dòng ngắn (dưới 12 từ/dòng), có Lời giảng Speaker Notes đời thường 40-50 từ cho mỗi slide.</td>
                <td>Đạt chuẩn súc tích / Cần cắt giảm chữ</td>
              </tr>
              <tr>
                <td><strong>4. Định hướng phong cách ảnh & Prompt AI</strong></td>
                <td>Có định hình Visual Style Guide đồng bộ (bảng màu, thể loại ảnh tư liệu/đồ họa 3D) và có sẵn Prompt tiếng Anh chi tiết cho từng slide để vẽ ảnh AI.</td>
                <td>Đạt / Cần bổ sung Prompt tạo ảnh</td>
              </tr>
              <tr>
                <td><strong>5. Khai thác tính năng nâng cao NotebookLM</strong></td>
                <td>Đã khởi tạo thành công Audio Overview (Podcast 2 người), xuất bộ câu hỏi FAQ / Study Guide và lưu trữ ngăn nắp vào Pinned Notes.</td>
                <td>Đạt trọn vẹn / Đang chờ sinh Podcast</td>
              </tr>
            </tbody>
          </table>

          <div style="padding: 12px 16px; background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 6px; font-size: 0.88rem; color: #581c87;">
            <strong>Cam kết năng lực:</strong> Khi hoàn thành đủ 5 bước trên, người học đã làm chủ hoàn toàn quy trình chuyển hóa tài liệu PDF học liệu dày đặc thành bộ công cụ giảng dạy đa phương tiện (Giáo án + Slide PowerPoint mỹ thuật cao + Prompt hình ảnh + Podcast âm thanh) trong thời gian tối ưu nhất.
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- IV. HƯỚNG DẪN VỀ NHÀ VÀ DẶN DÒ                                          -->
      <!-- ========================================================================= -->
      <section class="article-section">
        <div class="article-section-header">
          <span class="article-section-tag" style="background-color: #c2410c;">DẶN DÒ</span>
          <h2 class="article-section-title">IV. Hướng Dẫn Về Nhà & Dặn Dò</h2>
        </div>
        <p class="article-prose">
          Hai nhiệm vụ trọng tâm học viên cần hoàn thiện tại nhà sau Buổi 5:
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-top: 10px;">
          
          <!-- Hộp 1: Ôn tập & Hoàn thiện -->
          <div style="background: #ffffff; border: 1px solid #fed7aa; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(234,88,12,0.06);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #ffedd5; color: #c2410c; font-weight: 800; font-size: 0.82rem; padding: 2px 8px; border-radius: 4px;">Nhiệm vụ 1</span>
              <h3 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0;">Hoàn thiện & Lưu trữ tài nguyên học liệu số</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #475569; line-height: 1.65;">
              <li>Nghe lại bản Audio Overview Podcast và tải file âm thanh về máy để làm tư liệu nghe trước giờ học cho học sinh.</li>
              <li>Lưu trữ file Slide PowerPoint (.pptx) tải từ Gamma App và file Giáo án Word vào thư mục bài giảng cá nhân.</li>
              <li>Thử nghiệm nạp thêm 01 tài liệu học phần của chính bộ môn mình đang giảng dạy vào NotebookLM để áp dụng quy trình tương tự.</li>
            </ul>
          </div>

          <!-- Hộp 2: Chuẩn bị Buổi 6 -->
          <div style="background: #ffffff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 18px 20px; box-shadow: 0 1px 4px rgba(37,99,235,0.06);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span style="background: #eff6ff; color: #1d4ed8; font-weight: 800; font-size: 0.82rem; padding: 2px 8px; border-radius: 4px;">Nhiệm vụ 2</span>
              <h3 style="font-size: 1rem; font-weight: 700; color: #0f172a; margin: 0;">Chuẩn bị học liệu cho Buổi 6</h3>
            </div>
            <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: #475569; line-height: 1.65;">
              <li><strong>Nội dung Buổi 6 tiếp theo:</strong> <em>"Thiết Kế Trợ Lý Gia Sư AI (AI Tutor) Hỗ Trợ Sinh Viên Tự Học 24/7 Bằng Phương Pháp Socrates"</em>.</li>
              <li>Chuẩn bị sẵn 01 bài tập khó hoặc câu hỏi trọng tâm của học phần mình đang giảng dạy (ví dụ: Bài 19 SGK Địa lí 11).</li>
              <li>Tìm hiểu trước về phương pháp gợi mở Socrates (Socratic Questioning) để sẵn sàng lập trình AI Tutor không giải hộ bài tập.</li>
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
    title: "Buổi 5: Làm Chủ NotebookLM: Tóm Tắt Học Liệu, Xây Dựng Giáo Án, Soạn Slide & Mô Tả Phong Cách Hình Ảnh",
    topic: "Khai Thác Toàn Diện Google NotebookLM",
    tools: ["NotebookLM", "Gamma/Canva", "AI Image Prompts"],
    duration: "180 phút (3 giờ)",
    deliverable: "Trọn bộ hồ sơ học liệu số Bài 19 (Kinh tế Hoa Kỳ, SGK Địa lí 11): Bản tóm tắt học thuật có trích dẫn số trang trên NotebookLM, Kế hoạch bài dạy 4 hoạt động, Kịch bản 8 slide kèm Speaker Notes và Prompt vẽ ảnh AI, File PowerPoint (.pptx) hoàn chỉnh từ Gamma, và Audio Overview Podcast.",
    overview: "Đề bài tình huống Bài 19 SGK Địa Lí 11: Làm chủ quy trình 5 bước liên hoàn từ NotebookLM (tóm tắt, lên giáo án, soạn nội dung slide, định hình phong cách ảnh) đến Gamma/Canva (tạo slide trình chiếu) và xuất Audio Overview Podcast.",
    articleHtml: articleHtml,
    objectives: [
      "1. Kiến thức: Nắm vững cơ chế hoạt động của NotebookLM (Source-grounded AI), quy trình chuyển dữ liệu liên hoàn giữa NotebookLM -> Word -> Gamma/Canva, và tư duy định hình phong cách hình ảnh đồng bộ cho bài giảng.",
      "2. Năng lực: Khai thác thành thạo 5 bước: Nạp nguồn PDF SGK có trích dẫn số trang (Citations), tóm tắt học liệu, xuất giáo án, soạn dàn ý 8 slide kèm Speaker Notes và Prompt vẽ ảnh AI, mang sang Gamma tạo slide PowerPoint (.pptx) và tạo Audio Overview Podcast 2 người.",
      "3. Phẩm chất: Đạo đức học thuật và trách nhiệm kiểm chứng số liệu, tư duy thẩm mỹ sư phạm tinh tế, chủ động làm chủ công nghệ AI trong dạy học."
    ],
    timeline: [
      { time: "00 - 15p", title: "Mở đầu / Khởi động: Phân tích đề bài tình huống", desc: "Giới thiệu đề bài thực hành Bài 19, so sánh câu lệnh thô vs Câu lệnh kiểm soát khóa nguồn trên NotebookLM." },
      { time: "15 - 50p", title: "Bước 1 & Bước 2: Tóm tắt học liệu & Soạn Giáo án", desc: "Nạp SGK Địa Lí 11 vào NotebookLM, trích xuất tóm tắt có trích dẫn số trang [Trang 88 - 96] và xuất Kế hoạch bài dạy chuẩn 4 hoạt động." },
      { time: "50 - 105p", title: "Bước 3: Lên kịch bản 8 Slide & Mô tả phong cách ảnh", desc: "Soạn 8 slide chuẩn quy tắc 3 dòng kèm Speaker Notes trên NotebookLM, định hình Visual Style Guide và viết câu lệnh prompt vẽ ảnh AI chi tiết." },
      { time: "105 - 145p", title: "Bước 4: Tạo Slide trên Gamma & Vẽ ảnh AI", desc: "Chuyển kịch bản 8 slide từ NotebookLM sang Gamma App tạo bộ slide PowerPoint (.pptx) mỹ thuật cao và tải về máy." },
      { time: "145 - 170p", title: "Bước 5: Audio Overview Podcast & Nghiệm thu", desc: "Quay lại NotebookLM xuất Audio Overview Podcast, Study Guide, FAQ và đối chiếu kết quả theo 5 tiêu chí nghiệm thu." },
      { time: "170 - 180p", title: "IV. Hướng dẫn về nhà & Dặn dò", desc: "Lưu trữ sản phẩm, tải file Podcast bài giảng, chuẩn bị học liệu cho Buổi 6." }
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
