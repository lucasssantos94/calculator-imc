import CalculatorImc from './Calculate.js';

export class ImcCalculator {
  calculate(height, weight) {
    const calculator = new CalculatorImc(height, weight);
    const imc = calculator.calculate().toFixed(1);
    const category = calculator.getCategory(imc);

    return {
      value: imc,
      category: category,
    };
  }
}
