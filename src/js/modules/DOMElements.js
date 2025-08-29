export class DOMElements {
  constructor() {
    this.formImc = document.forms['form_calculator'];
    this.btnCalculate = document.getElementById('btn-calculate');
    this.btnResetForm = document.getElementById('btn-reset');
    this.resultImc = document.getElementById('bmi-result');
    this.divResult = document.getElementById('calc-result');
    this.badge = document.getElementById('bmi-badge');
    this.resultDescription = document.getElementById('bmi-description');
    this.btnSwitchTheme = document.getElementById('switch-theme');
    this.toast = document.getElementById('toast');
    this.toastMessage = document.getElementById('toast-message');
    this.toastClose = document.getElementById('toast-close');
    this.yearElement = document.getElementById('year');
  }

  get height() {
    return this.formImc.height;
  }

  get weight() {
    return this.formImc.weight;
  }
}
