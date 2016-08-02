define([],function () {
  "use strict";
  var factory = function ($http, $timeout, $q) {
    function getHotCommodityBanner () {
      /* Spoof a network call using promises*/
      var deferred = $q.defer();
      var data = [];
      var url = "http://test.lbwan.com:18080/lbopen/channel/getAdvertisingList.json?channelId=37&callback=JSON_CALLBACK"
      $http.jsonp(url).success(function (response) {
        var resData = response.data.rows;
        //for(var key in resData){
        //  resData[key].image = 'http://test.lbwan.com/res/'+resData[key].image;
        //  data.push(resData[key].image)
        //}
        for(var key= 0 ;key <=2;key++){
          resData[key].image = 'http://test.lbwan.com/res/'+resData[key].image;
          data.push(resData[key].image)
        }
        deferred.resolve(data);
      }).error(function (error) {
        console.log(error);
      });
      return deferred.promise;
    }

    return {
      getHotCommodityBanner: getHotCommodityBanner
    };
  };
  factory.$inject = ['$http','$timeout', '$q'];
  return factory;
});
