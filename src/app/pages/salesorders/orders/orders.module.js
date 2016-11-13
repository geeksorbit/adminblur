(function () {
  'use strict';

  angular.module('BlurAdmin.pages.salesorders.orders', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('salesorders.orders', {
          url: '/orders',
          templateUrl: 'app/pages/salesorders/orders/orders.html',
          title: 'Orders',
          sidebarMeta: {
		//	icon: 'ion-android-mail',
            order: 100,
          },
        });
  }

})();