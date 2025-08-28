// import CalculatorImc from './Calculate.js';

// const formImc = document.forms['form_calculator'];
// const { height, weight } = formImc;
// const btnCalculate = document.getElementById('btn-calculate');
// const btnResetForm = document.getElementById('btn-reset');
// const resultImc = document.getElementById('result-imc');
// const divResult = document.getElementById('result');
// const badge = document.getElementById('badge-result');
// const resultDescription = document.getElementById('result-description');
// const btnSwitchTheme = document.getElementById('switch-theme');
// const yearElement = document.getElementById('year');

// // Save theme preference (light or dark)
// const saveThemePreference = (theme) => {
//   localStorage.setItem('theme', theme);
//   document.documentElement.setAttribute('data-theme', theme);
// };

// btnSwitchTheme.addEventListener('click', () => {
//   const currentTheme = document.documentElement.getAttribute('data-theme');
//   const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//   saveThemePreference(newTheme);
// });

// // Load saved theme preference on page load
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme') || 'dark';
//   saveThemePreference(savedTheme);
// });

// // tooltip for theme switch button
// btnSwitchTheme.addEventListener('mouseenter', () => {
//   const currentTheme = document.documentElement.getAttribute('data-theme');
//   btnSwitchTheme.setAttribute(
//     'data-tooltip',
//     currentTheme === 'light' ? 'Tema Escuro 🧛🏻‍♂️' : 'Tema Claro 😎'
//   );
// });

// // Set current year in footer
// document.getElementById('year').textContent = new Date().getFullYear();
// const fillFields = (valueImc, category) => {
//   divResult.classList.add('show');
//   resultImc.innerHTML = valueImc;
//   badge.style.backgroundColor = category.color;
//   badge.innerHTML = category.title;
//   resultDescription.innerHTML = category.description;
// };
// const calculateImc = () => {
//   try {
//     const calculator = new CalculatorImc(
//       Number(height.value / 100),
//       Number(weight.value)
//     );
//     const imc = calculator.calculate().toFixed(1);
//     const weigthCategory = calculator.getCategory(imc);

//     fillFields(imc, weigthCategory);
//     divResult.scrollIntoView();
//   } catch (error) {
//     alert(error.message);
//   }
// };
// const resetForm = () => {
//   formImc.reset();
//   divResult.classList.remove('show');
//   resultImc.innerHTML = '';
// };

// btnCalculate.addEventListener('click', calculateImc);
// btnResetForm.addEventListener('click', resetForm);

// // accordion
// document.addEventListener('click', (event) => {
//   const details = event.target.closest('details');

//   if (details) {
//     document.querySelectorAll('details').forEach((detail) => {
//       if (detail !== details && detail.open) {
//         detail.removeAttribute('open');
//       }
//     });
//   }
// });

import { ImcApp } from './modules/ImcApp.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = new ImcApp();
  app.init();
});
