var q = require('q');
var defer = q.defer();

setTimeout(defer.resolve,3000,'RESOLVED!') 
defer.promise.then(console.log)
