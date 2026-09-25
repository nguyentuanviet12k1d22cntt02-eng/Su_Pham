/**
 * TOAST NOTIFICATION COMPONENT (js/components/toast.js)
 */

window.AppToast = {
  timeoutId: null,

  show(message) {
    let toast = document.getElementById("appToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "appToast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    const checkIcon = window.APP_ICONS ? window.APP_ICONS.check : '✓';
    toast.innerHTML = `${checkIcon} <span>${message}</span>`;
    toast.classList.add("show");

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }
};
