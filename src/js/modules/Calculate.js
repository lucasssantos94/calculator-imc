class CalculatorImc {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
    this.weightCategories = {
      underweight: {
        title: 'Abaixo do peso',
        description:
          'Você está abaixo do peso ideal. É importante considerar uma dieta equilibrada e consultar um profissional de saúde para orientações personalizadas.',
        color: '#2B7FFF',
      },
      normal: {
        title: 'Peso normal',
        description:
          'Parabéns! Seu IMC está dentro da faixa saudável. Continue mantendo uma dieta equilibrada e um estilo de vida ativo.',
        color: '#43963C',
      },
      overweight: {
        title: 'Sobrepeso',
        description:
          'Você pode se beneficiar da perda de peso. Considere uma dieta balanceada e exercícios.',
        color: '#F0B100',
      },
      obesity: {
        title: 'Obesidade',
        description:
          'Seu IMC indica obesidade. Considere adotar hábitos saudáveis, como uma dieta equilibrada e exercícios regulares, para melhorar sua saúde.',
        color: '#FF6900',
      },
      obesity2: {
        title: 'Obesidade Grave',
        description:
          'Considere consultar um profissional de saúde para um plano de controle de peso.',
        color: '#FB2C36',
      },
      obesity3: {
        title: 'Obesidade Mórbida',
        description:
          'Considere consultar um profissional de saúde para um plano de controle de peso.',
        color: '#F20024',
      },
    };
  }

  static validateFields(height, weight) {
    if (!height || !weight) {
      throw new Error('Altura e peso são obrigatórios');
    }
    if (Number.isNaN(height) || Number.isNaN(weight)) {
      throw new Error('Altura e peso devem ser números');
    }
    if (height <= 0 || weight <= 0) {
      throw new Error('Altura e peso devem ser maiores que zero');
    }
  }

  calculate() {
    CalculatorImc.validateFields(this.height, this.weight);
    const result = this.weight / this.height ** 2;
    return result;
  }

  getCategory(valueImc) {
    if (valueImc < 18.5) {
      return this.weightCategories.underweight;
    }
    if (valueImc >= 18.5 && valueImc < 24.9) {
      return this.weightCategories.normal;
    }
    if (valueImc >= 25 && valueImc < 29.9) {
      return this.weightCategories.overweight;
    }
    if (valueImc >= 30 && valueImc < 34.9) {
      return this.weightCategories.obesity;
    }
    if (valueImc >= 35 && valueImc < 39.9) {
      return this.weightCategories.obesity2;
    }
    if (valueImc >= 40) {
      return this.weightCategories.obesity3;
    }
    return null;
  }
}

export default CalculatorImc;
