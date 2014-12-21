'use strict';


angular.module('myApp.command', ['ngRoute'])

.controller('CommandCtrl',['$scope',function($scope) {
        
        $scope.tables = [
            {id:"101",name:"Everest"},
            {id:"102",name:"Mont-Blanc"},
            {id:"103",name:"Kilimandjaro"}
        ];
        
        $scope.selectedTable = {value : $scope.tables[0]};
        
        $scope.cocktails = [
            {id:"201",name:"Grzaniec"},
            {id:"202",name:"Glögi"},
            {id:"203",name:"Gimlet"}
        ];
        
        $scope.selectedCocktail = {value:$scope.cocktails[0]};
        
        /* utiliser variables ci dessous pour effectuer enregistrement en bdd */
        $scope.sendCommand = function(){
            console.log($scope.selectedTable);
            console.log($scope.selectedCocktail);
        };
}]);
