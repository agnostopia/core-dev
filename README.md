# Core Dev Configuration (opinionated)

## What does it include?

- Basic [`.gitignore`](https://git-scm.com/docs/gitignore) and [`.editorconfig`](https://editorconfig.org/) files
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) with suppport to [TypeScript](https://www.typescriptlang.org/) thanks to [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) + [XO preset](https://github.com/xojs/eslint-config-xo-typescript)
- Packaging `tsconfig.json` files for dev/test and packing with [@pika/pack](https://github.com/pikapkg/pack)
- [optional] Pre-commit validation configurations for [Husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged)
- [optional] Testing configuration for [AVA](https://github.com/avajs/ava) + [nyc](https://github.com/istanbuljs/nyc) reports

**powered by [pnpm](https://pnpm.js.org/)**

## Basics

Install this package

``` zsh
pnpm i -D @agnostopia/core-dev
```

Copy `.gitignore` and `.editorconfig` files from `node_modules/@agnostopia/core-dev/configs` folder.

##  Format and linting

Install dependencies

``` zsh
pnpm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-xo eslint-config-xo-typescript eslint-plugin-prettier prettier typescript
```

Then add the files:

`.eslintrc.js` or copy from `node_modules/@agnostopia/core-dev/configs` folder.

``` js
module.exports = require("@agnostopia/core-dev").eslint;
```


`.prettierrc.js` or copy from `node_modules/@agnostopia/core-dev/configs` folder.

``` js
module.exports = require("@agnostopia/core-dev").prettier;
```

## TypeScript config

Easily extends basic tsconfig files. Or copy from `node_modules/@agnostopia/core-dev/configs` folder.

use `dev.json` for development purpose

``` json
{
    "extends": "./node_modules/@agnostopia/core-dev/tsconfigs/dev.json"
}
```

Or `pack.json` to use with @pika/pack with [TypeScript package](https://github.com/pikapkg/builders/tree/master/packages/plugin-ts-standard-pkg/)

``` json
{
    "extends": "./node_modules/@agnostopia/core-dev/tsconfigs/pack.json",
    "include": [
        "./src/**/*.ts"
    ]
}
```


## Husky & lint staged

Install dependencies

``` zsh
pnpm i -D husky lint-staged
```

Then add the files:

`.huskyrc.js` or copy from `node_modules/@agnostopia/core-dev/configs` folder.

``` js
module.exports = require("@agnostopia/core-dev").husky;
```

`lint-staged.config.js` or copy from `node_modules/@agnostopia/core-dev/configs` folder.

``` js
module.exports = require("@agnostopia/core-dev").lintStaged;
```

## AVA & nyc

Install dependencies

``` zsh
pnpm i -D ava esm nyc ts-node
```

Then add the files:

`ava.config.js` or copy from `node_modules/@agnostopia/core-dev/configs` folder.

``` js
module.exports = require("@agnostopia/core-dev").ava;
```

`nyc.config.js` or copy from `node_modules/@agnostopia/core-dev/configs` folder.

``` js
module.exports = require("@agnostopia/core-dev").nyc;
```

Finally, add Test and Test Coverage scripts to `package.json` scripts.

``` json
{
    "scripts": {
        "test": "ava -t | tnyan",
        "test-cov": "nyc ava"
    }
}
```
