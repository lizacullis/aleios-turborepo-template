const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['only-warn', '@typescript-eslint', 'prettier'],
  env: {
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/', 'cdk.out/'],
  // overrides: [
  //   {
  //     files: ['*.js?(x)', '*.ts?(x)'],
  //     rules: {
  //       quotes: ['error', 'single'],
  //       'comma-style': ['error', 'last'],
  //       'arrow-parens': ['error', 'as-needed'],
  //     },
  //   },
  // ],
  rules: {
    quotes: ['error', 'single'],
    'comma-style': ['error', 'last'],
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': 'error',
  },
};
