(function () {
  'use strict';

  angular
    .module('djangoapp.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/login/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/login/login.html'
    }).when('/list', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/login/userList.html'
    }).otherwise('/');
  }
})();
