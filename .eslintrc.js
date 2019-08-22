const config = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    es6: true,
  },
  globals: {},
  settings: {},
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['internals/**/*.js', 'client/**/stories.js'],
      },
    ],
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-else-return': 0,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
};

module.exports = config;
