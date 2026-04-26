/* ============================================================
   modal.js
   Opens and closes modal popups.
   Reads content from MODALS object in data/modals.js
   Cardiff Met University Navigation App
   ============================================================ */

/* ────────────────────────────────────────
   showModal(key)
   key: 'forgot' | 'create' | 'about' |
        'contact' | 'help'
   ──────────────────────────────────────── */
function showModal(key) {
  const m = MODALS[key];
  if (!m) {
    console.warn('Modal key not found:', key);
    return;
  }

  document.getElementById('modal-title').textContent = m.title;
  document.getElementById('modal-body').innerHTML    = m.body;
  document.getElementById('modal').classList.add('open');
}

/* ────────────────────────────────────────
   closeModal(event)
   Closes when clicking outside the box
   ──────────────────────────────────────── */
function closeModal(e) {
  if (e.target.id === 'modal') {
    closeModalDirect();
  }
}

/* ────────────────────────────────────────
   closeModalDirect()
   Closes the modal unconditionally
   ──────────────────────────────────────── */
function closeModalDirect() {
  document.getElementById('modal').classList.remove('open');
}

/* ── Close on Escape key ── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModalDirect();
});
