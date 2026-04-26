/* ============================================================
   auth.js
   Handles login, validation, logout, and session state
   Cardiff Met University Navigation App
   ============================================================ */

/* ── Session state ── */
let currentMode = null;   // 'Student' | 'Staff' | 'Guest'

/* ────────────────────────────────────────
   doLogin(mode)
   Called when Student/Staff presses Submit
   or Guest presses a social login button.
   ──────────────────────────────────────── */
function doLogin(mode) {

  /* Validate Student form */
  if (mode === 'Student') {
    const email = document.getElementById('student-email').value.trim();
    const pass  = document.getElementById('student-pass').value.trim();
    if (!email || !pass) {
      showToast('Please enter your Student email and password');
      return;
    }
    if (!email.endsWith('@cardiffmet.ac.uk') && !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
  }

  /* Validate Staff form */
  if (mode === 'Staff') {
    const email = document.getElementById('staff-email').value.trim();
    const pass  = document.getElementById('staff-pass').value.trim();
    if (!email || !pass) {
      showToast('Please enter your Staff email and password');
      return;
    }
  }

  /* Set session */
  currentMode = mode;

  /* Update mode badge on the desktop building screen */
  const modeDisplay = document.getElementById('mode-display');
  if (modeDisplay) modeDisplay.textContent = mode;

  /* Navigate to building screen, reset to first building */
  currentBlockIdx = 0;
  updateBuildingDisplay();
  goTo('screen-building');
  showToast('Welcome! Signed in as ' + mode);
}

/* ────────────────────────────────────────
   signOut()
   Clears session and returns to welcome
   ──────────────────────────────────────── */
function signOut() {
  currentMode = null;

  /* Clear any saved form inputs */
  const studentEmail = document.getElementById('student-email');
  const studentPass  = document.getElementById('student-pass');
  const staffEmail   = document.getElementById('staff-email');
  const staffPass    = document.getElementById('staff-pass');

  if (studentEmail) studentEmail.value = '';
  if (studentPass)  studentPass.value  = '';
  if (staffEmail)   staffEmail.value   = '';
  if (staffPass)    staffPass.value    = '';

  goTo('screen-welcome');
  showToast('Signed out successfully');
}

/* ────────────────────────────────────────
   getCurrentMode()
   Returns the active mode string or null
   ──────────────────────────────────────── */
function getCurrentMode() {
  return currentMode;
}
