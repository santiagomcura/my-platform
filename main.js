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
// SOUND (Game Boy square wave)
// ─────────────────────────────────────────────

const Sound = {
  _ctx: null,
  _get() {
    if (!this._ctx) this._ctx = new (window.AudioContext || window.webkitAudioContext)();
    return this._ctx;
  },
  play(type) {
    try {
      const ctx = this._get();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'square';
      const t = ctx.currentTime;
      if (type === 'move') {
        o.frequency.setValueAtTime(520, t);
        g.gain.setValueAtTime(0.04, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
        o.start(t); o.stop(t + 0.07);
      } else if (type === 'select') {
        o.frequency.setValueAtTime(440, t);
        o.frequency.setValueAtTime(660, t + 0.08);
        g.gain.setValueAtTime(0.05, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        o.start(t); o.stop(t + 0.18);
      } else if (type === 'back') {
        o.frequency.setValueAtTime(440, t);
        o.frequency.setValueAtTime(280, t + 0.08);
        g.gain.setValueAtTime(0.05, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        o.start(t); o.stop(t + 0.18);
      }
    } catch (_) {}
  }
};

// ─────────────────────────────────────────────
// TYPEWRITER
// ─────────────────────────────────────────────

let _typeTimer = null;

function typewrite(el, text, speed = 22, onDone) {
  if (_typeTimer) clearInterval(_typeTimer);
  el.innerHTML = '';
  let i = 0;
  const cursorSpan = document.createElement('span');
  cursorSpan.className = 'cursor-end';
  _typeTimer = setInterval(() => {
    if (i < text.length) {
      if (el.contains(cursorSpan)) el.removeChild(cursorSpan);
      el.appendChild(document.createTextNode(text[i]));
      el.appendChild(cursorSpan);
      i++;
    } else {
      clearInterval(_typeTimer);
      _typeTimer = null;
      if (onDone) onDone();
    }
  }, speed);
}

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────

const state = {
  view: 'home',   // 'home' | 'detail'
  cursor: 0,      // active menu index
  section: null,  // detail section index
};

// ─────────────────────────────────────────────
// DOM HELPERS
// ─────────────────────────────────────────────

function el(tag, cls, ...children) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  for (const c of children) {
    if (c == null) continue;
    if (typeof c === 'string') e.appendChild(document.createTextNode(c));
    else e.appendChild(c);
  }
  return e;
}

function attr(element, attrs) {
  for (const [k, v] of Object.entries(attrs)) {
    if (k.startsWith('on')) element.addEventListener(k.slice(2), v);
    else element.setAttribute(k, v);
  }
  return element;
}

// ─────────────────────────────────────────────
// SHARED CHROME
// ─────────────────────────────────────────────

function buildHeader(subtitle) {
  const hdr = el('div', 'screen-header');
  const title = el('span', 'header-title', 'HERMES-AGENT');
  const sep   = el('span', 'header-sep', ' // ');
  const sub   = el('span', 'header-sub', subtitle);
  const dot   = el('div',  'header-dot');
  hdr.append(title, sep, sub, dot);
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
// HOME SCREEN
// ─────────────────────────────────────────────

function renderHome() {
  state.view = 'home';
  if (_typeTimer) { clearInterval(_typeTimer); _typeTimer = null; }

  const app = document.getElementById('app');
  app.innerHTML = '';
  app.className = '';

  const hdr = buildHeader('SISTEMA AGENTE v0.1');

  // Body
  const body = el('div', 'screen-body fade-in');
  const panels = el('div', 'home-panels');

  // ── Left: menu ──
  const menuBox = el('div', 'box menu-panel');
  const menuTitle = el('div', 'box-title', 'MÓDULOS DEL SISTEMA');
  const menuList  = el('div', 'menu-list');

  SECTIONS.forEach((s, i) => {
    const item = el('div', 'menu-item' + (i === state.cursor ? ' active' : ''));
    attr(item, {
      onclick: () => { moveCursor(i, true); },
    });
    const cursor = el('span', 'menu-cursor', '►');
    const num    = el('span', 'menu-num', s.id);
    const label  = el('span', 'menu-label', s.title);
    item.append(cursor, num, label);
    item.id = `menu-item-${i}`;
    menuList.appendChild(item);
  });

  menuBox.append(menuTitle, menuList);

  // ── Right: preview ──
  const previewBox = el('div', 'box preview-panel');
  const previewInner = el('div', 'preview-inner');
  previewBox.appendChild(previewInner);

  panels.append(menuBox, previewBox);
  body.appendChild(panels);

  const ftr = buildFooter([
    [['↑', '↓'], 'NAVEGAR'],
    [['ENTER'], 'ABRIR'],
    [['1-8'], 'IR DIRECTO'],
  ]);

  app.append(hdr, body, ftr);

  // Render initial preview
  updatePreview(previewInner, state.cursor, false);
}

function updatePreview(container, index, animate = true) {
  const s = SECTIONS[index];
  container.innerHTML = '';

  const top = el('div', 'preview-top');
  const icon = el('div', 'preview-icon', s.icon);
  const meta = el('div', 'preview-meta');
  const num  = el('div', 'preview-num', `MODULE ${s.id} / ${SECTIONS.length}`);
  const title = el('div', 'preview-title', s.title);
  meta.append(num, title);
  top.append(icon, meta);

  const rule = el('hr', 'preview-rule');

  const desc = el('div', 'preview-desc');

  const itemsWrapper = el('div', '');
  const ul = el('ul', 'preview-items');
  s.items.forEach(item => ul.appendChild(el('li', null, item)));
  itemsWrapper.appendChild(ul);

  const enterHint = el('div', 'preview-enter', '[ ENTER → ABRIR ]');

  container.append(top, rule, desc, itemsWrapper, enterHint);

  if (animate) {
    typewrite(desc, s.description, 20);
  } else {
    desc.textContent = s.description;
  }
}

function moveCursor(index, open = false) {
  if (index === state.cursor && open) {
    openSection(state.cursor);
    return;
  }

  const prev = state.cursor;
  state.cursor = index;

  // Update menu items
  const prevEl = document.getElementById(`menu-item-${prev}`);
  const currEl = document.getElementById(`menu-item-${index}`);
  if (prevEl) prevEl.className = 'menu-item';
  if (currEl) {
    currEl.className = 'menu-item active';
    currEl.scrollIntoView({ block: 'nearest' });
  }

  // Update preview
  const previewInner = document.querySelector('.preview-inner');
  if (previewInner) updatePreview(previewInner, index, true);
}

// ─────────────────────────────────────────────
// DETAIL SCREEN
// ─────────────────────────────────────────────

function openSection(index) {
  Sound.play('select');
  state.view = 'detail';
  state.section = index;
  state.cursor = index;

  const s = SECTIONS[index];
  const app = document.getElementById('app');
  app.innerHTML = '';

  const hdr = buildHeader(s.id + ' — ' + s.title);

  const body = el('div', 'screen-body fade-in');
  const detailBody = el('div', 'detail-body');

  // ── Header box ──
  const headerBox = el('div', 'box detail-header-box');
  const dIcon = el('div', 'detail-icon', s.icon);
  const dInfo = el('div', 'detail-info');
  const dNum  = el('div', 'detail-num', `MÓDULO ${s.id} DE ${SECTIONS.length}`);
  const dTitle = el('div', 'detail-title', s.title);
  const dOverview = el('div', 'detail-overview', s.detail.overview);
  dInfo.append(dNum, dTitle, dOverview);
  const dNumBg = el('div', 'detail-num-bg', s.id);
  headerBox.append(dIcon, dInfo, dNumBg);

  // ── Subsections ──
  const subsGrid = el('div', 'detail-subs');
  s.detail.subsections.forEach(sub => {
    const box = el('div', 'box sub-box');
    const stitle = el('div', 'sub-title', sub.title);
    const sdesc  = el('div', 'sub-desc', sub.desc);
    const ul = el('ul', 'sub-items');
    sub.items.forEach(item => ul.appendChild(el('li', null, item)));
    box.append(stitle, sdesc, ul);
    subsGrid.appendChild(box);
  });

  // ── Nav box ──
  const prevIdx = (index - 1 + SECTIONS.length) % SECTIONS.length;
  const nextIdx = (index + 1) % SECTIONS.length;
  const navBox  = el('div', 'box detail-nav-box');

  const prevBtn = el('button', 'nav-btn');
  prevBtn.textContent = `◄ ${SECTIONS[prevIdx].id}`;
  prevBtn.addEventListener('click', () => { Sound.play('move'); openSection(prevIdx); });

  const homeBtn = el('button', 'nav-btn home-btn');
  homeBtn.textContent = '■ MENÚ';
  homeBtn.addEventListener('click', () => { Sound.play('back'); goHome(); });

  const nextBtn = el('button', 'nav-btn');
  nextBtn.textContent = `${SECTIONS[nextIdx].id} ►`;
  nextBtn.addEventListener('click', () => { Sound.play('move'); openSection(nextIdx); });

  navBox.append(prevBtn, homeBtn, nextBtn);

  // Spacer fill box
  const fillBox = el('div', 'box');
  fillBox.style.cssText = 'padding:8px 12px; overflow:hidden; opacity:0.4;';
  const ts = () => {
    const d = new Date();
    return `[${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}]`;
  };
  [
    `${ts()} module ${s.key} loaded`,
    `${ts()} ${s.detail.subsections.length} subsections indexed`,
    `${ts()} ready`,
  ].forEach(line => {
    const p = el('p', null, line);
    p.style.cssText = 'font-size:9px; color:var(--dim); line-height:1.8;';
    fillBox.appendChild(p);
  });

  detailBody.append(headerBox, subsGrid, fillBox, navBox);
  body.appendChild(detailBody);

  const ftr = buildFooter([
    [['←', '→'], 'NAVEGAR'],
    [['ESC'], 'MENÚ'],
  ]);

  app.append(hdr, body, ftr);
}

function goHome() {
  renderHome();
}

// ─────────────────────────────────────────────
// KEYBOARD
// ─────────────────────────────────────────────

document.addEventListener('keydown', e => {
  // Number keys 1-8
  const num = parseInt(e.key);
  if (num >= 1 && num <= 8) {
    Sound.play('select');
    openSection(num - 1);
    return;
  }

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
      Sound.play('back');
      goHome();
    } else if (e.key === 'ArrowRight' || e.key === 'l') {
      e.preventDefault();
      Sound.play('move');
      openSection((state.section + 1) % SECTIONS.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'h') {
      e.preventDefault();
      Sound.play('move');
      openSection((state.section - 1 + SECTIONS.length) % SECTIONS.length);
    }
  }
});

// ─────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────

renderHome();
