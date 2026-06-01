const CANONICAL = '¯\\_(ツ)_/¯';

const SHRUGGIES = [
  CANONICAL,
  '¯\\_(ヅ)_/¯',
  '¯\\_㋡_/¯',
  '🤷',
  '(ツ)',
  '(ヅ)',
  '(ツ゚)',
  '㋡',
  'ت',
  '☝(ツ)',
  '✌(ツ)',
  'ᕦ(ツ)ᕤ',
  '(ツ)╭∩╮',
  '[̲̅$̲̅(ツ)$̲̅]',
  '( ͡° ͜ʖ ͡°)',
  'ಠ_ಠ',
  '¯\\(°_o)/¯',
  '¯\\_( ͡° ͜ʖ ͡°)_/¯',
  '𓀠',
  '𓁏',
  '𓀡',
];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

const CACHE_5M = { 'Cache-Control': 'public, max-age=300' };
const CACHE_1H = { 'Cache-Control': 'public, max-age=3600' };
const NO_STORE = { 'Cache-Control': 'no-store' };

const HOME_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="¯\\_(ツ)_/¯ — a gimmick API for shruggies">
  <title>shruggie.wtf</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    :root{--bg:#111;--fg:#fff;--muted:#777}
    :root.light{--bg:#f4f4f4;--fg:#111;--muted:#555}
    body{background:var(--bg);color:var(--fg);font-family:monospace;display:flex;justify-content:center;align-items:center;min-height:100vh}
    main{text-align:center;padding:2rem}
    .s{font-size:clamp(2.5rem,10vw,6rem);line-height:1.3}
    nav{margin-top:1.5rem}
    nav a{color:var(--muted);font-size:.85rem;text-decoration:none;margin:0 .5rem}
    nav a:hover{color:var(--fg)}
    #toggle{position:fixed;top:1rem;right:1rem;background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--muted);line-height:1}
    #toggle:hover{color:var(--fg)}
    #copy{margin-top:1rem;background:none;border:1px solid var(--muted);color:var(--muted);font-family:monospace;font-size:.8rem;padding:.3rem .8rem;border-radius:3px;cursor:pointer}
    #copy:hover{color:var(--fg);border-color:var(--fg)}
  </style>
</head>
<body>
  <button id="toggle" aria-label="toggle theme"></button>
  <main>
    <p class="s">¯\\_(ツ)_/¯</p>
    <button id="copy">copy</button>
    <nav>
      <a href="/docs">api docs</a>
      <a href="/all">/all</a>
      <a href="/random">/random</a>
    </nav>
  </main>
  <script>
    (function () {
      var root = document.documentElement;
      var toggleBtn = document.getElementById('toggle');
      var saved = localStorage.getItem('theme');
      var sys = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      var current = saved || sys;
      function apply(t) {
        root.classList.toggle('light', t === 'light');
        toggleBtn.textContent = t === 'light' ? '☀' : '🌙';
      }
      apply(current);
      toggleBtn.addEventListener('click', function () {
        var next = root.classList.contains('light') ? 'dark' : 'light';
        localStorage.setItem('theme', next);
        apply(next);
      });
      document.getElementById('copy').addEventListener('click', function () {
        var btn = this;
        navigator.clipboard.writeText('¯\\\\_(ツ)_/¯').then(function () {
          btn.textContent = 'copied!';
          setTimeout(function () { btn.textContent = 'copy'; }, 1500);
        });
      });
    })();
  </script>
</body>
</html>`;

const DOCS_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>shruggie.wtf — docs</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    :root{--bg:#111;--fg:#fff;--muted:#777;--sub:#ccc;--border:#2a2a2a;--surface:#1a1a1a}
    :root.light{--bg:#f4f4f4;--fg:#111;--muted:#555;--sub:#333;--border:#ccc;--surface:#e8e8e8}
    body{background:var(--bg);color:var(--sub);font-family:monospace;max-width:680px;margin:0 auto;padding:3rem 1.5rem}
    h1{color:var(--fg);font-size:1.4rem;margin-bottom:.25rem}
    .tag{color:var(--muted);margin-bottom:2.5rem}
    h2{color:var(--fg);font-size:.9rem;margin:2rem 0 .5rem;text-transform:uppercase;letter-spacing:.06em}
    table{width:100%;border-collapse:collapse;margin:.75rem 0}
    td,th{text-align:left;padding:.35rem .6rem;border:1px solid var(--border);font-size:.88rem}
    th{background:var(--surface);color:var(--muted)}
    code{background:var(--surface);border:1px solid var(--border);border-radius:3px;padding:.1rem .3rem;font-size:.85rem}
    pre{background:var(--surface);border:1px solid var(--border);border-radius:4px;padding:.65rem 1rem;margin:.4rem 0;overflow-x:auto;font-size:.85rem}
    ul{padding-left:1.25rem;line-height:1.9}
    .back{color:var(--muted);font-size:.85rem;text-decoration:none;display:inline-block;margin-bottom:2rem}
    .back:hover{color:var(--fg)}
    #toggle{position:fixed;top:1rem;right:1rem;background:none;border:none;cursor:pointer;font-size:1.2rem;color:var(--muted);line-height:1}
    #toggle:hover{color:var(--fg)}
  </style>
</head>
<body>
  <button id="toggle" aria-label="toggle theme"></button>
  <a href="/" class="back">← shruggie.wtf</a>
  <h1>shruggie.wtf</h1>
  <p class="tag">A gimmick API. No auth. No key. Just shrug.</p>

  <h2>Endpoints</h2>
  <table>
    <tr><th>Path</th><th>Returns</th></tr>
    <tr><td><code>GET /</code></td><td>¯\\_(ツ)_/¯ as HTML (browser) or plain text (curl)</td></tr>
    <tr><td><code>GET /all</code></td><td>JSON array of all shruggies</td></tr>
    <tr><td><code>GET /random</code></td><td><code>{"shruggie":"..."}</code></td></tr>
    <tr><td><code>GET /health</code></td><td><code>{"ok":true}</code></td></tr>
    <tr><td><code>GET /docs</code></td><td>This page</td></tr>
  </table>

  <h2>Examples</h2>
  <pre>curl https://shruggie.wtf</pre>
  <pre>curl https://shruggie.wtf/all</pre>
  <pre>curl https://shruggie.wtf/random</pre>
  <pre>curl https://shruggie.wtf/health</pre>

  <h2>Notes</h2>
  <ul>
    <li>Rate limited to 60 requests/minute per IP — exceeding returns <code>429</code></li>
    <li><code>Access-Control-Allow-Origin: *</code> on all endpoints</li>
    <li>HTTPS only — HTTP auto-upgraded by Cloudflare</li>
    <li>No auth, no database, no keys required</li>
  </ul>
  <script>
    (function () {
      var root = document.documentElement;
      var toggleBtn = document.getElementById('toggle');
      var saved = localStorage.getItem('theme');
      var sys = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      var current = saved || sys;
      function apply(t) {
        root.classList.toggle('light', t === 'light');
        toggleBtn.textContent = t === 'light' ? '☀' : '🌙';
      }
      apply(current);
      toggleBtn.addEventListener('click', function () {
        var next = root.classList.contains('light') ? 'dark' : 'light';
        localStorage.setItem('theme', next);
        apply(next);
      });
    })();
  </script>
</body>
</html>`;

function wantsHtml(request) {
  const accept = request.headers.get('accept') ?? '';
  if (accept.includes('text/html')) return true;
  const ua = request.headers.get('user-agent') ?? '';
  return /Mozilla/i.test(ua);
}

function respond(body, status, contentType, extra = {}) {
  return new Response(body, {
    status,
    headers: { 'Content-Type': contentType, ...CORS, ...extra },
  });
}

const j = (data, status = 200, extra = {}) =>
  respond(JSON.stringify(data), status, 'application/json; charset=utf-8', extra);

const t = (body, status = 200, extra = {}) =>
  respond(body, status, 'text/plain; charset=utf-8', extra);

const h = (body, status = 200, extra = {}) =>
  respond(body, status, 'text/html; charset=utf-8', extra);

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const ip = request.headers.get('cf-connecting-ip') ?? '0.0.0.0';
    if (env.RATE_LIMITER) {
      const { success } = await env.RATE_LIMITER.limit({ key: ip });
      if (!success) {
        return j({ error: 'rate limit exceeded' }, 429, { 'Retry-After': '60' });
      }
    }

    if (request.method !== 'GET') {
      return j({ error: 'method not allowed' }, 405);
    }

    const { pathname } = new URL(request.url);
    const path = pathname.replace(/\/$/, '') || '/';

    switch (path) {
      case '/':
        return wantsHtml(request)
          ? h(HOME_HTML, 200, CACHE_5M)
          : t(CANONICAL + '\n', 200, CACHE_5M);

      case '/all':
        return j(SHRUGGIES, 200, CACHE_5M);

      case '/random':
        return j(
          { shruggie: SHRUGGIES[Math.floor(Math.random() * SHRUGGIES.length)] },
          200,
          NO_STORE,
        );

      case '/health':
        return j({ ok: true }, 200, NO_STORE);

      case '/docs':
        return h(DOCS_HTML, 200, CACHE_1H);

      default:
        return j({ error: 'not found' }, 404);
    }
  },
};
