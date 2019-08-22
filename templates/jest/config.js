const config = {
  collectCoverageFrom: [
    '{src}/**/*.js',
    '!{src}/**/*.test.js',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  rootDir: '../',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: '__tests__/.*\\.test\\.js$',
};

module.exports = config;
