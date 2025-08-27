// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
  // Configuração recomendada padrão
  js.configs.recommended,

  // Configurações globais do browser
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
  },

  // Suas regras personalizadas
  {
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
    },
  },

  // Ignorar arquivos
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'css/', '*.min.js'],
  },
];
