const crossSpawn = require('cross-spawn');

const cache = require('./cache');

function hasYarn() {
  if (cache.cachedHasYarn !== undefined) return cache.cachedHasYarn;

  try {
    const cmd = crossSpawn.sync('yarn', ['--version']);
    const version = cmd.stdout && cmd.stdout.toString().trim();
    cache.cachedHasYarn = !!version;
  } catch (e) {
    cache.cachedHasYarn = false;
  }

  return cache.cachedHasYarn;
}

module.exports = {
  hasYarn,
};
