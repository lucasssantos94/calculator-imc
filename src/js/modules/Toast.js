import { DOMElements } from './DOMElements.js';
export class Toast {
  constructor() {
    this.dom = new DOMElements();
    this.dom.toast.addEventListener(
      'animationend',
      this.handleAnimationEnd.bind(this)
    );
  }

  show(message) {
    this.dom.toast.classList.add('show-toast');
    this.dom.toastMessage.innerHTML = message;
  }

  close() {
    this.dom.toast.classList.add('zoom-out');
  }
  handleAnimationEnd(event) {
    if (event.animationName === 'zoom-out') {
      this.dom.toast.classList.remove('show-toast', 'zoom-out');
    }
  }
}
