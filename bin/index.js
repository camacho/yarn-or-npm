#! /usr/bin/env node
'use strict';

var yarnOrNpm = require('../index');

// Execute the command
yarnOrNpm.spawn.sync(process.argv.slice(2), { stdio: 'inherit' });
