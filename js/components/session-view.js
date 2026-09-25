/**
 * SESSION VIEW & DESIGN CANVAS (js/components/session-view.js)
 * Full-width canvas for university sessions.
 */

window.SessionView = {
  render(sessionId) {
    const container = document.getElementById("sessionDetailView");
    const session = window.CurriculumRegistry.getSession(sessionId);
    if (!container || !session) return;

    const ICONS = window.APP_ICONS;
    const isAdmin = window.AuthManager ? window.AuthManager.isAdmin() : true;

    // Build tools tags
    const toolsList = (session.tools && session.tools.length > 0) 
      ? session.tools.map(t => `<span class="tag tag-navy">${t}</span>`).join("")
      : `<span style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Chưa gán công cụ cụ thể</span>`;

    const allSessions = window.CurriculumRegistry ? window.CurriculumRegistry.getAllSessions() : [];
    const totalCount = allSessions.length || 16;

    container.innerHTML = `
      <!-- Full-Width Session Header -->
      <div class="session-detail-header">
        <div class="detail-top-meta">
          <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
            <span class="session-badge-pill">
              ${ICONS.calendar} BUỔI ${session.number} / ${totalCount}
            </span>
            <span class="session-duration-tag">
              ${ICONS.clock} Thời lượng: <strong>${session.duration || '180 phút (3 giờ)'}</strong>
            </span>
          </div>

          ${isAdmin ? `
            <div class="header-action-buttons">
              <button class="btn btn-secondary btn-sm" onclick="window.SessionView.openEditSessionMetaModal(${session.id})">
                ${ICONS.edit} Chỉnh sửa thông tin buổi học
              </button>
            </div>
          ` : ''}
        </div>

        <h1 class="session-main-title">${window.AppUtils.escapeHtml(session.title)}</h1>

        <div class="session-overview-box">
          ${session.overview 
            ? `<p class="session-overview-text">${window.AppUtils.escapeHtml(session.overview)}</p>` 
            : `<p class="session-overview-placeholder">Chưa có mô tả tóm tắt cho buổi học này. Bấm vào nút <strong>"Chỉnh sửa thông tin buổi học"</strong> phía trên để thêm giới thiệu hoặc định hướng sư phạm.</p>`
          }
        </div>

        <div class="session-tools-row">
          <span class="tools-label">Công cụ AI trọng tâm:</span>
          <div class="tools-tags-wrap">${toolsList}</div>
        </div>
      </div>

      <!-- Direct Academic Article Content or Designer Studio -->
      <div id="sessionContentContainer" class="session-content-container">
        ${session.articleHtml 
          ? session.articleHtml 
          : (window.ContentEditor ? window.ContentEditor.renderDesignerSection(session) : '')
        }
      </div>
    `;

    // If session has direct article, clean any legacy blocks cache for this session
    if (session.articleHtml) {
      localStorage.removeItem(`curriculum_blocks_${sessionId}`);
    }

    // Initialize drag & drop for blocks if in designer mode
    if (!session.articleHtml && window.DragDropManager) {
      window.DragDropManager.initBlocksDrag(sessionId);
    }
  },

  // Modal to edit session meta (title, duration, tools, overview)
  openEditSessionMetaModal(sessionId) {
    const session = window.CurriculumRegistry.getSession(sessionId);
    if (!session) return;

    let modalEl = document.getElementById("sessionMetaModal");
    if (!modalEl) {
      modalEl = document.createElement("div");
      modalEl.id = "sessionMetaModal";
      modalEl.className = "modal-backdrop";
      document.body.appendChild(modalEl);
    }

    const ICONS = window.APP_ICONS;
    const toolsStr = (session.tools || []).join(", ");

    modalEl.innerHTML = `
      <div class="modal-content" style="max-width: 620px;">
        <div class="modal-header">
          <div class="modal-title-wrap">
            ${ICONS.edit}
            <span class="modal-title">Chỉnh Sửa Thông Tin Buổi ${session.number}</span>
          </div>
          <button class="modal-close-btn" onclick="window.SessionView.closeMetaModal()">✕</button>
        </div>

        <div class="modal-body">
          <label class="edit-field-label">Tên / Tiêu đề buổi học:</label>
          <input type="text" id="editSessionTitle" class="edit-text-input" value="${window.AppUtils.escapeHtml(session.title || '')}" />

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 14px;">
            <div>
              <label class="edit-field-label">Thời lượng:</label>
              <input type="text" id="editSessionDuration" class="edit-text-input" value="${window.AppUtils.escapeHtml(session.duration || '90 phút')}" />
            </div>
            <div>
              <label class="edit-field-label">Công cụ AI (cách nhau bằng dấu phẩy):</label>
              <input type="text" id="editSessionTools" class="edit-text-input" value="${window.AppUtils.escapeHtml(toolsStr)}" placeholder="ChatGPT, Gemini, Gamma..." />
            </div>
          </div>

          <label class="edit-field-label" style="margin-top: 14px;">Tóm tắt / Giới thiệu buổi học (Overview):</label>
          <textarea id="editSessionOverview" class="edit-textarea-input" rows="5" placeholder="Nhập mục tiêu khái quát, phương pháp hoặc định hướng sư phạm cho buổi này...">${window.AppUtils.escapeHtml(session.overview || '')}</textarea>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" onclick="window.SessionView.closeMetaModal()">Hủy</button>
          <button class="btn btn-primary btn-sm" onclick="window.SessionView.saveSessionMeta(${sessionId})">
            ${ICONS.check} Lưu thông tin buổi học
          </button>
        </div>
      </div>
    `;

    modalEl.classList.add("active");
  },

  saveSessionMeta(sessionId) {
    const title = (document.getElementById("editSessionTitle")?.value || "").trim();
    const duration = (document.getElementById("editSessionDuration")?.value || "").trim();
    const toolsStr = (document.getElementById("editSessionTools")?.value || "").trim();
    const overview = (document.getElementById("editSessionOverview")?.value || "").trim();

    const tools = toolsStr ? toolsStr.split(",").map(t => t.trim()).filter(Boolean) : [];

    window.CurriculumRegistry.saveSessionMeta(sessionId, {
      title: title || `Buổi ${sessionId}`,
      duration: duration || "90 phút",
      tools: tools,
      overview: overview
    });

    this.closeMetaModal();

    if (window.AppToast) {
      window.AppToast.show("Đã lưu thông tin buổi học!");
    }

    // Refresh Navigation Bar and View
    if (window.SessionNav) {
      window.SessionNav.render();
    }
    this.render(sessionId);
  },

  closeMetaModal() {
    const modalEl = document.getElementById("sessionMetaModal");
    if (modalEl) modalEl.classList.remove("active");
  }
};

window.selectSession = function(sessionId) {
  window.AppState.currentSessionId = Number(sessionId);
  if (window.SessionNav) window.SessionNav.render();
  if (window.SessionView) window.SessionView.render(sessionId);

  const container = document.getElementById("curriculumSection");
  if (container) {
    const navOffset = container.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: Math.max(0, navOffset), behavior: "smooth" });
  }
};
