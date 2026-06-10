'use strict';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const SECTIONS = [
  {
    id: '01', key: 'identidad', title: 'IDENTIDAD',
    icon: '◈',
    description: 'Define quién es Hermes: su personalidad, valores y propósito.',
    items: ['Profile', 'Backstory'],
    detail: {
      overview: 'La identidad de Hermes establece quién es como agente — su carácter, sus valores y cómo se presenta en el mundo. Es la capa fundacional que da coherencia a todas sus decisiones.',
      subsections: [
        {
          title: 'PROFILE',
          desc: 'Quién es Hermes: su rol, dominio de expertise y estilo operativo.',
          items: ['Nombre: Hermes', 'Tipo: Agente autónomo', 'Dominio: Ingeniería de software', 'Estilo: Preciso, reflexivo, directo', 'Versión: 0.1-alpha']
        },
        {
          title: 'BACKSTORY',
          desc: 'Origen y propósito. El porqué detrás del agente.',
          items: ['Diseñado como co-piloto de ingeniería', 'Propósito: ampliar capacidades humanas', 'Filosofía: minimal, preciso, efectivo', 'Inspiración: Hermes (mensajero / velocidad)']
        }
      ]
    }
  },
  {
    id: '02', key: 'inteligencia', title: 'INTELIGENCIA',
    icon: '◉',
    description: 'Los modelos dan la capacidad de razonar, decidir y generar respuestas de calidad.',
    items: ['Modelo principal', 'Modelos auxiliares'],
    detail: {
      overview: 'La inteligencia de Hermes proviene de modelos de lenguaje seleccionados estratégicamente. Diferentes modelos se activan según la tarea: máxima capacidad para decisiones críticas, modelos ligeros para velocidad.',
      subsections: [
        {
          title: 'MODELO PRINCIPAL',
          desc: 'Alta capacidad de razonamiento para tareas complejas y decisiones críticas.',
          items: ['claude-opus-4-8 (razonamiento)', 'Extended thinking activado', 'Contexto largo (200k tokens)', 'Planificación multi-paso']
        },
        {
          title: 'MODELOS AUXILIARES',
          desc: 'Modelos especializados para sub-tareas que priorizan velocidad o costo.',
          items: ['claude-haiku-4-5 (velocidad)', 'claude-sonnet-4-6 (balance)', 'Routing dinámico por complejidad', 'Prompt caching para eficiencia']
        }
      ]
    }
  },
  {
    id: '03', key: 'conocimiento', title: 'CONOCIMIENTO',
    icon: '◫',
    description: 'El conocimiento que posee y configura para entenderse y responder.',
    items: ['Context', 'Memory', 'Skills'],
    detail: {
      overview: 'El conocimiento es todo lo que Hermes sabe y puede acceder. Combina contexto activo de sesión, memoria persistente entre sesiones, y habilidades especializadas de dominio.',
      subsections: [
        {
          title: 'CONTEXT',
          desc: 'Información activa en la ventana de contexto durante la sesión actual.',
          items: ['Historial de conversación', 'Estado del sistema actual', 'Instrucciones de sesión (CLAUDE.md)', 'Archivos y código cargados']
        },
        {
          title: 'MEMORY',
          desc: 'Persistencia entre sesiones para mantener continuidad.',
          items: ['Preferencias del usuario', 'Proyectos en curso', 'Decisiones tomadas', 'Aprendizajes acumulados']
        },
        {
          title: 'SKILLS',
          desc: 'Capacidades especializadas activables bajo demanda.',
          items: ['Ingeniería de software', 'Code review y análisis', 'Documentación técnica', 'Investigación profunda']
        }
      ]
    }
  },
  {
    id: '04', key: 'ejecucion', title: 'EJECUCIÓN',
    icon: '▶',
    description: 'Percepción → decisión → acción. El ciclo que convierte intención en resultados.',
    items: ['Agent Loop', 'Tools'],
    detail: {
      overview: 'La ejecución es el corazón operativo de Hermes: el ciclo continuo de observar el estado, razonar sobre qué hacer, ejecutar acciones, y verificar resultados hasta alcanzar el objetivo.',
      subsections: [
        {
          title: 'AGENT LOOP',
          desc: 'El ciclo principal que mantiene a Hermes operando continuamente.',
          items: ['Percibir estado del entorno', 'Razonar y planificar acción', 'Ejecutar la acción elegida', 'Verificar resultado obtenido', 'Iterar hasta completar objetivo']
        },
        {
          title: 'TOOLS',
          desc: 'Herramientas que Hermes puede invocar para actuar sobre el mundo.',
          items: ['Bash / Shell (comandos)', 'File system (lectura/escritura)', 'Web search (investigación)', 'Code execution (correr código)', 'API calls (servicios externos)']
        }
      ]
    }
  },
  {
    id: '05', key: 'autonomia', title: 'AUTONOMÍA',
    icon: '⬡',
    description: 'Define cuándo actuar de forma independiente y cuándo pedir confirmación.',
    items: ['Goals', 'Tasks'],
    detail: {
      overview: 'La autonomía define el espacio de decisión independiente de Hermes. No toda acción requiere confirmación, pero hay umbrales claros donde busca validación humana antes de proceder.',
      subsections: [
        {
          title: 'GOALS',
          desc: 'Objetivos de alto nivel que guían la autonomía sin instrucción constante.',
          items: ['Objetivos declarados explícitamente', 'Sub-objetivos derivados por inferencia', 'Métricas de éxito claras', 'Restricciones de operación fijas']
        },
        {
          title: 'TASKS',
          desc: 'Tareas concretas dentro del espacio de autonomía aprobado.',
          items: ['Auto-ejecuta: lectura, análisis, código', 'Consulta: cambios destructivos', 'Escala: fuera de scope definido', 'Log: todas las acciones tomadas']
        }
      ]
    }
  },
  {
    id: '06', key: 'paralelismo', title: 'PARALELISMO',
    icon: '⇉',
    description: 'Envía múltiples llamadas simultáneas y ejecuta tareas en paralelo.',
    items: ['Subagents'],
    detail: {
      overview: 'El paralelismo permite a Hermes multiplicar su efectividad distribuyendo trabajo. En lugar de resolver problemas secuencialmente, lanza sub-agentes especializados que trabajan en paralelo.',
      subsections: [
        {
          title: 'SUBAGENTS',
          desc: 'Hermes puede spawnar agentes hijos para tareas paralelas e independientes.',
          items: ['Spawning de sub-agentes especializados', 'Distribución de trabajo por dominio', 'Ejecución paralela y asíncrona', 'Agregación de resultados (fan-in)', 'Coordinación mediante mensajes']
        },
        {
          title: 'PATRONES',
          desc: 'Estrategias de paralelismo según el tipo de trabajo.',
          items: ['Map-reduce: análisis masivo', 'Pipeline: workflows en cadena', 'Scatter-gather: búsqueda amplia', 'Race: velocidad sobre exhaustividad']
        }
      ]
    }
  },
  {
    id: '07', key: 'orquestacion', title: 'ORQUESTACIÓN DURABLE',
    icon: '⬗',
    description: 'Gestiona trabajo a largo plazo con persistencia, estado y continuidad.',
    items: ['Kanban', 'MCP'],
    detail: {
      overview: 'La orquestación durable permite a Hermes mantener trabajo en progreso a través de múltiples sesiones. El estado persiste, las tareas no se pierden, y el contexto sobrevive interrupciones.',
      subsections: [
        {
          title: 'KANBAN',
          desc: 'Sistema de gestión que persiste el estado de todas las tareas en curso.',
          items: ['Backlog: tareas pendientes', 'In progress: trabajo activo', 'Blocked: necesita acción humana', 'Done: completadas y verificadas', 'Estado serializado entre sesiones']
        },
        {
          title: 'MCP (MODEL CONTEXT PROTOCOL)',
          desc: 'Protocolo estándar para transferir contexto y estado entre sistemas.',
          items: ['Contexto serializable y portable', 'Restauración de estado en nueva sesión', 'Handoff entre agentes y sesiones', 'Integración con herramientas externas']
        }
      ]
    }
  },
  {
    id: '08', key: 'interfaces', title: 'INTERFACES',
    icon: '◧',
    description: 'Los puntos de entrada al sistema. Cómo humanos y sistemas interactúan con Hermes.',
    items: ['CLI', 'Slack', 'TUI', 'GitHub', 'MCP'],
    detail: {
      overview: 'Las interfaces son todos los puntos de contacto a través de los cuales humanos y sistemas externos pueden comunicarse con Hermes. Cada canal tiene su propio modelo de interacción.',
      subsections: [
        {
          title: 'TERMINALES',
          desc: 'Interfaces de texto directo: rápidas, potentes, sin fricción.',
          items: ['CLI: comandos directos desde shell', 'TUI: interfaz terminal interactiva', 'REPL: exploración conversacional']
        },
        {
          title: 'INTEGRACIONES',
          desc: 'Canales de comunicación con plataformas externas.',
          items: ['Slack: mensajería asíncrona', 'GitHub: código, PRs e issues', 'Email: notificaciones y reportes', 'Web: API REST pública']
        },
        {
          title: 'PROTOCOLOS',
          desc: 'Protocolos técnicos para integración programática.',
          items: ['MCP: Model Context Protocol', 'REST API con autenticación', 'Webhooks: eventos entrantes', 'SSE / Streaming: respuestas en tiempo real']
        }
      ]
    }
  }
];

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────

const state = {
  view: 'home',        // 'home' | 'detail'
  focused: 0,          // index of focused card
  section: null,       // index of open section (detail view)
};

// ─────────────────────────────────────────────
// PIXEL ART CHARACTER
// ─────────────────────────────────────────────

const HERO_CHAR = `\
░░░░████░░░░
░░██░░░░██░░
░█░░◉░░◉░░█░
░█░░░░▾░░░█░
░░█░░░░░░█░░
░░░██████░░░
░░░░█░░█░░░░
░░░░█░░█░░░░
░░███░░███░░`;

// ─────────────────────────────────────────────
// RENDER HELPERS
// ─────────────────────────────────────────────

function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') el.className = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v);
  }
  for (const child of children) {
    if (child == null) continue;
    if (typeof child === 'string') el.appendChild(document.createTextNode(child));
    else el.appendChild(child);
  }
  return el;
}

function renderNav() {
  const nav = document.getElementById('section-nav');
  nav.innerHTML = '';

  SECTIONS.forEach((s, i) => {
    const btn = h('button', {
      class: 'nav-btn' + (state.section === i ? ' active' : ''),
      onclick: () => openSection(i),
    },
      h('span', { class: 'n' }, s.id),
      s.title
    );
    nav.appendChild(btn);
  });

  const homeBtn = h('button', {
    class: 'nav-btn nav-home' + (state.view === 'home' ? ' active' : ''),
    onclick: goHome,
  }, '~/');
  nav.appendChild(homeBtn);
}

function updateTopCmd(text) {
  document.getElementById('top-cmd').textContent = text;
}

// ─────────────────────────────────────────────
// HOME VIEW
// ─────────────────────────────────────────────

function renderHome() {
  state.view = 'home';
  state.section = null;
  updateTopCmd('hermes --roadmap');

  const vp = document.getElementById('viewport');
  vp.innerHTML = '';

  const layout = h('div', { class: 'home-layout fade-in' });

  // ── Hero panel ──
  const hero = h('div', { class: 'hero-panel' });

  const charPre = h('pre', { class: 'hero-char' });
  charPre.textContent = HERO_CHAR;
  hero.appendChild(charPre);

  hero.appendChild(h('hr', { class: 'hero-divider' }));

  const title = h('div', { class: 'hero-title' }, 'HERMES-AGENT');
  const sub = h('div', { class: 'hero-sub' }, 'ROADMAP DEL SISTEMA AGENTE');
  const desc = h('div', { class: 'hero-desc' },
    'Hermes es un agente autónomo, modular y extensible. Diseñado para pensar, decidir y actuar en el mundo real.'
  );

  const tags = h('div', { class: 'hero-tags' });
  ['autónomo', 'modular', 'extensible'].forEach(t => {
    tags.appendChild(h('span', { class: 'tag' }, t));
  });

  const hint = h('div', { class: 'hero-keyhint' });
  hint.innerHTML =
    '<span class="key">↑↓←→</span> navegar<br>' +
    '<span class="key">Enter</span> abrir sección<br>' +
    '<span class="key">1-8</span> ir directo<br>' +
    '<span class="key">Esc</span> volver';

  hero.append(title, sub, desc, tags, hint);

  // ── Cards grid ──
  const grid = h('div', { class: 'cards-area' });

  SECTIONS.forEach((s, i) => {
    const card = h('div', {
      class: 'card' + (i === state.focused ? ' focused' : ''),
      id: `card-${i}`,
      onclick: () => openSection(i),
      onmouseenter: () => {
        state.focused = i;
        refreshCardFocus();
      },
    });

    const num = h('div', { class: 'card-num' }, s.id);
    const head = h('div', { class: 'card-head' },
      h('span', { class: 'card-icon' }, s.icon),
      h('span', { class: 'card-title' }, s.title)
    );
    const desc2 = h('div', { class: 'card-desc' }, s.description);
    const ul = h('ul', { class: 'card-items' });
    s.items.forEach(item => ul.appendChild(h('li', {}, item)));

    const enter = h('div', { class: 'card-enter' }, '[ Enter ]');

    card.append(num, head, desc2, ul, enter);
    grid.appendChild(card);
  });

  layout.append(grid, hero);
  vp.appendChild(layout);
  renderNav();
}

function refreshCardFocus() {
  document.querySelectorAll('.card').forEach((el, i) => {
    el.classList.toggle('focused', i === state.focused);
  });
}

// ─────────────────────────────────────────────
// DETAIL VIEW
// ─────────────────────────────────────────────

function openSection(index) {
  state.view = 'detail';
  state.section = index;
  state.focused = index;

  const s = SECTIONS[index];
  updateTopCmd(`hermes --section=${s.key}`);

  const vp = document.getElementById('viewport');
  vp.innerHTML = '';
  vp.scrollTop = 0;

  const view = h('div', { class: 'detail-view fade-in' });

  // ── Top breadcrumb bar ──
  const topbar = h('div', { class: 'detail-topbar' });
  const bc = h('div', { class: 'detail-breadcrumb' });
  bc.innerHTML = `<span class="gr">operator@hermes</span> ~/roadmap/<span class="g">${s.key}</span> $ hermes --section=${s.key}`;
  const navHint = h('div', { class: 'detail-nav-hint' });
  navHint.innerHTML =
    `<span class="key">←</span><span class="key">→</span> prev/next &nbsp; <span class="key">Esc</span> home`;
  topbar.append(bc, navHint);

  // ── Header ──
  const header = h('div', { class: 'detail-header' });
  const icon = h('div', { class: 'detail-icon' }, s.icon);
  const info = h('div', { class: 'detail-info' });
  const title = h('div', { class: 'detail-title' }, `${s.id} — ${s.title}`);
  const overview = h('div', { class: 'detail-overview' }, s.detail.overview);
  info.append(title, overview);
  const numBg = h('div', { class: 'detail-num-bg' }, s.id);
  header.append(icon, info, numBg);

  // ── Subsections ──
  const subsGrid = h('div', { class: 'subsections-grid' });
  s.detail.subsections.forEach(sub => {
    const box = h('div', { class: 'subsection' });
    const stitle = h('div', { class: 'subsection-title' }, sub.title);
    const sdesc = h('div', { class: 'subsection-desc' }, sub.desc);
    const ul = h('ul', { class: 'subsection-items' });
    sub.items.forEach(item => ul.appendChild(h('li', {}, item)));
    box.append(stitle, sdesc, ul);
    subsGrid.appendChild(box);
  });

  // ── Footer nav ──
  const prevIdx = (index - 1 + SECTIONS.length) % SECTIONS.length;
  const nextIdx = (index + 1) % SECTIONS.length;
  const footer = h('div', { class: 'detail-footer' });
  const prevBtn = h('button', {
    class: 'nav-btn',
    style: 'border:1px solid var(--border);',
    onclick: () => openSection(prevIdx),
  }, `← ${SECTIONS[prevIdx].id} ${SECTIONS[prevIdx].title}`);
  const homeBtn2 = h('button', {
    class: 'nav-btn',
    style: 'border:1px solid var(--border); margin:0 auto;',
    onclick: goHome,
  }, '[ ~/HOME ]');
  const nextBtn = h('button', {
    class: 'nav-btn',
    style: 'border:1px solid var(--border);',
    onclick: () => openSection(nextIdx),
  }, `${SECTIONS[nextIdx].id} ${SECTIONS[nextIdx].title} →`);

  footer.append(prevBtn, homeBtn2, nextBtn);

  view.append(topbar, header, subsGrid, footer);
  vp.appendChild(view);
  renderNav();
}

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────

function goHome() {
  renderHome();
}

// ─────────────────────────────────────────────
// KEYBOARD
// ─────────────────────────────────────────────

document.addEventListener('keydown', (e) => {
  // Number keys 1-8: direct navigation to section
  const num = parseInt(e.key);
  if (num >= 1 && num <= 8) {
    openSection(num - 1);
    return;
  }

  if (state.view === 'home') {
    switch (e.key) {
      case 'ArrowRight': case 'l':
        e.preventDefault();
        state.focused = (state.focused + 1) % SECTIONS.length;
        refreshCardFocus();
        scrollCardIntoView(state.focused);
        break;
      case 'ArrowLeft': case 'h':
        e.preventDefault();
        state.focused = (state.focused - 1 + SECTIONS.length) % SECTIONS.length;
        refreshCardFocus();
        scrollCardIntoView(state.focused);
        break;
      case 'ArrowDown': case 'j':
        e.preventDefault();
        state.focused = Math.min(state.focused + 4, SECTIONS.length - 1);
        refreshCardFocus();
        scrollCardIntoView(state.focused);
        break;
      case 'ArrowUp': case 'k':
        e.preventDefault();
        state.focused = Math.max(state.focused - 4, 0);
        refreshCardFocus();
        scrollCardIntoView(state.focused);
        break;
      case 'Enter':
        openSection(state.focused);
        break;
    }
  } else if (state.view === 'detail') {
    switch (e.key) {
      case 'Escape': case 'b':
        goHome();
        break;
      case 'ArrowRight': case 'l': case 'n':
        e.preventDefault();
        openSection((state.section + 1) % SECTIONS.length);
        break;
      case 'ArrowLeft': case 'h': case 'p':
        e.preventDefault();
        openSection((state.section - 1 + SECTIONS.length) % SECTIONS.length);
        break;
    }
  }
});

function scrollCardIntoView(index) {
  const card = document.getElementById(`card-${index}`);
  if (card) card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ─────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────

renderHome();
