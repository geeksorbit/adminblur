(function () {
  'use strict';

  angular.module('BlurAdmin.pages.salesorders', [
		'BlurAdmin.pages.salesorders.orders',
		'BlurAdmin.pages.salesorders.invoices',
		'BlurAdmin.pages.salesorders.shipments',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('salesorders', {
          url: '/salesorders',
         // templateUrl: 'app/pages/salesorders/salesorders.html',
		  template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Sales Orders',
          sidebarMeta: {
			icon: 'ion-ios-barcode-outline',
            order: 200,
          },
        });
  }

})();