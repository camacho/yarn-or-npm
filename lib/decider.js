const fs = require('fs');
const path = require('path');
const pkgDir = require('pkg-dir');

const cache = require('./cache');
const { hasNpm } = require('./npm');
const { hasYarn } = require('./yarn');

function yarnOrNpm() {
  if (cache.cachedClient !== undefined) return cache.cachedClient;

  const pkgRoot = pkgDir.sync();

  if (pkgRoot) {
    const pkgLockPath = path.join(pkgRoot, 'package-lock.json');
    const yarnLockPath = path.join(pkgRoot, 'yarn.lock');

    try {
      fs.statSync(yarnLockPath);
      cache.cachedClient = 'yarn';
      return cache.cachedClient;
    } catch (e) {}

    try {
      fs.statSync(pkgLockPath);
      cache.cachedClient = 'npm';
      return cache.cachedClient;
    } catch (e) {}
  }

  return hasYarn() ? 'yarn' : 'npm';
}

module.exports = {
  yarnOrNpm,
};
