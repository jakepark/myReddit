'use strict';

/* App Module */

var myreddit = angular.module('myreddit', [
  'ui.router',
  'templates',
  'angularControllers',
  'angularServices'
]);


myreddit
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        });

      $stateProvider
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: '/posts.html',
          controller: 'PostsCtrl'
        })

      $urlRouterProvider.otherwise('home');
    }
  ])
