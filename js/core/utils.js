/**
 * CORE UTILITIES (js/core/utils.js)
 */

window.AppUtils = {
  /**
   * Escape HTML entities to prevent injection
   */
  escapeHtml(string) {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    return String(string).replace(/[&<>"']/g, s => entityMap[s]);
  },

  /**
   * Copy text to clipboard with toast notification
   */
  copyText(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        if (window.AppToast) window.AppToast.show(successMessage || "Đã sao chép vào bộ nhớ tạm!");
      }).catch(() => {
        this.fallbackCopyText(text, successMessage);
      });
    } else {
      this.fallbackCopyText(text, successMessage);
    }
  },

  /**
   * Fallback for copying text
   */
  fallbackCopyText(text, successMessage) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (window.AppToast) window.AppToast.show(successMessage || "Đã sao chép vào bộ nhớ tạm!");
    } catch (err) {
      alert("Không thể tự động sao chép, vui lòng chọn và copy thủ công.");
    }
    document.body.removeChild(textArea);
  }
};

// Global shortcuts
window.copyTextToClipboard = function(text, successMessage) {
  window.AppUtils.copyText(text, successMessage);
};

window.copyDatasetContent = function(datasetId) {
  const dataset = window.CurriculumRegistry.getDataset(datasetId);
  if (!dataset) return;
  window.AppUtils.copyText(dataset.content, `Đã sao chép bộ dữ liệu: "${dataset.title}"!`);
};
