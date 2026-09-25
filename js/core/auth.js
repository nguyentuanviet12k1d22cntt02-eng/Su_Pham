/**
 * AUTHENTICATION & ROLE-BASED ACCESS CONTROL (js/core/auth.js)
 * Manages user roles: 'student' (read-only learning UI) vs 'admin' (content editing).
 * Mặc định kích hoạt quyền Quản trị viên (Admin) để người dùng có toàn quyền chỉnh sửa trực tiếp.
 */

window.AuthManager = {
  ADMIN_EMAIL: "nguyentuanviet12k1@gmail.com",
  ADMIN_PASS: "Viet10092004@",

  getRole() {
    // Mặc định luôn là 'admin' để người dùng có ngay quyền chỉnh sửa nội dung
    return localStorage.getItem("ai_sp_user_role") || "admin";
  },

  isAdmin() {
    return this.getRole() === "admin";
  },

  isStudent() {
    return this.getRole() === "student";
  },

  enableAdminDirectly() {
    localStorage.setItem("ai_sp_user_role", "admin");
    this.closeLoginModal();
    this.renderHeader();
    if (window.SessionView && window.AppState.currentSessionId) {
      window.SessionView.render(window.AppState.currentSessionId);
    }
    if (window.AppToast) {
      window.AppToast.show("Đã kích hoạt chế độ Quản trị viên! Toàn bộ quyền chỉnh sửa đã sẵn sàng.");
    }
  },

  loginAsStudent() {
    localStorage.setItem("ai_sp_user_role", "student");
    this.closeLoginModal();
    this.renderHeader();
    if (window.SessionView && window.AppState.currentSessionId) {
      window.SessionView.render(window.AppState.currentSessionId);
    }
    if (window.AppToast) {
      window.AppToast.show("Đã chuyển sang chế độ Học viên (Ẩn các nút chỉnh sửa để xem như sinh viên).");
    }
  },

  loginAsAdmin(email, pass) {
    const cleanEmail = (email || "").trim().toLowerCase();
    const cleanPass = (pass || "").trim();

    if (cleanEmail === this.ADMIN_EMAIL.toLowerCase() && cleanPass === this.ADMIN_PASS) {
      this.enableAdminDirectly();
      return true;
    } else {
      const errEl = document.getElementById("adminLoginError");
      if (errEl) {
        errEl.textContent = "Tài khoản hoặc mật khẩu không chính xác. Bạn cũng có thể bấm nút 'Kích hoạt ngay' phía trên!";
        errEl.style.display = "block";
      } else {
        alert("Tài khoản hoặc mật khẩu Quản trị viên không chính xác!");
      }
      return false;
    }
  },

  logout() {
    this.loginAsStudent();
  },

  openLoginModal() {
    let modalEl = document.getElementById("authRoleModal");
    if (!modalEl) {
      modalEl = document.createElement("div");
      modalEl.id = "authRoleModal";
      modalEl.className = "modal-backdrop";
      document.body.appendChild(modalEl);
    }

    const ICONS = window.APP_ICONS;
    const currentRole = this.getRole();

    modalEl.innerHTML = `
      <div class="modal-content" style="max-width: 680px; padding: 0; overflow: hidden;">
        <div class="modal-header" style="background: var(--academic-navy); color: #fff; border-bottom: none; padding: 18px 24px;">
          <div class="modal-title-wrap" style="color: #fff;">
            ${ICONS.shield}
            <span class="modal-title" style="color: #fff; font-size: 1.1rem;">Chuyển Đổi Quyền Chỉnh Sửa Hệ Thống</span>
          </div>
          <button class="modal-close-btn" style="color: #fff;" onclick="window.AuthManager.closeLoginModal()">
            ${ICONS.close}
          </button>
        </div>

        <div class="modal-body" style="padding: 24px; background: #f8fafc;">
          <div class="auth-role-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            
            <!-- Option 1: Admin (Quản trị viên - Khuyên dùng) -->
            <div class="auth-card admin-card" style="background: #ffffff; border: 2px solid ${currentRole === 'admin' ? 'var(--primary-color)' : '#e2e8f0'}; border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm);">
              <div>
                <div style="width: 44px; height: 44px; background: #fdf2e9; color: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  ${ICONS.shield}
                </div>
                <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                  <h3 style="margin: 0; font-size: 1.05rem; color: var(--academic-navy);">Quyền Chỉnh Sửa (Admin)</h3>
                  <span class="tag tag-terracotta" style="font-size: 0.7rem;">Khuyên dùng</span>
                </div>
                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin: 0 0 14px;">
                  Mở khóa toàn bộ quyền sửa nội dung bài học, sửa prompt, thêm hình ảnh minh họa và kéo thả đổi vị trí.
                </p>

                <button class="btn btn-primary" style="width: 100%; justify-content: center; padding: 10px; margin-bottom: 12px;" onclick="window.AuthManager.enableAdminDirectly()">
                  ${ICONS.edit} Bật Quyền Chỉnh Sửa Ngay (1-Click)
                </button>

                <div style="background: #f1f5f9; padding: 8px 10px; border-radius: 4px; font-size: 0.75rem; color: var(--text-muted);">
                  ✓ Không cần gõ mật khẩu<br>
                  ✓ Sửa trực tiếp toàn bộ bài tập & câu lệnh
                </div>
              </div>
            </div>

            <!-- Option 2: Student (Học viên - Chỉ xem) -->
            <div class="auth-card student-card" style="background: #ffffff; border: 2px solid ${currentRole === 'student' ? 'var(--primary-color)' : '#e2e8f0'}; border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-sm);">
              <div>
                <div style="width: 44px; height: 44px; background: #e0f2fe; color: #0284c7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;">
                  ${ICONS.book}
                </div>
                <h3 style="margin: 0 0 6px; font-size: 1.05rem; color: var(--academic-navy);">Chế Độ Học Viên (Chỉ Xem)</h3>
                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin: 0 0 16px;">
                  Giao diện học tập sạch sẽ, ẩn đi các nút công cụ chỉnh sửa để xem như góc nhìn của sinh viên/học viên.
                </p>
                <div style="background: #f1f5f9; padding: 8px 10px; border-radius: 4px; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 16px;">
                  ✓ Giao diện học tập tập trung<br>
                  ✓ Phù hợp khi trình chiếu trên lớp
                </div>
              </div>

              <button class="btn btn-secondary" style="width: 100%; justify-content: center; padding: 10px;" onclick="window.AuthManager.loginAsStudent()">
                ${ICONS.eye} Chuyển Về Chỉ Xem
              </button>
            </div>

          </div>
        </div>

        <div class="modal-footer" style="background: #ffffff; padding: 12px 24px; display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 0.78rem; color: var(--text-muted);">
            Trạng thái hiện tại: <strong>${currentRole === 'admin' ? 'Đang bật quyền Chỉnh sửa (Admin)' : 'Đang ở chế độ Học viên (Chỉ xem)'}</strong>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="window.AuthManager.closeLoginModal()">Đóng cửa sổ</button>
        </div>
      </div>
    `;

    modalEl.classList.add("open");
  },

  closeLoginModal() {
    const modalEl = document.getElementById("authRoleModal");
    if (modalEl) modalEl.classList.remove("open");
  },

  submitAdminLogin() {
    const emailEl = document.getElementById("adminEmailInput");
    const passEl = document.getElementById("adminPassInput");
    const email = emailEl ? emailEl.value : "";
    const pass = passEl ? passEl.value : "";
    this.loginAsAdmin(email, pass);
  },

  renderHeader() {
    const container = document.getElementById("authStatusWrap");
    if (!container) return;

    const ICONS = window.APP_ICONS;
    const role = this.getRole();

    if (role === "admin") {
      container.innerHTML = `
        <div class="auth-bar-inner">
          <span class="auth-badge badge-admin" title="Bạn đang có toàn quyền chỉnh sửa nội dung bài học và câu lệnh">
            ${ICONS.shield} <strong>Quyền Quản trị viên (Admin)</strong>
          </span>
          <button class="btn btn-secondary btn-sm auth-btn" onclick="window.AuthManager.logout()" title="Tạm thời chuyển sang chế độ Học viên (Ẩn các nút sửa)">
            ${ICONS.eye} Xem bản Học viên
          </button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="auth-bar-inner">
          <span class="auth-badge badge-student" title="Đang ở chế độ Học viên chỉ xem">
            ${ICONS.user} Bản Học viên
          </span>
          <button class="btn btn-primary btn-sm auth-btn" onclick="window.AuthManager.enableAdminDirectly()" title="Bấm để mở toàn bộ quyền chỉnh sửa bài tập và prompt ngay lập tức">
            ${ICONS.edit} Bật quyền Chỉnh sửa
          </button>
        </div>
      `;
    }
  },

  init() {
    // Luôn kích hoạt quyền Quản trị viên (Admin) ngay khi tải trang
    localStorage.setItem("ai_sp_user_role", "admin");
    this.renderHeader();
  }
};
