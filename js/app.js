'use strict';

/* App Module */

var myReddit = angular.module('myReddit', [
  'ui.router',
  'angularControllers',
  'angularServices'
]);

myReddit.config([
  '$stateProvider',
  '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'index.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
