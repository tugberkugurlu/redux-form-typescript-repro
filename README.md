# Redgate React Starter Kit

React based SPA (Single-Page Application) starter kit which came out from experiences of a few product teams at Redgate. Main aim of this starter kit is to give you a base starter point for a [React](https://github.com/facebook/react) and [Redux](http://redux.js.org/) based SPA built with [TypeScript](https://www.typescriptlang.org/) and [Honeycomb](http://honeycomb.red-gate.com/) [Web Toolkit](http://honeycomb.red-gate.com/toolkit/) baked in.

Some of the other core libraries and technologies which this starter kit makes use of are as below:

 - [Webpack](https://webpack.github.io/)
 - [Babel](https://babeljs.io/)
 - [React Router](https://github.com/reactjs/react-router)
 - [Redux Form](http://redux-form.com/)
 - [Sass](http://sass-lang.com/)
 - [MochaJs](https://mochajs.org/)

## How to Get and Use This

You can start by cloning the latest version of Redgate React Starter Kit on your local machine by running:

```
$ git clone https://github.com/red-gate/redgate-react-starter-kit.git MyAwesomeApp
$ cd MyAwesomeApp
```

Now you can follow the explained steps below to get the starter kit running and then you can build your application on top of it :sparkles:

### Prerequisites

 - **Node.js v4.4.7** (see [download page](https://nodejs.org/en/download/) or directly download [x64 4.4.7 MSI](https://nodejs.org/dist/v4.4.7/node-v4.4.7-x64.msi)).
 - npm 3 (run `npm install npm@3 -g` to update npm)
 - Make sure that `npm` and `node` are on your PATH, and check you have the right versions with `node -v` and `npm -v`.
 - Visual Studio Code is the recommended code editor with a few extensions listed on the [Code Editor documenatation](./.docs/code-editor.md).

> :warning: If you have already executed `npm install` before upgrading to v3.\*, you need to clear the `node_modules` folder before executing `npm install` again with npm v3.\*. You can clear the `node_modules` folder through Git Bash by running `rm node_modules/ -r`.

### Running on Development Environment

Open a terminal (e.g. Powershell) in this Web folder, and run:

```bash
npm install
npm start
```
The app will be available by browsing to `http://localhost:3000`.

The development server makes use of [Webpack](https://webpack.github.io/) and [hot reloading](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack). So, you should (most of the time) see the changes reflecting on the browser instantly. Tests will also run automatically whenever a `.ts`, `.tsx` file is changed in `/src`. 

### Building for Production

Under this path, run the below command:

```bash
npm run build
```

This will produce the production build into `./dist` folder which you can put under a static file server.

> :information_source: Note that the static file server needs to honor html5Mode, which means that it should serve `index.html` for any request except for existing static file requests (e.g. `GET /images/1234` needs to server `index.html` file to let React router take care the rest).

## TypeScript

We make use of TypeScript within this stater kit and there is [a useful documentation](./.docs/typescript.md) which you should have a look at if this is your first time with TypeScript under a context of a project like this.

## Testing

In order to run the tests for this starter kit, execute the below commands under this path:

```bash
npm install
npm test
```

This will run the test against the files which end with `.test.ts` under `./src/` folder and it's subfolders.

In order to configure the test script, go to `package.json` and find the `scripts` array. Under `test` you will find a line which currently looks like below:

```
mocha-webpack \"src/**/*.test.js\" --webpack-config webpack.config.test.js
```

This can then be configured to as needed based on [mocha-webpack CLI arguments](https://github.com/zinserjan/mocha-webpack/blob/master/docs/installation/cli-usage.md).

## Watching files

We use [`npm-watch`](https://github.com/grncdr/npm-watch) to automatically run npm scripts when certain files change. [`concurrently`](`https://www.npmjs.com/package/concurrently`) is also used to enable the `watch` script to be run in parallel with other scripts.

To configure what files to watch, find the `watch` entry in `package.json`. Each entry must correspond to an entry in `scripts`. When `npm run watch` is called, all entries will be run.
