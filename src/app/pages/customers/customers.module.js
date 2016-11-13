(function () {
  'use strict';

  angular.module('BlurAdmin.pages.customers', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('customers', {
          url: '/customers',
          templateUrl: 'app/pages/customers/customers.html',
          title: 'Customers',
		  controller: 'CustomersCtrl',
          sidebarMeta: {
			icon: 'ion-android-people',
            order: 300,
          },
        });
  }

})();