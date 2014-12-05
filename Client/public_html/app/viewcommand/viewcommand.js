'use strict';

var app = angular.module('myApp.viewcommand', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewcommand', {
            templateUrl: 'viewcommand/viewcommand.html',
            controller: 'ViewCommandCtrl'
        });
    }]);

app.controller('ViewCommandCtrl', ['$scope', function($scope) {
        $scope.types_food = [
            {'type': 'Boissons'},
            {'type': 'Entrées'},
            {'type': 'Viandes'},
            {'type': 'Poissons'},
            {'type': 'Pâtes'},
            {'type': 'Desserts'}
        ];
    }]);