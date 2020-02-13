const crossSpawn = require('cross-spawn');

const { yarnOrNpm } = require('./decider');

function spawn(...args) {
  args.unshift(yarnOrNpm());
  return crossSpawn(...args);
}

function spawnSync(...args) {
  args.unshift(yarnOrNpm());
  return crossSpawn.sync(...args);
}

module.exports = {
  spawn,
  spawnSync,
};
