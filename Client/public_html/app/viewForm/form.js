'use strict';

angular.module('myApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewForm', {
    templateUrl: 'viewForm/form.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$scope','$location', function($scope,$location) {
  $scope.redirect=function(path){
      $location.path(path);
      $location.replace();
  };
}]);
