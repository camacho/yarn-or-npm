#! /usr/bin/env node
'use strict';

var spawn = require('cross-spawn');
var hasYarn = require('../index');

// Execute the command
spawn.sync(
  hasYarn() ? 'yarn' : 'npm', process.argv.slice(2), { stdio: 'inherit' }
);
