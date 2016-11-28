const debug = require('debug');
const path = require('path');
const stackTrace = require('stack-trace');
const appRoot = require('app-root-path');

function debugWrapper (namespace) {
  const creatorFilepath = formatPath(stackTrace.get()[1].getFileName());
  return debug(`${namespace}:${creatorFilepath}`);
}

function formatPath (filepath) {
  return filepath.replace(appRoot, '').split(path.sep).join(':');
}

module.exports = debugWrapper;