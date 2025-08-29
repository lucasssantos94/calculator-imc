import { DOMElements } from './DOMElements.js';
import { Toast } from './Toast.js';

export class UIManager {
  constructor() {
    this.dom = new DOMElements();
    this.toast = new Toast();
    this.cssClasses = {
      SHOW_RESULT: 'show',
    };
  }

  showResult({ value, category }) {
    this.fillResultFields(value, category);
    this.dom.divResult.classList.add(this.cssClasses.SHOW_RESULT);
    this.scrollToResult();
    this.toast.close();
  }

  hideResult() {
    this.dom.divResult.classList.remove(this.cssClasses.SHOW_RESULT);
    this.clearResultFields();
    this.toast.close();
  }

  showError(message) {
    this.toast.show(message);
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
