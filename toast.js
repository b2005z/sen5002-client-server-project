/* ============================================================
   toast.js
   Shows a brief bottom-screen notification message
   Cardiff Met University Navigation App
   ============================================================ */

let _toastTimer = null;

/* ────────────────────────────────────────
   showToast(message, duration?)
   duration defaults to 2800ms
   ──────────────────────────────────────── */
function showToast(message, duration = 2800) {
  const el = document.getElementById('toast');
  if (!el) return;

  el.textContent = message;
  el.classList.add('show');

  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => {
    el.classList.remove('show');
  }, duration);
}
