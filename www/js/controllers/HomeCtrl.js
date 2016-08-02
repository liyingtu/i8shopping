
define([], function () {
  'use strict';
  function ctrl($scope, HomeService, $ionicSlideBoxDelegate) {
    HomeService.getHotCommodityBanner().then(function (data) {
      if( !data || data.length === 0 ) return;
      $scope.banner = data;
      $ionicSlideBoxDelegate.$getByHandle("home-slide").update();
      $ionicSlideBoxDelegate.$getByHandle("home-slide").loop(true);
    });

    //$scope.$on('$ionicView.beforeEnter',function(){
    //  $ionicSlideBoxDelegate.$getByHandle("home-slide").start();
    //});
  }

  ctrl.$inject = ['$scope', 'HomeService', '$ionicSlideBoxDelegate'];
  return ctrl;
});

