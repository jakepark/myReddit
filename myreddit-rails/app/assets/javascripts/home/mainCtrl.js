'use strict';

var angularControllers = angular.module('angularControllers')

angularControllers.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {
      $scope.button_count = 0;
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

angularControllers.directive("addnotesbutton", function(){
  return {
    restrict: "E",
    template: "<button addbuttons>Click to add buttons</button>"
  }
});

angularControllers.directive("addbuttons", function($compile){
  return function(scope, element, attrs){
    element.bind("click", function(){
      
      scope.button_count++;
      angular.element(document.getElementById('space-for-buttons'))
        .append($compile("<div><button class='btn btn-default' data-alert="+scope.button_count+">Show alert #"+scope.button_count+"</button></div>")(scope));
    });
  };
});
