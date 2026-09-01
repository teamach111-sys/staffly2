const THEMES = ['dup0', 'dup1', 'dup2', 'dup3', 'dup4'];
const DEFAULT_THEME = 'dup4';
const STORAGE_KEY = 'staffly-theme';

function readUrlTheme() {
  const params = new URLSearchParams(window.location.search);
  const t = params.get('theme');
  return THEMES.includes(t) ? t : null;
}

function getTheme() {
  const fromUrl = readUrlTheme();
  if (fromUrl) {
    try { localStorage.setItem(STORAGE_KEY, fromUrl); } catch (e) {}
    return fromUrl;
  }
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  return THEMES.includes(saved) ? saved : DEFAULT_THEME;
}

function injectStyle(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.stafflyTheme = 'true';
  document.head.appendChild(link);
}

export function applyTheme() {
  const theme = getTheme();
  document.documentElement.setAttribute('data-theme', theme);
  if (theme !== DEFAULT_THEME) {
    injectStyle(`/themes/palette-${theme}.css`);
  }
  return theme;
}
