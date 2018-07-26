# boilerplate-node

**Boilerplate for NodeJS projects**

- Implements custom Gulp tasks
  - ES6 babel transcompilation
  - Code-style checks
  - Supports easy writing of additional custom tasks
- Implements testing FW
- Preconfigured to be used with VSCode IDE

## Usage

- To build and execute the application run:

```
$ npm start
```

- To test the application execute:

```
$ npm test
```

- To build for production run:

```
npm run-script production
```


## Code structure

All JS source code should be located inside the `./src` directory expecting to be transcompiled (if neeed) into the `./dist` directory. Code is allowed to use all available `babel/babel-preset-esnext` features ...

## Gulp tasks

### Preconfigured tasks

- Codestyle check (test)

  Checks JS code for code-style errors using JSCS and ESLint

- Distribution directory clear (build)

  Clears remains of previous builds

- Babel transcompile into distribution directory (build, watch)

  Transcompiles all JS source files from `./src` directory into the `./dist` directory using `babel/babel-preset-esnext`

### Custom tasks

Custom tasks are to be placed in `./tasks` directory and should each export a function taking as it's parameter an instance of `gulp` and returning and object (or array of objects) of the following structure:
```
{ test: string|string[], build: string|string[], watch: string|string[] }
```
... where `test`, `build` and `publish` properties contain a name (or array of names) of task(s) defined within the function, and the `watch` property contains a matching pattern (or an array of matching patterns) to watch for changes causing execution of defined tasks (`test` and `build` only; `publish` needs to be called directly).

Example:
```js
(gulp) => {
  // Define task(s)
  gulp.task('my-test-task', ...);
  gulp.task('my-build-task', ...);
  gulp.task('my-publish-task', ...);
  // Return registered tasks
  return {
    test: 'my-test-task',
    build: ['my-build-task'],
    publish: ['my-publish-task'],
    watch: ['./src/*.js']
  };
}
```

All tasks registered in this way will be executable by running on of the following commands:
```
$ gulp test
$ gulp build
$ gulp publish
$ gulp watch
```

## Tests

Tests are to be placed in `./tests` directory and are to be written as [Mocha](https://mochajs.org/#getting-started) tests.

All tests can be executed by running:
```
> gulp test
``` 

or will be executed on code change if running a watcher task:

```
> gulp watch
```

## Server

To quickly serve up the contents of the `./dist` directory, you can start up an HTTP server by running

```
> gulp server
```

... and opening `http://localhost:3000` in your browser.
