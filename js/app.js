/**
 * APPLICATION BOOTSTRAP (js/app.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Core Components
  if (window.AuthManager) window.AuthManager.init();
  if (window.AppModal) window.AppModal.init();
  if (window.SessionNav) window.SessionNav.init();
  if (window.SessionView) window.SessionView.render(window.AppState.currentSessionId || 1);
  if (window.DatasetHub) window.DatasetHub.render();

  // Setup Navigation Tabs (Lộ trình vs Kho Dữ Liệu vs Cẩm Nang)
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      const targetView = link.getAttribute("data-view");
      switchMainView(targetView);
    });
  });
});

/**
 * Switch Main Section View
 */
function switchMainView(viewName) {
  window.AppState.activeView = viewName;
  const curriculumSection = document.getElementById("curriculumSection");
  const practiceHubSection = document.getElementById("practiceHubSection");
  const toolsGuideSection = document.getElementById("toolsGuideSection");

  if (curriculumSection) curriculumSection.style.display = viewName === "curriculum" ? "block" : "none";
  if (practiceHubSection) practiceHubSection.style.display = viewName === "datasets" ? "block" : "none";
  if (toolsGuideSection) toolsGuideSection.style.display = viewName === "tools-guide" ? "block" : "none";

  window.scrollTo({ top: 380, behavior: "smooth" });
}
