const path = require('path');
const { configFolder, configFiles, devDependencies } = require('./constants');
const { spawn, copyFile, readPkgFile, writePkgFile } = require('./utils');

const checkEnvironments = () => {
  console.log('check environments...');
};

const installConfigs = () => {
  console.log('Installing configs...');
  return Promise.all(
    configFiles.map(file => {
      const [src, target] = Array.isArray(file) ? file : [file, file];
      return copyFile(path.resolve(configFolder, src), target);
    }),
  );
};

const install = (dependencies, isDev) => {
  const command = 'yarnpkg';
  const args = ['add', isDev && '--dev']
    .filter(value => !!value)
    .concat(dependencies);

  return spawn(command, args);
};

const installDevDependencies = () => {
  console.log('Installing devDependencies...');
  return install(devDependencies, true);
};

const addScriptsToPkg = () => {
  console.log('add scripts to package.json...');
  return readPkgFile()
    .then(pkg =>
      Object.assign(pkg, {
        scripts: {
          ...pkg.scripts,
          test:
            'NODE_ENV=test jest --config ./jest/config.js --passWithNoTests',
          'test:coverage': 'yarn run test --coverage',
          'test:watch': 'yarn run test --watch',
          'lint:eslint': 'eslint --ignore-path .gitignore',
        },
      }),
    )
    .then(pkg => writePkgFile(pkg));
};

const newbie = () =>
  Promise.resolve()
    .then(() => checkEnvironments())
    .then(() => installConfigs())
    .then(() => installDevDependencies())
    .then(() => addScriptsToPkg());

module.exports = newbie;
