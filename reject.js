var q = require('q');
var defer = q.defer();

function errFunc(error){
  console.log(error.message);
}
setTimeout(defer.reject,300,new Error('REJECTED!')) 
defer.promise.then(null,errFunc);

