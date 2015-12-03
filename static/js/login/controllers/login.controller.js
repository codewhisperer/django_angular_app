/**
* LoginController
* @namespace djangoapp.login.controllers
*/
(function () {
  'use strict';

  angular
    .module('djangoapp.login.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Login'];

  /**
  * @namespace LoginController
  */
  function LoginController($location, $scope, Login) {
    var vm = this;

    Login.userList().then(function(users) {
      vm.users = users;
    });

    /**
    * @name login
    * @desc Log the user in
    * @memberOf djangoapp.login.controllers.LoginController
    */
    function login() {
      Login.login(vm.email, vm.password);
    }

    vm.login = login;

    /**
    * @name register
    * @desc Try to register a new user
    * @param {string} email The email entered by the user
    * @param {string} password The password entered by the user
    * @param {string} username The username entered by the user
    * @returns {Promise}
    * @memberOf djangoapp.login.services.Login
    */
    function register(email, password, username) {
      Login.register(vm.email, vm.password, vm.username);
    }

    vm.register = register;


  }
})();
