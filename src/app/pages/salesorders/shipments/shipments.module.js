(function () {
  'use strict';

  angular.module('BlurAdmin.pages.salesorders.shipments', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('salesorders.shipments', {
          url: '/shipments',
          templateUrl: 'app/pages/salesorders/shipments/shipments.html',
          title: 'Shipments',
          sidebarMeta: {
		//	icon: 'ion-android-mail',
            order: 300,
          },
        });
  }

})();