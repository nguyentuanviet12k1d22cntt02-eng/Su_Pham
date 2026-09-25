/**
 * DRAG & DROP MANAGER (js/core/drag-drop.js)
 * Enables seamless reordering of individual content blocks (prompts and images)
 * and session-level sections.
 */

window.DragDropManager = {
  _draggedBlockIndex: null,
  _draggedSectionKey: null,

  // ==========================================
  // 1. INDIVIDUAL CONTENT BLOCKS (PROMPTS & IMAGES)
  // ==========================================

  initBlocksDrag(sessionId) {
    const isAdmin = window.AuthManager ? window.AuthManager.isAdmin() : false;
    if (!isAdmin) return;

    const container = document.querySelector(".content-blocks-stream");
    if (!container) return;

    const blocks = container.querySelectorAll(".content-block");
    blocks.forEach((block, idx) => {
      block.setAttribute("draggable", "true");
      block.dataset.blockIndex = idx;

      block.addEventListener("dragstart", (e) => {
        window.DragDropManager._draggedBlockIndex = idx;
        block.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", `block:${idx}`);
      });

      block.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        const draggingEl = container.querySelector(".content-block.dragging");
        if (!draggingEl || draggingEl === block) return;

        const rect = block.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (e.clientY < midY) {
          block.classList.add("drag-over-top");
          block.classList.remove("drag-over-bottom");
        } else {
          block.classList.add("drag-over-bottom");
          block.classList.remove("drag-over-top");
        }
      });

      block.addEventListener("dragleave", () => {
        block.classList.remove("drag-over-top", "drag-over-bottom");
      });

      block.addEventListener("drop", (e) => {
        e.preventDefault();
        block.classList.remove("drag-over-top", "drag-over-bottom");
        const fromIdx = window.DragDropManager._draggedBlockIndex;
        if (fromIdx === null || fromIdx === undefined) return;

        let toIdx = Number(block.dataset.blockIndex);
        if (fromIdx !== toIdx) {
          window.DragDropManager.reorderBlocks(sessionId, fromIdx, toIdx);
        }
      });

      block.addEventListener("dragend", () => {
        block.classList.remove("dragging", "drag-over-top", "drag-over-bottom");
        window.DragDropManager._draggedBlockIndex = null;
      });
    });
  },

  reorderBlocks(sessionId, fromIdx, toIdx) {
    if (!window.ContentEditor) return;
    let blocks = window.ContentEditor.getBlocks(sessionId);

    if (fromIdx >= 0 && toIdx >= 0 && fromIdx < blocks.length && toIdx < blocks.length) {
      const [moved] = blocks.splice(fromIdx, 1);
      blocks.splice(toIdx, 0, moved);
      window.ContentEditor.saveBlocks(sessionId, blocks);

      if (window.AppToast) {
        window.AppToast.show("Đã thay đổi vị trí khối!");
      }
      if (window.SessionView) {
        window.SessionView.render(sessionId);
      }
    }
  },

  // Legacy compat aliases
  initPromptsDrag(sessionId) {
    this.initBlocksDrag(sessionId);
  },

  initImagesDrag(sessionId) {
    this.initBlocksDrag(sessionId);
  },

  // ==========================================
  // 2. SESSION SECTIONS DRAG & DROP
  // ==========================================

  getSectionsOrder(sessionId) {
    const defaultOrder = [
      "timeline",
      "framework",
      "objectives",
      "steps",
      "exercises",
      "academicBlocks",
      "dataset"
    ];
    try {
      const stored = localStorage.getItem(`curriculum_sections_order_${sessionId}`);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Error reading sections order", e);
    }
    return defaultOrder;
  },

  saveSectionsOrder(sessionId, order) {
    try {
      localStorage.setItem(`curriculum_sections_order_${sessionId}`, JSON.stringify(order));
    } catch (e) {
      console.error("Error saving sections order", e);
    }
  },

  resetSectionsOrder(sessionId) {
    try {
      localStorage.removeItem(`curriculum_sections_order_${sessionId}`);
    } catch (e) {
      console.error("Error resetting sections order", e);
    }
  },

  hasCustomSectionsOrder(sessionId) {
    return !!localStorage.getItem(`curriculum_sections_order_${sessionId}`);
  },

  initSectionsDrag(sessionId) {
    const isAdmin = window.AuthManager ? window.AuthManager.isAdmin() : false;
    if (!isAdmin) return;

    const container = document.getElementById("sessionSectionsContainer");
    if (!container) return;

    const sections = container.querySelectorAll(".draggable-section");
    sections.forEach((sec) => {
      const handle = sec.querySelector(".section-drag-handle");
      if (!handle) return;

      sec.setAttribute("draggable", "true");

      sec.addEventListener("dragstart", (e) => {
        window.DragDropManager._draggedSectionKey = sec.dataset.sectionKey;
        sec.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", `sec:${sec.dataset.sectionKey}`);
      });

      sec.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        const draggingEl = container.querySelector(".draggable-section.dragging");
        if (!draggingEl || draggingEl === sec) return;

        const rect = sec.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;
        if (e.clientY < midY) {
          sec.classList.add("drag-over-top");
          sec.classList.remove("drag-over-bottom");
        } else {
          sec.classList.add("drag-over-bottom");
          sec.classList.remove("drag-over-top");
        }
      });

      sec.addEventListener("dragleave", () => {
        sec.classList.remove("drag-over-top", "drag-over-bottom");
      });

      sec.addEventListener("drop", (e) => {
        e.preventDefault();
        sec.classList.remove("drag-over-top", "drag-over-bottom");
        const fromKey = window.DragDropManager._draggedSectionKey;
        const toKey = sec.dataset.sectionKey;

        if (fromKey && toKey && fromKey !== toKey) {
          window.DragDropManager.reorderSections(sessionId, fromKey, toKey);
        }
      });

      sec.addEventListener("dragend", () => {
        sec.classList.remove("dragging", "drag-over-top", "drag-over-bottom");
        window.DragDropManager._draggedSectionKey = null;
      });
    });
  },

  reorderSections(sessionId, fromKey, toKey) {
    let order = this.getSectionsOrder(sessionId);
    const fromIdx = order.indexOf(fromKey);
    const toIdx = order.indexOf(toKey);

    if (fromIdx >= 0 && toIdx >= 0) {
      const [moved] = order.splice(fromIdx, 1);
      order.splice(toIdx, 0, moved);
      this.saveSectionsOrder(sessionId, order);

      if (window.AppToast) {
        window.AppToast.show("Đã thay đổi thứ tự các phần trong bài học!");
      }
      if (window.SessionView) {
        window.SessionView.render(sessionId);
      }
    }
  }
};
