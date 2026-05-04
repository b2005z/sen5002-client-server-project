# Cardiff Metropolitan University Navigation App
## SEN5002 — Smart Campus Navigation System

---

## FOLDER STRUCTURE

```
cardiff-nav/
│
├── index.html                  ← Entry point (redirects to welcome)
│
├── css/
│   ├── variables.css           ← CSS custom properties, fonts, reset
│   ├── components.css          ← Buttons, inputs, modal, toast, logo boxes
│   └── layout.css              ← Screen system, mobile/desktop wrappers, backgrounds
│
├── js/
│   ├── data/
│   │   ├── buildings.js        ← All 10 building data objects (A–T)
│   │   └── modals.js           ← Modal popup content (About, Contact, Help, etc.)
│   │
│   ├── auth.js                 ← Login validation, sign out, session (single-page version)
│   ├── navigation.js           ← goTo(), nextBlock(), prevBlock(), updateBuildingDisplay()
│   ├── modal.js                ← showModal(), closeModal(), Escape key listener
│   └── toast.js                ← showToast() helper
│
└── pages/
    ├── welcome.html            ← Mode selection (Student / Staff / Guest)
    ├── student.html            ← Student email + password login
    ├── staff.html              ← Staff email + password login
    ├── guest.html              ← Guest: Sign in Google / Apple / Create Account
    ├── building.html           ← Desktop building navigator (all 10 blocks)
    └── signout.html            ← Sign out confirmation
```

---

## HOW EACH FILE IS USED

| File | Purpose |
|------|---------|
| `index.html` | Opens app, immediately redirects to `pages/welcome.html` |
| `pages/welcome.html` | First screen: three mode buttons |
| `pages/student.html` | Student login form; saves mode to `sessionStorage` |
| `pages/staff.html` | Staff login form; saves mode to `sessionStorage` |
| `pages/guest.html` | Guest social login buttons |
| `pages/building.html` | Main building screen — reads mode from `sessionStorage`, loads all buildings |
| `pages/signout.html` | Confirms sign out, clears session, returns to welcome |
| `css/variables.css` | ALL colour vars, font imports — change colours here |
| `css/components.css` | ALL reusable UI pieces — edit button/input styles here |
| `css/layout.css` | Page layouts and backgrounds — edit structure here |
| `js/data/buildings.js` | Add/edit building data here (name, desc, tags, coords) |
| `js/data/modals.js` | Edit About Us / Contact Us / Help popup text here |
| `js/auth.js` | Login validation logic (single-page version) |
| `js/navigation.js` | Screen switching and building ▲▼ navigation |
| `js/modal.js` | Modal open/close logic |
| `js/toast.js` | Bottom toast notification helper |

---

## HOW TO RUN

**Option 1 — Open directly in browser:**
```
Double-click index.html
```

**Option 2 — VS Code Live Server (recommended):**
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. App opens at `http://127.0.0.1:5500`

**Option 3 — Python local server:**
```bash
cd cardiff-nav
python -m http.server 3000
# Open http://localhost:3000
```

---

## ADDING A NEW BUILDING

Open `js/data/buildings.js` and add a new object to the `BUILDINGS` array:

```js
{
  id: 'X',
  label: 'Block X',
  name: 'Block X — Your Building Name',
  desc: 'Description of the building...',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  floor: '2 Floors',
  coords: { lat: 51.4938, lng: -3.2145 }
}
```

The ▲▼ arrows will automatically cycle through it.

---

## CHANGING COLOURS

Open `css/variables.css` and edit the `:root` block:

```css
:root {
  --blush:       #f9cdc8;   /* Main background pink */
  --gold:        #f0c060;   /* Button colour */
  --red-text:    #c0392b;   /* Headings and labels */
  ...
}
```

---

## TECH STACK

- **HTML5** — Semantic markup, no framework needed
- **CSS3** — Custom properties, flexbox, animations
- **Vanilla JavaScript** — No dependencies, no build step
- **Google Fonts** — Playfair Display + DM Sans
- **sessionStorage** — Persists login mode between pages

---

## FILE NAMING CONVENTIONS

- CSS files: `lowercase-with-hyphens.css`
- JS files: `camelCase.js`
- HTML pages: `lowercase.html`
- Data files: `lowercase.js` inside `js/data/`

- 
