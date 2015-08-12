var q = require('q'); 
var defer = q.defer(); 

function attachTittle(name){
  return "DR. " + name;
}

defer.promise.then(attachTittle).then(console.log);
defer.resolve('MANHATTAN')
