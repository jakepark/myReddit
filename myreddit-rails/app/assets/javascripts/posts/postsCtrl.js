'use strict';

var angularControllers = angular.module('angularControllers')

angularControllers.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];

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
