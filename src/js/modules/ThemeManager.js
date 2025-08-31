import { DOMElements } from './DOMElements.js';
export class ThemeManager {
  constructor() {
    this.dom = new DOMElements();
    this.themes = {
      LIGHT: 'light',
      DARK: 'dark',
    };
    this.tooltips = {
      [this.themes.LIGHT]: 'Tema Escuro',
      [this.themes.DARK]: 'Tema Claro',
    };
  }

  init() {
    const savedTheme = this.getSavedTheme();
    this.applyTheme(savedTheme);
  }

  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme =
      currentTheme === this.themes.LIGHT ? this.themes.DARK : this.themes.LIGHT;

    this.applyTheme(newTheme);
  }

  updateTooltip() {
    const currentTheme = this.getCurrentTheme();
    const tooltipText = this.tooltips[currentTheme];
    this.dom.btnSwitchTheme.setAttribute('data-tooltip', tooltipText);
  }

  applyTheme(theme) {
    this.saveTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme');
  }

  getSavedTheme() {
    return localStorage.getItem('theme') || this.themes.DARK;
  }

  saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }
}
