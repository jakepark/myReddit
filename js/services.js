'use strict';

/* Services */

var angularServices = angular.module('angularServices');

angularServices.factory('posts', [function(){
  var o = {
    posts: []
  }
  return o;
}])
