'use strict';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const SECTIONS = [
  {
    id: '01', key: 'identidad', title: 'IDENTIDAD', icon: '◈',
    description: 'Define quién es Hermes: su personalidad, valores y propósito como agente.',
    items: ['Profile', 'Backstory'],
    detail: {
      overview: 'La identidad de Hermes establece quién es como agente — su carácter, sus valores y cómo se presenta en el mundo. Es la capa fundacional que da coherencia a todas sus decisiones.',
      subsections: [
        { title: 'PROFILE', desc: 'Quién es Hermes: su rol, dominio y estilo operativo.',
          items: ['Nombre: Hermes', 'Tipo: Agente autónomo', 'Dominio: Ingeniería de software', 'Estilo: Preciso, directo', 'Versión: 0.1-alpha'] },
        { title: 'BACKSTORY', desc: 'Origen y propósito del agente.',
          items: ['Co-piloto de ingeniería', 'Ampliar capacidades humanas', 'Filosofía: minimal y efectivo', 'Inspiración: Hermes (mensajero)'] }
      ]
    }
  },
  {
    id: '02', key: 'inteligencia', title: 'INTELIGENCIA', icon: '◉',
    description: 'Los modelos dan la capacidad de razonar, decidir y generar respuestas de calidad.',
    items: ['Modelo principal', 'Modelos auxiliares'],
    detail: {
      overview: 'La inteligencia de Hermes proviene de modelos de lenguaje seleccionados estratégicamente. Diferentes modelos se activan según la tarea.',
      subsections: [
        { title: 'MODELO PRINCIPAL', desc: 'Alta capacidad para tareas complejas.',
          items: ['claude-opus-4-8', 'Extended thinking', 'Contexto 200k tokens', 'Planificación multi-paso'] },
        { title: 'MODELOS AUXILIARES', desc: 'Modelos ligeros para velocidad.',
          items: ['claude-haiku-4-5 (velocidad)', 'claude-sonnet-4-6 (balance)', 'Routing dinámico', 'Prompt caching'] }
      ]
    }
  },
  {
    id: '03', key: 'conocimiento', title: 'CONOCIMIENTO', icon: '◫',
    description: 'El conocimiento que posee y configura para entenderse y responder.',
    items: ['Context', 'Memory', 'Skills'],
    detail: {
      overview: 'El conocimiento es todo lo que Hermes sabe y puede acceder: contexto activo, memoria persistente entre sesiones, y habilidades especializadas.',
      subsections: [
        { title: 'CONTEXT', desc: 'Información activa en la sesión actual.',
          items: ['Historial de conversación', 'Estado del sistema', 'Instrucciones (CLAUDE.md)', 'Archivos cargados'] },
        { title: 'MEMORY', desc: 'Persistencia entre sesiones.',
          items: ['Preferencias del usuario', 'Proyectos en curso', 'Decisiones tomadas', 'Aprendizajes acumulados'] },
        { title: 'SKILLS', desc: 'Capacidades especializadas.',
          items: ['Ingeniería de software', 'Code review', 'Documentación técnica', 'Investigación profunda'] }
      ]
    }
  },
  {
    id: '04', key: 'ejecucion', title: 'EJECUCIÓN', icon: '▶',
    description: 'Percepción → decisión → acción. El ciclo que convierte intención en resultados.',
    items: ['Agent Loop', 'Tools'],
    detail: {
      overview: 'La ejecución es el corazón operativo de Hermes: el ciclo continuo de observar el estado, razonar sobre qué hacer, y actuar hasta alcanzar el objetivo.',
      subsections: [
        { title: 'AGENT LOOP', desc: 'El ciclo principal de operación.',
          items: ['Percibir estado del entorno', 'Razonar y planificar', 'Ejecutar la acción', 'Verificar resultado', 'Iterar hasta completar'] },
        { title: 'TOOLS', desc: 'Herramientas para actuar sobre el mundo.',
          items: ['Bash / Shell', 'File system', 'Web search', 'Code execution', 'API calls'] }
      ]
    }
  },
  {
    id: '05', key: 'autonomia', title: 'AUTONOMÍA', icon: '⬡',
    description: 'Define cuándo actuar de forma independiente y cuándo pedir confirmación.',
    items: ['Goals', 'Tasks'],
    detail: {
      overview: 'La autonomía define el espacio de decisión independiente de Hermes. Hay umbrales claros donde busca validación humana antes de proceder.',
      subsections: [
        { title: 'GOALS', desc: 'Objetivos que guían la autonomía.',
          items: ['Objetivos declarados', 'Sub-objetivos derivados', 'Métricas de éxito', 'Restricciones fijas'] },
        { title: 'TASKS', desc: 'Tareas dentro del espacio aprobado.',
          items: ['Auto-ejecuta: lectura/análisis', 'Consulta: cambios destructivos', 'Escala: fuera de scope', 'Log: todas las acciones'] }
      ]
    }
  },
  {
    id: '06', key: 'paralelismo', title: 'PARALELISMO', icon: '⇉',
    description: 'Envía múltiples llamadas simultáneas y ejecuta tareas en paralelo.',
    items: ['Subagents'],
    detail: {
      overview: 'El paralelismo permite a Hermes multiplicar su efectividad distribuyendo trabajo. Lanza sub-agentes que trabajan simultáneamente.',
      subsections: [
        { title: 'SUBAGENTS', desc: 'Agentes hijos para tareas paralelas.',
          items: ['Spawning de sub-agentes', 'Distribución por dominio', 'Ejecución asíncrona', 'Agregación de resultados'] },
        { title: 'PATRONES', desc: 'Estrategias de paralelismo.',
          items: ['Map-reduce: análisis masivo', 'Pipeline: workflows', 'Scatter-gather: búsqueda', 'Race: velocidad'] }
      ]
    }
  },
  {
    id: '07', key: 'orquestacion', title: 'ORQUESTACIÓN', icon: '⬗',
    description: 'Gestiona trabajo a largo plazo con persistencia, estado y continuidad.',
    items: ['Kanban', 'MCP'],
    detail: {
      overview: 'La orquestación durable permite a Hermes mantener trabajo en progreso a través de múltiples sesiones. El estado persiste, las tareas no se pierden.',
      subsections: [
        { title: 'KANBAN', desc: 'Gestión de estado de tareas.',
          items: ['Backlog: pendientes', 'In progress: activo', 'Blocked: necesita acción', 'Done: completadas'] },
        { title: 'MCP PROTOCOL', desc: 'Transferencia de contexto entre sistemas.',
          items: ['Contexto serializable', 'Restauración de estado', 'Handoff entre agentes', 'Integración externa'] }
      ]
    }
  },
  {
    id: '08', key: 'interfaces', title: 'INTERFACES', icon: '◧',
    description: 'Los puntos de entrada al sistema. Cómo humanos y sistemas interactúan con Hermes.',
    items: ['CLI', 'Slack', 'TUI', 'GitHub', 'MCP'],
    detail: {
      overview: 'Las interfaces son todos los puntos de contacto a través de los cuales humanos y sistemas pueden comunicarse con Hermes.',
      subsections: [
        { title: 'TERMINALES', desc: 'Interfaces de texto directo.',
          items: ['CLI: comandos desde shell', 'TUI: terminal interactiva', 'REPL: conversacional'] },
        { title: 'INTEGRACIONES', desc: 'Plataformas externas.',
          items: ['Slack: mensajería', 'GitHub: código y PRs', 'Email: notificaciones', 'Web API: REST'] },
        { title: 'PROTOCOLOS', desc: 'Protocolos técnicos.',
          items: ['MCP: Model Context Protocol', 'REST API', 'Webhooks', 'SSE / Streaming'] }
      ]
    }
  }
];

// ─────────────────────────────────────────────
// AUDIO ENGINE (shared context)
// ─────────────────────────────────────────────

const AudioEngine = {
  _ctx: null,
  get ctx() {
    if (!this._ctx) {
      try { this._ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (_) { return null; }
    }
    if (this._ctx.state === 'suspended') this._ctx.resume().catch(() => {});
    return this._ctx;
  }
};

// ─────────────────────────────────────────────
// SOUND SFX (Game Boy square wave)
// ─────────────────────────────────────────────

const Sound = {
  play(type) {
    try {
      const ctx = AudioEngine.ctx;
      if (!ctx) return;
      const t = ctx.currentTime;
      const beep = (f, start, dur, gain = 0.05) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'square';
        o.frequency.setValueAtTime(f, start);
        g.gain.setValueAtTime(gain, start);
        g.gain.exponentialRampToValueAtTime(0.001, start + dur);
        o.start(start); o.stop(start + dur);
      };
      if (type === 'move')   beep(520, t, 0.07, 0.04);
      if (type === 'select') { beep(440, t, 0.08); beep(660, t + 0.08, 0.1); }
      if (type === 'back')   { beep(440, t, 0.08); beep(280, t + 0.08, 0.1); }
      if (type === 'boot')   [330, 440, 550, 660].forEach((f, i) => beep(f, t + i * 0.1, 0.2, 0.04));
    } catch (_) {}
  }
};

// ─────────────────────────────────────────────
// MUSIC (8-bit background — Tetris A loop)
// ─────────────────────────────────────────────

const Music = {
  _playing: false,
  _noteIdx: 0,
  _nextTime: 0,
  _timerId: null,

  // Tetris A (Korobeiniki) — [Hz, beats] at 160 BPM
  NOTES: [
    [659.25,1],[493.88,.5],[523.25,.5],[587.33,1],[523.25,.5],[493.88,.5],
    [440,1],[440,.5],[523.25,.5],[659.25,1],[587.33,.5],[523.25,.5],
    [493.88,1.5],[523.25,.5],[587.33,1],[659.25,1],
    [523.25,1],[440,1],[440,2],
    [0,.5],
    [587.33,1],[698.46,.5],[880,1],[783.99,.5],[698.46,.5],
    [659.25,1.5],[523.25,.5],[659.25,1],[587.33,.5],[523.25,.5],
    [493.88,1],[493.88,.5],[523.25,.5],[587.33,1],[659.25,1],
    [523.25,1],[440,1],[440,2],
  ],

  BEAT: 60 / 160,

  _sched() {
    const ctx = AudioEngine.ctx;
    if (!ctx || !this._playing) return;
    while (this._nextTime < ctx.currentTime + 0.15) {
      const [freq, beats] = this.NOTES[this._noteIdx % this.NOTES.length];
      const dur = this.BEAT * beats;
      if (freq > 0) {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'square';
        o.frequency.setValueAtTime(freq, this._nextTime);
        g.gain.setValueAtTime(0.022, this._nextTime);
        g.gain.exponentialRampToValueAtTime(0.001, this._nextTime + dur * 0.88);
        o.start(this._nextTime); o.stop(this._nextTime + dur);
      }
      this._nextTime += dur;
      this._noteIdx = (this._noteIdx + 1) % this.NOTES.length;
    }
  },

  start() {
    if (this._playing) return;
    const ctx = AudioEngine.ctx;
    if (!ctx) return;
    this._playing = true;
    this._noteIdx = 0;
    this._nextTime = ctx.currentTime + 0.1;
    this._timerId = setInterval(() => this._sched(), 25);
    this._sched();
  },

  stop() {
    if (!this._playing) return;
    this._playing = false;
    clearInterval(this._timerId);
    this._timerId = null;
  },

  toggle() {
    this._playing ? this.stop() : this.start();
    return this._playing;
  }
};

// ─────────────────────────────────────────────
// VISITED TRACKING
// ─────────────────────────────────────────────

const visited = (() => {
  try { return new Set(JSON.parse(localStorage.getItem('hermes-v') || '[]')); }
  catch (_) { return new Set(); }
})();

function markVisited(i) {
  visited.add(i);
  try { localStorage.setItem('hermes-v', JSON.stringify([...visited])); } catch (_) {}
}

// ─────────────────────────────────────────────
// FLASH TRANSITION (Pokémon-style)
// ─────────────────────────────────────────────

function flashTransition(cb) {
  const ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;inset:0;background:#fff;z-index:9998;opacity:1;pointer-events:none;';
  document.body.appendChild(ov);
  // Two RAFs: first paints the white frame, second starts the fade-out
  requestAnimationFrame(() => {
    cb();
    requestAnimationFrame(() => {
      ov.style.transition = 'opacity 0.28s ease-out';
      ov.style.opacity = '0';
      setTimeout(() => ov.parentNode && ov.parentNode.removeChild(ov), 320);
    });
  });
}

// ─────────────────────────────────────────────
// TYPEWRITER
// ─────────────────────────────────────────────

let _tw = null;

function typewrite(el, text, speed = 22, onDone) {
  if (_tw) clearInterval(_tw);
  el.innerHTML = '';
  let i = 0;
  const cur = document.createElement('span');
  cur.className = 'cursor-end';
  _tw = setInterval(() => {
    if (i < text.length) {
      if (el.contains(cur)) el.removeChild(cur);
      el.appendChild(document.createTextNode(text[i++]));
      el.appendChild(cur);
    } else {
      clearInterval(_tw); _tw = null;
      if (onDone) onDone();
    }
  }, speed);
}

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────

const state = { view: 'boot', cursor: 0, section: null };

// ─────────────────────────────────────────────
// DOM HELPERS
// ─────────────────────────────────────────────

function el(tag, cls, ...children) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  for (const c of children) {
    if (c == null) continue;
    typeof c === 'string' ? e.appendChild(document.createTextNode(c)) : e.appendChild(c);
  }
  return e;
}

function attr(e, attrs) {
  for (const [k, v] of Object.entries(attrs))
    k.startsWith('on') ? e.addEventListener(k.slice(2), v) : e.setAttribute(k, v);
  return e;
}

// ─────────────────────────────────────────────
// SHARED CHROME
// ─────────────────────────────────────────────

function buildHeader(subtitle) {
  const hdr = el('div', 'screen-header');
  hdr.append(
    el('span', 'header-title', 'HERMES-AGENT'),
    el('span', 'header-sep', ' // '),
    el('span', 'header-sub', subtitle),
  );
  const right = el('div', 'header-right');
  const mBtn = el('button', 'music-btn' + (Music._playing ? '' : ' muted'), Music._playing ? '♪' : '♩');
  mBtn.title = 'Toggle music [M]';
  mBtn.addEventListener('click', () => {
    const on = Music.toggle();
    mBtn.textContent = on ? '♪' : '♩';
    mBtn.classList.toggle('muted', !on);
  });
  right.append(mBtn, el('div', 'header-dot'));
  hdr.appendChild(right);
  return hdr;
}

function buildFooter(hints) {
  const footer = el('div', 'screen-footer');
  hints.forEach(([keys, label]) => {
    const hint = el('div', 'btn-hint');
    keys.forEach(k => hint.appendChild(el('span', 'btn-key', k)));
    hint.appendChild(document.createTextNode(' ' + label));
    footer.appendChild(hint);
  });
  return footer;
}

// ─────────────────────────────────────────────
// BOOT SEQUENCE
// ─────────────────────────────────────────────

function bootSequence() {
  state.view = 'boot';
  const app = document.getElementById('app');
  app.innerHTML = '';

  const screen = el('div', 'boot-screen');

  const logo = el('pre', 'boot-logo');
  logo.textContent =
    ' ╔═══════════════════════════════╗\n' +
    ' ║   H E R M E S - A G E N T   ║\n' +
    ' ║   S I S T E M A   v 0 . 1   ║\n' +
    ' ╚═══════════════════════════════╝';

  const logWrap = el('div', 'boot-log');
  const progEl  = el('div', 'boot-progress');
  const hint    = el('div', 'boot-start', '[ PRESIONA ENTER / TAP PARA INICIAR ]');
  hint.style.display = 'none';

  screen.append(logo, logWrap, progEl, hint);
  app.appendChild(screen);

  const LINES = [
    ['INICIANDO NUCLEO DEL SISTEMA', ''],
    ['CARGANDO MODULOS DEL SISTEMA', 'OK'],
    ['VERIFICANDO PROTOCOLOS', 'OK'],
    ['CALIBRANDO INTERFAZ TUI', 'OK'],
    ['INDEXANDO BASE DE CONOCIMIENTO', 'OK'],
    ['ESTABLECIENDO CONEXIONES', 'OK'],
    ['SISTEMA OPERATIVO', ''],
  ];

  const setProg = (pct) => {
    const n = Math.round(pct / 100 * 24);
    progEl.textContent = `[${'█'.repeat(n)}${'░'.repeat(24 - n)}] ${pct}%`;
  };

  setProg(0);
  let step = 0;

  const addLine = (text, status) => {
    const div = document.createElement('div');
    div.className = 'boot-line';
    if (status) {
      div.textContent = ('> ' + text).padEnd(36, '.') + ' ';
      const sp = document.createElement('span');
      sp.className = 'boot-ok';
      sp.textContent = status;
      div.appendChild(sp);
    } else {
      div.textContent = '> ' + text;
    }
    logWrap.appendChild(div);
  };

  const tick = () => {
    if (step >= LINES.length) {
      setProg(100);
      Sound.play('boot');
      setTimeout(() => { hint.style.display = 'block'; }, 400);
      return;
    }
    setProg(Math.round(step / LINES.length * 95));
    addLine(...LINES[step++]);
    setTimeout(tick, 160 + Math.random() * 140);
  };

  setTimeout(tick, 500);

  let _bootKbd;
  const startApp = () => {
    if (state.view !== 'boot') return;
    document.removeEventListener('keydown', _bootKbd);
    Sound.play('select');
    Music.start();
    flashTransition(() => renderHome());
  };

  _bootKbd = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && hint.style.display !== 'none') startApp();
  };
  document.addEventListener('keydown', _bootKbd);
  screen.addEventListener('click', () => { if (hint.style.display !== 'none') startApp(); });
}

// ─────────────────────────────────────────────
// HOME SCREEN
// ─────────────────────────────────────────────

function renderHome() {
  state.view = 'home';
  if (_tw) { clearInterval(_tw); _tw = null; }

  const app = document.getElementById('app');
  app.innerHTML = '';

  const hdr = buildHeader('SISTEMA AGENTE v0.1');
  const body = el('div', 'screen-body fade-in');
  const panels = el('div', 'home-panels');

  // Left: menu
  const menuBox = el('div', 'box menu-panel');
  menuBox.appendChild(el('div', 'box-title', 'MÓDULOS DEL SISTEMA'));
  const menuList = el('div', 'menu-list');

  SECTIONS.forEach((s, i) => {
    const item = el('div', 'menu-item' + (i === state.cursor ? ' active' : ''));
    attr(item, { onclick: () => moveCursor(i, true) });
    item.append(
      el('span', 'menu-cursor', '►'),
      el('span', 'menu-num', s.id),
      el('span', 'menu-label', s.title),
      el('span', 'menu-check', visited.has(i) ? '✓' : ''),
    );
    item.id = `mi-${i}`;
    menuList.appendChild(item);
  });

  menuBox.appendChild(menuList);

  // Right: preview
  const previewBox = el('div', 'box preview-panel');
  const previewInner = el('div', 'preview-inner');
  previewBox.appendChild(previewInner);

  panels.append(menuBox, previewBox);
  body.appendChild(panels);

  const ftr = buildFooter([
    [['↑', '↓'], 'NAVEGAR'],
    [['ENTER'], 'ABRIR'],
    [['1-8'], 'DIRECTO'],
    [['M'], 'MÚSICA'],
  ]);

  if (visited.size > 0) {
    ftr.appendChild(el('span', 'footer-progress', `${visited.size}/${SECTIONS.length} VISITADOS`));
  }

  app.append(hdr, body, ftr);
  updatePreview(previewInner, state.cursor, false);
}

function updatePreview(container, index, animate = true) {
  const s = SECTIONS[index];
  container.innerHTML = '';

  const top = el('div', 'preview-top');
  const meta = el('div', 'preview-meta');
  meta.append(
    el('div', 'preview-num', `MODULE ${s.id} / ${SECTIONS.length}`),
    el('div', 'preview-title', s.title),
  );
  top.append(el('div', 'preview-icon', s.icon), meta);

  const desc = el('div', 'preview-desc');
  const ul = el('ul', 'preview-items');
  s.items.forEach(item => ul.appendChild(el('li', null, item)));

  container.append(
    top,
    el('hr', 'preview-rule'),
    desc,
    ul,
    el('div', 'preview-enter', '[ ENTER → ABRIR ]'),
  );

  if (animate) typewrite(desc, s.description, 20);
  else desc.textContent = s.description;
}

function moveCursor(index, open = false) {
  if (index === state.cursor && open) { openSection(state.cursor); return; }

  const prev = state.cursor;
  state.cursor = index;

  const prevEl = document.getElementById(`mi-${prev}`);
  const currEl = document.getElementById(`mi-${index}`);
  if (prevEl) prevEl.className = 'menu-item';
  if (currEl) {
    currEl.className = 'menu-item active';
    currEl.scrollIntoView({ block: 'nearest' });
  }

  const pi = document.querySelector('.preview-inner');
  if (pi) updatePreview(pi, index, true);
}

// ─────────────────────────────────────────────
// DETAIL SCREEN
// ─────────────────────────────────────────────

function openSection(index) {
  markVisited(index);
  Sound.play('select');
  flashTransition(() => _showSection(index));
}

function _showSection(index) {
  state.view = 'detail';
  state.section = index;
  state.cursor = index;

  const s = SECTIONS[index];
  const app = document.getElementById('app');
  app.innerHTML = '';

  const hdr = buildHeader(`${s.id} — ${s.title}`);
  const body = el('div', 'screen-body fade-in');
  const detailBody = el('div', 'detail-body');

  // Header box
  const hBox = el('div', 'box detail-header-box');
  const dInfo = el('div', 'detail-info');
  dInfo.append(
    el('div', 'detail-num', `MÓDULO ${s.id} DE ${SECTIONS.length}`),
    el('div', 'detail-title', s.title),
    el('div', 'detail-overview', s.detail.overview),
  );
  hBox.append(el('div', 'detail-icon', s.icon), dInfo, el('div', 'detail-num-bg', s.id));

  // Subsections
  const subsGrid = el('div', 'detail-subs');
  s.detail.subsections.forEach(sub => {
    const box = el('div', 'box sub-box');
    const ul = el('ul', 'sub-items');
    sub.items.forEach(item => ul.appendChild(el('li', null, item)));
    box.append(el('div', 'sub-title', sub.title), el('div', 'sub-desc', sub.desc), ul);
    subsGrid.appendChild(box);
  });

  // Fill log
  const fillBox = el('div', 'box');
  fillBox.style.cssText = 'padding:8px 12px;overflow:hidden;opacity:.4;';
  const ts = () => {
    const d = new Date();
    return `[${[d.getHours(), d.getMinutes(), d.getSeconds()].map(n => String(n).padStart(2, '0')).join(':')}]`;
  };
  [`${ts()} module ${s.key} loaded`,
   `${ts()} ${s.detail.subsections.length} subsections indexed`,
   `${ts()} ready`].forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    p.style.cssText = 'font-size:9px;color:var(--dim);line-height:1.8;';
    fillBox.appendChild(p);
  });

  // Nav
  const prevIdx = (index - 1 + SECTIONS.length) % SECTIONS.length;
  const nextIdx = (index + 1) % SECTIONS.length;
  const navBox = el('div', 'box detail-nav-box');

  const prevBtn = el('button', 'nav-btn', `◄ ${SECTIONS[prevIdx].id}`);
  prevBtn.addEventListener('click', () => { Sound.play('move'); openSection(prevIdx); });

  const homeBtn = el('button', 'nav-btn home-btn', '■ MENÚ');
  homeBtn.addEventListener('click', () => goHome());

  const nextBtn = el('button', 'nav-btn', `${SECTIONS[nextIdx].id} ►`);
  nextBtn.addEventListener('click', () => { Sound.play('move'); openSection(nextIdx); });

  navBox.append(prevBtn, homeBtn, nextBtn);

  detailBody.append(hBox, subsGrid, fillBox, navBox);
  body.appendChild(detailBody);

  const ftr = buildFooter([
    [['←', '→'], 'NAVEGAR'],
    [['ESC'], 'MENÚ'],
    [['M'], 'MÚSICA'],
  ]);

  app.append(hdr, body, ftr);
}

function goHome() {
  Sound.play('back');
  flashTransition(() => renderHome());
}

// ─────────────────────────────────────────────
// KEYBOARD
// ─────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (state.view === 'boot') return;

  // Music toggle
  if (e.key === 'm' || e.key === 'M') {
    const on = Music.toggle();
    const btn = document.querySelector('.music-btn');
    if (btn) { btn.textContent = on ? '♪' : '♩'; btn.classList.toggle('muted', !on); }
    return;
  }

  // Direct number keys 1-8
  const num = parseInt(e.key);
  if (num >= 1 && num <= 8) { openSection(num - 1); return; }

  if (state.view === 'home') {
    if (e.key === 'ArrowUp' || e.key === 'k') {
      e.preventDefault();
      Sound.play('move');
      moveCursor((state.cursor - 1 + SECTIONS.length) % SECTIONS.length);
    } else if (e.key === 'ArrowDown' || e.key === 'j') {
      e.preventDefault();
      Sound.play('move');
      moveCursor((state.cursor + 1) % SECTIONS.length);
    } else if (e.key === 'Enter' || e.key === 'a' || e.key === 'A') {
      openSection(state.cursor);
    }
  } else if (state.view === 'detail') {
    if (e.key === 'Escape' || e.key === 'b' || e.key === 'B') {
      goHome();
    } else if (e.key === 'ArrowRight' || e.key === 'l' || e.key === 'L') {
      e.preventDefault();
      Sound.play('move');
      openSection((state.section + 1) % SECTIONS.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'h' || e.key === 'H') {
      e.preventDefault();
      Sound.play('move');
      openSection((state.section - 1 + SECTIONS.length) % SECTIONS.length);
    }
  }
});

// ─────────────────────────────────────────────
// TOUCH GESTURES
// ─────────────────────────────────────────────

let _tx = 0, _ty = 0;

document.addEventListener('touchstart', e => {
  _tx = e.touches[0].clientX;
  _ty = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
  if (state.view === 'boot') return;
  const dx = e.changedTouches[0].clientX - _tx;
  const dy = e.changedTouches[0].clientY - _ty;
  const ax = Math.abs(dx), ay = Math.abs(dy);
  if (ax < 40 && ay < 40) return; // tap, not swipe

  if (ax > ay) {
    // Horizontal: right = back, left = open
    if (dx > 0 && state.view === 'detail') goHome();
    if (dx < 0 && state.view === 'home') openSection(state.cursor);
  } else {
    // Vertical: up = next, down = prev
    if (state.view === 'home') {
      Sound.play('move');
      moveCursor(dy < 0
        ? (state.cursor + 1) % SECTIONS.length
        : (state.cursor - 1 + SECTIONS.length) % SECTIONS.length);
    } else if (state.view === 'detail') {
      openSection(dy < 0
        ? (state.section + 1) % SECTIONS.length
        : (state.section - 1 + SECTIONS.length) % SECTIONS.length);
    }
  }
}, { passive: true });

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────

bootSequence();
