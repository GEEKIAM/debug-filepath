var debug = require('../../debug-filepath')('worker');

setInterval(function(){
  debug('doing some another work');
}, 1000);