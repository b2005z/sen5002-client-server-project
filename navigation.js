/* ============================================================
   navigation.js
   Screen switching · Building ▲▼ navigation
   Cardiff Met University Navigation App
   ============================================================ */

/* ── Current building index ── */
let currentBlockIdx = 0;

/* ────────────────────────────────────────
   goTo(screenId)
   Hides all screens, shows the target one.
   ──────────────────────────────────────── */
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');
}

/* ────────────────────────────────────────
   nextBlock() / prevBlock()
   Cycle through BUILDINGS array
   ──────────────────────────────────────── */
function nextBlock() {
  currentBlockIdx = (currentBlockIdx + 1) % BUILDINGS.length;
  updateBuildingDisplay();
}

function prevBlock() {
  currentBlockIdx = (currentBlockIdx - 1 + BUILDINGS.length) % BUILDINGS.length;
  updateBuildingDisplay();
}

/* ────────────────────────────────────────
   goToBlock(id)
   Jump directly to a building by its ID
   e.g. goToBlock('F')  →  Library
   ──────────────────────────────────────── */
function goToBlock(id) {
  const idx = BUILDINGS.findIndex(b => b.id === id);
  if (idx !== -1) {
    currentBlockIdx = idx;
    updateBuildingDisplay();
    goTo('screen-building');
  }
}

/* ────────────────────────────────────────
   updateBuildingDisplay()
   Reads BUILDINGS[currentBlockIdx] and
   populates the desktop building screen
   ──────────────────────────────────────── */
function updateBuildingDisplay() {
  const b = BUILDINGS[currentBlockIdx];

  /* Block label in toolbar */
  const labelEl = document.getElementById('block-label');
  if (labelEl) labelEl.textContent = b.label;

  /* Info panel */
  const nameEl = document.getElementById('bi-name');
  const descEl = document.getElementById('bi-desc');
  const tagsEl = document.getElementById('bi-tags');

  if (nameEl) nameEl.textContent = b.name;
  if (descEl) descEl.textContent = b.desc;

  if (tagsEl) {
    tagsEl.innerHTML = b.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join('');
  }

  /* Animate the info panel in */
  const panel = document.getElementById('building-info-panel');
  if (panel) {
    panel.style.opacity = '0';
    panel.style.transform = 'translateY(8px)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        panel.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        panel.style.opacity = '1';
        panel.style.transform = 'translateY(0)';
      });
    });
  }
}
