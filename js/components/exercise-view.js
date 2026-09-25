/**
 * EXERCISE VIEW COMPONENT (js/components/exercise-view.js)
 * Renders high-impact hands-on challenge cards for university sessions.
 * Hỗ trợ chỉnh sửa trực tiếp nội dung bài tập, hướng dẫn và prompt cho Quản trị viên (Admin).
 */

window.ExerciseView = {
  getExercises(sessionId, defaultExercises) {
    try {
      const stored = localStorage.getItem(`curriculum_exercises_${sessionId}`);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Error reading exercises from localStorage", e);
    }
    return defaultExercises || [];
  },

  saveExercises(sessionId, exercises) {
    try {
      localStorage.setItem(`curriculum_exercises_${sessionId}`, JSON.stringify(exercises));
    } catch (e) {
      console.error("Error saving exercises to localStorage", e);
    }
  },

  resetExercises(sessionId) {
    try {
      localStorage.removeItem(`curriculum_exercises_${sessionId}`);
    } catch (e) {
      console.error("Error resetting exercises", e);
    }
  },

  hasCustomExercises(sessionId) {
    return !!localStorage.getItem(`curriculum_exercises_${sessionId}`);
  },

  toggleEdit(exId) {
    const editPanel = document.getElementById(`ex-edit-${exId}`);
    const viewPanel = document.getElementById(`ex-view-${exId}`);
    if (!editPanel) return;

    const isHidden = editPanel.style.display === "none";
    editPanel.style.display = isHidden ? "block" : "none";
    if (viewPanel) {
      viewPanel.style.display = isHidden ? "none" : "block";
    }
  },

  saveEdit(sessionId, exId) {
    const session = window.CurriculumRegistry.getSession(sessionId);
    if (!session) return;

    let exercises = this.getExercises(sessionId, session.exercises);
    const targetIdx = exercises.findIndex((ex, idx) => (ex.id || `ex_${idx}`) === exId);
    if (targetIdx === -1) return;

    const nameEl = document.getElementById(`ex-edit-name-${exId}`);
    const objEl = document.getElementById(`ex-edit-objective-${exId}`);
    const guideEl = document.getElementById(`ex-edit-guide-${exId}`);
    const promptEl = document.getElementById(`ex-edit-prompt-${exId}`);
    const debriefEl = document.getElementById(`ex-edit-debrief-${exId}`);

    if (nameEl) exercises[targetIdx].name = nameEl.value.trim();
    if (objEl) exercises[targetIdx].objective = objEl.value.trim();
    if (guideEl) exercises[targetIdx].actionGuide = guideEl.value;
    if (promptEl) exercises[targetIdx].promptCode = promptEl.value;
    if (debriefEl) exercises[targetIdx].debrief = debriefEl.value.trim();

    this.saveExercises(sessionId, exercises);

    if (window.AppToast) {
      window.AppToast.show("Đã lưu thay đổi nội dung bài tập thành công!");
    }
    if (window.SessionView) {
      window.SessionView.render(sessionId);
    }
  },

  resetToDefault(sessionId) {
    if (!confirm("Bạn có chắc chắn muốn khôi phục lại nội dung bài tập gốc không?")) return;
    this.resetExercises(sessionId);
    if (window.AppToast) {
      window.AppToast.show("Đã khôi phục các bài tập về mặc định!");
    }
    if (window.SessionView) {
      window.SessionView.render(sessionId);
    }
  },

  render(defaultExercises, sessionId) {
    if (!defaultExercises || defaultExercises.length === 0) return '';
    sessionId = sessionId || window.AppState.currentSessionId;
    const exercises = this.getExercises(sessionId, defaultExercises);
    const ICONS = window.APP_ICONS;
    const isAdmin = window.AuthManager ? window.AuthManager.isAdmin() : false;
    const isCustomized = this.hasCustomExercises(sessionId);

    return `
      <div class="section-block">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <div>
            <h3 class="section-heading" style="margin-bottom: 2px;">
              ${ICONS.clipboard} Các Trạm Bài Tập Thực Chiến & Thử Thách Sư Phạm (${exercises.length} Bài)
              ${isAdmin && isCustomized ? '<span class="tag tag-navy" style="font-size: 0.7rem; margin-left: 6px;">Đã tùy biến</span>' : ''}
            </h3>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0;">
              ${isAdmin ? 'Bấm nút "Sửa bài tập" trên từng thẻ để chỉnh sửa đề bài, mục tiêu hoặc nội dung Prompt tùy ý.' : 'Thực hiện tuần tự từng bài tập theo tiến trình sư phạm.'}
            </p>
          </div>

          ${isAdmin && isCustomized ? `
            <button class="btn btn-secondary btn-sm" onclick="window.ExerciseView.resetToDefault(${sessionId})">
              ${ICONS.rotateCcw} Khôi phục bài tập gốc
            </button>
          ` : ''}
        </div>

        <div class="exercises-container">
          ${exercises.map((ex, idx) => {
            const exId = ex.id || `ex_${idx}`;
            const exDataset = ex.datasetId ? window.CurriculumRegistry.getDataset(ex.datasetId) : null;

            return `
              <div class="exercise-card" id="card-${exId}">
                <!-- Header Row -->
                <div class="exercise-header-row">
                  <div class="exercise-badge-title">
                    <span class="exercise-number-pill">${ex.number}</span>
                    <span class="exercise-title-text">${window.AppUtils.escapeHtml(ex.name)}</span>
                  </div>
                  
                  <div style="display: flex; gap: 6px; align-items: center;">
                    <span class="tag tag-navy">Thực hành 100%</span>
                    ${isAdmin ? `
                      <button class="btn btn-secondary btn-sm" onclick="window.ExerciseView.toggleEdit('${exId}')" title="Chỉnh sửa nội dung bài tập này">
                        ${ICONS.edit} Sửa bài tập
                      </button>
                    ` : ''}
                  </div>
                </div>

                <!-- View Mode -->
                <div class="exercise-view-body" id="ex-view-${exId}">
                  <div class="exercise-objective-box">
                    <strong>Mục tiêu bài học:</strong> ${window.AppUtils.escapeHtml(ex.objective)}
                  </div>

                  ${ex.diagramHtml ? `
                    <div class="exercise-visual-area">
                      ${ex.diagramHtml}
                    </div>
                  ` : ''}

                  ${exDataset ? `
                    <div class="exercise-dataset-strip">
                      <div class="exercise-dataset-label">
                        ${ICONS.fileText} Dữ liệu mẫu cần dùng: <strong>${exDataset.title}</strong>
                      </div>
                      <div style="display: flex; gap: 6px;">
                        <button class="btn btn-secondary btn-sm" onclick="window.openDatasetModal('${exDataset.id}')">
                          ${ICONS.eye} Xem dữ liệu
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="window.copyDatasetContent('${exDataset.id}')">
                          ${ICONS.copy} Sao chép dữ liệu
                        </button>
                      </div>
                    </div>
                  ` : ''}

                  ${ex.actionGuide ? `
                    <div style="background-color: var(--bg-card); border: 1px dashed var(--border-color); border-radius: var(--radius-sm); padding: 12px 14px; font-size: 0.88rem; line-height: 1.6;">
                      <strong style="color: var(--academic-navy); display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                        ${ICONS.check} Các bước chúng ta cùng làm:
                      </strong>
                      ${ex.actionGuide}
                    </div>
                  ` : ''}

                  <div class="prompt-box" style="margin-top: 4px;">
                    <div class="prompt-header">
                      <span class="prompt-label">
                        ${ICONS.fileText} Câu lệnh thực hành mẫu (Prompt)
                      </span>
                      <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(ex.promptCode)}'), 'Đã sao chép Prompt của ${ex.number}!')">
                        ${ICONS.copy} Sao chép Prompt
                      </button>
                    </div>
                    <pre class="prompt-code">${window.AppUtils.escapeHtml(ex.promptCode)}</pre>
                  </div>

                  ${ex.debrief ? `
                    <div class="exercise-debrief-box">
                      <strong>Đúc kết & Lưu ý sư phạm:</strong> ${window.AppUtils.escapeHtml(ex.debrief)}
                    </div>
                  ` : ''}
                </div>

                ${isAdmin ? `
                  <!-- Edit Mode (Hidden) -->
                  <div class="exercise-edit-panel" id="ex-edit-${exId}" style="display: none; padding: 16px; background: #ffffff; border-top: 1px solid var(--border-color); border-radius: 0 0 var(--radius-md) var(--radius-md);">
                    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-sm); padding: 8px 12px; margin-bottom: 12px; font-size: 0.8rem; color: #1e40af;">
                      ${ICONS.shield} <strong>Chế độ Chỉnh sửa Bài tập:</strong> Bạn có thể sửa trực tiếp tên bài, mục tiêu, hướng dẫn, câu lệnh Prompt và đúc kết sư phạm bên dưới.
                    </div>

                    <label class="edit-field-label">Tên bài tập:</label>
                    <input type="text" id="ex-edit-name-${exId}" class="edit-text-input" value="${window.AppUtils.escapeHtml(ex.name)}" />

                    <label class="edit-field-label" style="margin-top: 10px;">Mục tiêu bài học:</label>
                    <input type="text" id="ex-edit-objective-${exId}" class="edit-text-input" value="${window.AppUtils.escapeHtml(ex.objective || '')}" />

                    <label class="edit-field-label" style="margin-top: 10px;">Hướng dẫn các bước thực hiện:</label>
                    <textarea id="ex-edit-guide-${exId}" class="edit-textarea-input" rows="4">${window.AppUtils.escapeHtml(ex.actionGuide || '')}</textarea>

                    <label class="edit-field-label" style="margin-top: 10px;">Nội dung Câu lệnh Prompt:</label>
                    <textarea id="ex-edit-prompt-${exId}" class="edit-textarea-input" rows="8">${window.AppUtils.escapeHtml(ex.promptCode || '')}</textarea>

                    <label class="edit-field-label" style="margin-top: 10px;">Đúc kết & Lưu ý sư phạm:</label>
                    <textarea id="ex-edit-debrief-${exId}" class="edit-textarea-input" rows="3">${window.AppUtils.escapeHtml(ex.debrief || '')}</textarea>

                    <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 14px;">
                      <button class="btn btn-secondary btn-sm" onclick="window.ExerciseView.toggleEdit('${exId}')">
                        Hủy bỏ
                      </button>
                      <button class="btn btn-primary btn-sm" onclick="window.ExerciseView.saveEdit(${sessionId}, '${exId}')">
                        ${ICONS.check} Lưu thay đổi bài tập
                      </button>
                    </div>
                  </div>
                ` : ''}
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }
};
