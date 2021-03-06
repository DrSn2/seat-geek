(function(angular) {
  'use strict';

  angular
    .module('app')
    .config(routes);

  routes.$inject = ['$routeProvider', '$locationProvider'];

  function routes($routeProvider, $locationProvider) {

    $routeProvider
      .when('/main', {
        templateUrl: '/ng/templates/home.html',
        controller: 'EventCtrl',
        controllerAs: 'event',
      })

      .when('/deals/:event_key', {
        templateUrl: '/ng/templates/deals.html',
        controller: 'DealsCtrl',
        controllerAs: 'deals',
      })

      .when('/checkout/:ticket_key', {
        templateUrl: '/ng/templates/checkout.html',
        controller: 'TicketCtrl',
        controllerAs: 'ticket',
      })

      .when('/signup', {
        templateUrl: '/ng/templates/signup.html',
        controller: 'AccountCtrl',
        controllerAs: 'acct',
      })

      .when('/login', {
        templateUrl: '/ng/templates/login.html',
        controller: 'Login',
        controllerAs: 'login',
      })

      .otherwise({
        redirectTo: '/main',
      });

    $locationProvider.html5Mode(false);
  }

})(window.angular);
