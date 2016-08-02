
define([], function () {
  'use strict';
  function ctrl($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }
  ctrl.$inject = ['$scope', '$stateParams', 'Chats'];
  return ctrl;
});
