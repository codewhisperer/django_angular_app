
angular.module("djangoapp.login").directive('myNavbar', [
  'Login', function(Login) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        loggedIn: '@'
      },
      controller: function() {
        var vm = this;

        vm.logout = function() {
          Login.logout();
        }
      },
      bindToController: true,
      controllerAs: 'vm',
      templateUrl: "/static/js/login/myNavbar/myNavbar.html"
    };
  }
]);
