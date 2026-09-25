/**
 * CENTRAL CURRICULUM & DATASET REGISTRY (js/data/registry.js)
 * Coordinates modular sessions and datasets with persistent user design support.
 */

window.CurriculumRegistry = {
  sessions: [],
  datasets: {},

  /**
   * Register an individual session
   */
  registerSession(sessionData) {
    if (!sessionData || !sessionData.id) return;
    const existingIdx = this.sessions.findIndex(s => s.id === sessionData.id);
    if (existingIdx >= 0) {
      this.sessions[existingIdx] = sessionData;
    } else {
      this.sessions.push(sessionData);
      this.sessions.sort((a, b) => a.number - b.number);
    }
  },

  /**
   * Register a dataset
   */
  registerDataset(datasetId, datasetData) {
    if (!datasetId || !datasetData) return;
    this.datasets[datasetId] = datasetData;
  },

  /**
   * Get session by ID, merged with user-customized metadata from localStorage
   */
  getSession(id) {
    const baseSession = this.sessions.find(s => s.id === Number(id));
    if (!baseSession) return null;

    try {
      const customMeta = localStorage.getItem(`curriculum_meta_${id}`);
      if (customMeta) {
        const parsed = JSON.parse(customMeta);
        return {
          ...baseSession,
          title: parsed.title !== undefined ? parsed.title : baseSession.title,
          duration: parsed.duration !== undefined ? parsed.duration : baseSession.duration,
          tools: Array.isArray(parsed.tools) ? parsed.tools : baseSession.tools,
          overview: parsed.overview !== undefined ? parsed.overview : baseSession.overview
        };
      }
    } catch (e) {
      console.error("Error loading custom session meta", e);
    }

    return baseSession;
  },

  /**
   * Save customized session metadata (title, duration, tools, overview)
   */
  saveSessionMeta(id, meta) {
    try {
      localStorage.setItem(`curriculum_meta_${id}`, JSON.stringify(meta));
      const s = this.sessions.find(item => item.id === Number(id));
      if (s) {
        if (meta.title !== undefined) s.title = meta.title;
        if (meta.duration !== undefined) s.duration = meta.duration;
        if (meta.tools !== undefined) s.tools = meta.tools;
        if (meta.overview !== undefined) s.overview = meta.overview;
      }
      return true;
    } catch (e) {
      console.error("Error saving session meta", e);
      return false;
    }
  },

  /**
   * Get all registered sessions (with merged user meta)
   */
  getAllSessions() {
    return this.sessions.map(s => this.getSession(s.id));
  },

  /**
   * Get dataset by ID
   */
  getDataset(id) {
    return this.datasets[id];
  },

  /**
   * Get all datasets as array
   */
  getAllDatasets() {
    return Object.values(this.datasets);
  },

  /**
   * Clean up all legacy data from older sessions
   */
  purgeLegacyContent() {
    try {
      // Clean older cache keys that might contain pre-filled exercises or prompt mocks
      for (let i = 1; i <= 20; i++) {
        localStorage.removeItem(`curriculum_prompts_${i}`);
        localStorage.removeItem(`curriculum_images_${i}`);
        localStorage.removeItem(`curriculum_sections_order_${i}`);
      }
      localStorage.setItem("curriculum_legacy_purged", "true");
    } catch (e) {
      console.error("Error purging legacy content", e);
    }
  },

  /**
   * Export entire curriculum data (metadata + blocks) to a JSON string
   */
  exportAllData() {
    const exportObj = {
      version: "2.0",
      exportedAt: new Date().toISOString(),
      sessions: []
    };

    this.sessions.forEach(s => {
      const fullSession = this.getSession(s.id);
      let blocks = [];
      if (window.ContentEditor) {
        blocks = window.ContentEditor.getBlocks(s.id);
      }
      exportObj.sessions.push({
        id: fullSession.id,
        number: fullSession.number,
        title: fullSession.title,
        duration: fullSession.duration,
        tools: fullSession.tools,
        overview: fullSession.overview,
        blocks: blocks
      });
    });

    return JSON.stringify(exportObj, null, 2);
  },

  /**
   * Import curriculum data from JSON
   */
  importAllData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (!data || !Array.isArray(data.sessions)) {
        throw new Error("Định dạng dữ liệu không hợp lệ. Phải chứa mảng sessions.");
      }

      data.sessions.forEach(s => {
        if (!s.id) return;
        this.saveSessionMeta(s.id, {
          title: s.title || `Buổi ${s.number || s.id}`,
          duration: s.duration || "90 phút",
          tools: Array.isArray(s.tools) ? s.tools : [],
          overview: s.overview || ""
        });

        if (window.ContentEditor && Array.isArray(s.blocks)) {
          window.ContentEditor.saveBlocks(s.id, s.blocks);
        }
      });

      return true;
    } catch (e) {
      console.error("Import error:", e);
      alert("Không thể nhập dữ liệu: " + e.message);
      return false;
    }
  }
};

// Purge legacy data once if not yet purged
if (!localStorage.getItem("curriculum_legacy_purged_v2")) {
  window.CurriculumRegistry.purgeLegacyContent();
  localStorage.setItem("curriculum_legacy_purged_v2", "true");
}
