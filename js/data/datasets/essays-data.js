/**
 * ESSAY DATASETS (js/data/datasets/essays-data.js)
 * 3 Authentic Student Essays (Grade A, Grade B, Grade D).
 */

(function() {
  const R = window.CurriculumRegistry;

  // Dữ liệu: Bài tiểu luận sinh viên loại Xuất sắc (Điểm A)
  R.registerDataset("essay_high", {
    id: "essay_high",
    title: "Bài tiểu luận Sinh viên (Loại Xuất sắc - Chuẩn A)",
    category: "Tiểu luận sinh viên",
    author: "SV: Nguyễn Văn An - Lớp: Sư phạm Toán K46",
    topic: "Tác động của Trí tuệ Nhân tạo đối với Năng lực Tự học của Sinh viên Sư phạm",
    description: "Bài làm hoàn chỉnh có bố cục chặt chẽ, luận điểm phản biện đa chiều, trích dẫn chuẩn APA 7th và số liệu khảo sát thực tế.",
    wordCount: 1850,
    content: `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập - Tự do - Hạnh phúc
-----------------------------------
BÀI TIỂU LUẬN HỌC PHẦN: PHƯƠNG PHÁP NGHIÊN CỨU KHOA HỌC
Đề tài: Tác động của Trí tuệ Nhân tạo đối với Năng lực Tự học của Sinh viên Sư phạm
Học viên thực hiện: Nguyễn Văn An - MSSV: 22010452 - Lớp: K46 Sư phạm Toán

1. ĐẶT VẤN ĐỀ
Trong bối cảnh cách mạng công nghiệp 4.0, sự xuất hiện của các mô hình ngôn ngữ lớn (LLM) như ChatGPT và Gemini đã tạo ra bước chuyển dịch căn bản trong giáo dục đại học. Đối với sinh viên sư phạm - những nhà giáo tương lai, năng lực tự học không chỉ là công cụ tiếp nhận tri thức mà còn là năng lực nghề nghiệp cốt lõi (Hoàng & Lê, 2023). Bài nghiên cứu này nhằm phân tích hai mặt của AI tác động lên năng lực tự học, từ đó đề xuất mô hình tích hợp AI có định hướng.

2. TỔNG QUAN TÀI LIỆU VÀ CƠ SỞ LÝ LUẬN
Theo thuyết Kiến tạo (Constructivism) của Vygotsky (1978), việc học diễn ra hiệu quả nhất trong vùng phát triển gần (Zone of Proximal Development - ZPD). AI đóng vai trò như một "giàn giáo học tập" (scaffolding) cá nhân hóa, cung cấp phản hồi tức thì và giải thích khái niệm phức tạp theo trình độ người học (Luckin et al., 2016). Tuy nhiên, một số nghiên cứu gần đây (Zawacki-Richter et al., 2019; Williamson et al., 2020) cảnh báo nguy cơ suy giảm tư duy phản biện khi người học phụ thuộc thụ động vào các câu trả lời tổng hợp sẵn.

3. PHÂN TÍCH THỰC TRẠNG VÀ THẢO LUẬN
Dựa trên khảo sát 120 sinh viên năm 2 và 3 tại trường Đại học Sư phạm:
- 78.3% sinh viên sử dụng AI thường xuyên để tìm kiếm ý tưởng ban đầu và tóm tắt bài báo khoa học.
- 62.5% cho biết AI giúp họ tiết kiệm 40% thời gian tra cứu thuật ngữ chuyên ngành.
- Tuy nhiên, chỉ có 28.4% sinh viên thực hiện bước đối chiếu chéo (cross-validation) thông tin do AI cung cấp với giáo trình chính thống.

Thảo luận phản biện: AI không làm mất đi năng lực tự học; bản chất của sự suy giảm xuất phát từ việc sinh viên xem AI là "công cụ tạo kết quả" thay vì "đối tác đối thoại học thuật". Khi được hướng dẫn phương pháp Prompting phản biện (Socratic Prompting), sinh viên phát triển khả năng đào sâu vấn đề cao hơn 35% so với phương pháp tự học truyền thống.

4. ĐỀ XUẤT GIẢI PHÁP
4.1. Đối với người học: Áp dụng quy tắc "3 lớp kiểm chứng" (Verify - Critique - Synthesize) khi tiếp nhận dữ liệu từ AI.
4.2. Đối với giảng viên: Chuyển đổi hình thức đánh giá từ "kiểm tra khả năng tái hiện thông tin" sang "đánh giá quá trình lập luận và bảo vệ quan điểm".

5. KẾT LUẬN
AI là một chất xúc tác mạnh mẽ cho năng lực tự học của sinh viên sư phạm nếu được định hướng trên nền tảng liêm chính học thuật và tư duy phản biện độc lập.

TÀI LIỆU THAM KHẢO
- Hoàng, T. M., & Lê, V. H. (2023). Đổi mới phương pháp dạy học đại học trong kỷ nguyên số. Tạp chí Khoa học Giáo dục Việt Nam, 19(4), 45-52.
- Luckin, R., Holmes, W., Forcier, L. B., & Naslund, E. (2016). Intelligence Unleashed: An argument for AI in Education. Pearson.
- Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.`
  });

  // Dữ liệu: Bài tiểu luận sinh viên loại Khá (Điểm B)
  R.registerDataset("essay_medium", {
    id: "essay_medium",
    title: "Bài tiểu luận Sinh viên (Loại Khá - Chuẩn B)",
    category: "Tiểu luận sinh viên",
    author: "SV: Trần Thị Bích - Lớp: Giáo dục Tiểu học K47",
    topic: "Ứng dụng chuyển đổi số trong nâng cao chất lượng dạy học đại học",
    description: "Nội dung khá đầy đủ nhưng lập luận còn chung chung, trích dẫn thiếu năm và chưa theo chuẩn APA, giải pháp mang tính hình thức.",
    wordCount: 1120,
    content: `BÀI TIỂU LUẬN: ỨNG DỤNG CHUYỂN ĐỔI SỐ TRONG DẠY HỌC ĐẠI HỌC
Sinh viên: Trần Thị Bích - Lớp: GDTH K47

1. MỞ ĐẦU
Hiện nay chuyển đổi số đang diễn ra rất mạnh mẽ trong tất cả các ngành nghề và giáo dục đại học cũng không ngoại lệ. Việc ứng dụng công nghệ thông tin giúp bài giảng sinh động hơn, sinh viên hứng thú hơn trong giờ học.

2. NỘI DUNG CHÍNH
Trong thời gian qua, các trường đại học đã đầu tư nhiều máy chiếu, mạng wifi và các hệ thống học trực tuyến LMS. Giảng viên cũng đã sử dụng slide PowerPoint nhiều hơn thay cho bảng phấn truyền thống. Gần đây, sự xuất hiện của ChatGPT cũng giúp sinh viên làm bài tập nhanh hơn.

Ưu điểm của chuyển đổi số:
- Giúp tìm kiếm tài liệu nhanh trên Google.
- Sinh viên có thể học mọi lúc mọi nơi qua Zoom hoặc Google Meet.
- Giảng viên dễ dàng gửi thông báo qua Zalo và email.

Nhược điểm còn tồn tại:
- Một số sinh viên còn lười học, dựa dẫm vào mạng.
- Đường truyền mạng thỉnh thoảng bị lag làm gián đoạn buổi học.
- Giảng viên lớn tuổi gặp khó khăn khi làm quen với phần mềm mới.

Theo một số tác giả trên mạng, chuyển đổi số là xu thế tất yếu không thể đảo ngược. Do đó chúng ta cần phải đẩy mạnh hơn nữa.

3. GIẢI PHÁP
- Nhà trường cần nâng cấp đường truyền internet mạnh hơn.
- Mở thêm các lớp tập huấn tin học cho giảng viên và sinh viên.
- Sinh viên cần nâng cao ý thức tự giác khi học online.

4. KẾT LUẬN
Chuyển đổi số là việc rất quan trọng và cấp bách. Nếu thực hiện tốt sẽ giúp giáo dục đại học phát triển mạnh mẽ sánh vai với các nước trên thế giới.

TÀI LIỆU THAM KHẢO
- Báo Giáo dục và Thời đại (2022).
- Các bài viết trên trang web của Bộ Giáo dục và Đào tạo.`
  });

  // Dữ liệu: Bài tiểu luận sinh viên loại Yếu (Điểm D / Lạm dụng AI)
  R.registerDataset("essay_low", {
    id: "essay_low",
    title: "Bài tiểu luận Sinh viên (Loại Cần Cải Thiện - Chuẩn D)",
    category: "Tiểu luận sinh viên",
    author: "SV: Lê Hoàng Nam - Lớp: Quản lý Giáo dục K48",
    topic: "AI trong giáo dục",
    description: "Bài viết sơ sài, lạm dụng văn phong AI dịch máy, không có số liệu, không có trích dẫn khoa học, lạc đề yêu cầu thực tiễn.",
    wordCount: 560,
    content: `BÀI NỘP: AI TRONG GIÁO DỤC
Họ tên: Lê Hoàng Nam

Trí tuệ nhân tạo là một công nghệ rất tiên tiến và đang thay đổi thế giới của chúng ta. Nó có thể làm được nhiều thứ từ việc trả lời câu hỏi đến viết văn và vẽ tranh.

Trong giáo dục, AI là một người bạn đồng hành tuyệt vời cho cả giáo viên và học sinh. Giáo viên có thể dùng nó để soạn giáo án và học sinh có thể dùng nó để giải bài tập toán học và học tiếng Anh. Nó giúp tiết kiệm rất nhiều thời gian quý báu.

Tuy nhiên, như một con dao hai lưỡi, AI cũng có những nhược điểm. Nếu học sinh quá ỷ lại thì sẽ trở nên lười suy nghĩ và không thông minh nữa. Vì vậy chúng ta phải sử dụng nó một cách thông minh và sáng suốt.

Tóm lại, tương lai của giáo dục với AI là rất tươi sáng. Chúng ta hãy cùng nhau đón nhận công nghệ mới này để đưa đất nước đi lên tầm cao mới.`
  });
})();
