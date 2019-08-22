const config = {
  '*.js': ['prettier --write', 'yarn run lint:eslint --fix', 'git add'],
};

module.exports = config;
