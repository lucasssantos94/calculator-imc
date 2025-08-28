import { DOMElements } from './DOMElements.js';
export class UIManager {
  constructor() {
    this.dom = new DOMElements();
    this.cssClasses = {
      SHOW_RESULT: 'show',
    };
  }

  showResult({ value, category }) {
    this.fillResultFields(value, category);
    this.dom.divResult.classList.add(this.cssClasses.SHOW_RESULT);
    this.scrollToResult();
  }

  hideResult() {
    this.dom.divResult.classList.remove(this.cssClasses.SHOW_RESULT);
    this.clearResultFields();
  }

  showError(message) {
    alert(message); // TODO: Replace with better error handling
  }

  setCurrentYear() {
    this.dom.yearElement.textContent = new Date().getFullYear();
  }

  fillResultFields(value, category) {
    this.dom.resultImc.innerHTML = value;
    this.dom.badge.style.backgroundColor = category.color;
    this.dom.badge.innerHTML = category.title;
    this.dom.resultDescription.innerHTML = category.description;
  }

  clearResultFields() {
    this.dom.resultImc.innerHTML = '';
  }

  scrollToResult() {
    this.dom.divResult.scrollIntoView({
      block: 'center',
    });
  }
}
