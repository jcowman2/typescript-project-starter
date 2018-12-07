[//]: # "TODO: Write new README"
[//]: # "TODO: Update/remove badges"

# typescript-project-starter

[![CircleCI](https://circleci.com/gh/jcowman2/typescript-project-starter.svg?style=svg)](https://circleci.com/gh/jcowman2/typescript-project-starter)
[![Coverage Status](https://coveralls.io/repos/github/jcowman2/typescript-project-starter/badge.svg?branch=master)](https://coveralls.io/github/jcowman2/typescript-project-starter?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


Starter for my TypeScript projects using the following technologies:
* **Prettier** and **TSlint** for linting
* **Rollup** for bundling
* **Mocha**, **Chai**, and **ts-node** for testing
* **CircleCI** for continuous integration
* **Commitizen** for structured commit messages
* **Visual Studio Code** for my development environment, with the following extensions installed:
    * **Prettier - Code formatter** by Esben Petersen
    * **TSLint** by egamma


## Usage

### Getting Started
1. Clone repository
2. `npm install`
3. Search the project for all items marked `TODO` and change them
    * `name`, `version`, and `repository` in `package.json` could not be marked, but should still be replaced
4. Create project on CircleCI
5. Create project on Coveralls, add repo token to CircleCI

### Committing
This project uses commitizen. Use `git cz` instead of `git commit` to create conventional-changelog-compliant commit messages.

### Distribution
`npm run build` uses Rollup to bundle the `src` directory into the following files:
* `dist/index.cjs.js`
* `dist/index.esm.js`
* `dist/index.umd.min.js`
* `dist/index.d.ts`