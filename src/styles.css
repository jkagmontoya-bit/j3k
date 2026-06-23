@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --ink: #07111f;
  --muted: #64748b;
  --line: rgba(15, 23, 42, 0.12);
  --paper: #ffffff;
  --grid: rgba(15, 23, 42, 0.06);
  --teal: #12b7c9;
  --teal-dark: #087d8b;
  --green: #15724c;
  --green-dark: #0f4c36;
  --danger: #b42318;
  --success: #047857;
  --shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background:
    linear-gradient(90deg, rgba(255,255,255,0.97), rgba(255,255,255,0.88)),
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: auto, 48px 48px, 48px 48px;
  color: var(--ink);
}

button, input, select, textarea { font: inherit; }
a { color: inherit; text-decoration: none; }

.loading {
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: var(--green);
  font-weight: 800;
}

.brand-block { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  width: 34px; height: 34px; border-radius: 999px;
  background: var(--ink); color: white;
  display: grid; place-items: center;
  font-weight: 900; letter-spacing: -1px;
}
.brand-block strong { display: block; text-transform: uppercase; letter-spacing: 0.04em; }
.brand-block span { color: var(--teal-dark); font-size: 12px; font-weight: 700; }

.eyebrow {
  color: var(--teal-dark);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  font-weight: 800;
}

.btn {
  border: 0; border-radius: 999px; padding: 12px 18px; font-weight: 800;
  cursor: pointer; display: inline-flex; gap: 8px; align-items: center; justify-content: center;
  transition: 0.2s ease;
}
.btn:disabled { opacity: 0.7; cursor: progress; }
.btn-primary {
  background: linear-gradient(135deg, var(--green), var(--teal));
  color: white; box-shadow: 0 16px 32px rgba(18, 183, 201, 0.22);
}
.btn-primary:hover { transform: translateY(-1px); }
.btn-ghost { background: rgba(15, 23, 42, 0.06); color: var(--ink); }

.status { padding: 12px 14px; border-radius: 14px; font-weight: 700; font-size: 13px; }
.status-error { background: #fee4e2; color: var(--danger); }
.status-success { background: #d1fae5; color: var(--success); }
.status-info { background: #e0f2fe; color: #075985; }

.landing { min-height: 100vh; padding: 22px clamp(18px, 5vw, 72px); }
.landing-header { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.landing-nav { display: flex; gap: 26px; align-items: center; font-weight: 700; font-size: 14px; }
.landing-nav a { padding-bottom: 6px; }
.landing-nav a:hover { color: var(--teal-dark); }
.contact-link {
  background: linear-gradient(135deg, var(--teal), #18c4d5);
  color: white; padding: 12px 20px !important; border-radius: 999px;
  box-shadow: 0 18px 36px rgba(18, 183, 201, 0.25);
}

.hero {
  min-height: 70vh; display: grid; grid-template-columns: 1.1fr 0.9fr;
  align-items: center; gap: 42px;
}
.hero h1 {
  font-size: clamp(48px, 8vw, 92px); line-height: 0.92; letter-spacing: -0.08em;
  margin: 14px 0; max-width: 760px;
}
.hero p { color: var(--muted); max-width: 620px; font-size: 17px; line-height: 1.75; }
.hero-card {
  background: rgba(255,255,255,0.86); backdrop-filter: blur(12px);
  border: 1px solid var(--line); border-radius: 32px; padding: 30px; box-shadow: var(--shadow);
}
.hero-card strong { font-size: 28px; letter-spacing: -0.04em; }
.hero-card ul { margin: 22px 0 0; padding: 0; list-style: none; display: grid; gap: 15px; }
.hero-card li { display: flex; align-items: center; gap: 10px; color: var(--green-dark); font-weight: 700; }

.public-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; padding-bottom: 40px; }
.public-grid article, .panel, .metric-card {
  background: rgba(255,255,255,0.88); border: 1px solid var(--line); border-radius: 24px;
  padding: 24px; box-shadow: 0 16px 44px rgba(15, 23, 42, 0.06);
}
.public-grid h3, .panel h2 { margin-top: 0; letter-spacing: -0.03em; }
.config-warning { position: fixed; bottom: 18px; right: 18px; max-width: 420px; }

.login-screen { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
.login-card {
  width: min(460px, 100%); background: rgba(255,255,255,0.94); border: 1px solid var(--line);
  border-radius: 32px; padding: 34px; box-shadow: var(--shadow);
}
.login-card h1 { margin: 8px 0 10px; letter-spacing: -0.05em; }
.login-card p { color: var(--muted); line-height: 1.65; }
.login-icon {
  width: 64px; height: 64px; border-radius: 24px;
  background: linear-gradient(135deg, var(--green), var(--teal));
  color: white; display: grid; place-items: center;
}

.field { display: grid; gap: 8px; font-weight: 750; color: var(--ink); }
.field small { color: var(--muted); font-weight: 500; }
input, select, textarea {
  width: 100%; border: 1px solid var(--line); border-radius: 16px;
  padding: 13px 14px; background: white; color: var(--ink);
}
textarea { min-height: 110px; resize: vertical; }
.input-with-icon { position: relative; }
.input-with-icon svg { position: absolute; top: 50%; left: 14px; transform: translateY(-50%); color: var(--muted); }
.input-with-icon input { padding-left: 42px; }
.actions { display: flex; gap: 12px; margin-top: 18px; flex-wrap: wrap; }

.app-shell { min-height: 100vh; display: grid; grid-template-columns: 286px 1fr; }
.sidebar {
  background: #07111f; color: white; padding: 22px; display: flex; flex-direction: column;
  gap: 18px; position: sticky; top: 0; min-height: 100vh;
}
.sidebar .brand-block span { color: var(--teal); }
.secure-pill {
  border: 1px solid rgba(255,255,255,0.14); border-radius: 999px; padding: 10px 13px;
  display: inline-flex; gap: 8px; color: #b7f7ff; align-items: center;
  width: max-content; font-weight: 800;
}
.side-nav { display: grid; gap: 8px; }
.side-nav button {
  border: 0; background: transparent; color: rgba(255,255,255,0.72);
  padding: 12px 14px; border-radius: 14px; text-align: left; cursor: pointer; font-weight: 750;
}
.side-nav button:hover, .side-nav button.active { background: rgba(18, 183, 201, 0.16); color: white; }
.side-card {
  border: 1px solid rgba(255,255,255,0.12); border-radius: 18px; padding: 14px;
  display: flex; gap: 10px; margin-top: auto;
}
.side-card + .side-card { margin-top: 0; }
.side-card span { display: block; font-size: 12px; color: rgba(255,255,255,0.62); }

.main { padding: 28px clamp(18px, 4vw, 46px); }
.topbar { display: flex; justify-content: space-between; gap: 22px; align-items: center; margin-bottom: 28px; }
.topbar h1 { margin: 4px 0 0; font-size: clamp(30px, 5vw, 52px); letter-spacing: -0.07em; }
.user-chip {
  display: flex; align-items: center; gap: 12px; background: white; border: 1px solid var(--line);
  border-radius: 20px; padding: 12px; box-shadow: 0 12px 34px rgba(15, 23, 42, 0.08);
}
.user-chip span { display: block; color: var(--muted); font-size: 12px; }

.content-stack { display: grid; gap: 22px; }
.cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.metric-card { border: 1px solid var(--line); text-align: left; cursor: pointer; }
.metric-card svg { color: var(--teal-dark); }
.metric-card strong { display: block; margin-top: 18px; font-size: 20px; letter-spacing: -0.04em; }
.metric-card span, .muted { color: var(--muted); }
.panel-title { display: flex; gap: 16px; align-items: center; }
.panel-title svg { color: var(--success); }
.two-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.list { display: grid; gap: 10px; }
.list-row {
  border: 1px solid var(--line); border-radius: 16px; padding: 14px; background: white;
  display: flex; justify-content: space-between; gap: 12px;
}
.list-row span { color: var(--muted); font-size: 13px; display: inline-flex; align-items: center; gap: 6px; }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-grid .field:has(textarea), .form-grid .field:last-of-type { grid-column: 1 / -1; }
.form-footer {
  grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between;
  gap: 18px; flex-wrap: wrap;
}
.section-head { display: flex; justify-content: space-between; gap: 18px; align-items: center; }
.table-wrap { overflow: auto; border: 1px solid var(--line); border-radius: 18px; background: white; }
table { width: 100%; border-collapse: collapse; min-width: 780px; }
th, td { padding: 13px 14px; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; }
th { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
.mini-link {
  border: 0; background: rgba(18, 183, 201, 0.1); color: var(--teal-dark);
  padding: 8px 10px; border-radius: 999px; display: inline-flex; gap: 6px;
  align-items: center; cursor: pointer; font-weight: 800; margin: 2px;
}

@media (max-width: 980px) {
  .app-shell { grid-template-columns: 1fr; }
  .sidebar { position: static; min-height: auto; }
  .side-nav { grid-template-columns: repeat(2, 1fr); }
  .hero, .public-grid, .cards-grid, .two-columns, .form-grid { grid-template-columns: 1fr; }
  .landing-header, .topbar, .user-chip { align-items: flex-start; flex-direction: column; }
  .landing-nav { flex-wrap: wrap; }
}
