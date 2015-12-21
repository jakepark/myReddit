'use strict';

var angularControllers = angular.module('angularControllers', [])

angularControllers.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {

      $scope.posts = posts.posts
      // $scope.posts = [
      //   {title: 'post 1', score: 5},
      //   {title: 'post 2', score: 2},
      //   {title: 'post 3', score: 15},
      //   {title: 'post 4', score: 9},
      //   {title: 'post 5', score: 4}
      // ]

      $scope.addPost = function(){

        if (!$scope.title || $scope.title == '') { return ;}
        posts.create({
          title: $scope.title,
          link: $scope.link,
        })
        $scope.title='';
        $scope.link='';
      }

      $scope.upVote = function(post) {
        post.score++;
      }

      $scope.downVote = function(post) {
        post.score--;
      }
    }

  ]);
