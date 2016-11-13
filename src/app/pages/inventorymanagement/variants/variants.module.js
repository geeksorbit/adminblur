/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.inventorymanagement.variants', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('inventorymanagement.variants', {
          url: '/variants',
          templateUrl: 'app/pages/inventorymanagement/variants/variants.html',
          title: 'Variants',
		  controller: 'VariantsCtrl',
          sidebarMeta: {
            order: 400,
          },
        });
  }

})();
