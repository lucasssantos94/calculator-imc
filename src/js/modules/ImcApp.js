import { DOMElements } from './DOMElements.js';
import { ThemeManager } from './ThemeManager.js';
import { ImcCalculator } from './ImcCalculator.js';
import { UIManager } from './UIManager.js';
import { AccordionManager } from './AccordionManager.js';
import { Toast } from './Toast.js';

export class ImcApp {
  constructor() {
    this.dom = new DOMElements();
    this.themeManager = new ThemeManager();
    this.imcCalculator = new ImcCalculator();
    this.uiManager = new UIManager();
    this.accordionManager = new AccordionManager();
    this.toast = new Toast();
  }

  init() {
    this.setupEventListeners();
    this.themeManager.init();
    this.uiManager.setCurrentYear();
    this.uiManager.scrollToSection();
  }

  setupEventListeners() {
    // IMC calculation
    this.dom.btnCalculate.addEventListener('click', () => {
      this.handleCalculateImc();
    });

    // Form reset
    this.dom.btnResetForm.addEventListener('click', () => {
      this.handleResetForm();
    });

    // Theme switching
    this.dom.btnSwitchTheme.addEventListener('click', () => {
      this.themeManager.toggleTheme();
    });

    this.dom.btnSwitchTheme.addEventListener('mouseenter', () => {
      this.themeManager.updateTooltip();
    });

    // Accordion functionality
    document.addEventListener('click', (event) => {
      this.accordionManager.handleAccordionClick(event);
    });
    // Toast close
    this.dom.toastClose.addEventListener('click', () => {
      this.toast.close();
    });
  }

  handleCalculateImc() {
    try {
      const { height, weight } = this.dom.formImc;
      const result = this.imcCalculator.calculate(
        Number(height.value / 100),
        Number(weight.value)
      );

      this.uiManager.showResult(result);
    } catch (error) {
      this.uiManager.showError(error.message);
    }
  }

  handleResetForm() {
    this.dom.formImc.reset();
    this.uiManager.hideResult();
  }
}
