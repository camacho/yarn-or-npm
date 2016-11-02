# yarn-or-npm
Execute scripts with Yarn or npm

```sh
npm i --save-dev yarn-or-npm
```

## Module

```js
import yarnOrNpm, { spawn, hasYarn, hasNpm } from 'yarn-or-npm';

// String of `yarn` or `npm` returned
console.log(yarnOrNpm());

// Boolean values for hasYarn, hasNpm
console.log(hasYarn());

// Spawn yarn or npm command
spawn(['init']);

// Spawn sync option
spawn.sync(['init'], { stdio: 'inherit' });
```

Under the covers, there is a cached value being used for efficiency. This can be manually cleared:

```js
import yarnOrNpm from 'yarn-or-npm';
import { spawnSync } from 'child_process';

console.log(yarnOrNpm.hasYarn()); // false

spawnSync('npm', ['i', '-g', 'yarn'], { stdio: 'inherit' });

console.log(yarnOrNpm.hasYarn()); // false (cached)

yarnOrNpm.clearCache();
console.log(yarnOrNpm.hasYarn()); // true
```

## CLI

```sh
yarn-or-npm <command>
# Can also use `yon` shorthand
yon <command>
```

## Package

Modules with bin files can be called directly in `package.json` scripts:

```json
{
  "devDependencies": {
    ...
    "yarn-or-npm": "^1.0.0"
  },
  "scripts": {
    "compile": "babel src --out-dir dist",
    "lint": "eslint .",
    "prepublish": "yarn-or-npm run lint && yarn-or-npm run compile"
  }
}
```
