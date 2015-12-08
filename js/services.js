'use strict';

/* Services */

var angularServices = angular.module('angularServices', []);

angularServices.factory('posts', [function(){
  var o = {
    posts: [
      {author: 'user1', title: 'post 1', score: 5, date: 1},
      {author: 'user2', title: 'post 2', score: 2, date: 2},
      {author: 'user3', title: 'post 3', score: 15, date: 3},
      {author: 'user4', title: 'post 4', score: 9, date: 4},
      {author: 'user5', title: 'post 5', score: 4, date: 5},
      {author: 'user6', title: 'post 6', score: 0, date: 6}
    ]
  }
  return o;
}])
