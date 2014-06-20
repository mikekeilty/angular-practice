'use strict';

/* Controllers */

angular.module('WorldCupApp.controllers', [])
  .controller('matchesController', ['$scope', '$http', function($scope, $http) {
        $scope.nameFilter = null;
        var result = $http({
            method: 'GET',
            url: 'data_src/data.json'
        });

        result.success(function(result) {
           $scope.matches = result.data.group;
        });
  }]);
