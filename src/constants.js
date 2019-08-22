const path = require('path');

const configFolder = path.resolve(__dirname, '..', 'templates');

const configFiles = [
  'jest/config.js',
  ['.eslintrc.json.js', '.eslintrc.js'],
  '.gitignore',
  '.huskyrc.js',
  '.prettierrc.js',
  '.yarnrc',
  'babel.config.js',
  'lint-staged.config.js',
];

const devDependencies = [
  '@babel/core',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/preset-env',
  '@babel/preset-react',
  'babel-eslint',
  'babel-jest',
  'babel-plugin-module-resolver',

  'eslint',
  'eslint-config-airbnb',
  'eslint-config-prettier',
  'eslint-import-resolver-babel-module',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',

  'husky',
  'jest',
  'lint-staged',
  'prettier',
];

module.exports = {
  configFolder,
  configFiles,
  devDependencies,
};
