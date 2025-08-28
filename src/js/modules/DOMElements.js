export class DOMElements {
  constructor() {
    this.formImc = document.forms['form-imc'];
    this.btnSwitchTheme = document.getElementById('switch-theme');
    this.btnCalculate = document.getElementById('btn-calculate');
    this.btnResetForm = document.getElementById('btn-reset');
    this.divResult = document.getElementById('calc-result');
    this.bmiResult = document.getElementById('bmi-result');
    this.bmiBadge = document.getElementById('bmi-badge');
    this.bmiDescription = document.getElementById('bmi-description');
    this.yearElement = document.getElementById('year');
  }

  get height() {
    return this.formImc.height;
  }

  get weight() {
    return this.formImc.weight;
  }
}
