var crossSpawn = require('cross-spawn');

var cachedHasYarn;

function clearCache() {
  cachedHasYarn = undefined;
}

function hasYarn() {
  if (cachedHasYarn !== undefined) return cachedHasYarn;

  try {
    var cmd = crossSpawn.sync('yarn', ['--version'])
    var version = cmd.stdout && cmd.stdout.toString().trim();
    cachedHasYarn = !!version;
  } catch (e) {
    cachedHasYarn = false;
  }

  return cachedHasYarn;
}

function hasNpm() {
  return !hasYarn();
}

function yarnOrNpm() {
  return hasYarn() ? 'yarn' : 'npm'
}

function spawn() {
  var args = args = [].slice.call(arguments);
  args.unshift(yarnOrNpm());
  return crossSpawn.apply(undefined, args);
}

function spawnSync() {
  var args = args = [].slice.call(arguments);
  args.unshift(yarnOrNpm());
  return crossSpawn.sync.apply(crossSpawn, args);
}

yarnOrNpm.hasYarn = hasYarn;
yarnOrNpm.hasNpm = hasNpm;
yarnOrNpm.spawn = spawn;
yarnOrNpm.spawn.sync = spawnSync;
yarnOrNpm.clearCache = clearCache;

module.exports = yarnOrNpm;
