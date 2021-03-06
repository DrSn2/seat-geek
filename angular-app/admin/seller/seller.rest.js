(function(angular) {
    'use strict';

    angular
    .module('app.services')
    .service('SellerRest', sellerRest);

    sellerRest.$inject = [
      '$http'
    ];

    function sellerRest($http) {

    var base_url = '/api/tickets';

    this.list = function() {
      return $http.get(base_url);
    };

    this.upload_url = function(){
      return $http.get(base_url + '/upload_url');
    }

    this.get_tickets = function(key) {
      return $http.get(base_url + '/:' + key + '/seller');
    };

    this.create = function(params) {
      return $http.post(base_url, params);
    };

    this.update = function(a_key, params) {
      return $http.put(base_url + '/:' + a_key, params);
    };

  }

})(window.angular);
