const crossSpawn = require('cross-spawn');

const cache = require('./cache');

function hasNpm() {
  if (cache.cachedHasNPM !== undefined) return cache.cachedHasNPM;

  try {
    const cmd = crossSpawn.sync('npm', ['--version']);
    const version = cmd.stdout && cmd.stdout.toString().trim();
    cache.cachedHasNPM = !!version;
  } catch (e) {
    cache.cachedHasNPM = false;
  }

  return cache.cachedHasNPM;
}

module.exports = {
  hasNpm,
};
