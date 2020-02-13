const { clearCache } = require('./cache');
const { hasNpm } = require('./npm');
const { hasYarn } = require('./yarn');
const { yarnOrNpm } = require('./decider');
const { spawn, spawnSync } = require('./spawn');

yarnOrNpm.hasYarn = hasYarn;
yarnOrNpm.hasNpm = hasNpm;
yarnOrNpm.spawn = spawn;
yarnOrNpm.spawn.sync = spawnSync;
yarnOrNpm.clearCache = clearCache;

module.exports = yarnOrNpm;
