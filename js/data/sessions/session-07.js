/**
 * SESSION 7: THIẾT KẾ BÀI TẬP & KIỂM TRA TRONG THỜI ĐẠI GENAI
 * (js/data/sessions/session-07.js)
 * Căn cứ theo lộ trình 16 buổi: Chuyển nội dung Tạo slide với NotebookLM sang Buổi 5
 */

(function() {
  const session7Data = {
    id: 7,
    number: 7,
    title: "Buổi 7: Thiết Kế Bài Tập & Kiểm Tra Trong Thời Đại GenAI",
    tools: ["ChatGPT", "Gemini", "LMS"],
    duration: "180 phút (3 giờ)",
    deliverable: "01 Đề bài tập mới kèm hướng dẫn kiểm chứng quá trình (Process-based assessment)",
    overview: "Thiết kế bài tập không chỉ đo sản phẩm cuối mà còn đo quá trình suy nghĩ và năng lực của sinh viên với các dạng bài tập AI-friendly, AI-assisted và AI-restricted.",
    objectives: [],
    timeline: [],
    steps: [],
    prompts: [],
    exercises: [],
    blocks: []
  };

  // Register session into central registry
  window.CurriculumRegistry.registerSession(session7Data);

  // Synchronize metadata with localStorage
  window.CurriculumRegistry.saveSessionMeta(7, {
    title: session7Data.title,
    duration: session7Data.duration,
    tools: session7Data.tools,
    overview: session7Data.overview
  });
})();
