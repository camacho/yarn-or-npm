# yarn-or-npm
Execute scripts with Yarn or npm

```sh
npm i --save-dev yarn-or-npm
```

## Module

```js
import hasYarn from 'yarn-or-npm';

console.log(hasYarn());
```

## CLI

```sh
yarnOrNpm init
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
    "prepublish": "yarnOrNpm run lint && yarnOrNpm run compile"
  }
}
```
