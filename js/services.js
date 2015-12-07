'use strict';

/* Services */

var angularServices = angular.module('angularServices', []);

angularServices.factory('posts', [function(){
  var o = {
    posts: [
      {title: 'post 1', score: 5},
      {title: 'post 2', score: 2},
      {title: 'post 3', score: 15},
      {title: 'post 4', score: 9},
      {title: 'post 5', score: 4},
      {title: 'post 6', score: 0}
    ]
  }
  return o;
}])
