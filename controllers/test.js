var angular = require('angular');

module.exports = function(){
  
  var ext = {
    hello : "hello",
    world : "world"
  };

  return function(scope){
    angular.extend(scope, ext);
  };
};
