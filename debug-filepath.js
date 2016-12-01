const debug = require('debug');
const path = require('path');
const stackTrace = require('stack-trace');
const appRoot = require('app-root-path');

function debugWrapper (namespace) {
  const creatorFilepath = formatPath(stackTrace.get()[1].getFileName());

  return debug(`${namespace || ''}${namespace ? '::' : ''}${creatorFilepath}`);
}

function formatPath (filepath) {
  filepath = filepath.replace(appRoot, '');
  filepath = filepath.charAt(0) === path.sep ? filepath.substr(1) : filepath;
  filepath = filepath.split(path.sep).join(':');

  return filepath;
}

module.exports = debugWrapper;