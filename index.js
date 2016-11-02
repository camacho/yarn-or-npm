var spawn = require('cross-spawn');

// Check if Yarn is installed globally
function checkYarn() {
  try {
    var exec = spawn.sync('yarn', ['--version'])
    var version = exec.stdout && exec.stdout.toString().trim()
    return !!version;
  } catch (e) {
    return false;
  }
}

module.exports = checkYarn;
