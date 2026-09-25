/**
 * MODAL & IMAGE LIGHTBOX COMPONENT (js/components/modal.js)
 */

window.AppModal = {
  init() {
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalBackdrop = document.getElementById("modalBackdrop");
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", () => this.close());
    }
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) this.close();
      });
    }

    // Image Lightbox Close bindings
    const lightboxBackdrop = document.getElementById("imageLightboxBackdrop");
    const lightboxCloseBtn = document.getElementById("imageLightboxCloseBtn");
    if (lightboxCloseBtn) {
      lightboxCloseBtn.addEventListener("click", () => window.closeImageLightbox());
    }
    if (lightboxBackdrop) {
      lightboxBackdrop.addEventListener("click", (e) => {
        if (e.target === lightboxBackdrop) window.closeImageLightbox();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
        window.closeImageLightbox();
      }
    });

    // Auto-delegate click for any image inside session articles or zoomable wrappers
    document.addEventListener("click", (e) => {
      const zoomWrap = e.target.closest(".zoomable-image-wrap");
      if (zoomWrap) {
        // If zoomWrap already has inline onclick, let it handle or fallback
        const img = zoomWrap.querySelector("img");
        if (img && !zoomWrap.hasAttribute("onclick")) {
          window.openImageLightbox(img.src, img.alt || "Xem ảnh chi tiết", img.title || img.alt || "");
        }
        return;
      }

      // Also allow clicking directly on images inside article sections that have src in assets/images
      const directImg = e.target.closest(".session-direct-article img, .article-image-figure img");
      if (directImg && !directImg.closest(".zoomable-image-wrap")) {
        const figure = directImg.closest(".article-image-figure");
        const captionEl = figure ? figure.querySelector("p") : null;
        const caption = captionEl ? captionEl.textContent.trim() : (directImg.alt || "");
        window.openImageLightbox(directImg.src, directImg.alt || "Xem ảnh chi tiết", caption);
      }
    });
  },

  open(datasetId) {
    const dataset = window.CurriculumRegistry.getDataset(datasetId);
    if (!dataset) return;

    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    const modalCopyBtn = document.getElementById("modalCopyBtn");

    if (modalTitle) modalTitle.textContent = dataset.title;
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="background-color: var(--bg-subtle); padding: 12px 16px; border-radius: var(--radius-sm); margin-bottom: 16px; border: 1px solid var(--border-color);">
          <div style="font-size: 0.85rem; color: var(--text-secondary);"><strong>Phân loại:</strong> ${dataset.category}</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary);"><strong>Nguồn / Tác giả:</strong> ${dataset.author}</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: ${dataset.downloadUrl ? '8px' : '0'};"><strong>Mô tả:</strong> ${dataset.description}</div>
          ${dataset.downloadUrl ? `
            <div style="margin-top: 8px;">
              <a href="${dataset.downloadUrl}" download class="btn btn-primary btn-sm" style="text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                ${window.APP_ICONS.download || ''} Tải file đính kèm về máy
              </a>
            </div>
          ` : ''}
        </div>
        <div class="data-raw-block">${window.AppUtils.escapeHtml(dataset.content)}</div>
      `;
    }

    if (modalCopyBtn) {
      modalCopyBtn.onclick = () => window.copyDatasetContent(dataset.id);
    }

    if (modalBackdrop) {
      modalBackdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  },

  close() {
    const modalBackdrop = document.getElementById("modalBackdrop");
    if (modalBackdrop) {
      modalBackdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  }
};

// Image Lightbox Functions
window.openImageLightbox = function(src, title, caption) {
  if (!src) return;
  const backdrop = document.getElementById("imageLightboxBackdrop");
  const imgEl = document.getElementById("imageLightboxImg");
  const titleEl = document.getElementById("imageLightboxTitle");
  const captionEl = document.getElementById("imageLightboxCaption");
  const openTabBtn = document.getElementById("imageLightboxOpenTab");

  if (imgEl) {
    imgEl.src = src;
    imgEl.alt = title || "Ảnh phóng to";
  }
  if (titleEl) {
    titleEl.textContent = title || "Xem sơ đồ chi tiết";
  }
  if (captionEl) {
    if (caption) {
      captionEl.textContent = caption;
      captionEl.style.display = "block";
    } else {
      captionEl.style.display = "none";
    }
  }
  if (openTabBtn) {
    openTabBtn.href = src;
  }
  if (backdrop) {
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};

window.closeImageLightbox = function() {
  const backdrop = document.getElementById("imageLightboxBackdrop");
  if (backdrop) {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
};

// Global shortcuts
window.openDatasetModal = function(datasetId) {
  window.AppModal.open(datasetId);
};

window.closeModal = function() {
  window.AppModal.close();
};
