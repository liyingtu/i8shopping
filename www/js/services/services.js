define(function (require) {
  'use strict';
  var services = angular.module('starter.services',[]);
    //services.factory('服务名',require('对应的文件地址'));
    services.factory('Chats',require('services/ChatsService'));
    services.factory('HomeService',require('services/HomeService'));
  return services;
});


