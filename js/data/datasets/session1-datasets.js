/**
 * DATASETS FOR SESSION 1 (js/data/datasets/session1-datasets.js)
 */

(function() {
  const R = window.CurriculumRegistry;

  // Dữ liệu 1.0: Tài liệu bài học nhỏ trích từ trang 5 - 11 file PDF trang 1 - 40.pdf
  R.registerDataset("session1_nouns_topic", {
    id: "session1_nouns_topic",
    title: "Tài Liệu Bài Học: Chuyên Đề Danh Từ (Nouns) - Trích Trang 5 - 11 Tệp 'trang 1 - 40.pdf'",
    category: "Tài liệu bài học mẫu (PDF)",
    author: "Giải Thích Ngữ Pháp Tiếng Anh (Trích trang 5 - 11)",
    description: "Đoạn trích chi tiết bài học Danh từ trong file PDF thực tế: Định nghĩa, phân loại cụ thể/trừu tượng, đếm được/không đếm được, danh từ đơn/ghép, số ít/số nhiều và các lưu ý ngữ pháp đặc biệt.",
    wordCount: 860,
    content: `GIÁO TRÌNH: GIẢI THÍCH NGỮ PHÁP TIẾNG ANH
CHƯƠNG 1: TỪ LOẠI (THE PARTS OF SPEECH)
BÀI HỌC: DANH TỪ (NOUNS) - (Trích từ trang 5 đến trang 11)

I. ĐỊNH NGHĨA (Definition):
Danh từ là từ hoặc nhóm từ dùng để chỉ:
- Người: John, teacher, mother...
- Vật: chair, dog, table, pen...
- Nơi chốn: city, church, England...
- Tính chất: beauty, courage, sorrow...
- Hoạt động: travel, cough, walk...

II. CÁC LOẠI DANH TỪ (Kinds of nouns):

1. Danh từ cụ thể và danh từ trừu tượng (Concrete nouns and abstract nouns):
1.1. Danh từ cụ thể (Concrete nouns): chỉ những gì hữu hình nhận biết được qua giác quan (nhìn, nghe, sờ, ngửi...).
a. Danh từ chung (common nouns): table, man, dog, pen...
   * Danh từ tập hợp (collective nouns): family, crowd, team, police, government, cattle...
b. Danh từ riêng (proper nouns): John, France, the Thames...
1.2. Danh từ trừu tượng (Abstract nouns): chỉ tính chất, trạng thái, ý niệm (beauty, charity, fear, happiness, departure...).

2. Danh từ đếm được và danh từ không đếm được (Countable and uncountable nouns):
2.1. Danh từ đếm được (Countable nouns): chỉ những vật thể, con người riêng rẽ có thể đếm được (chair, book, student, dog...).
   * Có dạng số ít (a book, an accident) và số nhiều (two dogs, many students, a few ideas).
2.2. Danh từ không đếm được (Uncountable nouns): chỉ chất liệu, chất lỏng, khái niệm trừu tượng (water, milk, butter, rice, furniture, news, advice, information, bread...).
   * Không có hình thức số nhiều. Dùng với some, any, much, little.
   * KHÔNG dùng trực tiếp mạo từ a/an hay số đếm đứng trước (phải dùng qua từ chỉ đo lường: a piece of advice, a bottle of milk, two loaves of bread).
   * LƯU Ý ĐẶC BIỆT: Một số từ vừa đếm được vừa không đếm được tùy theo nghĩa:
     - glass: thủy tinh (không đếm được) vs a glass: cái ly thủy tinh (đếm được).
     - paper: giấy viết (không đếm được) vs a paper: tờ báo (đếm được).
     - coffee/tea: cà phê/trà (chất lỏng) vs Two coffees, please (= two cups of coffee).

3. Danh từ đơn và danh từ ghép (Simple and compound nouns):
3.1. Danh từ đơn: house, peace, train, table...
3.2. Danh từ ghép: greenhouse, bus driver, toothpaste, swimming pool, washing machine, mother-in-law...

4. Danh từ số ít và số nhiều (Singular and plural nouns):
- Thêm -s vào hầu hết danh từ: boy -> boys, dog -> dogs.
- Tận cùng s, sh, ch, x, z thêm -es: watch -> watches, box -> boxes.
- Bất quy tắc: man -> men, woman -> women, foot -> feet, tooth -> teeth, child -> children, mouse -> mice.`
  });

  // Dữ liệu 1.1: Tình huống kiểm chứng số liệu & Rút trích Slide
  R.registerDataset("session1_hallucination_test", {
    id: "session1_hallucination_test",
    title: "Dữ Liệu Thử Nghiệm: Báo Cáo PISA & Đổi Mới Phương Pháp Dạy Học",
    category: "Thử nghiệm AI & Slide",
    author: "Tình huống kiểm chứng năng lực phân tích của AI",
    description: "Câu lệnh kiểm chứng nhanh: Đánh giá khả năng tự đính chính số liệu và phân tích 3 nguyên nhân cốt lõi trong phương pháp dạy học để tạo slide.",
    wordCount: 320,
    content: `TÌNH HUỐNG THỰC HÀNH: PHÂN TÍCH BÁO CÁO PISA & SOẠN SLIDE CHIẾU LỚP

1. CÂU HỎI THỰC NGHIỆM:
"Theo Báo cáo PISA 2022 của OECD, học sinh Việt Nam xếp thứ 85/88 quốc gia về năng lực đọc hiểu và tư duy phản biện. 
1. Hãy kiểm tra tính chính xác của số liệu trên.
2. Phân tích 3 nguyên nhân chính trong cách dạy học hiện nay khiến học sinh thiếu tư duy phản biện.
3. Đề xuất 3 giải pháp khắc phục ngắn gọn theo thang nhận thức Bloom."

2. KẾT QUẢ THỰC TẾ:
- AI tự động đính chính: Việt Nam xếp thứ 34/81 (462 điểm), thông tin xếp thứ 85/88 là sai.
- AI chỉ ra 3 nguyên nhân: Dạy học thụ động một chiều, lạm dụng văn mẫu bài giải sẵn, và thi cử nặng về ghi nhớ.
- AI đề xuất: Đổi mới câu hỏi theo thang Bloom, áp dụng kỹ thuật đọc SQ3R, và đánh giá bằng Rubric.

3. LỆNH CHUYỂN THÀNH SLIDE:
"Từ nội dung trên, hãy soạn cho tôi 03 slide trình chiếu ngắn gọn: mỗi slide gồm tiêu đề, 3 gạch đầu dòng dưới 15 từ, và 1 câu hỏi thảo luận 2 phút."`
  });

  // Dữ liệu 1.2: Luận điểm nghiên cứu cần "Reviewer #2" băm vằn
  R.registerDataset("session1_reviewer2_thesis", {
    id: "session1_reviewer2_thesis",
    title: "Hồ Sơ Nghiên Cứu Mẫu: Luận Điểm Cần Phản Biện (Reviewer #2)",
    category: "Nghiên cứu khoa học",
    author: "Đề tài NCKH cấp Trường (Mô phỏng thực tế)",
    description: "Bản tóm tắt đề tài nghiên cứu phương pháp dạy học có nhiều lỗ hổng phương pháp luận (cỡ mẫu nhỏ, thiếu nhóm đối chứng, hiệu ứng Hawthorne) để AI phản biện.",
    wordCount: 780,
    content: `BẢN TÓM TẮT ĐỀ TÀI NGHIÊN CỨU KHOA HỌC SƯ PHẠM
Tên đề tài: "Ứng dụng mô hình Lớp học đảo ngược (Flipped Classroom) kết hợp AI làm gia tăng 35% kết quả học tập môn Triết học Mác - Lênin tại trường Đại học X"

1. TÓM TẮT THIẾT KẾ NGHIÊN CỨU:
- Khách thể nghiên cứu: 45 sinh viên lớp Triết học K47 do chính tác giả trực tiếp giảng dạy trong Học kỳ 1 năm học 2023 - 2024.
- Phương pháp tiến hành:
  + Trước mỗi buổi học, giảng viên gửi video bài giảng ngắn (10 phút) và yêu cầu sinh viên dùng ChatGPT đặt 3 câu hỏi thắc mắc nộp lên hệ thống LMS.
  + Trên lớp, giảng viên dành toàn bộ 90 phút cho thảo luận nhóm và giải đáp thắc mắc.
- Kết quả thu nhận:
  + Điểm thi kết thúc học phần trung bình của lớp K47 đạt 7.8/10, cao hơn 35% so với điểm trung bình của lớp K46 năm trước (5.8/10) khi học theo phương pháp thuyết giảng truyền thống.
  + Khảo sát cuối kỳ cho thấy 92% sinh viên hào hứng hơn với môn học.

2. KẾT LUẬN CỦA TÁC GIẢ:
"Mô hình Flipped Classroom kết hợp AI là giải pháp đột phá, có khả năng nâng cao vượt bậc chất lượng giảng dạy các môn lý luận chính trị và cần được nhân rộng ra toàn trường ngay lập tức."

3. CÁC LỖ HỔNG PHƯƠNG PHÁP LUẬN TIỀM ẨN (ĐỂ AI PHẢN BIỆN CHỈ RA):
- Lỗ hổng 1: Không có nhóm đối chứng đồng thời (Concurrent Control Group); so sánh với khóa trước (K46) là khập khiễng vì đề thi khác nhau, trình độ đầu vào khác nhau.
- Lỗ hổng 2: Hiệu ứng Hawthorne (sinh viên biết mình đang được thử nghiệm phương pháp mới nên cố gắng hơn, chứ chưa chắc do bản thân phương pháp).
- Lỗ hổng 3: Cỡ mẫu quá nhỏ (N = 45), chỉ trong 1 lớp, do chính tác giả chấm điểm (nguy cơ thiên kiến chủ quan của người nghiên cứu - Experimenter Bias).
- Lỗ hổng 4: Tính toán tỷ lệ phần trăm sai lệch toán học (tăng từ 5.8 lên 7.8 là tăng 2.0 điểm, tương đương 34.5% trên điểm số nhưng không có kiểm định ý nghĩa thống kê t-test hay p-value).`
  });

  // Dữ liệu 1.3: Đoạn lý thuyết học thuật trừu tượng khô khan
  R.registerDataset("session1_dry_theory", {
    id: "session1_dry_theory",
    title: "Tài Liệu Lý Thuyết Khô Khan: Thuyết Học Tập Trải Nghiệm Của Kolb",
    category: "Lý thuyết sư phạm",
    author: "Trích giáo trình Tâm lý học & Phương pháp Dạy học Đại học",
    description: "Đoạn văn bản lý thuyết nguyên bản hàn lâm, khó hiểu, trừu tượng dùng để thực hành biến đổi thành phép ẩn dụ sinh động và tình huống tương tác 5 phút đầu giờ.",
    wordCount: 620,
    content: `ĐOẠN TRÍCH GIÁO TRÌNH: CHU TRÌNH HỌC TẬP TRẢI NGHIỆM (KOLB, 1984)

"Theo David A. Kolb (1984), học tập là một quá trình liên tục trong đó tri thức được kiến tạo thông qua sự chuyển hóa của trải nghiệm (Experiential Learning Theory - ELT). Chu trình học tập gồm bốn giai đoạn tiếp nối mang tính cấu trúc vòng lặp:

1. Trải nghiệm cụ thể (Concrete Experience - CE): Người học trực tiếp tham gia vào một hoạt động, biến cố hoặc tình huống thực tế mà không qua lăng kính định kiến ban đầu.
2. Quan sát phản tư (Reflective Observation - RO): Người học xem xét lại trải nghiệm từ nhiều góc độ khác nhau, mô tả lại hiện tượng và phản ánh cảm xúc, nhận thức cá nhân.
3. Khái quát hóa trừu tượng (Abstract Conceptualization - AC): Người học kết nối các quan sát với hệ thống lý thuyết, xây dựng các mô hình khái niệm, nguyên lý tổng quát hoặc giả thuyết giải thích bản chất quy luật.
4. Thử nghiệm tích cực (Active Experimentation - AE): Người học áp dụng các lý thuyết hoặc mô hình đã khái quát vào các tình huống thực tiễn mới để kiểm chứng tính đúng đắn và giải quyết vấn đề thực tế.

Bốn giai đoạn này phân bổ trên hai trục trực giao: Trục lĩnh hội (Nắm bắt trải nghiệm: từ Cụ thể CE đến Trừu tượng AC) và Trục chuyển hóa (Xử lý trải nghiệm: từ Phản tư RO đến Thử nghiệm AE). Quá trình này đòi hỏi sự tích hợp đa chiều của các phong cách nhận thức."`
  });

  // Dữ liệu 1.4: Email khủng hoảng học vụ nhạy cảm từ sinh viên
  R.registerDataset("session1_student_crisis_email", {
    id: "session1_student_crisis_email",
    title: "Tình Huống Thực Tế: Email Khiếu Nại & Xin Nâng Điểm Của Sinh Viên",
    category: "Tình huống học vụ",
    author: "Email thực tế gửi giảng viên phụ trách môn học",
    description: "Bức thư đầy cảm xúc, áp lực và hoàn cảnh éo le của sinh viên xin nâng điểm để cứu học bổng, đòi hỏi giảng viên phản hồi vừa nhân văn, vừa giữ vững nguyên tắc.",
    wordCount: 480,
    content: `EMAIL THỰC TẾ GỬI GIẢNG VIÊN:

Tiêu đề: [KHẨN THIẾT] Em xin Thầy/Cô xem xét lại điểm kiểm tra giữa kỳ môn [Tên môn học] - SV Trần Hải Đăng

Kính gửi Thầy/Cô [Tên Giảng Viên],
Em là Trần Hải Đăng, sinh viên lớp K46, MSSV 22010892. Em viết email này cho cô với tâm trạng vô cùng hoang mang và tuyệt vọng ạ.

Hôm nay cô công bố điểm giữa kỳ, em thấy điểm của em chỉ được 4.5 (điểm F). Thưa cô, em thực sự sốc vì em đã dành rất nhiều đêm để làm bài tập này. Em biết phần trích dẫn tài liệu em làm chưa được chuẩn như các bạn khác, nhưng nội dung em viết hoàn toàn là suy nghĩ thật của em chứ không hề sao chép trên mạng. Ở lớp bên cạnh, các bạn học thầy H. làm bài tương tự nhưng đều được 7, 8 điểm, em thấy cách chấm của cô có phần khắt khe quá với chúng em ạ.

Cô ơi, hoàn cảnh gia đình em hiện tại đang rất khó khăn, bố em bị tai biến vừa phải nằm viện tháng trước. Kỳ này em bắt buộc phải đạt điểm B trở lên môn của cô thì mới đủ điều kiện duy trì học bổng khuyến khích học tập 7 triệu đồng/kỳ để đóng tiền học phí cho kỳ tới. Nếu bị điểm 4.5 này, GPA của em sẽ bị tụt xuống loại Trung bình, em sẽ mất học bổng và gia đình em chắc chắn không thể lo nổi tiền học tiếp, em có nguy cơ phải bảo lưu hoặc bỏ học giữa chừng.

Em tha thiết cầu xin cô xem xét hoàn cảnh khó khăn của em, xin cô thương tình nâng điểm cho em lên 6.5 hoặc cho em làm thêm bất kỳ bài tập bù nào để vớt vát điểm số được không cô? Đây là cơ hội duy nhất để em được tiếp tục con đường đại học. Em xin đội ơn cô suốt đời!

Kính mong cô hồi đáp sớm ạ.
Sinh viên của cô,
Trần Hải Đăng.`
  });
})();
