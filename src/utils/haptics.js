const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new AudioCtx();
  return audioCtx;
}

function isSoundEnabled() {
  return window.__soundEnabled !== false;
}

function playTone(frequency, duration, type = 'sine', volume = 0.15) {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (_) {}
}

export const sounds = {
  check() {
    playTone(880, 0.08, 'sine', 0.12);
    setTimeout(() => playTone(1175, 0.12, 'sine', 0.12), 80);
  },

  uncheck() {
    playTone(660, 0.1, 'triangle', 0.08);
  },

  navigate() {
    playTone(523, 0.06, 'sine', 0.06);
  },

  tap() {
    playTone(1000, 0.03, 'sine', 0.04);
  },

  celebrate() {
    playTone(523, 0.08, 'sine', 0.1);
    setTimeout(() => playTone(659, 0.08, 'sine', 0.1), 100);
    setTimeout(() => playTone(784, 0.08, 'sine', 0.1), 200);
    setTimeout(() => playTone(1047, 0.15, 'sine', 0.12), 300);
  },

  swoosh() {
    if (!isSoundEnabled()) return;
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.15);
    } catch (_) {}
  }
};

export const haptics = {
  light() {
    if (navigator.vibrate) navigator.vibrate(10);
  },

  medium() {
    if (navigator.vibrate) navigator.vibrate(25);
  },

  heavy() {
    if (navigator.vibrate) navigator.vibrate(50);
  },

  success() {
    if (navigator.vibrate) navigator.vibrate([10, 50, 20]);
  },

  error() {
    if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
  },

  selection() {
    if (navigator.vibrate) navigator.vibrate(8);
  },

  pattern(pattern) {
    if (navigator.vibrate) navigator.vibrate(pattern);
  }
};

export function interact(soundName, hapticName = 'light') {
  if (sounds[soundName]) sounds[soundName]();
  if (haptics[hapticName]) haptics[hapticName]();
}
