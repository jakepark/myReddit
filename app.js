
angular.module('myReddit', [])
  .controller('MainCtrl', [
    '$scope',
    function($scope) {
      $scope.test = 'Test String';

      $scope.posts = [
        {title: 'post 1', score: 5},
        {title: 'post 2', score: 2},
        {title: 'post 3', score: 15},
        {title: 'post 4', score: 9},
        {title: 'post 5', score: 4}
      ]

      $scope.addPost = function(){
        if (!$scope.title || $scope.title == '') { return ;}
        $scope.posts.push({title: $scope.title, score: 0});
        $scope.title='';
      }

      $scope.upVote = function(post) {
        post.score++;
      }

      $scope.downVote = function(post) {
        post.score--;
      }
    }


  ]);
