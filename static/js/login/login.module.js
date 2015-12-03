(function () {
  'use strict';

  angular
    .module('djangoapp.login', [
      'djangoapp.login.controllers',
      'djangoapp.login.services'
    ]);

  angular
    .module('djangoapp.login.controllers', []);

  angular
    .module('djangoapp.login.services', ['ngCookies']);
})();
