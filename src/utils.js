const fs = require('fs');
const path = require('path');
const crossSpawn = require('cross-spawn');

const spawn = (command, args) =>
  new Promise((resolve, reject) => {
    const child = crossSpawn(command, args, { stdio: 'inherit' });
    child.on('close', code => {
      if (code !== 0) {
        return reject();
      }

      return resolve();
    });
  });

const copyFile = (src, target) =>
  new Promise((resolve, reject) => {
    const cwd = process.cwd();
    const relativeTargetPath = path.relative(cwd, target);
    const dirname = path.dirname(relativeTargetPath);

    // check target folder existed or not, if not, create new one
    try {
      fs.accessSync(dirname, fs.constants.F_OK);
    } catch (err) {
      if (err && err.code === 'ENOENT') {
        fs.mkdirSync(dirname);
      }
    }

    fs.copyFile(src, relativeTargetPath, err => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });

const getPkgFile = () => path.resolve(process.cwd(), 'package.json');

const readPkgFile = () =>
  new Promise((resolve, reject) => {
    const pkgFile = getPkgFile();

    fs.readFile(pkgFile, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(data));
    });
  });

const writePkgFile = pkg =>
  new Promise((resolve, reject) => {
    const pkgFile = getPkgFile();
    const data = JSON.stringify(pkg, null, 2);
    fs.writeFile(pkgFile, data, 'utf8', err => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });

module.exports = {
  spawn,
  copyFile,
  readPkgFile,
  writePkgFile,
};
