/**
 * DATASET HUB COMPONENT (js/components/dataset-hub.js)
 */

window.DatasetHub = {
  render() {
    const container = document.getElementById("datasetsGridContainer");
    if (!container) return;

    const datasetList = window.CurriculumRegistry.getAllDatasets();
    const ICONS = window.APP_ICONS;

    container.innerHTML = datasetList.map(data => `
      <div class="data-card">
        <div>
          <div class="data-card-header">
            <span class="tag tag-terracotta">${data.category}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">
              ~${data.wordCount} từ
            </span>
          </div>
          <h3 class="data-card-title">${data.title}</h3>
          <p class="data-card-desc">${data.description}</p>
        </div>

        <div>
          <div class="data-card-meta">
            <span>${ICONS.fileText} Tác giả: <strong>${data.author}</strong></span>
          </div>
          <div class="data-card-actions">
            ${data.downloadUrl ? `
              <a href="${data.downloadUrl}" download class="btn btn-primary btn-sm" style="flex: 1; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 4px;">
                ${ICONS.download || ''} Tải PDF
              </a>
            ` : ''}
            <button class="btn btn-secondary btn-sm" style="flex: 1;" onclick="window.openDatasetModal('${data.id}')">
              ${ICONS.eye} Xem chi tiết
            </button>
            <button class="btn ${data.downloadUrl ? 'btn-secondary' : 'btn-primary'} btn-sm" style="flex: 1;" onclick="window.copyDatasetContent('${data.id}')">
              ${ICONS.copy} Sao chép
            </button>
          </div>
        </div>
      </div>
    `).join("");
  }
};
