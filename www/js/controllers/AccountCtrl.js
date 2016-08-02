
define([], function () {
  'use strict';
  function ctrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }

  ctrl.$inject = ['$scope'];
  return ctrl;
});

