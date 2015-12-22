'use strict';

var angularControllers = angular.module('angularControllers', [])

angularControllers.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {

      $scope.posts = posts.posts

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
        posts.upvote(post);
      }

      $scope.downVote = function(post) {
        posts.downvote(post);
      }
    }

  ]);
