/**
 * CONTENT EDITOR & MODULAR DESIGNER (js/components/content-editor.js)
 * Full-width Studio for University Lecturers to custom-design session content.
 * Supports: Text, Prompt, Image, Objectives, Timeline, and Exercise blocks.
 */

window.ContentEditor = {
  // ==========================================
  // 1. DATA ACCESS & STORAGE
  // ==========================================

  getBlocks(sessionId) {
    try {
      const stored = localStorage.getItem(`curriculum_blocks_${sessionId}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Error reading blocks from localStorage", e);
    }

    // Fallback to default blocks defined in the session file
    if (window.CurriculumRegistry) {
      const session = window.CurriculumRegistry.getSession(sessionId);
      if (session && Array.isArray(session.blocks) && session.blocks.length > 0) {
        return session.blocks;
      }
    }

    return [];
  },

  saveBlocks(sessionId, blocks) {
    try {
      localStorage.setItem(`curriculum_blocks_${sessionId}`, JSON.stringify(blocks));
    } catch (e) {
      console.error("Error saving blocks", e);
    }
  },

  clearBlocks(sessionId) {
    if (!confirm("Bạn có chắc chắn muốn xóa toàn bộ các khối nội dung của buổi học này để thiết kế lại từ đầu không?")) {
      return;
    }
    try {
      localStorage.removeItem(`curriculum_blocks_${sessionId}`);
      if (window.AppToast) {
        window.AppToast.show("Đã xóa sạch nội dung buổi này!");
      }
      if (window.SessionView) {
        window.SessionView.render(sessionId);
      }
    } catch (e) {
      console.error("Error clearing blocks", e);
    }
  },

  addBlock(sessionId, blockData) {
    const blocks = this.getBlocks(sessionId);
    const newBlock = {
      id: `blk_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      createdAt: new Date().toISOString(),
      ...blockData
    };
    blocks.push(newBlock);
    this.saveBlocks(sessionId, blocks);
    return newBlock;
  },

  updateBlock(sessionId, blockId, updatedData) {
    const blocks = this.getBlocks(sessionId);
    const idx = blocks.findIndex(b => b.id === blockId);
    if (idx !== -1) {
      blocks[idx] = { ...blocks[idx], ...updatedData };
      this.saveBlocks(sessionId, blocks);
      return true;
    }
    return false;
  },

  deleteBlock(sessionId, blockId) {
    if (!confirm("Bạn có chắc chắn muốn xóa khối nội dung này không?")) return;
    let blocks = this.getBlocks(sessionId);
    blocks = blocks.filter(b => b.id !== blockId);
    this.saveBlocks(sessionId, blocks);

    if (window.AppToast) {
      window.AppToast.show("Đã xóa khối nội dung!");
    }
    if (window.SessionView) {
      window.SessionView.render(sessionId);
    }
  },

  // ==========================================
  // 2. MAIN RENDERING
  // ==========================================

  renderDesignerSection(session) {
    const ICONS = window.APP_ICONS;
    const blocks = this.getBlocks(session.id);
    const isAdmin = window.AuthManager ? window.AuthManager.isAdmin() : true;

    return `
      <section class="session-designer-studio" id="sessionDesignerStudio">
        
        <!-- Action Toolbar for Adding Blocks -->
        <div class="designer-toolbar">
          <div class="toolbar-left">
            <span class="toolbar-label">${ICONS.layers} Khối nội dung (${blocks.length})</span>
            <span class="toolbar-hint">Bấm vào nút để thêm khối hoặc kéo thả ⋮⋮ để sắp xếp</span>
          </div>

          <div class="toolbar-buttons">
            <button class="btn btn-primary btn-sm" onclick="window.ContentEditor.openAddBlockModal(${session.id}, 'text')">
              ${ICONS.fileText} + Khối Văn Bản
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.openAddBlockModal(${session.id}, 'prompt')">
              ${ICONS.clipboard} + Khối Prompt AI
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.openAddBlockModal(${session.id}, 'image')">
              ${ICONS.image} + Khối Hình Ảnh
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.openAddBlockModal(${session.id}, 'objectives')">
              ${ICONS.award} + Mục Tiêu Chuẩn
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.openAddBlockModal(${session.id}, 'timeline')">
              ${ICONS.clock} + Tiến Trình 90'
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.openAddBlockModal(${session.id}, 'exercise')">
              ${ICONS.check} + Bài Tập
            </button>

            ${blocks.length > 0 ? `
              <button class="btn btn-secondary btn-sm" style="color: #dc2626; border-color: #fca5a5;" onclick="window.ContentEditor.clearBlocks(${session.id})" title="Xóa toàn bộ khối của buổi này">
                ${ICONS.trash} Xóa trắng
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Blocks Container -->
        <div class="content-blocks-stream" id="contentBlocksStream">
          ${blocks.length === 0 ? this.renderEmptyState(session.id) : blocks.map((block, idx) => {
            return this.renderBlockItem(session.id, block, idx, isAdmin);
          }).join("")}
        </div>

      </section>
    `;
  },

  // Empty State
  renderEmptyState(sessionId) {
    const ICONS = window.APP_ICONS;
    return `
      <div class="designer-empty-state">
        <div class="empty-state-icon">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </div>
        <h3 class="empty-state-title">Buổi học này chưa có nội dung</h3>
        <p class="empty-state-desc">
          Toàn bộ nội dung mẫu cũ đã được dọn sạch. Bạn hãy tự do thiết kế buổi học theo giáo trình riêng của mình bằng cách thêm các khối dưới đây:
        </p>

        <div class="empty-state-action-grid">
          <div class="action-card" onclick="window.ContentEditor.openAddBlockModal(${sessionId}, 'text')">
            <div class="action-card-icon" style="background: #e0f2fe; color: #0284c7;">${ICONS.fileText}</div>
            <div class="action-card-text">
              <strong>Khối Văn Bản / Bài Giảng</strong>
              <span>Soạn thảo lý thuyết, kiến thức chuyên môn hoặc hướng dẫn</span>
            </div>
          </div>

          <div class="action-card" onclick="window.ContentEditor.openAddBlockModal(${sessionId}, 'prompt')">
            <div class="action-card-icon" style="background: #fef3c7; color: #d97706;">${ICONS.clipboard}</div>
            <div class="action-card-text">
              <strong>Khối Câu Lệnh Prompt AI</strong>
              <span>Soạn câu lệnh thực hành chuẩn kèm nút sao chép 1 chạm</span>
            </div>
          </div>

          <div class="action-card" onclick="window.ContentEditor.openAddBlockModal(${sessionId}, 'image')">
            <div class="action-card-icon" style="background: #f3e8ff; color: #9333ea;">${ICONS.image}</div>
            <div class="action-card-text">
              <strong>Khối Hình Ảnh Minh Họa</strong>
              <span>Tải ảnh từ máy tính hoặc dán link ảnh minh họa học liệu</span>
            </div>
          </div>

          <div class="action-card" onclick="window.ContentEditor.openAddBlockModal(${sessionId}, 'objectives')">
            <div class="action-card-icon" style="background: #dcfce7; color: #16a34a;">${ICONS.award}</div>
            <div class="action-card-text">
              <strong>Mục Tiêu Chuẩn Đầu Ra</strong>
              <span>Danh sách các năng lực sinh viên cần đạt được</span>
            </div>
          </div>

          <div class="action-card" onclick="window.ContentEditor.openAddBlockModal(${sessionId}, 'timeline')">
            <div class="action-card-icon" style="background: #ffedd5; color: #c2410c;">${ICONS.clock}</div>
            <div class="action-card-text">
              <strong>Tiến Trình 90 Phút</strong>
              <span>Phân bổ thời lượng các chặng lên lớp</span>
            </div>
          </div>

          <div class="action-card" onclick="window.ContentEditor.openAddBlockModal(${sessionId}, 'exercise')">
            <div class="action-card-icon" style="background: #e2e8f0; color: #334155;">${ICONS.check}</div>
            <div class="action-card-text">
              <strong>Bài Tập Thực Hành</strong>
              <span>Đề bài và nhiệm vụ sinh viên cần hoàn thành</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Render individual block router
  renderBlockItem(sessionId, block, idx, isAdmin) {
    const ICONS = window.APP_ICONS;
    let badgeClass = "badge-text";
    let badgeText = "VĂN BẢN";
    let blockBodyHtml = "";

    switch (block.type) {
      case "prompt":
        badgeClass = "badge-prompt";
        badgeText = "PROMPT AI";
        blockBodyHtml = `
          <div class="block-view-prompt">
            <pre class="prompt-code">${window.AppUtils.escapeHtml(block.code || '')}</pre>
          </div>
        `;
        break;

      case "image":
        badgeClass = "badge-image";
        badgeText = "HÌNH ẢNH";
        blockBodyHtml = `
          <div class="block-view-image">
            <div class="image-preview-wrap">
              <img src="${window.AppUtils.escapeHtml(block.url || '')}" alt="${window.AppUtils.escapeHtml(block.title || '')}" class="block-rendered-img" />
            </div>
            ${block.caption ? `<div class="image-caption-text">${window.AppUtils.escapeHtml(block.caption)}</div>` : ''}
          </div>
        `;
        break;

      case "objectives":
        badgeClass = "badge-objectives";
        badgeText = "MỤC TIÊU";
        const items = Array.isArray(block.items) ? block.items : (block.content ? block.content.split("\n").filter(Boolean) : []);
        blockBodyHtml = `
          <ul class="block-objectives-list">
            ${items.map(it => `
              <li>
                <span class="bullet-check">${ICONS.check}</span>
                <span>${window.AppUtils.escapeHtml(it.trim())}</span>
              </li>
            `).join("")}
          </ul>
        `;
        break;

      case "timeline":
        badgeClass = "badge-timeline";
        badgeText = "TIẾN TRÌNH";
        const stages = Array.isArray(block.stages) ? block.stages : [];
        blockBodyHtml = `
          <div class="block-timeline-grid">
            ${stages.map((st, sIdx) => `
              <div class="timeline-stage-card">
                <span class="stage-time-tag">${window.AppUtils.escapeHtml(st.time || `Phần ${sIdx + 1}`)}</span>
                <strong class="stage-title">${window.AppUtils.escapeHtml(st.name || '')}</strong>
                <p class="stage-desc">${window.AppUtils.escapeHtml(st.detail || '')}</p>
              </div>
            `).join("")}
          </div>
        `;
        break;

      case "exercise":
        badgeClass = "badge-exercise";
        badgeText = "BÀI TẬP";
        blockBodyHtml = `
          <div class="block-view-exercise">
            <div class="exercise-task-box">
              <p style="white-space: pre-line; margin: 0; line-height: 1.6;">${window.AppUtils.escapeHtml(block.content || '')}</p>
            </div>
          </div>
        `;
        break;

      case "text":
      default:
        badgeClass = "badge-text";
        badgeText = "BÀI HỌC / VĂN BẢN";
        blockBodyHtml = `
          <div class="block-view-text">
            <div class="article-formatted-text" style="white-space: pre-line; line-height: 1.7; font-size: 0.98rem; color: var(--text-secondary);">
              ${window.AppUtils.escapeHtml(block.content || '')}
            </div>
          </div>
        `;
        break;
    }

    return `
      <div class="content-block" id="block-${block.id}" data-block-id="${block.id}" data-block-index="${idx}">
        <div class="content-block-header">
          <div class="block-header-left">
            ${isAdmin ? `
              <span class="block-drag-handle" title="Bấm giữ để kéo thả thay đổi vị trí khối">
                ${ICONS.dragHandle || '⋮⋮'}
              </span>
            ` : ''}
            <span class="block-badge ${badgeClass}">${badgeText}</span>
            <h4 class="block-title">${window.AppUtils.escapeHtml(block.title || 'Khối nội dung')}</h4>
          </div>

          <div class="block-header-actions">
            ${block.type === 'prompt' ? `
              <button class="btn btn-secondary btn-sm" onclick="window.copyTextToClipboard(decodeURIComponent('${encodeURIComponent(block.code || '')}'), 'Đã sao chép Prompt!')">
                ${ICONS.copy} Sao chép Prompt
              </button>
            ` : ''}

            ${block.type === 'image' && block.url ? `
              <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.openLightbox('${window.AppUtils.escapeHtml(block.url)}', '${window.AppUtils.escapeHtml(block.title || '')}')">
                ${ICONS.eye} Phóng to
              </button>
            ` : ''}

            ${isAdmin ? `
              <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.openEditBlockModal(${sessionId}, '${block.id}')">
                ${ICONS.edit} Sửa
              </button>
              <button class="btn btn-secondary btn-sm btn-icon-only" onclick="window.ContentEditor.deleteBlock(${sessionId}, '${block.id}')" title="Xóa khối này" style="color: #dc2626;">
                ${ICONS.trash}
              </button>
            ` : ''}
          </div>
        </div>

        <div class="block-body-container">
          ${blockBodyHtml}
        </div>
      </div>
    `;
  },

  // ==========================================
  // 3. ADD / EDIT BLOCK MODALS
  // ==========================================

  openAddBlockModal(sessionId, blockType) {
    let modalEl = document.getElementById("designerModal");
    if (!modalEl) {
      modalEl = document.createElement("div");
      modalEl.id = "designerModal";
      modalEl.className = "modal-backdrop";
      document.body.appendChild(modalEl);
    }

    const ICONS = window.APP_ICONS;
    let typeTitle = "Thêm Khối Nội Dung Mới";
    let fieldsHtml = "";

    if (blockType === "text") {
      typeTitle = "Thêm Khối Văn Bản / Bài Học";
      fieldsHtml = `
        <label class="edit-field-label">Tiêu đề khối bài giảng:</label>
        <input type="text" id="blkInputTitle" class="edit-text-input" placeholder="Ví dụ: Giới thiệu nội dung trọng tâm buổi học" />

        <label class="edit-field-label" style="margin-top: 14px;">Nội dung chi tiết (hỗ trợ xuống dòng, gạch đầu dòng):</label>
        <textarea id="blkInputContent" class="edit-textarea-input" rows="8" placeholder="Nhập lý thuyết, ghi chú bài giảng, kiến thức sư phạm..."></textarea>
      `;
    } else if (blockType === "prompt") {
      typeTitle = "Thêm Khối Câu Lệnh AI (Prompt)";
      fieldsHtml = `
        <label class="edit-field-label">Tên câu lệnh / Mục đích:</label>
        <input type="text" id="blkInputTitle" class="edit-text-input" placeholder="Ví dụ: Prompt 1: Yêu cầu AI tóm tắt tài liệu PDF" />

        <label class="edit-field-label" style="margin-top: 14px;">Nội dung câu lệnh (Prompt Template):</label>
        <textarea id="blkInputCode" class="edit-textarea-input prompt-font" rows="8" placeholder="Dán nội dung Prompt mẫu vào đây..."></textarea>
      `;
    } else if (blockType === "image") {
      typeTitle = "Thêm Khối Hình Ảnh Minh Họa";
      fieldsHtml = `
        <label class="edit-field-label">Tiêu đề hình ảnh:</label>
        <input type="text" id="blkInputTitle" class="edit-text-input" placeholder="Ví dụ: Sơ đồ tư duy tiến trình giảng dạy" />

        <div style="margin-top: 14px;">
          <label class="edit-field-label">Cách 1: Tải ảnh trực tiếp từ máy tính</label>
          <input type="file" id="blkFileInput" accept="image/*" class="edit-text-input" style="padding: 6px;" onchange="window.ContentEditor.handleLocalImageUpload(event)" />
        </div>

        <div style="margin-top: 14px;">
          <label class="edit-field-label">Cách 2: Hoặc dán đường dẫn ảnh (URL)</label>
          <input type="text" id="blkInputUrl" class="edit-text-input" placeholder="https://example.com/image.jpg hoặc assets/images/..." />
        </div>

        <div id="imagePreviewContainer" style="display: none; margin-top: 14px; text-align: center;">
          <img id="imagePreviewEl" src="" style="max-height: 180px; max-width: 100%; border-radius: var(--radius-sm); border: 1px solid #cbd5e1;" />
        </div>

        <label class="edit-field-label" style="margin-top: 14px;">Chú thích chân ảnh (Caption):</label>
        <input type="text" id="blkInputCaption" class="edit-text-input" placeholder="Ví dụ: Hình 1. Mô hình tương tác giữa giảng viên và công cụ AI" />
      `;
    } else if (blockType === "objectives") {
      typeTitle = "Thêm Khối Mục Tiêu Chuẩn Đầu Ra";
      fieldsHtml = `
        <label class="edit-field-label">Tiêu đề khối:</label>
        <input type="text" id="blkInputTitle" class="edit-text-input" value="Mục Tiêu Đầu Ra Buổi Học" />

        <label class="edit-field-label" style="margin-top: 14px;">Danh sách mục tiêu (mỗi dòng 1 mục tiêu):</label>
        <textarea id="blkInputObjectives" class="edit-textarea-input" rows="6" placeholder="Hiểu được bản chất...&#10;Vận dụng được AI để...&#10;Thiết kế được..."></textarea>
      `;
    } else if (blockType === "timeline") {
      typeTitle = "Thêm Khối Tiến Trình Giảng Dạy (Timeline)";
      fieldsHtml = `
        <label class="edit-field-label">Tiêu đề khối:</label>
        <input type="text" id="blkInputTitle" class="edit-text-input" value="Tiến Trình Sư Phạm 90 Phút" />

        <label class="edit-field-label" style="margin-top: 14px;">Các chặng tiến trình (Định dạng: Thời lượng | Tên chặng | Chi tiết, mỗi dòng 1 chặng):</label>
        <textarea id="blkInputTimeline" class="edit-textarea-input" rows="6" placeholder="15 phút | Khởi động & Nêu vấn đề | Trình bày lý do môn học cần AI&#10;50 phút | Thực hành trực tiếp | Hướng dẫn thao tác từng bước&#10;25 phút | Đánh giá & Rút kinh nghiệm | Nhận xét sản phẩm sinh viên"></textarea>
      `;
    } else if (blockType === "exercise") {
      typeTitle = "Thêm Khối Bài Tập Thực Hành";
      fieldsHtml = `
        <label class="edit-field-label">Tiêu đề bài tập:</label>
        <input type="text" id="blkInputTitle" class="edit-text-input" placeholder="Ví dụ: Bài tập số 1: Tự tạo bộ câu hỏi trắc nghiệm" />

        <label class="edit-field-label" style="margin-top: 14px;">Đề bài & Yêu cầu thực hiện:</label>
        <textarea id="blkInputContent" class="edit-textarea-input" rows="6" placeholder="Ghi rõ nhiệm vụ học viên cần làm, tiêu chí đánh giá hoặc sản phẩm cần nộp..."></textarea>
      `;
    }

    modalEl.innerHTML = `
      <div class="modal-content" style="max-width: 650px;">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-title">${typeTitle}</span>
          </div>
          <button class="modal-close-btn" onclick="window.ContentEditor.closeModal()">✕</button>
        </div>

        <div class="modal-body">
          ${fieldsHtml}
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.closeModal()">Hủy</button>
          <button class="btn btn-primary btn-sm" onclick="window.ContentEditor.saveNewBlock(${sessionId}, '${blockType}')">
            ${ICONS.check} Lưu khối vào buổi học
          </button>
        </div>
      </div>
    `;

    modalEl.classList.add("active");
  },

  handleLocalImageUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Url = e.target.result;
      const urlInput = document.getElementById("blkInputUrl");
      const previewBox = document.getElementById("imagePreviewContainer");
      const previewImg = document.getElementById("imagePreviewEl");

      if (urlInput) urlInput.value = base64Url;
      if (previewBox && previewImg) {
        previewImg.src = base64Url;
        previewBox.style.display = "block";
      }
    };
    reader.readAsDataURL(file);
  },

  saveNewBlock(sessionId, blockType) {
    const title = (document.getElementById("blkInputTitle")?.value || "").trim();
    let blockData = { type: blockType, title: title || "Khối nội dung" };

    if (blockType === "text") {
      blockData.content = (document.getElementById("blkInputContent")?.value || "").trim();
    } else if (blockType === "prompt") {
      blockData.code = (document.getElementById("blkInputCode")?.value || "").trim();
    } else if (blockType === "image") {
      blockData.url = (document.getElementById("blkInputUrl")?.value || "").trim();
      blockData.caption = (document.getElementById("blkInputCaption")?.value || "").trim();
      if (!blockData.url) {
        alert("Vui lòng tải ảnh lên hoặc dán đường dẫn ảnh!");
        return;
      }
    } else if (blockType === "objectives") {
      const rawText = (document.getElementById("blkInputObjectives")?.value || "").trim();
      blockData.items = rawText.split("\n").map(s => s.trim()).filter(Boolean);
    } else if (blockType === "timeline") {
      const rawText = (document.getElementById("blkInputTimeline")?.value || "").trim();
      const lines = rawText.split("\n").filter(Boolean);
      blockData.stages = lines.map(line => {
        const parts = line.split("|").map(p => p.trim());
        return {
          time: parts[0] || "",
          name: parts[1] || "",
          detail: parts[2] || ""
        };
      });
    } else if (blockType === "exercise") {
      blockData.content = (document.getElementById("blkInputContent")?.value || "").trim();
    }

    this.addBlock(sessionId, blockData);
    this.closeModal();

    if (window.AppToast) {
      window.AppToast.show("Đã thêm khối nội dung thành công!");
    }
    if (window.SessionView) {
      window.SessionView.render(sessionId);
    }
  },

  openEditBlockModal(sessionId, blockId) {
    const blocks = this.getBlocks(sessionId);
    const block = blocks.find(b => b.id === blockId);
    if (!block) return;

    let modalEl = document.getElementById("designerModal");
    if (!modalEl) {
      modalEl = document.createElement("div");
      modalEl.id = "designerModal";
      modalEl.className = "modal-backdrop";
      document.body.appendChild(modalEl);
    }

    const ICONS = window.APP_ICONS;
    let fieldsHtml = `
      <label class="edit-field-label">Tiêu đề khối:</label>
      <input type="text" id="blkEditTitle" class="edit-text-input" value="${window.AppUtils.escapeHtml(block.title || '')}" />
    `;

    if (block.type === "text" || block.type === "exercise") {
      fieldsHtml += `
        <label class="edit-field-label" style="margin-top: 14px;">Nội dung:</label>
        <textarea id="blkEditContent" class="edit-textarea-input" rows="8">${window.AppUtils.escapeHtml(block.content || '')}</textarea>
      `;
    } else if (block.type === "prompt") {
      fieldsHtml += `
        <label class="edit-field-label" style="margin-top: 14px;">Nội dung câu lệnh (Prompt):</label>
        <textarea id="blkEditCode" class="edit-textarea-input prompt-font" rows="8">${window.AppUtils.escapeHtml(block.code || '')}</textarea>
      `;
    } else if (block.type === "image") {
      fieldsHtml += `
        <div style="margin-top: 14px;">
          <label class="edit-field-label">Đường dẫn ảnh (URL hoặc Base64):</label>
          <input type="text" id="blkEditUrl" class="edit-text-input" value="${window.AppUtils.escapeHtml(block.url || '')}" />
        </div>
        <div style="margin-top: 14px;">
          <label class="edit-field-label">Chú thích chân ảnh:</label>
          <input type="text" id="blkEditCaption" class="edit-text-input" value="${window.AppUtils.escapeHtml(block.caption || '')}" />
        </div>
      `;
    } else if (block.type === "objectives") {
      const itemsText = Array.isArray(block.items) ? block.items.join("\n") : (block.content || '');
      fieldsHtml += `
        <label class="edit-field-label" style="margin-top: 14px;">Mục tiêu (mỗi dòng 1 mục tiêu):</label>
        <textarea id="blkEditObjectives" class="edit-textarea-input" rows="6">${window.AppUtils.escapeHtml(itemsText)}</textarea>
      `;
    } else if (block.type === "timeline") {
      const stagesText = Array.isArray(block.stages) ? block.stages.map(s => `${s.time} | ${s.name} | ${s.detail}`).join("\n") : '';
      fieldsHtml += `
        <label class="edit-field-label" style="margin-top: 14px;">Tiến trình (Thời lượng | Tên | Chi tiết):</label>
        <textarea id="blkEditTimeline" class="edit-textarea-input" rows="6">${window.AppUtils.escapeHtml(stagesText)}</textarea>
      `;
    }

    modalEl.innerHTML = `
      <div class="modal-content" style="max-width: 650px;">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-title">Chỉnh Sửa Khối Nội Dung</span>
          </div>
          <button class="modal-close-btn" onclick="window.ContentEditor.closeModal()">✕</button>
        </div>

        <div class="modal-body">
          ${fieldsHtml}
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary btn-sm" onclick="window.ContentEditor.closeModal()">Hủy</button>
          <button class="btn btn-primary btn-sm" onclick="window.ContentEditor.saveEditBlock(${sessionId}, '${block.id}')">
            ${ICONS.check} Lưu thay đổi
          </button>
        </div>
      </div>
    `;

    modalEl.classList.add("active");
  },

  saveEditBlock(sessionId, blockId) {
    const blocks = this.getBlocks(sessionId);
    const block = blocks.find(b => b.id === blockId);
    if (!block) return;

    const title = (document.getElementById("blkEditTitle")?.value || "").trim();
    block.title = title || block.title;

    if (block.type === "text" || block.type === "exercise") {
      block.content = (document.getElementById("blkEditContent")?.value || "").trim();
    } else if (block.type === "prompt") {
      block.code = (document.getElementById("blkEditCode")?.value || "").trim();
    } else if (block.type === "image") {
      block.url = (document.getElementById("blkEditUrl")?.value || "").trim();
      block.caption = (document.getElementById("blkEditCaption")?.value || "").trim();
    } else if (block.type === "objectives") {
      const rawText = (document.getElementById("blkEditObjectives")?.value || "").trim();
      block.items = rawText.split("\n").map(s => s.trim()).filter(Boolean);
    } else if (block.type === "timeline") {
      const rawText = (document.getElementById("blkEditTimeline")?.value || "").trim();
      block.stages = rawText.split("\n").filter(Boolean).map(line => {
        const parts = line.split("|").map(p => p.trim());
        return {
          time: parts[0] || "",
          name: parts[1] || "",
          detail: parts[2] || ""
        };
      });
    }

    this.updateBlock(sessionId, blockId, block);
    this.closeModal();

    if (window.AppToast) {
      window.AppToast.show("Đã cập nhật khối nội dung!");
    }
    if (window.SessionView) {
      window.SessionView.render(sessionId);
    }
  },

  closeModal() {
    const modalEl = document.getElementById("designerModal");
    if (modalEl) modalEl.classList.remove("active");
  },

  openLightbox(url, caption) {
    let lb = document.getElementById("imgLightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "imgLightbox";
      lb.className = "modal-backdrop active";
      document.body.appendChild(lb);
    }

    lb.innerHTML = `
      <div style="position: relative; max-width: 90vw; max-height: 90vh; display: flex; flex-direction: column; align-items: center;">
        <button style="position: absolute; top: -40px; right: 0; background: none; border: none; color: #fff; font-size: 2rem; cursor: pointer;" onclick="document.getElementById('imgLightbox').remove()">✕</button>
        <img src="${url}" style="max-width: 100%; max-height: 80vh; border-radius: var(--radius-sm); box-shadow: var(--shadow-lg);" />
        ${caption ? `<div style="color: #fff; margin-top: 12px; font-size: 1rem; text-align: center;">${caption}</div>` : ''}
      </div>
    `;
    lb.onclick = (e) => {
      if (e.target === lb) lb.remove();
    };
  }
};
