#! /usr/bin/env node
'use strict';

var spawnSync = require('child_process').spawnSync;
var npmPath = require('npm-path');
var hasYarn = require('../index');

// Make sure we set npm in the path
process.env[npmPath.PATH] = npmPath.get();

// Execute the command
spawnSync(
  hasYarn() ? 'yarn' : 'npm', process.argv.slice(2), { stdio: 'inherit' }
);
