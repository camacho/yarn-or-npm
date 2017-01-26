#! /usr/bin/env node
'use strict';

var yarnOrNpm = require('../index');

// Execute the command
try {
  const { status } = yarnOrNpm.spawn.sync(
    process.argv.slice(2), { stdio: 'inherit' }
  );
  process.exit(status);
} catch (err) {
  console.log(err);
  process.exit(1);
}
