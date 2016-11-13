(function () {
  'use strict';

  angular.module('BlurAdmin.pages.inventorymanagement', [
		'BlurAdmin.pages.inventorymanagement.products',
		'BlurAdmin.pages.inventorymanagement.variants',
	  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('inventorymanagement', {
          url: '/inventorymanagement',
		  //templateUrl: 'app/pages/inventorymanagement/inventorymanagement.html',
          template : '<ui-view></ui-view>',
		  abstract: true,
          title: 'Inventory',
          sidebarMeta: {
			icon: 'ion-ios-cart',
            order: 100,
          },
        });
  }

})();