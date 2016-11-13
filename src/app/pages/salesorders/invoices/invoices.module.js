(function () {
  'use strict';

  angular.module('BlurAdmin.pages.salesorders.invoices', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('salesorders.invoices', {
          url: '/invoices',
          templateUrl: 'app/pages/salesorders/invoices/invoices.html',
          title: 'Invoices',
          sidebarMeta: {
		//	icon: 'ion-android-notifications',
            order: 200,
          },
        });
  }

})();