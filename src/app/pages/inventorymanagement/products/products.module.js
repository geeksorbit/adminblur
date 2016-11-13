/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.inventorymanagement.products', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('inventorymanagement.products', {
          url: '/products',
          templateUrl: 'app/pages/inventorymanagement/products/products.html',
          title: 'Products',
		  controller: 'ProductsCtrl',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
