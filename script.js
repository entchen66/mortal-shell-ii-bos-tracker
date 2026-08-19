/**
 * Mortal Shell II - Official Boss Tracker Engine
 * Real Screenshots Only - Zero AI Images - Dark SVG Emblems for Non-Screenshot Bosses.
 */

// =========================================================================
// TRANSLATIONS (UI)
// =========================================================================
const UI_TRANSLATIONS = {
  de: {
    pageTitle: "Mortal Shell II - Boss Tracker",
    badgeText: "Official Boss Tracker (Game8 & RPS Guide)",
    musicOn: "⚔️ Musik: An",
    musicOff: "🔇 Musik: Aus",
    statBosses: "Bosse Besiegt",
    statBeacons: "Leuchtfeuer Erreicht",
    statTar: "Gesammelter Teer",
    statProgress: "Gesamtfortschritt",
    resolveLabel: "ENTENTSCHLOSSENHEIT / VERHÄRTUNG",
    searchPlaceholder: "Boss, Leuchtfeuer, Ort oder Taktik suchen...",
    filterAllRegions: "Alle Kapitel / Zonen",
    filterAllTypes: "Alle Boss-Typen",
    filterAllStatus: "Alle Status",
    statusSlain: "Nur Besiegte",
    statusUnvanquished: "Nur Unbesiegte",
    regionCompleted: "Kapitel Abgeschlossen",
    vanquishedBanner: "FEIND BESIEGT",
    inspect: "Codex",
    closestBeaconLabel: "Nächstes Leuchtfeuer",
    locationLabel: "Fundort / Arena",
    recommendedShell: "Empfohlene Hülle / Taktik",
    reward: "Beute & Teer",
    strategyTitle: "Kampftaktik & Konter",
    loreTitle: "Beschreibung & Zitat",
    markSlain: "Als Besiegt Markieren",
    markUnvanquished: "Als Ungeschlagen Markieren",
    quickNavTitle: "Kapitel-Navigation",
    noResults: "Keine Bosse gefunden, die den Kriterien entsprechen.",
    credits: "Mortal Shell II & alle Artworks sind Eigentum von Cold Symmetry, Playstack, Rock Paper Shotgun & Game8."
  },
  en: {
    pageTitle: "Mortal Shell II - Boss Tracker",
    badgeText: "Official Boss Tracker (Game8 & RPS Guide)",
    musicOn: "⚔️ Music: On",
    musicOff: "🔇 Music: Off",
    statBosses: "Bosses Vanquished",
    statBeacons: "Beacons Reached",
    statTar: "Tar Accumulated",
    statProgress: "Total Completion",
    resolveLabel: "RESOLVE / HARDEN PROGRESS",
    searchPlaceholder: "Search boss, beacon, location, or tactic...",
    filterAllRegions: "All Chapters / Zones",
    filterAllTypes: "All Boss Types",
    filterAllStatus: "All Status",
    statusSlain: "Vanquished Only",
    statusUnvanquished: "Living Only",
    regionCompleted: "Chapter Cleared",
    vanquishedBanner: "FOE VANQUISHED",
    inspect: "Codex",
    closestBeaconLabel: "Closest Beacon",
    locationLabel: "Location / Arena",
    recommendedShell: "Recommended Shell / Synergy",
    reward: "Loot & Tar",
    strategyTitle: "Combat Tactics & Counters",
    loreTitle: "Description & Quote",
    markSlain: "Mark as Vanquished",
    markUnvanquished: "Mark as Unvanquished",
    quickNavTitle: "Fast Travel",
    noResults: "No bosses found matching your criteria.",
    credits: "Mortal Shell II & all artworks belong to Cold Symmetry, Playstack, Rock Paper Shotgun & Game8."
  }
};

// =========================================================================
// APPLICATION STATE
// =========================================================================
let currentLang = localStorage.getItem("ms2_lang") || "de";
let musicPlaying = localStorage.getItem("ms2_music_state") === "playing";
let slainBosses = new Set(JSON.parse(localStorage.getItem("ms2_slain_v3") || "[]"));
let collapsedRegions = new Set(JSON.parse(localStorage.getItem("ms2_collapsed_v3") || "[]"));

let searchQuery = "";
let selectedRegionFilter = "all";
let selectedTypeFilter = "all";
let selectedStatusFilter = "all";

// =========================================================================
// PROCEDURAL POIGNANT DARK SOULSLIKE SOUNDTRACK (LUTE & CATHEDRAL PAD)
// =========================================================================
let audioCtx = null;
let ambientMasterGain = null;
let ambientHpFilter = null;
let ambientNodes = [];
let melodicSequenceTimer = null;
let padIntervalTimer = null;

function initSoundtrackEngine() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

// Iconic Melodic Soulslike Theme in D Minor (Frequencies in Hz)
// D3=146.83, F3=174.61, G3=196.00, A3=220.00, Bb3=233.08, C4=261.63, C#4=277.18, D4=293.66, E4=329.63, F4=349.23, G4=392.00, A4=440.00, Bb4=466.16, C5=523.25
const SOULSLIKE_MOTIF = [
  // Phrase 1 (The Foundling's Awakening)
  { note: 293.66, dur: 1.1, vel: 0.16 }, // D4
  { note: 349.23, dur: 0.9, vel: 0.18 }, // F4
  { note: 440.00, dur: 1.6, vel: 0.22 }, // A4
  { note: 392.00, dur: 1.2, vel: 0.17 }, // G4
  { note: 349.23, dur: 0.9, vel: 0.16 }, // F4
  { note: 329.63, dur: 1.0, vel: 0.15 }, // E4
  { note: 293.66, dur: 1.8, vel: 0.20 }, // D4
  { note: 277.18, dur: 1.4, vel: 0.16 }, // C#4 (haunting tension)

  // Phrase 2 (The Fall of Fallgrim)
  { note: 293.66, dur: 1.0, vel: 0.17 }, // D4
  { note: 220.00, dur: 1.2, vel: 0.15 }, // A3
  { note: 349.23, dur: 1.0, vel: 0.18 }, // F4
  { note: 329.63, dur: 1.2, vel: 0.16 }, // E4
  { note: 293.66, dur: 0.9, vel: 0.15 }, // D4
  { note: 261.63, dur: 0.9, vel: 0.14 }, // C4
  { note: 233.08, dur: 1.2, vel: 0.16 }, // Bb3
  { note: 220.00, dur: 2.2, vel: 0.20 }, // A3 (melancholic pause)

  // Phrase 3 (Ascension Theme)
  { note: 349.23, dur: 1.0, vel: 0.18 }, // F4
  { note: 440.00, dur: 1.1, vel: 0.21 }, // A4
  { note: 523.25, dur: 1.8, vel: 0.24 }, // C5
  { note: 466.16, dur: 1.1, vel: 0.19 }, // Bb4
  { note: 440.00, dur: 1.2, vel: 0.18 }, // A4
  { note: 392.00, dur: 1.0, vel: 0.16 }, // G4
  { note: 349.23, dur: 1.2, vel: 0.17 }, // F4
  { note: 329.63, dur: 1.8, vel: 0.18 }, // E4

  // Phrase 4 (Cadence of the Penitent)
  { note: 392.00, dur: 1.0, vel: 0.16 }, // G4
  { note: 349.23, dur: 1.1, vel: 0.17 }, // F4
  { note: 329.63, dur: 1.2, vel: 0.16 }, // E4
  { note: 277.18, dur: 1.5, vel: 0.19 }, // C#4
  { note: 293.66, dur: 3.5, vel: 0.25 }  // D4 (Resolution)
];

// Pluck synthesis for Dark Lute / Classical Harp
function playLuteNote(freq, duration, velocity) {
  if (!musicPlaying || !audioCtx || !ambientMasterGain) return;

  const now = audioCtx.currentTime;

  // Main Pluck Osc (Sine + subtle Triangle body)
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain1 = audioCtx.createGain();
  const gain2 = audioCtx.createGain();
  const noteFilter = audioCtx.createBiquadFilter();

  osc1.type = "sine";
  osc1.frequency.setValueAtTime(freq, now);

  osc2.type = "triangle";
  osc2.frequency.setValueAtTime(freq * 2, now); // Upper chime overtone

  // Filter shaping (Crisp plucked attack, warm wooden decay)
  noteFilter.type = "lowpass";
  noteFilter.frequency.setValueAtTime(2400, now);
  noteFilter.frequency.exponentialRampToValueAtTime(650, now + duration);

  // Pluck Amplitude Envelope
  gain1.gain.setValueAtTime(0.0001, now);
  gain1.gain.linearRampToValueAtTime(velocity, now + 0.015);
  gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.5);

  gain2.gain.setValueAtTime(0.0001, now);
  gain2.gain.linearRampToValueAtTime(velocity * 0.35, now + 0.012);
  gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.6);

  osc1.connect(gain1);
  osc2.connect(gain2);
  gain1.connect(noteFilter);
  gain2.connect(noteFilter);
  noteFilter.connect(ambientMasterGain);

  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + duration + 0.6);
  osc2.stop(now + duration + 0.6);
}

// Distant Cathedral Bell Chime
function playCathedralChime(freq) {
  if (!musicPlaying || !audioCtx || !ambientMasterGain) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(freq * 1.5, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.045, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

  osc.connect(gain);
  gain.connect(ambientMasterGain);
  osc.start(now);
  osc.stop(now + 4.6);
}

function startAmbientSoundtrack() {
  try {
    initSoundtrackEngine();
    if (!audioCtx) return;

    stopAmbientSoundtrack();

    // Highpass Filter at 140Hz to strictly eliminate all muddy/boomy bass
    ambientHpFilter = audioCtx.createBiquadFilter();
    ambientHpFilter.type = "highpass";
    ambientHpFilter.frequency.setValueAtTime(140, audioCtx.currentTime);

    ambientMasterGain = audioCtx.createGain();
    ambientMasterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    ambientMasterGain.gain.exponentialRampToValueAtTime(0.38, audioCtx.currentTime + 2.5);

    ambientMasterGain.connect(ambientHpFilter);
    ambientHpFilter.connect(audioCtx.destination);

    // 1. Ethereal Cathedral Strings / Pad in D Minor (Clean Mid-Range, No Heavy Bass)
    const padFrequencies = [220.00, 293.66, 349.23, 440.00]; // A3, D4, F4, A4
    padFrequencies.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq + (Math.random() - 0.5) * 0.5, audioCtx.currentTime);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(freq, audioCtx.currentTime);
      filter.Q.setValueAtTime(2.0, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.012, audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ambientMasterGain);
      osc.start();

      ambientNodes.push(osc);
    });

    // 2. Continuous Melodic Motif Loop (Iconic & Poignant Soulslike Theme)
    let noteIdx = 0;
    function triggerNextNote() {
      if (!musicPlaying) return;

      const n = SOULSLIKE_MOTIF[noteIdx];
      playLuteNote(n.note, n.dur, n.vel);

      // Play soft bell chime on key phrase starts
      if (noteIdx === 0 || noteIdx === 8 || noteIdx === 16 || noteIdx === 24) {
        playCathedralChime(n.note);
      }

      noteIdx = (noteIdx + 1) % SOULSLIKE_MOTIF.length;
      const nextDelay = (n.dur * 1000) * 0.92;
      melodicSequenceTimer = setTimeout(triggerNextNote, nextDelay);
    }

    triggerNextNote();
  } catch (err) {
    console.warn("Soundtrack synthesis warning:", err);
  }
}

function stopAmbientSoundtrack() {
  if (melodicSequenceTimer) {
    clearTimeout(melodicSequenceTimer);
    melodicSequenceTimer = null;
  }
  if (padIntervalTimer) {
    clearTimeout(padIntervalTimer);
    padIntervalTimer = null;
  }
  if (ambientMasterGain && audioCtx) {
    try {
      ambientMasterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.0);
      setTimeout(() => {
        ambientNodes.forEach((node) => {
          try {
            node.stop();
            node.disconnect();
          } catch (e) {}
        });
        ambientNodes = [];
      }, 1100);
    } catch (e) {}
  }
}

function toggleSoundtrack() {
  musicPlaying = !musicPlaying;
  localStorage.setItem("ms2_music_state", musicPlaying ? "playing" : "stopped");

  if (musicPlaying) {
    startAmbientSoundtrack();
  } else {
    stopAmbientSoundtrack();
  }
  updateMusicButton();
}

function updateMusicButton() {
  const btn = document.getElementById("btn-music-toggle");
  if (!btn) return;
  const t = UI_TRANSLATIONS[currentLang];
  btn.innerHTML = musicPlaying ? t.musicOn : t.musicOff;
  btn.classList.toggle("playing", musicPlaying);
}

// =========================================================================
// BACKGROUND PARTICLES CANVAS (Bonfire Embers)
// =========================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const numParticles = 40;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.5 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.4 ? 38 : 5
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = height + 8;
        p.x = Math.random() * width;
      }

      ctx.fillStyle = `hsla(${p.hue}, 90%, 55%, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// =========================================================================
// STATE PERSISTENCE & LANGUAGE TOGGLE
// =========================================================================
function saveState() {
  localStorage.setItem("ms2_lang", currentLang);
  localStorage.setItem("ms2_slain_v3", JSON.stringify(Array.from(slainBosses)));
  localStorage.setItem("ms2_collapsed_v3", JSON.stringify(Array.from(collapsedRegions)));
}

function setLanguage(lang) {
  currentLang = lang;
  saveState();
  updateStaticTexts();
  populateFilterOptions();
  renderTracker();
  updateStats();
}

function toggleBossSlain(bossId, event) {
  if (event) event.stopPropagation();

  const isSlain = slainBosses.has(bossId);
  const boss = MORTAL_SHELL_BOSSES.find((b) => b.id === bossId);

  if (isSlain) {
    slainBosses.delete(bossId);
  } else {
    slainBosses.add(bossId);
    triggerVictoryBanner(boss);
  }

  saveState();
  renderTracker();
  updateStats();
  updateModalSlainButton(bossId);
}

function toggleRegionCollapse(regionKey) {
  if (collapsedRegions.has(regionKey)) {
    collapsedRegions.delete(regionKey);
  } else {
    collapsedRegions.add(regionKey);
  }
  saveState();
  renderTracker();
}

// =========================================================================
// CINEMATIC VICTORY BANNER
// =========================================================================
function triggerVictoryBanner(boss) {
  const overlay = document.getElementById("victory-banner-overlay");
  const mainText = document.getElementById("victory-banner-main");
  const subText = document.getElementById("victory-banner-sub");
  const t = UI_TRANSLATIONS[currentLang];

  if (!overlay || !boss) return;

  mainText.textContent = t.vanquishedBanner;
  subText.textContent = `#${boss.order} ${currentLang === "de" ? boss.nameDE : boss.name}`;

  overlay.classList.remove("show-banner");
  void overlay.offsetWidth;
  overlay.classList.add("show-banner");
}

// =========================================================================
// STATS & RESOLVE CALCULATION
// =========================================================================
function updateStats() {
  const totalBosses = MORTAL_SHELL_BOSSES.length;
  const countSlain = slainBosses.size;
  const percent = totalBosses > 0 ? Math.round((countSlain / totalBosses) * 100) : 0;

  let totalTarValue = 0;
  const visitedBeacons = new Set();

  MORTAL_SHELL_BOSSES.forEach((b) => {
    if (slainBosses.has(b.id)) {
      visitedBeacons.add(b.closestBeacon);
      const match = (b.tarReward || "").match(/([\d,]+)\s*(Tar|Gloom)/i);
      if (match) {
        totalTarValue += parseInt(match[1].replace(/,/g, ""), 10);
      }
    }
  });

  document.getElementById("stat-bosses-val").textContent = `${countSlain} / ${totalBosses}`;
  document.getElementById("stat-glands-val").textContent = `${visitedBeacons.size} / 25`;
  document.getElementById("stat-tar-val").textContent = `${totalTarValue.toLocaleString()} ⛯`;
  document.getElementById("stat-progress-val").textContent = `${percent}%`;

  const fillEl = document.getElementById("resolve-progress-fill");
  if (fillEl) {
    fillEl.style.width = `${percent}%`;
  }
}

// =========================================================================
// DYNAMIC FILTERING & SEARCH
// =========================================================================
function getFilteredBosses() {
  return MORTAL_SHELL_BOSSES.filter((boss) => {
    const isSlain = slainBosses.has(boss.id);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = boss.name.toLowerCase().includes(q) || boss.nameDE.toLowerCase().includes(q);
      const matchTitle = boss.title.toLowerCase().includes(q) || boss.titleDE.toLowerCase().includes(q);
      const matchBeacon = boss.closestBeacon.toLowerCase().includes(q) || boss.closestBeaconDE.toLowerCase().includes(q);
      const matchLocation = boss.location.toLowerCase().includes(q) || boss.locationDE.toLowerCase().includes(q);
      const matchShell = boss.recommendedShell.toLowerCase().includes(q) || boss.recommendedShellDE.toLowerCase().includes(q);
      const matchWeakness = (currentLang === "de" ? boss.weaknessesDE : boss.weaknesses).some((w) => w.toLowerCase().includes(q));

      if (!matchName && !matchTitle && !matchBeacon && !matchLocation && !matchShell && !matchWeakness) {
        return false;
      }
    }

    if (selectedRegionFilter !== "all" && boss.region !== selectedRegionFilter) {
      return false;
    }

    if (selectedTypeFilter !== "all" && boss.type !== selectedTypeFilter) {
      return false;
    }

    if (selectedStatusFilter === "slain" && !isSlain) return false;
    if (selectedStatusFilter === "unvanquished" && isSlain) return false;

    return true;
  });
}

// =========================================================================
// RENDER TRACKER UI
// =========================================================================
function renderTracker() {
  const container = document.getElementById("tracker-container");
  if (!container) return;

  const t = UI_TRANSLATIONS[currentLang];
  const filteredList = getFilteredBosses();

  if (filteredList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted); font-family: var(--font-heading); font-size: 16px;">
        <p>🪓 ${t.noResults}</p>
      </div>
    `;
    return;
  }

  const regionOrder = Object.keys(REGIONS_METADATA);
  const grouped = {};

  regionOrder.forEach((r) => {
    grouped[r] = [];
  });

  filteredList.forEach((boss) => {
    if (!grouped[boss.region]) {
      grouped[boss.region] = [];
    }
    grouped[boss.region].push(boss);
  });

  let html = "";

  regionOrder.forEach((regionKey) => {
    const bossesInRegion = grouped[regionKey];
    if (!bossesInRegion || bossesInRegion.length === 0) return;

    const meta = REGIONS_METADATA[regionKey] || {};
    const regionName = currentLang === "de" ? meta.nameDE : meta.nameEN;
    const regionDesc = currentLang === "de" ? meta.descDE : meta.descEN;
    const isCollapsed = collapsedRegions.has(regionKey);

    const allBossesInThisRegion = MORTAL_SHELL_BOSSES.filter((b) => b.region === regionKey);
    const slainInThisRegion = allBossesInThisRegion.filter((b) => slainBosses.has(b.id)).length;
    const isAllCleared = allBossesInThisRegion.length > 0 && slainInThisRegion === allBossesInThisRegion.length;

    html += `
      <section class="region-section ${isCollapsed ? "collapsed" : ""} ${isAllCleared ? "region-completed" : ""}" id="region-${encodeURIComponent(regionKey)}">
        <div class="region-header" onclick="toggleRegionCollapse('${regionKey}')">
          <div class="region-header-left">
            <div class="region-sigil" style="color: ${meta.sigilColor || "#d97706"};">${meta.icon || "⚔️"}</div>
            <div class="region-title-block">
              <div class="region-title">
                <span>${regionName}</span>
                <span class="region-completed-badge">${t.regionCompleted}</span>
              </div>
              <div class="region-desc">${regionDesc}</div>
            </div>
          </div>
          <div class="region-header-right">
            <div class="region-progress-badge ${isAllCleared ? "all-cleared" : ""}">
              ${slainInThisRegion} / ${allBossesInThisRegion.length}
            </div>
            <div class="region-toggle-icon">▼</div>
          </div>
        </div>
        <div class="region-body">
          <div class="boss-grid">
            ${bossesInRegion.map((boss) => renderBossCard(boss, t)).join("")}
          </div>
        </div>
      </section>
    `;
  });

  container.innerHTML = html;
  renderQuickNav();
}

function renderBossCard(boss, t) {
  const isSlain = slainBosses.has(boss.id);
  const bossName = currentLang === "de" ? boss.nameDE : boss.name;
  const bossType = currentLang === "de" ? boss.typeDE : boss.type;
  const bossBeacon = currentLang === "de" ? boss.closestBeaconDE : boss.closestBeacon;
  const bossShell = currentLang === "de" ? boss.recommendedShellDE : boss.recommendedShell;

  // Render real image if available, else dark vector SVG symbol
  let thumbContent = "";
  if (boss.image) {
    thumbContent = `<img class="boss-thumb-img" src="${boss.image}" alt="${bossName}" loading="lazy">`;
  } else {
    thumbContent = boss.symbolSvg || `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:28px;">⚔️</div>`;
  }

  return `
    <div class="boss-card ${isSlain ? "slain" : ""}" data-id="${boss.id}" onclick="openBossCodex('${boss.id}')">
      <div class="boss-thumb-wrap">
        <span class="boss-order-badge">#${boss.order}</span>
        ${thumbContent}
      </div>

      <div class="boss-info-wrap">
        <div class="boss-card-top">
          <div class="boss-title-col">
            <span class="boss-type-pill">${bossType}</span>
            <h3 class="boss-name" title="${bossName}">${boss.order}. ${bossName}</h3>
            <div class="boss-sublocation" title="${bossBeacon}">🔥 ${bossBeacon}</div>
          </div>
          <div class="boss-check-btn" onclick="toggleBossSlain('${boss.id}', event)" title="${isSlain ? t.markUnvanquished : t.markSlain}">
            ${isSlain ? "✓" : ""}
          </div>
        </div>

        <div class="boss-card-bottom">
          <span class="boss-shell-badge" title="${bossShell}">🛡️ ${bossShell}</span>
          <span class="codex-link-badge">📜 ${t.inspect}</span>
        </div>
      </div>
    </div>
  `;
}

// =========================================================================
// BOSS CODEX MODAL
// =========================================================================
let currentModalBossId = null;

function openBossCodex(bossId) {
  const boss = MORTAL_SHELL_BOSSES.find((b) => b.id === bossId);
  if (!boss) return;

  currentModalBossId = bossId;
  const t = UI_TRANSLATIONS[currentLang];

  const bossName = currentLang === "de" ? boss.nameDE : boss.name;
  const bossTitle = currentLang === "de" ? boss.titleDE : boss.title;
  const bossType = currentLang === "de" ? boss.typeDE : boss.type;
  const bossBeacon = currentLang === "de" ? boss.closestBeaconDE : boss.closestBeacon;
  const bossLocation = currentLang === "de" ? boss.locationDE : boss.location;
  const bossShell = currentLang === "de" ? boss.recommendedShellDE : boss.recommendedShell;
  const bossTar = currentLang === "de" ? boss.tarRewardDE : boss.tarReward;
  const bossStrategy = currentLang === "de" ? boss.strategy.de : boss.strategy.en;
  const bossQuote = currentLang === "de" ? boss.quoteDE : boss.quote;
  const weaknesses = (currentLang === "de" ? boss.weaknessesDE : boss.weaknesses).join(" • ");

  document.getElementById("modal-type").textContent = `#${boss.order} • ${bossType}`;
  document.getElementById("modal-title").textContent = bossName;
  document.getElementById("modal-epithet").textContent = bossTitle;
  document.getElementById("modal-quote").textContent = `"${bossQuote}"`;

  const portraitWrap = document.querySelector(".codex-portrait-wrap");
  if (portraitWrap) {
    if (boss.image) {
      portraitWrap.innerHTML = `<img id="modal-portrait" class="codex-portrait-img" src="${boss.image}" alt="${bossName}">`;
    } else {
      portraitWrap.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">${boss.symbolSvg}</div>`;
    }
  }

  document.getElementById("modal-location").textContent = bossBeacon;
  document.getElementById("modal-shell").textContent = bossShell;
  document.getElementById("modal-gland").textContent = bossLocation;
  document.getElementById("modal-reward").textContent = bossTar;
  document.getElementById("modal-weakness").textContent = weaknesses;

  document.getElementById("modal-lore").textContent = bossLocation;
  document.getElementById("modal-strategy").textContent = bossStrategy;

  updateModalSlainButton(bossId);

  const backdrop = document.getElementById("codex-modal-backdrop");
  backdrop.classList.add("active");
}

function updateModalSlainButton(bossId) {
  if (currentModalBossId !== bossId) return;
  const btn = document.getElementById("modal-slain-btn");
  if (!btn) return;

  const t = UI_TRANSLATIONS[currentLang];
  const isSlain = slainBosses.has(bossId);

  btn.innerHTML = isSlain ? `✓ ${t.markUnvanquished}` : `⚔️ ${t.markSlain}`;
  btn.style.background = isSlain ? "#334155" : "var(--color-blood)";
  btn.style.borderColor = isSlain ? "#475569" : "#ef4444";
}

function toggleModalBossSlain() {
  if (currentModalBossId) {
    toggleBossSlain(currentModalBossId);
  }
}

function closeBossCodex(e) {
  if (e && e.target !== e.currentTarget && !e.target.classList.contains("modal-close-btn")) {
    return;
  }
  const backdrop = document.getElementById("codex-modal-backdrop");
  backdrop.classList.remove("active");
  currentModalBossId = null;
}

// =========================================================================
// QUICK NAVIGATION (FAB)
// =========================================================================
function toggleQuickNavDrawer(e) {
  if (e) e.stopPropagation();
  const drawer = document.getElementById("quick-nav-drawer");
  if (!drawer) return;
  drawer.classList.toggle("open");
}

function renderQuickNav() {
  const list = document.getElementById("quick-nav-list");
  if (!list) return;

  const regionOrder = Object.keys(REGIONS_METADATA);
  let html = "";

  regionOrder.forEach((regionKey) => {
    const meta = REGIONS_METADATA[regionKey] || {};
    const regionName = currentLang === "de" ? meta.nameDE : meta.nameEN;
    const bosses = MORTAL_SHELL_BOSSES.filter((b) => b.region === regionKey);
    const slainCount = bosses.filter((b) => slainBosses.has(b.id)).length;

    html += `
      <a href="#region-${encodeURIComponent(regionKey)}" class="quick-nav-item" onclick="closeQuickNav()">
        <span>${meta.icon || "⚔️"} ${regionName}</span>
        <span class="quick-nav-badge">${slainCount}/${bosses.length}</span>
      </a>
    `;
  });

  list.innerHTML = html;
}

function closeQuickNav() {
  const drawer = document.getElementById("quick-nav-drawer");
  if (drawer) drawer.classList.remove("open");
}

// =========================================================================
// STATIC TEXTS & FILTERS POPULATION
// =========================================================================
function updateStaticTexts() {
  const t = UI_TRANSLATIONS[currentLang];

  document.title = t.pageTitle;
  document.getElementById("game-badge-text").textContent = t.badgeText;
  document.getElementById("stat-bosses-lbl").textContent = t.statBosses;
  document.getElementById("stat-glands-lbl").textContent = t.statBeacons;
  document.getElementById("stat-tar-lbl").textContent = t.statTar;
  document.getElementById("stat-progress-lbl").textContent = t.statProgress;
  document.getElementById("resolve-meter-lbl").textContent = t.resolveLabel;

  document.getElementById("search-input").placeholder = t.searchPlaceholder;
  document.getElementById("quick-nav-header-title").textContent = t.quickNavTitle;
  document.getElementById("footer-credits-text").textContent = t.credits;

  document.getElementById("btn-lang-de").classList.toggle("active", currentLang === "de");
  document.getElementById("btn-lang-en").classList.toggle("active", currentLang === "en");

  updateMusicButton();
}

function populateFilterOptions() {
  const t = UI_TRANSLATIONS[currentLang];

  const regionSelect = document.getElementById("filter-region");
  regionSelect.innerHTML = `<option value="all">${t.filterAllRegions}</option>` +
    Object.keys(REGIONS_METADATA).map((r) => {
      const name = currentLang === "de" ? REGIONS_METADATA[r].nameDE : REGIONS_METADATA[r].nameEN;
      return `<option value="${r}">${name}</option>`;
    }).join("");
  regionSelect.value = selectedRegionFilter;

  const typeSelect = document.getElementById("filter-type");
  const types = ["Mandatory Boss", "Major Gate Boss", "Beacon Boss", "Dungeon Miniboss", "Optional Boss", "Final Boss", "Secret Encounter"];
  const typesDE = ["Hauptboss", "Haupt-Tor-Boss", "Leuchtfeuer-Boss", "Verlies-Miniboss", "Optionaler Boss", "Endboss", "Geheime Begegnung"];

  typeSelect.innerHTML = `<option value="all">${t.filterAllTypes}</option>` +
    types.map((type, idx) => {
      const label = currentLang === "de" ? typesDE[idx] : type;
      return `<option value="${type}">${label}</option>`;
    }).join("");
  typeSelect.value = selectedTypeFilter;

  const statusSelect = document.getElementById("filter-status");
  statusSelect.innerHTML = `
    <option value="all">${t.filterAllStatus}</option>
    <option value="unvanquished">${t.statusUnvanquished}</option>
    <option value="slain">${t.statusSlain}</option>
  `;
  statusSelect.value = selectedStatusFilter;
}

// =========================================================================
// INITIALIZATION
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();

  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderTracker();
  });

  document.getElementById("filter-region").addEventListener("change", (e) => {
    selectedRegionFilter = e.target.value;
    renderTracker();
  });
  document.getElementById("filter-type").addEventListener("change", (e) => {
    selectedTypeFilter = e.target.value;
    renderTracker();
  });
  document.getElementById("filter-status").addEventListener("change", (e) => {
    selectedStatusFilter = e.target.value;
    renderTracker();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#quick-nav-container")) {
      closeQuickNav();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBossCodex();
      closeQuickNav();
    }
  });

  updateStaticTexts();
  populateFilterOptions();
  renderTracker();
  updateStats();

  if (musicPlaying) {
    const resumeOnInteraction = () => {
      if (musicPlaying) startAmbientSoundtrack();
      document.removeEventListener("click", resumeOnInteraction);
    };
    document.addEventListener("click", resumeOnInteraction, { once: true });
  }
});
