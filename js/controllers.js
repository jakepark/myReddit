'use strict';

/* Controllers */

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

        $scope.posts.push({
          author: "testuser",
          date: 1,
          title: $scope.title,
          link: $scope.link,
          score: 0,

          comments: [
            {author: 'alpha', body: 'comment1!', score: 0},
            {author: 'bravo', body: 'comment2?', score: 0}
          ]

        });
        $scope.title='';
        $scope.link='';
      }

      $scope.upVote = function(post) {
        debugger
        post.score++;
      }

      $scope.downVote = function(post) {
        post.score--;
      }
    }

  ]);

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
  }
])
