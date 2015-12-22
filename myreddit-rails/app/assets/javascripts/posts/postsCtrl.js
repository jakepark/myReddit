'use strict';

var angularControllers = angular.module('angularControllers')

angularControllers.controller('PostsCtrl', [
  '$scope',
  'posts',
  'post',
  function($scope, posts, post){
    $scope.post = post;

    $scope.addComment = function(){
      if($scope.body === '') {return ;}

      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        score: 0
      });

      $scope.body='';
    }

    $scope.upVote = function(comment) {
      comment.score++;
    }

    $scope.downVote = function(comment) {
      comment.score--;
    }

  }
])
