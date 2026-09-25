/**
 * HORIZONTAL SESSION NAVIGATION COMPONENT (js/components/session-nav.js)
 * Replaces the left sidebar with a sleek, full-width horizontal session bar.
 */

window.SessionNav = {
  init() {
    this.render();

    // Re-render when window resize or filter tabs change
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        window.AppState.selectedToolFilter = btn.getAttribute("data-tool");
        this.render();
      });
    });

    const searchInput = document.getElementById("sessionSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        window.AppState.searchKeyword = e.target.value.trim().toLowerCase();
        this.render();
      });
    }
  },

  render() {
    const navContainer = document.getElementById("sessionHorizontalNav");
    if (!navContainer) return;

    const ICONS = window.APP_ICONS;
    const allSessions = window.CurriculumRegistry.getAllSessions();
    const currentId = window.AppState.currentSessionId || 1;

    const filtered = allSessions.filter(session => {
      const matchTool = window.AppState.selectedToolFilter === "all" || 
        (session.tools && session.tools.includes(window.AppState.selectedToolFilter));
      const matchSearch = !window.AppState.searchKeyword || 
        session.title.toLowerCase().includes(window.AppState.searchKeyword) ||
        (session.tools && session.tools.some(t => t.toLowerCase().includes(window.AppState.searchKeyword))) ||
        (session.overview && session.overview.toLowerCase().includes(window.AppState.searchKeyword));
      return matchTool && matchSearch;
    });

    const currentIndex = allSessions.findIndex(s => s.id === currentId);
    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < allSessions.length - 1;

    navContainer.innerHTML = `
      <div class="h-nav-header">
        <div class="h-nav-title-group">
          <span class="h-nav-tag">LỘ TRÌNH ${allSessions.length} BUỔI</span>
          <span class="h-nav-sub">Chọn buổi học để xem kịch bản sư phạm & thiết kế nội dung</span>
        </div>

        <div class="h-nav-actions">
          <button class="btn btn-secondary btn-sm" onclick="window.SessionNav.exportCurriculum()" title="Xuất dữ liệu toàn bộ khóa học ra file JSON để lưu trữ">
            ${ICONS.download || ''} Xuất file JSON
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.SessionNav.triggerImportJson()" title="Nạp file JSON đã lưu">
            ${ICONS.upload || ''} Nhập file JSON
          </button>
          <input type="file" id="jsonCurriculumFileInput" accept=".json" style="display: none;" onchange="window.SessionNav.handleImportFile(event)">
        </div>
      </div>

      <div class="h-nav-tabs-wrapper">
        <button class="h-nav-arrow-btn" id="hNavPrevBtn" onclick="window.SessionNav.goToPrevSession()" ${hasPrev ? '' : 'disabled'} title="Buổi trước">
          ${ICONS.chevronLeft || '◀'}
        </button>

        <div class="h-nav-scroll-container" id="hNavScrollContainer">
          ${allSessions.map(session => {
            const isActive = session.id === currentId;
            const isMatch = filtered.some(f => f.id === session.id);
            const opacityStyle = isMatch ? '' : 'opacity: 0.45; filter: grayscale(50%);';

            return `
              <button class="h-nav-tab ${isActive ? 'active' : ''}" 
                      style="${opacityStyle}"
                      data-session-id="${session.id}" 
                      onclick="window.selectSession(${session.id})"
                      title="${session.title}">
                <span class="h-tab-badge">B${session.number}</span>
                <span class="h-tab-title">${session.title}</span>
              </button>
            `;
          }).join("")}
        </div>

        <button class="h-nav-arrow-btn" id="hNavNextBtn" onclick="window.SessionNav.goToNextSession()" ${hasNext ? '' : 'disabled'} title="Buổi tiếp theo">
          ${ICONS.chevronRight || '▶'}
        </button>
      </div>
    `;

    // Smooth scroll to the active tab
    setTimeout(() => {
      const activeTab = navContainer.querySelector(".h-nav-tab.active");
      const scrollBox = document.getElementById("hNavScrollContainer");
      if (activeTab && scrollBox) {
        const offsetLeft = activeTab.offsetLeft - scrollBox.clientWidth / 2 + activeTab.clientWidth / 2;
        scrollBox.scrollTo({ left: Math.max(0, offsetLeft), behavior: "smooth" });
      }
    }, 50);
  },

  goToPrevSession() {
    const all = window.CurriculumRegistry.getAllSessions();
    const currId = window.AppState.currentSessionId || 1;
    const idx = all.findIndex(s => s.id === currId);
    if (idx > 0) {
      window.selectSession(all[idx - 1].id);
    }
  },

  goToNextSession() {
    const all = window.CurriculumRegistry.getAllSessions();
    const currId = window.AppState.currentSessionId || 1;
    const idx = all.findIndex(s => s.id === currId);
    if (idx < all.length - 1) {
      window.selectSession(all[idx + 1].id);
    }
  },

  exportCurriculum() {
    const jsonStr = window.CurriculumRegistry.exportAllData();
    const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Giao_Trinh_AI_Su_Pham_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (window.AppToast) {
      window.AppToast.show("Đã xuất toàn bộ dữ liệu thiết kế ra file JSON thành công!");
    }
  },

  triggerImportJson() {
    const input = document.getElementById("jsonCurriculumFileInput");
    if (input) input.click();
  },

  handleImportFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const success = window.CurriculumRegistry.importAllData(content);
      if (success) {
        if (window.AppToast) {
          window.AppToast.show("Đã nhập dữ liệu giáo trình thành công!");
        }
        window.SessionNav.render();
        if (window.SessionView) {
          window.SessionView.render(window.AppState.currentSessionId);
        }
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  }
};

// Aliases for compatibility
window.SessionSidebar = window.SessionNav;
