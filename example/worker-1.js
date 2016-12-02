var debug = require('../debug-filepath')('worker');

setInterval(function(){
  debug('doing some work');
}, 3000);