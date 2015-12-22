'use strict';

var angularControllers = angular.module('angularControllers')

angularControllers.controller('PostsCtrl', [
  '$scope',
  'posts',
  'post',
  function($scope, posts, post){
    $scope.post = post;

    $scope.addComment = function(){
      if($scope.body === '') {return; }

      posts.addComment(post.id, {
        body: $scope.body,
        author: 'user',
        score: 0
      }).success(function(comment){
        $scope.post.comments.push(comment);
      });

      $scope.body='';
    };

    $scope.upVote = function(comment) {
      posts.upvoteComment(post, comment);
    };

    $scope.downVote = function(comment) {
      posts.downvoteComment(post, comment);
    };

  }
])
