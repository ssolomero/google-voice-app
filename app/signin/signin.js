'use strict';

angular.module('google-voice-app.signin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'SignInCtrl'
  });
}])

.controller('SignInCtrl', [function() {

}]);