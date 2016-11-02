var spawnSync = require('child_process').execSync;

// Check if Yarn is installed globally
function checkYarn() {
  try {
    spawnSync('npm list --depth=1 --global yarn', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = checkYarn;
