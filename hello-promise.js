var q = require('q');
var defer = q.defer();

setTimeout(
      defer.resolve('RESOLVED!') 
      ,3000)
defer.promise.then(console.log)
