(function () {
  'use strict';

  angular
    .module('djangoapp', [
      'djangoapp.config',
      'djangoapp.routes',
      'djangoapp.login'
      // 'djangoapp.layout'
    ]);

  angular
    .module('djangoapp.routes', ['ngRoute']);

  angular
    .module('djangoapp.config', []);

  angular
    .module('djangoapp')
    .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();
