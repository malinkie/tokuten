var angular = require('angular'),
    testController = require('./controllers/test');

angular
  .module("tokuten", [])
  .controller("testController", ['$scope', testController()]);
