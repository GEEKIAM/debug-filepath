# debug-filepath

thin wrapper around [visionmedia/debug](https://github.com/visionmedia/debug) module that automatically adds the file path relative to your project's root directory after namespace.

## Installation

```bash
$ npm install debug-filepath
```

## Usage

Example _**\<PROJECT_ROOT\>**/app.js_:
```js
const debug = require('debug-filepath')('namespace');

debug('log message');
```
=>
```bash
$ namespace::app.js log message +0ms
```

---

Example _**\<PROJECT_ROOT\>**/foo/bar/app.js_:
```js
const debug = require('debug-filepath')('namespace');

debug('log message');
```
=>
```bash
$ namespace::foo:bar:app.js log message +0ms
```

---

You can also omit `namespace` argument. In this case you will get just the file path

Example _**\<PROJECT_ROOT\>**/foo/bar/app.js_:
```js
const debug = require('debug-filepath')();

debug('log message');
```
=>
```bash
$ foo:bar:app.js log message +0ms
```

## Wildcards

Turn on all logs using `debug` module:

![all logs](https://cloud.githubusercontent.com/assets/6225592/20684194/8fef1b88-b5b7-11e6-9d8c-a1724c6286b3.png)

---

Show logs only from `worker` namespace:

![only from `worker` namespace](https://cloud.githubusercontent.com/assets/6225592/20684195/9007b3be-b5b7-11e6-99a6-569a04e1efa2.png)

---

Show logs only from files in [`baz`](https://github.com/GEEKIAM/debug-filepath/tree/master/example/baz) directory:

![only from files in `baz` directory](https://cloud.githubusercontent.com/assets/6225592/20684197/90184e0e-b5b7-11e6-98f7-96506ea8a27f.png)

---

Show logs only from [`worker-2.js`](https://github.com/GEEKIAM/debug-filepath/tree/master/example/baz/worker-2.js) file:

![only from `worker-2.js` file](https://cloud.githubusercontent.com/assets/6225592/20684196/9016897a-b5b7-11e6-88b1-e5920875fe8d.png)

---

Show logs only from [`worker-2.js`](https://github.com/GEEKIAM/debug-filepath/tree/master/example/baz/worker-2.js) and [`worker-1.js`](https://github.com/GEEKIAM/debug-filepath/tree/master/example/worker-1.js) files:

![only from `worker-2.js` and `worker-1.js` files](https://cloud.githubusercontent.com/assets/6225592/20684198/9018a660-b5b7-11e6-851c-84fdeffd3f4b.png)

## License

MIT License

Copyright (c) 2016 Anton Fedulov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.