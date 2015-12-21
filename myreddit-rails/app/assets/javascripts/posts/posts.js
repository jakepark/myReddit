var angularServices = angular.module('angularServices', []);

angularServices.factory('posts', [
  '$http',
  function($http){
  var o = {
    // posts: [
    //   {author: 'user1', title: 'post 1', score: 5, date: 1, comments: []},
    //   {author: 'user2', title: 'post 2', score: 2, date: 2, comments: []},
    //   {author: 'user3', title: 'post 3', score: 15, date: 3, comments: []},
    //   {author: 'user4', title: 'post 4', score: 9, date: 4, comments: []},
    //   {author: 'user5', title: 'post 5', score: 4, date: 5, comments: []},
    //   {author: 'user6', title: 'post 6', score: 0, date: 6, comments: []}
    // ]
  }

  o.getAll = function () {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };

  o.create = function(post) {
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  }

  return o;

}])
