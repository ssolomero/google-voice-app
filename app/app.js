'use strict';

// Declare app level module which depends on views, and core components
angular.module('google-voice-app', [
  'ngRoute',
  'google-voice-app.about',
  'google-voice-app.signin',
  'google-voice-app.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/about'});
}]);
